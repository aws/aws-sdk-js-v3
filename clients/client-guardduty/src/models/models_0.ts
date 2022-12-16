// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { GuardDutyServiceException as __BaseException } from "./GuardDutyServiceException";

export interface AcceptAdministratorInvitationRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The account ID of the GuardDuty administrator account whose invitation you're accepting.</p>
   */
  AdministratorId: string | undefined;

  /**
   * <p>The value that is used to validate the administrator account to the member account.</p>
   */
  InvitationId: string | undefined;
}

export interface AcceptAdministratorInvitationResponse {}

/**
 * <p>A bad request exception object.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message.</p>
   */
  Message?: string;

  /**
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
 * <p>An internal server error exception object.</p>
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  /**
   * <p>The error message.</p>
   */
  Message?: string;

  /**
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

export interface AcceptInvitationRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The account ID of the GuardDuty administrator account whose invitation you're accepting.</p>
   */
  MasterId: string | undefined;

  /**
   * <p>The value that is used to validate the administrator account to the member account.</p>
   */
  InvitationId: string | undefined;
}

export interface AcceptInvitationResponse {}

/**
 * <p>Contains information on the current access control policies for the bucket.</p>
 */
export interface AccessControlList {
  /**
   * <p>A value that indicates whether public read access for the bucket is enabled through an
   *       Access Control List (ACL).</p>
   */
  AllowsPublicReadAccess?: boolean;

  /**
   * <p>A value that indicates whether public write access for the bucket is enabled through an
   *       Access Control List (ACL).</p>
   */
  AllowsPublicWriteAccess?: boolean;
}

/**
 * <p>Contains information about the access keys.</p>
 */
export interface AccessKeyDetails {
  /**
   * <p>The access key ID of the user.</p>
   */
  AccessKeyId?: string;

  /**
   * <p>The principal ID of the user.</p>
   */
  PrincipalId?: string;

  /**
   * <p>The name of the user.</p>
   */
  UserName?: string;

  /**
   * <p>The type of the user.</p>
   */
  UserType?: string;
}

/**
 * <p>Contains information about the account.</p>
 */
export interface AccountDetail {
  /**
   * <p>The member account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The email address of the member account.</p>
   */
  Email: string | undefined;
}

/**
 * <p>Contains information about which data sources are enabled for the GuardDuty member account.</p>
 */
export interface DataSourceFreeTrial {
  /**
   * <p>A value that specifies the number of days left to use each enabled data source.</p>
   */
  FreeTrialDaysRemaining?: number;
}

/**
 * <p>Provides details about the Kubernetes resources when it is enabled as a data source.</p>
 */
export interface KubernetesDataSourceFreeTrial {
  /**
   * <p>Describes whether Kubernetes audit logs are enabled as a data source.</p>
   */
  AuditLogs?: DataSourceFreeTrial;
}

/**
 * <p>Provides details about Malware Protection when it is enabled as a data source.</p>
 */
export interface MalwareProtectionDataSourceFreeTrial {
  /**
   * <p>Describes whether Malware Protection for EC2 instances with findings is enabled as a data source.</p>
   */
  ScanEc2InstanceWithFindings?: DataSourceFreeTrial;
}

/**
 * <p>Contains information about which data sources are enabled for the GuardDuty member account.</p>
 */
export interface DataSourcesFreeTrial {
  /**
   * <p>Describes whether any Amazon Web Services CloudTrail management event logs are enabled as data sources.</p>
   */
  CloudTrail?: DataSourceFreeTrial;

  /**
   * <p>Describes whether any DNS logs are enabled as data sources.</p>
   */
  DnsLogs?: DataSourceFreeTrial;

  /**
   * <p>Describes whether any VPC Flow logs are enabled as data sources.</p>
   */
  FlowLogs?: DataSourceFreeTrial;

  /**
   * <p>Describes whether any S3 data event logs are enabled as data sources.</p>
   */
  S3Logs?: DataSourceFreeTrial;

  /**
   * <p>Describes whether any Kubernetes logs are enabled as data sources.</p>
   */
  Kubernetes?: KubernetesDataSourceFreeTrial;

  /**
   * <p>Describes whether Malware Protection is enabled as a data source.</p>
   */
  MalwareProtection?: MalwareProtectionDataSourceFreeTrial;
}

/**
 * <p>Provides details of the GuardDuty member account that uses a free trial service.</p>
 */
export interface AccountFreeTrialInfo {
  /**
   * <p>The account identifier of the GuardDuty member account.</p>
   */
  AccountId?: string;

  /**
   * <p>Describes the data source enabled for the GuardDuty member account.</p>
   */
  DataSources?: DataSourcesFreeTrial;
}

/**
 * <p>Contains information on how the bucker owner's S3 Block Public Access settings are being
 *       applied to the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">S3 Block Public
 *         Access</a> for more information. </p>
 */
export interface BlockPublicAccess {
  /**
   * <p>Indicates if S3 Block Public Access is set to <code>IgnorePublicAcls</code>.</p>
   */
  IgnorePublicAcls?: boolean;

  /**
   * <p>Indicates if S3 Block Public Access is set to <code>RestrictPublicBuckets</code>.</p>
   */
  RestrictPublicBuckets?: boolean;

  /**
   * <p>Indicates if S3 Block Public Access is set to <code>BlockPublicAcls</code>.</p>
   */
  BlockPublicAcls?: boolean;

  /**
   * <p>Indicates if S3 Block Public Access is set to <code>BlockPublicPolicy</code>.</p>
   */
  BlockPublicPolicy?: boolean;
}

/**
 * <p>Contains information about the account level permissions on the S3 bucket.</p>
 */
export interface AccountLevelPermissions {
  /**
   * <p>Describes the S3 Block Public Access settings of the bucket's parent account.</p>
   */
  BlockPublicAccess?: BlockPublicAccess;
}

/**
 * <p>Contains information about the domain.</p>
 */
export interface DomainDetails {
  /**
   * <p>The domain information for the Amazon Web Services API call.</p>
   */
  Domain?: string;
}

/**
 * <p>Contains details about the remote Amazon Web Services account that made the API call.</p>
 */
export interface RemoteAccountDetails {
  /**
   * <p>The Amazon Web Services account ID of the remote API caller.</p>
   */
  AccountId?: string;

  /**
   * <p>Details on whether the Amazon Web Services account of the remote API caller is related to your GuardDuty environment. If this value is <code>True</code> the API caller is affiliated to your account in some way. If it is <code>False</code> the API caller is from outside your environment.</p>
   */
  Affiliated?: boolean;
}

/**
 * <p>Contains information about the city associated with the IP address.</p>
 */
export interface City {
  /**
   * <p>The city name of the remote IP address.</p>
   */
  CityName?: string;
}

/**
 * <p>Contains information about the country where the remote IP address is located.</p>
 */
export interface Country {
  /**
   * <p>The country code of the remote IP address.</p>
   */
  CountryCode?: string;

  /**
   * <p>The country name of the remote IP address.</p>
   */
  CountryName?: string;
}

/**
 * <p>Contains information about the location of the remote IP address.</p>
 */
export interface GeoLocation {
  /**
   * <p>The latitude information of the remote IP address.</p>
   */
  Lat?: number;

  /**
   * <p>The longitude information of the remote IP address.</p>
   */
  Lon?: number;
}

/**
 * <p>Contains information about the ISP organization of the remote IP address.</p>
 */
export interface Organization {
  /**
   * <p>The Autonomous System Number (ASN) of the internet provider of the remote IP
   *       address.</p>
   */
  Asn?: string;

  /**
   * <p>The organization that registered this ASN.</p>
   */
  AsnOrg?: string;

  /**
   * <p>The ISP information for the internet provider.</p>
   */
  Isp?: string;

  /**
   * <p>The name of the internet provider.</p>
   */
  Org?: string;
}

/**
 * <p>Contains information about the remote IP address of the connection.</p>
 */
export interface RemoteIpDetails {
  /**
   * <p>The city information of the remote IP address.</p>
   */
  City?: City;

  /**
   * <p>The country code of the remote IP address.</p>
   */
  Country?: Country;

  /**
   * <p>The location information of the remote IP address.</p>
   */
  GeoLocation?: GeoLocation;

  /**
   * <p>The IPv4 remote address of the connection.</p>
   */
  IpAddressV4?: string;

  /**
   * <p>The ISP organization information of the remote IP address.</p>
   */
  Organization?: Organization;
}

/**
 * <p>Contains information about the API action.</p>
 */
export interface AwsApiCallAction {
  /**
   * <p>The Amazon Web Services API name.</p>
   */
  Api?: string;

  /**
   * <p>The Amazon Web Services API caller type.</p>
   */
  CallerType?: string;

  /**
   * <p>The domain information for the Amazon Web Services API call.</p>
   */
  DomainDetails?: DomainDetails;

  /**
   * <p>The error code of the failed Amazon Web Services API action.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The agent through which the API request was made.</p>
   */
  UserAgent?: string;

  /**
   * <p>The remote IP information of the connection that initiated the Amazon Web Services API call.</p>
   */
  RemoteIpDetails?: RemoteIpDetails;

  /**
   * <p>The Amazon Web Services service name whose API was invoked.</p>
   */
  ServiceName?: string;

  /**
   * <p>The details of the Amazon Web Services account that made the API call. This field appears if the call was made from outside your account.</p>
   */
  RemoteAccountDetails?: RemoteAccountDetails;

  /**
   * <p>The details of the Amazon Web Services account that made the API call. This field identifies the resources that were affected by this API call.</p>
   */
  AffectedResources?: Record<string, string>;
}

/**
 * <p>Contains information about the DNS_REQUEST action described in this finding.</p>
 */
export interface DnsRequestAction {
  /**
   * <p>The domain information for the API request.</p>
   */
  Domain?: string;

  /**
   * <p>The network connection protocol observed in the activity that prompted GuardDuty to generate the finding.</p>
   */
  Protocol?: string;

  /**
   * <p>Indicates whether the targeted port is blocked.</p>
   */
  Blocked?: boolean;
}

/**
 * <p>Information about the Kubernetes API call action described in this finding.</p>
 */
export interface KubernetesApiCallAction {
  /**
   * <p>The Kubernetes API request URI.</p>
   */
  RequestUri?: string;

  /**
   * <p>The Kubernetes API request HTTP verb.</p>
   */
  Verb?: string;

  /**
   * <p>The IP of the  Kubernetes API caller and the IPs of any proxies or load balancers between the caller and the API endpoint.</p>
   */
  SourceIps?: string[];

  /**
   * <p>The user agent of the caller of the Kubernetes API.</p>
   */
  UserAgent?: string;

  /**
   * <p>Contains information about the remote IP address of the connection.</p>
   */
  RemoteIpDetails?: RemoteIpDetails;

  /**
   * <p>The resulting HTTP response code of the Kubernetes API call action.</p>
   */
  StatusCode?: number;

  /**
   * <p>Parameters related to the Kubernetes API call action.</p>
   */
  Parameters?: string;
}

/**
 * <p>Contains information about the local IP address of the connection.</p>
 */
export interface LocalIpDetails {
  /**
   * <p>The IPv4 local address of the connection.</p>
   */
  IpAddressV4?: string;
}

/**
 * <p>Contains information about the port for the local connection.</p>
 */
export interface LocalPortDetails {
  /**
   * <p>The port number of the local connection.</p>
   */
  Port?: number;

  /**
   * <p>The port name of the local connection.</p>
   */
  PortName?: string;
}

/**
 * <p>Contains information about the remote port.</p>
 */
export interface RemotePortDetails {
  /**
   * <p>The port number of the remote connection.</p>
   */
  Port?: number;

  /**
   * <p>The port name of the remote connection.</p>
   */
  PortName?: string;
}

/**
 * <p>Contains information about the NETWORK_CONNECTION action described in the finding.</p>
 */
export interface NetworkConnectionAction {
  /**
   * <p>Indicates whether EC2 blocked the network connection to your instance.</p>
   */
  Blocked?: boolean;

  /**
   * <p>The network connection direction.</p>
   */
  ConnectionDirection?: string;

  /**
   * <p>The local port information of the connection.</p>
   */
  LocalPortDetails?: LocalPortDetails;

  /**
   * <p>The network connection protocol.</p>
   */
  Protocol?: string;

  /**
   * <p>The local IP information of the connection.</p>
   */
  LocalIpDetails?: LocalIpDetails;

  /**
   * <p>The remote IP information of the connection.</p>
   */
  RemoteIpDetails?: RemoteIpDetails;

  /**
   * <p>The remote port information of the connection.</p>
   */
  RemotePortDetails?: RemotePortDetails;
}

/**
 * <p>Contains information about the port probe details.</p>
 */
export interface PortProbeDetail {
  /**
   * <p>The local port information of the connection.</p>
   */
  LocalPortDetails?: LocalPortDetails;

  /**
   * <p>The local IP information of the connection.</p>
   */
  LocalIpDetails?: LocalIpDetails;

  /**
   * <p>The remote IP information of the connection.</p>
   */
  RemoteIpDetails?: RemoteIpDetails;
}

/**
 * <p>Contains information about the PORT_PROBE action described in the finding.</p>
 */
export interface PortProbeAction {
  /**
   * <p>Indicates whether EC2 blocked the port probe to the instance, such as with an ACL.</p>
   */
  Blocked?: boolean;

  /**
   * <p>A list of objects related to port probe details.</p>
   */
  PortProbeDetails?: PortProbeDetail[];
}

/**
 * <p>Contains information about actions.</p>
 */
export interface Action {
  /**
   * <p>The GuardDuty finding activity type.</p>
   */
  ActionType?: string;

  /**
   * <p>Information about the AWS_API_CALL action described in this finding.</p>
   */
  AwsApiCallAction?: AwsApiCallAction;

  /**
   * <p>Information about the DNS_REQUEST action described in this finding.</p>
   */
  DnsRequestAction?: DnsRequestAction;

  /**
   * <p>Information about the NETWORK_CONNECTION action described in this finding.</p>
   */
  NetworkConnectionAction?: NetworkConnectionAction;

  /**
   * <p>Information about the PORT_PROBE action described in this finding.</p>
   */
  PortProbeAction?: PortProbeAction;

  /**
   * <p>Information about the Kubernetes API call action described in this finding.</p>
   */
  KubernetesApiCallAction?: KubernetesApiCallAction;
}

export enum AdminStatus {
  DISABLE_IN_PROGRESS = "DISABLE_IN_PROGRESS",
  ENABLED = "ENABLED",
}

/**
 * <p>The account within the organization specified as the GuardDuty delegated
 *       administrator.</p>
 */
export interface AdminAccount {
  /**
   * <p>The Amazon Web Services account ID for the account.</p>
   */
  AdminAccountId?: string;

  /**
   * <p>Indicates whether the account is enabled as the delegated administrator.</p>
   */
  AdminStatus?: AdminStatus | string;
}

/**
 * <p>Contains information about the administrator account and invitation.</p>
 */
export interface Administrator {
  /**
   * <p>The ID of the account used as the administrator account.</p>
   */
  AccountId?: string;

  /**
   * <p>The value that is used to validate the administrator account to the member account.</p>
   */
  InvitationId?: string;

  /**
   * <p>The status of the relationship between the administrator and member accounts.</p>
   */
  RelationshipStatus?: string;

  /**
   * <p>The timestamp when the invitation was sent.</p>
   */
  InvitedAt?: string;
}

export interface ArchiveFindingsRequest {
  /**
   * <p>The ID of the detector that specifies the GuardDuty service whose findings you want to
   *       archive.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The IDs of the findings that you want to archive.</p>
   */
  FindingIds: string[] | undefined;
}

export interface ArchiveFindingsResponse {}

/**
 * <p>Contains information on the current bucket policies for the S3 bucket.</p>
 */
export interface BucketPolicy {
  /**
   * <p>A value that indicates whether public read access for the bucket is enabled through a
   *       bucket policy.</p>
   */
  AllowsPublicReadAccess?: boolean;

  /**
   * <p>A value that indicates whether public write access for the bucket is enabled through a
   *       bucket policy.</p>
   */
  AllowsPublicWriteAccess?: boolean;
}

/**
 * <p>Contains information about the bucket level permissions for the S3 bucket.</p>
 */
export interface BucketLevelPermissions {
  /**
   * <p>Contains information on how Access Control Policies are applied to the bucket.</p>
   */
  AccessControlList?: AccessControlList;

  /**
   * <p>Contains information on the bucket policies for the S3 bucket.</p>
   */
  BucketPolicy?: BucketPolicy;

  /**
   * <p>Contains information on which account level S3 Block Public Access settings are applied to
   *       the S3 bucket.</p>
   */
  BlockPublicAccess?: BlockPublicAccess;
}

export enum DataSourceStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>Contains information on the status of CloudTrail as a data source for the detector.</p>
 */
export interface CloudTrailConfigurationResult {
  /**
   * <p>Describes whether CloudTrail is enabled as a data source for the detector.</p>
   */
  Status: DataSourceStatus | string | undefined;
}

/**
 * <p>Contains information about the condition.</p>
 */
export interface Condition {
  /**
   * @deprecated
   *
   * <p>Represents the <i>equal</i> condition to be applied to a single field when
   *       querying for findings.</p>
   */
  Eq?: string[];

  /**
   * @deprecated
   *
   * <p>Represents the <i>not equal</i> condition to be applied to a single field
   *       when querying for findings.</p>
   */
  Neq?: string[];

  /**
   * @deprecated
   *
   * <p>Represents a <i>greater than</i> condition to be applied to a single field
   *       when querying for findings.</p>
   */
  Gt?: number;

  /**
   * @deprecated
   *
   * <p>Represents a <i>greater than or equal</i> condition to be applied to a
   *       single field when querying for findings.</p>
   */
  Gte?: number;

  /**
   * @deprecated
   *
   * <p>Represents a <i>less than</i> condition to be applied to a single field when
   *       querying for findings.</p>
   */
  Lt?: number;

  /**
   * @deprecated
   *
   * <p>Represents a <i>less than or equal</i> condition to be applied to a single
   *       field when querying for findings.</p>
   */
  Lte?: number;

  /**
   * <p>Represents an <i>equal</i>
   *             <b></b> condition to be applied to
   *       a single field when querying for findings.</p>
   */
  Equals?: string[];

  /**
   * <p>Represents a <i>not equal</i>
   *             <b></b> condition to be applied
   *       to a single field when querying for findings.</p>
   */
  NotEquals?: string[];

  /**
   * <p>Represents a <i>greater than</i> condition to be applied to a single field
   *       when querying for findings.</p>
   */
  GreaterThan?: number;

  /**
   * <p>Represents a <i>greater than or equal</i> condition to be applied to a
   *       single field when querying for findings.</p>
   */
  GreaterThanOrEqual?: number;

  /**
   * <p>Represents a <i>less than</i> condition to be applied to a single field when
   *       querying for findings.</p>
   */
  LessThan?: number;

  /**
   * <p>Represents a <i>less than or equal</i> condition to be applied to a single
   *       field when querying for findings.</p>
   */
  LessThanOrEqual?: number;
}

/**
 * <p>Container security context.</p>
 */
export interface SecurityContext {
  /**
   * <p>Whether the container is privileged.</p>
   */
  Privileged?: boolean;
}

/**
 * <p>Container volume mount.</p>
 */
export interface VolumeMount {
  /**
   * <p>Volume mount name.</p>
   */
  Name?: string;

  /**
   * <p>Volume mount path.</p>
   */
  MountPath?: string;
}

/**
 * <p>Details of a container.</p>
 */
export interface Container {
  /**
   * <p>The container runtime (such as, Docker or containerd) used to run the container.</p>
   */
  ContainerRuntime?: string;

  /**
   * <p>Container ID.</p>
   */
  Id?: string;

  /**
   * <p>Container name.</p>
   */
  Name?: string;

  /**
   * <p>Container image.</p>
   */
  Image?: string;

  /**
   * <p>Part of the image name before the last slash. For example, imagePrefix for public.ecr.aws/amazonlinux/amazonlinux:latest would be public.ecr.aws/amazonlinux. If the image name is relative and does not have a slash, this field is empty.</p>
   */
  ImagePrefix?: string;

  /**
   * <p>Container volume mounts.</p>
   */
  VolumeMounts?: VolumeMount[];

  /**
   * <p>Container security context.</p>
   */
  SecurityContext?: SecurityContext;
}

/**
 * <p>Describes whether Kubernetes audit logs are enabled as a data source.</p>
 */
export interface KubernetesAuditLogsConfiguration {
  /**
   * <p>The status of Kubernetes audit logs as a data source.</p>
   */
  Enable: boolean | undefined;
}

/**
 * <p>Describes whether any Kubernetes data sources are enabled.</p>
 */
export interface KubernetesConfiguration {
  /**
   * <p>The status of Kubernetes audit logs as a data source.</p>
   */
  AuditLogs: KubernetesAuditLogsConfiguration | undefined;
}

/**
 * <p>Describes whether Malware Protection for EC2 instances with findings will be enabled as a data source.</p>
 */
export interface ScanEc2InstanceWithFindings {
  /**
   * <p>Describes the configuration for scanning EBS volumes as data source.</p>
   */
  EbsVolumes?: boolean;
}

/**
 * <p>Describes whether Malware Protection will be enabled as a data source.</p>
 */
export interface MalwareProtectionConfiguration {
  /**
   * <p>Describes the configuration of Malware Protection for EC2 instances with findings.</p>
   */
  ScanEc2InstanceWithFindings?: ScanEc2InstanceWithFindings;
}

/**
 * <p>Describes whether S3 data event logs will be enabled as a data source.</p>
 */
export interface S3LogsConfiguration {
  /**
   * <p> The status of S3 data event logs as a data source.</p>
   */
  Enable: boolean | undefined;
}

/**
 * <p>Contains information about which data sources are enabled.</p>
 */
export interface DataSourceConfigurations {
  /**
   * <p>Describes whether S3 data event logs are enabled as a data source.</p>
   */
  S3Logs?: S3LogsConfiguration;

  /**
   * <p>Describes whether any Kubernetes logs are enabled as data sources.</p>
   */
  Kubernetes?: KubernetesConfiguration;

  /**
   * <p>Describes whether Malware Protection is enabled as a data source.</p>
   */
  MalwareProtection?: MalwareProtectionConfiguration;
}

export enum FindingPublishingFrequency {
  FIFTEEN_MINUTES = "FIFTEEN_MINUTES",
  ONE_HOUR = "ONE_HOUR",
  SIX_HOURS = "SIX_HOURS",
}

export interface CreateDetectorRequest {
  /**
   * <p>A Boolean value that specifies whether the detector is to be enabled.</p>
   */
  Enable: boolean | undefined;

  /**
   * <p>The idempotency token for the create request.</p>
   */
  ClientToken?: string;

  /**
   * <p>A value that specifies how frequently updated findings are exported.</p>
   */
  FindingPublishingFrequency?: FindingPublishingFrequency | string;

  /**
   * <p>Describes which data sources will be enabled for the detector.</p>
   */
  DataSources?: DataSourceConfigurations;

  /**
   * <p>The tags to be added to a new detector resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * <p>Describes the configuration of scanning EBS volumes as a data source.</p>
 */
export interface EbsVolumesResult {
  /**
   * <p>Describes whether scanning EBS volumes is enabled as a data source.</p>
   */
  Status?: DataSourceStatus | string;

  /**
   * <p>Specifies the reason why scanning EBS volumes (Malware Protection) was not enabled as a data source.</p>
   */
  Reason?: string;
}

/**
 * <p>An object that contains information on the status of whether Malware Protection for EC2 instances with findings will be enabled as a data source.</p>
 */
export interface ScanEc2InstanceWithFindingsResult {
  /**
   * <p>Describes the configuration of scanning EBS volumes as a data source.</p>
   */
  EbsVolumes?: EbsVolumesResult;
}

/**
 * <p>An object that contains information on the status of all Malware Protection data sources.</p>
 */
export interface MalwareProtectionConfigurationResult {
  /**
   * <p>Describes the configuration of Malware Protection for EC2 instances with findings.</p>
   */
  ScanEc2InstanceWithFindings?: ScanEc2InstanceWithFindingsResult;

  /**
   * <p>The GuardDuty Malware Protection service role.</p>
   */
  ServiceRole?: string;
}

/**
 * <p>Specifies the names of the data sources that couldn't be enabled.</p>
 */
export interface UnprocessedDataSourcesResult {
  /**
   * <p>An object that contains information on the status of all Malware Protection data sources.</p>
   */
  MalwareProtection?: MalwareProtectionConfigurationResult;
}

export interface CreateDetectorResponse {
  /**
   * <p>The unique ID of the created detector.</p>
   */
  DetectorId?: string;

  /**
   * <p>Specifies the data sources that couldn't be enabled when GuardDuty was enabled for the
   *     first time.</p>
   */
  UnprocessedDataSources?: UnprocessedDataSourcesResult;
}

export enum FilterAction {
  ARCHIVE = "ARCHIVE",
  NOOP = "NOOP",
}

/**
 * <p>Contains information about the criteria used for querying findings.</p>
 */
export interface FindingCriteria {
  /**
   * <p>Represents a map of finding properties that match specified conditions and values when
   *       querying findings.</p>
   */
  Criterion?: Record<string, Condition>;
}

export interface CreateFilterRequest {
  /**
   * <p>The ID of the detector belonging to the GuardDuty account that you want to create a filter
   *       for.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The name of the filter. Valid characters include period (.), underscore (_),
   *       dash (-), and alphanumeric characters. A whitespace is considered to be an invalid character.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the filter. Valid special characters include period (.), underscore (_), dash (-),
   *       and whitespace. The new line character is considered to be an invalid input for description.</p>
   */
  Description?: string;

  /**
   * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
   */
  Action?: FilterAction | string;

  /**
   * <p>Specifies the position of the filter in the list of current filters. Also specifies the
   *       order in which this filter is applied to the findings.</p>
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
   *                <p>resource.instanceDetails.outpostArn</p>
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
   *                <p>service.action.awsApiCallAction.errorCode</p>
   *             </li>
   *             <li>
   *                <p>service.action.awsApiCallAction.userAgent</p>
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
   *                <p>service.action.networkConnectionAction.localIpDetails.ipAddressV4</p>
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
   *                <p>service.additionalInfo.threatListName</p>
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
   *                <p>service.archived</p>
   *                <p>When this attribute is set to TRUE, only archived findings are listed. When it's set
   *           to FALSE, only unarchived findings are listed. When this attribute is not set, all
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
   *                <p>Type: ISO 8601 string format: YYYY-MM-DDTHH:MM:SS.SSSZ or YYYY-MM-DDTHH:MM:SSZ
   *           depending on whether the value contains milliseconds.</p>
   *             </li>
   *          </ul>
   */
  FindingCriteria: FindingCriteria | undefined;

  /**
   * <p>The idempotency token for the create request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The tags to be added to a new filter resource.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateFilterResponse {
  /**
   * <p>The name of the successfully created filter.</p>
   */
  Name: string | undefined;
}

export enum IpSetFormat {
  ALIEN_VAULT = "ALIEN_VAULT",
  FIRE_EYE = "FIRE_EYE",
  OTX_CSV = "OTX_CSV",
  PROOF_POINT = "PROOF_POINT",
  STIX = "STIX",
  TXT = "TXT",
}

export interface CreateIPSetRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty account that you want to create an IPSet
   *       for.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The user-friendly name to identify the IPSet.</p>
   *          <p> Allowed characters are alphanumerics, spaces, hyphens (-), and underscores (_).</p>
   */
  Name: string | undefined;

  /**
   * <p>The format of the file that contains the IPSet.</p>
   */
  Format: IpSetFormat | string | undefined;

  /**
   * <p>The URI of the file that contains the IPSet. </p>
   */
  Location: string | undefined;

  /**
   * <p>A Boolean value that indicates whether GuardDuty is to start using the uploaded
   *       IPSet.</p>
   */
  Activate: boolean | undefined;

  /**
   * <p>The idempotency token for the create request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The tags to be added to a new IP set resource.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateIPSetResponse {
  /**
   * <p>The ID of the IPSet resource.</p>
   */
  IpSetId: string | undefined;
}

export interface CreateMembersRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty account that you want to associate member
   *       accounts with.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of account ID and email address pairs of the accounts that you want to associate
   *       with the GuardDuty administrator account.</p>
   */
  AccountDetails: AccountDetail[] | undefined;
}

/**
 * <p>Contains information about the accounts that weren't processed.</p>
 */
export interface UnprocessedAccount {
  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>A reason why the account hasn't been processed.</p>
   */
  Result: string | undefined;
}

export interface CreateMembersResponse {
  /**
   * <p>A list of objects that include the <code>accountIds</code> of the unprocessed accounts and
   *       a result string that explains why each was unprocessed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * <p>Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3
 *       bucket, and the ARN of the KMS key to use to encrypt published findings.</p>
 */
export interface DestinationProperties {
  /**
   * <p>The ARN of the resource to publish to.</p>
   *          <p>To specify an S3 bucket folder use the following format:
   *         <code>arn:aws:s3:::DOC-EXAMPLE-BUCKET/myFolder/</code>
   *          </p>
   */
  DestinationArn?: string;

  /**
   * <p>The ARN of the KMS key to use for encryption.</p>
   */
  KmsKeyArn?: string;
}

export enum DestinationType {
  S3 = "S3",
}

export interface CreatePublishingDestinationRequest {
  /**
   * <p>The ID of the GuardDuty detector associated with the publishing destination.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The type of resource for the publishing destination. Currently only Amazon S3 buckets are
   *       supported.</p>
   */
  DestinationType: DestinationType | string | undefined;

  /**
   * <p>The properties of the publishing destination, including the ARNs for the destination and
   *       the KMS key used for encryption.</p>
   */
  DestinationProperties: DestinationProperties | undefined;

  /**
   * <p>The idempotency token for the request.</p>
   */
  ClientToken?: string;
}

export interface CreatePublishingDestinationResponse {
  /**
   * <p>The ID of the publishing destination that is created.</p>
   */
  DestinationId: string | undefined;
}

export interface CreateSampleFindingsRequest {
  /**
   * <p>The ID of the detector to create sample findings for.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The types of sample findings to generate.</p>
   */
  FindingTypes?: string[];
}

export interface CreateSampleFindingsResponse {}

export enum ThreatIntelSetFormat {
  ALIEN_VAULT = "ALIEN_VAULT",
  FIRE_EYE = "FIRE_EYE",
  OTX_CSV = "OTX_CSV",
  PROOF_POINT = "PROOF_POINT",
  STIX = "STIX",
  TXT = "TXT",
}

export interface CreateThreatIntelSetRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty account that you want to create a
   *       threatIntelSet for.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>A user-friendly ThreatIntelSet name displayed in all findings that are generated by
   *       activity that involves IP addresses included in this ThreatIntelSet.</p>
   */
  Name: string | undefined;

  /**
   * <p>The format of the file that contains the ThreatIntelSet.</p>
   */
  Format: ThreatIntelSetFormat | string | undefined;

  /**
   * <p>The URI of the file that contains the ThreatIntelSet. </p>
   */
  Location: string | undefined;

  /**
   * <p>A Boolean value that indicates whether GuardDuty is to start using the uploaded
   *       ThreatIntelSet.</p>
   */
  Activate: boolean | undefined;

  /**
   * <p>The idempotency token for the create request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The tags to be added to a new threat list resource.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateThreatIntelSetResponse {
  /**
   * <p>The ID of the ThreatIntelSet resource.</p>
   */
  ThreatIntelSetId: string | undefined;
}

export enum CriterionKey {
  ACCOUNT_ID = "ACCOUNT_ID",
  EC2_INSTANCE_ARN = "EC2_INSTANCE_ARN",
  GUARDDUTY_FINDING_ID = "GUARDDUTY_FINDING_ID",
  SCAN_ID = "SCAN_ID",
  SCAN_START_TIME = "SCAN_START_TIME",
  SCAN_STATUS = "SCAN_STATUS",
}

export enum DataSource {
  CLOUD_TRAIL = "CLOUD_TRAIL",
  DNS_LOGS = "DNS_LOGS",
  EC2_MALWARE_SCAN = "EC2_MALWARE_SCAN",
  FLOW_LOGS = "FLOW_LOGS",
  KUBERNETES_AUDIT_LOGS = "KUBERNETES_AUDIT_LOGS",
  S3_LOGS = "S3_LOGS",
}

/**
 * <p>Contains information on the status of DNS logs as a data source.</p>
 */
export interface DNSLogsConfigurationResult {
  /**
   * <p>Denotes whether DNS logs is enabled as a data source.</p>
   */
  Status: DataSourceStatus | string | undefined;
}

/**
 * <p>Contains information on the status of VPC flow logs as a data source.</p>
 */
export interface FlowLogsConfigurationResult {
  /**
   * <p>Denotes whether VPC flow logs is enabled as a data source.</p>
   */
  Status: DataSourceStatus | string | undefined;
}

/**
 * <p>Describes whether Kubernetes audit logs are enabled as a data source.</p>
 */
export interface KubernetesAuditLogsConfigurationResult {
  /**
   * <p>A value that describes whether Kubernetes audit logs are enabled as a data source.</p>
   */
  Status: DataSourceStatus | string | undefined;
}

/**
 * <p>Describes whether any Kubernetes logs will be enabled as a data source.</p>
 */
export interface KubernetesConfigurationResult {
  /**
   * <p>Describes whether Kubernetes audit logs are enabled as a data source.</p>
   */
  AuditLogs: KubernetesAuditLogsConfigurationResult | undefined;
}

/**
 * <p>Describes whether S3 data event logs will be enabled as a data source.</p>
 */
export interface S3LogsConfigurationResult {
  /**
   * <p>A value that describes whether S3 data event logs are automatically enabled for new
   *       members of the organization.</p>
   */
  Status: DataSourceStatus | string | undefined;
}

/**
 * <p>Contains information on the status of data sources for the detector.</p>
 */
export interface DataSourceConfigurationsResult {
  /**
   * <p>An object that contains information on the status of CloudTrail as a data source.</p>
   */
  CloudTrail: CloudTrailConfigurationResult | undefined;

  /**
   * <p>An object that contains information on the status of DNS logs as a data source.</p>
   */
  DNSLogs: DNSLogsConfigurationResult | undefined;

  /**
   * <p>An object that contains information on the status of VPC flow logs as a data
   *       source.</p>
   */
  FlowLogs: FlowLogsConfigurationResult | undefined;

  /**
   * <p>An object that contains information on the status of S3 Data event logs as a data
   *       source.</p>
   */
  S3Logs: S3LogsConfigurationResult | undefined;

  /**
   * <p>An object that contains information on the status of all Kubernetes data sources.</p>
   */
  Kubernetes?: KubernetesConfigurationResult;

  /**
   * <p>Describes the configuration of Malware Protection data sources.</p>
   */
  MalwareProtection?: MalwareProtectionConfigurationResult;
}

export interface DeclineInvitationsRequest {
  /**
   * <p>A list of account IDs of the Amazon Web Services accounts that sent invitations to the current member
   *       account that you want to decline invitations from.</p>
   */
  AccountIds: string[] | undefined;
}

export interface DeclineInvitationsResponse {
  /**
   * <p>A list of objects that contain the unprocessed account and a result string that explains
   *       why it was unprocessed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * <p>Contains information on the server side encryption method used in the S3 bucket. See
 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html">S3
 *         Server-Side Encryption</a> for more information.</p>
 */
export interface DefaultServerSideEncryption {
  /**
   * <p>The type of encryption used for objects within the S3 bucket.</p>
   */
  EncryptionType?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS encryption key. Only available if the bucket
   *         <code>EncryptionType</code> is <code>aws:kms</code>.</p>
   */
  KmsMasterKeyArn?: string;
}

export interface DeleteDetectorRequest {
  /**
   * <p>The unique ID of the detector that you want to delete.</p>
   */
  DetectorId: string | undefined;
}

export interface DeleteDetectorResponse {}

export interface DeleteFilterRequest {
  /**
   * <p>The unique ID of the detector that the filter is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The name of the filter that you want to delete.</p>
   */
  FilterName: string | undefined;
}

export interface DeleteFilterResponse {}

export interface DeleteInvitationsRequest {
  /**
   * <p>A list of account IDs of the Amazon Web Services accounts that sent invitations to the current member
   *       account that you want to delete invitations from.</p>
   */
  AccountIds: string[] | undefined;
}

export interface DeleteInvitationsResponse {
  /**
   * <p>A list of objects that contain the unprocessed account and a result string that explains
   *       why it was unprocessed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

export interface DeleteIPSetRequest {
  /**
   * <p>The unique ID of the detector associated with the IPSet.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique ID of the IPSet to delete.</p>
   */
  IpSetId: string | undefined;
}

export interface DeleteIPSetResponse {}

export interface DeleteMembersRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty account whose members you want to
   *       delete.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of account IDs of the GuardDuty member accounts that you want to delete.</p>
   */
  AccountIds: string[] | undefined;
}

export interface DeleteMembersResponse {
  /**
   * <p>The accounts that could not be processed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

export interface DeletePublishingDestinationRequest {
  /**
   * <p>The unique ID of the detector associated with the publishing destination to delete.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The ID of the publishing destination to delete.</p>
   */
  DestinationId: string | undefined;
}

export interface DeletePublishingDestinationResponse {}

export interface DeleteThreatIntelSetRequest {
  /**
   * <p>The unique ID of the detector that the threatIntelSet is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique ID of the threatIntelSet that you want to delete.</p>
   */
  ThreatIntelSetId: string | undefined;
}

export interface DeleteThreatIntelSetResponse {}

/**
 * <p>Contains information about the condition.</p>
 */
export interface FilterCondition {
  /**
   * <p>Represents an <i>equal</i>
   *             <b></b> condition to be applied to
   *       a single field when querying for scan entries.</p>
   */
  EqualsValue?: string;

  /**
   * <p>Represents a <i>greater than</i> condition to be applied to a single field
   *       when querying for scan entries.</p>
   */
  GreaterThan?: number;

  /**
   * <p>Represents a <i>less than</i> condition to be applied to a single field when
   *       querying for scan entries.</p>
   */
  LessThan?: number;
}

/**
 * <p>Represents a condition that when matched will be added to the response of the operation.
 *       Irrespective of using any filter criteria, an administrator account can view the scan
 *       entries for all of its member accounts.
 *       However, each member account can view the scan entries only for their own account.</p>
 */
export interface FilterCriterion {
  /**
   * <p>An enum value representing possible scan properties to match with given scan entries.</p>
   */
  CriterionKey?: CriterionKey | string;

  /**
   * <p>Contains information about the condition.</p>
   */
  FilterCondition?: FilterCondition;
}

/**
 * <p>Represents the criteria to be used in the filter for describing scan entries.</p>
 */
export interface FilterCriteria {
  /**
   * <p>Represents a condition that when matched will be added to the response of the operation.</p>
   */
  FilterCriterion?: FilterCriterion[];
}

export enum OrderBy {
  ASC = "ASC",
  DESC = "DESC",
}

/**
 * <p>Contains information about the criteria used for sorting findings.</p>
 */
export interface SortCriteria {
  /**
   * <p>Represents the finding attribute (for example, accountId) to sort findings by.</p>
   */
  AttributeName?: string;

  /**
   * <p>The order by which the sorted findings are to be displayed.</p>
   */
  OrderBy?: OrderBy | string;
}

export interface DescribeMalwareScansRequest {
  /**
   * <p>The unique ID of the detector that the request is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   */
  NextToken?: string;

  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;

  /**
   * <p>Represents the criteria to be used in the filter for describing scan entries.</p>
   */
  FilterCriteria?: FilterCriteria;

  /**
   * <p>Represents the criteria used for sorting scan entries.</p>
   */
  SortCriteria?: SortCriteria;
}

/**
 * <p>Contains EBS volume details.</p>
 */
export interface VolumeDetail {
  /**
   * <p>EBS volume Arn information.</p>
   */
  VolumeArn?: string;

  /**
   * <p>The EBS volume type.</p>
   */
  VolumeType?: string;

  /**
   * <p>The device name for the EBS volume.</p>
   */
  DeviceName?: string;

  /**
   * <p>EBS volume size in GB.</p>
   */
  VolumeSizeInGB?: number;

  /**
   * <p>EBS volume encryption type.</p>
   */
  EncryptionType?: string;

  /**
   * <p>Snapshot Arn of the EBS volume.</p>
   */
  SnapshotArn?: string;

  /**
   * <p>KMS key Arn used to encrypt the EBS volume.</p>
   */
  KmsKeyArn?: string;
}

/**
 * <p>Represents the resources that were scanned in the scan entry.</p>
 */
export interface ResourceDetails {
  /**
   * <p>InstanceArn that was scanned in the scan entry.</p>
   */
  InstanceArn?: string;
}

export enum ScanResult {
  CLEAN = "CLEAN",
  INFECTED = "INFECTED",
}

/**
 * <p>Represents the result of the scan.</p>
 */
export interface ScanResultDetails {
  /**
   * <p>An enum value representing possible scan results.</p>
   */
  ScanResult?: ScanResult | string;
}

export enum ScanStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  RUNNING = "RUNNING",
}

/**
 * <p>Represents the reason the scan was triggered.</p>
 */
export interface TriggerDetails {
  /**
   * <p>The ID of the GuardDuty finding that triggered the BirdDog scan.</p>
   */
  GuardDutyFindingId?: string;

  /**
   * <p>The description of the scan trigger.</p>
   */
  Description?: string;
}

/**
 * <p>Contains information about a malware scan.</p>
 */
export interface Scan {
  /**
   * <p>The unique ID of the detector that the request is associated with.</p>
   */
  DetectorId?: string;

  /**
   * <p>The unique detector ID of the administrator account that the request is associated with. Note that
   *       this value will be the same as the one used for <code>DetectorId</code> if the account is an administrator.</p>
   */
  AdminDetectorId?: string;

  /**
   * <p>The unique scan ID associated with a scan entry.</p>
   */
  ScanId?: string;

  /**
   * <p>An enum value representing possible scan statuses.</p>
   */
  ScanStatus?: ScanStatus | string;

  /**
   * <p>Represents the reason for FAILED scan status.</p>
   */
  FailureReason?: string;

  /**
   * <p>The timestamp of when the scan was triggered.</p>
   */
  ScanStartTime?: Date;

  /**
   * <p>The timestamp of when the scan was finished.</p>
   */
  ScanEndTime?: Date;

  /**
   * <p>Specifies the reason why the scan was initiated.</p>
   */
  TriggerDetails?: TriggerDetails;

  /**
   * <p>Represents the resources that were scanned in the scan entry.</p>
   */
  ResourceDetails?: ResourceDetails;

  /**
   * <p>Represents the result of the scan.</p>
   */
  ScanResultDetails?: ScanResultDetails;

  /**
   * <p>The ID for the account that belongs to the scan.</p>
   */
  AccountId?: string;

  /**
   * <p>Represents total bytes that were scanned.</p>
   */
  TotalBytes?: number;

  /**
   * <p>Represents the number of files that were scanned.</p>
   */
  FileCount?: number;

  /**
   * <p>List of volumes that were attached to the original instance to be scanned.</p>
   */
  AttachedVolumes?: VolumeDetail[];
}

export interface DescribeMalwareScansResponse {
  /**
   * <p>Contains information about malware scans.</p>
   */
  Scans: Scan[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p>
   */
  NextToken?: string;
}

export interface DescribeOrganizationConfigurationRequest {
  /**
   * <p>The ID of the detector to retrieve information about the delegated administrator
   *       from.</p>
   */
  DetectorId: string | undefined;
}

/**
 * <p>The current configuration of Kubernetes audit logs as a data source for the organization.</p>
 */
export interface OrganizationKubernetesAuditLogsConfigurationResult {
  /**
   * <p>Whether Kubernetes audit logs data source should be auto-enabled for new members joining the organization.</p>
   */
  AutoEnable: boolean | undefined;
}

/**
 * <p>The current configuration of all Kubernetes data sources for the organization.</p>
 */
export interface OrganizationKubernetesConfigurationResult {
  /**
   * <p>The current configuration of Kubernetes audit logs as a data source for the organization.</p>
   */
  AuditLogs: OrganizationKubernetesAuditLogsConfigurationResult | undefined;
}

/**
 * <p>An object that contains information on the status of whether EBS volumes scanning will be enabled as a data source for an organization.</p>
 */
export interface OrganizationEbsVolumesResult {
  /**
   * <p>An object that contains the status of whether scanning EBS volumes should be auto-enabled for new members joining the organization.</p>
   */
  AutoEnable?: boolean;
}

/**
 * <p>An object that contains information on the status of scanning EC2 instances with findings for an organization.</p>
 */
export interface OrganizationScanEc2InstanceWithFindingsResult {
  /**
   * <p>Describes the configuration for scanning EBS volumes for an organization.</p>
   */
  EbsVolumes?: OrganizationEbsVolumesResult;
}

/**
 * <p>An object that contains information on the status of all Malware Protection data source for an organization.</p>
 */
export interface OrganizationMalwareProtectionConfigurationResult {
  /**
   * <p>Describes the configuration for scanning EC2 instances with findings for an organization.</p>
   */
  ScanEc2InstanceWithFindings?: OrganizationScanEc2InstanceWithFindingsResult;
}

/**
 * <p>The current configuration of S3 data event logs as a data source for the
 *       organization.</p>
 */
export interface OrganizationS3LogsConfigurationResult {
  /**
   * <p>A value that describes whether S3 data event logs are automatically enabled for new
   *       members of the organization.</p>
   */
  AutoEnable: boolean | undefined;
}

/**
 * <p>An object that contains information on which data sources are automatically enabled for
 *       new members within the organization.</p>
 */
export interface OrganizationDataSourceConfigurationsResult {
  /**
   * <p>Describes whether S3 data event logs are enabled as a data source.</p>
   */
  S3Logs: OrganizationS3LogsConfigurationResult | undefined;

  /**
   * <p>Describes the configuration of Kubernetes data sources.</p>
   */
  Kubernetes?: OrganizationKubernetesConfigurationResult;

  /**
   * <p>Describes the configuration of Malware Protection data source for an organization.</p>
   */
  MalwareProtection?: OrganizationMalwareProtectionConfigurationResult;
}

export interface DescribeOrganizationConfigurationResponse {
  /**
   * <p>Indicates whether GuardDuty is automatically enabled for accounts added to the
   *       organization.</p>
   */
  AutoEnable: boolean | undefined;

  /**
   * <p>Indicates whether the maximum number of allowed member accounts are already associated
   *       with the delegated administrator account for your organization.</p>
   */
  MemberAccountLimitReached: boolean | undefined;

  /**
   * <p>Describes which data sources are enabled automatically for member
   *       accounts.</p>
   */
  DataSources?: OrganizationDataSourceConfigurationsResult;
}

export interface DescribePublishingDestinationRequest {
  /**
   * <p>The unique ID of the detector associated with the publishing destination to
   *       retrieve.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The ID of the publishing destination to retrieve.</p>
   */
  DestinationId: string | undefined;
}

export enum PublishingStatus {
  PENDING_VERIFICATION = "PENDING_VERIFICATION",
  PUBLISHING = "PUBLISHING",
  STOPPED = "STOPPED",
  UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY = "UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY",
}

export interface DescribePublishingDestinationResponse {
  /**
   * <p>The ID of the publishing destination.</p>
   */
  DestinationId: string | undefined;

  /**
   * <p>The type of publishing destination. Currently, only Amazon S3 buckets are
   *       supported.</p>
   */
  DestinationType: DestinationType | string | undefined;

  /**
   * <p>The status of the publishing destination.</p>
   */
  Status: PublishingStatus | string | undefined;

  /**
   * <p>The time, in epoch millisecond format, at which GuardDuty was first unable to publish
   *       findings to the destination.</p>
   */
  PublishingFailureStartTimestamp: number | undefined;

  /**
   * <p>A <code>DestinationProperties</code> object that includes the <code>DestinationArn</code>
   *       and <code>KmsKeyArn</code> of the publishing destination.</p>
   */
  DestinationProperties: DestinationProperties | undefined;
}

/**
 * <p>Contains information about the publishing destination, including the ID, type, and
 *       status.</p>
 */
export interface Destination {
  /**
   * <p>The unique ID of the publishing destination.</p>
   */
  DestinationId: string | undefined;

  /**
   * <p>The type of resource used for the publishing destination. Currently, only Amazon S3
   *       buckets are supported.</p>
   */
  DestinationType: DestinationType | string | undefined;

  /**
   * <p>The status of the publishing destination.</p>
   */
  Status: PublishingStatus | string | undefined;
}

export enum DetectorStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export interface DisableOrganizationAdminAccountRequest {
  /**
   * <p>The Amazon Web Services Account ID for the organizations account to be disabled as a GuardDuty delegated
   *       administrator.</p>
   */
  AdminAccountId: string | undefined;
}

export interface DisableOrganizationAdminAccountResponse {}

export interface DisassociateFromAdministratorAccountRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
   */
  DetectorId: string | undefined;
}

export interface DisassociateFromAdministratorAccountResponse {}

export interface DisassociateFromMasterAccountRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
   */
  DetectorId: string | undefined;
}

export interface DisassociateFromMasterAccountResponse {}

export interface DisassociateMembersRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty account whose members you want to
   *       disassociate from the administrator account.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of account IDs of the GuardDuty member accounts that you want to disassociate from
   *       the administrator account.</p>
   */
  AccountIds: string[] | undefined;
}

export interface DisassociateMembersResponse {
  /**
   * <p>A list of objects that contain the unprocessed account and a result string that explains
   *       why it was unprocessed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

export enum EbsSnapshotPreservation {
  NO_RETENTION = "NO_RETENTION",
  RETENTION_WITH_FINDING = "RETENTION_WITH_FINDING",
}

/**
 * <p>Contains list of scanned and skipped EBS volumes with details.</p>
 */
export interface EbsVolumeDetails {
  /**
   * <p>List of EBS volumes that were scanned.</p>
   */
  ScannedVolumeDetails?: VolumeDetail[];

  /**
   * <p>List of EBS volumes that were skipped from the malware scan.</p>
   */
  SkippedVolumeDetails?: VolumeDetail[];
}

/**
 * <p>Contains details of the highest severity threat detected during scan and number of infected files.</p>
 */
export interface HighestSeverityThreatDetails {
  /**
   * <p>Severity level of the highest severity threat detected.</p>
   */
  Severity?: string;

  /**
   * <p>Threat name of the highest severity threat detected as part of the malware scan.</p>
   */
  ThreatName?: string;

  /**
   * <p>Total number of infected files with the highest severity threat detected.</p>
   */
  Count?: number;
}

/**
 * <p>Total number of scanned files.</p>
 */
export interface ScannedItemCount {
  /**
   * <p>Total GB of files scanned for malware.</p>
   */
  TotalGb?: number;

  /**
   * <p>Number of files scanned.</p>
   */
  Files?: number;

  /**
   * <p>Total number of scanned volumes.</p>
   */
  Volumes?: number;
}

/**
 * <p>Contains details of infected file including name, file path and hash.</p>
 */
export interface ScanFilePath {
  /**
   * <p>The file path of the infected file.</p>
   */
  FilePath?: string;

  /**
   * <p>EBS volume Arn details of the infected file.</p>
   */
  VolumeArn?: string;

  /**
   * <p>The hash value of the infected file.</p>
   */
  Hash?: string;

  /**
   * <p>File name of the infected file.</p>
   */
  FileName?: string;
}

/**
 * <p>Contains files infected with the given threat providing details of malware name and severity.</p>
 */
export interface ScanThreatName {
  /**
   * <p>The name of the identified threat.</p>
   */
  Name?: string;

  /**
   * <p>Severity of threat identified as part of the malware scan.</p>
   */
  Severity?: string;

  /**
   * <p>Total number of files infected with given threat.</p>
   */
  ItemCount?: number;

  /**
   * <p>List of infected files in EBS volume with details.</p>
   */
  FilePaths?: ScanFilePath[];
}

/**
 * <p>Contains details about identified threats organized by threat name.</p>
 */
export interface ThreatDetectedByName {
  /**
   * <p>Total number of infected files identified.</p>
   */
  ItemCount?: number;

  /**
   * <p>Total number of unique threats by name identified, as part of the malware scan.</p>
   */
  UniqueThreatNameCount?: number;

  /**
   * <p>Flag to determine if the finding contains every single infected file-path and/or every threat.</p>
   */
  Shortened?: boolean;

  /**
   * <p>List of identified threats with details, organized by threat name.</p>
   */
  ThreatNames?: ScanThreatName[];
}

/**
 * <p>Contains total number of infected files.</p>
 */
export interface ThreatsDetectedItemCount {
  /**
   * <p>Total number of infected files.</p>
   */
  Files?: number;
}

/**
 * <p>Contains a complete view providing malware scan result details.</p>
 */
export interface ScanDetections {
  /**
   * <p>Total number of scanned files.</p>
   */
  ScannedItemCount?: ScannedItemCount;

  /**
   * <p>Total number of infected files.</p>
   */
  ThreatsDetectedItemCount?: ThreatsDetectedItemCount;

  /**
   * <p>Details of the highest severity threat detected during malware scan and number of infected files.</p>
   */
  HighestSeverityThreatDetails?: HighestSeverityThreatDetails;

  /**
   * <p>Contains details about identified threats organized by threat name.</p>
   */
  ThreatDetectedByName?: ThreatDetectedByName;
}

/**
 * <p>Contains details from the malware scan that created a finding.</p>
 */
export interface EbsVolumeScanDetails {
  /**
   * <p>Unique Id of the malware scan that generated the finding.</p>
   */
  ScanId?: string;

  /**
   * <p>Returns the start date and time of the malware scan.</p>
   */
  ScanStartedAt?: Date;

  /**
   * <p>Returns the completion date and time of the malware scan.</p>
   */
  ScanCompletedAt?: Date;

  /**
   * <p>GuardDuty finding ID that triggered a malware scan.</p>
   */
  TriggerFindingId?: string;

  /**
   * <p>Contains list of threat intelligence sources used to detect threats.</p>
   */
  Sources?: string[];

  /**
   * <p>Contains a complete view providing malware scan result details.</p>
   */
  ScanDetections?: ScanDetections;
}

/**
 * <p>Contains information about a tag associated with the EC2 instance.</p>
 */
export interface Tag {
  /**
   * <p>The EC2 instance tag key.</p>
   */
  Key?: string;

  /**
   * <p>The EC2 instance tag value.</p>
   */
  Value?: string;
}

/**
 * <p>Represents a pre-existing file or directory on the host machine that the volume maps to.</p>
 */
export interface HostPath {
  /**
   * <p>Path of the file or directory on the host that the volume maps to.</p>
   */
  Path?: string;
}

/**
 * <p>Volume used by the Kubernetes workload.</p>
 */
export interface Volume {
  /**
   * <p>Volume name.</p>
   */
  Name?: string;

  /**
   * <p>Represents a pre-existing file or directory on the host machine that the volume maps to.</p>
   */
  HostPath?: HostPath;
}

/**
 * <p>Contains information about the task in an ECS cluster.</p>
 */
export interface EcsTaskDetails {
  /**
   * <p>The Amazon Resource Name (ARN) of the task.</p>
   */
  Arn?: string;

  /**
   * <p>The ARN of the task definition that creates the task.</p>
   */
  DefinitionArn?: string;

  /**
   * <p>The version counter for the task.</p>
   */
  Version?: string;

  /**
   * <p>The Unix timestamp for the time when the task was created.</p>
   */
  TaskCreatedAt?: Date;

  /**
   * <p>The Unix timestamp for the time when the task started.</p>
   */
  StartedAt?: Date;

  /**
   * <p>Contains the tag specified when a task is started.</p>
   */
  StartedBy?: string;

  /**
   * <p>The tags of the ECS Task.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The list of data volume definitions for the task.</p>
   */
  Volumes?: Volume[];

  /**
   * <p>The containers that's associated with the task.</p>
   */
  Containers?: Container[];

  /**
   * <p>The name of the task group that's associated with the task.</p>
   */
  Group?: string;
}

/**
 * <p>Contains information about the details of the ECS Cluster.</p>
 */
export interface EcsClusterDetails {
  /**
   * <p>The name of the ECS Cluster.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the cluster.</p>
   */
  Arn?: string;

  /**
   * <p>The status of the ECS cluster.</p>
   */
  Status?: string;

  /**
   * <p>The number of services that are running on the cluster in an ACTIVE state.</p>
   */
  ActiveServicesCount?: number;

  /**
   * <p>The number of container instances registered into the cluster.</p>
   */
  RegisteredContainerInstancesCount?: number;

  /**
   * <p>The number of tasks in the cluster that are in the RUNNING state.</p>
   */
  RunningTasksCount?: number;

  /**
   * <p>The tags of the ECS Cluster.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Contains information about the details of the ECS Task.</p>
   */
  TaskDetails?: EcsTaskDetails;
}

/**
 * <p>Details about the EKS cluster involved in a Kubernetes finding.</p>
 */
export interface EksClusterDetails {
  /**
   * <p>EKS cluster name.</p>
   */
  Name?: string;

  /**
   * <p>EKS cluster ARN.</p>
   */
  Arn?: string;

  /**
   * <p>The VPC ID to which the EKS cluster is attached.</p>
   */
  VpcId?: string;

  /**
   * <p>The EKS cluster status.</p>
   */
  Status?: string;

  /**
   * <p>The EKS cluster tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The timestamp when the EKS cluster was created.</p>
   */
  CreatedAt?: Date;
}

export interface EnableOrganizationAdminAccountRequest {
  /**
   * <p>The Amazon Web Services Account ID for the organization account to be enabled as a GuardDuty delegated
   *       administrator.</p>
   */
  AdminAccountId: string | undefined;
}

export interface EnableOrganizationAdminAccountResponse {}

/**
 * <p>An instance of a threat intelligence detail that constitutes evidence for the
 *       finding.</p>
 */
export interface ThreatIntelligenceDetail {
  /**
   * <p>The name of the threat intelligence list that triggered the finding.</p>
   */
  ThreatListName?: string;

  /**
   * <p>A list of names of the threats in the threat intelligence list that triggered the
   *       finding.</p>
   */
  ThreatNames?: string[];
}

/**
 * <p>Contains information about the reason that the finding was generated.</p>
 */
export interface Evidence {
  /**
   * <p>A list of threat intelligence details related to the evidence.</p>
   */
  ThreatIntelligenceDetails?: ThreatIntelligenceDetail[];
}

export enum Feedback {
  NOT_USEFUL = "NOT_USEFUL",
  USEFUL = "USEFUL",
}

/**
 * <p>Contains information about the EC2 instance profile.</p>
 */
export interface IamInstanceProfile {
  /**
   * <p>The profile ARN of the EC2 instance.</p>
   */
  Arn?: string;

  /**
   * <p>The profile ID of the EC2 instance.</p>
   */
  Id?: string;
}

/**
 * <p>Contains other private IP address information of the EC2 instance.</p>
 */
export interface PrivateIpAddressDetails {
  /**
   * <p>The private DNS name of the EC2 instance.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The private IP address of the EC2 instance.</p>
   */
  PrivateIpAddress?: string;
}

/**
 * <p>Contains information about the security groups associated with the EC2 instance.</p>
 */
export interface SecurityGroup {
  /**
   * <p>The security group ID of the EC2 instance.</p>
   */
  GroupId?: string;

  /**
   * <p>The security group name of the EC2 instance.</p>
   */
  GroupName?: string;
}

/**
 * <p>Contains information about the elastic network interface of the EC2 instance.</p>
 */
export interface NetworkInterface {
  /**
   * <p>A list of IPv6 addresses for the EC2 instance.</p>
   */
  Ipv6Addresses?: string[];

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The private DNS name of the EC2 instance.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The private IP address of the EC2 instance.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>Other private IP address information of the EC2 instance.</p>
   */
  PrivateIpAddresses?: PrivateIpAddressDetails[];

  /**
   * <p>The public DNS name of the EC2 instance.</p>
   */
  PublicDnsName?: string;

  /**
   * <p>The public IP address of the EC2 instance.</p>
   */
  PublicIp?: string;

  /**
   * <p>The security groups associated with the EC2 instance.</p>
   */
  SecurityGroups?: SecurityGroup[];

  /**
   * <p>The subnet ID of the EC2 instance.</p>
   */
  SubnetId?: string;

  /**
   * <p>The VPC ID of the EC2 instance.</p>
   */
  VpcId?: string;
}

/**
 * <p>Contains information about the product code for the EC2 instance.</p>
 */
export interface ProductCode {
  /**
   * <p>The product code information.</p>
   */
  Code?: string;

  /**
   * <p>The product code type.</p>
   */
  ProductType?: string;
}

/**
 * <p>Contains information about the details of an instance.</p>
 */
export interface InstanceDetails {
  /**
   * <p>The Availability Zone of the EC2 instance.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The profile information of the EC2 instance.</p>
   */
  IamInstanceProfile?: IamInstanceProfile;

  /**
   * <p>The image description of the EC2 instance.</p>
   */
  ImageDescription?: string;

  /**
   * <p>The image ID of the EC2 instance.</p>
   */
  ImageId?: string;

  /**
   * <p>The ID of the EC2 instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The state of the EC2 instance.</p>
   */
  InstanceState?: string;

  /**
   * <p>The type of the EC2 instance.</p>
   */
  InstanceType?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Outpost. Only applicable to Amazon Web Services Outposts
   *       instances.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The launch time of the EC2 instance.</p>
   */
  LaunchTime?: string;

  /**
   * <p>The elastic network interface information of the EC2 instance.</p>
   */
  NetworkInterfaces?: NetworkInterface[];

  /**
   * <p>The platform of the EC2 instance.</p>
   */
  Platform?: string;

  /**
   * <p>The product code of the EC2 instance.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * <p>The tags of the EC2 instance.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>Details about the Kubernetes user involved in a Kubernetes finding.</p>
 */
export interface KubernetesUserDetails {
  /**
   * <p>The username of the user who called the Kubernetes API.</p>
   */
  Username?: string;

  /**
   * <p>The user ID of the user who called the Kubernetes API.</p>
   */
  Uid?: string;

  /**
   * <p>The groups that include the user who called the Kubernetes API.</p>
   */
  Groups?: string[];
}

/**
 * <p>Details about the Kubernetes workload involved in a Kubernetes finding.</p>
 */
export interface KubernetesWorkloadDetails {
  /**
   * <p>Kubernetes workload name.</p>
   */
  Name?: string;

  /**
   * <p>Kubernetes workload type (e.g. Pod, Deployment, etc.).</p>
   */
  Type?: string;

  /**
   * <p>Kubernetes workload ID.</p>
   */
  Uid?: string;

  /**
   * <p>Kubernetes namespace that the workload is part of.</p>
   */
  Namespace?: string;

  /**
   * <p>Whether the hostNetwork flag is enabled for the pods included in the workload.</p>
   */
  HostNetwork?: boolean;

  /**
   * <p>Containers running as part of the Kubernetes workload.</p>
   */
  Containers?: Container[];

  /**
   * <p>Volumes used by the Kubernetes workload.</p>
   */
  Volumes?: Volume[];
}

/**
 * <p>Details about Kubernetes resources such as a Kubernetes user or workload resource involved in a Kubernetes finding.</p>
 */
export interface KubernetesDetails {
  /**
   * <p>Details about the Kubernetes user involved in a Kubernetes finding.</p>
   */
  KubernetesUserDetails?: KubernetesUserDetails;

  /**
   * <p>Details about the Kubernetes workload involved in a Kubernetes finding.</p>
   */
  KubernetesWorkloadDetails?: KubernetesWorkloadDetails;
}

/**
 * <p>Contains information on the owner of the bucket.</p>
 */
export interface Owner {
  /**
   * <p>The canonical user ID of the bucket owner. For information about locating your canonical
   *       user ID see <a href="https://docs.aws.amazon.com/general/latest/gr/acct-identifiers.html#FindingCanonicalId">Finding Your Account
   *         Canonical User ID.</a>
   *          </p>
   */
  Id?: string;
}

/**
 * <p>Contains information about how permissions are configured for the S3 bucket.</p>
 */
export interface PermissionConfiguration {
  /**
   * <p>Contains information about the bucket level permissions for the S3 bucket.</p>
   */
  BucketLevelPermissions?: BucketLevelPermissions;

  /**
   * <p>Contains information about the account level permissions on the S3 bucket.</p>
   */
  AccountLevelPermissions?: AccountLevelPermissions;
}

/**
 * <p>Describes the public access policies that apply to the S3 bucket.</p>
 */
export interface PublicAccess {
  /**
   * <p>Contains information about how permissions are configured for the S3 bucket.</p>
   */
  PermissionConfiguration?: PermissionConfiguration;

  /**
   * <p>Describes the effective permission on this bucket after factoring all attached
   *       policies.</p>
   */
  EffectivePermission?: string;
}

/**
 * <p>Contains information on the S3 bucket.</p>
 */
export interface S3BucketDetail {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the S3 bucket.</p>
   */
  Name?: string;

  /**
   * <p>Describes whether the bucket is a source or destination bucket.</p>
   */
  Type?: string;

  /**
   * <p>The date and time the bucket was created at.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The owner of the S3 bucket.</p>
   */
  Owner?: Owner;

  /**
   * <p>All tags attached to the S3 bucket</p>
   */
  Tags?: Tag[];

  /**
   * <p>Describes the server side encryption method used in the S3 bucket.</p>
   */
  DefaultServerSideEncryption?: DefaultServerSideEncryption;

  /**
   * <p>Describes the public access policies that apply to the S3 bucket.</p>
   */
  PublicAccess?: PublicAccess;
}

/**
 * <p>Contains information about the Amazon Web Services resource associated with the activity that prompted
 *       GuardDuty to generate a finding.</p>
 */
export interface Resource {
  /**
   * <p>The IAM access key details (IAM user information) of a user that engaged in the activity
   *       that prompted GuardDuty to generate a finding.</p>
   */
  AccessKeyDetails?: AccessKeyDetails;

  /**
   * <p>Contains information on the S3 bucket.</p>
   */
  S3BucketDetails?: S3BucketDetail[];

  /**
   * <p>The information about the EC2 instance associated with the activity that prompted
   *       GuardDuty to generate a finding.</p>
   */
  InstanceDetails?: InstanceDetails;

  /**
   * <p>Details about the EKS cluster involved in a Kubernetes finding.</p>
   */
  EksClusterDetails?: EksClusterDetails;

  /**
   * <p>Details about the Kubernetes user and workload involved in a Kubernetes finding.</p>
   */
  KubernetesDetails?: KubernetesDetails;

  /**
   * <p>The type of Amazon Web Services resource.</p>
   */
  ResourceType?: string;

  /**
   * <p>Contains list of scanned and skipped EBS volumes with details.</p>
   */
  EbsVolumeDetails?: EbsVolumeDetails;

  /**
   * <p>Contains information about the details of the ECS Cluster.</p>
   */
  EcsClusterDetails?: EcsClusterDetails;

  /**
   * <p>Details of a container.</p>
   */
  ContainerDetails?: Container;
}

/**
 * <p>Additional information about the generated finding.</p>
 */
export interface ServiceAdditionalInfo {
  /**
   * <p>This field specifies the value of the additional information.</p>
   */
  Value?: string;

  /**
   * <p>Describes the type of the additional information.</p>
   */
  Type?: string;
}

/**
 * <p>Contains additional information about the generated finding.</p>
 */
export interface Service {
  /**
   * <p>Information about the activity that is described in a finding.</p>
   */
  Action?: Action;

  /**
   * <p>An evidence object associated with the service.</p>
   */
  Evidence?: Evidence;

  /**
   * <p>Indicates whether this finding is archived.</p>
   */
  Archived?: boolean;

  /**
   * <p>The total count of the occurrences of this finding type.</p>
   */
  Count?: number;

  /**
   * <p>The detector ID for the GuardDuty service.</p>
   */
  DetectorId?: string;

  /**
   * <p>The first-seen timestamp of the activity that prompted GuardDuty to generate this
   *       finding.</p>
   */
  EventFirstSeen?: string;

  /**
   * <p>The last-seen timestamp of the activity that prompted GuardDuty to generate this
   *       finding.</p>
   */
  EventLastSeen?: string;

  /**
   * <p>The resource role information for this finding.</p>
   */
  ResourceRole?: string;

  /**
   * <p>The name of the Amazon Web Services service (GuardDuty) that generated a finding.</p>
   */
  ServiceName?: string;

  /**
   * <p>Feedback that was submitted about the finding.</p>
   */
  UserFeedback?: string;

  /**
   * <p>Contains additional information about the generated finding.</p>
   */
  AdditionalInfo?: ServiceAdditionalInfo;

  /**
   * <p>The name of the feature that generated a finding.</p>
   */
  FeatureName?: string;

  /**
   * <p>Returns details from the malware scan that created a finding.</p>
   */
  EbsVolumeScanDetails?: EbsVolumeScanDetails;
}

/**
 * <p>Contains information about the finding, which is generated when abnormal or suspicious
 *       activity is detected.</p>
 */
export interface Finding {
  /**
   * <p>The ID of the account in which the finding was generated.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The ARN of the finding.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The confidence score for the finding.</p>
   */
  Confidence?: number;

  /**
   * <p>The time and date when the finding was created.</p>
   */
  CreatedAt: string | undefined;

  /**
   * <p>The description of the finding.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the finding.</p>
   */
  Id: string | undefined;

  /**
   * <p>The partition associated with the finding.</p>
   */
  Partition?: string;

  /**
   * <p>The Region where the finding was generated.</p>
   */
  Region: string | undefined;

  /**
   * <p>Contains information about the Amazon Web Services resource associated with the activity that prompted
   *       GuardDuty to generate a finding.</p>
   */
  Resource: Resource | undefined;

  /**
   * <p>The version of the schema used for the finding.</p>
   */
  SchemaVersion: string | undefined;

  /**
   * <p>Contains additional information about the generated finding.</p>
   */
  Service?: Service;

  /**
   * <p>The severity of the finding.</p>
   */
  Severity: number | undefined;

  /**
   * <p>The title of the finding.</p>
   */
  Title?: string;

  /**
   * <p>The type of finding.</p>
   */
  Type: string | undefined;

  /**
   * <p>The time and date when the finding was last updated.</p>
   */
  UpdatedAt: string | undefined;
}

/**
 * <p>Contains information about finding statistics.</p>
 */
export interface FindingStatistics {
  /**
   * <p>Represents a map of severity to count statistics for a set of findings.</p>
   */
  CountBySeverity?: Record<string, number>;
}

export enum FindingStatisticType {
  COUNT_BY_SEVERITY = "COUNT_BY_SEVERITY",
}

export interface GetAdministratorAccountRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
   */
  DetectorId: string | undefined;
}

export interface GetAdministratorAccountResponse {
  /**
   * <p>The administrator account details.</p>
   */
  Administrator: Administrator | undefined;
}

export interface GetDetectorRequest {
  /**
   * <p>The unique ID of the detector that you want to get.</p>
   */
  DetectorId: string | undefined;
}

export interface GetDetectorResponse {
  /**
   * <p>The timestamp of when the detector was created.</p>
   */
  CreatedAt?: string;

  /**
   * <p>The publishing frequency of the finding.</p>
   */
  FindingPublishingFrequency?: FindingPublishingFrequency | string;

  /**
   * <p>The GuardDuty service role.</p>
   */
  ServiceRole: string | undefined;

  /**
   * <p>The detector status.</p>
   */
  Status: DetectorStatus | string | undefined;

  /**
   * <p>The last-updated timestamp for the detector.</p>
   */
  UpdatedAt?: string;

  /**
   * <p>Describes which data sources are enabled for the detector.</p>
   */
  DataSources?: DataSourceConfigurationsResult;

  /**
   * <p>The tags of the detector resource.</p>
   */
  Tags?: Record<string, string>;
}

export interface GetFilterRequest {
  /**
   * <p>The unique ID of the detector that the filter is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The name of the filter you want to get.</p>
   */
  FilterName: string | undefined;
}

export interface GetFilterResponse {
  /**
   * <p>The name of the filter.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the filter.</p>
   */
  Description?: string;

  /**
   * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
   */
  Action: FilterAction | string | undefined;

  /**
   * <p>Specifies the position of the filter in the list of current filters. Also specifies the
   *       order in which this filter is applied to the findings.</p>
   */
  Rank?: number;

  /**
   * <p>Represents the criteria to be used in the filter for querying findings.</p>
   */
  FindingCriteria: FindingCriteria | undefined;

  /**
   * <p>The tags of the filter resource.</p>
   */
  Tags?: Record<string, string>;
}

export interface GetFindingsRequest {
  /**
   * <p>The ID of the detector that specifies the GuardDuty service whose findings you want to
   *       retrieve.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The IDs of the findings that you want to retrieve.</p>
   */
  FindingIds: string[] | undefined;

  /**
   * <p>Represents the criteria used for sorting findings.</p>
   */
  SortCriteria?: SortCriteria;
}

export interface GetFindingsResponse {
  /**
   * <p>A list of findings.</p>
   */
  Findings: Finding[] | undefined;
}

export interface GetFindingsStatisticsRequest {
  /**
   * <p>The ID of the detector that specifies the GuardDuty service whose findings' statistics you
   *       want to retrieve.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The types of finding statistics to retrieve.</p>
   */
  FindingStatisticTypes: (FindingStatisticType | string)[] | undefined;

  /**
   * <p>Represents the criteria that is used for querying findings.</p>
   */
  FindingCriteria?: FindingCriteria;
}

export interface GetFindingsStatisticsResponse {
  /**
   * <p>The finding statistics object.</p>
   */
  FindingStatistics: FindingStatistics | undefined;
}

export interface GetInvitationsCountRequest {}

export interface GetInvitationsCountResponse {
  /**
   * <p>The number of received invitations.</p>
   */
  InvitationsCount?: number;
}

export interface GetIPSetRequest {
  /**
   * <p>The unique ID of the detector that the IPSet is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique ID of the IPSet to retrieve.</p>
   */
  IpSetId: string | undefined;
}

export enum IpSetStatus {
  ACTIVATING = "ACTIVATING",
  ACTIVE = "ACTIVE",
  DEACTIVATING = "DEACTIVATING",
  DELETED = "DELETED",
  DELETE_PENDING = "DELETE_PENDING",
  ERROR = "ERROR",
  INACTIVE = "INACTIVE",
}

export interface GetIPSetResponse {
  /**
   * <p>The user-friendly name for the IPSet.</p>
   */
  Name: string | undefined;

  /**
   * <p>The format of the file that contains the IPSet.</p>
   */
  Format: IpSetFormat | string | undefined;

  /**
   * <p>The URI of the file that contains the IPSet.</p>
   */
  Location: string | undefined;

  /**
   * <p>The status of IPSet file that was uploaded.</p>
   */
  Status: IpSetStatus | string | undefined;

  /**
   * <p>The tags of the IPSet resource.</p>
   */
  Tags?: Record<string, string>;
}

export interface GetMalwareScanSettingsRequest {
  /**
   * <p>The unique ID of the detector that the scan setting is associated with.</p>
   */
  DetectorId: string | undefined;
}

export enum ScanCriterionKey {
  EC2_INSTANCE_TAG = "EC2_INSTANCE_TAG",
}

/**
 * <p>Represents key, value pair to be matched against given resource property.</p>
 */
export interface ScanConditionPair {
  /**
   * <p>Represents <i>key</i>
   *             <b></b> in the map condition.</p>
   */
  Key: string | undefined;

  /**
   * <p>Represents optional <i>value</i>
   *             <b></b> in the map condition. If not specified, only <i>key</i>
   *             <b></b> will be matched.</p>
   */
  Value?: string;
}

/**
 * <p>Contains information about the condition.</p>
 */
export interface ScanCondition {
  /**
   * <p>Represents an <i>mapEqual</i>
   *             <b></b> condition to be applied to
   *       a single field when triggering for malware scan.</p>
   */
  MapEquals: ScanConditionPair[] | undefined;
}

/**
 * <p>Contains information about criteria used to filter resources before triggering malware scan.</p>
 */
export interface ScanResourceCriteria {
  /**
   * <p>Represents condition that when matched will allow a malware scan for a certain resource.</p>
   */
  Include?: Record<string, ScanCondition>;

  /**
   * <p>Represents condition that when matched will prevent a malware scan for a certain resource.</p>
   */
  Exclude?: Record<string, ScanCondition>;
}

export interface GetMalwareScanSettingsResponse {
  /**
   * <p>Represents the criteria to be used in the filter for scanning resources.</p>
   */
  ScanResourceCriteria?: ScanResourceCriteria;

  /**
   * <p>An enum value representing possible snapshot preservation settings.</p>
   */
  EbsSnapshotPreservation?: EbsSnapshotPreservation | string;
}

export interface GetMasterAccountRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
   */
  DetectorId: string | undefined;
}

/**
 * <p>Contains information about the administrator account and invitation.</p>
 */
export interface Master {
  /**
   * <p>The ID of the account used as the administrator account.</p>
   */
  AccountId?: string;

  /**
   * <p>The value used to validate the administrator account to the member account.</p>
   */
  InvitationId?: string;

  /**
   * <p>The status of the relationship between the administrator and member accounts.</p>
   */
  RelationshipStatus?: string;

  /**
   * <p>The timestamp when the invitation was sent.</p>
   */
  InvitedAt?: string;
}

export interface GetMasterAccountResponse {
  /**
   * <p>The administrator account details.</p>
   */
  Master: Master | undefined;
}

export interface GetMemberDetectorsRequest {
  /**
   * <p>The detector ID for the administrator account.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The account ID of the member account.</p>
   */
  AccountIds: string[] | undefined;
}

/**
 * <p>Contains information on which data sources are enabled for a member account.</p>
 */
export interface MemberDataSourceConfiguration {
  /**
   * <p>The account ID for the member account.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>Contains information on the status of data sources for the account.</p>
   */
  DataSources: DataSourceConfigurationsResult | undefined;
}

export interface GetMemberDetectorsResponse {
  /**
   * <p>An object that describes which data sources are enabled for a member account.</p>
   */
  MemberDataSourceConfigurations: MemberDataSourceConfiguration[] | undefined;

  /**
   * <p>A list of member account IDs that were unable to be processed along with an explanation
   *       for why they were not processed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

export interface GetMembersRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty account whose members you want to
   *       retrieve.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of account IDs of the GuardDuty member accounts that you want to describe.</p>
   */
  AccountIds: string[] | undefined;
}

/**
 * <p>Contains information about the member account. </p>
 */
export interface Member {
  /**
   * <p>The ID of the member account.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The detector ID of the member account.</p>
   */
  DetectorId?: string;

  /**
   * <p>The administrator account ID.</p>
   */
  MasterId: string | undefined;

  /**
   * <p>The email address of the member account.</p>
   */
  Email: string | undefined;

  /**
   * <p>The status of the relationship between the member and the administrator.</p>
   */
  RelationshipStatus: string | undefined;

  /**
   * <p>The timestamp when the invitation was sent.</p>
   */
  InvitedAt?: string;

  /**
   * <p>The last-updated timestamp of the member.</p>
   */
  UpdatedAt: string | undefined;

  /**
   * <p>The administrator account ID.</p>
   */
  AdministratorId?: string;
}

export interface GetMembersResponse {
  /**
   * <p>A list of members.</p>
   */
  Members: Member[] | undefined;

  /**
   * <p>A list of objects that contain the unprocessed account and a result string that explains
   *       why it was unprocessed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

export interface GetRemainingFreeTrialDaysRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of account identifiers of the GuardDuty member account.</p>
   */
  AccountIds?: string[];
}

export interface GetRemainingFreeTrialDaysResponse {
  /**
   * <p>The member accounts which were included in a request and were processed successfully.</p>
   */
  Accounts?: AccountFreeTrialInfo[];

  /**
   * <p>The member account that was included in a request but for which the request could not be processed.</p>
   */
  UnprocessedAccounts?: UnprocessedAccount[];
}

export interface GetThreatIntelSetRequest {
  /**
   * <p>The unique ID of the detector that the threatIntelSet is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique ID of the threatIntelSet that you want to get.</p>
   */
  ThreatIntelSetId: string | undefined;
}

export enum ThreatIntelSetStatus {
  ACTIVATING = "ACTIVATING",
  ACTIVE = "ACTIVE",
  DEACTIVATING = "DEACTIVATING",
  DELETED = "DELETED",
  DELETE_PENDING = "DELETE_PENDING",
  ERROR = "ERROR",
  INACTIVE = "INACTIVE",
}

export interface GetThreatIntelSetResponse {
  /**
   * <p>A user-friendly ThreatIntelSet name displayed in all findings that are generated by
   *       activity that involves IP addresses included in this ThreatIntelSet.</p>
   */
  Name: string | undefined;

  /**
   * <p>The format of the threatIntelSet.</p>
   */
  Format: ThreatIntelSetFormat | string | undefined;

  /**
   * <p>The URI of the file that contains the ThreatIntelSet. </p>
   */
  Location: string | undefined;

  /**
   * <p>The status of threatIntelSet file uploaded.</p>
   */
  Status: ThreatIntelSetStatus | string | undefined;

  /**
   * <p>The tags of the threat list resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * <p>Contains information about the criteria used to query usage statistics.</p>
 */
export interface UsageCriteria {
  /**
   * <p>The account IDs to aggregate usage statistics from.</p>
   */
  AccountIds?: string[];

  /**
   * <p>The data sources to aggregate usage statistics from.</p>
   */
  DataSources: (DataSource | string)[] | undefined;

  /**
   * <p>The resources to aggregate usage statistics from. Only accepts exact resource
   *       names.</p>
   */
  Resources?: string[];
}

export enum UsageStatisticType {
  SUM_BY_ACCOUNT = "SUM_BY_ACCOUNT",
  SUM_BY_DATA_SOURCE = "SUM_BY_DATA_SOURCE",
  SUM_BY_RESOURCE = "SUM_BY_RESOURCE",
  TOP_RESOURCES = "TOP_RESOURCES",
}

export interface GetUsageStatisticsRequest {
  /**
   * <p>The ID of the detector that specifies the GuardDuty service whose usage statistics you
   *       want to retrieve.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The type of usage statistics to retrieve.</p>
   */
  UsageStatisticType: UsageStatisticType | string | undefined;

  /**
   * <p>Represents the criteria used for querying usage.</p>
   */
  UsageCriteria: UsageCriteria | undefined;

  /**
   * <p>The currency unit you would like to view your usage statistics in. Current valid values
   *       are USD.</p>
   */
  Unit?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of
   *       this parameter to null for the first request to a list action. For subsequent calls, use the
   *       NextToken value returned from the previous request to continue listing results after the first
   *       page.</p>
   */
  NextToken?: string;
}

/**
 * <p>Contains the total usage with the corresponding currency unit for that value.</p>
 */
export interface Total {
  /**
   * <p>The total usage.</p>
   */
  Amount?: string;

  /**
   * <p>The currency unit that the amount is given in.</p>
   */
  Unit?: string;
}

/**
 * <p>Contains information on the total of usage based on account IDs.</p>
 */
export interface UsageAccountResult {
  /**
   * <p>The Account ID that generated usage.</p>
   */
  AccountId?: string;

  /**
   * <p>Represents the total of usage for the Account ID.</p>
   */
  Total?: Total;
}

/**
 * <p>Contains information on the result of usage based on data source type.</p>
 */
export interface UsageDataSourceResult {
  /**
   * <p>The data source type that generated usage.</p>
   */
  DataSource?: DataSource | string;

  /**
   * <p>Represents the total of usage for the specified data source.</p>
   */
  Total?: Total;
}

/**
 * <p>Contains information on the sum of usage based on an Amazon Web Services resource.</p>
 */
export interface UsageResourceResult {
  /**
   * <p>The Amazon Web Services resource that generated usage.</p>
   */
  Resource?: string;

  /**
   * <p>Represents the sum total of usage for the specified resource type.</p>
   */
  Total?: Total;
}

/**
 * <p>Contains the result of GuardDuty usage. If a UsageStatisticType is provided the result for
 *       other types will be null. </p>
 */
export interface UsageStatistics {
  /**
   * <p>The usage statistic sum organized by account ID.</p>
   */
  SumByAccount?: UsageAccountResult[];

  /**
   * <p>The usage statistic sum organized by on data source.</p>
   */
  SumByDataSource?: UsageDataSourceResult[];

  /**
   * <p>The usage statistic sum organized by resource.</p>
   */
  SumByResource?: UsageResourceResult[];

  /**
   * <p>Lists the top 50 resources that have generated the most GuardDuty usage, in order from
   *       most to least expensive.</p>
   */
  TopResources?: UsageResourceResult[];
}

export interface GetUsageStatisticsResponse {
  /**
   * <p>The usage statistics object. If a UsageStatisticType was provided, the objects
   *       representing other types will be null.</p>
   */
  UsageStatistics?: UsageStatistics;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

export interface InviteMembersRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty account that you want to invite members
   *       with.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of account IDs of the accounts that you want to invite to GuardDuty as
   *       members.</p>
   */
  AccountIds: string[] | undefined;

  /**
   * <p>A Boolean value that specifies whether you want to disable email notification to the accounts that you are inviting to GuardDuty as members.</p>
   */
  DisableEmailNotification?: boolean;

  /**
   * <p>The invitation message that you want to send to the accounts that you're inviting to
   *       GuardDuty as members.</p>
   */
  Message?: string;
}

export interface InviteMembersResponse {
  /**
   * <p>A list of objects that contain the unprocessed account and a result string that explains
   *       why it was unprocessed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

export interface ListDetectorsRequest {
  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   */
  NextToken?: string;
}

export interface ListDetectorsResponse {
  /**
   * <p>A list of detector IDs.</p>
   */
  DetectorIds: string[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

export interface ListFiltersRequest {
  /**
   * <p>The unique ID of the detector that the filter is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   */
  NextToken?: string;
}

export interface ListFiltersResponse {
  /**
   * <p>A list of filter names.</p>
   */
  FilterNames: string[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

export interface ListFindingsRequest {
  /**
   * <p>The ID of the detector that specifies the GuardDuty service whose findings you want to
   *       list.</p>
   */
  DetectorId: string | undefined;

  /**
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
   * <p>Represents the criteria used for sorting findings.</p>
   */
  SortCriteria?: SortCriteria;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   */
  NextToken?: string;
}

export interface ListFindingsResponse {
  /**
   * <p>The IDs of the findings that you're listing.</p>
   */
  FindingIds: string[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

export interface ListInvitationsRequest {
  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   */
  NextToken?: string;
}

/**
 * <p>Contains information about the invitation to become a member account.</p>
 */
export interface Invitation {
  /**
   * <p>The ID of the account that the invitation was sent from.</p>
   */
  AccountId?: string;

  /**
   * <p>The ID of the invitation. This value is used to validate the inviter account to the member
   *       account.</p>
   */
  InvitationId?: string;

  /**
   * <p>The status of the relationship between the inviter and invitee accounts.</p>
   */
  RelationshipStatus?: string;

  /**
   * <p>The timestamp when the invitation was sent.</p>
   */
  InvitedAt?: string;
}

export interface ListInvitationsResponse {
  /**
   * <p>A list of invitation descriptions.</p>
   */
  Invitations?: Invitation[];

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

export interface ListIPSetsRequest {
  /**
   * <p>The unique ID of the detector that the IPSet is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   */
  NextToken?: string;
}

export interface ListIPSetsResponse {
  /**
   * <p>The IDs of the IPSet resources.</p>
   */
  IpSetIds: string[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

export interface ListMembersRequest {
  /**
   * <p>The unique ID of the detector the member is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies whether to only return associated members or to return all members (including
   *       members who haven't been invited yet or have been disassociated).
   *       Member accounts must have been previously associated with the GuardDuty administrator account using <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateMembers.html">
   *                <code>Create
   *         Members</code>
   *             </a>.
   *     </p>
   */
  OnlyAssociated?: string;
}

export interface ListMembersResponse {
  /**
   * <p>A list of members.</p>
   */
  Members?: Member[];

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

export interface ListOrganizationAdminAccountsRequest {
  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of
   *       this parameter to null for the first request to a list action. For subsequent calls, use the
   *         <code>NextToken</code> value returned from the previous request to continue listing results
   *       after the first page.</p>
   */
  NextToken?: string;
}

export interface ListOrganizationAdminAccountsResponse {
  /**
   * <p>A list of accounts configured as GuardDuty delegated
   *       administrators.</p>
   */
  AdminAccounts?: AdminAccount[];

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

export interface ListPublishingDestinationsRequest {
  /**
   * <p>The ID of the detector to retrieve publishing destinations for.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of
   *       this parameter to null for the first request to a list action. For subsequent calls, use the
   *         <code>NextToken</code> value returned from the previous request to continue listing results
   *       after the first page.</p>
   */
  NextToken?: string;
}

export interface ListPublishingDestinationsResponse {
  /**
   * <p>A <code>Destinations</code> object that includes information about each publishing
   *       destination returned.</p>
   */
  Destinations: Destination[] | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of
   *       this parameter to null for the first request to a list action. For subsequent calls, use the
   *         <code>NextToken</code> value returned from the previous request to continue listing results
   *       after the first page.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the given GuardDuty resource. </p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with the resource.</p>
   */
  Tags?: Record<string, string>;
}

export interface ListThreatIntelSetsRequest {
  /**
   * <p>The unique ID of the detector that the threatIntelSet is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;

  /**
   * <p>You can use this parameter to paginate results in the response. Set the value of this
   *       parameter to null on your first call to the list action. For subsequent calls to the action,
   *       fill nextToken in the request with the value of NextToken from the previous response to
   *       continue listing data.</p>
   */
  NextToken?: string;
}

export interface ListThreatIntelSetsResponse {
  /**
   * <p>The IDs of the ThreatIntelSet resources.</p>
   */
  ThreatIntelSetIds: string[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

export interface StartMonitoringMembersRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty administrator account associated with the member
   *       accounts to monitor.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of account IDs of the GuardDuty member accounts to start monitoring.</p>
   */
  AccountIds: string[] | undefined;
}

export interface StartMonitoringMembersResponse {
  /**
   * <p>A list of objects that contain the unprocessed account and a result string that explains
   *       why it was unprocessed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

export interface StopMonitoringMembersRequest {
  /**
   * <p>The unique ID of the detector associated with the GuardDuty administrator account that is
   *       monitoring member accounts.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of account IDs for the member accounts to stop monitoring.</p>
   */
  AccountIds: string[] | undefined;
}

export interface StopMonitoringMembersResponse {
  /**
   * <p>A list of objects that contain an accountId for each account that could not be processed,
   *       and a result string that indicates why the account was not processed. </p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the GuardDuty resource to apply a tag to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to be added to a resource.</p>
   */
  Tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UnarchiveFindingsRequest {
  /**
   * <p>The ID of the detector associated with the findings to unarchive.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The IDs of the findings to unarchive.</p>
   */
  FindingIds: string[] | undefined;
}

export interface UnarchiveFindingsResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource to remove tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateDetectorRequest {
  /**
   * <p>The unique ID of the detector to update.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>Specifies whether the detector is enabled or not enabled.</p>
   */
  Enable?: boolean;

  /**
   * <p>An enum value that specifies how frequently findings are exported, such as to CloudWatch
   *       Events.</p>
   */
  FindingPublishingFrequency?: FindingPublishingFrequency | string;

  /**
   * <p>Describes which data sources will be updated.</p>
   */
  DataSources?: DataSourceConfigurations;
}

export interface UpdateDetectorResponse {}

export interface UpdateFilterRequest {
  /**
   * <p>The unique ID of the detector that specifies the GuardDuty service where you want to
   *       update a filter.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The name of the filter.</p>
   */
  FilterName: string | undefined;

  /**
   * <p>The description of the filter. Valid special characters include period (.), underscore (_), dash (-),
   *       and whitespace. The new line character is considered to be an invalid input for description.</p>
   */
  Description?: string;

  /**
   * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
   */
  Action?: FilterAction | string;

  /**
   * <p>Specifies the position of the filter in the list of current filters. Also specifies the
   *       order in which this filter is applied to the findings.</p>
   */
  Rank?: number;

  /**
   * <p>Represents the criteria to be used in the filter for querying findings.</p>
   */
  FindingCriteria?: FindingCriteria;
}

export interface UpdateFilterResponse {
  /**
   * <p>The name of the filter.</p>
   */
  Name: string | undefined;
}

export interface UpdateFindingsFeedbackRequest {
  /**
   * <p>The ID of the detector associated with the findings to update feedback for.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The IDs of the findings that you want to mark as useful or not useful.</p>
   */
  FindingIds: string[] | undefined;

  /**
   * <p>The feedback for the finding.</p>
   */
  Feedback: Feedback | string | undefined;

  /**
   * <p>Additional feedback about the GuardDuty findings.</p>
   */
  Comments?: string;
}

export interface UpdateFindingsFeedbackResponse {}

export interface UpdateIPSetRequest {
  /**
   * <p>The detectorID that specifies the GuardDuty service whose IPSet you want to update.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique ID that specifies the IPSet that you want to update.</p>
   */
  IpSetId: string | undefined;

  /**
   * <p>The unique ID that specifies the IPSet that you want to update.</p>
   */
  Name?: string;

  /**
   * <p>The updated URI of the file that contains the IPSet. </p>
   */
  Location?: string;

  /**
   * <p>The updated Boolean value that specifies whether the IPSet is active or not.</p>
   */
  Activate?: boolean;
}

export interface UpdateIPSetResponse {}

export interface UpdateMalwareScanSettingsRequest {
  /**
   * <p>The unique ID of the detector that specifies the GuardDuty service where you want to
   *       update scan settings.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>Represents the criteria to be used in the filter for selecting resources to scan.</p>
   */
  ScanResourceCriteria?: ScanResourceCriteria;

  /**
   * <p>An enum value representing possible snapshot preservation settings.</p>
   */
  EbsSnapshotPreservation?: EbsSnapshotPreservation | string;
}

export interface UpdateMalwareScanSettingsResponse {}

export interface UpdateMemberDetectorsRequest {
  /**
   * <p>The detector ID of the administrator account.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of member account IDs to be updated.</p>
   */
  AccountIds: string[] | undefined;

  /**
   * <p>Describes which data sources will be updated.</p>
   */
  DataSources?: DataSourceConfigurations;
}

export interface UpdateMemberDetectorsResponse {
  /**
   * <p>A list of member account IDs that were unable to be processed along with an explanation
   *       for why they were not processed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * <p>Organization-wide Kubernetes audit logs configuration.</p>
 */
export interface OrganizationKubernetesAuditLogsConfiguration {
  /**
   * <p>A value that contains information on whether Kubernetes audit logs should be enabled
   *       automatically as a data source for the organization.</p>
   */
  AutoEnable: boolean | undefined;
}

/**
 * <p>Organization-wide Kubernetes data sources configurations.</p>
 */
export interface OrganizationKubernetesConfiguration {
  /**
   * <p>Whether Kubernetes audit logs data source should be auto-enabled for new members joining the organization.</p>
   */
  AuditLogs: OrganizationKubernetesAuditLogsConfiguration | undefined;
}

/**
 * <p>Organization-wide EBS volumes scan configuration.</p>
 */
export interface OrganizationEbsVolumes {
  /**
   * <p>Whether scanning EBS volumes should be auto-enabled for new members joining the organization.</p>
   */
  AutoEnable?: boolean;
}

/**
 * <p>Organization-wide EC2 instances with findings scan configuration.</p>
 */
export interface OrganizationScanEc2InstanceWithFindings {
  /**
   * <p>Whether scanning EBS volumes should be auto-enabled for new members joining the organization.</p>
   */
  EbsVolumes?: OrganizationEbsVolumes;
}

/**
 * <p>Organization-wide Malware Protection configurations.</p>
 */
export interface OrganizationMalwareProtectionConfiguration {
  /**
   * <p>Whether Malware Protection for EC2 instances with findings should be auto-enabled for new members joining the organization.</p>
   */
  ScanEc2InstanceWithFindings?: OrganizationScanEc2InstanceWithFindings;
}

/**
 * <p>Describes whether S3 data event logs will be automatically enabled for new members of the
 *       organization.</p>
 */
export interface OrganizationS3LogsConfiguration {
  /**
   * <p>A value that contains information on whether S3 data event logs will be enabled
   *       automatically as a data source for the organization.</p>
   */
  AutoEnable: boolean | undefined;
}

/**
 * <p>An object that contains information on which data sources will be configured to be
 *       automatically enabled for new members within the organization.</p>
 */
export interface OrganizationDataSourceConfigurations {
  /**
   * <p>Describes whether S3 data event logs are enabled for new members of the
   *       organization.</p>
   */
  S3Logs?: OrganizationS3LogsConfiguration;

  /**
   * <p>Describes the configuration of Kubernetes data sources for new members of the organization.</p>
   */
  Kubernetes?: OrganizationKubernetesConfiguration;

  /**
   * <p>Describes the configuration of Malware Protection for new members of the organization.</p>
   */
  MalwareProtection?: OrganizationMalwareProtectionConfiguration;
}

export interface UpdateOrganizationConfigurationRequest {
  /**
   * <p>The ID of the detector to update the delegated administrator for.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>Indicates whether to automatically enable member accounts in the organization.</p>
   */
  AutoEnable: boolean | undefined;

  /**
   * <p>Describes which data sources will be updated.</p>
   */
  DataSources?: OrganizationDataSourceConfigurations;
}

export interface UpdateOrganizationConfigurationResponse {}

export interface UpdatePublishingDestinationRequest {
  /**
   * <p>The ID of the detector associated with the publishing destinations to update.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The ID of the publishing destination to update.</p>
   */
  DestinationId: string | undefined;

  /**
   * <p>A <code>DestinationProperties</code> object that includes the <code>DestinationArn</code>
   *       and <code>KmsKeyArn</code> of the publishing destination.</p>
   */
  DestinationProperties?: DestinationProperties;
}

export interface UpdatePublishingDestinationResponse {}

export interface UpdateThreatIntelSetRequest {
  /**
   * <p>The detectorID that specifies the GuardDuty service whose ThreatIntelSet you want to
   *       update.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique ID that specifies the ThreatIntelSet that you want to update.</p>
   */
  ThreatIntelSetId: string | undefined;

  /**
   * <p>The unique ID that specifies the ThreatIntelSet that you want to update.</p>
   */
  Name?: string;

  /**
   * <p>The updated URI of the file that contains the ThreateIntelSet.</p>
   */
  Location?: string;

  /**
   * <p>The updated Boolean value that specifies whether the ThreateIntelSet is active or
   *       not.</p>
   */
  Activate?: boolean;
}

export interface UpdateThreatIntelSetResponse {}

/**
 * @internal
 */
export const AcceptAdministratorInvitationRequestFilterSensitiveLog = (
  obj: AcceptAdministratorInvitationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptAdministratorInvitationResponseFilterSensitiveLog = (
  obj: AcceptAdministratorInvitationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptInvitationRequestFilterSensitiveLog = (obj: AcceptInvitationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptInvitationResponseFilterSensitiveLog = (obj: AcceptInvitationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccessControlListFilterSensitiveLog = (obj: AccessControlList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccessKeyDetailsFilterSensitiveLog = (obj: AccessKeyDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccountDetailFilterSensitiveLog = (obj: AccountDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataSourceFreeTrialFilterSensitiveLog = (obj: DataSourceFreeTrial): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KubernetesDataSourceFreeTrialFilterSensitiveLog = (obj: KubernetesDataSourceFreeTrial): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MalwareProtectionDataSourceFreeTrialFilterSensitiveLog = (
  obj: MalwareProtectionDataSourceFreeTrial
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataSourcesFreeTrialFilterSensitiveLog = (obj: DataSourcesFreeTrial): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccountFreeTrialInfoFilterSensitiveLog = (obj: AccountFreeTrialInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BlockPublicAccessFilterSensitiveLog = (obj: BlockPublicAccess): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccountLevelPermissionsFilterSensitiveLog = (obj: AccountLevelPermissions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainDetailsFilterSensitiveLog = (obj: DomainDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoteAccountDetailsFilterSensitiveLog = (obj: RemoteAccountDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CityFilterSensitiveLog = (obj: City): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CountryFilterSensitiveLog = (obj: Country): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GeoLocationFilterSensitiveLog = (obj: GeoLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrganizationFilterSensitiveLog = (obj: Organization): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoteIpDetailsFilterSensitiveLog = (obj: RemoteIpDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsApiCallActionFilterSensitiveLog = (obj: AwsApiCallAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DnsRequestActionFilterSensitiveLog = (obj: DnsRequestAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KubernetesApiCallActionFilterSensitiveLog = (obj: KubernetesApiCallAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LocalIpDetailsFilterSensitiveLog = (obj: LocalIpDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LocalPortDetailsFilterSensitiveLog = (obj: LocalPortDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemotePortDetailsFilterSensitiveLog = (obj: RemotePortDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkConnectionActionFilterSensitiveLog = (obj: NetworkConnectionAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PortProbeDetailFilterSensitiveLog = (obj: PortProbeDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PortProbeActionFilterSensitiveLog = (obj: PortProbeAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionFilterSensitiveLog = (obj: Action): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdminAccountFilterSensitiveLog = (obj: AdminAccount): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdministratorFilterSensitiveLog = (obj: Administrator): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArchiveFindingsRequestFilterSensitiveLog = (obj: ArchiveFindingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArchiveFindingsResponseFilterSensitiveLog = (obj: ArchiveFindingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BucketPolicyFilterSensitiveLog = (obj: BucketPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BucketLevelPermissionsFilterSensitiveLog = (obj: BucketLevelPermissions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudTrailConfigurationResultFilterSensitiveLog = (obj: CloudTrailConfigurationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConditionFilterSensitiveLog = (obj: Condition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SecurityContextFilterSensitiveLog = (obj: SecurityContext): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VolumeMountFilterSensitiveLog = (obj: VolumeMount): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContainerFilterSensitiveLog = (obj: Container): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KubernetesAuditLogsConfigurationFilterSensitiveLog = (obj: KubernetesAuditLogsConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KubernetesConfigurationFilterSensitiveLog = (obj: KubernetesConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScanEc2InstanceWithFindingsFilterSensitiveLog = (obj: ScanEc2InstanceWithFindings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MalwareProtectionConfigurationFilterSensitiveLog = (obj: MalwareProtectionConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3LogsConfigurationFilterSensitiveLog = (obj: S3LogsConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataSourceConfigurationsFilterSensitiveLog = (obj: DataSourceConfigurations): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDetectorRequestFilterSensitiveLog = (obj: CreateDetectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EbsVolumesResultFilterSensitiveLog = (obj: EbsVolumesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScanEc2InstanceWithFindingsResultFilterSensitiveLog = (obj: ScanEc2InstanceWithFindingsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MalwareProtectionConfigurationResultFilterSensitiveLog = (
  obj: MalwareProtectionConfigurationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnprocessedDataSourcesResultFilterSensitiveLog = (obj: UnprocessedDataSourcesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDetectorResponseFilterSensitiveLog = (obj: CreateDetectorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FindingCriteriaFilterSensitiveLog = (obj: FindingCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFilterRequestFilterSensitiveLog = (obj: CreateFilterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFilterResponseFilterSensitiveLog = (obj: CreateFilterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateIPSetRequestFilterSensitiveLog = (obj: CreateIPSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateIPSetResponseFilterSensitiveLog = (obj: CreateIPSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMembersRequestFilterSensitiveLog = (obj: CreateMembersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnprocessedAccountFilterSensitiveLog = (obj: UnprocessedAccount): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMembersResponseFilterSensitiveLog = (obj: CreateMembersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DestinationPropertiesFilterSensitiveLog = (obj: DestinationProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePublishingDestinationRequestFilterSensitiveLog = (obj: CreatePublishingDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePublishingDestinationResponseFilterSensitiveLog = (
  obj: CreatePublishingDestinationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSampleFindingsRequestFilterSensitiveLog = (obj: CreateSampleFindingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSampleFindingsResponseFilterSensitiveLog = (obj: CreateSampleFindingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateThreatIntelSetRequestFilterSensitiveLog = (obj: CreateThreatIntelSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateThreatIntelSetResponseFilterSensitiveLog = (obj: CreateThreatIntelSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DNSLogsConfigurationResultFilterSensitiveLog = (obj: DNSLogsConfigurationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FlowLogsConfigurationResultFilterSensitiveLog = (obj: FlowLogsConfigurationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KubernetesAuditLogsConfigurationResultFilterSensitiveLog = (
  obj: KubernetesAuditLogsConfigurationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KubernetesConfigurationResultFilterSensitiveLog = (obj: KubernetesConfigurationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3LogsConfigurationResultFilterSensitiveLog = (obj: S3LogsConfigurationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataSourceConfigurationsResultFilterSensitiveLog = (obj: DataSourceConfigurationsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeclineInvitationsRequestFilterSensitiveLog = (obj: DeclineInvitationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeclineInvitationsResponseFilterSensitiveLog = (obj: DeclineInvitationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefaultServerSideEncryptionFilterSensitiveLog = (obj: DefaultServerSideEncryption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDetectorRequestFilterSensitiveLog = (obj: DeleteDetectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDetectorResponseFilterSensitiveLog = (obj: DeleteDetectorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFilterRequestFilterSensitiveLog = (obj: DeleteFilterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFilterResponseFilterSensitiveLog = (obj: DeleteFilterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteInvitationsRequestFilterSensitiveLog = (obj: DeleteInvitationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteInvitationsResponseFilterSensitiveLog = (obj: DeleteInvitationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteIPSetRequestFilterSensitiveLog = (obj: DeleteIPSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteIPSetResponseFilterSensitiveLog = (obj: DeleteIPSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMembersRequestFilterSensitiveLog = (obj: DeleteMembersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMembersResponseFilterSensitiveLog = (obj: DeleteMembersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePublishingDestinationRequestFilterSensitiveLog = (obj: DeletePublishingDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePublishingDestinationResponseFilterSensitiveLog = (
  obj: DeletePublishingDestinationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteThreatIntelSetRequestFilterSensitiveLog = (obj: DeleteThreatIntelSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteThreatIntelSetResponseFilterSensitiveLog = (obj: DeleteThreatIntelSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterConditionFilterSensitiveLog = (obj: FilterCondition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterCriterionFilterSensitiveLog = (obj: FilterCriterion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterCriteriaFilterSensitiveLog = (obj: FilterCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SortCriteriaFilterSensitiveLog = (obj: SortCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMalwareScansRequestFilterSensitiveLog = (obj: DescribeMalwareScansRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VolumeDetailFilterSensitiveLog = (obj: VolumeDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceDetailsFilterSensitiveLog = (obj: ResourceDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScanResultDetailsFilterSensitiveLog = (obj: ScanResultDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TriggerDetailsFilterSensitiveLog = (obj: TriggerDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScanFilterSensitiveLog = (obj: Scan): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMalwareScansResponseFilterSensitiveLog = (obj: DescribeMalwareScansResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeOrganizationConfigurationRequestFilterSensitiveLog = (
  obj: DescribeOrganizationConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrganizationKubernetesAuditLogsConfigurationResultFilterSensitiveLog = (
  obj: OrganizationKubernetesAuditLogsConfigurationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrganizationKubernetesConfigurationResultFilterSensitiveLog = (
  obj: OrganizationKubernetesConfigurationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrganizationEbsVolumesResultFilterSensitiveLog = (obj: OrganizationEbsVolumesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrganizationScanEc2InstanceWithFindingsResultFilterSensitiveLog = (
  obj: OrganizationScanEc2InstanceWithFindingsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrganizationMalwareProtectionConfigurationResultFilterSensitiveLog = (
  obj: OrganizationMalwareProtectionConfigurationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrganizationS3LogsConfigurationResultFilterSensitiveLog = (
  obj: OrganizationS3LogsConfigurationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrganizationDataSourceConfigurationsResultFilterSensitiveLog = (
  obj: OrganizationDataSourceConfigurationsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeOrganizationConfigurationResponseFilterSensitiveLog = (
  obj: DescribeOrganizationConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePublishingDestinationRequestFilterSensitiveLog = (
  obj: DescribePublishingDestinationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePublishingDestinationResponseFilterSensitiveLog = (
  obj: DescribePublishingDestinationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DestinationFilterSensitiveLog = (obj: Destination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableOrganizationAdminAccountRequestFilterSensitiveLog = (
  obj: DisableOrganizationAdminAccountRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableOrganizationAdminAccountResponseFilterSensitiveLog = (
  obj: DisableOrganizationAdminAccountResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateFromAdministratorAccountRequestFilterSensitiveLog = (
  obj: DisassociateFromAdministratorAccountRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateFromAdministratorAccountResponseFilterSensitiveLog = (
  obj: DisassociateFromAdministratorAccountResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateFromMasterAccountRequestFilterSensitiveLog = (
  obj: DisassociateFromMasterAccountRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateFromMasterAccountResponseFilterSensitiveLog = (
  obj: DisassociateFromMasterAccountResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateMembersRequestFilterSensitiveLog = (obj: DisassociateMembersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateMembersResponseFilterSensitiveLog = (obj: DisassociateMembersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EbsVolumeDetailsFilterSensitiveLog = (obj: EbsVolumeDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HighestSeverityThreatDetailsFilterSensitiveLog = (obj: HighestSeverityThreatDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScannedItemCountFilterSensitiveLog = (obj: ScannedItemCount): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScanFilePathFilterSensitiveLog = (obj: ScanFilePath): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScanThreatNameFilterSensitiveLog = (obj: ScanThreatName): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThreatDetectedByNameFilterSensitiveLog = (obj: ThreatDetectedByName): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThreatsDetectedItemCountFilterSensitiveLog = (obj: ThreatsDetectedItemCount): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScanDetectionsFilterSensitiveLog = (obj: ScanDetections): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EbsVolumeScanDetailsFilterSensitiveLog = (obj: EbsVolumeScanDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HostPathFilterSensitiveLog = (obj: HostPath): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VolumeFilterSensitiveLog = (obj: Volume): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EcsTaskDetailsFilterSensitiveLog = (obj: EcsTaskDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EcsClusterDetailsFilterSensitiveLog = (obj: EcsClusterDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EksClusterDetailsFilterSensitiveLog = (obj: EksClusterDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableOrganizationAdminAccountRequestFilterSensitiveLog = (
  obj: EnableOrganizationAdminAccountRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableOrganizationAdminAccountResponseFilterSensitiveLog = (
  obj: EnableOrganizationAdminAccountResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThreatIntelligenceDetailFilterSensitiveLog = (obj: ThreatIntelligenceDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EvidenceFilterSensitiveLog = (obj: Evidence): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IamInstanceProfileFilterSensitiveLog = (obj: IamInstanceProfile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrivateIpAddressDetailsFilterSensitiveLog = (obj: PrivateIpAddressDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SecurityGroupFilterSensitiveLog = (obj: SecurityGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkInterfaceFilterSensitiveLog = (obj: NetworkInterface): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProductCodeFilterSensitiveLog = (obj: ProductCode): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceDetailsFilterSensitiveLog = (obj: InstanceDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KubernetesUserDetailsFilterSensitiveLog = (obj: KubernetesUserDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KubernetesWorkloadDetailsFilterSensitiveLog = (obj: KubernetesWorkloadDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KubernetesDetailsFilterSensitiveLog = (obj: KubernetesDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OwnerFilterSensitiveLog = (obj: Owner): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PermissionConfigurationFilterSensitiveLog = (obj: PermissionConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PublicAccessFilterSensitiveLog = (obj: PublicAccess): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3BucketDetailFilterSensitiveLog = (obj: S3BucketDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceFilterSensitiveLog = (obj: Resource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceAdditionalInfoFilterSensitiveLog = (obj: ServiceAdditionalInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceFilterSensitiveLog = (obj: Service): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FindingFilterSensitiveLog = (obj: Finding): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FindingStatisticsFilterSensitiveLog = (obj: FindingStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAdministratorAccountRequestFilterSensitiveLog = (obj: GetAdministratorAccountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAdministratorAccountResponseFilterSensitiveLog = (obj: GetAdministratorAccountResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDetectorRequestFilterSensitiveLog = (obj: GetDetectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDetectorResponseFilterSensitiveLog = (obj: GetDetectorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFilterRequestFilterSensitiveLog = (obj: GetFilterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFilterResponseFilterSensitiveLog = (obj: GetFilterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFindingsRequestFilterSensitiveLog = (obj: GetFindingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFindingsResponseFilterSensitiveLog = (obj: GetFindingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFindingsStatisticsRequestFilterSensitiveLog = (obj: GetFindingsStatisticsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFindingsStatisticsResponseFilterSensitiveLog = (obj: GetFindingsStatisticsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInvitationsCountRequestFilterSensitiveLog = (obj: GetInvitationsCountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInvitationsCountResponseFilterSensitiveLog = (obj: GetInvitationsCountResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetIPSetRequestFilterSensitiveLog = (obj: GetIPSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetIPSetResponseFilterSensitiveLog = (obj: GetIPSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMalwareScanSettingsRequestFilterSensitiveLog = (obj: GetMalwareScanSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScanConditionPairFilterSensitiveLog = (obj: ScanConditionPair): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScanConditionFilterSensitiveLog = (obj: ScanCondition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScanResourceCriteriaFilterSensitiveLog = (obj: ScanResourceCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMalwareScanSettingsResponseFilterSensitiveLog = (obj: GetMalwareScanSettingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMasterAccountRequestFilterSensitiveLog = (obj: GetMasterAccountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MasterFilterSensitiveLog = (obj: Master): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMasterAccountResponseFilterSensitiveLog = (obj: GetMasterAccountResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMemberDetectorsRequestFilterSensitiveLog = (obj: GetMemberDetectorsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MemberDataSourceConfigurationFilterSensitiveLog = (obj: MemberDataSourceConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMemberDetectorsResponseFilterSensitiveLog = (obj: GetMemberDetectorsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMembersRequestFilterSensitiveLog = (obj: GetMembersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MemberFilterSensitiveLog = (obj: Member): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMembersResponseFilterSensitiveLog = (obj: GetMembersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRemainingFreeTrialDaysRequestFilterSensitiveLog = (obj: GetRemainingFreeTrialDaysRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRemainingFreeTrialDaysResponseFilterSensitiveLog = (obj: GetRemainingFreeTrialDaysResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetThreatIntelSetRequestFilterSensitiveLog = (obj: GetThreatIntelSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetThreatIntelSetResponseFilterSensitiveLog = (obj: GetThreatIntelSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UsageCriteriaFilterSensitiveLog = (obj: UsageCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUsageStatisticsRequestFilterSensitiveLog = (obj: GetUsageStatisticsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TotalFilterSensitiveLog = (obj: Total): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UsageAccountResultFilterSensitiveLog = (obj: UsageAccountResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UsageDataSourceResultFilterSensitiveLog = (obj: UsageDataSourceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UsageResourceResultFilterSensitiveLog = (obj: UsageResourceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UsageStatisticsFilterSensitiveLog = (obj: UsageStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUsageStatisticsResponseFilterSensitiveLog = (obj: GetUsageStatisticsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InviteMembersRequestFilterSensitiveLog = (obj: InviteMembersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InviteMembersResponseFilterSensitiveLog = (obj: InviteMembersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDetectorsRequestFilterSensitiveLog = (obj: ListDetectorsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDetectorsResponseFilterSensitiveLog = (obj: ListDetectorsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFiltersRequestFilterSensitiveLog = (obj: ListFiltersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFiltersResponseFilterSensitiveLog = (obj: ListFiltersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFindingsRequestFilterSensitiveLog = (obj: ListFindingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFindingsResponseFilterSensitiveLog = (obj: ListFindingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInvitationsRequestFilterSensitiveLog = (obj: ListInvitationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InvitationFilterSensitiveLog = (obj: Invitation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInvitationsResponseFilterSensitiveLog = (obj: ListInvitationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListIPSetsRequestFilterSensitiveLog = (obj: ListIPSetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListIPSetsResponseFilterSensitiveLog = (obj: ListIPSetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMembersRequestFilterSensitiveLog = (obj: ListMembersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMembersResponseFilterSensitiveLog = (obj: ListMembersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListOrganizationAdminAccountsRequestFilterSensitiveLog = (
  obj: ListOrganizationAdminAccountsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListOrganizationAdminAccountsResponseFilterSensitiveLog = (
  obj: ListOrganizationAdminAccountsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPublishingDestinationsRequestFilterSensitiveLog = (obj: ListPublishingDestinationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPublishingDestinationsResponseFilterSensitiveLog = (obj: ListPublishingDestinationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListThreatIntelSetsRequestFilterSensitiveLog = (obj: ListThreatIntelSetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListThreatIntelSetsResponseFilterSensitiveLog = (obj: ListThreatIntelSetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartMonitoringMembersRequestFilterSensitiveLog = (obj: StartMonitoringMembersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartMonitoringMembersResponseFilterSensitiveLog = (obj: StartMonitoringMembersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopMonitoringMembersRequestFilterSensitiveLog = (obj: StopMonitoringMembersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopMonitoringMembersResponseFilterSensitiveLog = (obj: StopMonitoringMembersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnarchiveFindingsRequestFilterSensitiveLog = (obj: UnarchiveFindingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnarchiveFindingsResponseFilterSensitiveLog = (obj: UnarchiveFindingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDetectorRequestFilterSensitiveLog = (obj: UpdateDetectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDetectorResponseFilterSensitiveLog = (obj: UpdateDetectorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFilterRequestFilterSensitiveLog = (obj: UpdateFilterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFilterResponseFilterSensitiveLog = (obj: UpdateFilterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFindingsFeedbackRequestFilterSensitiveLog = (obj: UpdateFindingsFeedbackRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFindingsFeedbackResponseFilterSensitiveLog = (obj: UpdateFindingsFeedbackResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateIPSetRequestFilterSensitiveLog = (obj: UpdateIPSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateIPSetResponseFilterSensitiveLog = (obj: UpdateIPSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMalwareScanSettingsRequestFilterSensitiveLog = (obj: UpdateMalwareScanSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMalwareScanSettingsResponseFilterSensitiveLog = (obj: UpdateMalwareScanSettingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMemberDetectorsRequestFilterSensitiveLog = (obj: UpdateMemberDetectorsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMemberDetectorsResponseFilterSensitiveLog = (obj: UpdateMemberDetectorsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrganizationKubernetesAuditLogsConfigurationFilterSensitiveLog = (
  obj: OrganizationKubernetesAuditLogsConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrganizationKubernetesConfigurationFilterSensitiveLog = (
  obj: OrganizationKubernetesConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrganizationEbsVolumesFilterSensitiveLog = (obj: OrganizationEbsVolumes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrganizationScanEc2InstanceWithFindingsFilterSensitiveLog = (
  obj: OrganizationScanEc2InstanceWithFindings
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrganizationMalwareProtectionConfigurationFilterSensitiveLog = (
  obj: OrganizationMalwareProtectionConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrganizationS3LogsConfigurationFilterSensitiveLog = (obj: OrganizationS3LogsConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrganizationDataSourceConfigurationsFilterSensitiveLog = (
  obj: OrganizationDataSourceConfigurations
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateOrganizationConfigurationRequestFilterSensitiveLog = (
  obj: UpdateOrganizationConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateOrganizationConfigurationResponseFilterSensitiveLog = (
  obj: UpdateOrganizationConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePublishingDestinationRequestFilterSensitiveLog = (obj: UpdatePublishingDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePublishingDestinationResponseFilterSensitiveLog = (
  obj: UpdatePublishingDestinationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateThreatIntelSetRequestFilterSensitiveLog = (obj: UpdateThreatIntelSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateThreatIntelSetResponseFilterSensitiveLog = (obj: UpdateThreatIntelSetResponse): any => ({
  ...obj,
});

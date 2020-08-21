import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AcceptInvitationRequest {
  __type?: "AcceptInvitationRequest";
  /**
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The value that is used to validate the master account to the member account.</p>
   */
  InvitationId: string | undefined;

  /**
   * <p>The account ID of the master GuardDuty account whose invitation you're accepting.</p>
   */
  MasterId: string | undefined;
}

export namespace AcceptInvitationRequest {
  export const filterSensitiveLog = (obj: AcceptInvitationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AcceptInvitationRequest => __isa(o, "AcceptInvitationRequest");
}

export interface AcceptInvitationResponse {
  __type?: "AcceptInvitationResponse";
}

export namespace AcceptInvitationResponse {
  export const filterSensitiveLog = (obj: AcceptInvitationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AcceptInvitationResponse => __isa(o, "AcceptInvitationResponse");
}

/**
 * <p>Contains information on the current access control policies for the bucket.</p>
 */
export interface AccessControlList {
  __type?: "AccessControlList";
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

export namespace AccessControlList {
  export const filterSensitiveLog = (obj: AccessControlList): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccessControlList => __isa(o, "AccessControlList");
}

/**
 * <p>Contains information about the access keys.</p>
 */
export interface AccessKeyDetails {
  __type?: "AccessKeyDetails";
  /**
   * <p>The name of the user.</p>
   */
  UserName?: string;

  /**
   * <p>The type of the user.</p>
   */
  UserType?: string;

  /**
   * <p>The principal ID of the user.</p>
   */
  PrincipalId?: string;

  /**
   * <p>The access key ID of the user.</p>
   */
  AccessKeyId?: string;
}

export namespace AccessKeyDetails {
  export const filterSensitiveLog = (obj: AccessKeyDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccessKeyDetails => __isa(o, "AccessKeyDetails");
}

/**
 * <p>Contains information about the account.</p>
 */
export interface AccountDetail {
  __type?: "AccountDetail";
  /**
   * <p>The email address of the member account.</p>
   */
  Email: string | undefined;

  /**
   * <p>The member account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace AccountDetail {
  export const filterSensitiveLog = (obj: AccountDetail): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccountDetail => __isa(o, "AccountDetail");
}

/**
 * <p>Contains information about the account level permissions on the S3 bucket.</p>
 */
export interface AccountLevelPermissions {
  __type?: "AccountLevelPermissions";
  /**
   * <p>Describes the S3 Block Public Access settings of the bucket's parent account.</p>
   */
  BlockPublicAccess?: BlockPublicAccess;
}

export namespace AccountLevelPermissions {
  export const filterSensitiveLog = (obj: AccountLevelPermissions): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccountLevelPermissions => __isa(o, "AccountLevelPermissions");
}

/**
 * <p>Contains information about actions.</p>
 */
export interface Action {
  __type?: "Action";
  /**
   * <p>Information about the AWS_API_CALL action described in this finding.</p>
   */
  AwsApiCallAction?: AwsApiCallAction;

  /**
   * <p>Information about the NETWORK_CONNECTION action described in this finding.</p>
   */
  NetworkConnectionAction?: NetworkConnectionAction;

  /**
   * <p>Information about the PORT_PROBE action described in this finding.</p>
   */
  PortProbeAction?: PortProbeAction;

  /**
   * <p>The GuardDuty finding activity type.</p>
   */
  ActionType?: string;

  /**
   * <p>Information about the DNS_REQUEST action described in this finding.</p>
   */
  DnsRequestAction?: DnsRequestAction;
}

export namespace Action {
  export const filterSensitiveLog = (obj: Action): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Action => __isa(o, "Action");
}

/**
 * <p>The account within the organization specified as the GuardDuty delegated
 *       administrator.</p>
 */
export interface AdminAccount {
  __type?: "AdminAccount";
  /**
   * <p>Indicates whether the account is enabled as the delegated administrator.</p>
   */
  AdminStatus?: AdminStatus | string;

  /**
   * <p>The AWS account ID for the account.</p>
   */
  AdminAccountId?: string;
}

export namespace AdminAccount {
  export const filterSensitiveLog = (obj: AdminAccount): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AdminAccount => __isa(o, "AdminAccount");
}

export enum AdminStatus {
  DISABLE_IN_PROGRESS = "DISABLE_IN_PROGRESS",
  ENABLED = "ENABLED",
}

export interface ArchiveFindingsRequest {
  __type?: "ArchiveFindingsRequest";
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

export namespace ArchiveFindingsRequest {
  export const filterSensitiveLog = (obj: ArchiveFindingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ArchiveFindingsRequest => __isa(o, "ArchiveFindingsRequest");
}

export interface ArchiveFindingsResponse {
  __type?: "ArchiveFindingsResponse";
}

export namespace ArchiveFindingsResponse {
  export const filterSensitiveLog = (obj: ArchiveFindingsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ArchiveFindingsResponse => __isa(o, "ArchiveFindingsResponse");
}

/**
 * <p>Contains information about the API operation.</p>
 */
export interface AwsApiCallAction {
  __type?: "AwsApiCallAction";
  /**
   * <p>The remote IP information of the connection.</p>
   */
  RemoteIpDetails?: RemoteIpDetails;

  /**
   * <p>The AWS service name whose API was invoked.</p>
   */
  ServiceName?: string;

  /**
   * <p>The AWS API caller type.</p>
   */
  CallerType?: string;

  /**
   * <p>The AWS API name.</p>
   */
  Api?: string;

  /**
   * <p>The domain information for the AWS API call.</p>
   */
  DomainDetails?: DomainDetails;
}

export namespace AwsApiCallAction {
  export const filterSensitiveLog = (obj: AwsApiCallAction): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsApiCallAction => __isa(o, "AwsApiCallAction");
}

/**
 * <p>A bad request exception object.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  /**
   * <p>The error type.</p>
   */
  Type?: string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BadRequestException => __isa(o, "BadRequestException");
}

/**
 * <p>Contains information on how the bucker owner's S3 Block Public Access settings are being
 *       applied to the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">S3 Block Public
 *         Access</a> for more information. </p>
 */
export interface BlockPublicAccess {
  __type?: "BlockPublicAccess";
  /**
   * <p>Indicates if S3 Block Public Access is set to <code>BlockPublicPolicy</code>.</p>
   */
  BlockPublicPolicy?: boolean;

  /**
   * <p>Indicates if S3 Block Public Access is set to <code>RestrictPublicBuckets</code>.</p>
   */
  RestrictPublicBuckets?: boolean;

  /**
   * <p>Indicates if S3 Block Public Access is set to <code>BlockPublicAcls</code>.</p>
   */
  BlockPublicAcls?: boolean;

  /**
   * <p>Indicates if S3 Block Public Access is set to <code>IgnorePublicAcls</code>.</p>
   */
  IgnorePublicAcls?: boolean;
}

export namespace BlockPublicAccess {
  export const filterSensitiveLog = (obj: BlockPublicAccess): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BlockPublicAccess => __isa(o, "BlockPublicAccess");
}

/**
 * <p>Contains information about the bucket level permissions for the S3 bucket.</p>
 */
export interface BucketLevelPermissions {
  __type?: "BucketLevelPermissions";
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

export namespace BucketLevelPermissions {
  export const filterSensitiveLog = (obj: BucketLevelPermissions): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BucketLevelPermissions => __isa(o, "BucketLevelPermissions");
}

/**
 * <p>Contains information on the current bucket policies for the S3 bucket.</p>
 */
export interface BucketPolicy {
  __type?: "BucketPolicy";
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

export namespace BucketPolicy {
  export const filterSensitiveLog = (obj: BucketPolicy): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BucketPolicy => __isa(o, "BucketPolicy");
}

/**
 * <p>Contains information about the city associated with the IP address.</p>
 */
export interface City {
  __type?: "City";
  /**
   * <p>The city name of the remote IP address.</p>
   */
  CityName?: string;
}

export namespace City {
  export const filterSensitiveLog = (obj: City): any => ({
    ...obj,
  });
  export const isa = (o: any): o is City => __isa(o, "City");
}

/**
 * <p>Contains information on the status of CloudTrail as a data source for the detector.</p>
 */
export interface CloudTrailConfigurationResult {
  __type?: "CloudTrailConfigurationResult";
  /**
   * <p>Describes whether CloudTrail is enabled as a data source for the detector.</p>
   */
  Status: DataSourceStatus | string | undefined;
}

export namespace CloudTrailConfigurationResult {
  export const filterSensitiveLog = (obj: CloudTrailConfigurationResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CloudTrailConfigurationResult => __isa(o, "CloudTrailConfigurationResult");
}

/**
 * <p>Contains information about the condition.</p>
 */
export interface Condition {
  __type?: "Condition";
  /**
   * <p>Represents a <i>greater than or equal</i> condition to be applied to a
   *       single field when querying for findings.</p>
   */
  Gte?: number;

  /**
   * <p>Represents a <i>less than</i> condition to be applied to a single field when
   *       querying for findings.</p>
   */
  Lt?: number;

  /**
   * <p>Represents a <i>greater than or equal</i> condition to be applied to a
   *       single field when querying for findings.</p>
   */
  GreaterThanOrEqual?: number;

  /**
   * <p>Represents the <i>not equal</i> condition to be applied to a single field
   *       when querying for findings.</p>
   */
  Neq?: string[];

  /**
   * <p>Represents a <i>less than or equal</i> condition to be applied to a single
   *       field when querying for findings.</p>
   */
  LessThanOrEqual?: number;

  /**
   * <p>Represents the <i>equal</i> condition to be applied to a single field when
   *       querying for findings.</p>
   */
  Eq?: string[];

  /**
   * <p>Represents an <i>equal</i>
   *             <b></b> condition to be applied to
   *       a single field when querying for findings.</p>
   */
  Equals?: string[];

  /**
   * <p>Represents a <i>greater than</i> condition to be applied to a single field
   *       when querying for findings.</p>
   */
  Gt?: number;

  /**
   * <p>Represents a <i>not equal</i>
   *             <b></b> condition to be applied
   *       to a single field when querying for findings.</p>
   */
  NotEquals?: string[];

  /**
   * <p>Represents a <i>less than or equal</i> condition to be applied to a single
   *       field when querying for findings.</p>
   */
  Lte?: number;

  /**
   * <p>Represents a <i>greater than</i> condition to be applied to a single field
   *       when querying for findings.</p>
   */
  GreaterThan?: number;

  /**
   * <p>Represents a <i>less than</i> condition to be applied to a single field when
   *       querying for findings.</p>
   */
  LessThan?: number;
}

export namespace Condition {
  export const filterSensitiveLog = (obj: Condition): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Condition => __isa(o, "Condition");
}

/**
 * <p>Contains information about the country where the remote IP address is located.</p>
 */
export interface Country {
  __type?: "Country";
  /**
   * <p>The country name of the remote IP address.</p>
   */
  CountryName?: string;

  /**
   * <p>The country code of the remote IP address.</p>
   */
  CountryCode?: string;
}

export namespace Country {
  export const filterSensitiveLog = (obj: Country): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Country => __isa(o, "Country");
}

export interface CreateDetectorRequest {
  __type?: "CreateDetectorRequest";
  /**
   * <p>An object that describes which data sources will be enabled for the detector.</p>
   */
  DataSources?: DataSourceConfigurations;

  /**
   * <p>The idempotency token for the create request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The tags to be added to a new detector resource.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>An enum value that specifies how frequently updated findings are exported.</p>
   */
  FindingPublishingFrequency?: FindingPublishingFrequency | string;

  /**
   * <p>A Boolean value that specifies whether the detector is to be enabled.</p>
   */
  Enable: boolean | undefined;
}

export namespace CreateDetectorRequest {
  export const filterSensitiveLog = (obj: CreateDetectorRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDetectorRequest => __isa(o, "CreateDetectorRequest");
}

export interface CreateDetectorResponse {
  __type?: "CreateDetectorResponse";
  /**
   * <p>The unique ID of the created detector.</p>
   */
  DetectorId?: string;
}

export namespace CreateDetectorResponse {
  export const filterSensitiveLog = (obj: CreateDetectorResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDetectorResponse => __isa(o, "CreateDetectorResponse");
}

export interface CreateFilterRequest {
  __type?: "CreateFilterRequest";
  /**
   * <p>The unique ID of the detector of the GuardDuty account that you want to create a filter
   *       for.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The idempotency token for the create request.</p>
   */
  ClientToken?: string;

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
   * <p>The description of the filter.</p>
   */
  Description?: string;

  /**
   * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
   */
  Action?: FilterAction | string;

  /**
   * <p>The name of the filter.</p>
   */
  Name: string | undefined;

  /**
   * <p>The tags to be added to a new filter resource.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>Specifies the position of the filter in the list of current filters. Also specifies the
   *       order in which this filter is applied to the findings.</p>
   */
  Rank?: number;
}

export namespace CreateFilterRequest {
  export const filterSensitiveLog = (obj: CreateFilterRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateFilterRequest => __isa(o, "CreateFilterRequest");
}

export interface CreateFilterResponse {
  __type?: "CreateFilterResponse";
  /**
   * <p>The name of the successfully created filter.</p>
   */
  Name: string | undefined;
}

export namespace CreateFilterResponse {
  export const filterSensitiveLog = (obj: CreateFilterResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateFilterResponse => __isa(o, "CreateFilterResponse");
}

export interface CreateIPSetRequest {
  __type?: "CreateIPSetRequest";
  /**
   * <p>The format of the file that contains the IPSet.</p>
   */
  Format: IpSetFormat | string | undefined;

  /**
   * <p>A Boolean value that indicates whether GuardDuty is to start using the uploaded
   *       IPSet.</p>
   */
  Activate: boolean | undefined;

  /**
   * <p>The URI of the file that contains the IPSet. For example:
   *       https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.</p>
   */
  Location: string | undefined;

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
   * <p>The idempotency token for the create request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The tags to be added to a new IP set resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateIPSetRequest {
  export const filterSensitiveLog = (obj: CreateIPSetRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateIPSetRequest => __isa(o, "CreateIPSetRequest");
}

export interface CreateIPSetResponse {
  __type?: "CreateIPSetResponse";
  /**
   * <p>The ID of the IPSet resource.</p>
   */
  IpSetId: string | undefined;
}

export namespace CreateIPSetResponse {
  export const filterSensitiveLog = (obj: CreateIPSetResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateIPSetResponse => __isa(o, "CreateIPSetResponse");
}

export interface CreateMembersRequest {
  __type?: "CreateMembersRequest";
  /**
   * <p>A list of account ID and email address pairs of the accounts that you want to associate
   *       with the master GuardDuty account.</p>
   */
  AccountDetails: AccountDetail[] | undefined;

  /**
   * <p>The unique ID of the detector of the GuardDuty account that you want to associate member
   *       accounts with.</p>
   */
  DetectorId: string | undefined;
}

export namespace CreateMembersRequest {
  export const filterSensitiveLog = (obj: CreateMembersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateMembersRequest => __isa(o, "CreateMembersRequest");
}

export interface CreateMembersResponse {
  __type?: "CreateMembersResponse";
  /**
   * <p>A list of objects that include the <code>accountIds</code> of the unprocessed accounts and
   *       a result string that explains why each was unprocessed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

export namespace CreateMembersResponse {
  export const filterSensitiveLog = (obj: CreateMembersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateMembersResponse => __isa(o, "CreateMembersResponse");
}

export interface CreatePublishingDestinationRequest {
  __type?: "CreatePublishingDestinationRequest";
  /**
   * <p>The type of resource for the publishing destination. Currently only Amazon S3 buckets are
   *       supported.</p>
   */
  DestinationType: DestinationType | string | undefined;

  /**
   * <p>The ID of the GuardDuty detector associated with the publishing destination.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The idempotency token for the request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The properties of the publishing destination, including the ARNs for the destination and
   *       the KMS key used for encryption.</p>
   */
  DestinationProperties: DestinationProperties | undefined;
}

export namespace CreatePublishingDestinationRequest {
  export const filterSensitiveLog = (obj: CreatePublishingDestinationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreatePublishingDestinationRequest =>
    __isa(o, "CreatePublishingDestinationRequest");
}

export interface CreatePublishingDestinationResponse {
  __type?: "CreatePublishingDestinationResponse";
  /**
   * <p>The ID of the publishing destination that is created.</p>
   */
  DestinationId: string | undefined;
}

export namespace CreatePublishingDestinationResponse {
  export const filterSensitiveLog = (obj: CreatePublishingDestinationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreatePublishingDestinationResponse =>
    __isa(o, "CreatePublishingDestinationResponse");
}

export interface CreateSampleFindingsRequest {
  __type?: "CreateSampleFindingsRequest";
  /**
   * <p>The ID of the detector to create sample findings for.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The types of sample findings to generate.</p>
   */
  FindingTypes?: string[];
}

export namespace CreateSampleFindingsRequest {
  export const filterSensitiveLog = (obj: CreateSampleFindingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateSampleFindingsRequest => __isa(o, "CreateSampleFindingsRequest");
}

export interface CreateSampleFindingsResponse {
  __type?: "CreateSampleFindingsResponse";
}

export namespace CreateSampleFindingsResponse {
  export const filterSensitiveLog = (obj: CreateSampleFindingsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateSampleFindingsResponse => __isa(o, "CreateSampleFindingsResponse");
}

export interface CreateThreatIntelSetRequest {
  __type?: "CreateThreatIntelSetRequest";
  /**
   * <p>The idempotency token for the create request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The URI of the file that contains the ThreatIntelSet. For example:
   *       https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.</p>
   */
  Location: string | undefined;

  /**
   * <p>The tags to be added to a new threat list resource.</p>
   */
  Tags?: { [key: string]: string };

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
   * <p>The unique ID of the detector of the GuardDuty account that you want to create a
   *       threatIntelSet for.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>A Boolean value that indicates whether GuardDuty is to start using the uploaded
   *       ThreatIntelSet.</p>
   */
  Activate: boolean | undefined;
}

export namespace CreateThreatIntelSetRequest {
  export const filterSensitiveLog = (obj: CreateThreatIntelSetRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateThreatIntelSetRequest => __isa(o, "CreateThreatIntelSetRequest");
}

export interface CreateThreatIntelSetResponse {
  __type?: "CreateThreatIntelSetResponse";
  /**
   * <p>The ID of the ThreatIntelSet resource.</p>
   */
  ThreatIntelSetId: string | undefined;
}

export namespace CreateThreatIntelSetResponse {
  export const filterSensitiveLog = (obj: CreateThreatIntelSetResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateThreatIntelSetResponse => __isa(o, "CreateThreatIntelSetResponse");
}

export enum DataSource {
  CLOUD_TRAIL = "CLOUD_TRAIL",
  DNS_LOGS = "DNS_LOGS",
  FLOW_LOGS = "FLOW_LOGS",
  S3_LOGS = "S3_LOGS",
}

/**
 * <p>Contains information about which data sources are enabled.</p>
 */
export interface DataSourceConfigurations {
  __type?: "DataSourceConfigurations";
  /**
   * <p>Describes whether S3 data event logs are enabled as a data source.</p>
   */
  S3Logs?: S3LogsConfiguration;
}

export namespace DataSourceConfigurations {
  export const filterSensitiveLog = (obj: DataSourceConfigurations): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DataSourceConfigurations => __isa(o, "DataSourceConfigurations");
}

/**
 * <p>Contains information on the status of data sources for the detector.</p>
 */
export interface DataSourceConfigurationsResult {
  __type?: "DataSourceConfigurationsResult";
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
}

export namespace DataSourceConfigurationsResult {
  export const filterSensitiveLog = (obj: DataSourceConfigurationsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DataSourceConfigurationsResult => __isa(o, "DataSourceConfigurationsResult");
}

export enum DataSourceStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export interface DeclineInvitationsRequest {
  __type?: "DeclineInvitationsRequest";
  /**
   * <p>A list of account IDs of the AWS accounts that sent invitations to the current member
   *       account that you want to decline invitations from.</p>
   */
  AccountIds: string[] | undefined;
}

export namespace DeclineInvitationsRequest {
  export const filterSensitiveLog = (obj: DeclineInvitationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeclineInvitationsRequest => __isa(o, "DeclineInvitationsRequest");
}

export interface DeclineInvitationsResponse {
  __type?: "DeclineInvitationsResponse";
  /**
   * <p>A list of objects that contain the unprocessed account and a result string that explains
   *       why it was unprocessed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

export namespace DeclineInvitationsResponse {
  export const filterSensitiveLog = (obj: DeclineInvitationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeclineInvitationsResponse => __isa(o, "DeclineInvitationsResponse");
}

/**
 * <p>Contains information on the server side encryption method used in the S3 bucket. See
 *         <a href="https://docs.aws.amazon.com/AmazonS3/atest/dev/serv-side-encryption.html">S3
 *         Server-Side Encryption</a> for more information.</p>
 */
export interface DefaultServerSideEncryption {
  __type?: "DefaultServerSideEncryption";
  /**
   * <p>The Amazon Resource Name (ARN) of the KMS encryption key. Only available if the bucket
   *         <code>EncryptionType</code> is <code>aws:kms</code>.</p>
   */
  KmsMasterKeyArn?: string;

  /**
   * <p>The type of encryption used for objects within the S3 bucket.</p>
   */
  EncryptionType?: string;
}

export namespace DefaultServerSideEncryption {
  export const filterSensitiveLog = (obj: DefaultServerSideEncryption): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DefaultServerSideEncryption => __isa(o, "DefaultServerSideEncryption");
}

export interface DeleteDetectorRequest {
  __type?: "DeleteDetectorRequest";
  /**
   * <p>The unique ID of the detector that you want to delete.</p>
   */
  DetectorId: string | undefined;
}

export namespace DeleteDetectorRequest {
  export const filterSensitiveLog = (obj: DeleteDetectorRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDetectorRequest => __isa(o, "DeleteDetectorRequest");
}

export interface DeleteDetectorResponse {
  __type?: "DeleteDetectorResponse";
}

export namespace DeleteDetectorResponse {
  export const filterSensitiveLog = (obj: DeleteDetectorResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDetectorResponse => __isa(o, "DeleteDetectorResponse");
}

export interface DeleteFilterRequest {
  __type?: "DeleteFilterRequest";
  /**
   * <p>The unique ID of the detector that the filter is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The name of the filter that you want to delete.</p>
   */
  FilterName: string | undefined;
}

export namespace DeleteFilterRequest {
  export const filterSensitiveLog = (obj: DeleteFilterRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteFilterRequest => __isa(o, "DeleteFilterRequest");
}

export interface DeleteFilterResponse {
  __type?: "DeleteFilterResponse";
}

export namespace DeleteFilterResponse {
  export const filterSensitiveLog = (obj: DeleteFilterResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteFilterResponse => __isa(o, "DeleteFilterResponse");
}

export interface DeleteInvitationsRequest {
  __type?: "DeleteInvitationsRequest";
  /**
   * <p>A list of account IDs of the AWS accounts that sent invitations to the current member
   *       account that you want to delete invitations from.</p>
   */
  AccountIds: string[] | undefined;
}

export namespace DeleteInvitationsRequest {
  export const filterSensitiveLog = (obj: DeleteInvitationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteInvitationsRequest => __isa(o, "DeleteInvitationsRequest");
}

export interface DeleteInvitationsResponse {
  __type?: "DeleteInvitationsResponse";
  /**
   * <p>A list of objects that contain the unprocessed account and a result string that explains
   *       why it was unprocessed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

export namespace DeleteInvitationsResponse {
  export const filterSensitiveLog = (obj: DeleteInvitationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteInvitationsResponse => __isa(o, "DeleteInvitationsResponse");
}

export interface DeleteIPSetRequest {
  __type?: "DeleteIPSetRequest";
  /**
   * <p>The unique ID of the detector associated with the IPSet.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique ID of the IPSet to delete.</p>
   */
  IpSetId: string | undefined;
}

export namespace DeleteIPSetRequest {
  export const filterSensitiveLog = (obj: DeleteIPSetRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteIPSetRequest => __isa(o, "DeleteIPSetRequest");
}

export interface DeleteIPSetResponse {
  __type?: "DeleteIPSetResponse";
}

export namespace DeleteIPSetResponse {
  export const filterSensitiveLog = (obj: DeleteIPSetResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteIPSetResponse => __isa(o, "DeleteIPSetResponse");
}

export interface DeleteMembersRequest {
  __type?: "DeleteMembersRequest";
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

export namespace DeleteMembersRequest {
  export const filterSensitiveLog = (obj: DeleteMembersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteMembersRequest => __isa(o, "DeleteMembersRequest");
}

export interface DeleteMembersResponse {
  __type?: "DeleteMembersResponse";
  /**
   * <p>The accounts that could not be processed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

export namespace DeleteMembersResponse {
  export const filterSensitiveLog = (obj: DeleteMembersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteMembersResponse => __isa(o, "DeleteMembersResponse");
}

export interface DeletePublishingDestinationRequest {
  __type?: "DeletePublishingDestinationRequest";
  /**
   * <p>The ID of the publishing destination to delete.</p>
   */
  DestinationId: string | undefined;

  /**
   * <p>The unique ID of the detector associated with the publishing destination to delete.</p>
   */
  DetectorId: string | undefined;
}

export namespace DeletePublishingDestinationRequest {
  export const filterSensitiveLog = (obj: DeletePublishingDestinationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeletePublishingDestinationRequest =>
    __isa(o, "DeletePublishingDestinationRequest");
}

export interface DeletePublishingDestinationResponse {
  __type?: "DeletePublishingDestinationResponse";
}

export namespace DeletePublishingDestinationResponse {
  export const filterSensitiveLog = (obj: DeletePublishingDestinationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeletePublishingDestinationResponse =>
    __isa(o, "DeletePublishingDestinationResponse");
}

export interface DeleteThreatIntelSetRequest {
  __type?: "DeleteThreatIntelSetRequest";
  /**
   * <p>The unique ID of the detector that the threatIntelSet is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique ID of the threatIntelSet that you want to delete.</p>
   */
  ThreatIntelSetId: string | undefined;
}

export namespace DeleteThreatIntelSetRequest {
  export const filterSensitiveLog = (obj: DeleteThreatIntelSetRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteThreatIntelSetRequest => __isa(o, "DeleteThreatIntelSetRequest");
}

export interface DeleteThreatIntelSetResponse {
  __type?: "DeleteThreatIntelSetResponse";
}

export namespace DeleteThreatIntelSetResponse {
  export const filterSensitiveLog = (obj: DeleteThreatIntelSetResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteThreatIntelSetResponse => __isa(o, "DeleteThreatIntelSetResponse");
}

export interface DescribeOrganizationConfigurationRequest {
  __type?: "DescribeOrganizationConfigurationRequest";
  /**
   * <p>The ID of the detector to retrieve information about the delegated administrator
   *       from.</p>
   */
  DetectorId: string | undefined;
}

export namespace DescribeOrganizationConfigurationRequest {
  export const filterSensitiveLog = (obj: DescribeOrganizationConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeOrganizationConfigurationRequest =>
    __isa(o, "DescribeOrganizationConfigurationRequest");
}

export interface DescribeOrganizationConfigurationResponse {
  __type?: "DescribeOrganizationConfigurationResponse";
  /**
   * <p>Indicates whether GuardDuty is automatically enabled for accounts added to the
   *       organization.</p>
   */
  AutoEnable: boolean | undefined;

  /**
   * <p>An object that describes which data sources are enabled automatically for member
   *       accounts.</p>
   */
  DataSources?: OrganizationDataSourceConfigurationsResult;

  /**
   * <p>Indicates whether the maximum number of allowed member accounts are already associated
   *       with the delegated administrator master account.</p>
   */
  MemberAccountLimitReached: boolean | undefined;
}

export namespace DescribeOrganizationConfigurationResponse {
  export const filterSensitiveLog = (obj: DescribeOrganizationConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeOrganizationConfigurationResponse =>
    __isa(o, "DescribeOrganizationConfigurationResponse");
}

export interface DescribePublishingDestinationRequest {
  __type?: "DescribePublishingDestinationRequest";
  /**
   * <p>The ID of the publishing destination to retrieve.</p>
   */
  DestinationId: string | undefined;

  /**
   * <p>The unique ID of the detector associated with the publishing destination to
   *       retrieve.</p>
   */
  DetectorId: string | undefined;
}

export namespace DescribePublishingDestinationRequest {
  export const filterSensitiveLog = (obj: DescribePublishingDestinationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribePublishingDestinationRequest =>
    __isa(o, "DescribePublishingDestinationRequest");
}

export interface DescribePublishingDestinationResponse {
  __type?: "DescribePublishingDestinationResponse";
  /**
   * <p>The ID of the publishing destination.</p>
   */
  DestinationId: string | undefined;

  /**
   * <p>The time, in epoch millisecond format, at which GuardDuty was first unable to publish
   *       findings to the destination.</p>
   */
  PublishingFailureStartTimestamp: number | undefined;

  /**
   * <p>The status of the publishing destination.</p>
   */
  Status: PublishingStatus | string | undefined;

  /**
   * <p>A <code>DestinationProperties</code> object that includes the <code>DestinationArn</code>
   *       and <code>KmsKeyArn</code> of the publishing destination.</p>
   */
  DestinationProperties: DestinationProperties | undefined;

  /**
   * <p>The type of publishing destination. Currently, only Amazon S3 buckets are
   *       supported.</p>
   */
  DestinationType: DestinationType | string | undefined;
}

export namespace DescribePublishingDestinationResponse {
  export const filterSensitiveLog = (obj: DescribePublishingDestinationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribePublishingDestinationResponse =>
    __isa(o, "DescribePublishingDestinationResponse");
}

/**
 * <p>Contains information about the publishing destination, including the ID, type, and
 *       status.</p>
 */
export interface Destination {
  __type?: "Destination";
  /**
   * <p>The status of the publishing destination.</p>
   */
  Status: PublishingStatus | string | undefined;

  /**
   * <p>The type of resource used for the publishing destination. Currently, only Amazon S3
   *       buckets are supported.</p>
   */
  DestinationType: DestinationType | string | undefined;

  /**
   * <p>The unique ID of the publishing destination.</p>
   */
  DestinationId: string | undefined;
}

export namespace Destination {
  export const filterSensitiveLog = (obj: Destination): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Destination => __isa(o, "Destination");
}

/**
 * <p>Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3
 *       bucket, and the ARN of the KMS key to use to encrypt published findings.</p>
 */
export interface DestinationProperties {
  __type?: "DestinationProperties";
  /**
   * <p>The ARN of the resource to publish to.</p>
   */
  DestinationArn?: string;

  /**
   * <p>The ARN of the KMS key to use for encryption.</p>
   */
  KmsKeyArn?: string;
}

export namespace DestinationProperties {
  export const filterSensitiveLog = (obj: DestinationProperties): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DestinationProperties => __isa(o, "DestinationProperties");
}

export enum DestinationType {
  S3 = "S3",
}

export enum DetectorStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export interface DisableOrganizationAdminAccountRequest {
  __type?: "DisableOrganizationAdminAccountRequest";
  /**
   * <p>The AWS Account ID for the organizations account to be disabled as a GuardDuty delegated
   *       administrator.</p>
   */
  AdminAccountId: string | undefined;
}

export namespace DisableOrganizationAdminAccountRequest {
  export const filterSensitiveLog = (obj: DisableOrganizationAdminAccountRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisableOrganizationAdminAccountRequest =>
    __isa(o, "DisableOrganizationAdminAccountRequest");
}

export interface DisableOrganizationAdminAccountResponse {
  __type?: "DisableOrganizationAdminAccountResponse";
}

export namespace DisableOrganizationAdminAccountResponse {
  export const filterSensitiveLog = (obj: DisableOrganizationAdminAccountResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisableOrganizationAdminAccountResponse =>
    __isa(o, "DisableOrganizationAdminAccountResponse");
}

export interface DisassociateFromMasterAccountRequest {
  __type?: "DisassociateFromMasterAccountRequest";
  /**
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
   */
  DetectorId: string | undefined;
}

export namespace DisassociateFromMasterAccountRequest {
  export const filterSensitiveLog = (obj: DisassociateFromMasterAccountRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateFromMasterAccountRequest =>
    __isa(o, "DisassociateFromMasterAccountRequest");
}

export interface DisassociateFromMasterAccountResponse {
  __type?: "DisassociateFromMasterAccountResponse";
}

export namespace DisassociateFromMasterAccountResponse {
  export const filterSensitiveLog = (obj: DisassociateFromMasterAccountResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateFromMasterAccountResponse =>
    __isa(o, "DisassociateFromMasterAccountResponse");
}

export interface DisassociateMembersRequest {
  __type?: "DisassociateMembersRequest";
  /**
   * <p>A list of account IDs of the GuardDuty member accounts that you want to disassociate from
   *       the master account.</p>
   */
  AccountIds: string[] | undefined;

  /**
   * <p>The unique ID of the detector of the GuardDuty account whose members you want to
   *       disassociate from the master account.</p>
   */
  DetectorId: string | undefined;
}

export namespace DisassociateMembersRequest {
  export const filterSensitiveLog = (obj: DisassociateMembersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateMembersRequest => __isa(o, "DisassociateMembersRequest");
}

export interface DisassociateMembersResponse {
  __type?: "DisassociateMembersResponse";
  /**
   * <p>A list of objects that contain the unprocessed account and a result string that explains
   *       why it was unprocessed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

export namespace DisassociateMembersResponse {
  export const filterSensitiveLog = (obj: DisassociateMembersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateMembersResponse => __isa(o, "DisassociateMembersResponse");
}

/**
 * <p>Contains information on the status of DNS logs as a data source.</p>
 */
export interface DNSLogsConfigurationResult {
  __type?: "DNSLogsConfigurationResult";
  /**
   * <p>Denotes whether DNS logs is enabled as a data source.</p>
   */
  Status: DataSourceStatus | string | undefined;
}

export namespace DNSLogsConfigurationResult {
  export const filterSensitiveLog = (obj: DNSLogsConfigurationResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DNSLogsConfigurationResult => __isa(o, "DNSLogsConfigurationResult");
}

/**
 * <p>Contains information about the DNS_REQUEST action described in this finding.</p>
 */
export interface DnsRequestAction {
  __type?: "DnsRequestAction";
  /**
   * <p>The domain information for the API request.</p>
   */
  Domain?: string;
}

export namespace DnsRequestAction {
  export const filterSensitiveLog = (obj: DnsRequestAction): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DnsRequestAction => __isa(o, "DnsRequestAction");
}

/**
 * <p>Contains information about the domain.</p>
 */
export interface DomainDetails {
  __type?: "DomainDetails";
  /**
   * <p>The domain information for the AWS API call.</p>
   */
  Domain?: string;
}

export namespace DomainDetails {
  export const filterSensitiveLog = (obj: DomainDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DomainDetails => __isa(o, "DomainDetails");
}

export interface EnableOrganizationAdminAccountRequest {
  __type?: "EnableOrganizationAdminAccountRequest";
  /**
   * <p>The AWS Account ID for the organization account to be enabled as a GuardDuty delegated
   *       administrator.</p>
   */
  AdminAccountId: string | undefined;
}

export namespace EnableOrganizationAdminAccountRequest {
  export const filterSensitiveLog = (obj: EnableOrganizationAdminAccountRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EnableOrganizationAdminAccountRequest =>
    __isa(o, "EnableOrganizationAdminAccountRequest");
}

export interface EnableOrganizationAdminAccountResponse {
  __type?: "EnableOrganizationAdminAccountResponse";
}

export namespace EnableOrganizationAdminAccountResponse {
  export const filterSensitiveLog = (obj: EnableOrganizationAdminAccountResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EnableOrganizationAdminAccountResponse =>
    __isa(o, "EnableOrganizationAdminAccountResponse");
}

/**
 * <p>Contains information about the reason that the finding was generated.</p>
 */
export interface Evidence {
  __type?: "Evidence";
  /**
   * <p>A list of threat intelligence details related to the evidence.</p>
   */
  ThreatIntelligenceDetails?: ThreatIntelligenceDetail[];
}

export namespace Evidence {
  export const filterSensitiveLog = (obj: Evidence): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Evidence => __isa(o, "Evidence");
}

export enum Feedback {
  NOT_USEFUL = "NOT_USEFUL",
  USEFUL = "USEFUL",
}

export enum FilterAction {
  ARCHIVE = "ARCHIVE",
  NOOP = "NOOP",
}

/**
 * <p>Contains information about the finding, which is generated when abnormal or suspicious
 *       activity is detected.</p>
 */
export interface Finding {
  __type?: "Finding";
  /**
   * <p>The type of finding.</p>
   */
  Type: string | undefined;

  /**
   * <p>Contains additional information about the generated finding.</p>
   */
  Service?: Service;

  /**
   * <p>The ID of the account in which the finding was generated.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The confidence score for the finding.</p>
   */
  Confidence?: number;

  /**
   * <p>The version of the schema used for the finding.</p>
   */
  SchemaVersion: string | undefined;

  /**
   * <p>The severity of the finding.</p>
   */
  Severity: number | undefined;

  /**
   * <p>The title of the finding.</p>
   */
  Title?: string;

  /**
   * <p>The Region where the finding was generated.</p>
   */
  Region: string | undefined;

  /**
   * <p>The time and date when the finding was last updated.</p>
   */
  UpdatedAt: string | undefined;

  /**
   * <p>Contains information about the AWS resource associated with the activity that prompted
   *       GuardDuty to generate a finding.</p>
   */
  Resource: Resource | undefined;

  /**
   * <p>The partition associated with the finding.</p>
   */
  Partition?: string;

  /**
   * <p>The ARN of the finding.</p>
   */
  Arn: string | undefined;

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
}

export namespace Finding {
  export const filterSensitiveLog = (obj: Finding): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Finding => __isa(o, "Finding");
}

/**
 * <p>Contains information about the criteria used for querying findings.</p>
 */
export interface FindingCriteria {
  __type?: "FindingCriteria";
  /**
   * <p>Represents a map of finding properties that match specified conditions and values when
   *       querying findings.</p>
   */
  Criterion?: { [key: string]: Condition };
}

export namespace FindingCriteria {
  export const filterSensitiveLog = (obj: FindingCriteria): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FindingCriteria => __isa(o, "FindingCriteria");
}

export enum FindingPublishingFrequency {
  FIFTEEN_MINUTES = "FIFTEEN_MINUTES",
  ONE_HOUR = "ONE_HOUR",
  SIX_HOURS = "SIX_HOURS",
}

/**
 * <p>Contains information about finding statistics.</p>
 */
export interface FindingStatistics {
  __type?: "FindingStatistics";
  /**
   * <p>Represents a map of severity to count statistics for a set of findings.</p>
   */
  CountBySeverity?: { [key: string]: number };
}

export namespace FindingStatistics {
  export const filterSensitiveLog = (obj: FindingStatistics): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FindingStatistics => __isa(o, "FindingStatistics");
}

export enum FindingStatisticType {
  COUNT_BY_SEVERITY = "COUNT_BY_SEVERITY",
}

/**
 * <p>Contains information on the status of VPC flow logs as a data source.</p>
 */
export interface FlowLogsConfigurationResult {
  __type?: "FlowLogsConfigurationResult";
  /**
   * <p>Denotes whether VPC flow logs is enabled as a data source.</p>
   */
  Status: DataSourceStatus | string | undefined;
}

export namespace FlowLogsConfigurationResult {
  export const filterSensitiveLog = (obj: FlowLogsConfigurationResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FlowLogsConfigurationResult => __isa(o, "FlowLogsConfigurationResult");
}

/**
 * <p>Contains information about the location of the remote IP address.</p>
 */
export interface GeoLocation {
  __type?: "GeoLocation";
  /**
   * <p>The longitude information of the remote IP address.</p>
   */
  Lon?: number;

  /**
   * <p>The latitude information of the remote IP address.</p>
   */
  Lat?: number;
}

export namespace GeoLocation {
  export const filterSensitiveLog = (obj: GeoLocation): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GeoLocation => __isa(o, "GeoLocation");
}

export interface GetDetectorRequest {
  __type?: "GetDetectorRequest";
  /**
   * <p>The unique ID of the detector that you want to get.</p>
   */
  DetectorId: string | undefined;
}

export namespace GetDetectorRequest {
  export const filterSensitiveLog = (obj: GetDetectorRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDetectorRequest => __isa(o, "GetDetectorRequest");
}

export interface GetDetectorResponse {
  __type?: "GetDetectorResponse";
  /**
   * <p>The last-updated timestamp for the detector.</p>
   */
  UpdatedAt?: string;

  /**
   * <p>The timestamp of when the detector was created.</p>
   */
  CreatedAt?: string;

  /**
   * <p>The tags of the detector resource.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>An object that describes which data sources are enabled for the detector.</p>
   */
  DataSources?: DataSourceConfigurationsResult;

  /**
   * <p>The GuardDuty service role.</p>
   */
  ServiceRole: string | undefined;

  /**
   * <p>The detector status.</p>
   */
  Status: DetectorStatus | string | undefined;

  /**
   * <p>The publishing frequency of the finding.</p>
   */
  FindingPublishingFrequency?: FindingPublishingFrequency | string;
}

export namespace GetDetectorResponse {
  export const filterSensitiveLog = (obj: GetDetectorResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDetectorResponse => __isa(o, "GetDetectorResponse");
}

export interface GetFilterRequest {
  __type?: "GetFilterRequest";
  /**
   * <p>The name of the filter you want to get.</p>
   */
  FilterName: string | undefined;

  /**
   * <p>The unique ID of the detector that the filter is associated with.</p>
   */
  DetectorId: string | undefined;
}

export namespace GetFilterRequest {
  export const filterSensitiveLog = (obj: GetFilterRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetFilterRequest => __isa(o, "GetFilterRequest");
}

export interface GetFilterResponse {
  __type?: "GetFilterResponse";
  /**
   * <p>Represents the criteria to be used in the filter for querying findings.</p>
   */
  FindingCriteria: FindingCriteria | undefined;

  /**
   * <p>The description of the filter.</p>
   */
  Description?: string;

  /**
   * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
   */
  Action: FilterAction | string | undefined;

  /**
   * <p>The name of the filter.</p>
   */
  Name: string | undefined;

  /**
   * <p>The tags of the filter resource.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>Specifies the position of the filter in the list of current filters. Also specifies the
   *       order in which this filter is applied to the findings.</p>
   */
  Rank?: number;
}

export namespace GetFilterResponse {
  export const filterSensitiveLog = (obj: GetFilterResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetFilterResponse => __isa(o, "GetFilterResponse");
}

export interface GetFindingsRequest {
  __type?: "GetFindingsRequest";
  /**
   * <p>Represents the criteria used for sorting findings.</p>
   */
  SortCriteria?: SortCriteria;

  /**
   * <p>The IDs of the findings that you want to retrieve.</p>
   */
  FindingIds: string[] | undefined;

  /**
   * <p>The ID of the detector that specifies the GuardDuty service whose findings you want to
   *       retrieve.</p>
   */
  DetectorId: string | undefined;
}

export namespace GetFindingsRequest {
  export const filterSensitiveLog = (obj: GetFindingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetFindingsRequest => __isa(o, "GetFindingsRequest");
}

export interface GetFindingsResponse {
  __type?: "GetFindingsResponse";
  /**
   * <p>A list of findings.</p>
   */
  Findings: Finding[] | undefined;
}

export namespace GetFindingsResponse {
  export const filterSensitiveLog = (obj: GetFindingsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetFindingsResponse => __isa(o, "GetFindingsResponse");
}

export interface GetFindingsStatisticsRequest {
  __type?: "GetFindingsStatisticsRequest";
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

export namespace GetFindingsStatisticsRequest {
  export const filterSensitiveLog = (obj: GetFindingsStatisticsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetFindingsStatisticsRequest => __isa(o, "GetFindingsStatisticsRequest");
}

export interface GetFindingsStatisticsResponse {
  __type?: "GetFindingsStatisticsResponse";
  /**
   * <p>The finding statistics object.</p>
   */
  FindingStatistics: FindingStatistics | undefined;
}

export namespace GetFindingsStatisticsResponse {
  export const filterSensitiveLog = (obj: GetFindingsStatisticsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetFindingsStatisticsResponse => __isa(o, "GetFindingsStatisticsResponse");
}

export interface GetInvitationsCountRequest {
  __type?: "GetInvitationsCountRequest";
}

export namespace GetInvitationsCountRequest {
  export const filterSensitiveLog = (obj: GetInvitationsCountRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetInvitationsCountRequest => __isa(o, "GetInvitationsCountRequest");
}

export interface GetInvitationsCountResponse {
  __type?: "GetInvitationsCountResponse";
  /**
   * <p>The number of received invitations.</p>
   */
  InvitationsCount?: number;
}

export namespace GetInvitationsCountResponse {
  export const filterSensitiveLog = (obj: GetInvitationsCountResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetInvitationsCountResponse => __isa(o, "GetInvitationsCountResponse");
}

export interface GetIPSetRequest {
  __type?: "GetIPSetRequest";
  /**
   * <p>The unique ID of the detector that the IPSet is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique ID of the IPSet to retrieve.</p>
   */
  IpSetId: string | undefined;
}

export namespace GetIPSetRequest {
  export const filterSensitiveLog = (obj: GetIPSetRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetIPSetRequest => __isa(o, "GetIPSetRequest");
}

export interface GetIPSetResponse {
  __type?: "GetIPSetResponse";
  /**
   * <p>The URI of the file that contains the IPSet. For example:
   *       https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.</p>
   */
  Location: string | undefined;

  /**
   * <p>The status of IPSet file that was uploaded.</p>
   */
  Status: IpSetStatus | string | undefined;

  /**
   * <p>The tags of the IPSet resource.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The user-friendly name for the IPSet.</p>
   */
  Name: string | undefined;

  /**
   * <p>The format of the file that contains the IPSet.</p>
   */
  Format: IpSetFormat | string | undefined;
}

export namespace GetIPSetResponse {
  export const filterSensitiveLog = (obj: GetIPSetResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetIPSetResponse => __isa(o, "GetIPSetResponse");
}

export interface GetMasterAccountRequest {
  __type?: "GetMasterAccountRequest";
  /**
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
   */
  DetectorId: string | undefined;
}

export namespace GetMasterAccountRequest {
  export const filterSensitiveLog = (obj: GetMasterAccountRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetMasterAccountRequest => __isa(o, "GetMasterAccountRequest");
}

export interface GetMasterAccountResponse {
  __type?: "GetMasterAccountResponse";
  /**
   * <p>The master account details.</p>
   */
  Master: Master | undefined;
}

export namespace GetMasterAccountResponse {
  export const filterSensitiveLog = (obj: GetMasterAccountResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetMasterAccountResponse => __isa(o, "GetMasterAccountResponse");
}

export interface GetMemberDetectorsRequest {
  __type?: "GetMemberDetectorsRequest";
  /**
   * <p>The detector ID for the master account.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The account ID of the member account.</p>
   */
  AccountIds: string[] | undefined;
}

export namespace GetMemberDetectorsRequest {
  export const filterSensitiveLog = (obj: GetMemberDetectorsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetMemberDetectorsRequest => __isa(o, "GetMemberDetectorsRequest");
}

export interface GetMemberDetectorsResponse {
  __type?: "GetMemberDetectorsResponse";
  /**
   * <p>A list of member account IDs that were unable to be processed along with an explanation
   *       for why they were not processed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;

  /**
   * <p>An object that describes which data sources are enabled for a member account.</p>
   */
  MemberDataSourceConfigurations: MemberDataSourceConfiguration[] | undefined;
}

export namespace GetMemberDetectorsResponse {
  export const filterSensitiveLog = (obj: GetMemberDetectorsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetMemberDetectorsResponse => __isa(o, "GetMemberDetectorsResponse");
}

export interface GetMembersRequest {
  __type?: "GetMembersRequest";
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

export namespace GetMembersRequest {
  export const filterSensitiveLog = (obj: GetMembersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetMembersRequest => __isa(o, "GetMembersRequest");
}

export interface GetMembersResponse {
  __type?: "GetMembersResponse";
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

export namespace GetMembersResponse {
  export const filterSensitiveLog = (obj: GetMembersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetMembersResponse => __isa(o, "GetMembersResponse");
}

export interface GetThreatIntelSetRequest {
  __type?: "GetThreatIntelSetRequest";
  /**
   * <p>The unique ID of the threatIntelSet that you want to get.</p>
   */
  ThreatIntelSetId: string | undefined;

  /**
   * <p>The unique ID of the detector that the threatIntelSet is associated with.</p>
   */
  DetectorId: string | undefined;
}

export namespace GetThreatIntelSetRequest {
  export const filterSensitiveLog = (obj: GetThreatIntelSetRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetThreatIntelSetRequest => __isa(o, "GetThreatIntelSetRequest");
}

export interface GetThreatIntelSetResponse {
  __type?: "GetThreatIntelSetResponse";
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
   * <p>The status of threatIntelSet file uploaded.</p>
   */
  Status: ThreatIntelSetStatus | string | undefined;

  /**
   * <p>The URI of the file that contains the ThreatIntelSet. For example:
   *       https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.</p>
   */
  Location: string | undefined;

  /**
   * <p>The tags of the threat list resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace GetThreatIntelSetResponse {
  export const filterSensitiveLog = (obj: GetThreatIntelSetResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetThreatIntelSetResponse => __isa(o, "GetThreatIntelSetResponse");
}

export interface GetUsageStatisticsRequest {
  __type?: "GetUsageStatisticsRequest";
  /**
   * <p>Represents the criteria used for querying usage.</p>
   */
  UsageCriteria: UsageCriteria | undefined;

  /**
   * <p>The type of usage statistics to retrieve.</p>
   */
  UsageStatisticType: UsageStatisticType | string | undefined;

  /**
   * <p>The ID of the detector that specifies the GuardDuty service whose usage statistics you
   *       want to retrieve.</p>
   */
  DetectorId: string | undefined;

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

export namespace GetUsageStatisticsRequest {
  export const filterSensitiveLog = (obj: GetUsageStatisticsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetUsageStatisticsRequest => __isa(o, "GetUsageStatisticsRequest");
}

export interface GetUsageStatisticsResponse {
  __type?: "GetUsageStatisticsResponse";
  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;

  /**
   * <p>The usage statistics object. If a UsageStatisticType was provided, the objects
   *       representing other types will be null.</p>
   */
  UsageStatistics?: UsageStatistics;
}

export namespace GetUsageStatisticsResponse {
  export const filterSensitiveLog = (obj: GetUsageStatisticsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetUsageStatisticsResponse => __isa(o, "GetUsageStatisticsResponse");
}

/**
 * <p>Contains information about the EC2 instance profile.</p>
 */
export interface IamInstanceProfile {
  __type?: "IamInstanceProfile";
  /**
   * <p>The profile ID of the EC2 instance.</p>
   */
  Id?: string;

  /**
   * <p>The profile ARN of the EC2 instance.</p>
   */
  Arn?: string;
}

export namespace IamInstanceProfile {
  export const filterSensitiveLog = (obj: IamInstanceProfile): any => ({
    ...obj,
  });
  export const isa = (o: any): o is IamInstanceProfile => __isa(o, "IamInstanceProfile");
}

/**
 * <p>Contains information about the details of an instance.</p>
 */
export interface InstanceDetails {
  __type?: "InstanceDetails";
  /**
   * <p>The product code of the EC2 instance.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * <p>The image description of the EC2 instance.</p>
   */
  ImageDescription?: string;

  /**
   * <p>The profile information of the EC2 instance.</p>
   */
  IamInstanceProfile?: IamInstanceProfile;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Outpost. Only applicable to AWS Outposts
   *       instances.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The Availability Zone of the EC2 instance.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The tags of the EC2 instance.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The type of the EC2 instance.</p>
   */
  InstanceType?: string;

  /**
   * <p>The platform of the EC2 instance.</p>
   */
  Platform?: string;

  /**
   * <p>The launch time of the EC2 instance.</p>
   */
  LaunchTime?: string;

  /**
   * <p>The state of the EC2 instance.</p>
   */
  InstanceState?: string;

  /**
   * <p>The image ID of the EC2 instance.</p>
   */
  ImageId?: string;

  /**
   * <p>The elastic network interface information of the EC2 instance.</p>
   */
  NetworkInterfaces?: NetworkInterface[];

  /**
   * <p>The ID of the EC2 instance.</p>
   */
  InstanceId?: string;
}

export namespace InstanceDetails {
  export const filterSensitiveLog = (obj: InstanceDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InstanceDetails => __isa(o, "InstanceDetails");
}

/**
 * <p>An internal server error exception object.</p>
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  /**
   * <p>The error type.</p>
   */
  Type?: string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

export namespace InternalServerErrorException {
  export const filterSensitiveLog = (obj: InternalServerErrorException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalServerErrorException => __isa(o, "InternalServerErrorException");
}

/**
 * <p>Contains information about the invitation to become a member account.</p>
 */
export interface Invitation {
  __type?: "Invitation";
  /**
   * <p>The timestamp when the invitation was sent.</p>
   */
  InvitedAt?: string;

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
}

export namespace Invitation {
  export const filterSensitiveLog = (obj: Invitation): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Invitation => __isa(o, "Invitation");
}

export interface InviteMembersRequest {
  __type?: "InviteMembersRequest";
  /**
   * <p>A Boolean value that specifies whether you want to disable email notification to the accounts that you are inviting to GuardDuty as members.</p>
   */
  DisableEmailNotification?: boolean;

  /**
   * <p>The invitation message that you want to send to the accounts that you're inviting to
   *       GuardDuty as members.</p>
   */
  Message?: string;

  /**
   * <p>A list of account IDs of the accounts that you want to invite to GuardDuty as
   *       members.</p>
   */
  AccountIds: string[] | undefined;

  /**
   * <p>The unique ID of the detector of the GuardDuty account that you want to invite members
   *       with.</p>
   */
  DetectorId: string | undefined;
}

export namespace InviteMembersRequest {
  export const filterSensitiveLog = (obj: InviteMembersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InviteMembersRequest => __isa(o, "InviteMembersRequest");
}

export interface InviteMembersResponse {
  __type?: "InviteMembersResponse";
  /**
   * <p>A list of objects that contain the unprocessed account and a result string that explains
   *       why it was unprocessed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

export namespace InviteMembersResponse {
  export const filterSensitiveLog = (obj: InviteMembersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InviteMembersResponse => __isa(o, "InviteMembersResponse");
}

export enum IpSetFormat {
  ALIEN_VAULT = "ALIEN_VAULT",
  FIRE_EYE = "FIRE_EYE",
  OTX_CSV = "OTX_CSV",
  PROOF_POINT = "PROOF_POINT",
  STIX = "STIX",
  TXT = "TXT",
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

export interface ListDetectorsRequest {
  __type?: "ListDetectorsRequest";
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

export namespace ListDetectorsRequest {
  export const filterSensitiveLog = (obj: ListDetectorsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDetectorsRequest => __isa(o, "ListDetectorsRequest");
}

export interface ListDetectorsResponse {
  __type?: "ListDetectorsResponse";
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

export namespace ListDetectorsResponse {
  export const filterSensitiveLog = (obj: ListDetectorsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDetectorsResponse => __isa(o, "ListDetectorsResponse");
}

export interface ListFiltersRequest {
  __type?: "ListFiltersRequest";
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

export namespace ListFiltersRequest {
  export const filterSensitiveLog = (obj: ListFiltersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListFiltersRequest => __isa(o, "ListFiltersRequest");
}

export interface ListFiltersResponse {
  __type?: "ListFiltersResponse";
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

export namespace ListFiltersResponse {
  export const filterSensitiveLog = (obj: ListFiltersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListFiltersResponse => __isa(o, "ListFiltersResponse");
}

export interface ListFindingsRequest {
  __type?: "ListFindingsRequest";
  /**
   * <p>The ID of the detector that specifies the GuardDuty service whose findings you want to
   *       list.</p>
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
}

export namespace ListFindingsRequest {
  export const filterSensitiveLog = (obj: ListFindingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListFindingsRequest => __isa(o, "ListFindingsRequest");
}

export interface ListFindingsResponse {
  __type?: "ListFindingsResponse";
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

export namespace ListFindingsResponse {
  export const filterSensitiveLog = (obj: ListFindingsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListFindingsResponse => __isa(o, "ListFindingsResponse");
}

export interface ListInvitationsRequest {
  __type?: "ListInvitationsRequest";
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
}

export namespace ListInvitationsRequest {
  export const filterSensitiveLog = (obj: ListInvitationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListInvitationsRequest => __isa(o, "ListInvitationsRequest");
}

export interface ListInvitationsResponse {
  __type?: "ListInvitationsResponse";
  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of invitation descriptions.</p>
   */
  Invitations?: Invitation[];
}

export namespace ListInvitationsResponse {
  export const filterSensitiveLog = (obj: ListInvitationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListInvitationsResponse => __isa(o, "ListInvitationsResponse");
}

export interface ListIPSetsRequest {
  __type?: "ListIPSetsRequest";
  /**
   * <p>The unique ID of the detector that the IPSet is associated with.</p>
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
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;
}

export namespace ListIPSetsRequest {
  export const filterSensitiveLog = (obj: ListIPSetsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListIPSetsRequest => __isa(o, "ListIPSetsRequest");
}

export interface ListIPSetsResponse {
  __type?: "ListIPSetsResponse";
  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;

  /**
   * <p>The IDs of the IPSet resources.</p>
   */
  IpSetIds: string[] | undefined;
}

export namespace ListIPSetsResponse {
  export const filterSensitiveLog = (obj: ListIPSetsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListIPSetsResponse => __isa(o, "ListIPSetsResponse");
}

export interface ListMembersRequest {
  __type?: "ListMembersRequest";
  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;

  /**
   * <p>The unique ID of the detector the member is associated with.</p>
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
   * <p>Specifies whether to only return associated members or to return all members (including
   *       members who haven't been invited yet or have been disassociated).</p>
   */
  OnlyAssociated?: string;
}

export namespace ListMembersRequest {
  export const filterSensitiveLog = (obj: ListMembersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListMembersRequest => __isa(o, "ListMembersRequest");
}

export interface ListMembersResponse {
  __type?: "ListMembersResponse";
  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of members.</p>
   */
  Members?: Member[];
}

export namespace ListMembersResponse {
  export const filterSensitiveLog = (obj: ListMembersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListMembersResponse => __isa(o, "ListMembersResponse");
}

export interface ListOrganizationAdminAccountsRequest {
  __type?: "ListOrganizationAdminAccountsRequest";
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

export namespace ListOrganizationAdminAccountsRequest {
  export const filterSensitiveLog = (obj: ListOrganizationAdminAccountsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListOrganizationAdminAccountsRequest =>
    __isa(o, "ListOrganizationAdminAccountsRequest");
}

export interface ListOrganizationAdminAccountsResponse {
  __type?: "ListOrganizationAdminAccountsResponse";
  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;

  /**
   * <p>An AdminAccounts object that includes a list of accounts configured as GuardDuty delegated
   *       administrators.</p>
   */
  AdminAccounts?: AdminAccount[];
}

export namespace ListOrganizationAdminAccountsResponse {
  export const filterSensitiveLog = (obj: ListOrganizationAdminAccountsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListOrganizationAdminAccountsResponse =>
    __isa(o, "ListOrganizationAdminAccountsResponse");
}

export interface ListPublishingDestinationsRequest {
  __type?: "ListPublishingDestinationsRequest";
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

export namespace ListPublishingDestinationsRequest {
  export const filterSensitiveLog = (obj: ListPublishingDestinationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListPublishingDestinationsRequest => __isa(o, "ListPublishingDestinationsRequest");
}

export interface ListPublishingDestinationsResponse {
  __type?: "ListPublishingDestinationsResponse";
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

export namespace ListPublishingDestinationsResponse {
  export const filterSensitiveLog = (obj: ListPublishingDestinationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListPublishingDestinationsResponse =>
    __isa(o, "ListPublishingDestinationsResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) for the given GuardDuty resource. </p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceRequest => __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The tags associated with the resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceResponse => __isa(o, "ListTagsForResourceResponse");
}

export interface ListThreatIntelSetsRequest {
  __type?: "ListThreatIntelSetsRequest";
  /**
   * <p>You can use this parameter to paginate results in the response. Set the value of this
   *       parameter to null on your first call to the list action. For subsequent calls to the action,
   *       fill nextToken in the request with the value of NextToken from the previous response to
   *       continue listing data.</p>
   */
  NextToken?: string;

  /**
   * <p>The unique ID of the detector that the threatIntelSet is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;
}

export namespace ListThreatIntelSetsRequest {
  export const filterSensitiveLog = (obj: ListThreatIntelSetsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListThreatIntelSetsRequest => __isa(o, "ListThreatIntelSetsRequest");
}

export interface ListThreatIntelSetsResponse {
  __type?: "ListThreatIntelSetsResponse";
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

export namespace ListThreatIntelSetsResponse {
  export const filterSensitiveLog = (obj: ListThreatIntelSetsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListThreatIntelSetsResponse => __isa(o, "ListThreatIntelSetsResponse");
}

/**
 * <p>Contains information about the local IP address of the connection.</p>
 */
export interface LocalIpDetails {
  __type?: "LocalIpDetails";
  /**
   * <p>The IPv4 local address of the connection.</p>
   */
  IpAddressV4?: string;
}

export namespace LocalIpDetails {
  export const filterSensitiveLog = (obj: LocalIpDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LocalIpDetails => __isa(o, "LocalIpDetails");
}

/**
 * <p>Contains information about the port for the local connection.</p>
 */
export interface LocalPortDetails {
  __type?: "LocalPortDetails";
  /**
   * <p>The port number of the local connection.</p>
   */
  Port?: number;

  /**
   * <p>The port name of the local connection.</p>
   */
  PortName?: string;
}

export namespace LocalPortDetails {
  export const filterSensitiveLog = (obj: LocalPortDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LocalPortDetails => __isa(o, "LocalPortDetails");
}

/**
 * <p>Contains information about the master account and invitation.</p>
 */
export interface Master {
  __type?: "Master";
  /**
   * <p>The ID of the account used as the master account.</p>
   */
  AccountId?: string;

  /**
   * <p>The timestamp when the invitation was sent.</p>
   */
  InvitedAt?: string;

  /**
   * <p>The status of the relationship between the master and member accounts.</p>
   */
  RelationshipStatus?: string;

  /**
   * <p>The value used to validate the master account to the member account.</p>
   */
  InvitationId?: string;
}

export namespace Master {
  export const filterSensitiveLog = (obj: Master): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Master => __isa(o, "Master");
}

/**
 * <p>Contains information about the member account. </p>
 */
export interface Member {
  __type?: "Member";
  /**
   * <p>The status of the relationship between the member and the master.</p>
   */
  RelationshipStatus: string | undefined;

  /**
   * <p>The master account ID.</p>
   */
  MasterId: string | undefined;

  /**
   * <p>The ID of the member account.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The last-updated timestamp of the member.</p>
   */
  UpdatedAt: string | undefined;

  /**
   * <p>The detector ID of the member account.</p>
   */
  DetectorId?: string;

  /**
   * <p>The timestamp when the invitation was sent.</p>
   */
  InvitedAt?: string;

  /**
   * <p>The email address of the member account.</p>
   */
  Email: string | undefined;
}

export namespace Member {
  export const filterSensitiveLog = (obj: Member): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Member => __isa(o, "Member");
}

/**
 * <p>Contains information on which data sources are enabled for a member account.</p>
 */
export interface MemberDataSourceConfiguration {
  __type?: "MemberDataSourceConfiguration";
  /**
   * <p>Contains information on the status of data sources for the account.</p>
   */
  DataSources: DataSourceConfigurationsResult | undefined;

  /**
   * <p>The account ID for the member account.</p>
   */
  AccountId: string | undefined;
}

export namespace MemberDataSourceConfiguration {
  export const filterSensitiveLog = (obj: MemberDataSourceConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MemberDataSourceConfiguration => __isa(o, "MemberDataSourceConfiguration");
}

/**
 * <p>Contains information about the NETWORK_CONNECTION action described in the finding.</p>
 */
export interface NetworkConnectionAction {
  __type?: "NetworkConnectionAction";
  /**
   * <p>Indicates whether EC2 blocked the network connection to your instance.</p>
   */
  Blocked?: boolean;

  /**
   * <p>The local IP information of the connection.</p>
   */
  LocalIpDetails?: LocalIpDetails;

  /**
   * <p>The network connection protocol.</p>
   */
  Protocol?: string;

  /**
   * <p>The network connection direction.</p>
   */
  ConnectionDirection?: string;

  /**
   * <p>The local port information of the connection.</p>
   */
  LocalPortDetails?: LocalPortDetails;

  /**
   * <p>The remote port information of the connection.</p>
   */
  RemotePortDetails?: RemotePortDetails;

  /**
   * <p>The remote IP information of the connection.</p>
   */
  RemoteIpDetails?: RemoteIpDetails;
}

export namespace NetworkConnectionAction {
  export const filterSensitiveLog = (obj: NetworkConnectionAction): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NetworkConnectionAction => __isa(o, "NetworkConnectionAction");
}

/**
 * <p>Contains information about the elastic network interface of the EC2 instance.</p>
 */
export interface NetworkInterface {
  __type?: "NetworkInterface";
  /**
   * <p>The subnet ID of the EC2 instance.</p>
   */
  SubnetId?: string;

  /**
   * <p>The public DNS name of the EC2 instance.</p>
   */
  PublicDnsName?: string;

  /**
   * <p>The VPC ID of the EC2 instance.</p>
   */
  VpcId?: string;

  /**
   * <p>The private IP address of the EC2 instance.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>A list of IPv6 addresses for the EC2 instance.</p>
   */
  Ipv6Addresses?: string[];

  /**
   * <p>The private DNS name of the EC2 instance.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The public IP address of the EC2 instance.</p>
   */
  PublicIp?: string;

  /**
   * <p>Other private IP address information of the EC2 instance.</p>
   */
  PrivateIpAddresses?: PrivateIpAddressDetails[];

  /**
   * <p>The security groups associated with the EC2 instance.</p>
   */
  SecurityGroups?: SecurityGroup[];
}

export namespace NetworkInterface {
  export const filterSensitiveLog = (obj: NetworkInterface): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NetworkInterface => __isa(o, "NetworkInterface");
}

export enum OrderBy {
  ASC = "ASC",
  DESC = "DESC",
}

/**
 * <p>Contains information about the ISP organization of the remote IP address.</p>
 */
export interface Organization {
  __type?: "Organization";
  /**
   * <p>The name of the internet provider.</p>
   */
  Org?: string;

  /**
   * <p>The ISP information for the internet provider.</p>
   */
  Isp?: string;

  /**
   * <p>The organization that registered this ASN.</p>
   */
  AsnOrg?: string;

  /**
   * <p>The Autonomous System Number (ASN) of the internet provider of the remote IP
   *       address.</p>
   */
  Asn?: string;
}

export namespace Organization {
  export const filterSensitiveLog = (obj: Organization): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Organization => __isa(o, "Organization");
}

/**
 * <p>An object that contains information on which data sources will be configured to be
 *       automatically enabled for new members within the organization.</p>
 */
export interface OrganizationDataSourceConfigurations {
  __type?: "OrganizationDataSourceConfigurations";
  /**
   * <p>Describes whether S3 data event logs are enabled for new members of the
   *       organization.</p>
   */
  S3Logs?: OrganizationS3LogsConfiguration;
}

export namespace OrganizationDataSourceConfigurations {
  export const filterSensitiveLog = (obj: OrganizationDataSourceConfigurations): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OrganizationDataSourceConfigurations =>
    __isa(o, "OrganizationDataSourceConfigurations");
}

/**
 * <p>An object that contains information on which data sources are automatically enabled for
 *       new members within the organization.</p>
 */
export interface OrganizationDataSourceConfigurationsResult {
  __type?: "OrganizationDataSourceConfigurationsResult";
  /**
   * <p>Describes whether S3 data event logs are enabled as a data source.</p>
   */
  S3Logs: OrganizationS3LogsConfigurationResult | undefined;
}

export namespace OrganizationDataSourceConfigurationsResult {
  export const filterSensitiveLog = (obj: OrganizationDataSourceConfigurationsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OrganizationDataSourceConfigurationsResult =>
    __isa(o, "OrganizationDataSourceConfigurationsResult");
}

/**
 * <p>Describes whether S3 data event logs will be automatically enabled for new members of the
 *       organization.</p>
 */
export interface OrganizationS3LogsConfiguration {
  __type?: "OrganizationS3LogsConfiguration";
  /**
   * <p>A value that contains information on whether S3 data event logs will be enabled
   *       automatically as a data source for the organization.</p>
   */
  AutoEnable: boolean | undefined;
}

export namespace OrganizationS3LogsConfiguration {
  export const filterSensitiveLog = (obj: OrganizationS3LogsConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OrganizationS3LogsConfiguration => __isa(o, "OrganizationS3LogsConfiguration");
}

/**
 * <p>The current configuration of S3 data event logs as a data source for the
 *       organization.</p>
 */
export interface OrganizationS3LogsConfigurationResult {
  __type?: "OrganizationS3LogsConfigurationResult";
  /**
   * <p>A value that describes whether S3 data event logs are automatically enabled for new
   *       members of the organization.</p>
   */
  AutoEnable: boolean | undefined;
}

export namespace OrganizationS3LogsConfigurationResult {
  export const filterSensitiveLog = (obj: OrganizationS3LogsConfigurationResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OrganizationS3LogsConfigurationResult =>
    __isa(o, "OrganizationS3LogsConfigurationResult");
}

/**
 * <p>Contains information on the owner of the bucket.</p>
 */
export interface Owner {
  __type?: "Owner";
  /**
   * <p>The canonical user ID of the bucket owner. For information about locating your canonical
   *       user ID see <a href="https://docs.aws.amazon.com/general/latest/gr/acct-identifiers.html#FindingCanonicalId">Finding Your Account
   *         Canonical User ID.</a>
   *          </p>
   */
  Id?: string;
}

export namespace Owner {
  export const filterSensitiveLog = (obj: Owner): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Owner => __isa(o, "Owner");
}

/**
 * <p>Contains information about how permissions are configured for the S3 bucket.</p>
 */
export interface PermissionConfiguration {
  __type?: "PermissionConfiguration";
  /**
   * <p>Contains information about the account level permissions on the S3 bucket.</p>
   */
  AccountLevelPermissions?: AccountLevelPermissions;

  /**
   * <p>Contains information about the bucket level permissions for the S3 bucket.</p>
   */
  BucketLevelPermissions?: BucketLevelPermissions;
}

export namespace PermissionConfiguration {
  export const filterSensitiveLog = (obj: PermissionConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PermissionConfiguration => __isa(o, "PermissionConfiguration");
}

/**
 * <p>Contains information about the PORT_PROBE action described in the finding.</p>
 */
export interface PortProbeAction {
  __type?: "PortProbeAction";
  /**
   * <p>A list of objects related to port probe details.</p>
   */
  PortProbeDetails?: PortProbeDetail[];

  /**
   * <p>Indicates whether EC2 blocked the port probe to the instance, such as with an ACL.</p>
   */
  Blocked?: boolean;
}

export namespace PortProbeAction {
  export const filterSensitiveLog = (obj: PortProbeAction): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PortProbeAction => __isa(o, "PortProbeAction");
}

/**
 * <p>Contains information about the port probe details.</p>
 */
export interface PortProbeDetail {
  __type?: "PortProbeDetail";
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

export namespace PortProbeDetail {
  export const filterSensitiveLog = (obj: PortProbeDetail): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PortProbeDetail => __isa(o, "PortProbeDetail");
}

/**
 * <p>Contains other private IP address information of the EC2 instance.</p>
 */
export interface PrivateIpAddressDetails {
  __type?: "PrivateIpAddressDetails";
  /**
   * <p>The private DNS name of the EC2 instance.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The private IP address of the EC2 instance.</p>
   */
  PrivateIpAddress?: string;
}

export namespace PrivateIpAddressDetails {
  export const filterSensitiveLog = (obj: PrivateIpAddressDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PrivateIpAddressDetails => __isa(o, "PrivateIpAddressDetails");
}

/**
 * <p>Contains information about the product code for the EC2 instance.</p>
 */
export interface ProductCode {
  __type?: "ProductCode";
  /**
   * <p>The product code information.</p>
   */
  Code?: string;

  /**
   * <p>The product code type.</p>
   */
  ProductType?: string;
}

export namespace ProductCode {
  export const filterSensitiveLog = (obj: ProductCode): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ProductCode => __isa(o, "ProductCode");
}

/**
 * <p>Describes the public access policies that apply to the S3 bucket.</p>
 */
export interface PublicAccess {
  __type?: "PublicAccess";
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

export namespace PublicAccess {
  export const filterSensitiveLog = (obj: PublicAccess): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PublicAccess => __isa(o, "PublicAccess");
}

export enum PublishingStatus {
  PENDING_VERIFICATION = "PENDING_VERIFICATION",
  PUBLISHING = "PUBLISHING",
  STOPPED = "STOPPED",
  UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY = "UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY",
}

/**
 * <p>Contains information about the remote IP address of the connection.</p>
 */
export interface RemoteIpDetails {
  __type?: "RemoteIpDetails";
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

  /**
   * <p>The country code of the remote IP address.</p>
   */
  Country?: Country;

  /**
   * <p>The city information of the remote IP address.</p>
   */
  City?: City;
}

export namespace RemoteIpDetails {
  export const filterSensitiveLog = (obj: RemoteIpDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RemoteIpDetails => __isa(o, "RemoteIpDetails");
}

/**
 * <p>Contains information about the remote port.</p>
 */
export interface RemotePortDetails {
  __type?: "RemotePortDetails";
  /**
   * <p>The port name of the remote connection.</p>
   */
  PortName?: string;

  /**
   * <p>The port number of the remote connection.</p>
   */
  Port?: number;
}

export namespace RemotePortDetails {
  export const filterSensitiveLog = (obj: RemotePortDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RemotePortDetails => __isa(o, "RemotePortDetails");
}

/**
 * <p>Contains information about the AWS resource associated with the activity that prompted
 *       GuardDuty to generate a finding.</p>
 */
export interface Resource {
  __type?: "Resource";
  /**
   * <p>The type of AWS resource.</p>
   */
  ResourceType?: string;

  /**
   * <p>Contains information on the S3 bucket.</p>
   */
  S3BucketDetails?: S3BucketDetail[];

  /**
   * <p>The IAM access key details (IAM user information) of a user that engaged in the activity
   *       that prompted GuardDuty to generate a finding.</p>
   */
  AccessKeyDetails?: AccessKeyDetails;

  /**
   * <p>The information about the EC2 instance associated with the activity that prompted
   *       GuardDuty to generate a finding.</p>
   */
  InstanceDetails?: InstanceDetails;
}

export namespace Resource {
  export const filterSensitiveLog = (obj: Resource): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Resource => __isa(o, "Resource");
}

/**
 * <p>Contains information on the S3 bucket.</p>
 */
export interface S3BucketDetail {
  __type?: "S3BucketDetail";
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time the bucket was created at.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>Describes the public access policies that apply to the S3 bucket.</p>
   */
  PublicAccess?: PublicAccess;

  /**
   * <p>The owner of the S3 bucket.</p>
   */
  Owner?: Owner;

  /**
   * <p>Describes the server side encryption method used in the S3 bucket.</p>
   */
  DefaultServerSideEncryption?: DefaultServerSideEncryption;

  /**
   * <p>The name of the S3 bucket.</p>
   */
  Name?: string;

  /**
   * <p>Describes whether the bucket is a source or destination bucket.</p>
   */
  Type?: string;

  /**
   * <p>All tags attached to the S3 bucket</p>
   */
  Tags?: Tag[];
}

export namespace S3BucketDetail {
  export const filterSensitiveLog = (obj: S3BucketDetail): any => ({
    ...obj,
  });
  export const isa = (o: any): o is S3BucketDetail => __isa(o, "S3BucketDetail");
}

/**
 * <p>Describes whether S3 data event logs will be enabled as a data source.</p>
 */
export interface S3LogsConfiguration {
  __type?: "S3LogsConfiguration";
  /**
   * <p> The status of S3 data event logs as a data source.</p>
   */
  Enable: boolean | undefined;
}

export namespace S3LogsConfiguration {
  export const filterSensitiveLog = (obj: S3LogsConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is S3LogsConfiguration => __isa(o, "S3LogsConfiguration");
}

/**
 * <p>Describes whether S3 data event logs will be enabled as a data source.</p>
 */
export interface S3LogsConfigurationResult {
  __type?: "S3LogsConfigurationResult";
  /**
   * <p>A value that describes whether S3 data event logs are automatically enabled for new
   *       members of the organization.</p>
   */
  Status: DataSourceStatus | string | undefined;
}

export namespace S3LogsConfigurationResult {
  export const filterSensitiveLog = (obj: S3LogsConfigurationResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is S3LogsConfigurationResult => __isa(o, "S3LogsConfigurationResult");
}

/**
 * <p>Contains information about the security groups associated with the EC2 instance.</p>
 */
export interface SecurityGroup {
  __type?: "SecurityGroup";
  /**
   * <p>The security group name of the EC2 instance.</p>
   */
  GroupName?: string;

  /**
   * <p>The security group ID of the EC2 instance.</p>
   */
  GroupId?: string;
}

export namespace SecurityGroup {
  export const filterSensitiveLog = (obj: SecurityGroup): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SecurityGroup => __isa(o, "SecurityGroup");
}

/**
 * <p>Contains additional information about the generated finding.</p>
 */
export interface Service {
  __type?: "Service";
  /**
   * <p>The detector ID for the GuardDuty service.</p>
   */
  DetectorId?: string;

  /**
   * <p>The name of the AWS service (GuardDuty) that generated a finding.</p>
   */
  ServiceName?: string;

  /**
   * <p>The total count of the occurrences of this finding type.</p>
   */
  Count?: number;

  /**
   * <p>An evidence object associated with the service.</p>
   */
  Evidence?: Evidence;

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
   * <p>Feedback that was submitted about the finding.</p>
   */
  UserFeedback?: string;

  /**
   * <p>Information about the activity that is described in a finding.</p>
   */
  Action?: Action;

  /**
   * <p>Indicates whether this finding is archived.</p>
   */
  Archived?: boolean;

  /**
   * <p>The first-seen timestamp of the activity that prompted GuardDuty to generate this
   *       finding.</p>
   */
  EventFirstSeen?: string;
}

export namespace Service {
  export const filterSensitiveLog = (obj: Service): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Service => __isa(o, "Service");
}

/**
 * <p>Contains information about the criteria used for sorting findings.</p>
 */
export interface SortCriteria {
  __type?: "SortCriteria";
  /**
   * <p>Represents the finding attribute (for example, accountId) to sort findings by.</p>
   */
  AttributeName?: string;

  /**
   * <p>The order by which the sorted findings are to be displayed.</p>
   */
  OrderBy?: OrderBy | string;
}

export namespace SortCriteria {
  export const filterSensitiveLog = (obj: SortCriteria): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SortCriteria => __isa(o, "SortCriteria");
}

export interface StartMonitoringMembersRequest {
  __type?: "StartMonitoringMembersRequest";
  /**
   * <p>A list of account IDs of the GuardDuty member accounts to start monitoring.</p>
   */
  AccountIds: string[] | undefined;

  /**
   * <p>The unique ID of the detector of the GuardDuty master account associated with the member
   *       accounts to monitor.</p>
   */
  DetectorId: string | undefined;
}

export namespace StartMonitoringMembersRequest {
  export const filterSensitiveLog = (obj: StartMonitoringMembersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartMonitoringMembersRequest => __isa(o, "StartMonitoringMembersRequest");
}

export interface StartMonitoringMembersResponse {
  __type?: "StartMonitoringMembersResponse";
  /**
   * <p>A list of objects that contain the unprocessed account and a result string that explains
   *       why it was unprocessed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

export namespace StartMonitoringMembersResponse {
  export const filterSensitiveLog = (obj: StartMonitoringMembersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartMonitoringMembersResponse => __isa(o, "StartMonitoringMembersResponse");
}

export interface StopMonitoringMembersRequest {
  __type?: "StopMonitoringMembersRequest";
  /**
   * <p>A list of account IDs for the member accounts to stop monitoring.</p>
   */
  AccountIds: string[] | undefined;

  /**
   * <p>The unique ID of the detector associated with the GuardDuty master account that is
   *       monitoring member accounts.</p>
   */
  DetectorId: string | undefined;
}

export namespace StopMonitoringMembersRequest {
  export const filterSensitiveLog = (obj: StopMonitoringMembersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopMonitoringMembersRequest => __isa(o, "StopMonitoringMembersRequest");
}

export interface StopMonitoringMembersResponse {
  __type?: "StopMonitoringMembersResponse";
  /**
   * <p>A list of objects that contain an accountId for each account that could not be processed,
   *       and a result string that indicates why the account was not processed. </p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

export namespace StopMonitoringMembersResponse {
  export const filterSensitiveLog = (obj: StopMonitoringMembersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopMonitoringMembersResponse => __isa(o, "StopMonitoringMembersResponse");
}

/**
 * <p>Contains information about a tag associated with the EC2 instance.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The EC2 instance tag value.</p>
   */
  Value?: string;

  /**
   * <p>The EC2 instance tag key.</p>
   */
  Key?: string;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) for the GuardDuty resource to apply a tag to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to be added to a resource.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceResponse => __isa(o, "TagResourceResponse");
}

/**
 * <p>An instance of a threat intelligence detail that constitutes evidence for the
 *       finding.</p>
 */
export interface ThreatIntelligenceDetail {
  __type?: "ThreatIntelligenceDetail";
  /**
   * <p>A list of names of the threats in the threat intelligence list that triggered the
   *       finding.</p>
   */
  ThreatNames?: string[];

  /**
   * <p>The name of the threat intelligence list that triggered the finding.</p>
   */
  ThreatListName?: string;
}

export namespace ThreatIntelligenceDetail {
  export const filterSensitiveLog = (obj: ThreatIntelligenceDetail): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ThreatIntelligenceDetail => __isa(o, "ThreatIntelligenceDetail");
}

export enum ThreatIntelSetFormat {
  ALIEN_VAULT = "ALIEN_VAULT",
  FIRE_EYE = "FIRE_EYE",
  OTX_CSV = "OTX_CSV",
  PROOF_POINT = "PROOF_POINT",
  STIX = "STIX",
  TXT = "TXT",
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

/**
 * <p>Contains the total usage with the corresponding currency unit for that value.</p>
 */
export interface Total {
  __type?: "Total";
  /**
   * <p>The currency unit that the amount is given in.</p>
   */
  Unit?: string;

  /**
   * <p>The total usage.</p>
   */
  Amount?: string;
}

export namespace Total {
  export const filterSensitiveLog = (obj: Total): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Total => __isa(o, "Total");
}

export interface UnarchiveFindingsRequest {
  __type?: "UnarchiveFindingsRequest";
  /**
   * <p>The IDs of the findings to unarchive.</p>
   */
  FindingIds: string[] | undefined;

  /**
   * <p>The ID of the detector associated with the findings to unarchive.</p>
   */
  DetectorId: string | undefined;
}

export namespace UnarchiveFindingsRequest {
  export const filterSensitiveLog = (obj: UnarchiveFindingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnarchiveFindingsRequest => __isa(o, "UnarchiveFindingsRequest");
}

export interface UnarchiveFindingsResponse {
  __type?: "UnarchiveFindingsResponse";
}

export namespace UnarchiveFindingsResponse {
  export const filterSensitiveLog = (obj: UnarchiveFindingsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnarchiveFindingsResponse => __isa(o, "UnarchiveFindingsResponse");
}

/**
 * <p>Contains information about the accounts that weren't processed.</p>
 */
export interface UnprocessedAccount {
  __type?: "UnprocessedAccount";
  /**
   * <p>A reason why the account hasn't been processed.</p>
   */
  Result: string | undefined;

  /**
   * <p>The AWS account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace UnprocessedAccount {
  export const filterSensitiveLog = (obj: UnprocessedAccount): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnprocessedAccount => __isa(o, "UnprocessedAccount");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The tag keys to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the resource to remove tags from.</p>
   */
  ResourceArn: string | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceResponse => __isa(o, "UntagResourceResponse");
}

export interface UpdateDetectorRequest {
  __type?: "UpdateDetectorRequest";
  /**
   * <p>An object that describes which data sources will be updated.</p>
   */
  DataSources?: DataSourceConfigurations;

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
}

export namespace UpdateDetectorRequest {
  export const filterSensitiveLog = (obj: UpdateDetectorRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDetectorRequest => __isa(o, "UpdateDetectorRequest");
}

export interface UpdateDetectorResponse {
  __type?: "UpdateDetectorResponse";
}

export namespace UpdateDetectorResponse {
  export const filterSensitiveLog = (obj: UpdateDetectorResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDetectorResponse => __isa(o, "UpdateDetectorResponse");
}

export interface UpdateFilterRequest {
  __type?: "UpdateFilterRequest";
  /**
   * <p>Represents the criteria to be used in the filter for querying findings.</p>
   */
  FindingCriteria?: FindingCriteria;

  /**
   * <p>Specifies the position of the filter in the list of current filters. Also specifies the
   *       order in which this filter is applied to the findings.</p>
   */
  Rank?: number;

  /**
   * <p>The unique ID of the detector that specifies the GuardDuty service where you want to
   *       update a filter.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
   */
  Action?: FilterAction | string;

  /**
   * <p>The description of the filter.</p>
   */
  Description?: string;

  /**
   * <p>The name of the filter.</p>
   */
  FilterName: string | undefined;
}

export namespace UpdateFilterRequest {
  export const filterSensitiveLog = (obj: UpdateFilterRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateFilterRequest => __isa(o, "UpdateFilterRequest");
}

export interface UpdateFilterResponse {
  __type?: "UpdateFilterResponse";
  /**
   * <p>The name of the filter.</p>
   */
  Name: string | undefined;
}

export namespace UpdateFilterResponse {
  export const filterSensitiveLog = (obj: UpdateFilterResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateFilterResponse => __isa(o, "UpdateFilterResponse");
}

export interface UpdateFindingsFeedbackRequest {
  __type?: "UpdateFindingsFeedbackRequest";
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

export namespace UpdateFindingsFeedbackRequest {
  export const filterSensitiveLog = (obj: UpdateFindingsFeedbackRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateFindingsFeedbackRequest => __isa(o, "UpdateFindingsFeedbackRequest");
}

export interface UpdateFindingsFeedbackResponse {
  __type?: "UpdateFindingsFeedbackResponse";
}

export namespace UpdateFindingsFeedbackResponse {
  export const filterSensitiveLog = (obj: UpdateFindingsFeedbackResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateFindingsFeedbackResponse => __isa(o, "UpdateFindingsFeedbackResponse");
}

export interface UpdateIPSetRequest {
  __type?: "UpdateIPSetRequest";
  /**
   * <p>The unique ID that specifies the IPSet that you want to update.</p>
   */
  Name?: string;

  /**
   * <p>The unique ID that specifies the IPSet that you want to update.</p>
   */
  IpSetId: string | undefined;

  /**
   * <p>The updated Boolean value that specifies whether the IPSet is active or not.</p>
   */
  Activate?: boolean;

  /**
   * <p>The detectorID that specifies the GuardDuty service whose IPSet you want to update.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The updated URI of the file that contains the IPSet. For example:
   *       https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.</p>
   */
  Location?: string;
}

export namespace UpdateIPSetRequest {
  export const filterSensitiveLog = (obj: UpdateIPSetRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateIPSetRequest => __isa(o, "UpdateIPSetRequest");
}

export interface UpdateIPSetResponse {
  __type?: "UpdateIPSetResponse";
}

export namespace UpdateIPSetResponse {
  export const filterSensitiveLog = (obj: UpdateIPSetResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateIPSetResponse => __isa(o, "UpdateIPSetResponse");
}

export interface UpdateMemberDetectorsRequest {
  __type?: "UpdateMemberDetectorsRequest";
  /**
   * <p>A list of member account IDs to be updated.</p>
   */
  AccountIds: string[] | undefined;

  /**
   * <p>The detector ID of the master account.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>An object describes which data sources will be updated.</p>
   */
  DataSources?: DataSourceConfigurations;
}

export namespace UpdateMemberDetectorsRequest {
  export const filterSensitiveLog = (obj: UpdateMemberDetectorsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateMemberDetectorsRequest => __isa(o, "UpdateMemberDetectorsRequest");
}

export interface UpdateMemberDetectorsResponse {
  __type?: "UpdateMemberDetectorsResponse";
  /**
   * <p>A list of member account IDs that were unable to be processed along with an explanation
   *       for why they were not processed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

export namespace UpdateMemberDetectorsResponse {
  export const filterSensitiveLog = (obj: UpdateMemberDetectorsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateMemberDetectorsResponse => __isa(o, "UpdateMemberDetectorsResponse");
}

export interface UpdateOrganizationConfigurationRequest {
  __type?: "UpdateOrganizationConfigurationRequest";
  /**
   * <p>The ID of the detector to update the delegated administrator for.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>Indicates whether to automatically enable member accounts in the organization.</p>
   */
  AutoEnable: boolean | undefined;

  /**
   * <p>An object describes which data sources will be updated.</p>
   */
  DataSources?: OrganizationDataSourceConfigurations;
}

export namespace UpdateOrganizationConfigurationRequest {
  export const filterSensitiveLog = (obj: UpdateOrganizationConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateOrganizationConfigurationRequest =>
    __isa(o, "UpdateOrganizationConfigurationRequest");
}

export interface UpdateOrganizationConfigurationResponse {
  __type?: "UpdateOrganizationConfigurationResponse";
}

export namespace UpdateOrganizationConfigurationResponse {
  export const filterSensitiveLog = (obj: UpdateOrganizationConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateOrganizationConfigurationResponse =>
    __isa(o, "UpdateOrganizationConfigurationResponse");
}

export interface UpdatePublishingDestinationRequest {
  __type?: "UpdatePublishingDestinationRequest";
  /**
   * <p>A <code>DestinationProperties</code> object that includes the <code>DestinationArn</code>
   *       and <code>KmsKeyArn</code> of the publishing destination.</p>
   */
  DestinationProperties?: DestinationProperties;

  /**
   * <p>The ID of the publishing destination to update.</p>
   */
  DestinationId: string | undefined;

  /**
   * <p>The ID of the detector associated with the publishing destinations to update.</p>
   */
  DetectorId: string | undefined;
}

export namespace UpdatePublishingDestinationRequest {
  export const filterSensitiveLog = (obj: UpdatePublishingDestinationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdatePublishingDestinationRequest =>
    __isa(o, "UpdatePublishingDestinationRequest");
}

export interface UpdatePublishingDestinationResponse {
  __type?: "UpdatePublishingDestinationResponse";
}

export namespace UpdatePublishingDestinationResponse {
  export const filterSensitiveLog = (obj: UpdatePublishingDestinationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdatePublishingDestinationResponse =>
    __isa(o, "UpdatePublishingDestinationResponse");
}

export interface UpdateThreatIntelSetRequest {
  __type?: "UpdateThreatIntelSetRequest";
  /**
   * <p>The updated Boolean value that specifies whether the ThreateIntelSet is active or
   *       not.</p>
   */
  Activate?: boolean;

  /**
   * <p>The unique ID that specifies the ThreatIntelSet that you want to update.</p>
   */
  ThreatIntelSetId: string | undefined;

  /**
   * <p>The unique ID that specifies the ThreatIntelSet that you want to update.</p>
   */
  Name?: string;

  /**
   * <p>The detectorID that specifies the GuardDuty service whose ThreatIntelSet you want to
   *       update.</p>
   */
  DetectorId: string | undefined;

  /**
   * <p>The updated URI of the file that contains the ThreateIntelSet. For example:
   *       https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.</p>
   */
  Location?: string;
}

export namespace UpdateThreatIntelSetRequest {
  export const filterSensitiveLog = (obj: UpdateThreatIntelSetRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateThreatIntelSetRequest => __isa(o, "UpdateThreatIntelSetRequest");
}

export interface UpdateThreatIntelSetResponse {
  __type?: "UpdateThreatIntelSetResponse";
}

export namespace UpdateThreatIntelSetResponse {
  export const filterSensitiveLog = (obj: UpdateThreatIntelSetResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateThreatIntelSetResponse => __isa(o, "UpdateThreatIntelSetResponse");
}

/**
 * <p>Contains information on the total of usage based on account IDs.</p>
 */
export interface UsageAccountResult {
  __type?: "UsageAccountResult";
  /**
   * <p>The Account ID that generated usage.</p>
   */
  AccountId?: string;

  /**
   * <p>Represents the total of usage for the Account ID.</p>
   */
  Total?: Total;
}

export namespace UsageAccountResult {
  export const filterSensitiveLog = (obj: UsageAccountResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UsageAccountResult => __isa(o, "UsageAccountResult");
}

/**
 * <p>Contains information about the criteria used to query usage statistics.</p>
 */
export interface UsageCriteria {
  __type?: "UsageCriteria";
  /**
   * <p>The data sources to aggregate usage statistics from.</p>
   */
  DataSources: (DataSource | string)[] | undefined;

  /**
   * <p>The account IDs to aggregate usage statistics from.</p>
   */
  AccountIds?: string[];

  /**
   * <p>The resources to aggregate usage statistics from. Only accepts exact resource
   *       names.</p>
   */
  Resources?: string[];
}

export namespace UsageCriteria {
  export const filterSensitiveLog = (obj: UsageCriteria): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UsageCriteria => __isa(o, "UsageCriteria");
}

/**
 * <p>Contains information on the result of usage based on data source type.</p>
 */
export interface UsageDataSourceResult {
  __type?: "UsageDataSourceResult";
  /**
   * <p>Represents the total of usage for the specified data source.</p>
   */
  Total?: Total;

  /**
   * <p>The data source type that generated usage.</p>
   */
  DataSource?: DataSource | string;
}

export namespace UsageDataSourceResult {
  export const filterSensitiveLog = (obj: UsageDataSourceResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UsageDataSourceResult => __isa(o, "UsageDataSourceResult");
}

/**
 * <p>Contains information on the sum of usage based on an AWS resource.</p>
 */
export interface UsageResourceResult {
  __type?: "UsageResourceResult";
  /**
   * <p>Represents the sum total of usage for the specified resource type.</p>
   */
  Total?: Total;

  /**
   * <p>The AWS resource that generated usage.</p>
   */
  Resource?: string;
}

export namespace UsageResourceResult {
  export const filterSensitiveLog = (obj: UsageResourceResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UsageResourceResult => __isa(o, "UsageResourceResult");
}

/**
 * <p>Contains the result of GuardDuty usage. If a UsageStatisticType is provided the result for
 *       other types will be null. </p>
 */
export interface UsageStatistics {
  __type?: "UsageStatistics";
  /**
   * <p>Lists the top 50 resources that have generated the most GuardDuty usage, in order from
   *       most to least expensive.</p>
   */
  TopResources?: UsageResourceResult[];

  /**
   * <p>The usage statistic sum organized by on data source.</p>
   */
  SumByDataSource?: UsageDataSourceResult[];

  /**
   * <p>The usage statistic sum organized by resource.</p>
   */
  SumByResource?: UsageResourceResult[];

  /**
   * <p>The usage statistic sum organized by account ID.</p>
   */
  SumByAccount?: UsageAccountResult[];
}

export namespace UsageStatistics {
  export const filterSensitiveLog = (obj: UsageStatistics): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UsageStatistics => __isa(o, "UsageStatistics");
}

export enum UsageStatisticType {
  SUM_BY_ACCOUNT = "SUM_BY_ACCOUNT",
  SUM_BY_DATA_SOURCE = "SUM_BY_DATA_SOURCE",
  SUM_BY_RESOURCE = "SUM_BY_RESOURCE",
  TOP_RESOURCES = "TOP_RESOURCES",
}

// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { LightsailServiceException as __BaseException } from "./LightsailServiceException";

/**
 * <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  code?: string;
  docs?: string;
  tip?: string;
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
    this.code = opts.code;
    this.docs = opts.docs;
    this.tip = opts.tip;
  }
}

export enum AccessDirection {
  inbound = "inbound",
  outbound = "outbound",
}

/**
 * <p>Describes the last time an access key was used.</p>
 *
 *          <note>
 *             <p>This object does not include data in the response of a <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action.</p>
 *          </note>
 */
export interface AccessKeyLastUsed {
  /**
   * <p>The date and time when the access key was most recently used.</p>
   *          <p>This value is null if the access key has not been used.</p>
   */
  lastUsedDate?: Date;

  /**
   * <p>The AWS Region where this access key was most recently used.</p>
   *          <p>This value is <code>N/A</code> if the access key has not been used.</p>
   */
  region?: string;

  /**
   * <p>The name of the AWS service with which this access key was most recently used.</p>
   *          <p>This value is <code>N/A</code> if the access key has not been used.</p>
   */
  serviceName?: string;
}

export namespace AccessKeyLastUsed {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessKeyLastUsed): any => ({
    ...obj,
  });
}

export enum StatusType {
  Active = "Active",
  Inactive = "Inactive",
}

/**
 * <p>Describes an access key for an Amazon Lightsail bucket.</p>
 *
 *          <p>Access keys grant full programmatic access to the specified bucket and its objects. You
 *       can have a maximum of two access keys per bucket. Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action to create an access key for a specific bucket. For
 *       more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the
 *         <i>Amazon Lightsail Developer Guide</i>.</p>
 *
 *          <important>
 *             <p>The <code>secretAccessKey</code> value is returned only in response to the
 *           <code>CreateBucketAccessKey</code> action. You can get a secret access key only when you
 *         first create an access key; you cannot get the secret access key later. If you lose the
 *         secret access key, you must create a new access key.</p>
 *          </important>
 */
export interface AccessKey {
  /**
   * <p>The ID of the access key.</p>
   */
  accessKeyId?: string;

  /**
   * <p>The secret access key used to sign requests.</p>
   *
   *          <p>You should store the secret access key in a safe location. We recommend that you delete
   *       the access key if the secret access key is compromised.</p>
   */
  secretAccessKey?: string;

  /**
   * <p>The status of the access key.</p>
   *
   *          <p>A status of <code>Active</code> means that the key is valid, while <code>Inactive</code>
   *       means it is not.</p>
   */
  status?: StatusType | string;

  /**
   * <p>The timestamp when the access key was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>An object that describes the last time the access key was used.</p>
   *
   *          <note>
   *             <p>This object does not include data in the response of a <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action. If the access key has not been used, the
   *           <code>region</code> and <code>serviceName</code> values are <code>N/A</code>, and the
   *           <code>lastUsedDate</code> value is null.</p>
   *          </note>
   */
  lastUsed?: AccessKeyLastUsed;
}

export namespace AccessKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessKey): any => ({
    ...obj,
    ...(obj.accessKeyId && { accessKeyId: SENSITIVE_STRING }),
  });
}

/**
 * <p>Describes an Amazon Lightsail instance that has access to a Lightsail bucket.</p>
 */
export interface ResourceReceivingAccess {
  /**
   * <p>The name of the Lightsail instance.</p>
   */
  name?: string;

  /**
   * <p>The Lightsail resource type (for example, <code>Instance</code>).</p>
   */
  resourceType?: string;
}

export namespace ResourceReceivingAccess {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceReceivingAccess): any => ({
    ...obj,
  });
}

export enum AccessType {
  Private = "private",
  Public = "public",
}

/**
 * <p>Describes the anonymous access permissions for an Amazon Lightsail bucket and its
 *       objects.</p>
 *          <p>For more information about bucket access permissions, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-understanding-bucket-permissions">Understanding bucket permissions in Amazon Lightsail</a> in the </p>
 *          <p>
 *             <i>Amazon Lightsail Developer Guide</i>.</p>
 */
export interface AccessRules {
  /**
   * <p>Specifies the anonymous access to all objects in a bucket.</p>
   *
   *          <p>The following options can be specified:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>public</code> - Sets all objects in the bucket to public (read-only), making
   *           them readable by anyone in the world.</p>
   *
   *
   *                <p>If the <code>getObject</code> value is set to <code>public</code>, then all objects in
   *           the bucket default to public regardless of the <code>allowPublicOverrides</code>
   *           value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private</code> - Sets all objects in the bucket to private, making them readable
   *           only by you or anyone you give access to.</p>
   *
   *
   *                <p>If the <code>getObject</code> value is set to <code>private</code>, and the
   *             <code>allowPublicOverrides</code> value is set to <code>true</code>, then all objects in
   *           the bucket default to private unless they are configured with a <code>public-read</code>
   *           ACL. Individual objects with a <code>public-read</code> ACL are readable by anyone in the
   *           world.</p>
   *             </li>
   *          </ul>
   */
  getObject?: AccessType | string;

  /**
   * <p>A Boolean value that indicates whether the access control list (ACL) permissions that are
   *       applied to individual objects override the <code>getObject</code> option that is currently
   *       specified.</p>
   *
   *          <p>When this is true, you can use the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html">PutObjectAcl</a> Amazon S3 API action to set
   *       individual objects to public (read-only) using the <code>public-read</code> ACL, or to private
   *       using the <code>private</code> ACL.</p>
   */
  allowPublicOverrides?: boolean;
}

export namespace AccessRules {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessRules): any => ({
    ...obj,
  });
}

export enum BPAStatusMessage {
  DEFAULTED_FOR_SLR_MISSING = "DEFAULTED_FOR_SLR_MISSING",
  DEFAULTED_FOR_SLR_MISSING_ON_HOLD = "DEFAULTED_FOR_SLR_MISSING_ON_HOLD",
  SYNC_ON_HOLD = "SYNC_ON_HOLD",
  Unknown = "Unknown",
}

export enum AccountLevelBpaSyncStatus {
  Defaulted = "Defaulted",
  Failed = "Failed",
  InSync = "InSync",
  NeverSynced = "NeverSynced",
}

/**
 * <p>Describes the synchronization status of the Amazon Simple Storage Service (Amazon S3)
 *       account-level block public access (BPA) feature for your Lightsail buckets.</p>
 *
 *          <p>The account-level BPA feature of Amazon S3 provides centralized controls to limit
 *       public access to all Amazon S3 buckets in an account. BPA can make all Amazon S3 buckets in an Amazon Web Services account private regardless of the individual bucket and
 *       object permissions that are configured. Lightsail buckets take into account the
 *         Amazon S3 account-level BPA configuration when allowing or denying public access. To
 *       do this, Lightsail periodically fetches the account-level BPA configuration
 *       from Amazon S3. When the account-level BPA status is <code>InSync</code>, the Amazon S3 account-level BPA configuration is synchronized and it applies to your Lightsail
 *       buckets. For more information about Amazon Simple Storage Service account-level BPA and how it affects
 *         Lightsail buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-block-public-access-for-buckets">Block public access for buckets in Amazon Lightsail</a> in the
 *           <i>Amazon Lightsail Developer Guide</i>.</p>
 */
export interface AccountLevelBpaSync {
  /**
   * <p>The status of the account-level BPA synchronization.</p>
   *
   *          <p>The following statuses are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>InSync</code> - Account-level BPA is synchronized. The Amazon S3
   *           account-level BPA configuration applies to your Lightsail buckets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NeverSynced</code> - Synchronization has not yet happened. The Amazon S3
   *           account-level BPA configuration does not apply to your Lightsail buckets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code> - Synchronization failed. The Amazon S3 account-level BPA
   *           configuration does not apply to your Lightsail buckets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Defaulted</code> - Synchronization failed and account-level BPA for your
   *           Lightsail buckets is defaulted to <i>active</i>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>You might need to complete further actions if the status is <code>Failed</code> or
   *           <code>Defaulted</code>. The <code>message</code> parameter provides more information for
   *         those statuses.</p>
   *          </note>
   */
  status?: AccountLevelBpaSyncStatus | string;

  /**
   * <p>The timestamp of when the account-level BPA configuration was last synchronized. This
   *       value is null when the account-level BPA configuration has not been synchronized.</p>
   */
  lastSyncedAt?: Date;

  /**
   * <p>A message that provides a reason for a <code>Failed</code> or <code>Defaulted</code>
   *       synchronization status.</p>
   *
   *          <p>The following messages are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SYNC_ON_HOLD</code> - The synchronization has not yet happened. This status
   *           message occurs immediately after you create your first Lightsail bucket. This status
   *           message should change after the first synchronization happens, approximately 1 hour after
   *           the first bucket is created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEFAULTED_FOR_SLR_MISSING</code> - The synchronization failed because the
   *           required service-linked role is missing from your Amazon Web Services account. The
   *           account-level BPA configuration for your Lightsail buckets is defaulted to
   *             <i>active</i> until the synchronization can occur. This means that all
   *           your buckets are private and not publicly accessible. For more information about how to
   *           create the required service-linked role to allow synchronization, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-using-service-linked-roles">Using Service-Linked Roles for Amazon Lightsail</a> in the
   *               <i>Amazon Lightsail Developer Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEFAULTED_FOR_SLR_MISSING_ON_HOLD</code> - The synchronization failed because
   *           the required service-linked role is missing from your Amazon Web Services account.
   *           Account-level BPA is not yet configured for your Lightsail buckets. Therefore, only the
   *           bucket access permissions and individual object access permissions apply to your
   *           Lightsail buckets. For more information about how to create the required service-linked
   *           role to allow synchronization, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-using-service-linked-roles">Using Service-Linked Roles for Amazon Lightsail</a> in the
   *               <i>Amazon Lightsail Developer Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unknown</code> - The reason that synchronization failed is unknown. Contact
   *             Amazon Web Services Support for more information.</p>
   *             </li>
   *          </ul>
   */
  message?: BPAStatusMessage | string;

  /**
   * <p>A Boolean value that indicates whether account-level block public access is affecting your
   *         Lightsail buckets.</p>
   */
  bpaImpactsLightsail?: boolean;
}

export namespace AccountLevelBpaSync {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountLevelBpaSync): any => ({
    ...obj,
  });
}

/**
 * <p>Lightsail throws this exception when an account is still in the setup in progress
 *       state.</p>
 */
export class AccountSetupInProgressException extends __BaseException {
  readonly name: "AccountSetupInProgressException" = "AccountSetupInProgressException";
  readonly $fault: "client" = "client";
  code?: string;
  docs?: string;
  tip?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccountSetupInProgressException, __BaseException>) {
    super({
      name: "AccountSetupInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccountSetupInProgressException.prototype);
    this.code = opts.code;
    this.docs = opts.docs;
    this.tip = opts.tip;
  }
}

/**
 * <p>Describes an add-on that is enabled for an Amazon Lightsail resource.</p>
 */
export interface AddOn {
  /**
   * <p>The name of the add-on.</p>
   */
  name?: string;

  /**
   * <p>The status of the add-on.</p>
   */
  status?: string;

  /**
   * <p>The daily time when an automatic snapshot is created.</p>
   *          <p>The time shown is in <code>HH:00</code> format, and in Coordinated Universal Time
   *       (UTC).</p>
   *          <p>The snapshot is automatically created between the time shown and up to 45 minutes
   *       after.</p>
   */
  snapshotTimeOfDay?: string;

  /**
   * <p>The next daily time an automatic snapshot will be created.</p>
   *          <p>The time shown is in <code>HH:00</code> format, and in Coordinated Universal Time
   *       (UTC).</p>
   *          <p>The snapshot is automatically created between the time shown and up to 45 minutes
   *       after.</p>
   */
  nextSnapshotTimeOfDay?: string;
}

export namespace AddOn {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddOn): any => ({
    ...obj,
  });
}

export enum AddOnType {
  AutoSnapshot = "AutoSnapshot",
}

/**
 * <p>Describes a request to enable or modify the automatic snapshot add-on for an
 *       Amazon Lightsail instance or disk.</p>
 *          <p>When you modify the automatic snapshot time for a resource, it is typically effective
 *       immediately except under the following conditions:</p>
 *          <ul>
 *             <li>
 *                <p>If an automatic snapshot has been created for the current day, and you change the
 *           snapshot time to a later time of day, then the new snapshot time will be effective the
 *           following day. This ensures that two snapshots are not created for the current day.</p>
 *             </li>
 *             <li>
 *                <p>If an automatic snapshot has not yet been created for the current day, and you change
 *           the snapshot time to an earlier time of day, then the new snapshot time will be effective
 *           the following day and a snapshot is automatically created at the previously set time for
 *           the current day. This ensures that a snapshot is created for the current day.</p>
 *             </li>
 *             <li>
 *                <p>If an automatic snapshot has not yet been created for the current day, and you change
 *           the snapshot time to a time that is within 30 minutes from your current time, then the new
 *           snapshot time will be effective the following day and a snapshot is automatically created
 *           at the previously set time for the current day. This ensures that a snapshot is created
 *           for the current day, because 30 minutes is required between your current time and the new
 *           snapshot time that you specify.</p>
 *             </li>
 *             <li>
 *                <p>If an automatic snapshot is scheduled to be created within 30 minutes from your
 *           current time and you change the snapshot time, then the new snapshot time will be
 *           effective the following day and a snapshot is automatically created at the previously set
 *           time for the current day. This ensures that a snapshot is created for the current day,
 *           because 30 minutes is required between your current time and the new snapshot time that
 *           you specify.</p>
 *             </li>
 *          </ul>
 */
export interface AutoSnapshotAddOnRequest {
  /**
   * <p>The daily time when an automatic snapshot will be created.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in <code>HH:00</code> format, and in an hourly increment.</p>
   *             </li>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>The snapshot will be automatically created between the time specified and up to 45
   *           minutes after.</p>
   *             </li>
   *          </ul>
   */
  snapshotTimeOfDay?: string;
}

export namespace AutoSnapshotAddOnRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoSnapshotAddOnRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a request to enable, modify, or disable an add-on for an Amazon Lightsail
 *       resource.</p>
 *          <note>
 *             <p>An additional cost may be associated with enabling add-ons. For more information, see
 *         the <a href="https://aws.amazon.com/lightsail/pricing/">Lightsail pricing
 *         page</a>.</p>
 *          </note>
 */
export interface AddOnRequest {
  /**
   * <p>The add-on type.</p>
   */
  addOnType: AddOnType | string | undefined;

  /**
   * <p>An object that represents additional parameters when enabling or modifying the automatic
   *       snapshot add-on.</p>
   */
  autoSnapshotAddOnRequest?: AutoSnapshotAddOnRequest;
}

export namespace AddOnRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddOnRequest): any => ({
    ...obj,
  });
}

export enum ComparisonOperator {
  GreaterThanOrEqualToThreshold = "GreaterThanOrEqualToThreshold",
  GreaterThanThreshold = "GreaterThanThreshold",
  LessThanOrEqualToThreshold = "LessThanOrEqualToThreshold",
  LessThanThreshold = "LessThanThreshold",
}

export enum ContactProtocol {
  Email = "Email",
  SMS = "SMS",
}

export enum RegionName {
  AP_NORTHEAST_1 = "ap-northeast-1",
  AP_NORTHEAST_2 = "ap-northeast-2",
  AP_SOUTHEAST_1 = "ap-southeast-1",
  AP_SOUTHEAST_2 = "ap-southeast-2",
  AP_SOUTH_1 = "ap-south-1",
  CA_CENTRAL_1 = "ca-central-1",
  EU_CENTRAL_1 = "eu-central-1",
  EU_NORTH_1 = "eu-north-1",
  EU_WEST_1 = "eu-west-1",
  EU_WEST_2 = "eu-west-2",
  EU_WEST_3 = "eu-west-3",
  US_EAST_1 = "us-east-1",
  US_EAST_2 = "us-east-2",
  US_WEST_1 = "us-west-1",
  US_WEST_2 = "us-west-2",
}

/**
 * <p>Describes the resource location.</p>
 */
export interface ResourceLocation {
  /**
   * <p>The Availability Zone. Follows the format <code>us-east-2a</code> (case-sensitive).</p>
   */
  availabilityZone?: string;

  /**
   * <p>The AWS Region name.</p>
   */
  regionName?: RegionName | string;
}

export namespace ResourceLocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceLocation): any => ({
    ...obj,
  });
}

export enum MetricName {
  BurstCapacityPercentage = "BurstCapacityPercentage",
  BurstCapacityTime = "BurstCapacityTime",
  CPUUtilization = "CPUUtilization",
  ClientTLSNegotiationErrorCount = "ClientTLSNegotiationErrorCount",
  DatabaseConnections = "DatabaseConnections",
  DiskQueueDepth = "DiskQueueDepth",
  FreeStorageSpace = "FreeStorageSpace",
  HTTPCode_Instance_2XX_Count = "HTTPCode_Instance_2XX_Count",
  HTTPCode_Instance_3XX_Count = "HTTPCode_Instance_3XX_Count",
  HTTPCode_Instance_4XX_Count = "HTTPCode_Instance_4XX_Count",
  HTTPCode_Instance_5XX_Count = "HTTPCode_Instance_5XX_Count",
  HTTPCode_LB_4XX_Count = "HTTPCode_LB_4XX_Count",
  HTTPCode_LB_5XX_Count = "HTTPCode_LB_5XX_Count",
  HealthyHostCount = "HealthyHostCount",
  InstanceResponseTime = "InstanceResponseTime",
  NetworkIn = "NetworkIn",
  NetworkOut = "NetworkOut",
  NetworkReceiveThroughput = "NetworkReceiveThroughput",
  NetworkTransmitThroughput = "NetworkTransmitThroughput",
  RejectedConnectionCount = "RejectedConnectionCount",
  RequestCount = "RequestCount",
  StatusCheckFailed = "StatusCheckFailed",
  StatusCheckFailed_Instance = "StatusCheckFailed_Instance",
  StatusCheckFailed_System = "StatusCheckFailed_System",
  UnhealthyHostCount = "UnhealthyHostCount",
}

export enum ResourceType {
  Alarm = "Alarm",
  Bucket = "Bucket",
  Certificate = "Certificate",
  CloudFormationStackRecord = "CloudFormationStackRecord",
  ContactMethod = "ContactMethod",
  ContainerService = "ContainerService",
  Disk = "Disk",
  DiskSnapshot = "DiskSnapshot",
  Distribution = "Distribution",
  Domain = "Domain",
  ExportSnapshotRecord = "ExportSnapshotRecord",
  Instance = "Instance",
  InstanceSnapshot = "InstanceSnapshot",
  KeyPair = "KeyPair",
  LoadBalancer = "LoadBalancer",
  LoadBalancerTlsCertificate = "LoadBalancerTlsCertificate",
  PeeredVpc = "PeeredVpc",
  RelationalDatabase = "RelationalDatabase",
  RelationalDatabaseSnapshot = "RelationalDatabaseSnapshot",
  StaticIp = "StaticIp",
}

/**
 * <p>Describes resource being monitored by an alarm.</p>
 *          <p>An alarm is a way to monitor your Amazon Lightsail resource metrics. For more information,
 *       see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms
 *         in Amazon Lightsail</a>.</p>
 */
export interface MonitoredResourceInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource being monitored.</p>
   */
  arn?: string;

  /**
   * <p>The name of the Lightsail resource being monitored.</p>
   */
  name?: string;

  /**
   * <p>The Lightsail resource type of the resource being monitored.</p>
   *          <p>Instances, load balancers, and relational databases are the only Lightsail resources
   *       that can currently be monitored by alarms.</p>
   */
  resourceType?: ResourceType | string;
}

export namespace MonitoredResourceInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitoredResourceInfo): any => ({
    ...obj,
  });
}

export enum AlarmState {
  ALARM = "ALARM",
  INSUFFICIENT_DATA = "INSUFFICIENT_DATA",
  OK = "OK",
}

export enum MetricStatistic {
  Average = "Average",
  Maximum = "Maximum",
  Minimum = "Minimum",
  SampleCount = "SampleCount",
  Sum = "Sum",
}

export enum TreatMissingData {
  Breaching = "breaching",
  Ignore = "ignore",
  Missing = "missing",
  NotBreaching = "notBreaching",
}

export enum MetricUnit {
  Bits = "Bits",
  BitsSecond = "Bits/Second",
  Bytes = "Bytes",
  BytesSecond = "Bytes/Second",
  Count = "Count",
  CountSecond = "Count/Second",
  Gigabits = "Gigabits",
  GigabitsSecond = "Gigabits/Second",
  Gigabytes = "Gigabytes",
  GigabytesSecond = "Gigabytes/Second",
  Kilobits = "Kilobits",
  KilobitsSecond = "Kilobits/Second",
  Kilobytes = "Kilobytes",
  KilobytesSecond = "Kilobytes/Second",
  Megabits = "Megabits",
  MegabitsSecond = "Megabits/Second",
  Megabytes = "Megabytes",
  MegabytesSecond = "Megabytes/Second",
  Microseconds = "Microseconds",
  Milliseconds = "Milliseconds",
  None = "None",
  Percent = "Percent",
  Seconds = "Seconds",
  Terabits = "Terabits",
  TerabitsSecond = "Terabits/Second",
  Terabytes = "Terabytes",
  TerabytesSecond = "Terabytes/Second",
}

/**
 * <p>Describes an alarm.</p>
 *          <p>An alarm is a way to monitor your Lightsail resource metrics. For more information, see
 *         <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
 */
export interface Alarm {
  /**
   * <p>The name of the alarm.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the alarm.</p>
   */
  arn?: string;

  /**
   * <p>The timestamp when the alarm was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>An object that lists information about the location of the alarm.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The Lightsail resource type (e.g., <code>Alarm</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       your Lightsail alarm. This code enables our support team to look up your Lightsail
   *       information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>An object that lists information about the resource monitored by the alarm.</p>
   */
  monitoredResourceInfo?: MonitoredResourceInfo;

  /**
   * <p>The arithmetic operation used when comparing the specified statistic and threshold.</p>
   */
  comparisonOperator?: ComparisonOperator | string;

  /**
   * <p>The number of periods over which data is compared to the specified threshold.</p>
   */
  evaluationPeriods?: number;

  /**
   * <p>The period, in seconds, over which the statistic is applied.</p>
   */
  period?: number;

  /**
   * <p>The value against which the specified statistic is compared.</p>
   */
  threshold?: number;

  /**
   * <p>The number of data points that must not within the specified threshold to trigger the
   *       alarm.</p>
   */
  datapointsToAlarm?: number;

  /**
   * <p>Specifies how the alarm handles missing data points.</p>
   *          <p>An alarm can treat missing data in the following ways:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>breaching</code> - Assume the missing data is not within the threshold. Missing
   *           data counts towards the number of times the metric is not within the threshold.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>notBreaching</code> - Assume the missing data is within the threshold. Missing
   *           data does not count towards the number of times the metric is not within the
   *           threshold.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ignore</code> - Ignore the missing data. Maintains the current alarm
   *           state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>missing</code> - Missing data is treated as missing.</p>
   *             </li>
   *          </ul>
   */
  treatMissingData?: TreatMissingData | string;

  /**
   * <p>The statistic for the metric associated with the alarm.</p>
   *          <p>The following statistics are available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Minimum</code> - The lowest value observed during the specified period. Use this
   *           value to determine low volumes of activity for your application.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Maximum</code> - The highest value observed during the specified period. Use
   *           this value to determine high volumes of activity for your application.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Sum</code> - All values submitted for the matching metric added together. You
   *           can use this statistic to determine the total volume of a metric.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Average</code> - The value of Sum / SampleCount during the specified period. By
   *           comparing this statistic with the Minimum and Maximum values, you can determine the full
   *           scope of a metric and how close the average use is to the Minimum and Maximum values. This
   *           comparison helps you to know when to increase or decrease your resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SampleCount</code> - The count, or number, of data points used for the
   *           statistical calculation.</p>
   *             </li>
   *          </ul>
   */
  statistic?: MetricStatistic | string;

  /**
   * <p>The name of the metric associated with the alarm.</p>
   */
  metricName?: MetricName | string;

  /**
   * <p>The current state of the alarm.</p>
   *          <p>An alarm has the following possible states:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALARM</code> - The metric is outside of the defined threshold.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSUFFICIENT_DATA</code> - The alarm has just started, the metric is not
   *           available, or not enough data is available for the metric to determine the alarm
   *           state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OK</code> - The metric is within the defined threshold.</p>
   *             </li>
   *          </ul>
   */
  state?: AlarmState | string;

  /**
   * <p>The unit of the metric associated with the alarm.</p>
   */
  unit?: MetricUnit | string;

  /**
   * <p>The contact protocols for the alarm, such as <code>Email</code>, <code>SMS</code> (text
   *       messaging), or both.</p>
   */
  contactProtocols?: (ContactProtocol | string)[];

  /**
   * <p>The alarm states that trigger a notification.</p>
   */
  notificationTriggers?: (AlarmState | string)[];

  /**
   * <p>Indicates whether the alarm is enabled.</p>
   */
  notificationEnabled?: boolean;
}

export namespace Alarm {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Alarm): any => ({
    ...obj,
  });
}

export enum OperationType {
  AllocateStaticIp = "AllocateStaticIp",
  AttachCertificateToDistribution = "AttachCertificateToDistribution",
  AttachDisk = "AttachDisk",
  AttachInstancesToLoadBalancer = "AttachInstancesToLoadBalancer",
  AttachLoadBalancerTlsCertificate = "AttachLoadBalancerTlsCertificate",
  AttachStaticIp = "AttachStaticIp",
  CloseInstancePublicPorts = "CloseInstancePublicPorts",
  CreateBucket = "CreateBucket",
  CreateBucketAccessKey = "CreateBucketAccessKey",
  CreateCertificate = "CreateCertificate",
  CreateContactMethod = "CreateContactMethod",
  CreateContainerService = "CreateContainerService",
  CreateContainerServiceDeployment = "CreateContainerServiceDeployment",
  CreateContainerServiceRegistryLogin = "CreateContainerServiceRegistryLogin",
  CreateDisk = "CreateDisk",
  CreateDiskFromSnapshot = "CreateDiskFromSnapshot",
  CreateDiskSnapshot = "CreateDiskSnapshot",
  CreateDistribution = "CreateDistribution",
  CreateDomain = "CreateDomain",
  CreateInstance = "CreateInstance",
  CreateInstanceSnapshot = "CreateInstanceSnapshot",
  CreateInstancesFromSnapshot = "CreateInstancesFromSnapshot",
  CreateLoadBalancer = "CreateLoadBalancer",
  CreateLoadBalancerTlsCertificate = "CreateLoadBalancerTlsCertificate",
  CreateRelationalDatabase = "CreateRelationalDatabase",
  CreateRelationalDatabaseFromSnapshot = "CreateRelationalDatabaseFromSnapshot",
  CreateRelationalDatabaseSnapshot = "CreateRelationalDatabaseSnapshot",
  DeleteAlarm = "DeleteAlarm",
  DeleteBucket = "DeleteBucket",
  DeleteBucketAccessKey = "DeleteBucketAccessKey",
  DeleteCertificate = "DeleteCertificate",
  DeleteContactMethod = "DeleteContactMethod",
  DeleteContainerImage = "DeleteContainerImage",
  DeleteContainerService = "DeleteContainerService",
  DeleteDisk = "DeleteDisk",
  DeleteDiskSnapshot = "DeleteDiskSnapshot",
  DeleteDistribution = "DeleteDistribution",
  DeleteDomain = "DeleteDomain",
  DeleteDomainEntry = "DeleteDomainEntry",
  DeleteInstance = "DeleteInstance",
  DeleteInstanceSnapshot = "DeleteInstanceSnapshot",
  DeleteKnownHostKeys = "DeleteKnownHostKeys",
  DeleteLoadBalancer = "DeleteLoadBalancer",
  DeleteLoadBalancerTlsCertificate = "DeleteLoadBalancerTlsCertificate",
  DeleteRelationalDatabase = "DeleteRelationalDatabase",
  DeleteRelationalDatabaseSnapshot = "DeleteRelationalDatabaseSnapshot",
  DetachCertificateFromDistribution = "DetachCertificateFromDistribution",
  DetachDisk = "DetachDisk",
  DetachInstancesFromLoadBalancer = "DetachInstancesFromLoadBalancer",
  DetachStaticIp = "DetachStaticIp",
  DisableAddOn = "DisableAddOn",
  EnableAddOn = "EnableAddOn",
  GetAlarms = "GetAlarms",
  GetContactMethods = "GetContactMethods",
  OpenInstancePublicPorts = "OpenInstancePublicPorts",
  PutAlarm = "PutAlarm",
  PutInstancePublicPorts = "PutInstancePublicPorts",
  RebootInstance = "RebootInstance",
  RebootRelationalDatabase = "RebootRelationalDatabase",
  RegisterContainerImage = "RegisterContainerImage",
  ReleaseStaticIp = "ReleaseStaticIp",
  ResetDistributionCache = "ResetDistributionCache",
  SendContactMethodVerification = "SendContactMethodVerification",
  SetIpAddressType = "SetIpAddressType",
  SetResourceAccessForBucket = "SetResourceAccessForBucket",
  StartInstance = "StartInstance",
  StartRelationalDatabase = "StartRelationalDatabase",
  StopInstance = "StopInstance",
  StopRelationalDatabase = "StopRelationalDatabase",
  TestAlarm = "TestAlarm",
  UpdateBucket = "UpdateBucket",
  UpdateBucketBundle = "UpdateBucketBundle",
  UpdateContainerService = "UpdateContainerService",
  UpdateDistribution = "UpdateDistribution",
  UpdateDistributionBundle = "UpdateDistributionBundle",
  UpdateDomainEntry = "UpdateDomainEntry",
  UpdateLoadBalancerAttribute = "UpdateLoadBalancerAttribute",
  UpdateRelationalDatabase = "UpdateRelationalDatabase",
  UpdateRelationalDatabaseParameters = "UpdateRelationalDatabaseParameters",
}

export enum OperationStatus {
  Completed = "Completed",
  Failed = "Failed",
  NotStarted = "NotStarted",
  Started = "Started",
  Succeeded = "Succeeded",
}

/**
 * <p>Describes the API operation.</p>
 */
export interface Operation {
  /**
   * <p>The ID of the operation.</p>
   */
  id?: string;

  /**
   * <p>The resource name.</p>
   */
  resourceName?: string;

  /**
   * <p>The resource type. </p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The timestamp when the operation was initialized (e.g.,
   *       <code>1479816991.349</code>).</p>
   */
  createdAt?: Date;

  /**
   * <p>The Amazon Web Services Region and Availability Zone.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>A Boolean value indicating whether the operation is terminal.</p>
   */
  isTerminal?: boolean;

  /**
   * <p>Details about the operation (e.g., <code>Debian-1GB-Ohio-1</code>).</p>
   */
  operationDetails?: string;

  /**
   * <p>The type of operation. </p>
   */
  operationType?: OperationType | string;

  /**
   * <p>The status of the operation. </p>
   */
  status?: OperationStatus | string;

  /**
   * <p>The timestamp when the status was changed (e.g., <code>1479816991.349</code>).</p>
   */
  statusChangedAt?: Date;

  /**
   * <p>The error code.</p>
   */
  errorCode?: string;

  /**
   * <p>The error details.</p>
   */
  errorDetails?: string;
}

export namespace Operation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Operation): any => ({
    ...obj,
  });
}

/**
 * <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 */
export class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException" = "InvalidInputException";
  readonly $fault: "client" = "client";
  code?: string;
  docs?: string;
  tip?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputException, __BaseException>) {
    super({
      name: "InvalidInputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputException.prototype);
    this.code = opts.code;
    this.docs = opts.docs;
    this.tip = opts.tip;
  }
}

/**
 * <p>Lightsail throws this exception when it cannot find a resource.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  code?: string;
  docs?: string;
  tip?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.code = opts.code;
    this.docs = opts.docs;
    this.tip = opts.tip;
  }
}

/**
 * <p>Lightsail throws this exception when an operation fails to execute.</p>
 */
export class OperationFailureException extends __BaseException {
  readonly name: "OperationFailureException" = "OperationFailureException";
  readonly $fault: "client" = "client";
  code?: string;
  docs?: string;
  tip?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationFailureException, __BaseException>) {
    super({
      name: "OperationFailureException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationFailureException.prototype);
    this.code = opts.code;
    this.docs = opts.docs;
    this.tip = opts.tip;
  }
}

/**
 * <p>A general service exception.</p>
 */
export class ServiceException extends __BaseException {
  readonly name: "ServiceException" = "ServiceException";
  readonly $fault: "server" = "server";
  code?: string;
  docs?: string;
  tip?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceException, __BaseException>) {
    super({
      name: "ServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceException.prototype);
    this.code = opts.code;
    this.docs = opts.docs;
    this.tip = opts.tip;
  }
}

/**
 * <p>Lightsail throws this exception when the user has not been authenticated.</p>
 */
export class UnauthenticatedException extends __BaseException {
  readonly name: "UnauthenticatedException" = "UnauthenticatedException";
  readonly $fault: "client" = "client";
  code?: string;
  docs?: string;
  tip?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthenticatedException, __BaseException>) {
    super({
      name: "UnauthenticatedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthenticatedException.prototype);
    this.code = opts.code;
    this.docs = opts.docs;
    this.tip = opts.tip;
  }
}

/**
 * <p>Describes a block storage disk that is attached to an instance, and is included in an
 *       automatic snapshot.</p>
 */
export interface AttachedDisk {
  /**
   * <p>The path of the disk (e.g., <code>/dev/xvdf</code>).</p>
   */
  path?: string;

  /**
   * <p>The size of the disk in GB.</p>
   */
  sizeInGb?: number;
}

export namespace AttachedDisk {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachedDisk): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a block storage disk mapping.</p>
 */
export interface DiskMap {
  /**
   * <p>The original disk path exposed to the instance (for example,
   *       <code>/dev/sdh</code>).</p>
   */
  originalDiskPath?: string;

  /**
   * <p>The new disk name (e.g., <code>my-new-disk</code>).</p>
   */
  newDiskName?: string;
}

export namespace DiskMap {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DiskMap): any => ({
    ...obj,
  });
}

export enum AutoSnapshotStatus {
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  NOT_FOUND = "NotFound",
  SUCCESS = "Success",
}

/**
 * <p>Describes an automatic snapshot.</p>
 */
export interface AutoSnapshotDetails {
  /**
   * <p>The date of the automatic snapshot in <code>YYYY-MM-DD</code> format.</p>
   */
  date?: string;

  /**
   * <p>The timestamp when the automatic snapshot was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The status of the automatic snapshot.</p>
   */
  status?: AutoSnapshotStatus | string;

  /**
   * <p>An array of objects that describe the block storage disks attached to the instance when
   *       the automatic snapshot was created.</p>
   */
  fromAttachedDisks?: AttachedDisk[];
}

export namespace AutoSnapshotDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoSnapshotDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Availability Zone.</p>
 */
export interface AvailabilityZone {
  /**
   * <p>The name of the Availability Zone. The format is <code>us-east-2a</code>
   *       (case-sensitive).</p>
   */
  zoneName?: string;

  /**
   * <p>The state of the Availability Zone.</p>
   */
  state?: string;
}

export namespace AvailabilityZone {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AvailabilityZone): any => ({
    ...obj,
  });
}

export enum BehaviorEnum {
  CacheSetting = "cache",
  DontCacheSetting = "dont-cache",
}

export enum InstancePlatform {
  LinuxUnix = "LINUX_UNIX",
  Windows = "WINDOWS",
}

export enum BlueprintType {
  app = "app",
  os = "os",
}

/**
 * <p>Describes a blueprint (a virtual private server image).</p>
 */
export interface Blueprint {
  /**
   * <p>The ID for the virtual private server image (e.g., <code>app_wordpress_4_4</code> or
   *         <code>app_lamp_7_0</code>).</p>
   */
  blueprintId?: string;

  /**
   * <p>The friendly name of the blueprint (e.g., <code>Amazon Linux</code>).</p>
   */
  name?: string;

  /**
   * <p>The group name of the blueprint (e.g., <code>amazon-linux</code>).</p>
   */
  group?: string;

  /**
   * <p>The type of the blueprint (e.g., <code>os</code> or <code>app</code>).</p>
   */
  type?: BlueprintType | string;

  /**
   * <p>The description of the blueprint.</p>
   */
  description?: string;

  /**
   * <p>A Boolean value indicating whether the blueprint is active. Inactive blueprints are listed
   *       to support customers with existing instances but are not necessarily available for launch of
   *       new instances. Blueprints are marked inactive when they become outdated due to operating
   *       system updates or new application releases.</p>
   */
  isActive?: boolean;

  /**
   * <p>The minimum bundle power required to run this blueprint. For example, you need a bundle
   *       with a power value of 500 or more to create an instance that uses a blueprint with a minimum
   *       power value of 500. <code>0</code> indicates that the blueprint runs on all instance sizes.
   *     </p>
   */
  minPower?: number;

  /**
   * <p>The version number of the operating system, application, or stack (e.g.,
   *         <code>2016.03.0</code>).</p>
   */
  version?: string;

  /**
   * <p>The version code.</p>
   */
  versionCode?: string;

  /**
   * <p>The product URL to learn more about the image or blueprint.</p>
   */
  productUrl?: string;

  /**
   * <p>The end-user license agreement URL for the image or blueprint.</p>
   */
  licenseUrl?: string;

  /**
   * <p>The operating system platform (either Linux/Unix-based or Windows Server-based) of the
   *       blueprint.</p>
   */
  platform?: InstancePlatform | string;
}

export namespace Blueprint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Blueprint): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the access log configuration for a bucket in the Amazon Lightsail object storage
 *       service.</p>
 *          <p>For more information about bucket access logs, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-bucket-access-logs">Logging bucket requests using access logging in Amazon Lightsail</a> in the
 *         <i>Amazon Lightsail Developer Guide</i>.</p>
 */
export interface BucketAccessLogConfig {
  /**
   * <p>A Boolean value that indicates whether bucket access logging is enabled for the
   *       bucket.</p>
   */
  enabled: boolean | undefined;

  /**
   * <p>The name of the bucket where the access logs are saved. The destination can be a
   *       Lightsail bucket in the same account, and in the same Amazon Web Services Region as the
   *       source bucket.</p>
   *          <note>
   *             <p>This parameter is required when enabling the access log for a bucket, and should be
   *         omitted when disabling the access log.</p>
   *          </note>
   */
  destination?: string;

  /**
   * <p>The optional object prefix for the bucket access log.</p>
   *          <p>The prefix is an optional addition to the object key that organizes your access log files
   *       in the destination bucket. For example, if you specify a <code>logs/</code> prefix, then each
   *       log object will begin with the <code>logs/</code> prefix in its key (for example,
   *         <code>logs/2021-11-01-21-32-16-E568B2907131C0C0</code>).</p>
   *          <note>
   *             <p>This parameter can be optionally specified when enabling the access log for a bucket,
   *         and should be omitted when disabling the access log.</p>
   *          </note>
   */
  prefix?: string;
}

export namespace BucketAccessLogConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BucketAccessLogConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the state of an Amazon Lightsail bucket.</p>
 */
export interface BucketState {
  /**
   * <p>The state code of the bucket.</p>
   *
   *          <p>The following codes are possible:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>OK</code> - The bucket is in a running state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unknown</code> - Creation of the bucket might have timed-out. You might want to
   *           delete the bucket and create a new one.</p>
   *             </li>
   *          </ul>
   */
  code?: string;

  /**
   * <p>A message that describes the state of the bucket.</p>
   */
  message?: string;
}

export namespace BucketState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BucketState): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a tag key and optional value assigned to an Amazon Lightsail resource.</p>
 *          <p>For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   *          <p>Constraints: Tag keys accept a maximum of 128 letters, numbers, spaces in UTF-8, or the
   *       following characters: + - = . _ : / @</p>
   */
  key?: string;

  /**
   * <p>The value of the tag.</p>
   *          <p>Constraints: Tag values accept a maximum of 256 letters, numbers, spaces in UTF-8, or the
   *       following characters: + - = . _ : / @</p>
   */
  value?: string;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Amazon Lightsail bucket.</p>
 */
export interface Bucket {
  /**
   * <p>The Lightsail resource type of the bucket (for example, <code>Bucket</code>).</p>
   */
  resourceType?: string;

  /**
   * <p>An object that describes the access rules of the bucket.</p>
   */
  accessRules?: AccessRules;

  /**
   * <p>The Amazon Resource Name (ARN) of the bucket.</p>
   */
  arn?: string;

  /**
   * <p>The ID of the bundle currently applied to the bucket.</p>
   *
   *          <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a
   *       bucket.</p>
   *
   *          <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucketBundle.html">UpdateBucketBundle</a> action to change the
   *       bundle of a bucket.</p>
   */
  bundleId?: string;

  /**
   * <p>The timestamp when the distribution was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The URL of the bucket.</p>
   */
  url?: string;

  /**
   * <p>An object that describes the location of the bucket, such as the Amazon Web Services Region
   *       and Availability Zone.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The name of the bucket.</p>
   */
  name?: string;

  /**
   * <p>The support code for a bucket. Include this code in your email to support when you have
   *       questions about a Lightsail bucket. This code enables our support team to look up your
   *       Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The tag keys and optional values for the bucket. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Tags in
   *         Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
   */
  tags?: Tag[];

  /**
   * <p>Indicates whether object versioning is enabled for the bucket.</p>
   *
   *          <p>The following options can be configured:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Enabled</code> - Object versioning is enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Suspended</code> - Object versioning was previously enabled but is currently
   *           suspended. Existing object versions are retained.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NeverEnabled</code> - Object versioning has never been enabled.</p>
   *             </li>
   *          </ul>
   */
  objectVersioning?: string;

  /**
   * <p>Indicates whether the bundle that is currently applied to a bucket can be changed to
   *       another bundle.</p>
   *
   *          <p>You can update a bucket's bundle only one time within a monthly Amazon Web Services billing
   *       cycle.</p>
   *
   *          <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucketBundle.html">UpdateBucketBundle</a> action to change a
   *       bucket's bundle.</p>
   */
  ableToUpdateBundle?: boolean;

  /**
   * <p>An array of strings that specify the Amazon Web Services account IDs that have read-only
   *       access to the bucket.</p>
   */
  readonlyAccessAccounts?: string[];

  /**
   * <p>An array of objects that describe Lightsail instances that have access to the
   *       bucket.</p>
   *
   *          <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_SetResourceAccessForBucket.html">SetResourceAccessForBucket</a>
   *       action to update the instances that have access to a bucket.</p>
   */
  resourcesReceivingAccess?: ResourceReceivingAccess[];

  /**
   * <p>An object that describes the state of the bucket.</p>
   */
  state?: BucketState;

  /**
   * <p>An object that describes the access log configuration for the bucket.</p>
   */
  accessLogConfig?: BucketAccessLogConfig;
}

export namespace Bucket {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Bucket): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the specifications of a bundle that can be applied to an Amazon Lightsail
 *       bucket.</p>
 *
 *          <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a
 *       bucket.</p>
 */
export interface BucketBundle {
  /**
   * <p>The ID of the bundle.</p>
   */
  bundleId?: string;

  /**
   * <p>The name of the bundle.</p>
   */
  name?: string;

  /**
   * <p>The monthly price of the bundle, in US dollars.</p>
   */
  price?: number;

  /**
   * <p>The storage size of the bundle, in GB.</p>
   */
  storagePerMonthInGb?: number;

  /**
   * <p>The monthly network transfer quota of the bundle.</p>
   */
  transferPerMonthInGb?: number;

  /**
   * <p>Indicates whether the bundle is active. Use for a new or existing bucket.</p>
   */
  isActive?: boolean;
}

export namespace BucketBundle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BucketBundle): any => ({
    ...obj,
  });
}

export enum BucketMetricName {
  BucketSizeBytes = "BucketSizeBytes",
  NumberOfObjects = "NumberOfObjects",
}

/**
 * <p>Describes a bundle, which is a set of specs describing your virtual private server (or
 *         <i>instance</i>).</p>
 */
export interface Bundle {
  /**
   * <p>The price in US dollars (e.g., <code>5.0</code>) of the bundle.</p>
   */
  price?: number;

  /**
   * <p>The number of vCPUs included in the bundle (e.g., <code>2</code>).</p>
   */
  cpuCount?: number;

  /**
   * <p>The size of the SSD (e.g., <code>30</code>).</p>
   */
  diskSizeInGb?: number;

  /**
   * <p>The bundle ID (e.g., <code>micro_1_0</code>).</p>
   */
  bundleId?: string;

  /**
   * <p>The Amazon EC2 instance type (e.g., <code>t2.micro</code>).</p>
   */
  instanceType?: string;

  /**
   * <p>A Boolean value indicating whether the bundle is active.</p>
   */
  isActive?: boolean;

  /**
   * <p>A friendly name for the bundle (e.g., <code>Micro</code>).</p>
   */
  name?: string;

  /**
   * <p>A numeric value that represents the power of the bundle (e.g., <code>500</code>). You can
   *       use the bundle's power value in conjunction with a blueprint's minimum power value to
   *       determine whether the blueprint will run on the bundle. For example, you need a bundle with a
   *       power value of 500 or more to create an instance that uses a blueprint with a minimum power
   *       value of 500.</p>
   */
  power?: number;

  /**
   * <p>The amount of RAM in GB (e.g., <code>2.0</code>).</p>
   */
  ramSizeInGb?: number;

  /**
   * <p>The data transfer rate per month in GB (e.g., <code>2000</code>).</p>
   */
  transferPerMonthInGb?: number;

  /**
   * <p>The operating system platform (Linux/Unix-based or Windows Server-based) that the bundle
   *       supports. You can only launch a <code>WINDOWS</code> bundle on a blueprint that supports the
   *         <code>WINDOWS</code> platform. <code>LINUX_UNIX</code> blueprints require a
   *         <code>LINUX_UNIX</code> bundle.</p>
   */
  supportedPlatforms?: (InstancePlatform | string)[];
}

export namespace Bundle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Bundle): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the default cache behavior of an Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 */
export interface CacheBehavior {
  /**
   * <p>The cache behavior of the distribution.</p>
   *          <p>The following cache behaviors can be specified:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>cache</code>
   *                   </b> - This option is best for static
   *           sites. When specified, your distribution caches and serves your entire website as static
   *           content. This behavior is ideal for websites with static content that doesn't change
   *           depending on who views it, or for websites that don't use cookies, headers, or query
   *           strings to personalize content.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>dont-cache</code>
   *                   </b> - This option is best for
   *           sites that serve a mix of static and dynamic content. When specified, your distribution
   *           caches and serve only the content that is specified in the distribution's
   *             <code>CacheBehaviorPerPath</code> parameter. This behavior is ideal for websites or web
   *           applications that use cookies, headers, and query strings to personalize content for
   *           individual users.</p>
   *             </li>
   *          </ul>
   */
  behavior?: BehaviorEnum | string;
}

export namespace CacheBehavior {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CacheBehavior): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the per-path cache behavior of an Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>A per-path cache behavior is used to override, or add an exception to, the default cache
 *       behavior of a distribution. For example, if the <code>cacheBehavior</code> is set to
 *         <code>cache</code>, then a per-path cache behavior can be used to specify a directory, file,
 *       or file type that your distribution will cache. Alternately, if the distribution's
 *         <code>cacheBehavior</code> is <code>dont-cache</code>, then a per-path cache behavior can be
 *       used to specify a directory, file, or file type that your distribution will not cache.</p>
 */
export interface CacheBehaviorPerPath {
  /**
   * <p>The path to a directory or file to cached, or not cache. Use an asterisk symbol to specify
   *       wildcard directories (<code>path/to/assets/*</code>), and file types (<code>*.html, *jpg,
   *         *js</code>). Directories and file paths are case-sensitive.</p>
   *          <p>Examples:</p>
   *          <ul>
   *             <li>
   *                <p>Specify the following to cache all files in the document root of an Apache web server
   *           running on a Lightsail instance.</p>
   *                <p>
   *                   <code>var/www/html/</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Specify the following file to cache only the index page in the document root of an
   *           Apache web server.</p>
   *                <p>
   *                   <code>var/www/html/index.html</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Specify the following to cache only the .html files in the document root of an Apache
   *           web server.</p>
   *                <p>
   *                   <code>var/www/html/*.html</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Specify the following to cache only the .jpg, .png, and .gif files in the images
   *           sub-directory of the document root of an Apache web server.</p>
   *                <p>
   *                   <code>var/www/html/images/*.jpg</code>
   *                </p>
   *                <p>
   *                   <code>var/www/html/images/*.png</code>
   *                </p>
   *                <p>
   *                   <code>var/www/html/images/*.gif</code>
   *                </p>
   *                <p>Specify the following to cache all files in the images sub-directory of the document
   *           root of an Apache web server.</p>
   *                <p>
   *                   <code>var/www/html/images/</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  path?: string;

  /**
   * <p>The cache behavior for the specified path.</p>
   *          <p>You can specify one of the following per-path cache behaviors:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>cache</code>
   *                   </b> - This behavior caches the
   *           specified path. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>dont-cache</code>
   *                   </b> - This behavior doesn't cache
   *           the specified path. </p>
   *             </li>
   *          </ul>
   */
  behavior?: BehaviorEnum | string;
}

export namespace CacheBehaviorPerPath {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CacheBehaviorPerPath): any => ({
    ...obj,
  });
}

export enum ForwardValues {
  all = "all",
  allowList = "allow-list",
  none = "none",
}

/**
 * <p>Describes whether an Amazon Lightsail content delivery network (CDN) distribution forwards
 *       cookies to the origin and, if so, which ones.</p>
 *          <p>For the cookies that you specify, your distribution caches separate versions of the
 *       specified content based on the cookie values in viewer
 *       requests.</p>
 */
export interface CookieObject {
  /**
   * <p>Specifies which cookies to forward to the distribution's origin for a cache behavior:
   *         <code>all</code>, <code>none</code>, or <code>allow-list</code> to forward only the cookies
   *       specified in the <code>cookiesAllowList</code> parameter.</p>
   */
  option?: ForwardValues | string;

  /**
   * <p>The specific cookies to forward to your distribution's origin.</p>
   */
  cookiesAllowList?: string[];
}

export namespace CookieObject {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CookieObject): any => ({
    ...obj,
  });
}

export enum HeaderEnum {
  accept = "Accept",
  acceptCharset = "Accept-Charset",
  acceptDatetime = "Accept-Datetime",
  acceptEncoding = "Accept-Encoding",
  acceptLanguage = "Accept-Language",
  authorization = "Authorization",
  cloudFrontForwardedProto = "CloudFront-Forwarded-Proto",
  cloudFrontIsDesktopViewer = "CloudFront-Is-Desktop-Viewer",
  cloudFrontIsMobileViewer = "CloudFront-Is-Mobile-Viewer",
  cloudFrontIsSmartTVViewer = "CloudFront-Is-SmartTV-Viewer",
  cloudFrontIsTabletViewer = "CloudFront-Is-Tablet-Viewer",
  cloudFrontViewerCountry = "CloudFront-Viewer-Country",
  host = "Host",
  origin = "Origin",
  referer = "Referer",
}

/**
 * <p>Describes the request headers that a Lightsail distribution bases caching on.</p>
 *          <p>For the headers that you specify, your distribution caches separate versions of the
 *       specified content based on the header values in viewer requests. For example, suppose viewer
 *       requests for <code>logo.jpg</code> contain a custom <code>product</code> header that has a
 *       value of either <code>acme</code> or <code>apex</code>, and you configure your distribution to
 *       cache your content based on values in the <code>product</code> header. Your distribution
 *       forwards the <code>product</code> header to the origin and caches the response from the origin
 *       once for each header value.
 *       </p>
 */
export interface HeaderObject {
  /**
   * <p>The headers that you want your distribution to forward to your origin and base caching
   *       on.</p>
   *          <p>You can configure your distribution to do one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>all</code>
   *                   </b> - Forward all headers to your
   *           origin.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>none</code>
   *                   </b> - Forward only the default
   *           headers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>allow-list</code>
   *                   </b> - Forward only the headers
   *           you specify using the <code>headersAllowList</code> parameter.</p>
   *             </li>
   *          </ul>
   */
  option?: ForwardValues | string;

  /**
   * <p>The specific headers to forward to your distribution's origin.</p>
   */
  headersAllowList?: (HeaderEnum | string)[];
}

export namespace HeaderObject {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HeaderObject): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the query string parameters that an Amazon Lightsail content delivery network
 *       (CDN) distribution to bases caching on.</p>
 *          <p>For the query strings that you specify, your distribution caches separate versions of the
 *       specified content based on the query string values in viewer
 *       requests.</p>
 */
export interface QueryStringObject {
  /**
   * <p>Indicates whether the distribution forwards and caches based on query strings.</p>
   */
  option?: boolean;

  /**
   * <p>The specific query strings that the distribution forwards to the origin.</p>
   *          <p>Your distribution will cache content based on the specified query strings.</p>
   *          <p>If the <code>option</code> parameter is true, then your distribution forwards all query
   *       strings, regardless of what you specify using the <code>queryStringsAllowList</code>
   *       parameter.</p>
   */
  queryStringsAllowList?: string[];
}

export namespace QueryStringObject {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryStringObject): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the cache settings of an Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>These settings apply only to your distribution's <code>cacheBehaviors</code> (including
 *       the <code>defaultCacheBehavior</code>) that have a <code>behavior</code> of
 *       <code>cache</code>.</p>
 */
export interface CacheSettings {
  /**
   * <p>The default amount of time that objects stay in the distribution's cache before the
   *       distribution forwards another request to the origin to determine whether the content has been
   *       updated.</p>
   *          <note>
   *             <p>The value specified applies only when the origin does not add HTTP headers such as
   *           <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and
   *           <code>Expires</code> to objects.</p>
   *          </note>
   */
  defaultTTL?: number;

  /**
   * <p>The minimum amount of time that objects stay in the distribution's cache before the
   *       distribution forwards another request to the origin to determine whether the object has been
   *       updated.</p>
   *          <p>A value of <code>0</code> must be specified for <code>minimumTTL</code> if the
   *       distribution is configured to forward all headers to the origin.</p>
   */
  minimumTTL?: number;

  /**
   * <p>The maximum amount of time that objects stay in the distribution's cache before the
   *       distribution forwards another request to the origin to determine whether the object has been
   *       updated.</p>
   *          <p>The value specified applies only when the origin adds HTTP headers such as
   *         <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and
   *         <code>Expires</code> to objects.</p>
   */
  maximumTTL?: number;

  /**
   * <p>The HTTP methods that are processed and forwarded to the distribution's origin.</p>
   *          <p>You can specify the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>GET,HEAD</code> - The distribution forwards the <code>GET</code> and
   *             <code>HEAD</code> methods.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GET,HEAD,OPTIONS</code> - The distribution forwards the <code>GET</code>,
   *             <code>HEAD</code>, and <code>OPTIONS</code> methods.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE</code> - The distribution forwards the
   *             <code>GET</code>, <code>HEAD</code>, <code>OPTIONS</code>, <code>PUT</code>,
   *             <code>PATCH</code>, <code>POST</code>, and <code>DELETE</code> methods.</p>
   *             </li>
   *          </ul>
   *          <p>If you specify the third option, you might need to restrict access to your distribution's
   *       origin so users can't perform operations that you don't want them to. For example, you might
   *       not want users to have permission to delete objects from your origin.</p>
   */
  allowedHTTPMethods?: string;

  /**
   * <p>The HTTP method responses that are cached by your distribution.</p>
   *          <p>You can specify the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>GET,HEAD</code> - The distribution caches responses to the <code>GET</code> and
   *             <code>HEAD</code> methods.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GET,HEAD,OPTIONS</code> - The distribution caches responses to the
   *             <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> methods.</p>
   *             </li>
   *          </ul>
   */
  cachedHTTPMethods?: string;

  /**
   * <p>An object that describes the cookies that are forwarded to the origin. Your content is
   *       cached based on the cookies that are forwarded.</p>
   */
  forwardedCookies?: CookieObject;

  /**
   * <p>An object that describes the headers that are forwarded to the origin. Your content is
   *       cached based on the headers that are forwarded.</p>
   */
  forwardedHeaders?: HeaderObject;

  /**
   * <p>An object that describes the query strings that are forwarded to the origin. Your content
   *       is cached based on the query strings that are forwarded.</p>
   */
  forwardedQueryStrings?: QueryStringObject;
}

export namespace CacheSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CacheSettings): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the domain name system (DNS) records to add to your domain's DNS to validate it
 *       for an Amazon Lightsail certificate.</p>
 */
export interface ResourceRecord {
  /**
   * <p>The name of the record.</p>
   */
  name?: string;

  /**
   * <p>The DNS record type.</p>
   */
  type?: string;

  /**
   * <p>The value for the DNS record.</p>
   */
  value?: string;
}

export namespace ResourceRecord {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceRecord): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the domain validation records of an Amazon Lightsail SSL/TLS certificate.</p>
 */
export interface DomainValidationRecord {
  /**
   * <p>The domain name of the certificate validation record. For example,
   *         <code>example.com</code> or <code>www.example.com</code>.</p>
   */
  domainName?: string;

  /**
   * <p>An object that describes the DNS records to add to your domain's DNS to validate it for
   *       the certificate.</p>
   */
  resourceRecord?: ResourceRecord;
}

export namespace DomainValidationRecord {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainValidationRecord): any => ({
    ...obj,
  });
}

export enum RenewalStatus {
  Failed = "Failed",
  PendingAutoRenewal = "PendingAutoRenewal",
  PendingValidation = "PendingValidation",
  Success = "Success",
}

/**
 * <p>Describes the status of a SSL/TLS certificate renewal managed by Amazon Lightsail.</p>
 */
export interface RenewalSummary {
  /**
   * <p>An array of objects that describe the domain validation records of the certificate.</p>
   */
  domainValidationRecords?: DomainValidationRecord[];

  /**
   * <p>The renewal status of the certificate.</p>
   *          <p>The following renewal status are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>PendingAutoRenewal</code>
   *                   </b> - Lightsail is
   *           attempting to automatically validate the domain names of the certificate. No further
   *           action is required. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>PendingValidation</code>
   *                   </b> - Lightsail couldn't
   *           automatically validate one or more domain names of the certificate. You must take action
   *           to validate these domain names or the certificate won't be renewed. Check to make sure
   *           your certificate's domain validation records exist in your domain's DNS, and that your
   *           certificate remains in use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Success</code>
   *                   </b> - All domain names in the
   *           certificate are validated, and Lightsail renewed the certificate. No further action is
   *           required. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Failed</code>
   *                   </b> - One or more domain names were
   *           not validated before the certificate expired, and Lightsail did not renew the
   *           certificate. You can request a new certificate using the <code>CreateCertificate</code>
   *           action.</p>
   *             </li>
   *          </ul>
   */
  renewalStatus?: RenewalStatus | string;

  /**
   * <p>The reason for the renewal status of the certificate.</p>
   */
  renewalStatusReason?: string;

  /**
   * <p>The timestamp when the certificate was last updated.</p>
   */
  updatedAt?: Date;
}

export namespace RenewalSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RenewalSummary): any => ({
    ...obj,
  });
}

export enum CertificateStatus {
  Expired = "EXPIRED",
  Failed = "FAILED",
  Inactive = "INACTIVE",
  Issued = "ISSUED",
  PendingValidation = "PENDING_VALIDATION",
  Revoked = "REVOKED",
  ValidationTimedOut = "VALIDATION_TIMED_OUT",
}

/**
 * <p>Describes the full details of an Amazon Lightsail SSL/TLS certificate.</p>
 *          <note>
 *             <p>To get a summary of a certificate, use the <code>GetCertificates</code> action and ommit
 *           <code>includeCertificateDetails</code> from your request. The response will include only
 *         the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.</p>
 *          </note>
 */
export interface Certificate {
  /**
   * <p>The Amazon Resource Name (ARN) of the certificate.</p>
   */
  arn?: string;

  /**
   * <p>The name of the certificate (e.g., <code>my-certificate</code>).</p>
   */
  name?: string;

  /**
   * <p>The domain name of the certificate.</p>
   */
  domainName?: string;

  /**
   * <p>The validation status of the certificate.</p>
   */
  status?: CertificateStatus | string;

  /**
   * <p>The serial number of the certificate.</p>
   */
  serialNumber?: string;

  /**
   * <p>An array of strings that specify the alternate domains (e.g., <code>example2.com</code>)
   *       and subdomains (e.g., <code>blog.example.com</code>) of the certificate.</p>
   */
  subjectAlternativeNames?: string[];

  /**
   * <p>An array of objects that describe the domain validation records of the certificate.</p>
   */
  domainValidationRecords?: DomainValidationRecord[];

  /**
   * <p>The validation failure reason, if any, of the certificate.</p>
   *          <p>The following failure reasons are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>NO_AVAILABLE_CONTACTS</code>
   *                   </b> - This failure
   *           applies to email validation, which is not available for Lightsail certificates.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>ADDITIONAL_VERIFICATION_REQUIRED</code>
   *                   </b> -
   *           Lightsail requires additional information to process this certificate request. This can
   *           happen as a fraud-protection measure, such as when the domain ranks within the Alexa top
   *           1000 websites. To provide the required information, use the <a href="https://console.aws.amazon.com/support/home">AWS Support Center</a> to contact
   *           AWS Support.</p>
   *                <note>
   *                   <p>You cannot request a certificate for Amazon-owned domain names such as those ending
   *             in amazonaws.com, cloudfront.net, or elasticbeanstalk.com.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>DOMAIN_NOT_ALLOWED</code>
   *                   </b> - One or more of the
   *           domain names in the certificate request was reported as an unsafe domain by <a href="https://www.virustotal.com/gui/home/url">VirusTotal</a>. To correct the
   *           problem, search for your domain name on the <a href="https://www.virustotal.com/gui/home/url">VirusTotal</a> website. If your domain
   *           is reported as suspicious, see <a href="https://developers.google.com/web/fundamentals/security/hacked">Google Help for
   *             Hacked Websites</a> to learn what you can do.</p>
   *                <p>If you believe that the result is a false positive, notify the organization that is
   *           reporting the domain. VirusTotal is an aggregate of several antivirus and URL scanners and
   *           cannot remove your domain from a block list itself. After you correct the problem and the
   *           VirusTotal registry has been updated, request a new certificate.</p>
   *                <p>If you see this error and your domain is not included in the VirusTotal list, visit
   *           the <a href="https://console.aws.amazon.com/support/home">AWS Support Center</a>
   *           and create a case.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>INVALID_PUBLIC_DOMAIN</code>
   *                   </b> - One or more of
   *           the domain names in the certificate request is not valid. Typically, this is because a
   *           domain name in the request is not a valid top-level domain. Try to request a certificate
   *           again, correcting any spelling errors or typos that were in the failed request, and ensure
   *           that all domain names in the request are for valid top-level domains. For example, you
   *           cannot request a certificate for <code>example.invalidpublicdomain</code> because
   *             <code>invalidpublicdomain</code> is not a valid top-level domain.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>OTHER</code>
   *                   </b> - Typically, this failure occurs
   *           when there is a typographical error in one or more of the domain names in the certificate
   *           request. Try to request a certificate again, correcting any spelling errors or typos that
   *           were in the failed request. </p>
   *             </li>
   *          </ul>
   */
  requestFailureReason?: string;

  /**
   * <p>The number of Lightsail resources that the certificate is attached to.</p>
   */
  inUseResourceCount?: number;

  /**
   * <p>The algorithm used to generate the key pair (the public and private key) of the
   *       certificate.</p>
   */
  keyAlgorithm?: string;

  /**
   * <p>The timestamp when the certificate was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The timestamp when the certificate was issued.</p>
   */
  issuedAt?: Date;

  /**
   * <p>The certificate authority that issued the certificate.</p>
   */
  issuerCA?: string;

  /**
   * <p>The timestamp when the certificate is first valid.</p>
   */
  notBefore?: Date;

  /**
   * <p>The timestamp when the certificate expires.</p>
   */
  notAfter?: Date;

  /**
   * <p>The renewal eligibility of the certificate.</p>
   */
  eligibleToRenew?: string;

  /**
   * <p>An object that describes the status of the certificate renewal managed by
   *       Lightsail.</p>
   */
  renewalSummary?: RenewalSummary;

  /**
   * <p>The timestamp when the certificate was revoked. This value is present only when the
   *       certificate status is <code>REVOKED</code>.</p>
   */
  revokedAt?: Date;

  /**
   * <p>The reason the certificate was revoked. This value is present only when the certificate
   *       status is <code>REVOKED</code>.</p>
   */
  revocationReason?: string;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       your Lightsail certificate. This code enables our support team to look up your Lightsail
   *       information more easily.</p>
   */
  supportCode?: string;
}

export namespace Certificate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Certificate): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Amazon Lightsail SSL/TLS certificate.</p>
 */
export interface CertificateSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>The name of the certificate.</p>
   */
  certificateName?: string;

  /**
   * <p>The domain name of the certificate.</p>
   */
  domainName?: string;

  /**
   * <p>An object that describes a certificate in detail.</p>
   */
  certificateDetail?: Certificate;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   */
  tags?: Tag[];
}

export namespace CertificateSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CertificateSummary): any => ({
    ...obj,
  });
}

export enum NetworkProtocol {
  ALL = "all",
  ICMP = "icmp",
  TCP = "tcp",
  UDP = "udp",
}

/**
 * <p>Describes ports to open on an instance, the IP addresses allowed to connect to the
 *       instance through the ports, and the protocol.</p>
 */
export interface PortInfo {
  /**
   * <p>The first port in a range of open ports on an instance.</p>
   *          <p>Allowed ports:</p>
   *          <ul>
   *             <li>
   *                <p>TCP and UDP - <code>0</code> to <code>65535</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ICMP - The ICMP type for IPv4 addresses. For example, specify <code>8</code> as the
   *             <code>fromPort</code> (ICMP type), and <code>-1</code> as the <code>toPort</code> (ICMP
   *           code), to enable ICMP Ping. For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages">Control Messages</a> on <i>Wikipedia</i>.</p>
   *             </li>
   *             <li>
   *                <p>ICMPv6 - The ICMP type for IPv6 addresses. For example, specify <code>128</code> as
   *           the <code>fromPort</code> (ICMPv6 type), and <code>0</code> as <code>toPort</code> (ICMPv6
   *           code). For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol_for_IPv6">Internet
   *             Control Message Protocol for IPv6</a>.</p>
   *             </li>
   *          </ul>
   */
  fromPort?: number;

  /**
   * <p>The last port in a range of open ports on an instance.</p>
   *          <p>Allowed ports:</p>
   *          <ul>
   *             <li>
   *                <p>TCP and UDP - <code>0</code> to <code>65535</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ICMP - The ICMP code for IPv4 addresses. For example, specify <code>8</code> as the
   *             <code>fromPort</code> (ICMP type), and <code>-1</code> as the <code>toPort</code> (ICMP
   *           code), to enable ICMP Ping. For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages">Control Messages</a> on <i>Wikipedia</i>.</p>
   *             </li>
   *             <li>
   *                <p>ICMPv6 - The ICMP code for IPv6 addresses. For example, specify <code>128</code> as
   *           the <code>fromPort</code> (ICMPv6 type), and <code>0</code> as <code>toPort</code> (ICMPv6
   *           code). For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol_for_IPv6">Internet
   *             Control Message Protocol for IPv6</a>.</p>
   *             </li>
   *          </ul>
   */
  toPort?: number;

  /**
   * <p>The IP protocol name.</p>
   *          <p>The name can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>tcp</code> - Transmission Control Protocol (TCP) provides reliable, ordered, and
   *           error-checked delivery of streamed data between applications running on hosts
   *           communicating by an IP network. If you have an application that doesn't require reliable
   *           data stream service, use UDP instead.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>all</code> - All transport layer protocol types. For more general information,
   *           see <a href="https://en.wikipedia.org/wiki/Transport_layer">Transport layer</a> on
   *             <i>Wikipedia</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>udp</code> - With User Datagram Protocol (UDP), computer applications can send
   *           messages (or datagrams) to other hosts on an Internet Protocol (IP) network. Prior
   *           communications are not required to set up transmission channels or data paths.
   *           Applications that don't require reliable data stream service can use UDP, which provides a
   *           connectionless datagram service that emphasizes reduced latency over reliability. If you
   *           do require reliable data stream service, use TCP instead.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>icmp</code> - Internet Control Message Protocol (ICMP) is used to send error
   *           messages and operational information indicating success or failure when communicating with
   *           an instance. For example, an error is indicated when an instance could not be reached.
   *           When you specify <code>icmp</code> as the <code>protocol</code>, you must specify the ICMP
   *           type using the <code>fromPort</code> parameter, and ICMP code using the
   *             <code>toPort</code> parameter.</p>
   *             </li>
   *          </ul>
   */
  protocol?: NetworkProtocol | string;

  /**
   * <p>The IPv4 address, or range of IPv4 addresses (in CIDR notation) that are allowed to
   *       connect to an instance through the ports, and the protocol.</p>
   *          <note>
   *             <p>The <code>ipv6Cidrs</code> parameter lists the IPv6 addresses that are allowed to
   *         connect to an instance.</p>
   *          </note>
   *          <p>Examples:</p>
   *          <ul>
   *             <li>
   *                <p>To allow the IP address <code>192.0.2.44</code>, specify <code>192.0.2.44</code> or
   *             <code>192.0.2.44/32</code>. </p>
   *             </li>
   *             <li>
   *                <p>To allow the IP addresses <code>192.0.2.0</code> to <code>192.0.2.255</code>, specify
   *             <code>192.0.2.0/24</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about CIDR block notation, see <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation">Classless
   *         Inter-Domain Routing</a> on <i>Wikipedia</i>.</p>
   */
  cidrs?: string[];

  /**
   * <p>The IPv6 address, or range of IPv6 addresses (in CIDR notation) that are allowed to
   *       connect to an instance through the ports, and the protocol. Only devices with an IPv6 address
   *       can connect to an instance through IPv6; otherwise, IPv4 should be used.</p>
   *          <note>
   *             <p>The <code>cidrs</code> parameter lists the IPv4 addresses that are allowed to connect to
   *         an instance.</p>
   *          </note>
   *          <p>For more information about CIDR block notation, see <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation">Classless
   *         Inter-Domain Routing</a> on <i>Wikipedia</i>.</p>
   */
  ipv6Cidrs?: string[];

  /**
   * <p>An alias that defines access for a preconfigured range of IP addresses.</p>
   *          <p>The only alias currently supported is <code>lightsail-connect</code>, which allows IP
   *       addresses of the browser-based RDP/SSH client in the Lightsail console to connect to your
   *       instance.</p>
   */
  cidrListAliases?: string[];
}

export namespace PortInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PortInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the destination of a record.</p>
 */
export interface DestinationInfo {
  /**
   * <p>The ID of the resource created at the destination.</p>
   */
  id?: string;

  /**
   * <p>The destination service of the record.</p>
   */
  service?: string;
}

export namespace DestinationInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DestinationInfo): any => ({
    ...obj,
  });
}

export enum CloudFormationStackRecordSourceType {
  ExportSnapshotRecord = "ExportSnapshotRecord",
}

/**
 * <p>Describes the source of a CloudFormation stack record (i.e., the export snapshot
 *       record).</p>
 */
export interface CloudFormationStackRecordSourceInfo {
  /**
   * <p>The Lightsail resource type (e.g., <code>ExportSnapshotRecord</code>).</p>
   */
  resourceType?: CloudFormationStackRecordSourceType | string;

  /**
   * <p>The name of the record.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the export snapshot record.</p>
   */
  arn?: string;
}

export namespace CloudFormationStackRecordSourceInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudFormationStackRecordSourceInfo): any => ({
    ...obj,
  });
}

export enum RecordState {
  Failed = "Failed",
  Started = "Started",
  Succeeded = "Succeeded",
}

/**
 * <p>Describes a CloudFormation stack record created as a result of the <code>create cloud
 *         formation stack</code> action.</p>
 *          <p>A CloudFormation stack record provides information about the AWS CloudFormation stack used to
 *       create a new Amazon Elastic Compute Cloud instance from an exported Lightsail instance snapshot.</p>
 */
export interface CloudFormationStackRecord {
  /**
   * <p>The name of the CloudFormation stack record. It starts with
   *         <code>CloudFormationStackRecord</code> followed by a GUID.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudFormation stack record.</p>
   */
  arn?: string;

  /**
   * <p>The date when the CloudFormation stack record was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>A list of objects describing the Availability Zone and Amazon Web Services Region of the
   *       CloudFormation stack record.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The Lightsail resource type (e.g., <code>CloudFormationStackRecord</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The current state of the CloudFormation stack record.</p>
   */
  state?: RecordState | string;

  /**
   * <p>A list of objects describing the source of the CloudFormation stack record.</p>
   */
  sourceInfo?: CloudFormationStackRecordSourceInfo[];

  /**
   * <p>A list of objects describing the destination service, which is AWS CloudFormation, and the Amazon
   *       Resource Name (ARN) of the AWS CloudFormation stack.</p>
   */
  destinationInfo?: DestinationInfo;
}

export namespace CloudFormationStackRecord {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudFormationStackRecord): any => ({
    ...obj,
  });
}

export enum ContactMethodStatus {
  Invalid = "Invalid",
  PendingVerification = "PendingVerification",
  Valid = "Valid",
}

/**
 * <p>Describes a contact method.</p>
 *          <p>A contact method is a way to send you notifications. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
 */
export interface ContactMethod {
  /**
   * <p>The destination of the contact method, such as an email address or a mobile phone
   *       number.</p>
   */
  contactEndpoint?: string;

  /**
   * <p>The current status of the contact method.</p>
   *          <p>A contact method has the following possible status:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PendingVerification</code> - The contact method has not yet been verified, and
   *           the verification has not yet expired.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Valid</code> - The contact method has been verified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InValid</code> - An attempt was made to verify the contact method, but the
   *           verification has expired.</p>
   *             </li>
   *          </ul>
   */
  status?: ContactMethodStatus | string;

  /**
   * <p>The protocol of the contact method, such as email or SMS (text messaging).</p>
   */
  protocol?: ContactProtocol | string;

  /**
   * <p>The name of the contact method.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the contact method.</p>
   */
  arn?: string;

  /**
   * <p>The timestamp when the contact method was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>An object that describes the location of the contact method, such as the Amazon Web Services Region and Availability Zone.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The Lightsail resource type (e.g., <code>ContactMethod</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       your Lightsail contact method. This code enables our support team to look up your
   *       Lightsail information more easily.</p>
   */
  supportCode?: string;
}

export namespace ContactMethod {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContactMethod): any => ({
    ...obj,
  });
}

export enum ContactMethodVerificationProtocol {
  Email = "Email",
}

export enum ContainerServiceProtocol {
  HTTP = "HTTP",
  HTTPS = "HTTPS",
  TCP = "TCP",
  UDP = "UDP",
}

/**
 * <p>Describes the settings of a container that will be launched, or that is launched, to an
 *       Amazon Lightsail container service.</p>
 */
export interface Container {
  /**
   * <p>The name of the image used for the container.</p>
   *
   *          <p>Container images sourced from your Lightsail container service, that are registered and
   *       stored on your service, start with a colon (<code>:</code>). For example, if your container
   *       service name is <code>container-service-1</code>, the container image label is
   *         <code>mystaticsite</code>, and you want to use the third (<code>3</code>) version of the
   *       registered container image, then you should specify
   *         <code>:container-service-1.mystaticsite.3</code>. To use the latest version of a container
   *       image, specify <code>latest</code> instead of a version number (for example,
   *         <code>:container-service-1.mystaticsite.latest</code>). Lightsail will automatically use
   *       the highest numbered version of the registered container image.</p>
   *
   *          <p>Container images sourced from a public registry like Docker Hub don't start with a colon.
   *       For example, <code>nginx:latest</code> or <code>nginx</code>.</p>
   */
  image?: string;

  /**
   * <p>The launch command for the container.</p>
   */
  command?: string[];

  /**
   * <p>The environment variables of the container.</p>
   */
  environment?: Record<string, string>;

  /**
   * <p>The open firewall ports of the container.</p>
   */
  ports?: Record<string, ContainerServiceProtocol | string>;
}

export namespace Container {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Container): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a container image that is registered to an Amazon Lightsail container
 *       service.</p>
 */
export interface ContainerImage {
  /**
   * <p>The name of the container image.</p>
   */
  image?: string;

  /**
   * <p>The digest of the container image.</p>
   */
  digest?: string;

  /**
   * <p>The timestamp when the container image was created.</p>
   */
  createdAt?: Date;
}

export namespace ContainerImage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerImage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the health check configuration of an Amazon Lightsail container service.</p>
 */
export interface ContainerServiceHealthCheckConfig {
  /**
   * <p>The number of consecutive health checks successes required before moving the container to
   *       the <code>Healthy</code> state. The default value is <code>2</code>.</p>
   */
  healthyThreshold?: number;

  /**
   * <p>The number of consecutive health check failures required before moving the container to
   *       the <code>Unhealthy</code> state. The default value is <code>2</code>.</p>
   */
  unhealthyThreshold?: number;

  /**
   * <p>The amount of time, in seconds, during which no response means a failed health check. You
   *       can specify between 2 and 60 seconds. The default value is <code>2</code>.</p>
   */
  timeoutSeconds?: number;

  /**
   * <p>The approximate interval, in seconds, between health checks of an individual container.
   *       You can specify between 5 and 300 seconds. The default value is <code>5</code>.</p>
   */
  intervalSeconds?: number;

  /**
   * <p>The path on the container on which to perform the health check. The default value is
   *         <code>/</code>.</p>
   */
  path?: string;

  /**
   * <p>The HTTP codes to use when checking for a successful response from a container. You can
   *       specify values between <code>200</code> and <code>499</code>. You can specify multiple values
   *       (for example, <code>200,202</code>) or a range of values (for example,
   *       <code>200-299</code>).</p>
   */
  successCodes?: string;
}

export namespace ContainerServiceHealthCheckConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerServiceHealthCheckConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the public endpoint configuration of a deployment of an Amazon Lightsail
 *       container service.</p>
 */
export interface ContainerServiceEndpoint {
  /**
   * <p>The name of the container entry of the deployment that the endpoint configuration applies
   *       to.</p>
   */
  containerName?: string;

  /**
   * <p>The port of the specified container to which traffic is forwarded to.</p>
   */
  containerPort?: number;

  /**
   * <p>An object that describes the health check configuration of the container.</p>
   */
  healthCheck?: ContainerServiceHealthCheckConfig;
}

export namespace ContainerServiceEndpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerServiceEndpoint): any => ({
    ...obj,
  });
}

export enum ContainerServiceDeploymentState {
  ACTIVATING = "ACTIVATING",
  ACTIVE = "ACTIVE",
  FAILED = "FAILED",
  INACTIVE = "INACTIVE",
}

/**
 * <p>Describes a container deployment configuration of an Amazon Lightsail container
 *       service.</p>
 *
 *          <p>A deployment specifies the settings, such as the ports and launch command, of containers
 *       that are deployed to your container service.</p>
 */
export interface ContainerServiceDeployment {
  /**
   * <p>The version number of the deployment.</p>
   */
  version?: number;

  /**
   * <p>The state of the deployment.</p>
   *
   *          <p>A deployment can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Activating</code> - The deployment is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Active</code> - The deployment was successfully created, and it's currently
   *           running on the container service. The container service can have only one deployment in an
   *           active state at a time.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Inactive</code> - The deployment was previously successfully created, but it is
   *           not currently running on the container service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code> - The deployment failed. Use the <code>GetContainerLog</code>
   *           action to view the log events for the containers in the deployment to try to determine the
   *           reason for the failure.</p>
   *             </li>
   *          </ul>
   */
  state?: ContainerServiceDeploymentState | string;

  /**
   * <p>An object that describes the configuration for the containers of the deployment.</p>
   */
  containers?: Record<string, Container>;

  /**
   * <p>An object that describes the endpoint of the deployment.</p>
   */
  publicEndpoint?: ContainerServiceEndpoint;

  /**
   * <p>The timestamp when the deployment was created.</p>
   */
  createdAt?: Date;
}

export namespace ContainerServiceDeployment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerServiceDeployment): any => ({
    ...obj,
  });
}

export enum ContainerServicePowerName {
  large = "large",
  medium = "medium",
  micro = "micro",
  nano = "nano",
  small = "small",
  xlarge = "xlarge",
}

/**
 * <p>Describes the activation status of the role that you can use to grant an Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR)
 *       private repositories.</p>
 *
 *          <p>When activated, Lightsail creates an Identity and Access Management (IAM) role
 *       for the specified Lightsail container service. You can use the ARN of the role to create a
 *       trust relationship between your Lightsail container service and an Amazon ECR private repository in your Amazon Web Services account. This allows your container
 *       service to pull images from Amazon ECR private repositories. For more information, see
 *         <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
 */
export interface ContainerServiceECRImagePullerRole {
  /**
   * <p>A Boolean value that indicates whether the role is activated.</p>
   */
  isActive?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the role, if it is activated.</p>
   */
  principalArn?: string;
}

export namespace ContainerServiceECRImagePullerRole {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerServiceECRImagePullerRole): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration for an Amazon Lightsail container service to
 *       access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.</p>
 *
 *          <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
 */
export interface PrivateRegistryAccess {
  /**
   * <p>An object that describes the activation status of the role that you can use to grant a
   *         Lightsail container service access to Amazon ECR private
   *       repositories. If the role is activated, the Amazon Resource Name (ARN) of the role is also
   *       listed.</p>
   */
  ecrImagePullerRole?: ContainerServiceECRImagePullerRole;
}

export namespace PrivateRegistryAccess {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrivateRegistryAccess): any => ({
    ...obj,
  });
}

export enum ContainerServiceState {
  DELETING = "DELETING",
  DEPLOYING = "DEPLOYING",
  DISABLED = "DISABLED",
  PENDING = "PENDING",
  READY = "READY",
  RUNNING = "RUNNING",
  UPDATING = "UPDATING",
}

export enum ContainerServiceStateDetailCode {
  ACTIVATING_DEPLOYMENT = "ACTIVATING_DEPLOYMENT",
  CERTIFICATE_LIMIT_EXCEEDED = "CERTIFICATE_LIMIT_EXCEEDED",
  CREATING_DEPLOYMENT = "CREATING_DEPLOYMENT",
  CREATING_NETWORK_INFRASTRUCTURE = "CREATING_NETWORK_INFRASTRUCTURE",
  CREATING_SYSTEM_RESOURCES = "CREATING_SYSTEM_RESOURCES",
  EVALUATING_HEALTH_CHECK = "EVALUATING_HEALTH_CHECK",
  PROVISIONING_CERTIFICATE = "PROVISIONING_CERTIFICATE",
  PROVISIONING_SERVICE = "PROVISIONING_SERVICE",
  UNKNOWN_ERROR = "UNKNOWN_ERROR",
}

/**
 * <p>Describes the current state of a container service.</p>
 */
export interface ContainerServiceStateDetail {
  /**
   * <p>The state code of the container service.</p>
   *          <p>The following state codes are possible:</p>
   *          <ul>
   *             <li>
   *                <p>The following state codes are possible if your container service is in a
   *             <code>DEPLOYING</code> or <code>UPDATING</code> state:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>CREATING_SYSTEM_RESOURCES</code> - The system resources for your container
   *               service are being created.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>CREATING_NETWORK_INFRASTRUCTURE</code> - The network infrastructure for your
   *               container service are being created.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>PROVISIONING_CERTIFICATE</code> - The SSL/TLS certificate for your container
   *               service is being created.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>PROVISIONING_SERVICE</code> - Your container service is being
   *               provisioned.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>CREATING_DEPLOYMENT</code> - Your deployment is being created on your
   *               container service.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>EVALUATING_HEALTH_CHECK</code> - The health of your deployment is being
   *               evaluated.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ACTIVATING_DEPLOYMENT</code> - Your deployment is being activated.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>The following state codes are possible if your container service is in a
   *             <code>PENDING</code> state:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>CERTIFICATE_LIMIT_EXCEEDED</code> - The SSL/TLS certificate required for
   *               your container service exceeds the maximum number of certificates allowed for your
   *               account.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>UNKNOWN_ERROR</code> - An error was experienced when your container service
   *               was being created.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  code?: ContainerServiceStateDetailCode | string;

  /**
   * <p>A message that provides more information for the state code.</p>
   *          <note>
   *             <p>The state detail is populated only when a container service is in a
   *         <code>PENDING</code>, <code>DEPLOYING</code>, or <code>UPDATING</code> state.</p>
   *          </note>
   */
  message?: string;
}

export namespace ContainerServiceStateDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerServiceStateDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Amazon Lightsail container service.</p>
 */
export interface ContainerService {
  /**
   * <p>The name of the container service.</p>
   */
  containerServiceName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the container service.</p>
   */
  arn?: string;

  /**
   * <p>The timestamp when the container service was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>An object that describes the location of the container service, such as the Amazon Web Services Region and Availability Zone.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The Lightsail resource type of the container service (i.e.,
   *         <code>ContainerService</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The power specification of the container service.</p>
   *
   *          <p>The power specifies the amount of RAM, the number of vCPUs, and the base price of the
   *       container service.</p>
   */
  power?: ContainerServicePowerName | string;

  /**
   * <p>The ID of the power of the container service.</p>
   */
  powerId?: string;

  /**
   * <p>The current state of the container service.</p>
   *          <p>The following container service states are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - The container service is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READY</code> - The container service is running but it does not have an active
   *           container deployment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEPLOYING</code> - The container service is launching a container
   *           deployment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code> - The container service is running and it has an active container
   *           deployment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> - The container service capacity or its custom domains are being
   *           updated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The container service is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - The container service is disabled, and its active deployment
   *           and containers, if any, are shut down.</p>
   *             </li>
   *          </ul>
   */
  state?: ContainerServiceState | string;

  /**
   * <p>An object that describes the current state of the container service.</p>
   *          <note>
   *             <p>The state detail is populated only when a container service is in a
   *         <code>PENDING</code>, <code>DEPLOYING</code>, or <code>UPDATING</code> state.</p>
   *          </note>
   */
  stateDetail?: ContainerServiceStateDetail;

  /**
   * <p>The scale specification of the container service.</p>
   *
   *          <p>The scale specifies the allocated compute nodes of the container service.</p>
   */
  scale?: number;

  /**
   * <p>An object that describes the current container deployment of the container service.</p>
   */
  currentDeployment?: ContainerServiceDeployment;

  /**
   * <p>An object that describes the next deployment of the container service.</p>
   *
   *          <p>This value is <code>null</code> when there is no deployment in a <code>pending</code>
   *       state.</p>
   */
  nextDeployment?: ContainerServiceDeployment;

  /**
   * <p>A Boolean value indicating whether the container service is disabled.</p>
   */
  isDisabled?: boolean;

  /**
   * <p>The principal ARN of the container service.</p>
   *
   *          <p>The principal ARN can be used to create a trust relationship between your standard Amazon Web Services account and your Lightsail container service. This allows you to give your
   *       service permission to access resources in your standard Amazon Web Services account.</p>
   */
  principalArn?: string;

  /**
   * <p>The private domain name of the container service.</p>
   *
   *          <p>The private domain name is accessible only by other resources within the default virtual
   *       private cloud (VPC) of your Lightsail account.</p>
   */
  privateDomainName?: string;

  /**
   * <p>The public domain name of the container service, such as <code>example.com</code> and
   *         <code>www.example.com</code>.</p>
   *
   *          <p>You can specify up to four public domain names for a container service. The domain names
   *       that you specify are used when you create a deployment with a container configured as the
   *       public endpoint of your container service.</p>
   *
   *          <p>If you don't specify public domain names, then you can use the default domain of the
   *       container service.</p>
   *
   *          <important>
   *             <p>You must create and validate an SSL/TLS certificate before you can use public domain
   *         names with your container service. Use the <code>CreateCertificate</code> action to create a
   *         certificate for the public domain names you want to use with your container service.</p>
   *          </important>
   *
   *          <p>See <code>CreateContainerService</code> or <code>UpdateContainerService</code> for
   *       information about how to specify public domain names for your Lightsail container
   *       service.</p>
   */
  publicDomainNames?: Record<string, string[]>;

  /**
   * <p>The publicly accessible URL of the container service.</p>
   *
   *          <p>If no public endpoint is specified in the <code>currentDeployment</code>, this URL returns
   *       a 404 response.</p>
   */
  url?: string;

  /**
   * <p>An object that describes the configuration for the container service to access private
   *       container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private
   *       repositories.</p>
   *
   *          <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
   */
  privateRegistryAccess?: PrivateRegistryAccess;
}

export namespace ContainerService {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerService): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the settings of a public endpoint for an Amazon Lightsail container
 *       service.</p>
 */
export interface EndpointRequest {
  /**
   * <p>The name of the container for the endpoint.</p>
   */
  containerName: string | undefined;

  /**
   * <p>The port of the container to which traffic is forwarded to.</p>
   */
  containerPort: number | undefined;

  /**
   * <p>An object that describes the health check configuration of the container.</p>
   */
  healthCheck?: ContainerServiceHealthCheckConfig;
}

export namespace EndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a container deployment configuration of an Amazon Lightsail container
 *       service.</p>
 *
 *          <p>A deployment specifies the settings, such as the ports and launch command, of containers
 *       that are deployed to your container service.</p>
 */
export interface ContainerServiceDeploymentRequest {
  /**
   * <p>An object that describes the configuration for the containers of the deployment.</p>
   */
  containers?: Record<string, Container>;

  /**
   * <p>An object that describes the endpoint of the deployment.</p>
   */
  publicEndpoint?: EndpointRequest;
}

export namespace ContainerServiceDeploymentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerServiceDeploymentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a request to activate or deactivate the role that you can use to grant an
 *         Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR) private repositories.</p>
 *
 *          <p>When activated, Lightsail creates an Identity and Access Management (IAM) role
 *       for the specified Lightsail container service. You can use the ARN of the role to create a
 *       trust relationship between your Lightsail container service and an Amazon ECR private repository in your Amazon Web Services account. This allows your container
 *       service to pull images from Amazon ECR private repositories. For more information, see
 *         <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
 */
export interface ContainerServiceECRImagePullerRoleRequest {
  /**
   * <p>A Boolean value that indicates whether to activate the role.</p>
   */
  isActive?: boolean;
}

export namespace ContainerServiceECRImagePullerRoleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerServiceECRImagePullerRoleRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the log events of a container of an Amazon Lightsail container service.</p>
 */
export interface ContainerServiceLogEvent {
  /**
   * <p>The timestamp when the container service log event was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The message of the container service log event.</p>
   */
  message?: string;
}

export namespace ContainerServiceLogEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerServiceLogEvent): any => ({
    ...obj,
  });
}

export enum ContainerServiceMetricName {
  CPUUtilization = "CPUUtilization",
  MemoryUtilization = "MemoryUtilization",
}

/**
 * <p>Describes the powers that can be specified for an Amazon Lightsail container
 *       service.</p>
 *
 *          <p>The power specifies the amount of RAM, the number of vCPUs, and the base price of the
 *       container service.</p>
 */
export interface ContainerServicePower {
  /**
   * <p>The ID of the power (e.g., <code>nano-1</code>).</p>
   */
  powerId?: string;

  /**
   * <p>The monthly price of the power in USD.</p>
   */
  price?: number;

  /**
   * <p>The number of vCPUs included in the power.</p>
   */
  cpuCount?: number;

  /**
   * <p>The amount of RAM (in GB) of the power.</p>
   */
  ramSizeInGb?: number;

  /**
   * <p>The friendly name of the power (e.g., <code>nano</code>).</p>
   */
  name?: string;

  /**
   * <p>A Boolean value indicating whether the power is active and can be specified for container
   *       services.</p>
   */
  isActive?: boolean;
}

export namespace ContainerServicePower {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerServicePower): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the login information for the container image registry of an Amazon Lightsail
 *       account.</p>
 */
export interface ContainerServiceRegistryLogin {
  /**
   * <p>The container service registry username to use to push container images to the container
   *       image registry of a Lightsail account.</p>
   */
  username?: string;

  /**
   * <p>The container service registry password to use to push container images to the container
   *       image registry of a Lightsail account</p>
   */
  password?: string;

  /**
   * <p>The timestamp of when the container image registry username and password expire.</p>
   *
   *          <p>The log in credentials expire 12 hours after they are created, at which point you will
   *       need to create a new set of log in credentials using the
   *         <code>CreateContainerServiceRegistryLogin</code> action.</p>
   */
  expiresAt?: Date;

  /**
   * <p>The address to use to push container images to the container image registry of a
   *       Lightsail account.</p>
   */
  registry?: string;
}

export namespace ContainerServiceRegistryLogin {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerServiceRegistryLogin): any => ({
    ...obj,
  });
}

export enum PortInfoSourceType {
  Closed = "CLOSED",
  Default = "DEFAULT",
  Instance = "INSTANCE",
  None = "NONE",
}

/**
 * <p>Describes the Amazon Elastic Compute Cloud instance and related resources to be created using the
 *         <code>create cloud formation stack</code> operation.</p>
 */
export interface InstanceEntry {
  /**
   * <p>The name of the export snapshot record, which contains the exported Lightsail instance
   *       snapshot that will be used as the source of the new Amazon EC2 instance.</p>
   *          <p>Use the <code>get export snapshot records</code> operation to get a list of export
   *       snapshot records that you can use to create a CloudFormation stack.</p>
   */
  sourceName: string | undefined;

  /**
   * <p>The instance type (e.g., <code>t2.micro</code>) to use for the new Amazon EC2 instance.</p>
   */
  instanceType: string | undefined;

  /**
   * <p>The port configuration to use for the new Amazon EC2 instance.</p>
   *
   *          <p>The following configuration options are available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DEFAULT</code> - Use the default firewall settings from the Lightsail instance
   *           blueprint. If this is specified, then IPv4 and IPv6 will be configured for the new
   *           instance that is created in Amazon EC2.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSTANCE</code> - Use the configured firewall settings from the source
   *           Lightsail instance. If this is specified, the new instance that is created in Amazon EC2 will
   *           be configured to match the configuration of the source Lightsail instance. For example,
   *           if the source instance is configured for dual-stack (IPv4 and IPv6), then IPv4 and IPv6
   *           will be configured for the new instance that is created in Amazon EC2. If the source instance
   *           is configured for IPv4 only, then only IPv4 will be configured for the new instance that
   *           is created in Amazon EC2.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - Use the default Amazon EC2 security group. If this is specified, then
   *           only IPv4 will be configured for the new instance that is created in Amazon EC2.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CLOSED</code> - All ports closed. If this is specified, then only IPv4 will be
   *           configured for the new instance that is created in Amazon EC2.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>If you configured <code>lightsail-connect</code> as a <code>cidrListAliases</code> on
   *         your instance, or if you chose to allow the Lightsail browser-based SSH or RDP clients to
   *         connect to your instance, that configuration is not carried over to your new Amazon EC2
   *         instance.</p>
   *          </note>
   */
  portInfoSource: PortInfoSourceType | string | undefined;

  /**
   * <p>A launch script you can create that configures a server with additional user data. For
   *       example, you might want to run <code>apt-get -y update</code>.</p>
   *          <note>
   *             <p>Depending on the machine image you choose, the command to get software on your instance
   *         varies. Amazon Linux and CentOS use <code>yum</code>, Debian and Ubuntu use
   *           <code>apt-get</code>, and FreeBSD uses <code>pkg</code>.</p>
   *          </note>
   */
  userData?: string;

  /**
   * <p>The Availability Zone for the new Amazon EC2 instance.</p>
   */
  availabilityZone: string | undefined;
}

export namespace InstanceEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceEntry): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a request to configure an Amazon Lightsail container service to
 *       access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.</p>
 *
 *          <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
 */
export interface PrivateRegistryAccessRequest {
  /**
   * <p>An object to describe a request to activate or deactivate the role that you can use to
   *       grant an Amazon Lightsail container service access to Amazon Elastic Container Registry
   *         (Amazon ECR) private repositories.</p>
   */
  ecrImagePullerRole?: ContainerServiceECRImagePullerRoleRequest;
}

export namespace PrivateRegistryAccessRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrivateRegistryAccessRequest): any => ({
    ...obj,
  });
}

export enum IpAddressType {
  DUALSTACK = "dualstack",
  IPV4 = "ipv4",
}

export enum OriginProtocolPolicyEnum {
  HTTPOnly = "http-only",
  HTTPSOnly = "https-only",
}

/**
 * <p>Describes the origin resource of an Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>An origin can be a Lightsail instance, bucket, or load balancer. A distribution pulls
 *       content from an origin, caches it, and serves it to viewers via a worldwide network of edge
 *       servers.</p>
 */
export interface InputOrigin {
  /**
   * <p>The name of the origin resource.</p>
   */
  name?: string;

  /**
   * <p>The AWS Region name of the origin resource.</p>
   */
  regionName?: RegionName | string;

  /**
   * <p>The protocol that your Amazon Lightsail distribution uses when establishing a connection
   *       with your origin to pull content.</p>
   */
  protocolPolicy?: OriginProtocolPolicyEnum | string;
}

export namespace InputOrigin {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputOrigin): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the origin resource of an Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>An origin can be a Lightsail instance, bucket, or load balancer. A distribution pulls
 *       content from an origin, caches it, and serves it to viewers via a worldwide network of edge
 *       servers.</p>
 */
export interface Origin {
  /**
   * <p>The name of the origin resource.</p>
   */
  name?: string;

  /**
   * <p>The resource type of the origin resource (e.g., <i>Instance</i>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The AWS Region name of the origin resource.</p>
   */
  regionName?: RegionName | string;

  /**
   * <p>The protocol that your Amazon Lightsail distribution uses when establishing a connection
   *       with your origin to pull content.</p>
   */
  protocolPolicy?: OriginProtocolPolicyEnum | string;
}

export namespace Origin {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Origin): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Amazon Lightsail content delivery network (CDN) distribution.</p>
 */
export interface LightsailDistribution {
  /**
   * <p>The name of the distribution.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the distribution.</p>
   */
  arn?: string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       your Lightsail distribution. This code enables our support team to look up your Lightsail
   *       information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The timestamp when the distribution was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>An object that describes the location of the distribution, such as the Amazon Web Services
   *       Region and Availability Zone.</p>
   *          <note>
   *             <p>Lightsail distributions are global resources that can reference an origin in any
   *           Amazon Web Services Region, and distribute its content globally. However, all distributions
   *         are located in the <code>us-east-1</code> Region.</p>
   *          </note>
   */
  location?: ResourceLocation;

  /**
   * <p>The Lightsail resource type (e.g., <code>Distribution</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The alternate domain names of the distribution.</p>
   */
  alternativeDomainNames?: string[];

  /**
   * <p>The status of the distribution.</p>
   */
  status?: string;

  /**
   * <p>Indicates whether the distribution is enabled.</p>
   */
  isEnabled?: boolean;

  /**
   * <p>The domain name of the distribution.</p>
   */
  domainName?: string;

  /**
   * <p>The ID of the bundle currently applied to the distribution.</p>
   */
  bundleId?: string;

  /**
   * <p>The name of the SSL/TLS certificate attached to the distribution, if any.</p>
   */
  certificateName?: string;

  /**
   * <p>An object that describes the origin resource of the distribution, such as a Lightsail
   *       instance, bucket, or load balancer.</p>
   *          <p>The distribution pulls, caches, and serves content from the origin.</p>
   */
  origin?: Origin;

  /**
   * <p>The public DNS of the origin.</p>
   */
  originPublicDNS?: string;

  /**
   * <p>An object that describes the default cache behavior of the distribution.</p>
   */
  defaultCacheBehavior?: CacheBehavior;

  /**
   * <p>An object that describes the cache behavior settings of the distribution.</p>
   */
  cacheBehaviorSettings?: CacheSettings;

  /**
   * <p>An array of objects that describe the per-path cache behavior of the distribution.</p>
   */
  cacheBehaviors?: CacheBehaviorPerPath[];

  /**
   * <p>Indicates whether the bundle that is currently applied to your distribution, specified
   *       using the <code>distributionName</code> parameter, can be changed to another bundle.</p>
   *          <p>Use the <code>UpdateDistributionBundle</code> action to change your distribution's
   *       bundle.</p>
   */
  ableToUpdateBundle?: boolean;

  /**
   * <p>The IP address type of the distribution.</p>
   *
   *          <p>The possible values are <code>ipv4</code> for IPv4 only, and <code>dualstack</code> for
   *       IPv4 and IPv6.</p>
   */
  ipAddressType?: IpAddressType | string;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   */
  tags?: Tag[];
}

export namespace LightsailDistribution {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LightsailDistribution): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a domain recordset entry.</p>
 */
export interface DomainEntry {
  /**
   * <p>The ID of the domain recordset entry.</p>
   */
  id?: string;

  /**
   * <p>The name of the domain.</p>
   */
  name?: string;

  /**
   * <p>The target IP address (e.g., <code>192.0.2.0</code>), or AWS name server (e.g.,
   *         <code>ns-111.awsdns-22.com.</code>).</p>
   *          <p>For Lightsail load balancers, the value looks like
   *         <code>ab1234c56789c6b86aba6fb203d443bc-123456789.us-east-2.elb.amazonaws.com</code>. For
   *       Lightsail distributions, the value looks like <code>exampled1182ne.cloudfront.net</code>.
   *       For Lightsail container services, the value looks like
   *         <code>container-service-1.example23scljs.us-west-2.cs.amazonlightsail.com</code>. Be sure to
   *       also set <code>isAlias</code> to <code>true</code> when setting up an A record for a
   *       Lightsail load balancer, distribution, or container service.</p>
   */
  target?: string;

  /**
   * <p>When <code>true</code>, specifies whether the domain entry is an alias used by the
   *       Lightsail load balancer. You can include an alias (A type) record in your request, which
   *       points to a load balancer DNS name and routes traffic to your load balancer.</p>
   */
  isAlias?: boolean;

  /**
   * <p>The type of domain entry, such as address for IPv4 (A), address for IPv6 (AAAA), canonical
   *       name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA), service locator
   *       (SRV), or text (TXT).</p>
   *          <p>The following domain entry types can be used:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>A</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AAAA</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CNAME</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MX</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SOA</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SRV</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TXT</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  type?: string;

  /**
   * @deprecated
   *
   * <p>(Deprecated) The options for the domain entry.</p>
   *          <note>
   *             <p>In releases prior to November 29, 2017, this parameter was not included in the API
   *         response. It is now deprecated.</p>
   *          </note>
   */
  options?: Record<string, string>;
}

export namespace DomainEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainEntry): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an SSH key pair.</p>
 */
export interface KeyPair {
  /**
   * <p>The friendly name of the SSH key pair.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the key pair (e.g.,
   *         <code>arn:aws:lightsail:us-east-2:123456789101:KeyPair/05859e3d-331d-48ba-9034-12345EXAMPLE</code>).</p>
   */
  arn?: string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       an instance or another resource in Lightsail. This code enables our support team to look up
   *       your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The timestamp when the key pair was created (e.g., <code>1479816991.349</code>).</p>
   */
  createdAt?: Date;

  /**
   * <p>The region name and Availability Zone where the key pair was created.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The resource type (usually <code>KeyPair</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The RSA fingerprint of the key pair.</p>
   */
  fingerprint?: string;
}

export namespace KeyPair {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeyPair): any => ({
    ...obj,
  });
}

export enum DiskState {
  Available = "available",
  Error = "error",
  InUse = "in-use",
  Pending = "pending",
  Unknown = "unknown",
}

/**
 * <p>Describes a block storage disk.</p>
 */
export interface Disk {
  /**
   * <p>The unique name of the disk.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the disk.</p>
   */
  arn?: string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       an instance or another resource in Lightsail. This code enables our support team to look up
   *       your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The date when the disk was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The AWS Region and Availability Zone where the disk is located.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The Lightsail resource type (e.g., <code>Disk</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>An array of objects representing the add-ons enabled on the disk.</p>
   */
  addOns?: AddOn[];

  /**
   * <p>The size of the disk in GB.</p>
   */
  sizeInGb?: number;

  /**
   * <p>A Boolean value indicating whether this disk is a system disk (has an operating system
   *       loaded on it).</p>
   */
  isSystemDisk?: boolean;

  /**
   * <p>The input/output operations per second (IOPS) of the disk.</p>
   */
  iops?: number;

  /**
   * <p>The disk path.</p>
   */
  path?: string;

  /**
   * <p>Describes the status of the disk.</p>
   */
  state?: DiskState | string;

  /**
   * <p>The resources to which the disk is attached.</p>
   */
  attachedTo?: string;

  /**
   * <p>A Boolean value indicating whether the disk is attached.</p>
   */
  isAttached?: boolean;

  /**
   * @deprecated
   *
   * <p>(Deprecated) The attachment state of the disk.</p>
   *          <note>
   *             <p>In releases prior to November 14, 2017, this parameter returned <code>attached</code>
   *         for system disks in the API response. It is now deprecated, but still included in the
   *         response. Use <code>isAttached</code> instead.</p>
   *          </note>
   */
  attachmentState?: string;

  /**
   * @deprecated
   *
   * <p>(Deprecated) The number of GB in use by the disk.</p>
   *          <note>
   *             <p>In releases prior to November 14, 2017, this parameter was not included in the API
   *         response. It is now deprecated.</p>
   *          </note>
   */
  gbInUse?: number;
}

export namespace Disk {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Disk): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a disk.</p>
 */
export interface DiskInfo {
  /**
   * <p>The disk name.</p>
   */
  name?: string;

  /**
   * <p>The disk path.</p>
   */
  path?: string;

  /**
   * <p>The size of the disk in GB (e.g., <code>32</code>).</p>
   */
  sizeInGb?: number;

  /**
   * <p>A Boolean value indicating whether this disk is a system disk (has an operating system
   *       loaded on it).</p>
   */
  isSystemDisk?: boolean;
}

export namespace DiskInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DiskInfo): any => ({
    ...obj,
  });
}

export enum DiskSnapshotState {
  Completed = "completed",
  Error = "error",
  Pending = "pending",
  Unknown = "unknown",
}

/**
 * <p>Describes a block storage disk snapshot.</p>
 */
export interface DiskSnapshot {
  /**
   * <p>The name of the disk snapshot (e.g., <code>my-disk-snapshot</code>).</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the disk snapshot.</p>
   */
  arn?: string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       an instance or another resource in Lightsail. This code enables our support team to look up
   *       your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The date when the disk snapshot was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The AWS Region and Availability Zone where the disk snapshot was created.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The Lightsail resource type (e.g., <code>DiskSnapshot</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The size of the disk in GB.</p>
   */
  sizeInGb?: number;

  /**
   * <p>The status of the disk snapshot operation.</p>
   */
  state?: DiskSnapshotState | string;

  /**
   * <p>The progress of the snapshot.</p>
   */
  progress?: string;

  /**
   * <p>The unique name of the source disk from which the disk snapshot was created.</p>
   */
  fromDiskName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source disk from which the disk snapshot was
   *       created.</p>
   */
  fromDiskArn?: string;

  /**
   * <p>The unique name of the source instance from which the disk (system volume) snapshot was
   *       created.</p>
   */
  fromInstanceName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source instance from which the disk (system volume)
   *       snapshot was created.</p>
   */
  fromInstanceArn?: string;

  /**
   * <p>A Boolean value indicating whether the snapshot was created from an automatic
   *       snapshot.</p>
   */
  isFromAutoSnapshot?: boolean;
}

export namespace DiskSnapshot {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DiskSnapshot): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a disk snapshot.</p>
 */
export interface DiskSnapshotInfo {
  /**
   * <p>The size of the disk in GB (e.g., <code>32</code>).</p>
   */
  sizeInGb?: number;
}

export namespace DiskSnapshotInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DiskSnapshotInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the specifications of a distribution bundle.</p>
 */
export interface DistributionBundle {
  /**
   * <p>The ID of the bundle.</p>
   */
  bundleId?: string;

  /**
   * <p>The name of the distribution bundle.</p>
   */
  name?: string;

  /**
   * <p>The monthly price, in US dollars, of the bundle.</p>
   */
  price?: number;

  /**
   * <p>The monthly network transfer quota of the bundle.</p>
   */
  transferPerMonthInGb?: number;

  /**
   * <p>Indicates whether the bundle is active, and can be specified for a new or existing
   *       distribution.</p>
   */
  isActive?: boolean;
}

export namespace DistributionBundle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DistributionBundle): any => ({
    ...obj,
  });
}

export enum DistributionMetricName {
  BytesDownloaded = "BytesDownloaded",
  BytesUploaded = "BytesUploaded",
  Http4xxErrorRate = "Http4xxErrorRate",
  Http5xxErrorRate = "Http5xxErrorRate",
  Requests = "Requests",
  TotalErrorRate = "TotalErrorRate",
}

/**
 * <p>Describes a domain where you are storing recordsets.</p>
 */
export interface Domain {
  /**
   * <p>The name of the domain.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the domain recordset (e.g.,
   *         <code>arn:aws:lightsail:global:123456789101:Domain/824cede0-abc7-4f84-8dbc-12345EXAMPLE</code>).</p>
   */
  arn?: string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       an instance or another resource in Lightsail. This code enables our support team to look up
   *       your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The date when the domain recordset was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The AWS Region and Availability Zones where the domain recordset was created.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The resource type. </p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>An array of key-value pairs containing information about the domain entries.</p>
   */
  domainEntries?: DomainEntry[];
}

export namespace Domain {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Domain): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an instance snapshot.</p>
 */
export interface InstanceSnapshotInfo {
  /**
   * <p>The bundle ID from which the source instance was created (e.g.,
   *       <code>micro_1_0</code>).</p>
   */
  fromBundleId?: string;

  /**
   * <p>The blueprint ID from which the source instance (e.g., <code>os_debian_8_3</code>).</p>
   */
  fromBlueprintId?: string;

  /**
   * <p>A list of objects describing the disks that were attached to the source instance.</p>
   */
  fromDiskInfo?: DiskInfo[];
}

export namespace InstanceSnapshotInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceSnapshotInfo): any => ({
    ...obj,
  });
}

export enum ExportSnapshotRecordSourceType {
  DiskSnapshot = "DiskSnapshot",
  InstanceSnapshot = "InstanceSnapshot",
}

/**
 * <p>Describes the source of an export snapshot record.</p>
 */
export interface ExportSnapshotRecordSourceInfo {
  /**
   * <p>The Lightsail resource type (e.g., <code>InstanceSnapshot</code> or
   *         <code>DiskSnapshot</code>).</p>
   */
  resourceType?: ExportSnapshotRecordSourceType | string;

  /**
   * <p>The date when the source instance or disk snapshot was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The name of the source instance or disk snapshot.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source instance or disk snapshot.</p>
   */
  arn?: string;

  /**
   * <p>The name of the snapshot's source instance or disk.</p>
   */
  fromResourceName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot's source instance or disk.</p>
   */
  fromResourceArn?: string;

  /**
   * <p>A list of objects describing an instance snapshot.</p>
   */
  instanceSnapshotInfo?: InstanceSnapshotInfo;

  /**
   * <p>A list of objects describing a disk snapshot.</p>
   */
  diskSnapshotInfo?: DiskSnapshotInfo;
}

export namespace ExportSnapshotRecordSourceInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportSnapshotRecordSourceInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an export snapshot record.</p>
 */
export interface ExportSnapshotRecord {
  /**
   * <p>The export snapshot record name.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the export snapshot record.</p>
   */
  arn?: string;

  /**
   * <p>The date when the export snapshot record was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The AWS Region and Availability Zone where the export snapshot record is located.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The Lightsail resource type (e.g., <code>ExportSnapshotRecord</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The state of the export snapshot record.</p>
   */
  state?: RecordState | string;

  /**
   * <p>A list of objects describing the source of the export snapshot record.</p>
   */
  sourceInfo?: ExportSnapshotRecordSourceInfo;

  /**
   * <p>A list of objects describing the destination of the export snapshot record.</p>
   */
  destinationInfo?: DestinationInfo;
}

export namespace ExportSnapshotRecord {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportSnapshotRecord): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the metric data point.</p>
 */
export interface MetricDatapoint {
  /**
   * <p>The average.</p>
   */
  average?: number;

  /**
   * <p>The maximum.</p>
   */
  maximum?: number;

  /**
   * <p>The minimum.</p>
   */
  minimum?: number;

  /**
   * <p>The sample count.</p>
   */
  sampleCount?: number;

  /**
   * <p>The sum.</p>
   */
  sum?: number;

  /**
   * <p>The timestamp (e.g., <code>1479816991.349</code>).</p>
   */
  timestamp?: Date;

  /**
   * <p>The unit. </p>
   */
  unit?: MetricUnit | string;
}

export namespace MetricDatapoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricDatapoint): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the hardware for the instance.</p>
 */
export interface InstanceHardware {
  /**
   * <p>The number of vCPUs the instance has.</p>
   */
  cpuCount?: number;

  /**
   * <p>The disks attached to the instance.</p>
   */
  disks?: Disk[];

  /**
   * <p>The amount of RAM in GB on the instance (e.g., <code>1.0</code>).</p>
   */
  ramSizeInGb?: number;
}

export namespace InstanceHardware {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceHardware): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the monthly data transfer in and out of your virtual private server (or
 *         <i>instance</i>).</p>
 */
export interface MonthlyTransfer {
  /**
   * <p>The amount allocated per month (in GB).</p>
   */
  gbPerMonthAllocated?: number;
}

export namespace MonthlyTransfer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonthlyTransfer): any => ({
    ...obj,
  });
}

export enum PortAccessType {
  Private = "Private",
  Public = "Public",
}

/**
 * <p>Describes information about ports for an Amazon Lightsail instance.</p>
 */
export interface InstancePortInfo {
  /**
   * <p>The first port in a range of open ports on an instance.</p>
   *          <p>Allowed ports:</p>
   *          <ul>
   *             <li>
   *                <p>TCP and UDP - <code>0</code> to <code>65535</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ICMP - The ICMP type for IPv4 addresses. For example, specify <code>8</code> as the
   *             <code>fromPort</code> (ICMP type), and <code>-1</code> as the <code>toPort</code> (ICMP
   *           code), to enable ICMP Ping. For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages">Control Messages</a> on <i>Wikipedia</i>.</p>
   *             </li>
   *             <li>
   *                <p>ICMPv6 - The ICMP type for IPv6 addresses. For example, specify <code>128</code> as
   *           the <code>fromPort</code> (ICMPv6 type), and <code>0</code> as <code>toPort</code> (ICMPv6
   *           code). For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol_for_IPv6">Internet
   *             Control Message Protocol for IPv6</a>.</p>
   *             </li>
   *          </ul>
   */
  fromPort?: number;

  /**
   * <p>The last port in a range of open ports on an instance.</p>
   *          <p>Allowed ports:</p>
   *          <ul>
   *             <li>
   *                <p>TCP and UDP - <code>0</code> to <code>65535</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ICMP - The ICMP code for IPv4 addresses. For example, specify <code>8</code> as the
   *             <code>fromPort</code> (ICMP type), and <code>-1</code> as the <code>toPort</code> (ICMP
   *           code), to enable ICMP Ping. For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages">Control Messages</a> on <i>Wikipedia</i>.</p>
   *             </li>
   *             <li>
   *                <p>ICMPv6 - The ICMP code for IPv6 addresses. For example, specify <code>128</code> as
   *           the <code>fromPort</code> (ICMPv6 type), and <code>0</code> as <code>toPort</code> (ICMPv6
   *           code). For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol_for_IPv6">Internet
   *             Control Message Protocol for IPv6</a>.</p>
   *             </li>
   *          </ul>
   */
  toPort?: number;

  /**
   * <p>The IP protocol name.</p>
   *          <p>The name can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>tcp</code> - Transmission Control Protocol (TCP) provides reliable, ordered, and
   *           error-checked delivery of streamed data between applications running on hosts
   *           communicating by an IP network. If you have an application that doesn't require reliable
   *           data stream service, use UDP instead.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>all</code> - All transport layer protocol types. For more general information,
   *           see <a href="https://en.wikipedia.org/wiki/Transport_layer">Transport layer</a> on
   *             <i>Wikipedia</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>udp</code> - With User Datagram Protocol (UDP), computer applications can send
   *           messages (or datagrams) to other hosts on an Internet Protocol (IP) network. Prior
   *           communications are not required to set up transmission channels or data paths.
   *           Applications that don't require reliable data stream service can use UDP, which provides a
   *           connectionless datagram service that emphasizes reduced latency over reliability. If you
   *           do require reliable data stream service, use TCP instead.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>icmp</code> - Internet Control Message Protocol (ICMP) is used to send error
   *           messages and operational information indicating success or failure when communicating with
   *           an instance. For example, an error is indicated when an instance could not be reached.
   *           When you specify <code>icmp</code> as the <code>protocol</code>, you must specify the ICMP
   *           type using the <code>fromPort</code> parameter, and ICMP code using the
   *             <code>toPort</code> parameter.</p>
   *             </li>
   *          </ul>
   */
  protocol?: NetworkProtocol | string;

  /**
   * <p>The location from which access is allowed. For example, <code>Anywhere (0.0.0.0/0)</code>,
   *       or <code>Custom</code> if a specific IP address or range of IP addresses is allowed.</p>
   */
  accessFrom?: string;

  /**
   * <p>The type of access (<code>Public</code> or <code>Private</code>).</p>
   */
  accessType?: PortAccessType | string;

  /**
   * <p>The common name of the port information.</p>
   */
  commonName?: string;

  /**
   * <p>The access direction (<code>inbound</code> or <code>outbound</code>).</p>
   *          <note>
   *             <p>Lightsail currently supports only <code>inbound</code> access direction.</p>
   *          </note>
   */
  accessDirection?: AccessDirection | string;

  /**
   * <p>The IPv4 address, or range of IPv4 addresses (in CIDR notation) that are allowed to
   *       connect to an instance through the ports, and the protocol.</p>
   *          <note>
   *             <p>The <code>ipv6Cidrs</code> parameter lists the IPv6 addresses that are allowed to
   *         connect to an instance.</p>
   *          </note>
   *          <p>For more information about CIDR block notation, see <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation">Classless
   *         Inter-Domain Routing</a> on <i>Wikipedia</i>.</p>
   */
  cidrs?: string[];

  /**
   * <p>The IPv6 address, or range of IPv6 addresses (in CIDR notation) that are allowed to
   *       connect to an instance through the ports, and the protocol. Only devices with an IPv6 address
   *       can connect to an instance through IPv6; otherwise, IPv4 should be used.</p>
   *          <note>
   *             <p>The <code>cidrs</code> parameter lists the IPv4 addresses that are allowed to connect to
   *         an instance.</p>
   *          </note>
   *          <p>For more information about CIDR block notation, see <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation">Classless
   *         Inter-Domain Routing</a> on <i>Wikipedia</i>.</p>
   */
  ipv6Cidrs?: string[];

  /**
   * <p>An alias that defines access for a preconfigured range of IP addresses.</p>
   *          <p>The only alias currently supported is <code>lightsail-connect</code>, which allows IP
   *       addresses of the browser-based RDP/SSH client in the Lightsail console to connect to your
   *       instance.</p>
   */
  cidrListAliases?: string[];
}

export namespace InstancePortInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstancePortInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes monthly data transfer rates and port information for an instance.</p>
 */
export interface InstanceNetworking {
  /**
   * <p>The amount of data in GB allocated for monthly data transfers.</p>
   */
  monthlyTransfer?: MonthlyTransfer;

  /**
   * <p>An array of key-value pairs containing information about the ports on the instance.</p>
   */
  ports?: InstancePortInfo[];
}

export namespace InstanceNetworking {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceNetworking): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the virtual private server (or <i>instance</i>) status.</p>
 */
export interface InstanceState {
  /**
   * <p>The status code for the instance.</p>
   */
  code?: number;

  /**
   * <p>The state of the instance (e.g., <code>running</code> or <code>pending</code>).</p>
   */
  name?: string;
}

export namespace InstanceState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceState): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an instance (a virtual private server).</p>
 */
export interface Instance {
  /**
   * <p>The name the user gave the instance (e.g., <code>Amazon_Linux-1GB-Ohio-1</code>).</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the instance (e.g.,
   *         <code>arn:aws:lightsail:us-east-2:123456789101:Instance/244ad76f-8aad-4741-809f-12345EXAMPLE</code>).</p>
   */
  arn?: string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       an instance or another resource in Lightsail. This code enables our support team to look up
   *       your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The timestamp when the instance was created (e.g., <code>1479734909.17</code>) in Unix
   *       time format.</p>
   */
  createdAt?: Date;

  /**
   * <p>The region name and Availability Zone where the instance is located.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The type of resource (usually <code>Instance</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The blueprint ID (e.g., <code>os_amlinux_2016_03</code>).</p>
   */
  blueprintId?: string;

  /**
   * <p>The friendly name of the blueprint (e.g., <code>Amazon Linux</code>).</p>
   */
  blueprintName?: string;

  /**
   * <p>The bundle for the instance (e.g., <code>micro_1_0</code>).</p>
   */
  bundleId?: string;

  /**
   * <p>An array of objects representing the add-ons enabled on the instance.</p>
   */
  addOns?: AddOn[];

  /**
   * <p>A Boolean value indicating whether this instance has a static IP assigned to it.</p>
   */
  isStaticIp?: boolean;

  /**
   * <p>The private IP address of the instance.</p>
   */
  privateIpAddress?: string;

  /**
   * <p>The public IP address of the instance.</p>
   */
  publicIpAddress?: string;

  /**
   * <p>The IPv6 addresses of the instance.</p>
   */
  ipv6Addresses?: string[];

  /**
   * <p>The IP address type of the instance.</p>
   *
   *          <p>The possible values are <code>ipv4</code> for IPv4 only, and <code>dualstack</code> for
   *       IPv4 and IPv6.</p>
   */
  ipAddressType?: IpAddressType | string;

  /**
   * <p>The size of the vCPU and the amount of RAM for the instance.</p>
   */
  hardware?: InstanceHardware;

  /**
   * <p>Information about the public ports and monthly data transfer rates for the
   *       instance.</p>
   */
  networking?: InstanceNetworking;

  /**
   * <p>The status code and the state (e.g., <code>running</code>) for the instance.</p>
   */
  state?: InstanceState;

  /**
   * <p>The user name for connecting to the instance (e.g., <code>ec2-user</code>).</p>
   */
  username?: string;

  /**
   * <p>The name of the SSH key being used to connect to the instance (e.g.,
   *         <code>LightsailDefaultKeyPair</code>).</p>
   */
  sshKeyName?: string;
}

export namespace Instance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Instance): any => ({
    ...obj,
  });
}

export enum InstanceAccessProtocol {
  rdp = "rdp",
  ssh = "ssh",
}

/**
 * <p>Describes the public SSH host keys or the RDP certificate.</p>
 */
export interface HostKeyAttributes {
  /**
   * <p>The SSH host key algorithm or the RDP certificate format.</p>
   *          <p>For SSH host keys, the algorithm may be <code>ssh-rsa</code>,
   *         <code>ecdsa-sha2-nistp256</code>, <code>ssh-ed25519</code>, etc. For RDP certificates, the
   *       algorithm is always <code>x509-cert</code>.</p>
   */
  algorithm?: string;

  /**
   * <p>The public SSH host key or the RDP certificate.</p>
   */
  publicKey?: string;

  /**
   * <p>The time that the SSH host key or RDP certificate was recorded by Lightsail.</p>
   */
  witnessedAt?: Date;

  /**
   * <p>The SHA-1 fingerprint of the returned SSH host key or RDP certificate.</p>
   *          <ul>
   *             <li>
   *                <p>Example of an SHA-1 SSH fingerprint:</p>
   *                <p>
   *                   <code>SHA1:1CHH6FaAaXjtFOsR/t83vf91SR0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Example of an SHA-1 RDP fingerprint:</p>
   *                <p>
   *                   <code>af:34:51:fe:09:f0:e0:da:b8:4e:56:ca:60:c2:10:ff:38:06:db:45</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  fingerprintSHA1?: string;

  /**
   * <p>The SHA-256 fingerprint of the returned SSH host key or RDP certificate.</p>
   *          <ul>
   *             <li>
   *                <p>Example of an SHA-256 SSH fingerprint:</p>
   *                <p>
   *                   <code>SHA256:KTsMnRBh1IhD17HpdfsbzeGA4jOijm5tyXsMjKVbB8o</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Example of an SHA-256 RDP fingerprint:</p>
   *                <p>
   *                   <code>03:9b:36:9f:4b:de:4e:61:70:fc:7c:c9:78:e7:d2:1a:1c:25:a8:0c:91:f6:7c:e4:d6:a0:85:c8:b4:53:99:68</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  fingerprintSHA256?: string;

  /**
   * <p>The returned RDP certificate is valid after this point in time.</p>
   *          <p>This value is listed only for RDP certificates.</p>
   */
  notValidBefore?: Date;

  /**
   * <p>The returned RDP certificate is not valid after this point in time.</p>
   *          <p>This value is listed only for RDP certificates.</p>
   */
  notValidAfter?: Date;
}

export namespace HostKeyAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HostKeyAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>The password data for the Windows Server-based instance, including the ciphertext and the
 *       key pair name.</p>
 */
export interface PasswordData {
  /**
   * <p>The encrypted password. Ciphertext will be an empty string if access to your new instance
   *       is not ready yet. When you create an instance, it can take up to 15 minutes for the instance
   *       to be ready.</p>
   *          <note>
   *             <p>If you use the default key pair (<code>LightsailDefaultKeyPair</code>), the decrypted
   *         password will be available in the password field.</p>
   *             <p>If you are using a custom key pair, you need to use your own means of decryption.</p>
   *             <p>If you change the Administrator password on the instance, Lightsail will continue to
   *         return the original ciphertext value. When accessing the instance using RDP, you need to
   *         manually enter the Administrator password after changing it from the default.</p>
   *          </note>
   */
  ciphertext?: string;

  /**
   * <p>The name of the key pair that you used when creating your instance. If no key pair name
   *       was specified when creating the instance, Lightsail uses the default key pair
   *         (<code>LightsailDefaultKeyPair</code>).</p>
   *          <p>If you are using a custom key pair, you need to use your own means of decrypting your
   *       password using the <code>ciphertext</code>. Lightsail creates the ciphertext by encrypting
   *       your password with the public key part of this key pair.</p>
   */
  keyPairName?: string;
}

export namespace PasswordData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PasswordData): any => ({
    ...obj,
  });
}

/**
 * <p>The parameters for gaining temporary access to one of your Amazon Lightsail
 *       instances.</p>
 */
export interface InstanceAccessDetails {
  /**
   * <p>For SSH access, the public key to use when accessing your instance For OpenSSH clients
   *       (e.g., command line SSH), you should save this value to <code>tempkey-cert.pub</code>.</p>
   */
  certKey?: string;

  /**
   * <p>For SSH access, the date on which the temporary keys expire.</p>
   */
  expiresAt?: Date;

  /**
   * <p>The public IP address of the Amazon Lightsail instance.</p>
   */
  ipAddress?: string;

  /**
   * <p>For RDP access, the password for your Amazon Lightsail instance. Password will be an empty
   *       string if the password for your new instance is not ready yet. When you create an instance, it
   *       can take up to 15 minutes for the instance to be ready.</p>
   *          <note>
   *             <p>If you create an instance using any key pair other than the default
   *           (<code>LightsailDefaultKeyPair</code>), <code>password</code> will always be an empty
   *         string.</p>
   *             <p>If you change the Administrator password on the instance, Lightsail will continue to
   *         return the original password value. When accessing the instance using RDP, you need to
   *         manually enter the Administrator password after changing it from the default.</p>
   *          </note>
   */
  password?: string;

  /**
   * <p>For a Windows Server-based instance, an object with the data you can use to retrieve your
   *       password. This is only needed if <code>password</code> is empty and the instance is not new
   *       (and therefore the password is not ready yet). When you create an instance, it can take up to
   *       15 minutes for the instance to be ready.</p>
   */
  passwordData?: PasswordData;

  /**
   * <p>For SSH access, the temporary private key. For OpenSSH clients (e.g., command line SSH),
   *       you should save this value to <code>tempkey</code>).</p>
   */
  privateKey?: string;

  /**
   * <p>The protocol for these Amazon Lightsail instance access details.</p>
   */
  protocol?: InstanceAccessProtocol | string;

  /**
   * <p>The name of this Amazon Lightsail instance.</p>
   */
  instanceName?: string;

  /**
   * <p>The user name to use when logging in to the Amazon Lightsail instance.</p>
   */
  username?: string;

  /**
   * <p>Describes the public SSH host keys or the RDP certificate.</p>
   */
  hostKeys?: HostKeyAttributes[];
}

export namespace InstanceAccessDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceAccessDetails): any => ({
    ...obj,
  });
}

export enum InstanceMetricName {
  BurstCapacityPercentage = "BurstCapacityPercentage",
  BurstCapacityTime = "BurstCapacityTime",
  CPUUtilization = "CPUUtilization",
  NetworkIn = "NetworkIn",
  NetworkOut = "NetworkOut",
  StatusCheckFailed = "StatusCheckFailed",
  StatusCheckFailed_Instance = "StatusCheckFailed_Instance",
  StatusCheckFailed_System = "StatusCheckFailed_System",
}

export enum PortState {
  Closed = "closed",
  Open = "open",
}

/**
 * <p>Describes open ports on an instance, the IP addresses allowed to connect to the instance
 *       through the ports, and the protocol.</p>
 */
export interface InstancePortState {
  /**
   * <p>The first port in a range of open ports on an instance.</p>
   *          <p>Allowed ports:</p>
   *          <ul>
   *             <li>
   *                <p>TCP and UDP - <code>0</code> to <code>65535</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ICMP - The ICMP type for IPv4 addresses. For example, specify <code>8</code> as the
   *             <code>fromPort</code> (ICMP type), and <code>-1</code> as the <code>toPort</code> (ICMP
   *           code), to enable ICMP Ping. For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages">Control Messages</a> on <i>Wikipedia</i>.</p>
   *             </li>
   *             <li>
   *                <p>ICMPv6 - The ICMP type for IPv6 addresses. For example, specify <code>128</code> as
   *           the <code>fromPort</code> (ICMPv6 type), and <code>0</code> as <code>toPort</code> (ICMPv6
   *           code). For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol_for_IPv6">Internet
   *             Control Message Protocol for IPv6</a>.</p>
   *             </li>
   *          </ul>
   */
  fromPort?: number;

  /**
   * <p>The last port in a range of open ports on an instance.</p>
   *          <p>Allowed ports:</p>
   *          <ul>
   *             <li>
   *                <p>TCP and UDP - <code>0</code> to <code>65535</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ICMP - The ICMP code for IPv4 addresses. For example, specify <code>8</code> as the
   *             <code>fromPort</code> (ICMP type), and <code>-1</code> as the <code>toPort</code> (ICMP
   *           code), to enable ICMP Ping. For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages">Control Messages</a> on <i>Wikipedia</i>.</p>
   *             </li>
   *             <li>
   *                <p>ICMPv6 - The ICMP code for IPv6 addresses. For example, specify <code>128</code> as
   *           the <code>fromPort</code> (ICMPv6 type), and <code>0</code> as <code>toPort</code> (ICMPv6
   *           code). For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol_for_IPv6">Internet
   *             Control Message Protocol for IPv6</a>.</p>
   *             </li>
   *          </ul>
   */
  toPort?: number;

  /**
   * <p>The IP protocol name.</p>
   *          <p>The name can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>tcp</code> - Transmission Control Protocol (TCP) provides reliable, ordered, and
   *           error-checked delivery of streamed data between applications running on hosts
   *           communicating by an IP network. If you have an application that doesn't require reliable
   *           data stream service, use UDP instead.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>all</code> - All transport layer protocol types. For more general information,
   *           see <a href="https://en.wikipedia.org/wiki/Transport_layer">Transport layer</a> on
   *             <i>Wikipedia</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>udp</code> - With User Datagram Protocol (UDP), computer applications can send
   *           messages (or datagrams) to other hosts on an Internet Protocol (IP) network. Prior
   *           communications are not required to set up transmission channels or data paths.
   *           Applications that don't require reliable data stream service can use UDP, which provides a
   *           connectionless datagram service that emphasizes reduced latency over reliability. If you
   *           do require reliable data stream service, use TCP instead.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>icmp</code> - Internet Control Message Protocol (ICMP) is used to send error
   *           messages and operational information indicating success or failure when communicating with
   *           an instance. For example, an error is indicated when an instance could not be reached.
   *           When you specify <code>icmp</code> as the <code>protocol</code>, you must specify the ICMP
   *           type using the <code>fromPort</code> parameter, and ICMP code using the
   *             <code>toPort</code> parameter.</p>
   *             </li>
   *          </ul>
   */
  protocol?: NetworkProtocol | string;

  /**
   * <p>Specifies whether the instance port is <code>open</code> or <code>closed</code>.</p>
   *          <note>
   *             <p>The port state for Lightsail instances is always <code>open</code>.</p>
   *          </note>
   */
  state?: PortState | string;

  /**
   * <p>The IPv4 address, or range of IPv4 addresses (in CIDR notation) that are allowed to
   *       connect to an instance through the ports, and the protocol.</p>
   *          <note>
   *             <p>The <code>ipv6Cidrs</code> parameter lists the IPv6 addresses that are allowed to
   *         connect to an instance.</p>
   *          </note>
   *          <p>For more information about CIDR block notation, see <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation">Classless
   *         Inter-Domain Routing</a> on <i>Wikipedia</i>.</p>
   */
  cidrs?: string[];

  /**
   * <p>The IPv6 address, or range of IPv6 addresses (in CIDR notation) that are allowed to
   *       connect to an instance through the ports, and the protocol. Only devices with an IPv6 address
   *       can connect to an instance through IPv6; otherwise, IPv4 should be used.</p>
   *          <note>
   *             <p>The <code>cidrs</code> parameter lists the IPv4 addresses that are allowed to connect to
   *         an instance.</p>
   *          </note>
   *          <p>For more information about CIDR block notation, see <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation">Classless
   *         Inter-Domain Routing</a> on <i>Wikipedia</i>.</p>
   */
  ipv6Cidrs?: string[];

  /**
   * <p>An alias that defines access for a preconfigured range of IP addresses.</p>
   *          <p>The only alias currently supported is <code>lightsail-connect</code>, which allows IP
   *       addresses of the browser-based RDP/SSH client in the Lightsail console to connect to your
   *       instance.</p>
   */
  cidrListAliases?: string[];
}

export namespace InstancePortState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstancePortState): any => ({
    ...obj,
  });
}

export enum InstanceSnapshotState {
  Available = "available",
  Error = "error",
  Pending = "pending",
}

/**
 * <p>Describes an instance snapshot.</p>
 */
export interface InstanceSnapshot {
  /**
   * <p>The name of the snapshot.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot (e.g.,
   *         <code>arn:aws:lightsail:us-east-2:123456789101:InstanceSnapshot/d23b5706-3322-4d83-81e5-12345EXAMPLE</code>).</p>
   */
  arn?: string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       an instance or another resource in Lightsail. This code enables our support team to look up
   *       your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The timestamp when the snapshot was created (e.g., <code>1479907467.024</code>).</p>
   */
  createdAt?: Date;

  /**
   * <p>The region name and Availability Zone where you created the snapshot.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The type of resource (usually <code>InstanceSnapshot</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The state the snapshot is in.</p>
   */
  state?: InstanceSnapshotState | string;

  /**
   * <p>The progress of the snapshot.</p>
   *          <note>
   *             <p>This is populated only for disk snapshots, and is <code>null</code> for instance
   *         snapshots.</p>
   *          </note>
   */
  progress?: string;

  /**
   * <p>An array of disk objects containing information about all block storage disks.</p>
   */
  fromAttachedDisks?: Disk[];

  /**
   * <p>The instance from which the snapshot was created.</p>
   */
  fromInstanceName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the instance from which the snapshot was created (e.g.,
   *         <code>arn:aws:lightsail:us-east-2:123456789101:Instance/64b8404c-ccb1-430b-8daf-12345EXAMPLE</code>).</p>
   */
  fromInstanceArn?: string;

  /**
   * <p>The blueprint ID from which you created the snapshot (e.g., <code>os_debian_8_3</code>). A
   *       blueprint is a virtual private server (or <i>instance</i>) image used to create
   *       instances quickly.</p>
   */
  fromBlueprintId?: string;

  /**
   * <p>The bundle ID from which you created the snapshot (e.g., <code>micro_1_0</code>).</p>
   */
  fromBundleId?: string;

  /**
   * <p>A Boolean value indicating whether the snapshot was created from an automatic
   *       snapshot.</p>
   */
  isFromAutoSnapshot?: boolean;

  /**
   * <p>The size in GB of the SSD.</p>
   */
  sizeInGb?: number;
}

export namespace InstanceSnapshot {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceSnapshot): any => ({
    ...obj,
  });
}

export enum LoadBalancerAttributeName {
  HealthCheckPath = "HealthCheckPath",
  HttpsRedirectionEnabled = "HttpsRedirectionEnabled",
  SessionStickinessEnabled = "SessionStickinessEnabled",
  SessionStickiness_LB_CookieDurationSeconds = "SessionStickiness_LB_CookieDurationSeconds",
  TlsPolicyName = "TlsPolicyName",
}

export enum InstanceHealthState {
  Draining = "draining",
  Healthy = "healthy",
  Initial = "initial",
  Unavailable = "unavailable",
  Unhealthy = "unhealthy",
  Unused = "unused",
}

export enum InstanceHealthReason {
  InstanceDeregistrationInProgress = "Instance.DeregistrationInProgress",
  InstanceFailedHealthChecks = "Instance.FailedHealthChecks",
  InstanceInvalidState = "Instance.InvalidState",
  InstanceIpUnusable = "Instance.IpUnusable",
  InstanceNotInUse = "Instance.NotInUse",
  InstanceNotRegistered = "Instance.NotRegistered",
  InstanceResponseCodeMismatch = "Instance.ResponseCodeMismatch",
  InstanceTimeout = "Instance.Timeout",
  LbInitialHealthChecking = "Lb.InitialHealthChecking",
  LbInternalError = "Lb.InternalError",
  LbRegistrationInProgress = "Lb.RegistrationInProgress",
}

/**
 * <p>Describes information about the health of the instance.</p>
 */
export interface InstanceHealthSummary {
  /**
   * <p>The name of the Lightsail instance for which you are requesting health check
   *       data.</p>
   */
  instanceName?: string;

  /**
   * <p>Describes the overall instance health. Valid values are below.</p>
   */
  instanceHealth?: InstanceHealthState | string;

  /**
   * <p>More information about the instance health. If the <code>instanceHealth</code> is
   *         <code>healthy</code>, then an <code>instanceHealthReason</code> value is not
   *       provided.</p>
   *          <p>If <b>
   *                <code>instanceHealth</code>
   *             </b> is <code>initial</code>,
   *       the <b>
   *                <code>instanceHealthReason</code>
   *             </b> value can be one of the
   *       following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Lb.RegistrationInProgress</code>
   *                   </b> - The target
   *           instance is in the process of being registered with the load balancer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Lb.InitialHealthChecking</code>
   *                   </b> - The
   *           Lightsail load balancer is still sending the target instance the minimum number of
   *           health checks required to determine its health status.</p>
   *             </li>
   *          </ul>
   *          <p>If <b>
   *                <code>instanceHealth</code>
   *             </b> is <code>unhealthy</code>,
   *       the <b>
   *                <code>instanceHealthReason</code>
   *             </b> value can be one of the
   *       following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Instance.ResponseCodeMismatch</code>
   *                   </b> - The
   *           health checks did not return an expected HTTP code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Instance.Timeout</code>
   *                   </b> - The health check
   *           requests timed out.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Instance.FailedHealthChecks</code>
   *                   </b> - The health
   *           checks failed because the connection to the target instance timed out, the target instance
   *           response was malformed, or the target instance failed the health check for an unknown
   *           reason.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Lb.InternalError</code>
   *                   </b> - The health checks
   *           failed due to an internal error.</p>
   *             </li>
   *          </ul>
   *          <p>If <b>
   *                <code>instanceHealth</code>
   *             </b> is <code>unused</code>,
   *       the <b>
   *                <code>instanceHealthReason</code>
   *             </b> value can be one of the
   *       following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Instance.NotRegistered</code>
   *                   </b> - The target
   *           instance is not registered with the target group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Instance.NotInUse</code>
   *                   </b> - The target group is
   *           not used by any load balancer, or the target instance is in an Availability Zone that is
   *           not enabled for its load balancer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Instance.IpUnusable</code>
   *                   </b> - The target IP
   *           address is reserved for use by a Lightsail load balancer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Instance.InvalidState</code>
   *                   </b> - The target is in
   *           the stopped or terminated state.</p>
   *             </li>
   *          </ul>
   *          <p>If <b>
   *                <code>instanceHealth</code>
   *             </b> is <code>draining</code>,
   *       the <b>
   *                <code>instanceHealthReason</code>
   *             </b> value can be one of the
   *       following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Instance.DeregistrationInProgress</code>
   *                   </b> - The
   *           target instance is in the process of being deregistered and the deregistration delay
   *           period has not expired.</p>
   *             </li>
   *          </ul>
   */
  instanceHealthReason?: InstanceHealthReason | string;
}

export namespace InstanceHealthSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceHealthSummary): any => ({
    ...obj,
  });
}

export enum LoadBalancerProtocol {
  HTTP = "HTTP",
  HTTP_HTTPS = "HTTP_HTTPS",
}

export enum LoadBalancerState {
  Active = "active",
  ActiveImpaired = "active_impaired",
  Failed = "failed",
  Provisioning = "provisioning",
  Unknown = "unknown",
}

/**
 * <p>Provides a summary of SSL/TLS certificate metadata.</p>
 */
export interface LoadBalancerTlsCertificateSummary {
  /**
   * <p>The name of the SSL/TLS certificate.</p>
   */
  name?: string;

  /**
   * <p>When <code>true</code>, the SSL/TLS certificate is attached to the Lightsail load
   *       balancer.</p>
   */
  isAttached?: boolean;
}

export namespace LoadBalancerTlsCertificateSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoadBalancerTlsCertificateSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a load balancer.</p>
 */
export interface LoadBalancer {
  /**
   * <p>The name of the load balancer (e.g., <code>my-load-balancer</code>).</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  arn?: string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       your Lightsail load balancer. This code enables our support team to look up your Lightsail
   *       information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The date when your load balancer was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The AWS Region where your load balancer was created (e.g., <code>us-east-2a</code>).
   *       Lightsail automatically creates your load balancer across Availability Zones.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The resource type (e.g., <code>LoadBalancer</code>.</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The DNS name of your Lightsail load balancer.</p>
   */
  dnsName?: string;

  /**
   * <p>The status of your load balancer. Valid values are below.</p>
   */
  state?: LoadBalancerState | string;

  /**
   * <p>The protocol you have enabled for your load balancer. Valid values are below.</p>
   *          <p>You can't just have <code>HTTP_HTTPS</code>, but you can have just
   *       <code>HTTP</code>.</p>
   */
  protocol?: LoadBalancerProtocol | string;

  /**
   * <p>An array of public port settings for your load balancer. For HTTP, use port 80. For HTTPS,
   *       use port 443.</p>
   */
  publicPorts?: number[];

  /**
   * <p>The path you specified to perform your health checks. If no path is specified, the load
   *       balancer tries to make a request to the default (root) page.</p>
   */
  healthCheckPath?: string;

  /**
   * <p>The port where the load balancer will direct traffic to your Lightsail instances. For
   *       HTTP traffic, it's port 80. For HTTPS traffic, it's port 443.</p>
   */
  instancePort?: number;

  /**
   * <p>An array of InstanceHealthSummary objects describing the health of the load
   *       balancer.</p>
   */
  instanceHealthSummary?: InstanceHealthSummary[];

  /**
   * <p>An array of LoadBalancerTlsCertificateSummary objects that provide additional information
   *       about the SSL/TLS certificates. For example, if <code>true</code>, the certificate is attached
   *       to the load balancer.</p>
   */
  tlsCertificateSummaries?: LoadBalancerTlsCertificateSummary[];

  /**
   * <p>A string to string map of the configuration options for your load balancer. Valid values
   *       are listed below.</p>
   */
  configurationOptions?: Record<string, string>;

  /**
   * <p>The IP address type of the load balancer.</p>
   *
   *          <p>The possible values are <code>ipv4</code> for IPv4 only, and <code>dualstack</code> for
   *       IPv4 and IPv6.</p>
   */
  ipAddressType?: IpAddressType | string;

  /**
   * <p>A Boolean value that indicates whether HTTPS redirection is enabled for the load
   *       balancer.</p>
   */
  httpsRedirectionEnabled?: boolean;

  /**
   * <p>The name of the TLS security policy for the load balancer.</p>
   */
  tlsPolicyName?: string;
}

export namespace LoadBalancer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoadBalancer): any => ({
    ...obj,
  });
}

export enum LoadBalancerMetricName {
  ClientTLSNegotiationErrorCount = "ClientTLSNegotiationErrorCount",
  HTTPCode_Instance_2XX_Count = "HTTPCode_Instance_2XX_Count",
  HTTPCode_Instance_3XX_Count = "HTTPCode_Instance_3XX_Count",
  HTTPCode_Instance_4XX_Count = "HTTPCode_Instance_4XX_Count",
  HTTPCode_Instance_5XX_Count = "HTTPCode_Instance_5XX_Count",
  HTTPCode_LB_4XX_Count = "HTTPCode_LB_4XX_Count",
  HTTPCode_LB_5XX_Count = "HTTPCode_LB_5XX_Count",
  HealthyHostCount = "HealthyHostCount",
  InstanceResponseTime = "InstanceResponseTime",
  RejectedConnectionCount = "RejectedConnectionCount",
  RequestCount = "RequestCount",
  UnhealthyHostCount = "UnhealthyHostCount",
}

export enum LoadBalancerTlsCertificateDomainStatus {
  Failed = "FAILED",
  PendingValidation = "PENDING_VALIDATION",
  Success = "SUCCESS",
}

/**
 * <p>Describes the validation record of each domain name in the SSL/TLS certificate.</p>
 */
export interface LoadBalancerTlsCertificateDomainValidationRecord {
  /**
   * <p>A fully qualified domain name in the certificate. For example,
   *       <code>example.com</code>.</p>
   */
  name?: string;

  /**
   * <p>The type of validation record. For example, <code>CNAME</code> for domain
   *       validation.</p>
   */
  type?: string;

  /**
   * <p>The value for that type.</p>
   */
  value?: string;

  /**
   * <p>The validation status. Valid values are listed below.</p>
   */
  validationStatus?: LoadBalancerTlsCertificateDomainStatus | string;

  /**
   * <p>The domain name against which your SSL/TLS certificate was validated.</p>
   */
  domainName?: string;
}

export namespace LoadBalancerTlsCertificateDomainValidationRecord {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoadBalancerTlsCertificateDomainValidationRecord): any => ({
    ...obj,
  });
}

export enum LoadBalancerTlsCertificateFailureReason {
  AdditionalVerificationRequired = "ADDITIONAL_VERIFICATION_REQUIRED",
  DomainNotAllowed = "DOMAIN_NOT_ALLOWED",
  InvalidPublicDomain = "INVALID_PUBLIC_DOMAIN",
  NoAvailableContacts = "NO_AVAILABLE_CONTACTS",
  Other = "OTHER",
}

/**
 * <p>Contains information about the domain names on an SSL/TLS certificate that you will use to
 *       validate domain ownership.</p>
 */
export interface LoadBalancerTlsCertificateDomainValidationOption {
  /**
   * <p>The fully qualified domain name in the certificate request.</p>
   */
  domainName?: string;

  /**
   * <p>The status of the domain validation. Valid values are listed below.</p>
   */
  validationStatus?: LoadBalancerTlsCertificateDomainStatus | string;
}

export namespace LoadBalancerTlsCertificateDomainValidationOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoadBalancerTlsCertificateDomainValidationOption): any => ({
    ...obj,
  });
}

export enum LoadBalancerTlsCertificateRenewalStatus {
  Failed = "FAILED",
  PendingAutoRenewal = "PENDING_AUTO_RENEWAL",
  PendingValidation = "PENDING_VALIDATION",
  Success = "SUCCESS",
}

/**
 * <p>Contains information about the status of Lightsail's managed renewal for the
 *       certificate.</p>
 *          <p>The renewal status of the certificate.</p>
 *          <p>The following renewal status are possible:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>
 *                      <code>PendingAutoRenewal</code>
 *                   </b> - Lightsail is
 *           attempting to automatically validate the domain names in the certificate. No further
 *           action is required. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>
 *                      <code>PendingValidation</code>
 *                   </b> - Lightsail couldn't
 *           automatically validate one or more domain names in the certificate. You must take action
 *           to validate these domain names or the certificate won't be renewed. If you used DNS
 *           validation, check to make sure your certificate's domain validation records exist in your
 *           domain's DNS, and that your certificate remains in use.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>
 *                      <code>Success</code>
 *                   </b> - All domain names in the
 *           certificate are validated, and Lightsail renewed the certificate. No further action is
 *           required. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>
 *                      <code>Failed</code>
 *                   </b> - One or more domain names were
 *           not validated before the certificate expired, and Lightsail did not renew the
 *           certificate. You can request a new certificate using the <code>CreateCertificate</code>
 *           action.</p>
 *             </li>
 *          </ul>
 */
export interface LoadBalancerTlsCertificateRenewalSummary {
  /**
   * <p>The renewal status of the certificate.</p>
   *          <p>The following renewal status are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>PendingAutoRenewal</code>
   *                   </b> - Lightsail is
   *           attempting to automatically validate the domain names of the certificate. No further
   *           action is required. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>PendingValidation</code>
   *                   </b> - Lightsail couldn't
   *           automatically validate one or more domain names of the certificate. You must take action
   *           to validate these domain names or the certificate won't be renewed. Check to make sure
   *           your certificate's domain validation records exist in your domain's DNS, and that your
   *           certificate remains in use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Success</code>
   *                   </b> - All domain names in the
   *           certificate are validated, and Lightsail renewed the certificate. No further action is
   *           required. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Failed</code>
   *                   </b> - One or more domain names were
   *           not validated before the certificate expired, and Lightsail did not renew the
   *           certificate. You can request a new certificate using the <code>CreateCertificate</code>
   *           action.</p>
   *             </li>
   *          </ul>
   */
  renewalStatus?: LoadBalancerTlsCertificateRenewalStatus | string;

  /**
   * <p>Contains information about the validation of each domain name in the certificate, as it
   *       pertains to Lightsail's managed renewal. This is different from the initial validation that
   *       occurs as a result of the RequestCertificate request.</p>
   */
  domainValidationOptions?: LoadBalancerTlsCertificateDomainValidationOption[];
}

export namespace LoadBalancerTlsCertificateRenewalSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoadBalancerTlsCertificateRenewalSummary): any => ({
    ...obj,
  });
}

export enum LoadBalancerTlsCertificateRevocationReason {
  AACompromise = "A_A_COMPROMISE",
  AffiliationChanged = "AFFILIATION_CHANGED",
  CaCompromise = "CA_COMPROMISE",
  CertificateHold = "CERTIFICATE_HOLD",
  CessationOfOperation = "CESSATION_OF_OPERATION",
  KeyCompromise = "KEY_COMPROMISE",
  PrivilegeWithdrawn = "PRIVILEGE_WITHDRAWN",
  RemoveFromCrl = "REMOVE_FROM_CRL",
  Superceded = "SUPERCEDED",
  Unspecified = "UNSPECIFIED",
}

export enum LoadBalancerTlsCertificateStatus {
  Expired = "EXPIRED",
  Failed = "FAILED",
  Inactive = "INACTIVE",
  Issued = "ISSUED",
  PendingValidation = "PENDING_VALIDATION",
  Revoked = "REVOKED",
  Unknown = "UNKNOWN",
  ValidationTimedOut = "VALIDATION_TIMED_OUT",
}

/**
 * <p>Describes a load balancer SSL/TLS certificate.</p>
 *          <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>
 */
export interface LoadBalancerTlsCertificate {
  /**
   * <p>The name of the SSL/TLS certificate (e.g., <code>my-certificate</code>).</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the SSL/TLS certificate.</p>
   */
  arn?: string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       your Lightsail load balancer or SSL/TLS certificate. This code enables our support team to
   *       look up your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The time when you created your SSL/TLS certificate.</p>
   */
  createdAt?: Date;

  /**
   * <p>The AWS Region and Availability Zone where you created your certificate.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The resource type (e.g., <code>LoadBalancerTlsCertificate</code>).</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Instance</code>
   *                   </b> - A Lightsail instance (a
   *           virtual private server)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>StaticIp</code>
   *                   </b> - A static IP address</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>KeyPair</code>
   *                   </b> - The key pair used to connect
   *           to a Lightsail instance</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>InstanceSnapshot</code>
   *                   </b> - A Lightsail
   *           instance snapshot</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Domain</code>
   *                   </b> - A DNS zone</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>PeeredVpc</code>
   *                   </b> - A peered VPC</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>LoadBalancer</code>
   *                   </b> - A Lightsail load
   *           balancer</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>LoadBalancerTlsCertificate</code>
   *                   </b> - An SSL/TLS
   *           certificate associated with a Lightsail load balancer</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Disk</code>
   *                   </b> - A Lightsail block storage
   *           disk</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>DiskSnapshot</code>
   *                   </b> - A block storage disk
   *           snapshot</p>
   *             </li>
   *          </ul>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The load balancer name where your SSL/TLS certificate is attached.</p>
   */
  loadBalancerName?: string;

  /**
   * <p>When <code>true</code>, the SSL/TLS certificate is attached to the Lightsail load
   *       balancer.</p>
   */
  isAttached?: boolean;

  /**
   * <p>The validation status of the SSL/TLS certificate. Valid values are below.</p>
   */
  status?: LoadBalancerTlsCertificateStatus | string;

  /**
   * <p>The domain name for your SSL/TLS certificate.</p>
   */
  domainName?: string;

  /**
   * <p>An array of LoadBalancerTlsCertificateDomainValidationRecord objects describing the
   *       records.</p>
   */
  domainValidationRecords?: LoadBalancerTlsCertificateDomainValidationRecord[];

  /**
   * <p>The validation failure reason, if any, of the certificate.</p>
   *
   *          <p>The following failure reasons are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>NO_AVAILABLE_CONTACTS</code>
   *                   </b> - This failure
   *           applies to email validation, which is not available for Lightsail certificates.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>ADDITIONAL_VERIFICATION_REQUIRED</code>
   *                   </b> -
   *           Lightsail requires additional information to process this certificate request. This can
   *           happen as a fraud-protection measure, such as when the domain ranks within the Alexa top
   *           1000 websites. To provide the required information, use the <a href="https://console.aws.amazon.com/support/home">AWS Support Center</a> to contact
   *           AWS Support.</p>
   *                <note>
   *                   <p>You cannot request a certificate for Amazon-owned domain names such as those ending
   *             in amazonaws.com, cloudfront.net, or elasticbeanstalk.com.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>DOMAIN_NOT_ALLOWED</code>
   *                   </b> - One or more of the
   *           domain names in the certificate request was reported as an unsafe domain by <a href="https://www.virustotal.com/gui/home/url">VirusTotal</a>. To correct the
   *           problem, search for your domain name on the <a href="https://www.virustotal.com/gui/home/url">VirusTotal</a> website. If your domain
   *           is reported as suspicious, see <a href="https://developers.google.com/web/fundamentals/security/hacked">Google Help for
   *             Hacked Websites</a> to learn what you can do.</p>
   *                <p>If you believe that the result is a false positive, notify the organization that is
   *           reporting the domain. VirusTotal is an aggregate of several antivirus and URL scanners and
   *           cannot remove your domain from a block list itself. After you correct the problem and the
   *           VirusTotal registry has been updated, request a new certificate.</p>
   *                <p>If you see this error and your domain is not included in the VirusTotal list, visit
   *           the <a href="https://console.aws.amazon.com/support/home">AWS Support Center</a>
   *           and create a case.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>INVALID_PUBLIC_DOMAIN</code>
   *                   </b> - One or more of
   *           the domain names in the certificate request is not valid. Typically, this is because a
   *           domain name in the request is not a valid top-level domain. Try to request a certificate
   *           again, correcting any spelling errors or typos that were in the failed request, and ensure
   *           that all domain names in the request are for valid top-level domains. For example, you
   *           cannot request a certificate for <code>example.invalidpublicdomain</code> because
   *             <code>invalidpublicdomain</code> is not a valid top-level domain.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>OTHER</code>
   *                   </b> - Typically, this failure occurs
   *           when there is a typographical error in one or more of the domain names in the certificate
   *           request. Try to request a certificate again, correcting any spelling errors or typos that
   *           were in the failed request. </p>
   *             </li>
   *          </ul>
   */
  failureReason?: LoadBalancerTlsCertificateFailureReason | string;

  /**
   * <p>The time when the SSL/TLS certificate was issued.</p>
   */
  issuedAt?: Date;

  /**
   * <p>The issuer of the certificate.</p>
   */
  issuer?: string;

  /**
   * <p>The algorithm used to generate the key pair (the public and private key).</p>
   */
  keyAlgorithm?: string;

  /**
   * <p>The timestamp when the SSL/TLS certificate expires.</p>
   */
  notAfter?: Date;

  /**
   * <p>The timestamp when the SSL/TLS certificate is first valid.</p>
   */
  notBefore?: Date;

  /**
   * <p>An object that describes the status of the certificate renewal managed by
   *       Lightsail.</p>
   */
  renewalSummary?: LoadBalancerTlsCertificateRenewalSummary;

  /**
   * <p>The reason the certificate was revoked. This value is present only when the certificate
   *       status is <code>REVOKED</code>.</p>
   */
  revocationReason?: LoadBalancerTlsCertificateRevocationReason | string;

  /**
   * <p>The timestamp when the certificate was revoked. This value is present only when the
   *       certificate status is <code>REVOKED</code>.</p>
   */
  revokedAt?: Date;

  /**
   * <p>The serial number of the certificate.</p>
   */
  serial?: string;

  /**
   * <p>The algorithm that was used to sign the certificate.</p>
   */
  signatureAlgorithm?: string;

  /**
   * <p>The name of the entity that is associated with the public key contained in the
   *       certificate.</p>
   */
  subject?: string;

  /**
   * <p>An array of strings that specify the alternate domains (e.g., <code>example2.com</code>)
   *       and subdomains (e.g., <code>blog.example.com</code>) for the certificate.</p>
   */
  subjectAlternativeNames?: string[];
}

export namespace LoadBalancerTlsCertificate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoadBalancerTlsCertificate): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the TLS security policies that are available for Lightsail load
 *       balancers.</p>
 *
 *          <p>For more information about load balancer TLS security policies, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configure-load-balancer-tls-security-policy">Configuring TLS security policies on your Amazon Lightsail load
 *         balancers</a> in the <i>Amazon Lightsail Developer
 *       Guide</i>.</p>
 */
export interface LoadBalancerTlsPolicy {
  /**
   * <p>The name of the TLS security policy.</p>
   */
  name?: string;

  /**
   * <p>A Boolean value that indicates whether the TLS security policy is the default.</p>
   */
  isDefault?: boolean;

  /**
   * <p>The description of the TLS security policy.</p>
   */
  description?: string;

  /**
   * <p>The protocols used in a given TLS security policy.</p>
   */
  protocols?: string[];

  /**
   * <p>The ciphers used by the TLS security policy.</p>
   *          <p>The ciphers are listed in order of preference.</p>
   */
  ciphers?: string[];
}

export namespace LoadBalancerTlsPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoadBalancerTlsPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the AWS Region.</p>
 */
export interface Region {
  /**
   * <p>The continent code (e.g., <code>NA</code>, meaning North America).</p>
   */
  continentCode?: string;

  /**
   * <p>The description of the AWS Region (e.g., <code>This region is recommended to serve users
   *         in the eastern United States and eastern Canada</code>).</p>
   */
  description?: string;

  /**
   * <p>The display name (e.g., <code>Ohio</code>).</p>
   */
  displayName?: string;

  /**
   * <p>The region name (e.g., <code>us-east-2</code>).</p>
   */
  name?: RegionName | string;

  /**
   * <p>The Availability Zones. Follows the format <code>us-east-2a</code>
   *       (case-sensitive).</p>
   */
  availabilityZones?: AvailabilityZone[];

  /**
   * <p>The Availability Zones for databases. Follows the format <code>us-east-2a</code>
   *       (case-sensitive).</p>
   */
  relationalDatabaseAvailabilityZones?: AvailabilityZone[];
}

export namespace Region {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Region): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the hardware of a database.</p>
 */
export interface RelationalDatabaseHardware {
  /**
   * <p>The number of vCPUs for the database.</p>
   */
  cpuCount?: number;

  /**
   * <p>The size of the disk for the database.</p>
   */
  diskSizeInGb?: number;

  /**
   * <p>The amount of RAM in GB for the database.</p>
   */
  ramSizeInGb?: number;
}

export namespace RelationalDatabaseHardware {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RelationalDatabaseHardware): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an endpoint for a database.</p>
 */
export interface RelationalDatabaseEndpoint {
  /**
   * <p>Specifies the port that the database is listening on.</p>
   */
  port?: number;

  /**
   * <p>Specifies the DNS address of the database.</p>
   */
  address?: string;
}

export namespace RelationalDatabaseEndpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RelationalDatabaseEndpoint): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a pending database maintenance action.</p>
 */
export interface PendingMaintenanceAction {
  /**
   * <p>The type of pending database maintenance action.</p>
   */
  action?: string;

  /**
   * <p>Additional detail about the pending database maintenance action.</p>
   */
  description?: string;

  /**
   * <p>The effective date of the pending database maintenance action.</p>
   */
  currentApplyDate?: Date;
}

export namespace PendingMaintenanceAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PendingMaintenanceAction): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a pending database value modification.</p>
 */
export interface PendingModifiedRelationalDatabaseValues {
  /**
   * <p>The password for the master user of the database.</p>
   */
  masterUserPassword?: string;

  /**
   * <p>The database engine version.</p>
   */
  engineVersion?: string;

  /**
   * <p>A Boolean value indicating whether automated backup retention is enabled.</p>
   */
  backupRetentionEnabled?: boolean;
}

export namespace PendingModifiedRelationalDatabaseValues {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PendingModifiedRelationalDatabaseValues): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a database.</p>
 */
export interface RelationalDatabase {
  /**
   * <p>The unique name of the database resource in Lightsail.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the database.</p>
   */
  arn?: string;

  /**
   * <p>The support code for the database. Include this code in your email to support when you
   *       have questions about a database in Lightsail. This code enables our support team to look up
   *       your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The timestamp when the database was created. Formatted in Unix time.</p>
   */
  createdAt?: Date;

  /**
   * <p>The Region name and Availability Zone where the database is located.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The Lightsail resource type for the database (for example,
   *         <code>RelationalDatabase</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The blueprint ID for the database. A blueprint describes the major engine version of a
   *       database.</p>
   */
  relationalDatabaseBlueprintId?: string;

  /**
   * <p>The bundle ID for the database. A bundle describes the performance specifications for your
   *       database.</p>
   */
  relationalDatabaseBundleId?: string;

  /**
   * <p>The name of the master database created when the Lightsail database resource is
   *       created.</p>
   */
  masterDatabaseName?: string;

  /**
   * <p>Describes the hardware of the database.</p>
   */
  hardware?: RelationalDatabaseHardware;

  /**
   * <p>Describes the current state of the database.</p>
   */
  state?: string;

  /**
   * <p>Describes the secondary Availability Zone of a high availability database.</p>
   *          <p>The secondary database is used for failover support of a high availability
   *       database.</p>
   */
  secondaryAvailabilityZone?: string;

  /**
   * <p>A Boolean value indicating whether automated backup retention is enabled for the
   *       database.</p>
   */
  backupRetentionEnabled?: boolean;

  /**
   * <p>Describes pending database value modifications.</p>
   */
  pendingModifiedValues?: PendingModifiedRelationalDatabaseValues;

  /**
   * <p>The database software (for example, <code>MySQL</code>).</p>
   */
  engine?: string;

  /**
   * <p>The database engine version (for example, <code>5.7.23</code>).</p>
   */
  engineVersion?: string;

  /**
   * <p>The latest point in time to which the database can be restored. Formatted in Unix
   *       time.</p>
   */
  latestRestorableTime?: Date;

  /**
   * <p>The master user name of the database.</p>
   */
  masterUsername?: string;

  /**
   * <p>The status of parameter updates for the database.</p>
   */
  parameterApplyStatus?: string;

  /**
   * <p>The daily time range during which automated backups are created for the database (for
   *       example, <code>16:00-16:30</code>).</p>
   */
  preferredBackupWindow?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur on the database.</p>
   *          <p>In the format <code>ddd:hh24:mi-ddd:hh24:mi</code>. For example,
   *         <code>Tue:17:00-Tue:17:30</code>.</p>
   */
  preferredMaintenanceWindow?: string;

  /**
   * <p>A Boolean value indicating whether the database is publicly accessible.</p>
   */
  publiclyAccessible?: boolean;

  /**
   * <p>The master endpoint for the database.</p>
   */
  masterEndpoint?: RelationalDatabaseEndpoint;

  /**
   * <p>Describes the pending maintenance actions for the database.</p>
   */
  pendingMaintenanceActions?: PendingMaintenanceAction[];

  /**
   * <p>The certificate associated with the database.</p>
   */
  caCertificateIdentifier?: string;
}

export namespace RelationalDatabase {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RelationalDatabase): any => ({
    ...obj,
  });
}

export enum RelationalDatabaseEngine {
  MYSQL = "mysql",
}

/**
 * <p>Describes a database image, or blueprint. A blueprint describes the major engine version
 *       of a database.</p>
 */
export interface RelationalDatabaseBlueprint {
  /**
   * <p>The ID for the database blueprint.</p>
   */
  blueprintId?: string;

  /**
   * <p>The database software of the database blueprint (for example, <code>MySQL</code>).</p>
   */
  engine?: RelationalDatabaseEngine | string;

  /**
   * <p>The database engine version for the database blueprint (for example,
   *       <code>5.7.23</code>).</p>
   */
  engineVersion?: string;

  /**
   * <p>The description of the database engine for the database blueprint.</p>
   */
  engineDescription?: string;

  /**
   * <p>The description of the database engine version for the database blueprint.</p>
   */
  engineVersionDescription?: string;

  /**
   * <p>A Boolean value indicating whether the engine version is the default for the database
   *       blueprint.</p>
   */
  isEngineDefault?: boolean;
}

export namespace RelationalDatabaseBlueprint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RelationalDatabaseBlueprint): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a database bundle. A bundle describes the performance specifications of the
 *       database.</p>
 */
export interface RelationalDatabaseBundle {
  /**
   * <p>The ID for the database bundle.</p>
   */
  bundleId?: string;

  /**
   * <p>The name for the database bundle.</p>
   */
  name?: string;

  /**
   * <p>The cost of the database bundle in US currency.</p>
   */
  price?: number;

  /**
   * <p>The amount of RAM in GB (for example, <code>2.0</code>) for the database bundle.</p>
   */
  ramSizeInGb?: number;

  /**
   * <p>The size of the disk for the database bundle.</p>
   */
  diskSizeInGb?: number;

  /**
   * <p>The data transfer rate per month in GB for the database bundle.</p>
   */
  transferPerMonthInGb?: number;

  /**
   * <p>The number of virtual CPUs (vCPUs) for the database bundle.</p>
   */
  cpuCount?: number;

  /**
   * <p>A Boolean value indicating whether the database bundle is encrypted.</p>
   */
  isEncrypted?: boolean;

  /**
   * <p>A Boolean value indicating whether the database bundle is active.</p>
   */
  isActive?: boolean;
}

export namespace RelationalDatabaseBundle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RelationalDatabaseBundle): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an event for a database.</p>
 */
export interface RelationalDatabaseEvent {
  /**
   * <p>The database that the database event relates to.</p>
   */
  resource?: string;

  /**
   * <p>The timestamp when the database event was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The message of the database event.</p>
   */
  message?: string;

  /**
   * <p>The category that the database event belongs to.</p>
   */
  eventCategories?: string[];
}

export namespace RelationalDatabaseEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RelationalDatabaseEvent): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a database log event.</p>
 */
export interface LogEvent {
  /**
   * <p>The timestamp when the database log event was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The message of the database log event.</p>
   */
  message?: string;
}

export namespace LogEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LogEvent): any => ({
    ...obj,
  });
}

export enum RelationalDatabasePasswordVersion {
  CURRENT = "CURRENT",
  PENDING = "PENDING",
  PREVIOUS = "PREVIOUS",
}

export enum RelationalDatabaseMetricName {
  CPUUtilization = "CPUUtilization",
  DatabaseConnections = "DatabaseConnections",
  DiskQueueDepth = "DiskQueueDepth",
  FreeStorageSpace = "FreeStorageSpace",
  NetworkReceiveThroughput = "NetworkReceiveThroughput",
  NetworkTransmitThroughput = "NetworkTransmitThroughput",
}

/**
 * <p>Describes the parameters of a database.</p>
 */
export interface RelationalDatabaseParameter {
  /**
   * <p>Specifies the valid range of values for the parameter.</p>
   */
  allowedValues?: string;

  /**
   * <p>Indicates when parameter updates are applied.</p>
   *          <p>Can be <code>immediate</code> or <code>pending-reboot</code>.</p>
   */
  applyMethod?: string;

  /**
   * <p>Specifies the engine-specific parameter type.</p>
   */
  applyType?: string;

  /**
   * <p>Specifies the valid data type for the parameter.</p>
   */
  dataType?: string;

  /**
   * <p>Provides a description of the parameter.</p>
   */
  description?: string;

  /**
   * <p>A Boolean value indicating whether the parameter can be modified.</p>
   */
  isModifiable?: boolean;

  /**
   * <p>Specifies the name of the parameter.</p>
   */
  parameterName?: string;

  /**
   * <p>Specifies the value of the parameter.</p>
   */
  parameterValue?: string;
}

export namespace RelationalDatabaseParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RelationalDatabaseParameter): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a database snapshot.</p>
 */
export interface RelationalDatabaseSnapshot {
  /**
   * <p>The name of the database snapshot.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the database snapshot.</p>
   */
  arn?: string;

  /**
   * <p>The support code for the database snapshot. Include this code in your email to support
   *       when you have questions about a database snapshot in Lightsail. This code enables our
   *       support team to look up your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The timestamp when the database snapshot was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The Region name and Availability Zone where the database snapshot is located.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The Lightsail resource type.</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The software of the database snapshot (for example, <code>MySQL</code>)</p>
   */
  engine?: string;

  /**
   * <p>The database engine version for the database snapshot (for example,
   *       <code>5.7.23</code>).</p>
   */
  engineVersion?: string;

  /**
   * <p>The size of the disk in GB (for example, <code>32</code>) for the database
   *       snapshot.</p>
   */
  sizeInGb?: number;

  /**
   * <p>The state of the database snapshot.</p>
   */
  state?: string;

  /**
   * <p>The name of the source database from which the database snapshot was created.</p>
   */
  fromRelationalDatabaseName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the database from which the database snapshot was
   *       created.</p>
   */
  fromRelationalDatabaseArn?: string;

  /**
   * <p>The bundle ID of the database from which the database snapshot was created.</p>
   */
  fromRelationalDatabaseBundleId?: string;

  /**
   * <p>The blueprint ID of the database from which the database snapshot was created. A blueprint
   *       describes the major engine version of a database.</p>
   */
  fromRelationalDatabaseBlueprintId?: string;
}

export namespace RelationalDatabaseSnapshot {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RelationalDatabaseSnapshot): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a static IP.</p>
 */
export interface StaticIp {
  /**
   * <p>The name of the static IP (e.g., <code>StaticIP-Ohio-EXAMPLE</code>).</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the static IP (e.g.,
   *         <code>arn:aws:lightsail:us-east-2:123456789101:StaticIp/9cbb4a9e-f8e3-4dfe-b57e-12345EXAMPLE</code>).</p>
   */
  arn?: string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       an instance or another resource in Lightsail. This code enables our support team to look up
   *       your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The timestamp when the static IP was created (e.g., <code>1479735304.222</code>).</p>
   */
  createdAt?: Date;

  /**
   * <p>The region and Availability Zone where the static IP was created.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The resource type (usually <code>StaticIp</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The static IP address.</p>
   */
  ipAddress?: string;

  /**
   * <p>The instance where the static IP is attached (e.g.,
   *       <code>Amazon_Linux-1GB-Ohio-1</code>).</p>
   */
  attachedTo?: string;

  /**
   * <p>A Boolean value indicating whether the static IP is attached.</p>
   */
  isAttached?: boolean;
}

export namespace StaticIp {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StaticIp): any => ({
    ...obj,
  });
}

export enum ResourceBucketAccess {
  Allow = "allow",
  Deny = "deny",
}

export interface UpdateDomainEntryRequest {
  /**
   * <p>The name of the domain recordset to update.</p>
   */
  domainName: string | undefined;

  /**
   * <p>An array of key-value pairs containing information about the domain entry.</p>
   */
  domainEntry: DomainEntry | undefined;
}

export namespace UpdateDomainEntryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDomainEntryRequest): any => ({
    ...obj,
  });
}

export interface UpdateDomainEntryResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace UpdateDomainEntryResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDomainEntryResult): any => ({
    ...obj,
  });
}

export interface UpdateLoadBalancerAttributeRequest {
  /**
   * <p>The name of the load balancer that you want to modify (e.g.,
   *       <code>my-load-balancer</code>.</p>
   */
  loadBalancerName: string | undefined;

  /**
   * <p>The name of the attribute you want to update.</p>
   */
  attributeName: LoadBalancerAttributeName | string | undefined;

  /**
   * <p>The value that you want to specify for the attribute name.</p>
   *          <p>The following values are supported depending on what you specify for the
   *         <code>attributeName</code> request parameter:</p>
   *          <ul>
   *             <li>
   *                <p>If you specify <code>HealthCheckPath</code> for the <code>attributeName</code> request
   *           parameter, then the <code>attributeValue</code> request parameter must be the path to ping
   *           on the target (for example, <code>/weather/us/wa/seattle</code>).</p>
   *             </li>
   *             <li>
   *                <p>If you specify <code>SessionStickinessEnabled</code> for the
   *             <code>attributeName</code> request parameter, then the <code>attributeValue</code>
   *           request parameter must be <code>true</code> to activate session stickiness or
   *             <code>false</code> to deactivate session stickiness.</p>
   *             </li>
   *             <li>
   *                <p>If you specify <code>SessionStickiness_LB_CookieDurationSeconds</code> for the
   *             <code>attributeName</code> request parameter, then the <code>attributeValue</code>
   *           request parameter must be an interger that represents the cookie duration in
   *           seconds.</p>
   *             </li>
   *             <li>
   *                <p>If you specify <code>HttpsRedirectionEnabled</code> for the <code>attributeName</code>
   *           request parameter, then the <code>attributeValue</code> request parameter must be
   *             <code>true</code> to activate HTTP to HTTPS redirection or <code>false</code> to
   *           deactivate HTTP to HTTPS redirection.</p>
   *             </li>
   *             <li>
   *                <p>If you specify <code>TlsPolicyName</code> for the <code>attributeName</code> request
   *           parameter, then the <code>attributeValue</code> request parameter must be the name of the
   *           TLS policy.</p>
   *                <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancerTlsPolicies.html">GetLoadBalancerTlsPolicies</a> action to get a list of TLS policy names that you
   *           can specify.</p>
   *             </li>
   *          </ul>
   */
  attributeValue: string | undefined;
}

export namespace UpdateLoadBalancerAttributeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLoadBalancerAttributeRequest): any => ({
    ...obj,
  });
}

export interface UpdateLoadBalancerAttributeResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace UpdateLoadBalancerAttributeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLoadBalancerAttributeResult): any => ({
    ...obj,
  });
}

export interface UpdateRelationalDatabaseRequest {
  /**
   * <p>The name of your Lightsail database resource to update.</p>
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The password for the master user. The password can include any printable ASCII character
   *       except "/", """, or "@".</p>
   *          <p>My<b>SQL</b>
   *          </p>
   *          <p>Constraints: Must contain from 8 to 41 characters.</p>
   *          <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *          <p>Constraints: Must contain from 8 to 128 characters.</p>
   */
  masterUserPassword?: string;

  /**
   * <p>When <code>true</code>, the master user password is changed to a new strong password
   *       generated by Lightsail.</p>
   *          <p>Use the <code>get relational database master user password</code> operation to get the new
   *       password.</p>
   */
  rotateMasterUserPassword?: boolean;

  /**
   * <p>The daily time range during which automated backups are created for your database if
   *       automated backups are enabled.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the <code>hh24:mi-hh24:mi</code> format.</p>
   *                <p>Example: <code>16:00-16:30</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred maintenance window.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   */
  preferredBackupWindow?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur on your database.</p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for each
   *       AWS Region, occurring on a random day of the week.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the <code>ddd:hh24:mi-ddd:hh24:mi</code> format.</p>
   *             </li>
   *             <li>
   *                <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Example: <code>Tue:17:00-Tue:17:30</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  preferredMaintenanceWindow?: string;

  /**
   * <p>When <code>true</code>, enables automated backup retention for your database.</p>
   *          <p>Updates are applied during the next maintenance window because this can result in an
   *       outage.</p>
   */
  enableBackupRetention?: boolean;

  /**
   * <p>When <code>true</code>, disables automated backup retention for your database.</p>
   *          <p>Disabling backup retention deletes all automated database backups. Before disabling this,
   *       you may want to create a snapshot of your database using the <code>create relational database
   *         snapshot</code> operation.</p>
   *          <p>Updates are applied during the next maintenance window because this can result in an
   *       outage.</p>
   */
  disableBackupRetention?: boolean;

  /**
   * <p>Specifies the accessibility options for your database. A value of <code>true</code>
   *       specifies a database that is available to resources outside of your Lightsail account. A
   *       value of <code>false</code> specifies a database that is available only to your Lightsail
   *       resources in the same region as your database.</p>
   */
  publiclyAccessible?: boolean;

  /**
   * <p>When <code>true</code>, applies changes immediately. When <code>false</code>, applies
   *       changes during the preferred maintenance window. Some changes may cause an outage.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  applyImmediately?: boolean;

  /**
   * <p>Indicates the certificate that needs to be associated with the database.</p>
   */
  caCertificateIdentifier?: string;
}

export namespace UpdateRelationalDatabaseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRelationalDatabaseRequest): any => ({
    ...obj,
    ...(obj.masterUserPassword && { masterUserPassword: SENSITIVE_STRING }),
  });
}

export interface UpdateRelationalDatabaseResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace UpdateRelationalDatabaseResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRelationalDatabaseResult): any => ({
    ...obj,
  });
}

export interface UpdateRelationalDatabaseParametersRequest {
  /**
   * <p>The name of your database for which to update parameters.</p>
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The database parameters to update.</p>
   */
  parameters: RelationalDatabaseParameter[] | undefined;
}

export namespace UpdateRelationalDatabaseParametersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRelationalDatabaseParametersRequest): any => ({
    ...obj,
  });
}

export interface UpdateRelationalDatabaseParametersResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace UpdateRelationalDatabaseParametersResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRelationalDatabaseParametersResult): any => ({
    ...obj,
  });
}

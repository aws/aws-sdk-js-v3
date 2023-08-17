// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { LightsailServiceException as __BaseException } from "./LightsailServiceException";

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const AccessDirection = {
  inbound: "inbound",
  outbound: "outbound",
} as const;

/**
 * @public
 */
export type AccessDirection = (typeof AccessDirection)[keyof typeof AccessDirection];

/**
 * @public
 * <p>Describes the last time an access key was used.</p>
 *          <note>
 *             <p>This object does not include data in the response of a <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action.</p>
 *          </note>
 */
export interface AccessKeyLastUsed {
  /**
   * @public
   * <p>The date and time when the access key was most recently used.</p>
   *          <p>This value is null if the access key has not been used.</p>
   */
  lastUsedDate?: Date;

  /**
   * @public
   * <p>The Amazon Web Services Region where this access key was most recently used.</p>
   *          <p>This value is <code>N/A</code> if the access key has not been used.</p>
   */
  region?: string;

  /**
   * @public
   * <p>The name of the Amazon Web Services service with which this access key was most recently
   *       used.</p>
   *          <p>This value is <code>N/A</code> if the access key has not been used.</p>
   */
  serviceName?: string;
}

/**
 * @public
 * @enum
 */
export const StatusType = {
  Active: "Active",
  Inactive: "Inactive",
} as const;

/**
 * @public
 */
export type StatusType = (typeof StatusType)[keyof typeof StatusType];

/**
 * @public
 * <p>Describes an access key for an Amazon Lightsail bucket.</p>
 *          <p>Access keys grant full programmatic access to the specified bucket and its objects. You
 *       can have a maximum of two access keys per bucket. Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action to create an access key for a specific bucket. For
 *       more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the
 *         <i>Amazon Lightsail Developer Guide</i>.</p>
 *          <important>
 *             <p>The <code>secretAccessKey</code> value is returned only in response to the
 *           <code>CreateBucketAccessKey</code> action. You can get a secret access key only when you
 *         first create an access key; you cannot get the secret access key later. If you lose the
 *         secret access key, you must create a new access key.</p>
 *          </important>
 */
export interface AccessKey {
  /**
   * @public
   * <p>The ID of the access key.</p>
   */
  accessKeyId?: string;

  /**
   * @public
   * <p>The secret access key used to sign requests.</p>
   *          <p>You should store the secret access key in a safe location. We recommend that you delete
   *       the access key if the secret access key is compromised.</p>
   */
  secretAccessKey?: string;

  /**
   * @public
   * <p>The status of the access key.</p>
   *          <p>A status of <code>Active</code> means that the key is valid, while <code>Inactive</code>
   *       means it is not.</p>
   */
  status?: StatusType | string;

  /**
   * @public
   * <p>The timestamp when the access key was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>An object that describes the last time the access key was used.</p>
   *          <note>
   *             <p>This object does not include data in the response of a <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action. If the access key has not been used, the
   *           <code>region</code> and <code>serviceName</code> values are <code>N/A</code>, and the
   *           <code>lastUsedDate</code> value is null.</p>
   *          </note>
   */
  lastUsed?: AccessKeyLastUsed;
}

/**
 * @public
 * <p>Describes an Amazon Lightsail instance that has access to a Lightsail bucket.</p>
 */
export interface ResourceReceivingAccess {
  /**
   * @public
   * <p>The name of the Lightsail instance.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Lightsail resource type (for example, <code>Instance</code>).</p>
   */
  resourceType?: string;
}

/**
 * @public
 * @enum
 */
export const AccessType = {
  Private: "private",
  Public: "public",
} as const;

/**
 * @public
 */
export type AccessType = (typeof AccessType)[keyof typeof AccessType];

/**
 * @public
 * <p>Describes the anonymous access permissions for an Amazon Lightsail bucket and its
 *       objects.</p>
 *          <p>For more information about bucket access permissions, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-understanding-bucket-permissions">Understanding bucket permissions in Amazon Lightsail</a> in the </p>
 *          <p>
 *             <i>Amazon Lightsail Developer Guide</i>.</p>
 */
export interface AccessRules {
  /**
   * @public
   * <p>Specifies the anonymous access to all objects in a bucket.</p>
   *          <p>The following options can be specified:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>public</code> - Sets all objects in the bucket to public (read-only), making
   *           them readable by anyone in the world.</p>
   *                <p>If the <code>getObject</code> value is set to <code>public</code>, then all objects in
   *           the bucket default to public regardless of the <code>allowPublicOverrides</code>
   *           value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private</code> - Sets all objects in the bucket to private, making them readable
   *           only by you or anyone you give access to.</p>
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
   * @public
   * <p>A Boolean value that indicates whether the access control list (ACL) permissions that are
   *       applied to individual objects override the <code>getObject</code> option that is currently
   *       specified.</p>
   *          <p>When this is true, you can use the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html">PutObjectAcl</a> Amazon S3 API action to set
   *       individual objects to public (read-only) using the <code>public-read</code> ACL, or to private
   *       using the <code>private</code> ACL.</p>
   */
  allowPublicOverrides?: boolean;
}

/**
 * @public
 * @enum
 */
export const BPAStatusMessage = {
  DEFAULTED_FOR_SLR_MISSING: "DEFAULTED_FOR_SLR_MISSING",
  DEFAULTED_FOR_SLR_MISSING_ON_HOLD: "DEFAULTED_FOR_SLR_MISSING_ON_HOLD",
  SYNC_ON_HOLD: "SYNC_ON_HOLD",
  Unknown: "Unknown",
} as const;

/**
 * @public
 */
export type BPAStatusMessage = (typeof BPAStatusMessage)[keyof typeof BPAStatusMessage];

/**
 * @public
 * @enum
 */
export const AccountLevelBpaSyncStatus = {
  Defaulted: "Defaulted",
  Failed: "Failed",
  InSync: "InSync",
  NeverSynced: "NeverSynced",
} as const;

/**
 * @public
 */
export type AccountLevelBpaSyncStatus = (typeof AccountLevelBpaSyncStatus)[keyof typeof AccountLevelBpaSyncStatus];

/**
 * @public
 * <p>Describes the synchronization status of the Amazon Simple Storage Service (Amazon S3)
 *       account-level block public access (BPA) feature for your Lightsail buckets.</p>
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
   * @public
   * <p>The status of the account-level BPA synchronization.</p>
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
   * @public
   * <p>The timestamp of when the account-level BPA configuration was last synchronized. This
   *       value is null when the account-level BPA configuration has not been synchronized.</p>
   */
  lastSyncedAt?: Date;

  /**
   * @public
   * <p>A message that provides a reason for a <code>Failed</code> or <code>Defaulted</code>
   *       synchronization status.</p>
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
   * @public
   * <p>A Boolean value that indicates whether account-level block public access is affecting your
   *         Lightsail buckets.</p>
   */
  bpaImpactsLightsail?: boolean;
}

/**
 * @public
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
 * @public
 * <p>Describes an add-on that is enabled for an Amazon Lightsail resource.</p>
 */
export interface AddOn {
  /**
   * @public
   * <p>The name of the add-on.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The status of the add-on.</p>
   */
  status?: string;

  /**
   * @public
   * <p>The daily time when an automatic snapshot is created.</p>
   *          <p>The time shown is in <code>HH:00</code> format, and in Coordinated Universal Time
   *       (UTC).</p>
   *          <p>The snapshot is automatically created between the time shown and up to 45 minutes
   *       after.</p>
   */
  snapshotTimeOfDay?: string;

  /**
   * @public
   * <p>The next daily time an automatic snapshot will be created.</p>
   *          <p>The time shown is in <code>HH:00</code> format, and in Coordinated Universal Time
   *       (UTC).</p>
   *          <p>The snapshot is automatically created between the time shown and up to 45 minutes
   *       after.</p>
   */
  nextSnapshotTimeOfDay?: string;

  /**
   * @public
   * <p>The trigger threshold of the action.</p>
   *          <important>
   *             <p>This add-on only applies to Lightsail for Research resources.</p>
   *          </important>
   */
  threshold?: string;

  /**
   * @public
   * <p>The amount of idle time in minutes after which your virtual computer will automatically stop.</p>
   *          <important>
   *             <p>This add-on only applies to Lightsail for Research resources.</p>
   *          </important>
   */
  duration?: string;
}

/**
 * @public
 * @enum
 */
export const AddOnType = {
  AutoSnapshot: "AutoSnapshot",
  StopInstanceOnIdle: "StopInstanceOnIdle",
} as const;

/**
 * @public
 */
export type AddOnType = (typeof AddOnType)[keyof typeof AddOnType];

/**
 * @public
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
   * @public
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

/**
 * @public
 * <p>Describes a request to create or edit the <code>StopInstanceOnIdle</code> add-on.</p>
 *          <important>
 *             <p>This add-on only applies to Lightsail for Research resources.</p>
 *          </important>
 */
export interface StopInstanceOnIdleRequest {
  /**
   * @public
   * <p>The value to compare with the duration.</p>
   */
  threshold?: string;

  /**
   * @public
   * <p>The amount of idle time in minutes after which your virtual computer will automatically stop.</p>
   */
  duration?: string;
}

/**
 * @public
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
   * @public
   * <p>The add-on type.</p>
   */
  addOnType: AddOnType | string | undefined;

  /**
   * @public
   * <p>An object that represents additional parameters when enabling or modifying the automatic
   *       snapshot add-on.</p>
   */
  autoSnapshotAddOnRequest?: AutoSnapshotAddOnRequest;

  /**
   * @public
   * <p>An object that represents additional parameters when enabling or modifying the
   *         <code>StopInstanceOnIdle</code> add-on.</p>
   *          <important>
   *             <p>This object only applies to Lightsail for Research resources.</p>
   *          </important>
   */
  stopInstanceOnIdleRequest?: StopInstanceOnIdleRequest;
}

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  GreaterThanOrEqualToThreshold: "GreaterThanOrEqualToThreshold",
  GreaterThanThreshold: "GreaterThanThreshold",
  LessThanOrEqualToThreshold: "LessThanOrEqualToThreshold",
  LessThanThreshold: "LessThanThreshold",
} as const;

/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * @enum
 */
export const ContactProtocol = {
  Email: "Email",
  SMS: "SMS",
} as const;

/**
 * @public
 */
export type ContactProtocol = (typeof ContactProtocol)[keyof typeof ContactProtocol];

/**
 * @public
 * @enum
 */
export const RegionName = {
  AP_NORTHEAST_1: "ap-northeast-1",
  AP_NORTHEAST_2: "ap-northeast-2",
  AP_SOUTHEAST_1: "ap-southeast-1",
  AP_SOUTHEAST_2: "ap-southeast-2",
  AP_SOUTH_1: "ap-south-1",
  CA_CENTRAL_1: "ca-central-1",
  EU_CENTRAL_1: "eu-central-1",
  EU_NORTH_1: "eu-north-1",
  EU_WEST_1: "eu-west-1",
  EU_WEST_2: "eu-west-2",
  EU_WEST_3: "eu-west-3",
  US_EAST_1: "us-east-1",
  US_EAST_2: "us-east-2",
  US_WEST_1: "us-west-1",
  US_WEST_2: "us-west-2",
} as const;

/**
 * @public
 */
export type RegionName = (typeof RegionName)[keyof typeof RegionName];

/**
 * @public
 * <p>Describes the resource location.</p>
 */
export interface ResourceLocation {
  /**
   * @public
   * <p>The Availability Zone. Follows the format <code>us-east-2a</code> (case-sensitive).</p>
   */
  availabilityZone?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region name.</p>
   */
  regionName?: RegionName | string;
}

/**
 * @public
 * @enum
 */
export const MetricName = {
  BurstCapacityPercentage: "BurstCapacityPercentage",
  BurstCapacityTime: "BurstCapacityTime",
  CPUUtilization: "CPUUtilization",
  ClientTLSNegotiationErrorCount: "ClientTLSNegotiationErrorCount",
  DatabaseConnections: "DatabaseConnections",
  DiskQueueDepth: "DiskQueueDepth",
  FreeStorageSpace: "FreeStorageSpace",
  HTTPCode_Instance_2XX_Count: "HTTPCode_Instance_2XX_Count",
  HTTPCode_Instance_3XX_Count: "HTTPCode_Instance_3XX_Count",
  HTTPCode_Instance_4XX_Count: "HTTPCode_Instance_4XX_Count",
  HTTPCode_Instance_5XX_Count: "HTTPCode_Instance_5XX_Count",
  HTTPCode_LB_4XX_Count: "HTTPCode_LB_4XX_Count",
  HTTPCode_LB_5XX_Count: "HTTPCode_LB_5XX_Count",
  HealthyHostCount: "HealthyHostCount",
  InstanceResponseTime: "InstanceResponseTime",
  NetworkIn: "NetworkIn",
  NetworkOut: "NetworkOut",
  NetworkReceiveThroughput: "NetworkReceiveThroughput",
  NetworkTransmitThroughput: "NetworkTransmitThroughput",
  RejectedConnectionCount: "RejectedConnectionCount",
  RequestCount: "RequestCount",
  StatusCheckFailed: "StatusCheckFailed",
  StatusCheckFailed_Instance: "StatusCheckFailed_Instance",
  StatusCheckFailed_System: "StatusCheckFailed_System",
  UnhealthyHostCount: "UnhealthyHostCount",
} as const;

/**
 * @public
 */
export type MetricName = (typeof MetricName)[keyof typeof MetricName];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  Alarm: "Alarm",
  Bucket: "Bucket",
  Certificate: "Certificate",
  CloudFormationStackRecord: "CloudFormationStackRecord",
  ContactMethod: "ContactMethod",
  ContainerService: "ContainerService",
  Disk: "Disk",
  DiskSnapshot: "DiskSnapshot",
  Distribution: "Distribution",
  Domain: "Domain",
  ExportSnapshotRecord: "ExportSnapshotRecord",
  Instance: "Instance",
  InstanceSnapshot: "InstanceSnapshot",
  KeyPair: "KeyPair",
  LoadBalancer: "LoadBalancer",
  LoadBalancerTlsCertificate: "LoadBalancerTlsCertificate",
  PeeredVpc: "PeeredVpc",
  RelationalDatabase: "RelationalDatabase",
  RelationalDatabaseSnapshot: "RelationalDatabaseSnapshot",
  StaticIp: "StaticIp",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * <p>Describes resource being monitored by an alarm.</p>
 *          <p>An alarm is a way to monitor your Amazon Lightsail resource metrics. For more information,
 *       see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms
 *         in Amazon Lightsail</a>.</p>
 */
export interface MonitoredResourceInfo {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource being monitored.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the Lightsail resource being monitored.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Lightsail resource type of the resource being monitored.</p>
   *          <p>Instances, load balancers, and relational databases are the only Lightsail resources
   *       that can currently be monitored by alarms.</p>
   */
  resourceType?: ResourceType | string;
}

/**
 * @public
 * @enum
 */
export const AlarmState = {
  ALARM: "ALARM",
  INSUFFICIENT_DATA: "INSUFFICIENT_DATA",
  OK: "OK",
} as const;

/**
 * @public
 */
export type AlarmState = (typeof AlarmState)[keyof typeof AlarmState];

/**
 * @public
 * @enum
 */
export const MetricStatistic = {
  Average: "Average",
  Maximum: "Maximum",
  Minimum: "Minimum",
  SampleCount: "SampleCount",
  Sum: "Sum",
} as const;

/**
 * @public
 */
export type MetricStatistic = (typeof MetricStatistic)[keyof typeof MetricStatistic];

/**
 * @public
 * @enum
 */
export const TreatMissingData = {
  Breaching: "breaching",
  Ignore: "ignore",
  Missing: "missing",
  NotBreaching: "notBreaching",
} as const;

/**
 * @public
 */
export type TreatMissingData = (typeof TreatMissingData)[keyof typeof TreatMissingData];

/**
 * @public
 * @enum
 */
export const MetricUnit = {
  Bits: "Bits",
  BitsSecond: "Bits/Second",
  Bytes: "Bytes",
  BytesSecond: "Bytes/Second",
  Count: "Count",
  CountSecond: "Count/Second",
  Gigabits: "Gigabits",
  GigabitsSecond: "Gigabits/Second",
  Gigabytes: "Gigabytes",
  GigabytesSecond: "Gigabytes/Second",
  Kilobits: "Kilobits",
  KilobitsSecond: "Kilobits/Second",
  Kilobytes: "Kilobytes",
  KilobytesSecond: "Kilobytes/Second",
  Megabits: "Megabits",
  MegabitsSecond: "Megabits/Second",
  Megabytes: "Megabytes",
  MegabytesSecond: "Megabytes/Second",
  Microseconds: "Microseconds",
  Milliseconds: "Milliseconds",
  None: "None",
  Percent: "Percent",
  Seconds: "Seconds",
  Terabits: "Terabits",
  TerabitsSecond: "Terabits/Second",
  Terabytes: "Terabytes",
  TerabytesSecond: "Terabytes/Second",
} as const;

/**
 * @public
 */
export type MetricUnit = (typeof MetricUnit)[keyof typeof MetricUnit];

/**
 * @public
 * <p>Describes an alarm.</p>
 *          <p>An alarm is a way to monitor your Lightsail resource metrics. For more information, see
 *         <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
 */
export interface Alarm {
  /**
   * @public
   * <p>The name of the alarm.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the alarm.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The timestamp when the alarm was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>An object that lists information about the location of the alarm.</p>
   */
  location?: ResourceLocation;

  /**
   * @public
   * <p>The Lightsail resource type (e.g., <code>Alarm</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * @public
   * <p>The support code. Include this code in your email to support when you have questions about
   *       your Lightsail alarm. This code enables our support team to look up your Lightsail
   *       information more easily.</p>
   */
  supportCode?: string;

  /**
   * @public
   * <p>An object that lists information about the resource monitored by the alarm.</p>
   */
  monitoredResourceInfo?: MonitoredResourceInfo;

  /**
   * @public
   * <p>The arithmetic operation used when comparing the specified statistic and threshold.</p>
   */
  comparisonOperator?: ComparisonOperator | string;

  /**
   * @public
   * <p>The number of periods over which data is compared to the specified threshold.</p>
   */
  evaluationPeriods?: number;

  /**
   * @public
   * <p>The period, in seconds, over which the statistic is applied.</p>
   */
  period?: number;

  /**
   * @public
   * <p>The value against which the specified statistic is compared.</p>
   */
  threshold?: number;

  /**
   * @public
   * <p>The number of data points that must not within the specified threshold to trigger the
   *       alarm.</p>
   */
  datapointsToAlarm?: number;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>The name of the metric associated with the alarm.</p>
   */
  metricName?: MetricName | string;

  /**
   * @public
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
   * @public
   * <p>The unit of the metric associated with the alarm.</p>
   */
  unit?: MetricUnit | string;

  /**
   * @public
   * <p>The contact protocols for the alarm, such as <code>Email</code>, <code>SMS</code> (text
   *       messaging), or both.</p>
   */
  contactProtocols?: (ContactProtocol | string)[];

  /**
   * @public
   * <p>The alarm states that trigger a notification.</p>
   */
  notificationTriggers?: (AlarmState | string)[];

  /**
   * @public
   * <p>Indicates whether the alarm is enabled.</p>
   */
  notificationEnabled?: boolean;
}

/**
 * @public
 */
export interface AllocateStaticIpRequest {
  /**
   * @public
   * <p>The name of the static IP address.</p>
   */
  staticIpName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OperationType = {
  AllocateStaticIp: "AllocateStaticIp",
  AttachCertificateToDistribution: "AttachCertificateToDistribution",
  AttachDisk: "AttachDisk",
  AttachInstancesToLoadBalancer: "AttachInstancesToLoadBalancer",
  AttachLoadBalancerTlsCertificate: "AttachLoadBalancerTlsCertificate",
  AttachStaticIp: "AttachStaticIp",
  CloseInstancePublicPorts: "CloseInstancePublicPorts",
  CreateBucket: "CreateBucket",
  CreateBucketAccessKey: "CreateBucketAccessKey",
  CreateCertificate: "CreateCertificate",
  CreateContactMethod: "CreateContactMethod",
  CreateContainerService: "CreateContainerService",
  CreateContainerServiceDeployment: "CreateContainerServiceDeployment",
  CreateContainerServiceRegistryLogin: "CreateContainerServiceRegistryLogin",
  CreateDisk: "CreateDisk",
  CreateDiskFromSnapshot: "CreateDiskFromSnapshot",
  CreateDiskSnapshot: "CreateDiskSnapshot",
  CreateDistribution: "CreateDistribution",
  CreateDomain: "CreateDomain",
  CreateInstance: "CreateInstance",
  CreateInstanceSnapshot: "CreateInstanceSnapshot",
  CreateInstancesFromSnapshot: "CreateInstancesFromSnapshot",
  CreateLoadBalancer: "CreateLoadBalancer",
  CreateLoadBalancerTlsCertificate: "CreateLoadBalancerTlsCertificate",
  CreateRelationalDatabase: "CreateRelationalDatabase",
  CreateRelationalDatabaseFromSnapshot: "CreateRelationalDatabaseFromSnapshot",
  CreateRelationalDatabaseSnapshot: "CreateRelationalDatabaseSnapshot",
  DeleteAlarm: "DeleteAlarm",
  DeleteBucket: "DeleteBucket",
  DeleteBucketAccessKey: "DeleteBucketAccessKey",
  DeleteCertificate: "DeleteCertificate",
  DeleteContactMethod: "DeleteContactMethod",
  DeleteContainerImage: "DeleteContainerImage",
  DeleteContainerService: "DeleteContainerService",
  DeleteDisk: "DeleteDisk",
  DeleteDiskSnapshot: "DeleteDiskSnapshot",
  DeleteDistribution: "DeleteDistribution",
  DeleteDomain: "DeleteDomain",
  DeleteDomainEntry: "DeleteDomainEntry",
  DeleteInstance: "DeleteInstance",
  DeleteInstanceSnapshot: "DeleteInstanceSnapshot",
  DeleteKnownHostKeys: "DeleteKnownHostKeys",
  DeleteLoadBalancer: "DeleteLoadBalancer",
  DeleteLoadBalancerTlsCertificate: "DeleteLoadBalancerTlsCertificate",
  DeleteRelationalDatabase: "DeleteRelationalDatabase",
  DeleteRelationalDatabaseSnapshot: "DeleteRelationalDatabaseSnapshot",
  DetachCertificateFromDistribution: "DetachCertificateFromDistribution",
  DetachDisk: "DetachDisk",
  DetachInstancesFromLoadBalancer: "DetachInstancesFromLoadBalancer",
  DetachStaticIp: "DetachStaticIp",
  DisableAddOn: "DisableAddOn",
  EnableAddOn: "EnableAddOn",
  GetAlarms: "GetAlarms",
  GetContactMethods: "GetContactMethods",
  OpenInstancePublicPorts: "OpenInstancePublicPorts",
  PutAlarm: "PutAlarm",
  PutInstancePublicPorts: "PutInstancePublicPorts",
  RebootInstance: "RebootInstance",
  RebootRelationalDatabase: "RebootRelationalDatabase",
  RegisterContainerImage: "RegisterContainerImage",
  ReleaseStaticIp: "ReleaseStaticIp",
  ResetDistributionCache: "ResetDistributionCache",
  SendContactMethodVerification: "SendContactMethodVerification",
  SetIpAddressType: "SetIpAddressType",
  SetResourceAccessForBucket: "SetResourceAccessForBucket",
  StartGUISession: "StartGUISession",
  StartInstance: "StartInstance",
  StartRelationalDatabase: "StartRelationalDatabase",
  StopGUISession: "StopGUISession",
  StopInstance: "StopInstance",
  StopRelationalDatabase: "StopRelationalDatabase",
  TestAlarm: "TestAlarm",
  UpdateBucket: "UpdateBucket",
  UpdateBucketBundle: "UpdateBucketBundle",
  UpdateContainerService: "UpdateContainerService",
  UpdateDistribution: "UpdateDistribution",
  UpdateDistributionBundle: "UpdateDistributionBundle",
  UpdateDomainEntry: "UpdateDomainEntry",
  UpdateInstanceMetadataOptions: "UpdateInstanceMetadataOptions",
  UpdateLoadBalancerAttribute: "UpdateLoadBalancerAttribute",
  UpdateRelationalDatabase: "UpdateRelationalDatabase",
  UpdateRelationalDatabaseParameters: "UpdateRelationalDatabaseParameters",
} as const;

/**
 * @public
 */
export type OperationType = (typeof OperationType)[keyof typeof OperationType];

/**
 * @public
 * @enum
 */
export const OperationStatus = {
  Completed: "Completed",
  Failed: "Failed",
  NotStarted: "NotStarted",
  Started: "Started",
  Succeeded: "Succeeded",
} as const;

/**
 * @public
 */
export type OperationStatus = (typeof OperationStatus)[keyof typeof OperationStatus];

/**
 * @public
 * <p>Describes the API operation.</p>
 */
export interface Operation {
  /**
   * @public
   * <p>The ID of the operation.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The resource name.</p>
   */
  resourceName?: string;

  /**
   * @public
   * <p>The resource type. </p>
   */
  resourceType?: ResourceType | string;

  /**
   * @public
   * <p>The timestamp when the operation was initialized (e.g.,
   *       <code>1479816991.349</code>).</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Amazon Web Services Region and Availability Zone.</p>
   */
  location?: ResourceLocation;

  /**
   * @public
   * <p>A Boolean value indicating whether the operation is terminal.</p>
   */
  isTerminal?: boolean;

  /**
   * @public
   * <p>Details about the operation (e.g., <code>Debian-1GB-Ohio-1</code>).</p>
   */
  operationDetails?: string;

  /**
   * @public
   * <p>The type of operation. </p>
   */
  operationType?: OperationType | string;

  /**
   * @public
   * <p>The status of the operation. </p>
   */
  status?: OperationStatus | string;

  /**
   * @public
   * <p>The timestamp when the status was changed (e.g., <code>1479816991.349</code>).</p>
   */
  statusChangedAt?: Date;

  /**
   * @public
   * <p>The error code.</p>
   */
  errorCode?: string;

  /**
   * @public
   * <p>The error details.</p>
   */
  errorDetails?: string;
}

/**
 * @public
 */
export interface AllocateStaticIpResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
 * @enum
 */
export const AppCategory = {
  LfR: "LfR",
} as const;

/**
 * @public
 */
export type AppCategory = (typeof AppCategory)[keyof typeof AppCategory];

/**
 * @public
 */
export interface AttachCertificateToDistributionRequest {
  /**
   * @public
   * <p>The name of the distribution that the certificate will be attached to.</p>
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   */
  distributionName: string | undefined;

  /**
   * @public
   * <p>The name of the certificate to attach to a distribution.</p>
   *          <p>Only certificates with a status of <code>ISSUED</code> can be attached to a
   *       distribution.</p>
   *          <p>Use the <code>GetCertificates</code> action to get a list of certificate names that you
   *       can specify.</p>
   *          <note>
   *             <p>This is the name of the certificate resource type and is used only to reference the
   *         certificate in other API actions. It can be different than the domain name of the
   *         certificate. For example, your certificate name might be
   *           <code>WordPress-Blog-Certificate</code> and the domain name of the certificate might be
   *           <code>example.com</code>.</p>
   *          </note>
   */
  certificateName: string | undefined;
}

/**
 * @public
 */
export interface AttachCertificateToDistributionResult {
  /**
   * @public
   * <p>An object that describes the result of the action, such as the status of the request, the
   *       timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

/**
 * @public
 */
export interface AttachDiskRequest {
  /**
   * @public
   * <p>The unique Lightsail disk name (e.g., <code>my-disk</code>).</p>
   */
  diskName: string | undefined;

  /**
   * @public
   * <p>The name of the Lightsail instance where you want to utilize the storage disk.</p>
   */
  instanceName: string | undefined;

  /**
   * @public
   * <p>The disk path to expose to the instance (e.g., <code>/dev/xvdf</code>).</p>
   */
  diskPath: string | undefined;

  /**
   * @public
   * <p>A Boolean value used to determine the automatic mounting of a storage volume to a virtual
   *       computer. The default value is <code>False</code>.</p>
   *          <important>
   *             <p>This value only applies to Lightsail for Research resources.</p>
   *          </important>
   */
  autoMounting?: boolean;
}

/**
 * @public
 */
export interface AttachDiskResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 * <p>Describes a block storage disk that is attached to an instance, and is included in an
 *       automatic snapshot.</p>
 */
export interface AttachedDisk {
  /**
   * @public
   * <p>The path of the disk (e.g., <code>/dev/xvdf</code>).</p>
   */
  path?: string;

  /**
   * @public
   * <p>The size of the disk in GB.</p>
   */
  sizeInGb?: number;
}

/**
 * @public
 * <p>Describes a block storage disk mapping.</p>
 */
export interface DiskMap {
  /**
   * @public
   * <p>The original disk path exposed to the instance (for example,
   *       <code>/dev/sdh</code>).</p>
   */
  originalDiskPath?: string;

  /**
   * @public
   * <p>The new disk name (e.g., <code>my-new-disk</code>).</p>
   */
  newDiskName?: string;
}

/**
 * @public
 */
export interface AttachInstancesToLoadBalancerRequest {
  /**
   * @public
   * <p>The name of the load balancer.</p>
   */
  loadBalancerName: string | undefined;

  /**
   * @public
   * <p>An array of strings representing the instance name(s) you want to attach to your load
   *       balancer.</p>
   *          <p>An instance must be <code>running</code> before you can attach it to your load
   *       balancer.</p>
   *          <p>There are no additional limits on the number of instances you can attach to your load
   *       balancer, aside from the limit of Lightsail instances you can create in your account
   *       (20).</p>
   */
  instanceNames: string[] | undefined;
}

/**
 * @public
 */
export interface AttachInstancesToLoadBalancerResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface AttachLoadBalancerTlsCertificateRequest {
  /**
   * @public
   * <p>The name of the load balancer to which you want to associate the SSL/TLS
   *       certificate.</p>
   */
  loadBalancerName: string | undefined;

  /**
   * @public
   * <p>The name of your SSL/TLS certificate.</p>
   */
  certificateName: string | undefined;
}

/**
 * @public
 */
export interface AttachLoadBalancerTlsCertificateResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   *          <p>These SSL/TLS certificates are only usable by Lightsail load balancers. You can't get
   *       the certificate and use it for another purpose.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface AttachStaticIpRequest {
  /**
   * @public
   * <p>The name of the static IP.</p>
   */
  staticIpName: string | undefined;

  /**
   * @public
   * <p>The instance name to which you want to attach the static IP address.</p>
   */
  instanceName: string | undefined;
}

/**
 * @public
 */
export interface AttachStaticIpResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 * @enum
 */
export const AutoMountStatus = {
  Failed: "Failed",
  Mounted: "Mounted",
  NotMounted: "NotMounted",
  Pending: "Pending",
} as const;

/**
 * @public
 */
export type AutoMountStatus = (typeof AutoMountStatus)[keyof typeof AutoMountStatus];

/**
 * @public
 * @enum
 */
export const AutoSnapshotStatus = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  NOT_FOUND: "NotFound",
  SUCCESS: "Success",
} as const;

/**
 * @public
 */
export type AutoSnapshotStatus = (typeof AutoSnapshotStatus)[keyof typeof AutoSnapshotStatus];

/**
 * @public
 * <p>Describes an automatic snapshot.</p>
 */
export interface AutoSnapshotDetails {
  /**
   * @public
   * <p>The date of the automatic snapshot in <code>YYYY-MM-DD</code> format.</p>
   */
  date?: string;

  /**
   * @public
   * <p>The timestamp when the automatic snapshot was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The status of the automatic snapshot.</p>
   */
  status?: AutoSnapshotStatus | string;

  /**
   * @public
   * <p>An array of objects that describe the block storage disks attached to the instance when
   *       the automatic snapshot was created.</p>
   */
  fromAttachedDisks?: AttachedDisk[];
}

/**
 * @public
 * <p>Describes an Availability Zone. This is returned only as part of a <code>GetRegions</code>
 *       request.</p>
 */
export interface AvailabilityZone {
  /**
   * @public
   * <p>The name of the Availability Zone. The format is <code>us-east-2a</code>
   *       (case-sensitive).</p>
   */
  zoneName?: string;

  /**
   * @public
   * <p>The state of the Availability Zone.</p>
   */
  state?: string;
}

/**
 * @public
 * @enum
 */
export const BehaviorEnum = {
  CacheSetting: "cache",
  DontCacheSetting: "dont-cache",
} as const;

/**
 * @public
 */
export type BehaviorEnum = (typeof BehaviorEnum)[keyof typeof BehaviorEnum];

/**
 * @public
 * @enum
 */
export const InstancePlatform = {
  LinuxUnix: "LINUX_UNIX",
  Windows: "WINDOWS",
} as const;

/**
 * @public
 */
export type InstancePlatform = (typeof InstancePlatform)[keyof typeof InstancePlatform];

/**
 * @public
 * @enum
 */
export const BlueprintType = {
  app: "app",
  os: "os",
} as const;

/**
 * @public
 */
export type BlueprintType = (typeof BlueprintType)[keyof typeof BlueprintType];

/**
 * @public
 * <p>Describes a blueprint (a virtual private server image).</p>
 */
export interface Blueprint {
  /**
   * @public
   * <p>The ID for the virtual private server image (e.g., <code>app_wordpress_4_4</code> or
   *         <code>app_lamp_7_0</code>).</p>
   */
  blueprintId?: string;

  /**
   * @public
   * <p>The friendly name of the blueprint (e.g., <code>Amazon Linux</code>).</p>
   */
  name?: string;

  /**
   * @public
   * <p>The group name of the blueprint (e.g., <code>amazon-linux</code>).</p>
   */
  group?: string;

  /**
   * @public
   * <p>The type of the blueprint (e.g., <code>os</code> or <code>app</code>).</p>
   */
  type?: BlueprintType | string;

  /**
   * @public
   * <p>The description of the blueprint.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A Boolean value indicating whether the blueprint is active. Inactive blueprints are listed
   *       to support customers with existing instances but are not necessarily available for launch of
   *       new instances. Blueprints are marked inactive when they become outdated due to operating
   *       system updates or new application releases.</p>
   */
  isActive?: boolean;

  /**
   * @public
   * <p>The minimum bundle power required to run this blueprint. For example, you need a bundle
   *       with a power value of 500 or more to create an instance that uses a blueprint with a minimum
   *       power value of 500. <code>0</code> indicates that the blueprint runs on all instance sizes.
   *     </p>
   */
  minPower?: number;

  /**
   * @public
   * <p>The version number of the operating system, application, or stack (e.g.,
   *         <code>2016.03.0</code>).</p>
   */
  version?: string;

  /**
   * @public
   * <p>The version code.</p>
   */
  versionCode?: string;

  /**
   * @public
   * <p>The product URL to learn more about the image or blueprint.</p>
   */
  productUrl?: string;

  /**
   * @public
   * <p>The end-user license agreement URL for the image or blueprint.</p>
   */
  licenseUrl?: string;

  /**
   * @public
   * <p>The operating system platform (either Linux/Unix-based or Windows Server-based) of the
   *       blueprint.</p>
   */
  platform?: InstancePlatform | string;

  /**
   * @public
   * <p>Virtual computer blueprints that are supported by Lightsail for Research.</p>
   *          <important>
   *             <p>This parameter only applies to Lightsail for Research resources.</p>
   *          </important>
   */
  appCategory?: AppCategory | string;
}

/**
 * @public
 * <p>Describes the access log configuration for a bucket in the Amazon Lightsail object storage
 *       service.</p>
 *          <p>For more information about bucket access logs, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-bucket-access-logs">Logging bucket requests using access logging in Amazon Lightsail</a> in the
 *         <i>Amazon Lightsail Developer Guide</i>.</p>
 */
export interface BucketAccessLogConfig {
  /**
   * @public
   * <p>A Boolean value that indicates whether bucket access logging is enabled for the
   *       bucket.</p>
   */
  enabled: boolean | undefined;

  /**
   * @public
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
   * @public
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

/**
 * @public
 * <p>Describes the state of an Amazon Lightsail bucket.</p>
 */
export interface BucketState {
  /**
   * @public
   * <p>The state code of the bucket.</p>
   *          <p>The following codes are possible:</p>
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
   * @public
   * <p>A message that describes the state of the bucket.</p>
   */
  message?: string;
}

/**
 * @public
 * <p>Describes a tag key and optional value assigned to an Amazon Lightsail resource.</p>
 *          <p>For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key of the tag.</p>
   *          <p>Constraints: Tag keys accept a maximum of 128 letters, numbers, spaces in UTF-8, or the
   *       following characters: + - = . _ : / @</p>
   */
  key?: string;

  /**
   * @public
   * <p>The value of the tag.</p>
   *          <p>Constraints: Tag values accept a maximum of 256 letters, numbers, spaces in UTF-8, or the
   *       following characters: + - = . _ : / @</p>
   */
  value?: string;
}

/**
 * @public
 * <p>Describes an Amazon Lightsail bucket.</p>
 */
export interface Bucket {
  /**
   * @public
   * <p>The Lightsail resource type of the bucket (for example, <code>Bucket</code>).</p>
   */
  resourceType?: string;

  /**
   * @public
   * <p>An object that describes the access rules of the bucket.</p>
   */
  accessRules?: AccessRules;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the bucket.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The ID of the bundle currently applied to the bucket.</p>
   *          <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a
   *       bucket.</p>
   *          <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucketBundle.html">UpdateBucketBundle</a> action to change the
   *       bundle of a bucket.</p>
   */
  bundleId?: string;

  /**
   * @public
   * <p>The timestamp when the distribution was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The URL of the bucket.</p>
   */
  url?: string;

  /**
   * @public
   * <p>An object that describes the location of the bucket, such as the Amazon Web Services Region
   *       and Availability Zone.</p>
   */
  location?: ResourceLocation;

  /**
   * @public
   * <p>The name of the bucket.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The support code for a bucket. Include this code in your email to support when you have
   *       questions about a Lightsail bucket. This code enables our support team to look up your
   *       Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * @public
   * <p>The tag keys and optional values for the bucket. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Tags in
   *         Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>Indicates whether object versioning is enabled for the bucket.</p>
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
   * @public
   * <p>Indicates whether the bundle that is currently applied to a bucket can be changed to
   *       another bundle.</p>
   *          <p>You can update a bucket's bundle only one time within a monthly Amazon Web Services billing
   *       cycle.</p>
   *          <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucketBundle.html">UpdateBucketBundle</a> action to change a
   *       bucket's bundle.</p>
   */
  ableToUpdateBundle?: boolean;

  /**
   * @public
   * <p>An array of strings that specify the Amazon Web Services account IDs that have read-only
   *       access to the bucket.</p>
   */
  readonlyAccessAccounts?: string[];

  /**
   * @public
   * <p>An array of objects that describe Lightsail instances that have access to the
   *       bucket.</p>
   *          <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_SetResourceAccessForBucket.html">SetResourceAccessForBucket</a>
   *       action to update the instances that have access to a bucket.</p>
   */
  resourcesReceivingAccess?: ResourceReceivingAccess[];

  /**
   * @public
   * <p>An object that describes the state of the bucket.</p>
   */
  state?: BucketState;

  /**
   * @public
   * <p>An object that describes the access log configuration for the bucket.</p>
   */
  accessLogConfig?: BucketAccessLogConfig;
}

/**
 * @public
 * <p>Describes the specifications of a bundle that can be applied to an Amazon Lightsail
 *       bucket.</p>
 *          <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a
 *       bucket.</p>
 */
export interface BucketBundle {
  /**
   * @public
   * <p>The ID of the bundle.</p>
   */
  bundleId?: string;

  /**
   * @public
   * <p>The name of the bundle.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The monthly price of the bundle, in US dollars.</p>
   */
  price?: number;

  /**
   * @public
   * <p>The storage size of the bundle, in GB.</p>
   */
  storagePerMonthInGb?: number;

  /**
   * @public
   * <p>The monthly network transfer quota of the bundle.</p>
   */
  transferPerMonthInGb?: number;

  /**
   * @public
   * <p>Indicates whether the bundle is active. Use for a new or existing bucket.</p>
   */
  isActive?: boolean;
}

/**
 * @public
 * @enum
 */
export const BucketMetricName = {
  BucketSizeBytes: "BucketSizeBytes",
  NumberOfObjects: "NumberOfObjects",
} as const;

/**
 * @public
 */
export type BucketMetricName = (typeof BucketMetricName)[keyof typeof BucketMetricName];

/**
 * @public
 * <p>Describes a bundle, which is a set of specs describing your virtual private server (or
 *         <i>instance</i>).</p>
 */
export interface Bundle {
  /**
   * @public
   * <p>The price in US dollars (e.g., <code>5.0</code>) of the bundle.</p>
   */
  price?: number;

  /**
   * @public
   * <p>The number of vCPUs included in the bundle (e.g., <code>2</code>).</p>
   */
  cpuCount?: number;

  /**
   * @public
   * <p>The size of the SSD (e.g., <code>30</code>).</p>
   */
  diskSizeInGb?: number;

  /**
   * @public
   * <p>The bundle ID (e.g., <code>micro_1_0</code>).</p>
   */
  bundleId?: string;

  /**
   * @public
   * <p>The Amazon EC2 instance type (e.g., <code>t2.micro</code>).</p>
   */
  instanceType?: string;

  /**
   * @public
   * <p>A Boolean value indicating whether the bundle is active.</p>
   */
  isActive?: boolean;

  /**
   * @public
   * <p>A friendly name for the bundle (e.g., <code>Micro</code>).</p>
   */
  name?: string;

  /**
   * @public
   * <p>A numeric value that represents the power of the bundle (e.g., <code>500</code>). You can
   *       use the bundle's power value in conjunction with a blueprint's minimum power value to
   *       determine whether the blueprint will run on the bundle. For example, you need a bundle with a
   *       power value of 500 or more to create an instance that uses a blueprint with a minimum power
   *       value of 500.</p>
   */
  power?: number;

  /**
   * @public
   * <p>The amount of RAM in GB (e.g., <code>2.0</code>).</p>
   */
  ramSizeInGb?: number;

  /**
   * @public
   * <p>The data transfer rate per month in GB (e.g., <code>2000</code>).</p>
   */
  transferPerMonthInGb?: number;

  /**
   * @public
   * <p>The operating system platform (Linux/Unix-based or Windows Server-based) that the bundle
   *       supports. You can only launch a <code>WINDOWS</code> bundle on a blueprint that supports the
   *         <code>WINDOWS</code> platform. <code>LINUX_UNIX</code> blueprints require a
   *         <code>LINUX_UNIX</code> bundle.</p>
   */
  supportedPlatforms?: (InstancePlatform | string)[];

  /**
   * @public
   * <p>Virtual computer blueprints that are supported by a Lightsail for Research bundle.</p>
   *          <important>
   *             <p>This parameter only applies to Lightsail for Research resources.</p>
   *          </important>
   */
  supportedAppCategories?: (AppCategory | string)[];
}

/**
 * @public
 * <p>Describes the default cache behavior of an Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 */
export interface CacheBehavior {
  /**
   * @public
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

/**
 * @public
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
   * @public
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
   * @public
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

/**
 * @public
 * @enum
 */
export const ForwardValues = {
  all: "all",
  allowList: "allow-list",
  none: "none",
} as const;

/**
 * @public
 */
export type ForwardValues = (typeof ForwardValues)[keyof typeof ForwardValues];

/**
 * @public
 * <p>Describes whether an Amazon Lightsail content delivery network (CDN) distribution forwards
 *       cookies to the origin and, if so, which ones.</p>
 *          <p>For the cookies that you specify, your distribution caches separate versions of the
 *       specified content based on the cookie values in viewer
 *       requests.</p>
 */
export interface CookieObject {
  /**
   * @public
   * <p>Specifies which cookies to forward to the distribution's origin for a cache behavior:
   *         <code>all</code>, <code>none</code>, or <code>allow-list</code> to forward only the cookies
   *       specified in the <code>cookiesAllowList</code> parameter.</p>
   */
  option?: ForwardValues | string;

  /**
   * @public
   * <p>The specific cookies to forward to your distribution's origin.</p>
   */
  cookiesAllowList?: string[];
}

/**
 * @public
 * @enum
 */
export const HeaderEnum = {
  accept: "Accept",
  acceptCharset: "Accept-Charset",
  acceptDatetime: "Accept-Datetime",
  acceptEncoding: "Accept-Encoding",
  acceptLanguage: "Accept-Language",
  authorization: "Authorization",
  cloudFrontForwardedProto: "CloudFront-Forwarded-Proto",
  cloudFrontIsDesktopViewer: "CloudFront-Is-Desktop-Viewer",
  cloudFrontIsMobileViewer: "CloudFront-Is-Mobile-Viewer",
  cloudFrontIsSmartTVViewer: "CloudFront-Is-SmartTV-Viewer",
  cloudFrontIsTabletViewer: "CloudFront-Is-Tablet-Viewer",
  cloudFrontViewerCountry: "CloudFront-Viewer-Country",
  host: "Host",
  origin: "Origin",
  referer: "Referer",
} as const;

/**
 * @public
 */
export type HeaderEnum = (typeof HeaderEnum)[keyof typeof HeaderEnum];

/**
 * @public
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
   * @public
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
   * @public
   * <p>The specific headers to forward to your distribution's origin.</p>
   */
  headersAllowList?: (HeaderEnum | string)[];
}

/**
 * @public
 * <p>Describes the query string parameters that an Amazon Lightsail content delivery network
 *       (CDN) distribution to bases caching on.</p>
 *          <p>For the query strings that you specify, your distribution caches separate versions of the
 *       specified content based on the query string values in viewer
 *       requests.</p>
 */
export interface QueryStringObject {
  /**
   * @public
   * <p>Indicates whether the distribution forwards and caches based on query strings.</p>
   */
  option?: boolean;

  /**
   * @public
   * <p>The specific query strings that the distribution forwards to the origin.</p>
   *          <p>Your distribution will cache content based on the specified query strings.</p>
   *          <p>If the <code>option</code> parameter is true, then your distribution forwards all query
   *       strings, regardless of what you specify using the <code>queryStringsAllowList</code>
   *       parameter.</p>
   */
  queryStringsAllowList?: string[];
}

/**
 * @public
 * <p>Describes the cache settings of an Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>These settings apply only to your distribution's <code>cacheBehaviors</code> (including
 *       the <code>defaultCacheBehavior</code>) that have a <code>behavior</code> of
 *       <code>cache</code>.</p>
 */
export interface CacheSettings {
  /**
   * @public
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
   * @public
   * <p>The minimum amount of time that objects stay in the distribution's cache before the
   *       distribution forwards another request to the origin to determine whether the object has been
   *       updated.</p>
   *          <p>A value of <code>0</code> must be specified for <code>minimumTTL</code> if the
   *       distribution is configured to forward all headers to the origin.</p>
   */
  minimumTTL?: number;

  /**
   * @public
   * <p>The maximum amount of time that objects stay in the distribution's cache before the
   *       distribution forwards another request to the origin to determine whether the object has been
   *       updated.</p>
   *          <p>The value specified applies only when the origin adds HTTP headers such as
   *         <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and
   *         <code>Expires</code> to objects.</p>
   */
  maximumTTL?: number;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>An object that describes the cookies that are forwarded to the origin. Your content is
   *       cached based on the cookies that are forwarded.</p>
   */
  forwardedCookies?: CookieObject;

  /**
   * @public
   * <p>An object that describes the headers that are forwarded to the origin. Your content is
   *       cached based on the headers that are forwarded.</p>
   */
  forwardedHeaders?: HeaderObject;

  /**
   * @public
   * <p>An object that describes the query strings that are forwarded to the origin. Your content
   *       is cached based on the query strings that are forwarded.</p>
   */
  forwardedQueryStrings?: QueryStringObject;
}

/**
 * @public
 * @enum
 */
export const DnsRecordCreationStateCode = {
  Failed: "FAILED",
  Started: "STARTED",
  Succeeded: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type DnsRecordCreationStateCode = (typeof DnsRecordCreationStateCode)[keyof typeof DnsRecordCreationStateCode];

/**
 * @public
 * <p>Describes the creation state of the canonical name (CNAME) records that are automatically
 *       added by Amazon Lightsail to the DNS of a domain to validate domain ownership for
 *       an SSL/TLS certificate.</p>
 *          <p>When you create an SSL/TLS certificate for a Lightsail resource, you must
 *       add a set of CNAME records to the DNS of the domains for the certificate to validate that you
 *       own the domains. Lightsail can automatically add the CNAME records to the DNS
 *       of the domain if the DNS zone for the domain exists within your Lightsail
 *       account. If automatic record addition fails, or if you manage the DNS of your domain using a
 *       third-party service, then you must manually add the CNAME records to the DNS of your domain.
 *       For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/verify-tls-ssl-certificate-using-dns-cname-https">Verify an SSL/TLS certificate in Amazon Lightsail</a> in the
 *           <i>Amazon Lightsail Developer Guide</i>.</p>
 */
export interface DnsRecordCreationState {
  /**
   * @public
   * <p>The status code for the automated DNS record creation.</p>
   *          <p>Following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code> - The validation records were successfully added to the
   *           domain.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STARTED</code> - The automatic DNS record creation has started.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The validation records failed to be added to the domain.</p>
   *             </li>
   *          </ul>
   */
  code?: DnsRecordCreationStateCode | string;

  /**
   * @public
   * <p>The message that describes the reason for the status code.</p>
   */
  message?: string;
}

/**
 * @public
 * <p>Describes the domain name system (DNS) records to add to your domain's DNS to validate it
 *       for an Amazon Lightsail certificate.</p>
 */
export interface ResourceRecord {
  /**
   * @public
   * <p>The name of the record.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The DNS record type.</p>
   */
  type?: string;

  /**
   * @public
   * <p>The value for the DNS record.</p>
   */
  value?: string;
}

/**
 * @public
 * @enum
 */
export const CertificateDomainValidationStatus = {
  Failed: "FAILED",
  PendingValidation: "PENDING_VALIDATION",
  Success: "SUCCESS",
} as const;

/**
 * @public
 */
export type CertificateDomainValidationStatus =
  (typeof CertificateDomainValidationStatus)[keyof typeof CertificateDomainValidationStatus];

/**
 * @public
 * <p>Describes the domain name system (DNS) records that you must add to the DNS of your
 *       registered domain to validate ownership for an Amazon Lightsail SSL/TLS certificate.</p>
 */
export interface DomainValidationRecord {
  /**
   * @public
   * <p>The domain name of the certificate validation record. For example,
   *         <code>example.com</code> or <code>www.example.com</code>.</p>
   */
  domainName?: string;

  /**
   * @public
   * <p>An object that describes the DNS records to add to your domain's DNS to validate it for
   *       the certificate.</p>
   */
  resourceRecord?: ResourceRecord;

  /**
   * @public
   * <p>An object that describes the state of the canonical name (CNAME) records that are
   *       automatically added by Lightsail to the DNS of the domain to validate domain
   *       ownership.</p>
   */
  dnsRecordCreationState?: DnsRecordCreationState;

  /**
   * @public
   * <p>The validation status of the record.</p>
   */
  validationStatus?: CertificateDomainValidationStatus | string;
}

/**
 * @public
 * @enum
 */
export const RenewalStatus = {
  Failed: "Failed",
  PendingAutoRenewal: "PendingAutoRenewal",
  PendingValidation: "PendingValidation",
  Success: "Success",
} as const;

/**
 * @public
 */
export type RenewalStatus = (typeof RenewalStatus)[keyof typeof RenewalStatus];

/**
 * @public
 * <p>Describes the status of a SSL/TLS certificate renewal managed by Amazon Lightsail.</p>
 */
export interface RenewalSummary {
  /**
   * @public
   * <p>An array of objects that describe the domain validation records of the certificate.</p>
   */
  domainValidationRecords?: DomainValidationRecord[];

  /**
   * @public
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
   * @public
   * <p>The reason for the renewal status of the certificate.</p>
   */
  renewalStatusReason?: string;

  /**
   * @public
   * <p>The timestamp when the certificate was last updated.</p>
   */
  updatedAt?: Date;
}

/**
 * @public
 * @enum
 */
export const CertificateStatus = {
  Expired: "EXPIRED",
  Failed: "FAILED",
  Inactive: "INACTIVE",
  Issued: "ISSUED",
  PendingValidation: "PENDING_VALIDATION",
  Revoked: "REVOKED",
  ValidationTimedOut: "VALIDATION_TIMED_OUT",
} as const;

/**
 * @public
 */
export type CertificateStatus = (typeof CertificateStatus)[keyof typeof CertificateStatus];

/**
 * @public
 * <p>Describes the full details of an Amazon Lightsail SSL/TLS certificate.</p>
 *          <note>
 *             <p>To get a summary of a certificate, use the <code>GetCertificates</code> action and omit
 *           <code>includeCertificateDetails</code> from your request. The response will include only
 *         the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.</p>
 *          </note>
 */
export interface Certificate {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the certificate.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the certificate (e.g., <code>my-certificate</code>).</p>
   */
  name?: string;

  /**
   * @public
   * <p>The domain name of the certificate.</p>
   */
  domainName?: string;

  /**
   * @public
   * <p>The validation status of the certificate.</p>
   */
  status?: CertificateStatus | string;

  /**
   * @public
   * <p>The serial number of the certificate.</p>
   */
  serialNumber?: string;

  /**
   * @public
   * <p>An array of strings that specify the alternate domains (e.g., <code>example2.com</code>)
   *       and subdomains (e.g., <code>blog.example.com</code>) of the certificate.</p>
   */
  subjectAlternativeNames?: string[];

  /**
   * @public
   * <p>An array of objects that describe the domain validation records of the certificate.</p>
   */
  domainValidationRecords?: DomainValidationRecord[];

  /**
   * @public
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
   *           1000 websites. To provide the required information, use the <a href="https://console.aws.amazon.com/support/home">Amazon Web Services Support
   *             Center</a> to contact Amazon Web Services Support.</p>
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
   *           the <a href="https://console.aws.amazon.com/support/home">Amazon Web Services Support
   *             Center</a> and create a case.</p>
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
   * @public
   * <p>The number of Lightsail resources that the certificate is attached to.</p>
   */
  inUseResourceCount?: number;

  /**
   * @public
   * <p>The algorithm used to generate the key pair (the public and private key) of the
   *       certificate.</p>
   */
  keyAlgorithm?: string;

  /**
   * @public
   * <p>The timestamp when the certificate was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp when the certificate was issued.</p>
   */
  issuedAt?: Date;

  /**
   * @public
   * <p>The certificate authority that issued the certificate.</p>
   */
  issuerCA?: string;

  /**
   * @public
   * <p>The timestamp when the certificate is first valid.</p>
   */
  notBefore?: Date;

  /**
   * @public
   * <p>The timestamp when the certificate expires.</p>
   */
  notAfter?: Date;

  /**
   * @public
   * <p>The renewal eligibility of the certificate.</p>
   */
  eligibleToRenew?: string;

  /**
   * @public
   * <p>An object that describes the status of the certificate renewal managed by
   *       Lightsail.</p>
   */
  renewalSummary?: RenewalSummary;

  /**
   * @public
   * <p>The timestamp when the certificate was revoked. This value is present only when the
   *       certificate status is <code>REVOKED</code>.</p>
   */
  revokedAt?: Date;

  /**
   * @public
   * <p>The reason the certificate was revoked. This value is present only when the certificate
   *       status is <code>REVOKED</code>.</p>
   */
  revocationReason?: string;

  /**
   * @public
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>The support code. Include this code in your email to support when you have questions about
   *       your Lightsail certificate. This code enables our support team to look up your Lightsail
   *       information more easily.</p>
   */
  supportCode?: string;
}

/**
 * @public
 * <p>Describes an Amazon Lightsail SSL/TLS certificate.</p>
 */
export interface CertificateSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the certificate.</p>
   */
  certificateArn?: string;

  /**
   * @public
   * <p>The name of the certificate.</p>
   */
  certificateName?: string;

  /**
   * @public
   * <p>The domain name of the certificate.</p>
   */
  domainName?: string;

  /**
   * @public
   * <p>An object that describes a certificate in detail.</p>
   */
  certificateDetail?: Certificate;

  /**
   * @public
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const NetworkProtocol = {
  ALL: "all",
  ICMP: "icmp",
  TCP: "tcp",
  UDP: "udp",
} as const;

/**
 * @public
 */
export type NetworkProtocol = (typeof NetworkProtocol)[keyof typeof NetworkProtocol];

/**
 * @public
 * <p>Describes ports to open on an instance, the IP addresses allowed to connect to the
 *       instance through the ports, and the protocol.</p>
 */
export interface PortInfo {
  /**
   * @public
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
   * @public
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
   * @public
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
   * @public
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
   * @public
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
   * @public
   * <p>An alias that defines access for a preconfigured range of IP addresses.</p>
   *          <p>The only alias currently supported is <code>lightsail-connect</code>, which allows IP
   *       addresses of the browser-based RDP/SSH client in the Lightsail console to connect to your
   *       instance.</p>
   */
  cidrListAliases?: string[];
}

/**
 * @public
 */
export interface CloseInstancePublicPortsRequest {
  /**
   * @public
   * <p>An object to describe the ports to close for the specified instance.</p>
   */
  portInfo: PortInfo | undefined;

  /**
   * @public
   * <p>The name of the instance for which to close ports.</p>
   */
  instanceName: string | undefined;
}

/**
 * @public
 */
export interface CloseInstancePublicPortsResult {
  /**
   * @public
   * <p>An object that describes the result of the action, such as the status of the request, the
   *       timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

/**
 * @public
 * <p>Describes the destination of a record.</p>
 */
export interface DestinationInfo {
  /**
   * @public
   * <p>The ID of the resource created at the destination.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The destination service of the record.</p>
   */
  service?: string;
}

/**
 * @public
 * @enum
 */
export const CloudFormationStackRecordSourceType = {
  ExportSnapshotRecord: "ExportSnapshotRecord",
} as const;

/**
 * @public
 */
export type CloudFormationStackRecordSourceType =
  (typeof CloudFormationStackRecordSourceType)[keyof typeof CloudFormationStackRecordSourceType];

/**
 * @public
 * <p>Describes the source of a CloudFormation stack record (i.e., the export snapshot
 *       record).</p>
 */
export interface CloudFormationStackRecordSourceInfo {
  /**
   * @public
   * <p>The Lightsail resource type (e.g., <code>ExportSnapshotRecord</code>).</p>
   */
  resourceType?: CloudFormationStackRecordSourceType | string;

  /**
   * @public
   * <p>The name of the record.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the export snapshot record.</p>
   */
  arn?: string;
}

/**
 * @public
 * @enum
 */
export const RecordState = {
  Failed: "Failed",
  Started: "Started",
  Succeeded: "Succeeded",
} as const;

/**
 * @public
 */
export type RecordState = (typeof RecordState)[keyof typeof RecordState];

/**
 * @public
 * <p>Describes a CloudFormation stack record created as a result of the <code>create cloud
 *         formation stack</code> action.</p>
 *          <p>A CloudFormation stack record provides information about the AWS CloudFormation stack used to
 *       create a new Amazon Elastic Compute Cloud instance from an exported Lightsail instance snapshot.</p>
 */
export interface CloudFormationStackRecord {
  /**
   * @public
   * <p>The name of the CloudFormation stack record. It starts with
   *         <code>CloudFormationStackRecord</code> followed by a GUID.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the CloudFormation stack record.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The date when the CloudFormation stack record was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>A list of objects describing the Availability Zone and Amazon Web Services Region of the
   *       CloudFormation stack record.</p>
   */
  location?: ResourceLocation;

  /**
   * @public
   * <p>The Lightsail resource type (e.g., <code>CloudFormationStackRecord</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * @public
   * <p>The current state of the CloudFormation stack record.</p>
   */
  state?: RecordState | string;

  /**
   * @public
   * <p>A list of objects describing the source of the CloudFormation stack record.</p>
   */
  sourceInfo?: CloudFormationStackRecordSourceInfo[];

  /**
   * @public
   * <p>A list of objects describing the destination service, which is AWS CloudFormation, and the Amazon
   *       Resource Name (ARN) of the AWS CloudFormation stack.</p>
   */
  destinationInfo?: DestinationInfo;
}

/**
 * @public
 * @enum
 */
export const ContactMethodStatus = {
  Invalid: "Invalid",
  PendingVerification: "PendingVerification",
  Valid: "Valid",
} as const;

/**
 * @public
 */
export type ContactMethodStatus = (typeof ContactMethodStatus)[keyof typeof ContactMethodStatus];

/**
 * @public
 * <p>Describes a contact method.</p>
 *          <p>A contact method is a way to send you notifications. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
 */
export interface ContactMethod {
  /**
   * @public
   * <p>The destination of the contact method, such as an email address or a mobile phone
   *       number.</p>
   */
  contactEndpoint?: string;

  /**
   * @public
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
   * @public
   * <p>The protocol of the contact method, such as email or SMS (text messaging).</p>
   */
  protocol?: ContactProtocol | string;

  /**
   * @public
   * <p>The name of the contact method.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the contact method.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The timestamp when the contact method was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>An object that describes the location of the contact method, such as the Amazon Web Services Region and Availability Zone.</p>
   */
  location?: ResourceLocation;

  /**
   * @public
   * <p>The Lightsail resource type (e.g., <code>ContactMethod</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * @public
   * <p>The support code. Include this code in your email to support when you have questions about
   *       your Lightsail contact method. This code enables our support team to look up your
   *       Lightsail information more easily.</p>
   */
  supportCode?: string;
}

/**
 * @public
 * @enum
 */
export const ContactMethodVerificationProtocol = {
  Email: "Email",
} as const;

/**
 * @public
 */
export type ContactMethodVerificationProtocol =
  (typeof ContactMethodVerificationProtocol)[keyof typeof ContactMethodVerificationProtocol];

/**
 * @public
 * @enum
 */
export const ContainerServiceProtocol = {
  HTTP: "HTTP",
  HTTPS: "HTTPS",
  TCP: "TCP",
  UDP: "UDP",
} as const;

/**
 * @public
 */
export type ContainerServiceProtocol = (typeof ContainerServiceProtocol)[keyof typeof ContainerServiceProtocol];

/**
 * @public
 * <p>Describes the settings of a container that will be launched, or that is launched, to an
 *       Amazon Lightsail container service.</p>
 */
export interface Container {
  /**
   * @public
   * <p>The name of the image used for the container.</p>
   *          <p>Container images sourced from your Lightsail container service, that are registered and
   *       stored on your service, start with a colon (<code>:</code>). For example, if your container
   *       service name is <code>container-service-1</code>, the container image label is
   *         <code>mystaticsite</code>, and you want to use the third (<code>3</code>) version of the
   *       registered container image, then you should specify
   *         <code>:container-service-1.mystaticsite.3</code>. To use the latest version of a container
   *       image, specify <code>latest</code> instead of a version number (for example,
   *         <code>:container-service-1.mystaticsite.latest</code>). Lightsail will automatically use
   *       the highest numbered version of the registered container image.</p>
   *          <p>Container images sourced from a public registry like Docker Hub don't start with a colon.
   *       For example, <code>nginx:latest</code> or <code>nginx</code>.</p>
   */
  image?: string;

  /**
   * @public
   * <p>The launch command for the container.</p>
   */
  command?: string[];

  /**
   * @public
   * <p>The environment variables of the container.</p>
   */
  environment?: Record<string, string>;

  /**
   * @public
   * <p>The open firewall ports of the container.</p>
   */
  ports?: Record<string, ContainerServiceProtocol | string>;
}

/**
 * @public
 * <p>Describes a container image that is registered to an Amazon Lightsail container
 *       service.</p>
 */
export interface ContainerImage {
  /**
   * @public
   * <p>The name of the container image.</p>
   */
  image?: string;

  /**
   * @public
   * <p>The digest of the container image.</p>
   */
  digest?: string;

  /**
   * @public
   * <p>The timestamp when the container image was created.</p>
   */
  createdAt?: Date;
}

/**
 * @public
 * <p>Describes the health check configuration of an Amazon Lightsail container service.</p>
 */
export interface ContainerServiceHealthCheckConfig {
  /**
   * @public
   * <p>The number of consecutive health checks successes required before moving the container to
   *       the <code>Healthy</code> state. The default value is <code>2</code>.</p>
   */
  healthyThreshold?: number;

  /**
   * @public
   * <p>The number of consecutive health check failures required before moving the container to
   *       the <code>Unhealthy</code> state. The default value is <code>2</code>.</p>
   */
  unhealthyThreshold?: number;

  /**
   * @public
   * <p>The amount of time, in seconds, during which no response means a failed health check. You
   *       can specify between 2 and 60 seconds. The default value is <code>2</code>.</p>
   */
  timeoutSeconds?: number;

  /**
   * @public
   * <p>The approximate interval, in seconds, between health checks of an individual container.
   *       You can specify between 5 and 300 seconds. The default value is <code>5</code>.</p>
   */
  intervalSeconds?: number;

  /**
   * @public
   * <p>The path on the container on which to perform the health check. The default value is
   *         <code>/</code>.</p>
   */
  path?: string;

  /**
   * @public
   * <p>The HTTP codes to use when checking for a successful response from a container. You can
   *       specify values between <code>200</code> and <code>499</code>. You can specify multiple values
   *       (for example, <code>200,202</code>) or a range of values (for example,
   *       <code>200-299</code>).</p>
   */
  successCodes?: string;
}

/**
 * @public
 * <p>Describes the public endpoint configuration of a deployment of an Amazon Lightsail
 *       container service.</p>
 */
export interface ContainerServiceEndpoint {
  /**
   * @public
   * <p>The name of the container entry of the deployment that the endpoint configuration applies
   *       to.</p>
   */
  containerName?: string;

  /**
   * @public
   * <p>The port of the specified container to which traffic is forwarded to.</p>
   */
  containerPort?: number;

  /**
   * @public
   * <p>An object that describes the health check configuration of the container.</p>
   */
  healthCheck?: ContainerServiceHealthCheckConfig;
}

/**
 * @public
 * @enum
 */
export const ContainerServiceDeploymentState = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  FAILED: "FAILED",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type ContainerServiceDeploymentState =
  (typeof ContainerServiceDeploymentState)[keyof typeof ContainerServiceDeploymentState];

/**
 * @public
 * <p>Describes a container deployment configuration of an Amazon Lightsail container
 *       service.</p>
 *          <p>A deployment specifies the settings, such as the ports and launch command, of containers
 *       that are deployed to your container service.</p>
 */
export interface ContainerServiceDeployment {
  /**
   * @public
   * <p>The version number of the deployment.</p>
   */
  version?: number;

  /**
   * @public
   * <p>The state of the deployment.</p>
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
   * @public
   * <p>An object that describes the configuration for the containers of the deployment.</p>
   */
  containers?: Record<string, Container>;

  /**
   * @public
   * <p>An object that describes the endpoint of the deployment.</p>
   */
  publicEndpoint?: ContainerServiceEndpoint;

  /**
   * @public
   * <p>The timestamp when the deployment was created.</p>
   */
  createdAt?: Date;
}

/**
 * @public
 * @enum
 */
export const ContainerServicePowerName = {
  large: "large",
  medium: "medium",
  micro: "micro",
  nano: "nano",
  small: "small",
  xlarge: "xlarge",
} as const;

/**
 * @public
 */
export type ContainerServicePowerName = (typeof ContainerServicePowerName)[keyof typeof ContainerServicePowerName];

/**
 * @public
 * <p>Describes the activation status of the role that you can use to grant an Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR)
 *       private repositories.</p>
 *          <p>When activated, Lightsail creates an Identity and Access Management (IAM) role
 *       for the specified Lightsail container service. You can use the ARN of the role to create a
 *       trust relationship between your Lightsail container service and an Amazon ECR private repository in your Amazon Web Services account. This allows your container
 *       service to pull images from Amazon ECR private repositories. For more information, see
 *         <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
 */
export interface ContainerServiceECRImagePullerRole {
  /**
   * @public
   * <p>A Boolean value that indicates whether the role is activated.</p>
   */
  isActive?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the role, if it is activated.</p>
   */
  principalArn?: string;
}

/**
 * @public
 * <p>Describes the configuration for an Amazon Lightsail container service to
 *       access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.</p>
 *          <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
 */
export interface PrivateRegistryAccess {
  /**
   * @public
   * <p>An object that describes the activation status of the role that you can use to grant a
   *         Lightsail container service access to Amazon ECR private
   *       repositories. If the role is activated, the Amazon Resource Name (ARN) of the role is also
   *       listed.</p>
   */
  ecrImagePullerRole?: ContainerServiceECRImagePullerRole;
}

/**
 * @public
 * @enum
 */
export const ContainerServiceState = {
  DELETING: "DELETING",
  DEPLOYING: "DEPLOYING",
  DISABLED: "DISABLED",
  PENDING: "PENDING",
  READY: "READY",
  RUNNING: "RUNNING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ContainerServiceState = (typeof ContainerServiceState)[keyof typeof ContainerServiceState];

/**
 * @public
 * @enum
 */
export const ContainerServiceStateDetailCode = {
  ACTIVATING_DEPLOYMENT: "ACTIVATING_DEPLOYMENT",
  CERTIFICATE_LIMIT_EXCEEDED: "CERTIFICATE_LIMIT_EXCEEDED",
  CREATING_DEPLOYMENT: "CREATING_DEPLOYMENT",
  CREATING_NETWORK_INFRASTRUCTURE: "CREATING_NETWORK_INFRASTRUCTURE",
  CREATING_SYSTEM_RESOURCES: "CREATING_SYSTEM_RESOURCES",
  EVALUATING_HEALTH_CHECK: "EVALUATING_HEALTH_CHECK",
  PROVISIONING_CERTIFICATE: "PROVISIONING_CERTIFICATE",
  PROVISIONING_SERVICE: "PROVISIONING_SERVICE",
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
} as const;

/**
 * @public
 */
export type ContainerServiceStateDetailCode =
  (typeof ContainerServiceStateDetailCode)[keyof typeof ContainerServiceStateDetailCode];

/**
 * @public
 * <p>Describes the current state of a container service.</p>
 */
export interface ContainerServiceStateDetail {
  /**
   * @public
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
   * @public
   * <p>A message that provides more information for the state code.</p>
   *          <note>
   *             <p>The state detail is populated only when a container service is in a
   *         <code>PENDING</code>, <code>DEPLOYING</code>, or <code>UPDATING</code> state.</p>
   *          </note>
   */
  message?: string;
}

/**
 * @public
 * <p>Describes an Amazon Lightsail container service.</p>
 */
export interface ContainerService {
  /**
   * @public
   * <p>The name of the container service.</p>
   */
  containerServiceName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the container service.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The timestamp when the container service was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>An object that describes the location of the container service, such as the Amazon Web Services Region and Availability Zone.</p>
   */
  location?: ResourceLocation;

  /**
   * @public
   * <p>The Lightsail resource type of the container service (i.e.,
   *         <code>ContainerService</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * @public
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>The power specification of the container service.</p>
   *          <p>The power specifies the amount of RAM, the number of vCPUs, and the base price of the
   *       container service.</p>
   */
  power?: ContainerServicePowerName | string;

  /**
   * @public
   * <p>The ID of the power of the container service.</p>
   */
  powerId?: string;

  /**
   * @public
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
   * @public
   * <p>An object that describes the current state of the container service.</p>
   *          <note>
   *             <p>The state detail is populated only when a container service is in a
   *         <code>PENDING</code>, <code>DEPLOYING</code>, or <code>UPDATING</code> state.</p>
   *          </note>
   */
  stateDetail?: ContainerServiceStateDetail;

  /**
   * @public
   * <p>The scale specification of the container service.</p>
   *          <p>The scale specifies the allocated compute nodes of the container service.</p>
   */
  scale?: number;

  /**
   * @public
   * <p>An object that describes the current container deployment of the container service.</p>
   */
  currentDeployment?: ContainerServiceDeployment;

  /**
   * @public
   * <p>An object that describes the next deployment of the container service.</p>
   *          <p>This value is <code>null</code> when there is no deployment in a <code>pending</code>
   *       state.</p>
   */
  nextDeployment?: ContainerServiceDeployment;

  /**
   * @public
   * <p>A Boolean value indicating whether the container service is disabled.</p>
   */
  isDisabled?: boolean;

  /**
   * @public
   * <p>The principal ARN of the container service.</p>
   *          <p>The principal ARN can be used to create a trust relationship between your standard Amazon Web Services account and your Lightsail container service. This allows you to give your
   *       service permission to access resources in your standard Amazon Web Services account.</p>
   */
  principalArn?: string;

  /**
   * @public
   * <p>The private domain name of the container service.</p>
   *          <p>The private domain name is accessible only by other resources within the default virtual
   *       private cloud (VPC) of your Lightsail account.</p>
   */
  privateDomainName?: string;

  /**
   * @public
   * <p>The public domain name of the container service, such as <code>example.com</code> and
   *         <code>www.example.com</code>.</p>
   *          <p>You can specify up to four public domain names for a container service. The domain names
   *       that you specify are used when you create a deployment with a container configured as the
   *       public endpoint of your container service.</p>
   *          <p>If you don't specify public domain names, then you can use the default domain of the
   *       container service.</p>
   *          <important>
   *             <p>You must create and validate an SSL/TLS certificate before you can use public domain
   *         names with your container service. Use the <code>CreateCertificate</code> action to create a
   *         certificate for the public domain names you want to use with your container service.</p>
   *          </important>
   *          <p>See <code>CreateContainerService</code> or <code>UpdateContainerService</code> for
   *       information about how to specify public domain names for your Lightsail container
   *       service.</p>
   */
  publicDomainNames?: Record<string, string[]>;

  /**
   * @public
   * <p>The publicly accessible URL of the container service.</p>
   *          <p>If no public endpoint is specified in the <code>currentDeployment</code>, this URL returns
   *       a 404 response.</p>
   */
  url?: string;

  /**
   * @public
   * <p>An object that describes the configuration for the container service to access private
   *       container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private
   *       repositories.</p>
   *          <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
   */
  privateRegistryAccess?: PrivateRegistryAccess;
}

/**
 * @public
 * <p>Describes the settings of a public endpoint for an Amazon Lightsail container
 *       service.</p>
 */
export interface EndpointRequest {
  /**
   * @public
   * <p>The name of the container for the endpoint.</p>
   */
  containerName: string | undefined;

  /**
   * @public
   * <p>The port of the container to which traffic is forwarded to.</p>
   */
  containerPort: number | undefined;

  /**
   * @public
   * <p>An object that describes the health check configuration of the container.</p>
   */
  healthCheck?: ContainerServiceHealthCheckConfig;
}

/**
 * @public
 * <p>Describes a container deployment configuration of an Amazon Lightsail container
 *       service.</p>
 *          <p>A deployment specifies the settings, such as the ports and launch command, of containers
 *       that are deployed to your container service.</p>
 */
export interface ContainerServiceDeploymentRequest {
  /**
   * @public
   * <p>An object that describes the configuration for the containers of the deployment.</p>
   */
  containers?: Record<string, Container>;

  /**
   * @public
   * <p>An object that describes the endpoint of the deployment.</p>
   */
  publicEndpoint?: EndpointRequest;
}

/**
 * @public
 * <p>Describes a request to activate or deactivate the role that you can use to grant an
 *         Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR) private repositories.</p>
 *          <p>When activated, Lightsail creates an Identity and Access Management (IAM) role
 *       for the specified Lightsail container service. You can use the ARN of the role to create a
 *       trust relationship between your Lightsail container service and an Amazon ECR private repository in your Amazon Web Services account. This allows your container
 *       service to pull images from Amazon ECR private repositories. For more information, see
 *         <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
 */
export interface ContainerServiceECRImagePullerRoleRequest {
  /**
   * @public
   * <p>A Boolean value that indicates whether to activate the role.</p>
   */
  isActive?: boolean;
}

/**
 * @public
 * <p>Describes the log events of a container of an Amazon Lightsail container service.</p>
 */
export interface ContainerServiceLogEvent {
  /**
   * @public
   * <p>The timestamp when the container service log event was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The message of the container service log event.</p>
   */
  message?: string;
}

/**
 * @public
 * @enum
 */
export const ContainerServiceMetricName = {
  CPUUtilization: "CPUUtilization",
  MemoryUtilization: "MemoryUtilization",
} as const;

/**
 * @public
 */
export type ContainerServiceMetricName = (typeof ContainerServiceMetricName)[keyof typeof ContainerServiceMetricName];

/**
 * @public
 * <p>Describes the powers that can be specified for an Amazon Lightsail container
 *       service.</p>
 *          <p>The power specifies the amount of RAM, the number of vCPUs, and the base price of the
 *       container service.</p>
 */
export interface ContainerServicePower {
  /**
   * @public
   * <p>The ID of the power (e.g., <code>nano-1</code>).</p>
   */
  powerId?: string;

  /**
   * @public
   * <p>The monthly price of the power in USD.</p>
   */
  price?: number;

  /**
   * @public
   * <p>The number of vCPUs included in the power.</p>
   */
  cpuCount?: number;

  /**
   * @public
   * <p>The amount of RAM (in GB) of the power.</p>
   */
  ramSizeInGb?: number;

  /**
   * @public
   * <p>The friendly name of the power (e.g., <code>nano</code>).</p>
   */
  name?: string;

  /**
   * @public
   * <p>A Boolean value indicating whether the power is active and can be specified for container
   *       services.</p>
   */
  isActive?: boolean;
}

/**
 * @public
 * <p>Describes the sign-in credentials for the container image registry of an Amazon Lightsail
 *       account.</p>
 */
export interface ContainerServiceRegistryLogin {
  /**
   * @public
   * <p>The container service registry username to use to push container images to the container
   *       image registry of a Lightsail account.</p>
   */
  username?: string;

  /**
   * @public
   * <p>The container service registry password to use to push container images to the container
   *       image registry of a Lightsail account</p>
   */
  password?: string;

  /**
   * @public
   * <p>The timestamp of when the container image registry sign-in credentials expire.</p>
   *          <p>The log in credentials expire 12 hours after they are created, at which point you will
   *       need to create a new set of log in credentials using the
   *         <code>CreateContainerServiceRegistryLogin</code> action.</p>
   */
  expiresAt?: Date;

  /**
   * @public
   * <p>The address to use to push container images to the container image registry of a
   *       Lightsail account.</p>
   */
  registry?: string;
}

/**
 * @public
 */
export interface ContainerServicesListResult {
  /**
   * @public
   * <p>An array of objects that describe one or more container services.</p>
   */
  containerServices?: ContainerService[];
}

/**
 * @public
 */
export interface CopySnapshotRequest {
  /**
   * @public
   * <p>The name of the source manual snapshot to copy.</p>
   *          <p>Constraint:</p>
   *          <ul>
   *             <li>
   *                <p>Define this parameter only when copying a manual snapshot as another manual
   *           snapshot.</p>
   *             </li>
   *          </ul>
   */
  sourceSnapshotName?: string;

  /**
   * @public
   * <p>The name of the source instance or disk from which the source automatic snapshot was
   *       created.</p>
   *          <p>Constraint:</p>
   *          <ul>
   *             <li>
   *                <p>Define this parameter only when copying an automatic snapshot as a manual snapshot.
   *           For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-keeping-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p>
   *             </li>
   *          </ul>
   */
  sourceResourceName?: string;

  /**
   * @public
   * <p>The date of the source automatic snapshot to copy. Use the <code>get auto snapshots</code>
   *       operation to identify the dates of the available automatic snapshots.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be specified in <code>YYYY-MM-DD</code> format.</p>
   *             </li>
   *             <li>
   *                <p>This parameter cannot be defined together with the <code>use latest restorable auto
   *             snapshot</code> parameter. The <code>restore date</code> and <code>use latest restorable
   *             auto snapshot</code> parameters are mutually exclusive.</p>
   *             </li>
   *             <li>
   *                <p>Define this parameter only when copying an automatic snapshot as a manual snapshot.
   *           For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-keeping-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p>
   *             </li>
   *          </ul>
   */
  restoreDate?: string;

  /**
   * @public
   * <p>A Boolean value to indicate whether to use the latest available automatic snapshot of the
   *       specified source instance or disk.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>This parameter cannot be defined together with the <code>restore date</code>
   *           parameter. The <code>use latest restorable auto snapshot</code> and <code>restore
   *             date</code> parameters are mutually exclusive.</p>
   *             </li>
   *             <li>
   *                <p>Define this parameter only when copying an automatic snapshot as a manual snapshot.
   *           For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-keeping-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p>
   *             </li>
   *          </ul>
   */
  useLatestRestorableAutoSnapshot?: boolean;

  /**
   * @public
   * <p>The name of the new manual snapshot to be created as a copy.</p>
   */
  targetSnapshotName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Region where the source manual or automatic snapshot is
   *       located.</p>
   */
  sourceRegion: RegionName | string | undefined;
}

/**
 * @public
 */
export interface CopySnapshotResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 * @enum
 */
export const Currency = {
  USD: "USD",
} as const;

/**
 * @public
 */
export type Currency = (typeof Currency)[keyof typeof Currency];

/**
 * @public
 * @enum
 */
export const PricingUnit = {
  Bundles: "Bundles",
  GB: "GB",
  GBMo: "GB-Mo",
  Hrs: "Hrs",
  Queries: "Queries",
} as const;

/**
 * @public
 */
export type PricingUnit = (typeof PricingUnit)[keyof typeof PricingUnit];

/**
 * @public
 * <p>Sets the start date and end date for retrieving a cost estimate. The start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>.</p>
 */
export interface TimePeriod {
  /**
   * @public
   * <p>The beginning of the time period. The start date is inclusive. For example, if <code>start</code> is <code>2017-01-01</code>, Lightsail for Research retrieves cost and usage data starting at <code>2017-01-01</code> up to the end date. The start date must be equal to or no later than the current date to avoid a validation error.</p>
   */
  start?: Date;

  /**
   * @public
   * <p>The end of the time period. The end date is exclusive. For example, if <code>end</code> is <code>2017-05-01</code>, Lightsail for Research retrieves cost and usage data from the start date up to, but not including, <code>2017-05-01</code>.</p>
   */
  end?: Date;
}

/**
 * @public
 * <p>An estimate that's associated with a time period. </p>
 */
export interface EstimateByTime {
  /**
   * @public
   * <p>The amount of cost or usage that's measured for the cost estimate.</p>
   */
  usageCost?: number;

  /**
   * @public
   * <p>The unit of measurement that's used for the cost estimate.</p>
   */
  pricingUnit?: PricingUnit | string;

  /**
   * @public
   * <p>The number of pricing units used to calculate the total number of hours. For example, 1
   *       unit equals 1 hour.</p>
   */
  unit?: number;

  /**
   * @public
   * <p>The currency of the estimate in USD.</p>
   */
  currency?: Currency | string;

  /**
   * @public
   * <p>The period of time, in days, that an estimate covers. The period has a start date and an end date. The start date must come before the end date.</p>
   */
  timePeriod?: TimePeriod;
}

/**
 * @public
 * <p>Describes the estimated cost for resources in your Lightsail for Research account.</p>
 */
export interface CostEstimate {
  /**
   * @public
   * <p>The types of usage that are included in the estimate, such as costs, usage, or data
   *       transfer.</p>
   */
  usageType?: string;

  /**
   * @public
   * <p>The cost estimate result that's associated with a time period.</p>
   */
  resultsByTime?: EstimateByTime[];
}

/**
 * @public
 */
export interface CreateBucketRequest {
  /**
   * @public
   * <p>The name for the bucket.</p>
   *          <p>For more information about bucket names, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/bucket-naming-rules-in-amazon-lightsail">Bucket naming rules in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer
   *         Guide</i>.</p>
   */
  bucketName: string | undefined;

  /**
   * @public
   * <p>The ID of the bundle to use for the bucket.</p>
   *          <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a
   *       bucket.</p>
   *          <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketBundles.html">GetBucketBundles</a> action to get a list of
   *       bundle IDs that you can specify.</p>
   *          <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucketBundle.html">UpdateBucketBundle</a> action to change the
   *       bundle after the bucket is created.</p>
   */
  bundleId: string | undefined;

  /**
   * @public
   * <p>The tag keys and optional values to add to the bucket during creation.</p>
   *          <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_TagResource.html">TagResource</a> action to tag the bucket after it's
   *       created.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>A Boolean value that indicates whether to enable versioning of objects in the
   *       bucket.</p>
   *          <p>For more information about versioning, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-managing-bucket-object-versioning">Enabling and suspending object versioning in a bucket in Amazon Lightsail</a> in the
   *         <i>Amazon Lightsail Developer Guide</i>.</p>
   */
  enableObjectVersioning?: boolean;
}

/**
 * @public
 */
export interface CreateBucketResult {
  /**
   * @public
   * <p>An object that describes the bucket that is created.</p>
   */
  bucket?: Bucket;

  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface CreateBucketAccessKeyRequest {
  /**
   * @public
   * <p>The name of the bucket that the new access key will belong to, and grant access to.</p>
   */
  bucketName: string | undefined;
}

/**
 * @public
 */
export interface CreateBucketAccessKeyResult {
  /**
   * @public
   * <p>An object that describes the access key that is created.</p>
   */
  accessKey?: AccessKey;

  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface CreateCertificateRequest {
  /**
   * @public
   * <p>The name for the certificate.</p>
   */
  certificateName: string | undefined;

  /**
   * @public
   * <p>The domain name (e.g., <code>example.com</code>) for the certificate.</p>
   */
  domainName: string | undefined;

  /**
   * @public
   * <p>An array of strings that specify the alternate domains (e.g., <code>example2.com</code>)
   *       and subdomains (e.g., <code>blog.example.com</code>) for the certificate.</p>
   *          <p>You can specify a maximum of nine alternate domains (in addition to the primary domain
   *       name).</p>
   *          <p>Wildcard domain entries (e.g., <code>*.example.com</code>) are not supported.</p>
   */
  subjectAlternativeNames?: string[];

  /**
   * @public
   * <p>The tag keys and optional values to add to the certificate during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateCertificateResult {
  /**
   * @public
   * <p>An object that describes the certificate created.</p>
   */
  certificate?: CertificateSummary;

  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 * @enum
 */
export const PortInfoSourceType = {
  Closed: "CLOSED",
  Default: "DEFAULT",
  Instance: "INSTANCE",
  None: "NONE",
} as const;

/**
 * @public
 */
export type PortInfoSourceType = (typeof PortInfoSourceType)[keyof typeof PortInfoSourceType];

/**
 * @public
 * <p>Describes the Amazon Elastic Compute Cloud instance and related resources to be created using the
 *         <code>create cloud formation stack</code> operation.</p>
 */
export interface InstanceEntry {
  /**
   * @public
   * <p>The name of the export snapshot record, which contains the exported Lightsail instance
   *       snapshot that will be used as the source of the new Amazon EC2 instance.</p>
   *          <p>Use the <code>get export snapshot records</code> operation to get a list of export
   *       snapshot records that you can use to create a CloudFormation stack.</p>
   */
  sourceName: string | undefined;

  /**
   * @public
   * <p>The instance type (e.g., <code>t2.micro</code>) to use for the new Amazon EC2 instance.</p>
   */
  instanceType: string | undefined;

  /**
   * @public
   * <p>The port configuration to use for the new Amazon EC2 instance.</p>
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
   * @public
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
   * @public
   * <p>The Availability Zone for the new Amazon EC2 instance.</p>
   */
  availabilityZone: string | undefined;
}

/**
 * @public
 */
export interface CreateCloudFormationStackRequest {
  /**
   * @public
   * <p>An array of parameters that will be used to create the new Amazon EC2 instance. You can only
   *       pass one instance entry at a time in this array. You will get an invalid parameter error if
   *       you pass more than one instance entry in this array.</p>
   */
  instances: InstanceEntry[] | undefined;
}

/**
 * @public
 */
export interface CreateCloudFormationStackResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface CreateContactMethodRequest {
  /**
   * @public
   * <p>The protocol of the contact method, such as <code>Email</code> or <code>SMS</code> (text
   *       messaging).</p>
   *          <p>The <code>SMS</code> protocol is supported only in the following Amazon Web Services
   *       Regions.</p>
   *          <ul>
   *             <li>
   *                <p>US East (N. Virginia) (<code>us-east-1</code>)</p>
   *             </li>
   *             <li>
   *                <p>US West (Oregon) (<code>us-west-2</code>)</p>
   *             </li>
   *             <li>
   *                <p>Europe (Ireland) (<code>eu-west-1</code>)</p>
   *             </li>
   *             <li>
   *                <p>Asia Pacific (Tokyo) (<code>ap-northeast-1</code>)</p>
   *             </li>
   *             <li>
   *                <p>Asia Pacific (Singapore) (<code>ap-southeast-1</code>)</p>
   *             </li>
   *             <li>
   *                <p>Asia Pacific (Sydney) (<code>ap-southeast-2</code>)</p>
   *             </li>
   *          </ul>
   *          <p>For a list of countries/regions where SMS text messages can be sent, and the latest
   *         Amazon Web Services Regions where SMS text messaging is supported, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-supported-regions-countries.html">Supported Regions and Countries</a> in the <i>Amazon SNS Developer
   *         Guide</i>.</p>
   *          <p>For more information about notifications in Amazon Lightsail, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
   */
  protocol: ContactProtocol | string | undefined;

  /**
   * @public
   * <p>The destination of the contact method, such as an email address or a mobile phone
   *       number.</p>
   *          <p>Use the E.164 format when specifying a mobile phone number. E.164 is a standard for the
   *       phone number structure used for international telecommunication. Phone numbers that follow
   *       this format can have a maximum of 15 digits, and they are prefixed with the plus character (+)
   *       and the country code. For example, a U.S. phone number in E.164 format would be specified as
   *       +1XXX5550100. For more information, see <a href="https://en.wikipedia.org/wiki/E.164">E.164</a> on <i>Wikipedia</i>.</p>
   */
  contactEndpoint: string | undefined;
}

/**
 * @public
 */
export interface CreateContactMethodResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 * <p>Describes a request to configure an Amazon Lightsail container service to
 *       access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.</p>
 *          <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
 */
export interface PrivateRegistryAccessRequest {
  /**
   * @public
   * <p>An object to describe a request to activate or deactivate the role that you can use to
   *       grant an Amazon Lightsail container service access to Amazon Elastic Container Registry
   *         (Amazon ECR) private repositories.</p>
   */
  ecrImagePullerRole?: ContainerServiceECRImagePullerRoleRequest;
}

/**
 * @public
 */
export interface CreateContainerServiceRequest {
  /**
   * @public
   * <p>The name for the container service.</p>
   *          <p>The name that you specify for your container service will make up part of its default
   *       domain. The default domain of a container service is typically
   *         <code>https://<ServiceName>.<RandomGUID>.<AWSRegion>.cs.amazonlightsail.com</code>.
   *       If the name of your container service is <code>container-service-1</code>, and it's located in
   *       the US East (Ohio) Amazon Web Services Region (<code>us-east-2</code>), then the domain for
   *       your container service will be like the following example:
   *         <code>https://container-service-1.ur4EXAMPLE2uq.us-east-2.cs.amazonlightsail.com</code>
   *          </p>
   *          <p>The following are the requirements for container service names:</p>
   *          <ul>
   *             <li>
   *                <p>Must be unique within each Amazon Web Services Region in your Lightsail
   *           account.</p>
   *             </li>
   *             <li>
   *                <p>Must contain 1 to 63 characters.</p>
   *             </li>
   *             <li>
   *                <p>Must contain only alphanumeric characters and hyphens.</p>
   *             </li>
   *             <li>
   *                <p>A hyphen (-) can separate words but cannot be at the start or end of the name.</p>
   *             </li>
   *          </ul>
   */
  serviceName: string | undefined;

  /**
   * @public
   * <p>The power specification for the container service.</p>
   *          <p>The power specifies the amount of memory, vCPUs, and base monthly cost of each node of the
   *       container service. The <code>power</code> and <code>scale</code> of a container service makes
   *       up its configured capacity. To determine the monthly price of your container service, multiply
   *       the base price of the <code>power</code> with the <code>scale</code> (the number of nodes) of
   *       the service.</p>
   *          <p>Use the <code>GetContainerServicePowers</code> action to get a list of power options that
   *       you can specify using this parameter, and their base monthly cost.</p>
   */
  power: ContainerServicePowerName | string | undefined;

  /**
   * @public
   * <p>The scale specification for the container service.</p>
   *          <p>The scale specifies the allocated compute nodes of the container service. The
   *         <code>power</code> and <code>scale</code> of a container service makes up its configured
   *       capacity. To determine the monthly price of your container service, multiply the base price of
   *       the <code>power</code> with the <code>scale</code> (the number of nodes) of the
   *       service.</p>
   */
  scale: number | undefined;

  /**
   * @public
   * <p>The tag keys and optional values to add to the container service during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   *          <p>For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>The public domain names to use with the container service, such as
   *         <code>example.com</code> and <code>www.example.com</code>.</p>
   *          <p>You can specify up to four public domain names for a container service. The domain names
   *       that you specify are used when you create a deployment with a container configured as the
   *       public endpoint of your container service.</p>
   *          <p>If you don't specify public domain names, then you can use the default domain of the
   *       container service.</p>
   *          <important>
   *             <p>You must create and validate an SSL/TLS certificate before you can use public domain
   *         names with your container service. Use the <code>CreateCertificate</code> action to create a
   *         certificate for the public domain names you want to use with your container service.</p>
   *          </important>
   *          <p>You can specify public domain names using a string to array map as shown in the example
   *       later on this page.</p>
   */
  publicDomainNames?: Record<string, string[]>;

  /**
   * @public
   * <p>An object that describes a deployment for the container service.</p>
   *          <p>A deployment specifies the containers that will be launched on the container service and
   *       their settings, such as the ports to open, the environment variables to apply, and the launch
   *       command to run. It also specifies the container that will serve as the public endpoint of the
   *       deployment and its settings, such as the HTTP or HTTPS port to use, and the health check
   *       configuration.</p>
   */
  deployment?: ContainerServiceDeploymentRequest;

  /**
   * @public
   * <p>An object to describe the configuration for the container service to access private
   *       container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private
   *       repositories.</p>
   *          <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
   */
  privateRegistryAccess?: PrivateRegistryAccessRequest;
}

/**
 * @public
 */
export interface CreateContainerServiceResult {
  /**
   * @public
   * <p>An object that describes a container service.</p>
   */
  containerService?: ContainerService;
}

/**
 * @public
 */
export interface CreateContainerServiceDeploymentRequest {
  /**
   * @public
   * <p>The name of the container service for which to create the deployment.</p>
   */
  serviceName: string | undefined;

  /**
   * @public
   * <p>An object that describes the settings of the containers that will be launched on the
   *       container service.</p>
   */
  containers?: Record<string, Container>;

  /**
   * @public
   * <p>An object that describes the settings of the public endpoint for the container
   *       service.</p>
   */
  publicEndpoint?: EndpointRequest;
}

/**
 * @public
 */
export interface CreateContainerServiceDeploymentResult {
  /**
   * @public
   * <p>An object that describes a container service.</p>
   */
  containerService?: ContainerService;
}

/**
 * @public
 */
export interface CreateContainerServiceRegistryLoginRequest {}

/**
 * @public
 */
export interface CreateContainerServiceRegistryLoginResult {
  /**
   * @public
   * <p>An object that describes the log in information for the container service registry of your
   *       Lightsail account.</p>
   */
  registryLogin?: ContainerServiceRegistryLogin;
}

/**
 * @public
 */
export interface CreateDiskRequest {
  /**
   * @public
   * <p>The unique Lightsail disk name (e.g., <code>my-disk</code>).</p>
   */
  diskName: string | undefined;

  /**
   * @public
   * <p>The Availability Zone where you want to create the disk (e.g., <code>us-east-2a</code>).
   *       Use the same Availability Zone as the Lightsail instance to which you want to attach the
   *       disk.</p>
   *          <p>Use the <code>get regions</code> operation to list the Availability Zones where
   *       Lightsail is currently available.</p>
   */
  availabilityZone: string | undefined;

  /**
   * @public
   * <p>The size of the disk in GB (e.g., <code>32</code>).</p>
   */
  sizeInGb: number | undefined;

  /**
   * @public
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>An array of objects that represent the add-ons to enable for the new disk.</p>
   */
  addOns?: AddOnRequest[];
}

/**
 * @public
 */
export interface CreateDiskResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface CreateDiskFromSnapshotRequest {
  /**
   * @public
   * <p>The unique Lightsail disk name (e.g., <code>my-disk</code>).</p>
   */
  diskName: string | undefined;

  /**
   * @public
   * <p>The name of the disk snapshot (e.g., <code>my-snapshot</code>) from which to create the
   *       new storage disk.</p>
   *          <p>Constraint:</p>
   *          <ul>
   *             <li>
   *                <p>This parameter cannot be defined together with the <code>source disk name</code>
   *           parameter. The <code>disk snapshot name</code> and <code>source disk name</code>
   *           parameters are mutually exclusive.</p>
   *             </li>
   *          </ul>
   */
  diskSnapshotName?: string;

  /**
   * @public
   * <p>The Availability Zone where you want to create the disk (e.g., <code>us-east-2a</code>).
   *       Choose the same Availability Zone as the Lightsail instance where you want to create the
   *       disk.</p>
   *          <p>Use the GetRegions operation to list the Availability Zones where Lightsail is currently
   *       available.</p>
   */
  availabilityZone: string | undefined;

  /**
   * @public
   * <p>The size of the disk in GB (e.g., <code>32</code>).</p>
   */
  sizeInGb: number | undefined;

  /**
   * @public
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>An array of objects that represent the add-ons to enable for the new disk.</p>
   */
  addOns?: AddOnRequest[];

  /**
   * @public
   * <p>The name of the source disk from which the source automatic snapshot was created.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>This parameter cannot be defined together with the <code>disk snapshot name</code>
   *           parameter. The <code>source disk name</code> and <code>disk snapshot name</code>
   *           parameters are mutually exclusive.</p>
   *             </li>
   *             <li>
   *                <p>Define this parameter only when creating a new disk from an automatic snapshot. For
   *           more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p>
   *             </li>
   *          </ul>
   */
  sourceDiskName?: string;

  /**
   * @public
   * <p>The date of the automatic snapshot to use for the new disk. Use the <code>get auto
   *         snapshots</code> operation to identify the dates of the available automatic
   *       snapshots.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be specified in <code>YYYY-MM-DD</code> format.</p>
   *             </li>
   *             <li>
   *                <p>This parameter cannot be defined together with the <code>use latest restorable auto
   *             snapshot</code> parameter. The <code>restore date</code> and <code>use latest restorable
   *             auto snapshot</code> parameters are mutually exclusive.</p>
   *             </li>
   *             <li>
   *                <p>Define this parameter only when creating a new disk from an automatic snapshot. For
   *           more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p>
   *             </li>
   *          </ul>
   */
  restoreDate?: string;

  /**
   * @public
   * <p>A Boolean value to indicate whether to use the latest available automatic snapshot.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>This parameter cannot be defined together with the <code>restore date</code>
   *           parameter. The <code>use latest restorable auto snapshot</code> and <code>restore
   *             date</code> parameters are mutually exclusive.</p>
   *             </li>
   *             <li>
   *                <p>Define this parameter only when creating a new disk from an automatic snapshot. For
   *           more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p>
   *             </li>
   *          </ul>
   */
  useLatestRestorableAutoSnapshot?: boolean;
}

/**
 * @public
 */
export interface CreateDiskFromSnapshotResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface CreateDiskSnapshotRequest {
  /**
   * @public
   * <p>The unique name of the source disk (e.g., <code>Disk-Virginia-1</code>).</p>
   *          <note>
   *             <p>This parameter cannot be defined together with the <code>instance name</code> parameter.
   *         The <code>disk name</code> and <code>instance name</code> parameters are mutually
   *         exclusive.</p>
   *          </note>
   */
  diskName?: string;

  /**
   * @public
   * <p>The name of the destination disk snapshot (e.g., <code>my-disk-snapshot</code>) based on
   *       the source disk.</p>
   */
  diskSnapshotName: string | undefined;

  /**
   * @public
   * <p>The unique name of the source instance (e.g., <code>Amazon_Linux-512MB-Virginia-1</code>).
   *       When this is defined, a snapshot of the instance's system volume is created.</p>
   *          <note>
   *             <p>This parameter cannot be defined together with the <code>disk name</code> parameter. The
   *           <code>instance name</code> and <code>disk name</code> parameters are mutually
   *         exclusive.</p>
   *          </note>
   */
  instanceName?: string;

  /**
   * @public
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateDiskSnapshotResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 * @enum
 */
export const IpAddressType = {
  DUALSTACK: "dualstack",
  IPV4: "ipv4",
} as const;

/**
 * @public
 */
export type IpAddressType = (typeof IpAddressType)[keyof typeof IpAddressType];

/**
 * @public
 * @enum
 */
export const OriginProtocolPolicyEnum = {
  HTTPOnly: "http-only",
  HTTPSOnly: "https-only",
} as const;

/**
 * @public
 */
export type OriginProtocolPolicyEnum = (typeof OriginProtocolPolicyEnum)[keyof typeof OriginProtocolPolicyEnum];

/**
 * @public
 * <p>Describes the origin resource of an Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>An origin can be a Lightsail instance, bucket, or load balancer. A distribution pulls
 *       content from an origin, caches it, and serves it to viewers via a worldwide network of edge
 *       servers.</p>
 */
export interface InputOrigin {
  /**
   * @public
   * <p>The name of the origin resource.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The AWS Region name of the origin resource.</p>
   */
  regionName?: RegionName | string;

  /**
   * @public
   * <p>The protocol that your Amazon Lightsail distribution uses when establishing a connection
   *       with your origin to pull content.</p>
   */
  protocolPolicy?: OriginProtocolPolicyEnum | string;
}

/**
 * @public
 */
export interface CreateDistributionRequest {
  /**
   * @public
   * <p>The name for the distribution.</p>
   */
  distributionName: string | undefined;

  /**
   * @public
   * <p>An object that describes the origin resource for the distribution, such as a Lightsail
   *       instance, bucket, or load balancer.</p>
   *          <p>The distribution pulls, caches, and serves content from the origin.</p>
   */
  origin: InputOrigin | undefined;

  /**
   * @public
   * <p>An object that describes the default cache behavior for the distribution.</p>
   */
  defaultCacheBehavior: CacheBehavior | undefined;

  /**
   * @public
   * <p>An object that describes the cache behavior settings for the distribution.</p>
   */
  cacheBehaviorSettings?: CacheSettings;

  /**
   * @public
   * <p>An array of objects that describe the per-path cache behavior for the distribution.</p>
   */
  cacheBehaviors?: CacheBehaviorPerPath[];

  /**
   * @public
   * <p>The bundle ID to use for the distribution.</p>
   *          <p>A distribution bundle describes the specifications of your distribution, such as the
   *       monthly cost and monthly network transfer quota.</p>
   *          <p>Use the <code>GetDistributionBundles</code> action to get a list of distribution bundle
   *       IDs that you can specify.</p>
   */
  bundleId: string | undefined;

  /**
   * @public
   * <p>The IP address type for the distribution.</p>
   *          <p>The possible values are <code>ipv4</code> for IPv4 only, and <code>dualstack</code> for
   *       IPv4 and IPv6.</p>
   *          <p>The default value is <code>dualstack</code>.</p>
   */
  ipAddressType?: IpAddressType | string;

  /**
   * @public
   * <p>The tag keys and optional values to add to the distribution during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * <p>Describes the origin resource of an Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>An origin can be a Lightsail instance, bucket, or load balancer. A distribution pulls
 *       content from an origin, caches it, and serves it to viewers via a worldwide network of edge
 *       servers.</p>
 */
export interface Origin {
  /**
   * @public
   * <p>The name of the origin resource.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The resource type of the origin resource (e.g., <i>Instance</i>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * @public
   * <p>The AWS Region name of the origin resource.</p>
   */
  regionName?: RegionName | string;

  /**
   * @public
   * <p>The protocol that your Amazon Lightsail distribution uses when establishing a connection
   *       with your origin to pull content.</p>
   */
  protocolPolicy?: OriginProtocolPolicyEnum | string;
}

/**
 * @public
 * <p>Describes an Amazon Lightsail content delivery network (CDN) distribution.</p>
 */
export interface LightsailDistribution {
  /**
   * @public
   * <p>The name of the distribution.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the distribution.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The support code. Include this code in your email to support when you have questions about
   *       your Lightsail distribution. This code enables our support team to look up your Lightsail
   *       information more easily.</p>
   */
  supportCode?: string;

  /**
   * @public
   * <p>The timestamp when the distribution was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
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
   * @public
   * <p>The Lightsail resource type (e.g., <code>Distribution</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * @public
   * <p>The alternate domain names of the distribution.</p>
   */
  alternativeDomainNames?: string[];

  /**
   * @public
   * <p>The status of the distribution.</p>
   */
  status?: string;

  /**
   * @public
   * <p>Indicates whether the distribution is enabled.</p>
   */
  isEnabled?: boolean;

  /**
   * @public
   * <p>The domain name of the distribution.</p>
   */
  domainName?: string;

  /**
   * @public
   * <p>The ID of the bundle currently applied to the distribution.</p>
   */
  bundleId?: string;

  /**
   * @public
   * <p>The name of the SSL/TLS certificate attached to the distribution, if any.</p>
   */
  certificateName?: string;

  /**
   * @public
   * <p>An object that describes the origin resource of the distribution, such as a Lightsail
   *       instance, bucket, or load balancer.</p>
   *          <p>The distribution pulls, caches, and serves content from the origin.</p>
   */
  origin?: Origin;

  /**
   * @public
   * <p>The public DNS of the origin.</p>
   */
  originPublicDNS?: string;

  /**
   * @public
   * <p>An object that describes the default cache behavior of the distribution.</p>
   */
  defaultCacheBehavior?: CacheBehavior;

  /**
   * @public
   * <p>An object that describes the cache behavior settings of the distribution.</p>
   */
  cacheBehaviorSettings?: CacheSettings;

  /**
   * @public
   * <p>An array of objects that describe the per-path cache behavior of the distribution.</p>
   */
  cacheBehaviors?: CacheBehaviorPerPath[];

  /**
   * @public
   * <p>Indicates whether the bundle that is currently applied to your distribution, specified
   *       using the <code>distributionName</code> parameter, can be changed to another bundle.</p>
   *          <p>Use the <code>UpdateDistributionBundle</code> action to change your distribution's
   *       bundle.</p>
   */
  ableToUpdateBundle?: boolean;

  /**
   * @public
   * <p>The IP address type of the distribution.</p>
   *          <p>The possible values are <code>ipv4</code> for IPv4 only, and <code>dualstack</code> for
   *       IPv4 and IPv6.</p>
   */
  ipAddressType?: IpAddressType | string;

  /**
   * @public
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateDistributionResult {
  /**
   * @public
   * <p>An object that describes the distribution created.</p>
   */
  distribution?: LightsailDistribution;

  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

/**
 * @public
 */
export interface CreateDomainRequest {
  /**
   * @public
   * <p>The domain name to manage (e.g., <code>example.com</code>).</p>
   */
  domainName: string | undefined;

  /**
   * @public
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateDomainResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

/**
 * @public
 * <p>Describes a domain recordset entry.</p>
 */
export interface DomainEntry {
  /**
   * @public
   * <p>The ID of the domain recordset entry.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the domain.</p>
   */
  name?: string;

  /**
   * @public
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
   * @public
   * <p>When <code>true</code>, specifies whether the domain entry is an alias used by the Lightsail load balancer, Lightsail container service, Lightsail content delivery network (CDN) distribution, or another Amazon Web Services
   *       resource. You can include an alias (A type) record in your request, which points to the DNS
   *       name of a load balancer, container service, CDN distribution, or other Amazon Web Services
   *       resource and routes traffic to that resource.</p>
   */
  isAlias?: boolean;

  /**
   * @public
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
   * @public
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

/**
 * @public
 */
export interface CreateDomainEntryRequest {
  /**
   * @public
   * <p>The domain name (e.g., <code>example.com</code>) for which you want to create the domain
   *       entry.</p>
   */
  domainName: string | undefined;

  /**
   * @public
   * <p>An array of key-value pairs containing information about the domain entry request.</p>
   */
  domainEntry: DomainEntry | undefined;
}

/**
 * @public
 */
export interface CreateDomainEntryResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

/**
 * @public
 */
export interface CreateGUISessionAccessDetailsRequest {
  /**
   * @public
   * <p>The resource name.</p>
   */
  resourceName: string | undefined;
}

/**
 * @public
 * <p>Describes a web-based, remote graphical user interface (GUI), NICE DCV session. The session is used to access a virtual
 *       computer’s operating system or application.</p>
 */
export interface Session {
  /**
   * @public
   * <p>The session name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The session URL.</p>
   */
  url?: string;

  /**
   * @public
   * <p>When true, this Boolean value indicates the primary session for the specified
   *       resource.</p>
   */
  isPrimary?: boolean;
}

/**
 * @public
 * @enum
 */
export const Status = {
  FailedInstanceCreation: "failedInstanceCreation",
  FailedStartingGUISession: "failedStartingGUISession",
  FailedStoppingGUISession: "failedStoppingGUISession",
  NotStarted: "notStarted",
  SettingUpInstance: "settingUpInstance",
  StartExpired: "startExpired",
  Started: "started",
  Starting: "starting",
  Stopped: "stopped",
  Stopping: "stopping",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 */
export interface CreateGUISessionAccessDetailsResult {
  /**
   * @public
   * <p>The resource name.</p>
   */
  resourceName?: string;

  /**
   * @public
   * <p>The status of the operation.</p>
   */
  status?: Status | string;

  /**
   * @public
   * <p>The percentage of completion for the operation.</p>
   */
  percentageComplete?: number;

  /**
   * @public
   * <p>The reason the operation failed.</p>
   */
  failureReason?: string;

  /**
   * @public
   * <p>Returns information about the specified NICE DCV GUI session.</p>
   */
  sessions?: Session[];
}

/**
 * @public
 */
export interface CreateInstancesRequest {
  /**
   * @public
   * <p>The names to use for your new Lightsail instances. Separate multiple values using
   *       quotation marks and commas, for example:
   *       <code>["MyFirstInstance","MySecondInstance"]</code>
   *          </p>
   */
  instanceNames: string[] | undefined;

  /**
   * @public
   * <p>The Availability Zone in which to create your instance. Use the following format:
   *         <code>us-east-2a</code> (case sensitive). You can get a list of Availability Zones by using
   *       the <a href="http://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRegions.html">get
   *         regions</a> operation. Be sure to add the <code>include Availability Zones</code>
   *       parameter to your request.</p>
   */
  availabilityZone: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>(Deprecated) The name for your custom image.</p>
   *          <note>
   *             <p>In releases prior to June 12, 2017, this parameter was ignored by the API. It is now
   *         deprecated.</p>
   *          </note>
   */
  customImageName?: string;

  /**
   * @public
   * <p>The ID for a virtual private server image (e.g., <code>app_wordpress_4_4</code> or
   *         <code>app_lamp_7_0</code>). Use the <code>get blueprints</code> operation to return a list
   *       of available images (or <i>blueprints</i>).</p>
   *          <note>
   *             <p>Use active blueprints when creating new instances. Inactive blueprints are listed to
   *         support customers with existing instances and are not necessarily available to create new
   *         instances. Blueprints are marked inactive when they become outdated due to operating system
   *         updates or new application releases.</p>
   *          </note>
   */
  blueprintId: string | undefined;

  /**
   * @public
   * <p>The bundle of specification information for your virtual private server (or
   *         <i>instance</i>), including the pricing plan (e.g.,
   *       <code>micro_1_0</code>).</p>
   */
  bundleId: string | undefined;

  /**
   * @public
   * <p>A launch script you can create that configures a server with additional user data. For
   *       example, you might want to run <code>apt-get -y update</code>.</p>
   *          <note>
   *             <p>Depending on the machine image you choose, the command to get software on your instance
   *         varies. Amazon Linux and CentOS use <code>yum</code>, Debian and Ubuntu use
   *           <code>apt-get</code>, and FreeBSD uses <code>pkg</code>. For a complete list, see the
   *           <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/compare-options-choose-lightsail-instance-image">Amazon Lightsail Developer Guide</a>.</p>
   *          </note>
   */
  userData?: string;

  /**
   * @public
   * <p>The name of your key pair.</p>
   */
  keyPairName?: string;

  /**
   * @public
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>An array of objects representing the add-ons to enable for the new instance.</p>
   */
  addOns?: AddOnRequest[];

  /**
   * @public
   * <p>The IP address type for the instance.</p>
   *          <p>The possible values are <code>ipv4</code> for IPv4 only, and <code>dualstack</code> for
   *       IPv4 and IPv6.</p>
   *          <p>The default value is <code>dualstack</code>.</p>
   */
  ipAddressType?: IpAddressType | string;
}

/**
 * @public
 */
export interface CreateInstancesResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface CreateInstancesFromSnapshotRequest {
  /**
   * @public
   * <p>The names for your new instances.</p>
   */
  instanceNames: string[] | undefined;

  /**
   * @public
   * <p>An object containing information about one or more disk mappings.</p>
   */
  attachedDiskMapping?: Record<string, DiskMap[]>;

  /**
   * @public
   * <p>The Availability Zone where you want to create your instances. Use the following
   *       formatting: <code>us-east-2a</code> (case sensitive). You can get a list of Availability Zones
   *       by using the <a href="http://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRegions.html">get
   *         regions</a> operation. Be sure to add the <code>include Availability Zones</code>
   *       parameter to your request.</p>
   */
  availabilityZone: string | undefined;

  /**
   * @public
   * <p>The name of the instance snapshot on which you are basing your new instances. Use the get
   *       instance snapshots operation to return information about your existing snapshots.</p>
   *          <p>Constraint:</p>
   *          <ul>
   *             <li>
   *                <p>This parameter cannot be defined together with the <code>source instance name</code>
   *           parameter. The <code>instance snapshot name</code> and <code>source instance name</code>
   *           parameters are mutually exclusive.</p>
   *             </li>
   *          </ul>
   */
  instanceSnapshotName?: string;

  /**
   * @public
   * <p>The bundle of specification information for your virtual private server (or
   *         <i>instance</i>), including the pricing plan (e.g.,
   *       <code>micro_1_0</code>).</p>
   */
  bundleId: string | undefined;

  /**
   * @public
   * <p>You can create a launch script that configures a server with additional user data. For
   *       example, <code>apt-get -y update</code>.</p>
   *          <note>
   *             <p>Depending on the machine image you choose, the command to get software on your instance
   *         varies. Amazon Linux and CentOS use <code>yum</code>, Debian and Ubuntu use
   *           <code>apt-get</code>, and FreeBSD uses <code>pkg</code>. For a complete list, see the
   *           <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/compare-options-choose-lightsail-instance-image">Amazon Lightsail Developer Guide</a>.</p>
   *          </note>
   */
  userData?: string;

  /**
   * @public
   * <p>The name for your key pair.</p>
   */
  keyPairName?: string;

  /**
   * @public
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>An array of objects representing the add-ons to enable for the new instance.</p>
   */
  addOns?: AddOnRequest[];

  /**
   * @public
   * <p>The IP address type for the instance.</p>
   *          <p>The possible values are <code>ipv4</code> for IPv4 only, and <code>dualstack</code> for
   *       IPv4 and IPv6.</p>
   *          <p>The default value is <code>dualstack</code>.</p>
   */
  ipAddressType?: IpAddressType | string;

  /**
   * @public
   * <p>The name of the source instance from which the source automatic snapshot was
   *       created.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>This parameter cannot be defined together with the <code>instance snapshot name</code>
   *           parameter. The <code>source instance name</code> and <code>instance snapshot name</code>
   *           parameters are mutually exclusive.</p>
   *             </li>
   *             <li>
   *                <p>Define this parameter only when creating a new instance from an automatic snapshot.
   *           For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p>
   *             </li>
   *          </ul>
   */
  sourceInstanceName?: string;

  /**
   * @public
   * <p>The date of the automatic snapshot to use for the new instance. Use the <code>get auto
   *         snapshots</code> operation to identify the dates of the available automatic
   *       snapshots.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be specified in <code>YYYY-MM-DD</code> format.</p>
   *             </li>
   *             <li>
   *                <p>This parameter cannot be defined together with the <code>use latest restorable auto
   *             snapshot</code> parameter. The <code>restore date</code> and <code>use latest restorable
   *             auto snapshot</code> parameters are mutually exclusive.</p>
   *             </li>
   *             <li>
   *                <p>Define this parameter only when creating a new instance from an automatic snapshot.
   *           For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p>
   *             </li>
   *          </ul>
   */
  restoreDate?: string;

  /**
   * @public
   * <p>A Boolean value to indicate whether to use the latest available automatic snapshot.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>This parameter cannot be defined together with the <code>restore date</code>
   *           parameter. The <code>use latest restorable auto snapshot</code> and <code>restore
   *             date</code> parameters are mutually exclusive.</p>
   *             </li>
   *             <li>
   *                <p>Define this parameter only when creating a new instance from an automatic snapshot.
   *           For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p>
   *             </li>
   *          </ul>
   */
  useLatestRestorableAutoSnapshot?: boolean;
}

/**
 * @public
 */
export interface CreateInstancesFromSnapshotResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface CreateInstanceSnapshotRequest {
  /**
   * @public
   * <p>The name for your new snapshot.</p>
   */
  instanceSnapshotName: string | undefined;

  /**
   * @public
   * <p>The Lightsail instance on which to base your snapshot.</p>
   */
  instanceName: string | undefined;

  /**
   * @public
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateInstanceSnapshotResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface CreateKeyPairRequest {
  /**
   * @public
   * <p>The name for your new key pair.</p>
   */
  keyPairName: string | undefined;

  /**
   * @public
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * <p>Describes an SSH key pair.</p>
 */
export interface KeyPair {
  /**
   * @public
   * <p>The friendly name of the SSH key pair.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the key pair (e.g.,
   *         <code>arn:aws:lightsail:us-east-2:123456789101:KeyPair/05859e3d-331d-48ba-9034-12345EXAMPLE</code>).</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The support code. Include this code in your email to support when you have questions about
   *       an instance or another resource in Lightsail. This code enables our support team to look up
   *       your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * @public
   * <p>The timestamp when the key pair was created (e.g., <code>1479816991.349</code>).</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The region name and Availability Zone where the key pair was created.</p>
   */
  location?: ResourceLocation;

  /**
   * @public
   * <p>The resource type (usually <code>KeyPair</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * @public
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>The RSA fingerprint of the key pair.</p>
   */
  fingerprint?: string;
}

/**
 * @public
 */
export interface CreateKeyPairResult {
  /**
   * @public
   * <p>An array of key-value pairs containing information about the new key pair you just
   *       created.</p>
   */
  keyPair?: KeyPair;

  /**
   * @public
   * <p>A base64-encoded public key of the <code>ssh-rsa</code> type.</p>
   */
  publicKeyBase64?: string;

  /**
   * @public
   * <p>A base64-encoded RSA private key.</p>
   */
  privateKeyBase64?: string;

  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

/**
 * @public
 */
export interface CreateLoadBalancerRequest {
  /**
   * @public
   * <p>The name of your load balancer.</p>
   */
  loadBalancerName: string | undefined;

  /**
   * @public
   * <p>The instance port where you're creating your load balancer.</p>
   */
  instancePort: number | undefined;

  /**
   * @public
   * <p>The path you provided to perform the load balancer health check. If you didn't specify a
   *       health check path, Lightsail uses the root path of your website (e.g.,
   *       <code>"/"</code>).</p>
   *          <p>You may want to specify a custom health check path other than the root of your application
   *       if your home page loads slowly or has a lot of media or scripting on it.</p>
   */
  healthCheckPath?: string;

  /**
   * @public
   * <p>The name of the SSL/TLS certificate.</p>
   *          <p>If you specify <code>certificateName</code>, then <code>certificateDomainName</code> is
   *       required (and vice-versa).</p>
   */
  certificateName?: string;

  /**
   * @public
   * <p>The domain name with which your certificate is associated (e.g.,
   *       <code>example.com</code>).</p>
   *          <p>If you specify <code>certificateDomainName</code>, then <code>certificateName</code> is
   *       required (and vice-versa).</p>
   */
  certificateDomainName?: string;

  /**
   * @public
   * <p>The optional alternative domains and subdomains to use with your SSL/TLS certificate
   *       (e.g., <code>www.example.com</code>, <code>example.com</code>, <code>m.example.com</code>,
   *         <code>blog.example.com</code>).</p>
   */
  certificateAlternativeNames?: string[];

  /**
   * @public
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>The IP address type for the load balancer.</p>
   *          <p>The possible values are <code>ipv4</code> for IPv4 only, and <code>dualstack</code> for
   *       IPv4 and IPv6.</p>
   *          <p>The default value is <code>dualstack</code>.</p>
   */
  ipAddressType?: IpAddressType | string;

  /**
   * @public
   * <p>The name of the TLS policy to apply to the load balancer.</p>
   *          <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancerTlsPolicies.html">GetLoadBalancerTlsPolicies</a> action to get a list of TLS policy names that you can
   *       specify.</p>
   *          <p>For more information about load balancer TLS policies, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configure-load-balancer-tls-security-policy">Configuring TLS security policies on your Amazon Lightsail load
   *         balancers</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
   */
  tlsPolicyName?: string;
}

/**
 * @public
 */
export interface CreateLoadBalancerResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface CreateLoadBalancerTlsCertificateRequest {
  /**
   * @public
   * <p>The load balancer name where you want to create the SSL/TLS certificate.</p>
   */
  loadBalancerName: string | undefined;

  /**
   * @public
   * <p>The SSL/TLS certificate name.</p>
   *          <p>You can have up to 10 certificates in your account at one time. Each Lightsail load
   *       balancer can have up to 2 certificates associated with it at one time. There is also an
   *       overall limit to the number of certificates that can be issue in a 365-day period. For more
   *       information, see <a href="http://docs.aws.amazon.com/acm/latest/userguide/acm-limits.html">Limits</a>.</p>
   */
  certificateName: string | undefined;

  /**
   * @public
   * <p>The domain name (e.g., <code>example.com</code>) for your SSL/TLS certificate.</p>
   */
  certificateDomainName: string | undefined;

  /**
   * @public
   * <p>An array of strings listing alternative domains and subdomains for your SSL/TLS
   *       certificate. Lightsail will de-dupe the names for you. You can have a maximum of 9
   *       alternative names (in addition to the 1 primary domain). We do not support wildcards (e.g.,
   *         <code>*.example.com</code>).</p>
   */
  certificateAlternativeNames?: string[];

  /**
   * @public
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateLoadBalancerTlsCertificateResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface CreateRelationalDatabaseRequest {
  /**
   * @public
   * <p>The name to use for your new Lightsail database resource.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 2 to 255 alphanumeric characters, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>The first and last character must be a letter or number.</p>
   *             </li>
   *          </ul>
   */
  relationalDatabaseName: string | undefined;

  /**
   * @public
   * <p>The Availability Zone in which to create your new database. Use the
   *         <code>us-east-2a</code> case-sensitive format.</p>
   *          <p>You can get a list of Availability Zones by using the <code>get regions</code> operation.
   *       Be sure to add the <code>include relational database Availability Zones</code> parameter to
   *       your request.</p>
   */
  availabilityZone?: string;

  /**
   * @public
   * <p>The blueprint ID for your new database. A blueprint describes the major engine version of
   *       a database.</p>
   *          <p>You can get a list of database blueprints IDs by using the <code>get relational database
   *         blueprints</code> operation.</p>
   */
  relationalDatabaseBlueprintId: string | undefined;

  /**
   * @public
   * <p>The bundle ID for your new database. A bundle describes the performance specifications for
   *       your database.</p>
   *          <p>You can get a list of database bundle IDs by using the <code>get relational database
   *         bundles</code> operation.</p>
   */
  relationalDatabaseBundleId: string | undefined;

  /**
   * @public
   * <p>The meaning of this parameter differs according to the database engine you use.</p>
   *          <p>
   *             <b>MySQL</b>
   *          </p>
   *          <p>The name of the database to create when the Lightsail database resource is created. If
   *       this parameter isn't specified, no database is created in the database resource.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain 1 to 64 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>Must begin with a letter. Subsequent characters can be letters, underscores, or digits
   *           (0- 9).</p>
   *             </li>
   *             <li>
   *                <p>Can't be a word reserved by the specified database engine.</p>
   *                <p>For more information about reserved words in MySQL, see the Keywords and Reserved
   *           Words articles for <a href="https://dev.mysql.com/doc/refman/5.6/en/keywords.html">MySQL 5.6</a>, <a href="https://dev.mysql.com/doc/refman/5.7/en/keywords.html">MySQL 5.7</a>, and <a href="https://dev.mysql.com/doc/refman/8.0/en/keywords.html">MySQL 8.0</a>.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *          <p>The name of the database to create when the Lightsail database resource is created. If
   *       this parameter isn't specified, a database named <code>postgres</code> is created in the
   *       database resource.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain 1 to 63 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>Must begin with a letter. Subsequent characters can be letters, underscores, or digits
   *           (0- 9).</p>
   *             </li>
   *             <li>
   *                <p>Can't be a word reserved by the specified database engine.</p>
   *                <p>For more information about reserved words in PostgreSQL, see the SQL Key Words
   *           articles for <a href="https://www.postgresql.org/docs/9.6/sql-keywords-appendix.html">PostgreSQL 9.6</a>, <a href="https://www.postgresql.org/docs/10/sql-keywords-appendix.html">PostgreSQL
   *             10</a>, <a href="https://www.postgresql.org/docs/11/sql-keywords-appendix.html">PostgreSQL 11</a>, and <a href="https://www.postgresql.org/docs/12/sql-keywords-appendix.html">PostgreSQL
   *             12</a>.</p>
   *             </li>
   *          </ul>
   */
  masterDatabaseName: string | undefined;

  /**
   * @public
   * <p>The name for the master user.</p>
   *          <p>
   *             <b>MySQL</b>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Required for MySQL.</p>
   *             </li>
   *             <li>
   *                <p>Must be 1 to 16 letters or numbers. Can contain underscores.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't be a reserved word for the chosen database engine.</p>
   *                <p>For more information about reserved words in MySQL 5.6 or 5.7, see the Keywords and
   *           Reserved Words articles for <a href="https://dev.mysql.com/doc/refman/5.6/en/keywords.html">MySQL 5.6</a>, <a href="https://dev.mysql.com/doc/refman/5.7/en/keywords.html">MySQL 5.7</a>, or <a href="https://dev.mysql.com/doc/refman/8.0/en/keywords.html">MySQL 8.0</a>.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Required for PostgreSQL.</p>
   *             </li>
   *             <li>
   *                <p>Must be 1 to 63 letters or numbers. Can contain underscores.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't be a reserved word for the chosen database engine.</p>
   *                <p>For more information about reserved words in MySQL 5.6 or 5.7, see the Keywords and
   *           Reserved Words articles for <a href="https://www.postgresql.org/docs/9.6/sql-keywords-appendix.html">PostgreSQL
   *             9.6</a>, <a href="https://www.postgresql.org/docs/10/sql-keywords-appendix.html">PostgreSQL 10</a>, <a href="https://www.postgresql.org/docs/11/sql-keywords-appendix.html">PostgreSQL
   *             11</a>, and <a href="https://www.postgresql.org/docs/12/sql-keywords-appendix.html">PostgreSQL
   *             12</a>.</p>
   *             </li>
   *          </ul>
   */
  masterUsername: string | undefined;

  /**
   * @public
   * <p>The password for the master user. The password can include any printable ASCII character
   *       except "/", """, or "@". It cannot contain spaces.</p>
   *          <p>
   *             <b>MySQL</b>
   *          </p>
   *          <p>Constraints: Must contain from 8 to 41 characters.</p>
   *          <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *          <p>Constraints: Must contain from 8 to 128 characters.</p>
   */
  masterUserPassword?: string;

  /**
   * @public
   * <p>The daily time range during which automated backups are created for your new database if
   *       automated backups are enabled.</p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for each
   *       AWS Region. For more information about the preferred backup window time blocks for each
   *       region, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow">Working With Backups</a> guide in the Amazon Relational Database Service documentation.</p>
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
   * @public
   * <p>The weekly time range during which system maintenance can occur on your new
   *       database.</p>
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
   * @public
   * <p>Specifies the accessibility options for your new database. A value of <code>true</code>
   *       specifies a database that is available to resources outside of your Lightsail account. A
   *       value of <code>false</code> specifies a database that is available only to your Lightsail
   *       resources in the same region as your database.</p>
   */
  publiclyAccessible?: boolean;

  /**
   * @public
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateRelationalDatabaseResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface CreateRelationalDatabaseFromSnapshotRequest {
  /**
   * @public
   * <p>The name to use for your new Lightsail database resource.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 2 to 255 alphanumeric characters, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>The first and last character must be a letter or number.</p>
   *             </li>
   *          </ul>
   */
  relationalDatabaseName: string | undefined;

  /**
   * @public
   * <p>The Availability Zone in which to create your new database. Use the
   *         <code>us-east-2a</code> case-sensitive format.</p>
   *          <p>You can get a list of Availability Zones by using the <code>get regions</code> operation.
   *       Be sure to add the <code>include relational database Availability Zones</code> parameter to
   *       your request.</p>
   */
  availabilityZone?: string;

  /**
   * @public
   * <p>Specifies the accessibility options for your new database. A value of <code>true</code>
   *       specifies a database that is available to resources outside of your Lightsail account. A
   *       value of <code>false</code> specifies a database that is available only to your Lightsail
   *       resources in the same region as your database.</p>
   */
  publiclyAccessible?: boolean;

  /**
   * @public
   * <p>The name of the database snapshot from which to create your new database.</p>
   */
  relationalDatabaseSnapshotName?: string;

  /**
   * @public
   * <p>The bundle ID for your new database. A bundle describes the performance specifications for
   *       your database.</p>
   *          <p>You can get a list of database bundle IDs by using the <code>get relational database
   *         bundles</code> operation.</p>
   *          <p>When creating a new database from a snapshot, you cannot choose a bundle that is smaller
   *       than the bundle of the source database.</p>
   */
  relationalDatabaseBundleId?: string;

  /**
   * @public
   * <p>The name of the source database.</p>
   */
  sourceRelationalDatabaseName?: string;

  /**
   * @public
   * <p>The date and time to restore your database from.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be before the latest restorable time for the database.</p>
   *             </li>
   *             <li>
   *                <p>Cannot be specified if the <code>use latest restorable time</code> parameter is
   *             <code>true</code>.</p>
   *             </li>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Specified in the Unix time format.</p>
   *                <p>For example, if you wish to use a restore time of October 1, 2018, at 8 PM UTC, then
   *           you input <code>1538424000</code> as the restore time.</p>
   *             </li>
   *          </ul>
   */
  restoreTime?: Date;

  /**
   * @public
   * <p>Specifies whether your database is restored from the latest backup time. A value of
   *         <code>true</code> restores from the latest backup time. </p>
   *          <p>Default: <code>false</code>
   *          </p>
   *          <p>Constraints: Cannot be specified if the <code>restore time</code> parameter is
   *       provided.</p>
   */
  useLatestRestorableTime?: boolean;

  /**
   * @public
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateRelationalDatabaseFromSnapshotResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface CreateRelationalDatabaseSnapshotRequest {
  /**
   * @public
   * <p>The name of the database on which to base your new snapshot.</p>
   */
  relationalDatabaseName: string | undefined;

  /**
   * @public
   * <p>The name for your new database snapshot.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 2 to 255 alphanumeric characters, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>The first and last character must be a letter or number.</p>
   *             </li>
   *          </ul>
   */
  relationalDatabaseSnapshotName: string | undefined;

  /**
   * @public
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateRelationalDatabaseSnapshotResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface DeleteAlarmRequest {
  /**
   * @public
   * <p>The name of the alarm to delete.</p>
   */
  alarmName: string | undefined;
}

/**
 * @public
 */
export interface DeleteAlarmResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface DeleteAutoSnapshotRequest {
  /**
   * @public
   * <p>The name of the source instance or disk from which to delete the automatic
   *       snapshot.</p>
   */
  resourceName: string | undefined;

  /**
   * @public
   * <p>The date of the automatic snapshot to delete in <code>YYYY-MM-DD</code> format. Use the
   *         <code>get auto snapshots</code> operation to get the available automatic snapshots for a
   *       resource.</p>
   */
  date: string | undefined;
}

/**
 * @public
 */
export interface DeleteAutoSnapshotResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface DeleteBucketRequest {
  /**
   * @public
   * <p>The name of the bucket to delete.</p>
   *          <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBuckets.html">GetBuckets</a> action to get a list of bucket names
   *       that you can specify.</p>
   */
  bucketName: string | undefined;

  /**
   * @public
   * <p>A Boolean value that indicates whether to force delete the bucket.</p>
   *          <p>You must force delete the bucket if it has one of the following conditions:</p>
   *          <ul>
   *             <li>
   *                <p>The bucket is the origin of a distribution.</p>
   *             </li>
   *             <li>
   *                <p>The bucket has instances that were granted access to it using the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_SetResourceAccessForBucket.html">SetResourceAccessForBucket</a> action.</p>
   *             </li>
   *             <li>
   *                <p>The bucket has objects.</p>
   *             </li>
   *             <li>
   *                <p>The bucket has access keys.</p>
   *             </li>
   *          </ul>
   *          <important>
   *             <p>Force deleting a bucket might impact other resources that rely on the bucket, such as
   *         instances, distributions, or software that use the issued access keys.</p>
   *          </important>
   */
  forceDelete?: boolean;
}

/**
 * @public
 */
export interface DeleteBucketResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface DeleteBucketAccessKeyRequest {
  /**
   * @public
   * <p>The name of the bucket that the access key belongs to.</p>
   */
  bucketName: string | undefined;

  /**
   * @public
   * <p>The ID of the access key to delete.</p>
   *          <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketAccessKeys.html">GetBucketAccessKeys</a> action to get a
   *       list of access key IDs that you can specify.</p>
   */
  accessKeyId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketAccessKeyResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface DeleteCertificateRequest {
  /**
   * @public
   * <p>The name of the certificate to delete.</p>
   *          <p>Use the <code>GetCertificates</code> action to get a list of certificate names that you
   *       can specify.</p>
   */
  certificateName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCertificateResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface DeleteContactMethodRequest {
  /**
   * @public
   * <p>The protocol that will be deleted, such as <code>Email</code> or <code>SMS</code> (text
   *       messaging).</p>
   *          <note>
   *             <p>To delete an <code>Email</code> and an <code>SMS</code> contact method if you added
   *         both, you must run separate <code>DeleteContactMethod</code> actions to delete each
   *         protocol.</p>
   *          </note>
   */
  protocol: ContactProtocol | string | undefined;
}

/**
 * @public
 */
export interface DeleteContactMethodResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface DeleteContainerImageRequest {
  /**
   * @public
   * <p>The name of the container service for which to delete a registered container image.</p>
   */
  serviceName: string | undefined;

  /**
   * @public
   * <p>The name of the container image to delete from the container service.</p>
   *          <p>Use the <code>GetContainerImages</code> action to get the name of the container images
   *       that are registered to a container service.</p>
   *          <note>
   *             <p>Container images sourced from your Lightsail container service, that are registered
   *         and stored on your service, start with a colon (<code>:</code>). For example,
   *           <code>:container-service-1.mystaticwebsite.1</code>. Container images sourced from a
   *         public registry like Docker Hub don't start with a colon. For example,
   *           <code>nginx:latest</code> or <code>nginx</code>.</p>
   *          </note>
   */
  image: string | undefined;
}

/**
 * @public
 */
export interface DeleteContainerImageResult {}

/**
 * @public
 */
export interface DeleteContainerServiceRequest {
  /**
   * @public
   * <p>The name of the container service to delete.</p>
   */
  serviceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteContainerServiceResult {}

/**
 * @public
 */
export interface DeleteDiskRequest {
  /**
   * @public
   * <p>The unique name of the disk you want to delete (e.g., <code>my-disk</code>).</p>
   */
  diskName: string | undefined;

  /**
   * @public
   * <p>A Boolean value to indicate whether to delete all add-ons for the disk.</p>
   */
  forceDeleteAddOns?: boolean;
}

/**
 * @public
 */
export interface DeleteDiskResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface DeleteDiskSnapshotRequest {
  /**
   * @public
   * <p>The name of the disk snapshot you want to delete (e.g.,
   *       <code>my-disk-snapshot</code>).</p>
   */
  diskSnapshotName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDiskSnapshotResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface DeleteDistributionRequest {
  /**
   * @public
   * <p>The name of the distribution to delete.</p>
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   */
  distributionName?: string;
}

/**
 * @public
 */
export interface DeleteDistributionResult {
  /**
   * @public
   * <p>An object that describes the result of the action, such as the status of the request, the
   *       timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

/**
 * @public
 */
export interface DeleteDomainRequest {
  /**
   * @public
   * <p>The specific domain name to delete.</p>
   */
  domainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

/**
 * @public
 */
export interface DeleteDomainEntryRequest {
  /**
   * @public
   * <p>The name of the domain entry to delete.</p>
   */
  domainName: string | undefined;

  /**
   * @public
   * <p>An array of key-value pairs containing information about your domain entries.</p>
   */
  domainEntry: DomainEntry | undefined;
}

/**
 * @public
 */
export interface DeleteDomainEntryResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

/**
 * @public
 */
export interface DeleteInstanceRequest {
  /**
   * @public
   * <p>The name of the instance to delete.</p>
   */
  instanceName: string | undefined;

  /**
   * @public
   * <p>A Boolean value to indicate whether to delete all add-ons for the instance.</p>
   */
  forceDeleteAddOns?: boolean;
}

/**
 * @public
 */
export interface DeleteInstanceResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface DeleteInstanceSnapshotRequest {
  /**
   * @public
   * <p>The name of the snapshot to delete.</p>
   */
  instanceSnapshotName: string | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceSnapshotResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface DeleteKeyPairRequest {
  /**
   * @public
   * <p>The name of the key pair to delete.</p>
   */
  keyPairName: string | undefined;

  /**
   * @public
   * <p>The RSA fingerprint of the Lightsail default key pair to delete.</p>
   *          <note>
   *             <p>The <code>expectedFingerprint</code> parameter is required only when specifying to
   *         delete a Lightsail default key pair.</p>
   *          </note>
   */
  expectedFingerprint?: string;
}

/**
 * @public
 */
export interface DeleteKeyPairResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

/**
 * @public
 */
export interface DeleteKnownHostKeysRequest {
  /**
   * @public
   * <p>The name of the instance for which you want to reset the host key or certificate.</p>
   */
  instanceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteKnownHostKeysResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface DeleteLoadBalancerRequest {
  /**
   * @public
   * <p>The name of the load balancer you want to delete.</p>
   */
  loadBalancerName: string | undefined;
}

/**
 * @public
 */
export interface DeleteLoadBalancerResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface DeleteLoadBalancerTlsCertificateRequest {
  /**
   * @public
   * <p>The load balancer name.</p>
   */
  loadBalancerName: string | undefined;

  /**
   * @public
   * <p>The SSL/TLS certificate name.</p>
   */
  certificateName: string | undefined;

  /**
   * @public
   * <p>When <code>true</code>, forces the deletion of an SSL/TLS certificate.</p>
   *          <p>There can be two certificates associated with a Lightsail load balancer: the primary and
   *       the backup. The <code>force</code> parameter is required when the primary SSL/TLS certificate
   *       is in use by an instance attached to the load balancer.</p>
   */
  force?: boolean;
}

/**
 * @public
 */
export interface DeleteLoadBalancerTlsCertificateResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface DeleteRelationalDatabaseRequest {
  /**
   * @public
   * <p>The name of the database that you are deleting.</p>
   */
  relationalDatabaseName: string | undefined;

  /**
   * @public
   * <p>Determines whether a final database snapshot is created before your database is deleted.
   *       If <code>true</code> is specified, no database snapshot is created. If <code>false</code> is
   *       specified, a database snapshot is created before your database is deleted.</p>
   *          <p>You must specify the <code>final relational database snapshot name</code> parameter if the
   *         <code>skip final snapshot</code> parameter is <code>false</code>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  skipFinalSnapshot?: boolean;

  /**
   * @public
   * <p>The name of the database snapshot created if <code>skip final snapshot</code> is
   *         <code>false</code>, which is the default value for that parameter.</p>
   *          <note>
   *             <p>Specifying this parameter and also specifying the <code>skip final snapshot</code>
   *         parameter to <code>true</code> results in an error.</p>
   *          </note>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 2 to 255 alphanumeric characters, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>The first and last character must be a letter or number.</p>
   *             </li>
   *          </ul>
   */
  finalRelationalDatabaseSnapshotName?: string;
}

/**
 * @public
 */
export interface DeleteRelationalDatabaseResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface DeleteRelationalDatabaseSnapshotRequest {
  /**
   * @public
   * <p>The name of the database snapshot that you are deleting.</p>
   */
  relationalDatabaseSnapshotName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRelationalDatabaseSnapshotResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface DetachCertificateFromDistributionRequest {
  /**
   * @public
   * <p>The name of the distribution from which to detach the certificate.</p>
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   */
  distributionName: string | undefined;
}

/**
 * @public
 */
export interface DetachCertificateFromDistributionResult {
  /**
   * @public
   * <p>An object that describes the result of the action, such as the status of the request, the
   *       timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

/**
 * @public
 */
export interface DetachDiskRequest {
  /**
   * @public
   * <p>The unique name of the disk you want to detach from your instance (e.g.,
   *         <code>my-disk</code>).</p>
   */
  diskName: string | undefined;
}

/**
 * @public
 */
export interface DetachDiskResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface DetachInstancesFromLoadBalancerRequest {
  /**
   * @public
   * <p>The name of the Lightsail load balancer.</p>
   */
  loadBalancerName: string | undefined;

  /**
   * @public
   * <p>An array of strings containing the names of the instances you want to detach from the load
   *       balancer.</p>
   */
  instanceNames: string[] | undefined;
}

/**
 * @public
 */
export interface DetachInstancesFromLoadBalancerResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface DetachStaticIpRequest {
  /**
   * @public
   * <p>The name of the static IP to detach from the instance.</p>
   */
  staticIpName: string | undefined;
}

/**
 * @public
 */
export interface DetachStaticIpResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface DisableAddOnRequest {
  /**
   * @public
   * <p>The add-on type to disable.</p>
   */
  addOnType: AddOnType | string | undefined;

  /**
   * @public
   * <p>The name of the source resource for which to disable the add-on.</p>
   */
  resourceName: string | undefined;
}

/**
 * @public
 */
export interface DisableAddOnResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 * @enum
 */
export const DiskState = {
  Available: "available",
  Error: "error",
  InUse: "in-use",
  Pending: "pending",
  Unknown: "unknown",
} as const;

/**
 * @public
 */
export type DiskState = (typeof DiskState)[keyof typeof DiskState];

/**
 * @public
 * <p>Describes a block storage disk.</p>
 */
export interface Disk {
  /**
   * @public
   * <p>The unique name of the disk.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the disk.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The support code. Include this code in your email to support when you have questions about
   *       an instance or another resource in Lightsail. This code enables our support team to look up
   *       your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * @public
   * <p>The date when the disk was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The AWS Region and Availability Zone where the disk is located.</p>
   */
  location?: ResourceLocation;

  /**
   * @public
   * <p>The Lightsail resource type (e.g., <code>Disk</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * @public
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>An array of objects representing the add-ons enabled on the disk.</p>
   */
  addOns?: AddOn[];

  /**
   * @public
   * <p>The size of the disk in GB.</p>
   */
  sizeInGb?: number;

  /**
   * @public
   * <p>A Boolean value indicating whether this disk is a system disk (has an operating system
   *       loaded on it).</p>
   */
  isSystemDisk?: boolean;

  /**
   * @public
   * <p>The input/output operations per second (IOPS) of the disk.</p>
   */
  iops?: number;

  /**
   * @public
   * <p>The disk path.</p>
   */
  path?: string;

  /**
   * @public
   * <p>Describes the status of the disk.</p>
   */
  state?: DiskState | string;

  /**
   * @public
   * <p>The resources to which the disk is attached.</p>
   */
  attachedTo?: string;

  /**
   * @public
   * <p>A Boolean value indicating whether the disk is attached.</p>
   */
  isAttached?: boolean;

  /**
   * @public
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
   * @public
   * @deprecated
   *
   * <p>(Deprecated) The number of GB in use by the disk.</p>
   *          <note>
   *             <p>In releases prior to November 14, 2017, this parameter was not included in the API
   *         response. It is now deprecated.</p>
   *          </note>
   */
  gbInUse?: number;

  /**
   * @public
   * <p>The status of automatically mounting a storage disk to a virtual computer.</p>
   *          <important>
   *             <p>This parameter only applies to Lightsail for Research resources.</p>
   *          </important>
   */
  autoMountStatus?: AutoMountStatus | string;
}

/**
 * @public
 * <p>Describes a disk.</p>
 */
export interface DiskInfo {
  /**
   * @public
   * <p>The disk name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The disk path.</p>
   */
  path?: string;

  /**
   * @public
   * <p>The size of the disk in GB (e.g., <code>32</code>).</p>
   */
  sizeInGb?: number;

  /**
   * @public
   * <p>A Boolean value indicating whether this disk is a system disk (has an operating system
   *       loaded on it).</p>
   */
  isSystemDisk?: boolean;
}

/**
 * @public
 * @enum
 */
export const DiskSnapshotState = {
  Completed: "completed",
  Error: "error",
  Pending: "pending",
  Unknown: "unknown",
} as const;

/**
 * @public
 */
export type DiskSnapshotState = (typeof DiskSnapshotState)[keyof typeof DiskSnapshotState];

/**
 * @public
 * <p>Describes a block storage disk snapshot.</p>
 */
export interface DiskSnapshot {
  /**
   * @public
   * <p>The name of the disk snapshot (e.g., <code>my-disk-snapshot</code>).</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the disk snapshot.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The support code. Include this code in your email to support when you have questions about
   *       an instance or another resource in Lightsail. This code enables our support team to look up
   *       your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * @public
   * <p>The date when the disk snapshot was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The AWS Region and Availability Zone where the disk snapshot was created.</p>
   */
  location?: ResourceLocation;

  /**
   * @public
   * <p>The Lightsail resource type (e.g., <code>DiskSnapshot</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * @public
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>The size of the disk in GB.</p>
   */
  sizeInGb?: number;

  /**
   * @public
   * <p>The status of the disk snapshot operation.</p>
   */
  state?: DiskSnapshotState | string;

  /**
   * @public
   * <p>The progress of the snapshot.</p>
   */
  progress?: string;

  /**
   * @public
   * <p>The unique name of the source disk from which the disk snapshot was created.</p>
   */
  fromDiskName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the source disk from which the disk snapshot was
   *       created.</p>
   */
  fromDiskArn?: string;

  /**
   * @public
   * <p>The unique name of the source instance from which the disk (system volume) snapshot was
   *       created.</p>
   */
  fromInstanceName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the source instance from which the disk (system volume)
   *       snapshot was created.</p>
   */
  fromInstanceArn?: string;

  /**
   * @public
   * <p>A Boolean value indicating whether the snapshot was created from an automatic
   *       snapshot.</p>
   */
  isFromAutoSnapshot?: boolean;
}

/**
 * @public
 * <p>Describes a disk snapshot.</p>
 */
export interface DiskSnapshotInfo {
  /**
   * @public
   * <p>The size of the disk in GB (e.g., <code>32</code>).</p>
   */
  sizeInGb?: number;
}

/**
 * @public
 * <p>Describes the specifications of a distribution bundle.</p>
 */
export interface DistributionBundle {
  /**
   * @public
   * <p>The ID of the bundle.</p>
   */
  bundleId?: string;

  /**
   * @public
   * <p>The name of the distribution bundle.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The monthly price, in US dollars, of the bundle.</p>
   */
  price?: number;

  /**
   * @public
   * <p>The monthly network transfer quota of the bundle.</p>
   */
  transferPerMonthInGb?: number;

  /**
   * @public
   * <p>Indicates whether the bundle is active, and can be specified for a new or existing
   *       distribution.</p>
   */
  isActive?: boolean;
}

/**
 * @public
 * @enum
 */
export const DistributionMetricName = {
  BytesDownloaded: "BytesDownloaded",
  BytesUploaded: "BytesUploaded",
  Http4xxErrorRate: "Http4xxErrorRate",
  Http5xxErrorRate: "Http5xxErrorRate",
  Requests: "Requests",
  TotalErrorRate: "TotalErrorRate",
} as const;

/**
 * @public
 */
export type DistributionMetricName = (typeof DistributionMetricName)[keyof typeof DistributionMetricName];

/**
 * @public
 * @enum
 */
export const NameServersUpdateStateCode = {
  Failed: "FAILED",
  Pending: "PENDING",
  Started: "STARTED",
  Succeeded: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type NameServersUpdateStateCode = (typeof NameServersUpdateStateCode)[keyof typeof NameServersUpdateStateCode];

/**
 * @public
 * <p>Describes the state of the name server records update made by Amazon Lightsail
 *       to an Amazon Route 53 registered domain.</p>
 *          <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/understanding-dns-in-amazon-lightsail">DNS in Amazon Lightsail</a> in the <i>Amazon Lightsail
 *         Developer Guide</i>.</p>
 */
export interface NameServersUpdateState {
  /**
   * @public
   * <p>The status code for the name servers update.</p>
   *          <p>Following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code> - The name server records were successfully updated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - The name server record update is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The name server record update failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STARTED</code> - The automatic name server record update started.</p>
   *             </li>
   *          </ul>
   */
  code?: NameServersUpdateStateCode | string;

  /**
   * @public
   * <p>The message that describes the reason for the status code.</p>
   */
  message?: string;
}

/**
 * @public
 * @enum
 */
export const R53HostedZoneDeletionStateCode = {
  Failed: "FAILED",
  Pending: "PENDING",
  Started: "STARTED",
  Succeeded: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type R53HostedZoneDeletionStateCode =
  (typeof R53HostedZoneDeletionStateCode)[keyof typeof R53HostedZoneDeletionStateCode];

/**
 * @public
 * <p>Describes the deletion state of an Amazon Route 53 hosted zone for a domain that is
 *       being automatically delegated to an Amazon Lightsail DNS zone.</p>
 */
export interface R53HostedZoneDeletionState {
  /**
   * @public
   * <p>The status code for the deletion state.</p>
   *          <p>Following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code> - The hosted zone was successfully deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - The hosted zone deletion is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The hosted zone deletion failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STARTED</code> - The hosted zone deletion started.</p>
   *             </li>
   *          </ul>
   */
  code?: R53HostedZoneDeletionStateCode | string;

  /**
   * @public
   * <p>The message that describes the reason for the status code.</p>
   */
  message?: string;
}

/**
 * @public
 * <p>Describes the delegation state of an Amazon Route 53 registered domain to Amazon Lightsail.</p>
 *          <p>When you delegate an Amazon Route 53 registered domain to Lightsail,
 *       you can manage the DNS of the domain using a Lightsail DNS zone. You no longer
 *       use the Route 53 hosted zone to manage the DNS of the domain. To delegate the
 *       domain, Lightsail automatically updates the domain's name servers in Route 53 to the name servers of the Lightsail DNS zone. Then, Lightsail automatically deletes the Route 53 hosted zone for the
 *       domain.</p>
 *          <p>All of the following conditions must be true for automatic domain delegation to be
 *       successful:</p>
 *          <ul>
 *             <li>
 *                <p>The registered domain must be in the same Amazon Web Services account as the Lightsail account making the request.</p>
 *             </li>
 *             <li>
 *                <p>The user or entity making the request must have permission to manage domains in
 *             Route 53.</p>
 *             </li>
 *             <li>
 *                <p>The Route 53 hosted zone for the domain must be empty. It cannot contain DNS
 *           records other than start of authority (SOA) and name server records.</p>
 *             </li>
 *          </ul>
 *          <p>If automatic domain delegation fails, or if you manage the DNS of your domain using a
 *       service other than Route 53, then you must manually add the Lightsail
 *       DNS zone name servers to your domain in order to delegate management of its DNS to Lightsail. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-how-to-create-dns-entry">Creating a DNS zone to manage your domain’s records in Amazon Lightsail</a>
 *       in the <i>Amazon Lightsail Developer Guide</i>.</p>
 */
export interface RegisteredDomainDelegationInfo {
  /**
   * @public
   * <p>An object that describes the state of the name server records that are automatically added
   *       to the Route 53 domain by Lightsail.</p>
   */
  nameServersUpdateState?: NameServersUpdateState;

  /**
   * @public
   * <p>Describes the deletion state of an Amazon Route 53 hosted zone for a domain that is
   *       being automatically delegated to an Amazon Lightsail DNS zone.</p>
   */
  r53HostedZoneDeletionState?: R53HostedZoneDeletionState;
}

/**
 * @public
 * <p>Describes a domain where you are storing recordsets.</p>
 */
export interface Domain {
  /**
   * @public
   * <p>The name of the domain.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the domain recordset (e.g.,
   *         <code>arn:aws:lightsail:global:123456789101:Domain/824cede0-abc7-4f84-8dbc-12345EXAMPLE</code>).</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The support code. Include this code in your email to support when you have questions about
   *       an instance or another resource in Lightsail. This code enables our support team to look up
   *       your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * @public
   * <p>The date when the domain recordset was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The AWS Region and Availability Zones where the domain recordset was created.</p>
   */
  location?: ResourceLocation;

  /**
   * @public
   * <p>The resource type. </p>
   */
  resourceType?: ResourceType | string;

  /**
   * @public
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>An array of key-value pairs containing information about the domain entries.</p>
   */
  domainEntries?: DomainEntry[];

  /**
   * @public
   * <p>An object that describes the state of the Route 53 domain delegation to a
   *         Lightsail DNS zone.</p>
   */
  registeredDomainDelegationInfo?: RegisteredDomainDelegationInfo;
}

/**
 * @public
 */
export interface DownloadDefaultKeyPairRequest {}

/**
 * @public
 */
export interface DownloadDefaultKeyPairResult {
  /**
   * @public
   * <p>A base64-encoded public key of the <code>ssh-rsa</code> type.</p>
   */
  publicKeyBase64?: string;

  /**
   * @public
   * <p>A base64-encoded RSA private key.</p>
   */
  privateKeyBase64?: string;

  /**
   * @public
   * <p>The timestamp when the default key pair was created.</p>
   */
  createdAt?: Date;
}

/**
 * @public
 */
export interface EnableAddOnRequest {
  /**
   * @public
   * <p>The name of the source resource for which to enable or modify the add-on.</p>
   */
  resourceName: string | undefined;

  /**
   * @public
   * <p>An array of strings representing the add-on to enable or modify.</p>
   */
  addOnRequest: AddOnRequest | undefined;
}

/**
 * @public
 */
export interface EnableAddOnResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 */
export interface ExportSnapshotRequest {
  /**
   * @public
   * <p>The name of the instance or disk snapshot to be exported to Amazon EC2.</p>
   */
  sourceSnapshotName: string | undefined;
}

/**
 * @public
 */
export interface ExportSnapshotResult {
  /**
   * @public
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

/**
 * @public
 * <p>Describes an instance snapshot.</p>
 */
export interface InstanceSnapshotInfo {
  /**
   * @public
   * <p>The bundle ID from which the source instance was created (e.g.,
   *       <code>micro_1_0</code>).</p>
   */
  fromBundleId?: string;

  /**
   * @public
   * <p>The blueprint ID from which the source instance (e.g., <code>os_debian_8_3</code>).</p>
   */
  fromBlueprintId?: string;

  /**
   * @public
   * <p>A list of objects describing the disks that were attached to the source instance.</p>
   */
  fromDiskInfo?: DiskInfo[];
}

/**
 * @public
 * @enum
 */
export const ExportSnapshotRecordSourceType = {
  DiskSnapshot: "DiskSnapshot",
  InstanceSnapshot: "InstanceSnapshot",
} as const;

/**
 * @public
 */
export type ExportSnapshotRecordSourceType =
  (typeof ExportSnapshotRecordSourceType)[keyof typeof ExportSnapshotRecordSourceType];

/**
 * @public
 * <p>Describes the source of an export snapshot record.</p>
 */
export interface ExportSnapshotRecordSourceInfo {
  /**
   * @public
   * <p>The Lightsail resource type (e.g., <code>InstanceSnapshot</code> or
   *         <code>DiskSnapshot</code>).</p>
   */
  resourceType?: ExportSnapshotRecordSourceType | string;

  /**
   * @public
   * <p>The date when the source instance or disk snapshot was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The name of the source instance or disk snapshot.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the source instance or disk snapshot.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the snapshot's source instance or disk.</p>
   */
  fromResourceName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the snapshot's source instance or disk.</p>
   */
  fromResourceArn?: string;

  /**
   * @public
   * <p>A list of objects describing an instance snapshot.</p>
   */
  instanceSnapshotInfo?: InstanceSnapshotInfo;

  /**
   * @public
   * <p>A list of objects describing a disk snapshot.</p>
   */
  diskSnapshotInfo?: DiskSnapshotInfo;
}

/**
 * @public
 * <p>Describes an export snapshot record.</p>
 */
export interface ExportSnapshotRecord {
  /**
   * @public
   * <p>The export snapshot record name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the export snapshot record.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The date when the export snapshot record was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The AWS Region and Availability Zone where the export snapshot record is located.</p>
   */
  location?: ResourceLocation;

  /**
   * @public
   * <p>The Lightsail resource type (e.g., <code>ExportSnapshotRecord</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * @public
   * <p>The state of the export snapshot record.</p>
   */
  state?: RecordState | string;

  /**
   * @public
   * <p>A list of objects describing the source of the export snapshot record.</p>
   */
  sourceInfo?: ExportSnapshotRecordSourceInfo;

  /**
   * @public
   * <p>A list of objects describing the destination of the export snapshot record.</p>
   */
  destinationInfo?: DestinationInfo;
}

/**
 * @public
 */
export interface GetActiveNamesRequest {
  /**
   * @public
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetActiveNames</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   */
  pageToken?: string;
}

/**
 * @public
 */
export interface GetActiveNamesResult {
  /**
   * @public
   * <p>The list of active names returned by the get active names request.</p>
   */
  activeNames?: string[];

  /**
   * @public
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetActiveNames</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

/**
 * @public
 */
export interface GetAlarmsRequest {
  /**
   * @public
   * <p>The name of the alarm.</p>
   *          <p>Specify an alarm name to return information about a specific alarm.</p>
   */
  alarmName?: string;

  /**
   * @public
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetAlarms</code> request. If your results
   *       are paginated, the response will return a next page token that you can specify as the page
   *       token in a subsequent request.</p>
   */
  pageToken?: string;

  /**
   * @public
   * <p>The name of the Lightsail resource being monitored by the alarm.</p>
   *          <p>Specify a monitored resource name to return information about all alarms for a specific
   *       resource.</p>
   */
  monitoredResourceName?: string;
}

/**
 * @public
 */
export interface GetAlarmsResult {
  /**
   * @public
   * <p>An array of objects that describe the alarms.</p>
   */
  alarms?: Alarm[];

  /**
   * @public
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetAlarms</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

/**
 * @public
 */
export interface GetAutoSnapshotsRequest {
  /**
   * @public
   * <p>The name of the source instance or disk from which to get automatic snapshot
   *       information.</p>
   */
  resourceName: string | undefined;
}

/**
 * @public
 */
export interface GetAutoSnapshotsResult {
  /**
   * @public
   * <p>The name of the source instance or disk for the automatic snapshots.</p>
   */
  resourceName?: string;

  /**
   * @public
   * <p>The resource type (e.g., <code>Instance</code> or <code>Disk</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * @public
   * <p>An array of objects that describe the automatic snapshots that are available for the
   *       specified source instance or disk.</p>
   */
  autoSnapshots?: AutoSnapshotDetails[];
}

/**
 * @public
 */
export interface GetBlueprintsRequest {
  /**
   * @public
   * <p>A Boolean value that indicates whether to include inactive (unavailable) blueprints in the
   *       response of your request.</p>
   */
  includeInactive?: boolean;

  /**
   * @public
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetBlueprints</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   */
  pageToken?: string;

  /**
   * @public
   * <p>Returns a list of blueprints that are specific to Lightsail for Research.</p>
   *          <important>
   *             <p>You must use this parameter to view Lightsail for Research blueprints.</p>
   *          </important>
   */
  appCategory?: AppCategory | string;
}

/**
 * @public
 */
export interface GetBlueprintsResult {
  /**
   * @public
   * <p>An array of key-value pairs that contains information about the available
   *       blueprints.</p>
   */
  blueprints?: Blueprint[];

  /**
   * @public
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetBlueprints</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

/**
 * @public
 */
export interface GetBucketAccessKeysRequest {
  /**
   * @public
   * <p>The name of the bucket for which to return access keys.</p>
   */
  bucketName: string | undefined;
}

/**
 * @public
 */
export interface GetBucketAccessKeysResult {
  /**
   * @public
   * <p>An object that describes the access keys for the specified bucket.</p>
   */
  accessKeys?: AccessKey[];
}

/**
 * @public
 */
export interface GetBucketBundlesRequest {
  /**
   * @public
   * <p>A Boolean value that indicates whether to include inactive (unavailable) bundles in the
   *       response of your request.</p>
   */
  includeInactive?: boolean;
}

/**
 * @public
 */
export interface GetBucketBundlesResult {
  /**
   * @public
   * <p>An object that describes bucket bundles.</p>
   */
  bundles?: BucketBundle[];
}

/**
 * @public
 */
export interface GetBucketMetricDataRequest {
  /**
   * @public
   * <p>The name of the bucket for which to get metric data.</p>
   */
  bucketName: string | undefined;

  /**
   * @public
   * <p>The metric for which you want to return information.</p>
   *          <p>Valid bucket metric names are listed below, along with the most useful statistics to
   *       include in your request, and the published unit value.</p>
   *          <note>
   *             <p>These bucket metrics are reported once per day.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>BucketSizeBytes</code>
   *                   </b> - The amount of data in
   *           bytes stored in a bucket. This value is calculated by summing the size of all objects in
   *           the bucket (including object versions), including the size of all parts for all incomplete
   *           multipart uploads to the bucket.</p>
   *                <p>Statistics: The most useful statistic is <code>Maximum</code>.</p>
   *                <p>Unit: The published unit is <code>Bytes</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>NumberOfObjects</code>
   *                   </b> - The total number of
   *           objects stored in a bucket. This value is calculated by counting all objects in the bucket
   *           (including object versions) and the total number of parts for all incomplete multipart
   *           uploads to the bucket.</p>
   *                <p>Statistics: The most useful statistic is <code>Average</code>.</p>
   *                <p>Unit: The published unit is <code>Count</code>.</p>
   *             </li>
   *          </ul>
   */
  metricName: BucketMetricName | string | undefined;

  /**
   * @public
   * <p>The timestamp indicating the earliest data to be returned.</p>
   */
  startTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp indicating the latest data to be returned.</p>
   */
  endTime: Date | undefined;

  /**
   * @public
   * <p>The granularity, in seconds, of the returned data points.</p>
   *          <note>
   *             <p>Bucket storage metrics are reported once per day. Therefore, you should specify a period
   *         of 86400 seconds, which is the number of seconds in a day.</p>
   *          </note>
   */
  period: number | undefined;

  /**
   * @public
   * <p>The statistic for the metric.</p>
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
   *                   <code>Sum</code> - The sum of all values submitted for the matching metric. You can
   *           use this statistic to determine the total volume of a metric.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Average</code> - The value of <code>Sum</code> / <code>SampleCount</code> during
   *           the specified period. By comparing this statistic with the <code>Minimum</code> and
   *             <code>Maximum</code> values, you can determine the full scope of a metric and how close
   *           the average use is to the <code>Minimum</code> and <code>Maximum</code> values. This
   *           comparison helps you to know when to increase or decrease your resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SampleCount</code> - The count, or number, of data points used for the
   *           statistical calculation.</p>
   *             </li>
   *          </ul>
   */
  statistics: (MetricStatistic | string)[] | undefined;

  /**
   * @public
   * <p>The unit for the metric data request.</p>
   *          <p>Valid units depend on the metric data being requested. For the valid units with each
   *       available metric, see the <code>metricName</code> parameter.</p>
   */
  unit: MetricUnit | string | undefined;
}

/**
 * @public
 * <p>Describes the metric data point.</p>
 */
export interface MetricDatapoint {
  /**
   * @public
   * <p>The average.</p>
   */
  average?: number;

  /**
   * @public
   * <p>The maximum.</p>
   */
  maximum?: number;

  /**
   * @public
   * <p>The minimum.</p>
   */
  minimum?: number;

  /**
   * @public
   * <p>The sample count.</p>
   */
  sampleCount?: number;

  /**
   * @public
   * <p>The sum.</p>
   */
  sum?: number;

  /**
   * @public
   * <p>The timestamp (e.g., <code>1479816991.349</code>).</p>
   */
  timestamp?: Date;

  /**
   * @public
   * <p>The unit. </p>
   */
  unit?: MetricUnit | string;
}

/**
 * @public
 */
export interface GetBucketMetricDataResult {
  /**
   * @public
   * <p>The name of the metric returned.</p>
   */
  metricName?: BucketMetricName | string;

  /**
   * @public
   * <p>An array of objects that describe the metric data returned.</p>
   */
  metricData?: MetricDatapoint[];
}

/**
 * @public
 */
export interface GetBucketsRequest {
  /**
   * @public
   * <p>The name of the bucket for which to return information.</p>
   *          <p>When omitted, the response includes all of your buckets in the Amazon Web Services Region
   *       where the request is made.</p>
   */
  bucketName?: string;

  /**
   * @public
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetBuckets</code> request. If your results
   *       are paginated, the response will return a next page token that you can specify as the page
   *       token in a subsequent request.</p>
   */
  pageToken?: string;

  /**
   * @public
   * <p>A Boolean value that indicates whether to include Lightsail instances that were given
   *       access to the bucket using the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_SetResourceAccessForBucket.html">SetResourceAccessForBucket</a>
   *       action.</p>
   */
  includeConnectedResources?: boolean;
}

/**
 * @public
 */
export interface GetBucketsResult {
  /**
   * @public
   * <p>An array of objects that describe buckets.</p>
   */
  buckets?: Bucket[];

  /**
   * @public
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetBuckets</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;

  /**
   * @public
   * <p>An object that describes the synchronization status of the Amazon S3 account-level
   *       block public access feature for your Lightsail buckets.</p>
   *          <p>For more information about this feature and how it affects Lightsail buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-block-public-access-for-buckets">Block public access for buckets in Amazon Lightsail</a>.</p>
   */
  accountLevelBpaSync?: AccountLevelBpaSync;
}

/**
 * @public
 */
export interface GetBundlesRequest {
  /**
   * @public
   * <p>A Boolean value that indicates whether to include inactive (unavailable) bundles in the
   *       response of your request.</p>
   */
  includeInactive?: boolean;

  /**
   * @public
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetBundles</code> request. If your results
   *       are paginated, the response will return a next page token that you can specify as the page
   *       token in a subsequent request.</p>
   */
  pageToken?: string;

  /**
   * @public
   * <p>Returns a list of bundles that are specific to Lightsail for Research.</p>
   *          <important>
   *             <p>You must use this parameter to view Lightsail for Research bundles.</p>
   *          </important>
   */
  appCategory?: AppCategory | string;
}

/**
 * @public
 */
export interface GetBundlesResult {
  /**
   * @public
   * <p>An array of key-value pairs that contains information about the available bundles.</p>
   */
  bundles?: Bundle[];

  /**
   * @public
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetBundles</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

/**
 * @public
 */
export interface GetCertificatesRequest {
  /**
   * @public
   * <p>The status of the certificates for which to return information.</p>
   *          <p>For example, specify <code>ISSUED</code> to return only certificates with an
   *         <code>ISSUED</code> status.</p>
   *          <p>When omitted, the response includes all of your certificates in the Amazon Web Services
   *       Region where the request is made, regardless of their current status.</p>
   */
  certificateStatuses?: (CertificateStatus | string)[];

  /**
   * @public
   * <p>Indicates whether to include detailed information about the certificates in the
   *       response.</p>
   *          <p>When omitted, the response includes only the certificate names, Amazon Resource Names
   *       (ARNs), domain names, and tags.</p>
   */
  includeCertificateDetails?: boolean;

  /**
   * @public
   * <p>The name for the certificate for which to return information.</p>
   *          <p>When omitted, the response includes all of your certificates in the Amazon Web Services
   *       Region where the request is made.</p>
   */
  certificateName?: string;

  /**
   * @public
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetCertificates</code> request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

/**
 * @public
 */
export interface GetCertificatesResult {
  /**
   * @public
   * <p>An object that describes certificates.</p>
   */
  certificates?: CertificateSummary[];

  /**
   * @public
   * <p>If <code>NextPageToken</code> is returned there are more results available. The value of <code>NextPageToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.</p>
   */
  nextPageToken?: string;
}

/**
 * @public
 */
export interface GetCloudFormationStackRecordsRequest {
  /**
   * @public
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetClouFormationStackRecords</code> request.
   *       If your results are paginated, the response will return a next page token that you can specify
   *       as the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

/**
 * @public
 */
export interface GetCloudFormationStackRecordsResult {
  /**
   * @public
   * <p>A list of objects describing the CloudFormation stack records.</p>
   */
  cloudFormationStackRecords?: CloudFormationStackRecord[];

  /**
   * @public
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another
   *         <code>GetCloudFormationStackRecords</code> request and specify the next page token using the
   *         <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

/**
 * @public
 */
export interface GetContactMethodsRequest {
  /**
   * @public
   * <p>The protocols used to send notifications, such as <code>Email</code>, or <code>SMS</code>
   *       (text messaging).</p>
   *          <p>Specify a protocol in your request to return information about a specific contact method
   *       protocol.</p>
   */
  protocols?: (ContactProtocol | string)[];
}

/**
 * @public
 */
export interface GetContactMethodsResult {
  /**
   * @public
   * <p>An array of objects that describe the contact methods.</p>
   */
  contactMethods?: ContactMethod[];
}

/**
 * @public
 */
export interface GetContainerAPIMetadataRequest {}

/**
 * @public
 */
export interface GetContainerAPIMetadataResult {
  /**
   * @public
   * <p>Metadata about Lightsail containers, such as the current version of the Lightsail
   *       Control (lightsailctl) plugin.</p>
   */
  metadata?: Record<string, string>[];
}

/**
 * @public
 */
export interface GetContainerImagesRequest {
  /**
   * @public
   * <p>The name of the container service for which to return registered container images.</p>
   */
  serviceName: string | undefined;
}

/**
 * @public
 */
export interface GetContainerImagesResult {
  /**
   * @public
   * <p>An array of objects that describe container images that are registered to the container
   *       service.</p>
   */
  containerImages?: ContainerImage[];
}

/**
 * @public
 */
export interface GetContainerLogRequest {
  /**
   * @public
   * <p>The name of the container service for which to get a container log.</p>
   */
  serviceName: string | undefined;

  /**
   * @public
   * <p>The name of the container that is either running or previously ran on the container
   *       service for which to return a log.</p>
   */
  containerName: string | undefined;

  /**
   * @public
   * <p>The start of the time interval for which to get log data.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Specified in the Unix time format.</p>
   *                <p>For example, if you wish to use a start time of October 1, 2018, at 8 PM UTC, specify
   *             <code>1538424000</code> as the start time.</p>
   *             </li>
   *          </ul>
   *          <p>You can convert a human-friendly time to Unix time format using a converter like <a href="https://www.epochconverter.com/">Epoch converter</a>.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>The end of the time interval for which to get log data.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Specified in the Unix time format.</p>
   *                <p>For example, if you wish to use an end time of October 1, 2018, at 9 PM UTC, specify
   *             <code>1538427600</code> as the end time.</p>
   *             </li>
   *          </ul>
   *          <p>You can convert a human-friendly time to Unix time format using a converter like <a href="https://www.epochconverter.com/">Epoch converter</a>.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>The pattern to use to filter the returned log events to a specific term.</p>
   *          <p>The following are a few examples of filter patterns that you can specify:</p>
   *          <ul>
   *             <li>
   *                <p>To return all log events, specify a filter pattern of <code>""</code>.</p>
   *             </li>
   *             <li>
   *                <p>To exclude log events that contain the <code>ERROR</code> term, and return all other
   *           log events, specify a filter pattern of <code>"-ERROR"</code>.</p>
   *             </li>
   *             <li>
   *                <p>To return log events that contain the <code>ERROR</code> term, specify a filter
   *           pattern of <code>"ERROR"</code>.</p>
   *             </li>
   *             <li>
   *                <p>To return log events that contain both the <code>ERROR</code> and
   *             <code>Exception</code> terms, specify a filter pattern of <code>"ERROR
   *           Exception"</code>.</p>
   *             </li>
   *             <li>
   *                <p>To return log events that contain the <code>ERROR</code>
   *                   <i>or</i> the <code>Exception</code> term, specify a filter pattern of
   *             <code>"?ERROR ?Exception"</code>.</p>
   *             </li>
   *          </ul>
   */
  filterPattern?: string;

  /**
   * @public
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetContainerLog</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   */
  pageToken?: string;
}

/**
 * @public
 */
export interface GetContainerLogResult {
  /**
   * @public
   * <p>An array of objects that describe the log events of a container.</p>
   */
  logEvents?: ContainerServiceLogEvent[];

  /**
   * @public
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetContainerLog</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

/**
 * @public
 */
export interface GetContainerServiceDeploymentsRequest {
  /**
   * @public
   * <p>The name of the container service for which to return deployments.</p>
   */
  serviceName: string | undefined;
}

/**
 * @public
 */
export interface GetContainerServiceDeploymentsResult {
  /**
   * @public
   * <p>An array of objects that describe deployments for a container service.</p>
   */
  deployments?: ContainerServiceDeployment[];
}

/**
 * @public
 */
export interface GetContainerServiceMetricDataRequest {
  /**
   * @public
   * <p>The name of the container service for which to get metric data.</p>
   */
  serviceName: string | undefined;

  /**
   * @public
   * <p>The metric for which you want to return information.</p>
   *          <p>Valid container service metric names are listed below, along with the most useful
   *       statistics to include in your request, and the published unit value.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CPUUtilization</code> - The average percentage of compute units that are
   *           currently in use across all nodes of the container service. This metric identifies the
   *           processing power required to run containers on each node of the container service.</p>
   *                <p>Statistics: The most useful statistics are <code>Maximum</code> and
   *             <code>Average</code>.</p>
   *                <p>Unit: The published unit is <code>Percent</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MemoryUtilization</code> - The average percentage of available memory that is
   *           currently in use across all nodes of the container service. This metric identifies the
   *           memory required to run containers on each node of the container service.</p>
   *                <p>Statistics: The most useful statistics are <code>Maximum</code> and
   *             <code>Average</code>.</p>
   *                <p>Unit: The published unit is <code>Percent</code>.</p>
   *             </li>
   *          </ul>
   */
  metricName: ContainerServiceMetricName | string | undefined;

  /**
   * @public
   * <p>The start time of the time period.</p>
   */
  startTime: Date | undefined;

  /**
   * @public
   * <p>The end time of the time period.</p>
   */
  endTime: Date | undefined;

  /**
   * @public
   * <p>The granularity, in seconds, of the returned data points.</p>
   *          <p>All container service metric data is available in 5-minute (300 seconds)
   *       granularity.</p>
   */
  period: number | undefined;

  /**
   * @public
   * <p>The statistic for the metric.</p>
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
   *                   <code>Average</code> - The value of <code>Sum</code> / <code>SampleCount</code> during
   *           the specified period. By comparing this statistic with the <code>Minimum</code> and
   *             <code>Maximum</code> values, you can determine the full scope of a metric and how close
   *           the average use is to the <code>Minimum</code> and <code>Maximum</code> values. This
   *           comparison helps you to know when to increase or decrease your resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SampleCount</code> - The count, or number, of data points used for the
   *           statistical calculation.</p>
   *             </li>
   *          </ul>
   */
  statistics: (MetricStatistic | string)[] | undefined;
}

/**
 * @public
 */
export interface GetContainerServiceMetricDataResult {
  /**
   * @public
   * <p>The name of the metric returned. </p>
   */
  metricName?: ContainerServiceMetricName | string;

  /**
   * @public
   * <p>An array of objects that describe the metric data returned.</p>
   */
  metricData?: MetricDatapoint[];
}

/**
 * @public
 */
export interface GetContainerServicePowersRequest {}

/**
 * @public
 */
export interface GetContainerServicePowersResult {
  /**
   * @public
   * <p>An array of objects that describe the powers that can be specified for a container
   *       service.</p>
   */
  powers?: ContainerServicePower[];
}

/**
 * @public
 */
export interface GetContainerServicesRequest {
  /**
   * @public
   * <p>The name of the container service for which to return information.</p>
   *          <p>When omitted, the response includes all of your container services in the Amazon Web Services Region where the request is made.</p>
   */
  serviceName?: string;
}

/**
 * @internal
 */
export const AccessKeyFilterSensitiveLog = (obj: AccessKey): any => ({
  ...obj,
  ...(obj.accessKeyId && { accessKeyId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateBucketAccessKeyResultFilterSensitiveLog = (obj: CreateBucketAccessKeyResult): any => ({
  ...obj,
  ...(obj.accessKey && { accessKey: AccessKeyFilterSensitiveLog(obj.accessKey) }),
});

/**
 * @internal
 */
export const SessionFilterSensitiveLog = (obj: Session): any => ({
  ...obj,
  ...(obj.url && { url: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateGUISessionAccessDetailsResultFilterSensitiveLog = (
  obj: CreateGUISessionAccessDetailsResult
): any => ({
  ...obj,
  ...(obj.sessions && { sessions: obj.sessions.map((item) => SessionFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateRelationalDatabaseRequestFilterSensitiveLog = (obj: CreateRelationalDatabaseRequest): any => ({
  ...obj,
  ...(obj.masterUserPassword && { masterUserPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetBucketAccessKeysResultFilterSensitiveLog = (obj: GetBucketAccessKeysResult): any => ({
  ...obj,
  ...(obj.accessKeys && { accessKeys: obj.accessKeys.map((item) => AccessKeyFilterSensitiveLog(item)) }),
});

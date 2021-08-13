import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  code?: string;
  docs?: string;
  message?: string;
  tip?: string;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export enum AccessDirection {
  inbound = "inbound",
  outbound = "outbound",
}

/**
 * <p>Describes the last time an access key was used.</p>
 *
 *          <note>
 *             <p>This object does not include data in the response of a <a>CreateBucketAccessKey</a> action.</p>
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
 *       can have a maximum of two access keys per bucket. Use the <a>CreateBucketAccessKey</a> action to create an access key for a specific bucket. For
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
   *             <p>This object does not include data in the response of a <a>CreateBucketAccessKey</a> action. If the access key has not been used, the
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

/**
 * <p>Lightsail throws this exception when an account is still in the setup in progress
 *       state.</p>
 */
export interface AccountSetupInProgressException extends __SmithyException, $MetadataBearer {
  name: "AccountSetupInProgressException";
  $fault: "client";
  code?: string;
  docs?: string;
  message?: string;
  tip?: string;
}

export namespace AccountSetupInProgressException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountSetupInProgressException): any => ({
    ...obj,
  });
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

export interface AllocateStaticIpRequest {
  /**
   * <p>The name of the static IP address.</p>
   */
  staticIpName: string | undefined;
}

export namespace AllocateStaticIpRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AllocateStaticIpRequest): any => ({
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
   * <p>The AWS Region and Availability Zone.</p>
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

export interface AllocateStaticIpResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace AllocateStaticIpResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AllocateStaticIpResult): any => ({
    ...obj,
  });
}

/**
 * <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) AWS Region. Please set your AWS Region configuration to
 *           <code>us-east-1</code> to create, view, or edit these resources.</p>
 *          </note>
 */
export interface InvalidInputException extends __SmithyException, $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  code?: string;
  docs?: string;
  message?: string;
  tip?: string;
}

export namespace InvalidInputException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidInputException): any => ({
    ...obj,
  });
}

/**
 * <p>Lightsail throws this exception when it cannot find a resource.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  code?: string;
  docs?: string;
  message?: string;
  tip?: string;
}

export namespace NotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Lightsail throws this exception when an operation fails to execute.</p>
 */
export interface OperationFailureException extends __SmithyException, $MetadataBearer {
  name: "OperationFailureException";
  $fault: "client";
  code?: string;
  docs?: string;
  message?: string;
  tip?: string;
}

export namespace OperationFailureException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OperationFailureException): any => ({
    ...obj,
  });
}

/**
 * <p>A general service exception.</p>
 */
export interface ServiceException extends __SmithyException, $MetadataBearer {
  name: "ServiceException";
  $fault: "server";
  code?: string;
  docs?: string;
  message?: string;
  tip?: string;
}

export namespace ServiceException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceException): any => ({
    ...obj,
  });
}

/**
 * <p>Lightsail throws this exception when the user has not been authenticated.</p>
 */
export interface UnauthenticatedException extends __SmithyException, $MetadataBearer {
  name: "UnauthenticatedException";
  $fault: "client";
  code?: string;
  docs?: string;
  message?: string;
  tip?: string;
}

export namespace UnauthenticatedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnauthenticatedException): any => ({
    ...obj,
  });
}

export interface AttachCertificateToDistributionRequest {
  /**
   * <p>The name of the distribution that the certificate will be attached to.</p>
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   */
  distributionName: string | undefined;

  /**
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

export namespace AttachCertificateToDistributionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachCertificateToDistributionRequest): any => ({
    ...obj,
  });
}

export interface AttachCertificateToDistributionResult {
  /**
   * <p>An object that describes the result of the action, such as the status of the request, the
   *       timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace AttachCertificateToDistributionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachCertificateToDistributionResult): any => ({
    ...obj,
  });
}

export interface AttachDiskRequest {
  /**
   * <p>The unique Lightsail disk name (e.g., <code>my-disk</code>).</p>
   */
  diskName: string | undefined;

  /**
   * <p>The name of the Lightsail instance where you want to utilize the storage disk.</p>
   */
  instanceName: string | undefined;

  /**
   * <p>The disk path to expose to the instance (e.g., <code>/dev/xvdf</code>).</p>
   */
  diskPath: string | undefined;
}

export namespace AttachDiskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachDiskRequest): any => ({
    ...obj,
  });
}

export interface AttachDiskResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace AttachDiskResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachDiskResult): any => ({
    ...obj,
  });
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

export interface AttachInstancesToLoadBalancerRequest {
  /**
   * <p>The name of the load balancer.</p>
   */
  loadBalancerName: string | undefined;

  /**
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

export namespace AttachInstancesToLoadBalancerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachInstancesToLoadBalancerRequest): any => ({
    ...obj,
  });
}

export interface AttachInstancesToLoadBalancerResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace AttachInstancesToLoadBalancerResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachInstancesToLoadBalancerResult): any => ({
    ...obj,
  });
}

export interface AttachLoadBalancerTlsCertificateRequest {
  /**
   * <p>The name of the load balancer to which you want to associate the SSL/TLS
   *       certificate.</p>
   */
  loadBalancerName: string | undefined;

  /**
   * <p>The name of your SSL/TLS certificate.</p>
   */
  certificateName: string | undefined;
}

export namespace AttachLoadBalancerTlsCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachLoadBalancerTlsCertificateRequest): any => ({
    ...obj,
  });
}

export interface AttachLoadBalancerTlsCertificateResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   *          <p>These SSL/TLS certificates are only usable by Lightsail load balancers. You can't get
   *       the certificate and use it for another purpose.</p>
   */
  operations?: Operation[];
}

export namespace AttachLoadBalancerTlsCertificateResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachLoadBalancerTlsCertificateResult): any => ({
    ...obj,
  });
}

export interface AttachStaticIpRequest {
  /**
   * <p>The name of the static IP.</p>
   */
  staticIpName: string | undefined;

  /**
   * <p>The instance name to which you want to attach the static IP address.</p>
   */
  instanceName: string | undefined;
}

export namespace AttachStaticIpRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachStaticIpRequest): any => ({
    ...obj,
  });
}

export interface AttachStaticIpResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace AttachStaticIpResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachStaticIpResult): any => ({
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
   *          <p>Use the <a>UpdateBucketBundle</a> action to change the bundle of a
   *       bucket.</p>
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
   * <p>Describes the resource location.</p>
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
   *          <p>You can update a bucket's bundle only one time within a monthly AWS billing
   *       cycle.</p>
   *
   *          <p>Use the <a>UpdateBucketBundle</a> action to change a bucket's bundle.</p>
   */
  ableToUpdateBundle?: boolean;

  /**
   * <p>An array of strings that specify the AWS account IDs that have read-only access to the
   *       bucket.</p>
   */
  readonlyAccessAccounts?: string[];

  /**
   * <p>An array of objects that describe Lightsail instances that have access to the
   *       bucket.</p>
   *
   *          <p>Use the <a>SetResourceAccessForBucket</a> action to update the instances that
   *       have access to a bucket.</p>
   */
  resourcesReceivingAccess?: ResourceReceivingAccess[];

  /**
   * <p>An object that describes the state of the bucket.</p>
   */
  state?: BucketState;
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
 *          <p>if the cacheBehavior's behavior is set to 'cache', then</p>
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

export interface CloseInstancePublicPortsRequest {
  /**
   * <p>An object to describe the ports to close for the specified instance.</p>
   */
  portInfo: PortInfo | undefined;

  /**
   * <p>The name of the instance for which to close ports.</p>
   */
  instanceName: string | undefined;
}

export namespace CloseInstancePublicPortsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloseInstancePublicPortsRequest): any => ({
    ...obj,
  });
}

export interface CloseInstancePublicPortsResult {
  /**
   * <p>An object that describes the result of the action, such as the status of the request, the
   *       timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace CloseInstancePublicPortsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloseInstancePublicPortsResult): any => ({
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
   * <p>A list of objects describing the Availability Zone and AWS Region of the CloudFormation
   *       stack record.</p>
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
   * <p>Describes the resource location.</p>
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
   *       stored on your service, start with a colon (<code>:</code>). For example,
   *         <code>:container-service-1.mystaticwebsite.1</code>. Container images sourced from a public
   *       registry like Docker Hub don't start with a colon. For example, <code>nginx:latest</code> or
   *         <code>nginx</code>.</p>
   */
  image?: string;

  /**
   * <p>The launch command for the container.</p>
   */
  command?: string[];

  /**
   * <p>The environment variables of the container.</p>
   */
  environment?: { [key: string]: string };

  /**
   * <p>The open firewall ports of the container.</p>
   */
  ports?: { [key: string]: ContainerServiceProtocol | string };
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
  containers?: { [key: string]: Container };

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
   * <p>An object that describes the location of the container service, such as the AWS Region
   *       and Availability Zone.</p>
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
   *          <p>The principal ARN can be used to create a trust relationship between your standard AWS
   *       account and your Lightsail container service. This allows you to give your service
   *       permission to access resources in your standard AWS account.</p>
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
  publicDomainNames?: { [key: string]: string[] };

  /**
   * <p>The publicly accessible URL of the container service.</p>
   *
   *          <p>If no public endpoint is specified in the <code>currentDeployment</code>, this URL returns
   *       a 404 response.</p>
   */
  url?: string;
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
  containers?: { [key: string]: Container };

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

export interface ContainerServicesListResult {
  /**
   * <p>An array of objects that describe one or more container services.</p>
   */
  containerServices?: ContainerService[];
}

export namespace ContainerServicesListResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerServicesListResult): any => ({
    ...obj,
  });
}

export interface CopySnapshotRequest {
  /**
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
   * <p>The name of the new manual snapshot to be created as a copy.</p>
   */
  targetSnapshotName: string | undefined;

  /**
   * <p>The AWS Region where the source manual or automatic snapshot is located.</p>
   */
  sourceRegion: RegionName | string | undefined;
}

export namespace CopySnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopySnapshotRequest): any => ({
    ...obj,
  });
}

export interface CopySnapshotResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CopySnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopySnapshotResult): any => ({
    ...obj,
  });
}

export interface CreateBucketRequest {
  /**
   * <p>The name for the bucket.</p>
   *
   *          <p>For more information about bucket names, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/bucket-naming-rules-in-amazon-lightsail">Bucket naming rules in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer
   *         Guide</i>.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>The ID of the bundle to use for the bucket.</p>
   *
   *          <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a
   *       bucket.</p>
   *
   *          <p>Use the <a>GetBucketBundles</a> action to get a list of bundle IDs that you can
   *       specify.</p>
   *
   *          <p>Use the <a>UpdateBucketBundle</a> action to change the bundle after the bucket
   *       is created.</p>
   */
  bundleId: string | undefined;

  /**
   * <p>The tag keys and optional values to add to the bucket during creation.</p>
   *
   *          <p>Use the <a>TagResource</a> action to tag the bucket after it's created.</p>
   */
  tags?: Tag[];

  /**
   * <p>A Boolean value that indicates whether to enable versioning of objects in the
   *       bucket.</p>
   *
   *          <p>For more information about versioning, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-managing-bucket-object-versioning">Enabling and suspending object versioning in a bucket in Amazon Lightsail</a> in the
   *         <i>Amazon Lightsail Developer Guide</i>.</p>
   */
  enableObjectVersioning?: boolean;
}

export namespace CreateBucketRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBucketRequest): any => ({
    ...obj,
  });
}

export interface CreateBucketResult {
  /**
   * <p>An object that describes the bucket that is created.</p>
   */
  bucket?: Bucket;

  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateBucketResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBucketResult): any => ({
    ...obj,
  });
}

export interface CreateBucketAccessKeyRequest {
  /**
   * <p>The name of the bucket that the new access key will belong to, and grant access to.</p>
   */
  bucketName: string | undefined;
}

export namespace CreateBucketAccessKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBucketAccessKeyRequest): any => ({
    ...obj,
  });
}

export interface CreateBucketAccessKeyResult {
  /**
   * <p>An object that describes the access key that is created.</p>
   */
  accessKey?: AccessKey;

  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateBucketAccessKeyResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBucketAccessKeyResult): any => ({
    ...obj,
    ...(obj.accessKey && { accessKey: AccessKey.filterSensitiveLog(obj.accessKey) }),
  });
}

export interface CreateCertificateRequest {
  /**
   * <p>The name for the certificate.</p>
   */
  certificateName: string | undefined;

  /**
   * <p>The domain name (e.g., <code>example.com</code>) for the certificate.</p>
   */
  domainName: string | undefined;

  /**
   * <p>An array of strings that specify the alternate domains (e.g., <code>example2.com</code>)
   *       and subdomains (e.g., <code>blog.example.com</code>) for the certificate.</p>
   *          <p>You can specify a maximum of nine alternate domains (in addition to the primary domain
   *       name).</p>
   *          <p>Wildcard domain entries (e.g., <code>*.example.com</code>) are not supported.</p>
   */
  subjectAlternativeNames?: string[];

  /**
   * <p>The tag keys and optional values to add to the certificate during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

export namespace CreateCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCertificateRequest): any => ({
    ...obj,
  });
}

export interface CreateCertificateResult {
  /**
   * <p>An object that describes the certificate created.</p>
   */
  certificate?: CertificateSummary;

  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateCertificateResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCertificateResult): any => ({
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

export interface CreateCloudFormationStackRequest {
  /**
   * <p>An array of parameters that will be used to create the new Amazon EC2 instance. You can only
   *       pass one instance entry at a time in this array. You will get an invalid parameter error if
   *       you pass more than one instance entry in this array.</p>
   */
  instances: InstanceEntry[] | undefined;
}

export namespace CreateCloudFormationStackRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCloudFormationStackRequest): any => ({
    ...obj,
  });
}

export interface CreateCloudFormationStackResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateCloudFormationStackResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCloudFormationStackResult): any => ({
    ...obj,
  });
}

export interface CreateContactMethodRequest {
  /**
   * <p>The protocol of the contact method, such as <code>Email</code> or <code>SMS</code> (text
   *       messaging).</p>
   *          <p>The <code>SMS</code> protocol is supported only in the following AWS Regions.</p>
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
   *          <p>For a list of countries/regions where SMS text messages can be sent, and the latest AWS
   *       Regions where SMS text messaging is supported, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-supported-regions-countries.html">Supported Regions and Countries</a> in the <i>Amazon SNS Developer
   *         Guide</i>.</p>
   *          <p>For more information about notifications in Amazon Lightsail, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
   */
  protocol: ContactProtocol | string | undefined;

  /**
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

export namespace CreateContactMethodRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContactMethodRequest): any => ({
    ...obj,
  });
}

export interface CreateContactMethodResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateContactMethodResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContactMethodResult): any => ({
    ...obj,
  });
}

export interface CreateContainerServiceRequest {
  /**
   * <p>The name for the container service.</p>
   *
   *          <p>The name that you specify for your container service will make up part of its default
   *       domain. The default domain of a container service is typically
   *         <code>https://<ServiceName>.<RandomGUID>.<AWSRegion>.cs.amazonlightsail.com</code>.
   *       If the name of your container service is <code>container-service-1</code>, and it's located in
   *       the US East (Ohio) AWS region (<code>us-east-2</code>), then the domain for your container
   *       service will be like the following example:
   *         <code>https://container-service-1.ur4EXAMPLE2uq.us-east-2.cs.amazonlightsail.com</code>
   *          </p>
   *
   *          <p>The following are the requirements for container service names:</p>
   *
   *          <ul>
   *             <li>
   *                <p>Must be unique within each AWS Region in your Lightsail account.</p>
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
   * <p>The power specification for the container service.</p>
   *
   *          <p>The power specifies the amount of memory, vCPUs, and base monthly cost of each node of the
   *       container service. The <code>power</code> and <code>scale</code> of a container service makes
   *       up its configured capacity. To determine the monthly price of your container service, multiply
   *       the base price of the <code>power</code> with the <code>scale</code> (the number of nodes) of
   *       the service.</p>
   *
   *          <p>Use the <code>GetContainerServicePowers</code> action to get a list of power options that
   *       you can specify using this parameter, and their base monthly cost.</p>
   */
  power: ContainerServicePowerName | string | undefined;

  /**
   * <p>The scale specification for the container service.</p>
   *
   *          <p>The scale specifies the allocated compute nodes of the container service. The
   *         <code>power</code> and <code>scale</code> of a container service makes up its configured
   *       capacity. To determine the monthly price of your container service, multiply the base price of
   *       the <code>power</code> with the <code>scale</code> (the number of nodes) of the
   *       service.</p>
   */
  scale: number | undefined;

  /**
   * <p>The tag keys and optional values to add to the certificate during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   *          <p>For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The public domain names to use with the container service, such as
   *         <code>example.com</code> and <code>www.example.com</code>.</p>
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
   *          <p>You can specify public domain names using a string to array map as shown in the example
   *       later on this page.</p>
   */
  publicDomainNames?: { [key: string]: string[] };

  /**
   * <p>An object that describes a deployment for the container service.</p>
   *
   *          <p>A deployment specifies the containers that will be launched on the container service and
   *       their settings, such as the ports to open, the environment variables to apply, and the launch
   *       command to run. It also specifies the container that will serve as the public endpoint of the
   *       deployment and its settings, such as the HTTP or HTTPS port to use, and the health check
   *       configuration.</p>
   */
  deployment?: ContainerServiceDeploymentRequest;
}

export namespace CreateContainerServiceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContainerServiceRequest): any => ({
    ...obj,
  });
}

export interface CreateContainerServiceResult {
  /**
   * <p>An object that describes a container service.</p>
   */
  containerService?: ContainerService;
}

export namespace CreateContainerServiceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContainerServiceResult): any => ({
    ...obj,
  });
}

export interface CreateContainerServiceDeploymentRequest {
  /**
   * <p>The name of the container service for which to create the deployment.</p>
   */
  serviceName: string | undefined;

  /**
   * <p>An object that describes the settings of the containers that will be launched on the
   *       container service.</p>
   */
  containers?: { [key: string]: Container };

  /**
   * <p>An object that describes the settings of the public endpoint for the container
   *       service.</p>
   */
  publicEndpoint?: EndpointRequest;
}

export namespace CreateContainerServiceDeploymentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContainerServiceDeploymentRequest): any => ({
    ...obj,
  });
}

export interface CreateContainerServiceDeploymentResult {
  /**
   * <p>An object that describes a container service.</p>
   */
  containerService?: ContainerService;
}

export namespace CreateContainerServiceDeploymentResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContainerServiceDeploymentResult): any => ({
    ...obj,
  });
}

export interface CreateContainerServiceRegistryLoginRequest {}

export namespace CreateContainerServiceRegistryLoginRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContainerServiceRegistryLoginRequest): any => ({
    ...obj,
  });
}

export interface CreateContainerServiceRegistryLoginResult {
  /**
   * <p>An object that describes the log in information for the container service registry of your
   *       Lightsail account.</p>
   */
  registryLogin?: ContainerServiceRegistryLogin;
}

export namespace CreateContainerServiceRegistryLoginResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContainerServiceRegistryLoginResult): any => ({
    ...obj,
  });
}

export interface CreateDiskRequest {
  /**
   * <p>The unique Lightsail disk name (e.g., <code>my-disk</code>).</p>
   */
  diskName: string | undefined;

  /**
   * <p>The Availability Zone where you want to create the disk (e.g., <code>us-east-2a</code>).
   *       Use the same Availability Zone as the Lightsail instance to which you want to attach the
   *       disk.</p>
   *          <p>Use the <code>get regions</code> operation to list the Availability Zones where
   *       Lightsail is currently available.</p>
   */
  availabilityZone: string | undefined;

  /**
   * <p>The size of the disk in GB (e.g., <code>32</code>).</p>
   */
  sizeInGb: number | undefined;

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];

  /**
   * <p>An array of objects that represent the add-ons to enable for the new disk.</p>
   */
  addOns?: AddOnRequest[];
}

export namespace CreateDiskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDiskRequest): any => ({
    ...obj,
  });
}

export interface CreateDiskResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateDiskResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDiskResult): any => ({
    ...obj,
  });
}

export interface CreateDiskFromSnapshotRequest {
  /**
   * <p>The unique Lightsail disk name (e.g., <code>my-disk</code>).</p>
   */
  diskName: string | undefined;

  /**
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
   * <p>The Availability Zone where you want to create the disk (e.g., <code>us-east-2a</code>).
   *       Choose the same Availability Zone as the Lightsail instance where you want to create the
   *       disk.</p>
   *          <p>Use the GetRegions operation to list the Availability Zones where Lightsail is currently
   *       available.</p>
   */
  availabilityZone: string | undefined;

  /**
   * <p>The size of the disk in GB (e.g., <code>32</code>).</p>
   */
  sizeInGb: number | undefined;

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];

  /**
   * <p>An array of objects that represent the add-ons to enable for the new disk.</p>
   */
  addOns?: AddOnRequest[];

  /**
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

export namespace CreateDiskFromSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDiskFromSnapshotRequest): any => ({
    ...obj,
  });
}

export interface CreateDiskFromSnapshotResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateDiskFromSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDiskFromSnapshotResult): any => ({
    ...obj,
  });
}

export interface CreateDiskSnapshotRequest {
  /**
   * <p>The unique name of the source disk (e.g., <code>Disk-Virginia-1</code>).</p>
   *          <note>
   *             <p>This parameter cannot be defined together with the <code>instance name</code> parameter.
   *         The <code>disk name</code> and <code>instance name</code> parameters are mutually
   *         exclusive.</p>
   *          </note>
   */
  diskName?: string;

  /**
   * <p>The name of the destination disk snapshot (e.g., <code>my-disk-snapshot</code>) based on
   *       the source disk.</p>
   */
  diskSnapshotName: string | undefined;

  /**
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
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

export namespace CreateDiskSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDiskSnapshotRequest): any => ({
    ...obj,
  });
}

export interface CreateDiskSnapshotResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateDiskSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDiskSnapshotResult): any => ({
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
 *          <p>An origin can be a Lightsail instance or load balancer. A distribution pulls content
 *       from an origin, caches it, and serves it to viewers via a worldwide network of edge
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

export interface CreateDistributionRequest {
  /**
   * <p>The name for the distribution.</p>
   */
  distributionName: string | undefined;

  /**
   * <p>An object that describes the origin resource for the distribution, such as a Lightsail
   *       instance or load balancer.</p>
   *          <p>The distribution pulls, caches, and serves content from the origin.</p>
   */
  origin: InputOrigin | undefined;

  /**
   * <p>An object that describes the default cache behavior for the distribution.</p>
   */
  defaultCacheBehavior: CacheBehavior | undefined;

  /**
   * <p>An object that describes the cache behavior settings for the distribution.</p>
   */
  cacheBehaviorSettings?: CacheSettings;

  /**
   * <p>An array of objects that describe the per-path cache behavior for the distribution.</p>
   */
  cacheBehaviors?: CacheBehaviorPerPath[];

  /**
   * <p>The bundle ID to use for the distribution.</p>
   *          <p>A distribution bundle describes the specifications of your distribution, such as the
   *       monthly cost and monthly network transfer quota.</p>
   *          <p>Use the <code>GetDistributionBundles</code> action to get a list of distribution bundle
   *       IDs that you can specify.</p>
   */
  bundleId: string | undefined;

  /**
   * <p>The IP address type for the distribution.</p>
   *
   *          <p>The possible values are <code>ipv4</code> for IPv4 only, and <code>dualstack</code> for
   *       IPv4 and IPv6.</p>
   *
   *          <p>The default value is <code>dualstack</code>.</p>
   */
  ipAddressType?: IpAddressType | string;

  /**
   * <p>The tag keys and optional values to add to the distribution during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

export namespace CreateDistributionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDistributionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the origin resource of an Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>An origin can be a Lightsail instance or load balancer. A distribution pulls content
 *       from an origin, caches it, and serves it to viewers via a worldwide network of edge
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
   * <p>An object that describes the location of the distribution, such as the AWS Region and
   *       Availability Zone.</p>
   *          <note>
   *             <p>Lightsail distributions are global resources that can reference an origin in any AWS
   *         Region, and distribute its content globally. However, all distributions are located in the
   *           <code>us-east-1</code> Region.</p>
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
   *       instance or load balancer.</p>
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

export interface CreateDistributionResult {
  /**
   * <p>An object that describes the distribution created.</p>
   */
  distribution?: LightsailDistribution;

  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace CreateDistributionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDistributionResult): any => ({
    ...obj,
  });
}

export interface CreateDomainRequest {
  /**
   * <p>The domain name to manage (e.g., <code>example.com</code>).</p>
   *          <note>
   *             <p>You cannot register a new domain name using Lightsail. You must register a domain name
   *         using Amazon Route 53 or another domain name registrar. If you have already registered your
   *         domain, you can enter its name in this parameter to manage the DNS records for that domain
   *         using Lightsail.</p>
   *          </note>
   */
  domainName: string | undefined;

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

export namespace CreateDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDomainRequest): any => ({
    ...obj,
  });
}

export interface CreateDomainResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace CreateDomainResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDomainResult): any => ({
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
  options?: { [key: string]: string };
}

export namespace DomainEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainEntry): any => ({
    ...obj,
  });
}

export interface CreateDomainEntryRequest {
  /**
   * <p>The domain name (e.g., <code>example.com</code>) for which you want to create the domain
   *       entry.</p>
   */
  domainName: string | undefined;

  /**
   * <p>An array of key-value pairs containing information about the domain entry request.</p>
   */
  domainEntry: DomainEntry | undefined;
}

export namespace CreateDomainEntryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDomainEntryRequest): any => ({
    ...obj,
  });
}

export interface CreateDomainEntryResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace CreateDomainEntryResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDomainEntryResult): any => ({
    ...obj,
  });
}

export interface CreateInstancesRequest {
  /**
   * <p>The names to use for your new Lightsail instances. Separate multiple values using
   *       quotation marks and commas, for example:
   *       <code>["MyFirstInstance","MySecondInstance"]</code>
   *          </p>
   */
  instanceNames: string[] | undefined;

  /**
   * <p>The Availability Zone in which to create your instance. Use the following format:
   *         <code>us-east-2a</code> (case sensitive). You can get a list of Availability Zones by using
   *       the <a href="http://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRegions.html">get
   *         regions</a> operation. Be sure to add the <code>include Availability Zones</code>
   *       parameter to your request.</p>
   */
  availabilityZone: string | undefined;

  /**
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
   * <p>The bundle of specification information for your virtual private server (or
   *         <i>instance</i>), including the pricing plan (e.g.,
   *       <code>micro_1_0</code>).</p>
   */
  bundleId: string | undefined;

  /**
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
   * <p>The name of your key pair.</p>
   */
  keyPairName?: string;

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];

  /**
   * <p>An array of objects representing the add-ons to enable for the new instance.</p>
   */
  addOns?: AddOnRequest[];

  /**
   * <p>The IP address type for the instance.</p>
   *
   *          <p>The possible values are <code>ipv4</code> for IPv4 only, and <code>dualstack</code> for
   *       IPv4 and IPv6.</p>
   *
   *          <p>The default value is <code>dualstack</code>.</p>
   */
  ipAddressType?: IpAddressType | string;
}

export namespace CreateInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInstancesRequest): any => ({
    ...obj,
  });
}

export interface CreateInstancesResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateInstancesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInstancesResult): any => ({
    ...obj,
  });
}

export interface CreateInstancesFromSnapshotRequest {
  /**
   * <p>The names for your new instances.</p>
   */
  instanceNames: string[] | undefined;

  /**
   * <p>An object containing information about one or more disk mappings.</p>
   */
  attachedDiskMapping?: { [key: string]: DiskMap[] };

  /**
   * <p>The Availability Zone where you want to create your instances. Use the following
   *       formatting: <code>us-east-2a</code> (case sensitive). You can get a list of Availability Zones
   *       by using the <a href="http://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRegions.html">get
   *         regions</a> operation. Be sure to add the <code>include Availability Zones</code>
   *       parameter to your request.</p>
   */
  availabilityZone: string | undefined;

  /**
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
   * <p>The bundle of specification information for your virtual private server (or
   *         <i>instance</i>), including the pricing plan (e.g.,
   *       <code>micro_1_0</code>).</p>
   */
  bundleId: string | undefined;

  /**
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
   * <p>The name for your key pair.</p>
   */
  keyPairName?: string;

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];

  /**
   * <p>An array of objects representing the add-ons to enable for the new instance.</p>
   */
  addOns?: AddOnRequest[];

  /**
   * <p>The IP address type for the instance.</p>
   *
   *          <p>The possible values are <code>ipv4</code> for IPv4 only, and <code>dualstack</code> for
   *       IPv4 and IPv6.</p>
   *
   *          <p>The default value is <code>dualstack</code>.</p>
   */
  ipAddressType?: IpAddressType | string;

  /**
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

export namespace CreateInstancesFromSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInstancesFromSnapshotRequest): any => ({
    ...obj,
  });
}

export interface CreateInstancesFromSnapshotResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateInstancesFromSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInstancesFromSnapshotResult): any => ({
    ...obj,
  });
}

export interface CreateInstanceSnapshotRequest {
  /**
   * <p>The name for your new snapshot.</p>
   */
  instanceSnapshotName: string | undefined;

  /**
   * <p>The Lightsail instance on which to base your snapshot.</p>
   */
  instanceName: string | undefined;

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

export namespace CreateInstanceSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInstanceSnapshotRequest): any => ({
    ...obj,
  });
}

export interface CreateInstanceSnapshotResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateInstanceSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInstanceSnapshotResult): any => ({
    ...obj,
  });
}

export interface CreateKeyPairRequest {
  /**
   * <p>The name for your new key pair.</p>
   */
  keyPairName: string | undefined;

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

export namespace CreateKeyPairRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateKeyPairRequest): any => ({
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

export interface CreateKeyPairResult {
  /**
   * <p>An array of key-value pairs containing information about the new key pair you just
   *       created.</p>
   */
  keyPair?: KeyPair;

  /**
   * <p>A base64-encoded public key of the <code>ssh-rsa</code> type.</p>
   */
  publicKeyBase64?: string;

  /**
   * <p>A base64-encoded RSA private key.</p>
   */
  privateKeyBase64?: string;

  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace CreateKeyPairResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateKeyPairResult): any => ({
    ...obj,
  });
}

export interface CreateLoadBalancerRequest {
  /**
   * <p>The name of your load balancer.</p>
   */
  loadBalancerName: string | undefined;

  /**
   * <p>The instance port where you're creating your load balancer.</p>
   */
  instancePort: number | undefined;

  /**
   * <p>The path you provided to perform the load balancer health check. If you didn't specify a
   *       health check path, Lightsail uses the root path of your website (e.g.,
   *       <code>"/"</code>).</p>
   *          <p>You may want to specify a custom health check path other than the root of your application
   *       if your home page loads slowly or has a lot of media or scripting on it.</p>
   */
  healthCheckPath?: string;

  /**
   * <p>The name of the SSL/TLS certificate.</p>
   *          <p>If you specify <code>certificateName</code>, then <code>certificateDomainName</code> is
   *       required (and vice-versa).</p>
   */
  certificateName?: string;

  /**
   * <p>The domain name with which your certificate is associated (e.g.,
   *       <code>example.com</code>).</p>
   *          <p>If you specify <code>certificateDomainName</code>, then <code>certificateName</code> is
   *       required (and vice-versa).</p>
   */
  certificateDomainName?: string;

  /**
   * <p>The optional alternative domains and subdomains to use with your SSL/TLS certificate
   *       (e.g., <code>www.example.com</code>, <code>example.com</code>, <code>m.example.com</code>,
   *         <code>blog.example.com</code>).</p>
   */
  certificateAlternativeNames?: string[];

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];

  /**
   * <p>The IP address type for the load balancer.</p>
   *
   *          <p>The possible values are <code>ipv4</code> for IPv4 only, and <code>dualstack</code> for
   *       IPv4 and IPv6.</p>
   *
   *          <p>The default value is <code>dualstack</code>.</p>
   */
  ipAddressType?: IpAddressType | string;
}

export namespace CreateLoadBalancerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLoadBalancerRequest): any => ({
    ...obj,
  });
}

export interface CreateLoadBalancerResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateLoadBalancerResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLoadBalancerResult): any => ({
    ...obj,
  });
}

export interface CreateLoadBalancerTlsCertificateRequest {
  /**
   * <p>The load balancer name where you want to create the SSL/TLS certificate.</p>
   */
  loadBalancerName: string | undefined;

  /**
   * <p>The SSL/TLS certificate name.</p>
   *          <p>You can have up to 10 certificates in your account at one time. Each Lightsail load
   *       balancer can have up to 2 certificates associated with it at one time. There is also an
   *       overall limit to the number of certificates that can be issue in a 365-day period. For more
   *       information, see <a href="http://docs.aws.amazon.com/acm/latest/userguide/acm-limits.html">Limits</a>.</p>
   */
  certificateName: string | undefined;

  /**
   * <p>The domain name (e.g., <code>example.com</code>) for your SSL/TLS certificate.</p>
   */
  certificateDomainName: string | undefined;

  /**
   * <p>An array of strings listing alternative domains and subdomains for your SSL/TLS
   *       certificate. Lightsail will de-dupe the names for you. You can have a maximum of 9
   *       alternative names (in addition to the 1 primary domain). We do not support wildcards (e.g.,
   *         <code>*.example.com</code>).</p>
   */
  certificateAlternativeNames?: string[];

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

export namespace CreateLoadBalancerTlsCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLoadBalancerTlsCertificateRequest): any => ({
    ...obj,
  });
}

export interface CreateLoadBalancerTlsCertificateResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateLoadBalancerTlsCertificateResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLoadBalancerTlsCertificateResult): any => ({
    ...obj,
  });
}

export interface CreateRelationalDatabaseRequest {
  /**
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
   * <p>The Availability Zone in which to create your new database. Use the
   *         <code>us-east-2a</code> case-sensitive format.</p>
   *          <p>You can get a list of Availability Zones by using the <code>get regions</code> operation.
   *       Be sure to add the <code>include relational database Availability Zones</code> parameter to
   *       your request.</p>
   */
  availabilityZone?: string;

  /**
   * <p>The blueprint ID for your new database. A blueprint describes the major engine version of
   *       a database.</p>
   *          <p>You can get a list of database blueprints IDs by using the <code>get relational database
   *         blueprints</code> operation.</p>
   */
  relationalDatabaseBlueprintId: string | undefined;

  /**
   * <p>The bundle ID for your new database. A bundle describes the performance specifications for
   *       your database.</p>
   *          <p>You can get a list of database bundle IDs by using the <code>get relational database
   *         bundles</code> operation.</p>
   */
  relationalDatabaseBundleId: string | undefined;

  /**
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
   * <p>The daily time range during which automated backups are created for your new database if
   *       automated backups are enabled.</p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for each
   *       AWS Region. For more information about the preferred backup window time blocks for each
   *       region, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow">Working With Backups</a> guide in the Amazon Relational Database Service (Amazon RDS) documentation.</p>
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
   * <p>Specifies the accessibility options for your new database. A value of <code>true</code>
   *       specifies a database that is available to resources outside of your Lightsail account. A
   *       value of <code>false</code> specifies a database that is available only to your Lightsail
   *       resources in the same region as your database.</p>
   */
  publiclyAccessible?: boolean;

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

export namespace CreateRelationalDatabaseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRelationalDatabaseRequest): any => ({
    ...obj,
    ...(obj.masterUserPassword && { masterUserPassword: SENSITIVE_STRING }),
  });
}

export interface CreateRelationalDatabaseResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateRelationalDatabaseResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRelationalDatabaseResult): any => ({
    ...obj,
  });
}

export interface CreateRelationalDatabaseFromSnapshotRequest {
  /**
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
   * <p>The Availability Zone in which to create your new database. Use the
   *         <code>us-east-2a</code> case-sensitive format.</p>
   *          <p>You can get a list of Availability Zones by using the <code>get regions</code> operation.
   *       Be sure to add the <code>include relational database Availability Zones</code> parameter to
   *       your request.</p>
   */
  availabilityZone?: string;

  /**
   * <p>Specifies the accessibility options for your new database. A value of <code>true</code>
   *       specifies a database that is available to resources outside of your Lightsail account. A
   *       value of <code>false</code> specifies a database that is available only to your Lightsail
   *       resources in the same region as your database.</p>
   */
  publiclyAccessible?: boolean;

  /**
   * <p>The name of the database snapshot from which to create your new database.</p>
   */
  relationalDatabaseSnapshotName?: string;

  /**
   * <p>The bundle ID for your new database. A bundle describes the performance specifications for
   *       your database.</p>
   *          <p>You can get a list of database bundle IDs by using the <code>get relational database
   *         bundles</code> operation.</p>
   *          <p>When creating a new database from a snapshot, you cannot choose a bundle that is smaller
   *       than the bundle of the source database.</p>
   */
  relationalDatabaseBundleId?: string;

  /**
   * <p>The name of the source database.</p>
   */
  sourceRelationalDatabaseName?: string;

  /**
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
   * <p>Specifies whether your database is restored from the latest backup time. A value of
   *         <code>true</code> restores from the latest backup time. </p>
   *          <p>Default: <code>false</code>
   *          </p>
   *          <p>Constraints: Cannot be specified if the <code>restore time</code> parameter is
   *       provided.</p>
   */
  useLatestRestorableTime?: boolean;

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

export namespace CreateRelationalDatabaseFromSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRelationalDatabaseFromSnapshotRequest): any => ({
    ...obj,
  });
}

export interface CreateRelationalDatabaseFromSnapshotResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateRelationalDatabaseFromSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRelationalDatabaseFromSnapshotResult): any => ({
    ...obj,
  });
}

export interface CreateRelationalDatabaseSnapshotRequest {
  /**
   * <p>The name of the database on which to base your new snapshot.</p>
   */
  relationalDatabaseName: string | undefined;

  /**
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
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

export namespace CreateRelationalDatabaseSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRelationalDatabaseSnapshotRequest): any => ({
    ...obj,
  });
}

export interface CreateRelationalDatabaseSnapshotResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateRelationalDatabaseSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRelationalDatabaseSnapshotResult): any => ({
    ...obj,
  });
}

export interface DeleteAlarmRequest {
  /**
   * <p>The name of the alarm to delete.</p>
   */
  alarmName: string | undefined;
}

export namespace DeleteAlarmRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAlarmRequest): any => ({
    ...obj,
  });
}

export interface DeleteAlarmResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteAlarmResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAlarmResult): any => ({
    ...obj,
  });
}

export interface DeleteAutoSnapshotRequest {
  /**
   * <p>The name of the source instance or disk from which to delete the automatic
   *       snapshot.</p>
   */
  resourceName: string | undefined;

  /**
   * <p>The date of the automatic snapshot to delete in <code>YYYY-MM-DD</code> format. Use the
   *         <code>get auto snapshots</code> operation to get the available automatic snapshots for a
   *       resource.</p>
   */
  date: string | undefined;
}

export namespace DeleteAutoSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAutoSnapshotRequest): any => ({
    ...obj,
  });
}

export interface DeleteAutoSnapshotResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteAutoSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAutoSnapshotResult): any => ({
    ...obj,
  });
}

export interface DeleteBucketRequest {
  /**
   * <p>The name of the bucket to delete.</p>
   *
   *          <p>Use the <a>GetBuckets</a> action to get a list of bucket names that you can
   *       specify.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>A Boolean value that indicates whether to force delete the bucket.</p>
   *
   *          <p>You must force delete the bucket if it has one of the following conditions:</p>
   *          <ul>
   *             <li>
   *                <p>The bucket is the origin of a distribution.</p>
   *             </li>
   *             <li>
   *                <p>The bucket has instances that were granted access to it using the <a>SetResourceAccessForBucket</a> action.</p>
   *             </li>
   *             <li>
   *                <p>The bucket has objects.</p>
   *             </li>
   *             <li>
   *                <p>The bucket has access keys.</p>
   *             </li>
   *          </ul>
   *
   *          <important>
   *             <p>Force deleting a bucket might impact other resources that rely on the bucket, such as
   *         instances, distributions, or software that use the issued access keys.</p>
   *          </important>
   */
  forceDelete?: boolean;
}

export namespace DeleteBucketRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBucketRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteBucketResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBucketResult): any => ({
    ...obj,
  });
}

export interface DeleteBucketAccessKeyRequest {
  /**
   * <p>The name of the bucket that the access key belongs to.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>The ID of the access key to delete.</p>
   *
   *          <p>Use the <a>GetBucketAccessKeys</a> action to get a list of access key IDs that
   *       you can specify.</p>
   */
  accessKeyId: string | undefined;
}

export namespace DeleteBucketAccessKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBucketAccessKeyRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketAccessKeyResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteBucketAccessKeyResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBucketAccessKeyResult): any => ({
    ...obj,
  });
}

export interface DeleteCertificateRequest {
  /**
   * <p>The name of the certificate to delete.</p>
   *          <p>Use the <code>GetCertificates</code> action to get a list of certificate names that you
   *       can specify.</p>
   */
  certificateName: string | undefined;
}

export namespace DeleteCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCertificateRequest): any => ({
    ...obj,
  });
}

export interface DeleteCertificateResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteCertificateResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCertificateResult): any => ({
    ...obj,
  });
}

export interface DeleteContactMethodRequest {
  /**
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

export namespace DeleteContactMethodRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteContactMethodRequest): any => ({
    ...obj,
  });
}

export interface DeleteContactMethodResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteContactMethodResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteContactMethodResult): any => ({
    ...obj,
  });
}

export interface DeleteContainerImageRequest {
  /**
   * <p>The name of the container service for which to delete a registered container image.</p>
   */
  serviceName: string | undefined;

  /**
   * <p>The name of the container image to delete from the container service.</p>
   *
   *          <p>Use the <code>GetContainerImages</code> action to get the name of the container images
   *       that are registered to a container service.</p>
   *
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

export namespace DeleteContainerImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteContainerImageRequest): any => ({
    ...obj,
  });
}

export interface DeleteContainerImageResult {}

export namespace DeleteContainerImageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteContainerImageResult): any => ({
    ...obj,
  });
}

export interface DeleteContainerServiceRequest {
  /**
   * <p>The name of the container service to delete.</p>
   */
  serviceName: string | undefined;
}

export namespace DeleteContainerServiceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteContainerServiceRequest): any => ({
    ...obj,
  });
}

export interface DeleteContainerServiceResult {}

export namespace DeleteContainerServiceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteContainerServiceResult): any => ({
    ...obj,
  });
}

export interface DeleteDiskRequest {
  /**
   * <p>The unique name of the disk you want to delete (e.g., <code>my-disk</code>).</p>
   */
  diskName: string | undefined;

  /**
   * <p>A Boolean value to indicate whether to delete the enabled add-ons for the disk.</p>
   */
  forceDeleteAddOns?: boolean;
}

export namespace DeleteDiskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDiskRequest): any => ({
    ...obj,
  });
}

export interface DeleteDiskResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteDiskResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDiskResult): any => ({
    ...obj,
  });
}

export interface DeleteDiskSnapshotRequest {
  /**
   * <p>The name of the disk snapshot you want to delete (e.g.,
   *       <code>my-disk-snapshot</code>).</p>
   */
  diskSnapshotName: string | undefined;
}

export namespace DeleteDiskSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDiskSnapshotRequest): any => ({
    ...obj,
  });
}

export interface DeleteDiskSnapshotResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteDiskSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDiskSnapshotResult): any => ({
    ...obj,
  });
}

export interface DeleteDistributionRequest {
  /**
   * <p>The name of the distribution to delete.</p>
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   */
  distributionName?: string;
}

export namespace DeleteDistributionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDistributionRequest): any => ({
    ...obj,
  });
}

export interface DeleteDistributionResult {
  /**
   * <p>An object that describes the result of the action, such as the status of the request, the
   *       timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace DeleteDistributionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDistributionResult): any => ({
    ...obj,
  });
}

export interface DeleteDomainRequest {
  /**
   * <p>The specific domain name to delete.</p>
   */
  domainName: string | undefined;
}

export namespace DeleteDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDomainRequest): any => ({
    ...obj,
  });
}

export interface DeleteDomainResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace DeleteDomainResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDomainResult): any => ({
    ...obj,
  });
}

export interface DeleteDomainEntryRequest {
  /**
   * <p>The name of the domain entry to delete.</p>
   */
  domainName: string | undefined;

  /**
   * <p>An array of key-value pairs containing information about your domain entries.</p>
   */
  domainEntry: DomainEntry | undefined;
}

export namespace DeleteDomainEntryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDomainEntryRequest): any => ({
    ...obj,
  });
}

export interface DeleteDomainEntryResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace DeleteDomainEntryResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDomainEntryResult): any => ({
    ...obj,
  });
}

export interface DeleteInstanceRequest {
  /**
   * <p>The name of the instance to delete.</p>
   */
  instanceName: string | undefined;

  /**
   * <p>A Boolean value to indicate whether to delete the enabled add-ons for the disk.</p>
   */
  forceDeleteAddOns?: boolean;
}

export namespace DeleteInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInstanceRequest): any => ({
    ...obj,
  });
}

export interface DeleteInstanceResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteInstanceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInstanceResult): any => ({
    ...obj,
  });
}

export interface DeleteInstanceSnapshotRequest {
  /**
   * <p>The name of the snapshot to delete.</p>
   */
  instanceSnapshotName: string | undefined;
}

export namespace DeleteInstanceSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInstanceSnapshotRequest): any => ({
    ...obj,
  });
}

export interface DeleteInstanceSnapshotResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteInstanceSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInstanceSnapshotResult): any => ({
    ...obj,
  });
}

export interface DeleteKeyPairRequest {
  /**
   * <p>The name of the key pair to delete.</p>
   */
  keyPairName: string | undefined;
}

export namespace DeleteKeyPairRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteKeyPairRequest): any => ({
    ...obj,
  });
}

export interface DeleteKeyPairResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace DeleteKeyPairResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteKeyPairResult): any => ({
    ...obj,
  });
}

export interface DeleteKnownHostKeysRequest {
  /**
   * <p>The name of the instance for which you want to reset the host key or certificate.</p>
   */
  instanceName: string | undefined;
}

export namespace DeleteKnownHostKeysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteKnownHostKeysRequest): any => ({
    ...obj,
  });
}

export interface DeleteKnownHostKeysResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteKnownHostKeysResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteKnownHostKeysResult): any => ({
    ...obj,
  });
}

export interface DeleteLoadBalancerRequest {
  /**
   * <p>The name of the load balancer you want to delete.</p>
   */
  loadBalancerName: string | undefined;
}

export namespace DeleteLoadBalancerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLoadBalancerRequest): any => ({
    ...obj,
  });
}

export interface DeleteLoadBalancerResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteLoadBalancerResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLoadBalancerResult): any => ({
    ...obj,
  });
}

export interface DeleteLoadBalancerTlsCertificateRequest {
  /**
   * <p>The load balancer name.</p>
   */
  loadBalancerName: string | undefined;

  /**
   * <p>The SSL/TLS certificate name.</p>
   */
  certificateName: string | undefined;

  /**
   * <p>When <code>true</code>, forces the deletion of an SSL/TLS certificate.</p>
   *          <p>There can be two certificates associated with a Lightsail load balancer: the primary and
   *       the backup. The <code>force</code> parameter is required when the primary SSL/TLS certificate
   *       is in use by an instance attached to the load balancer.</p>
   */
  force?: boolean;
}

export namespace DeleteLoadBalancerTlsCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLoadBalancerTlsCertificateRequest): any => ({
    ...obj,
  });
}

export interface DeleteLoadBalancerTlsCertificateResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteLoadBalancerTlsCertificateResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLoadBalancerTlsCertificateResult): any => ({
    ...obj,
  });
}

export interface DeleteRelationalDatabaseRequest {
  /**
   * <p>The name of the database that you are deleting.</p>
   */
  relationalDatabaseName: string | undefined;

  /**
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

export namespace DeleteRelationalDatabaseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRelationalDatabaseRequest): any => ({
    ...obj,
  });
}

export interface DeleteRelationalDatabaseResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteRelationalDatabaseResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRelationalDatabaseResult): any => ({
    ...obj,
  });
}

export interface DeleteRelationalDatabaseSnapshotRequest {
  /**
   * <p>The name of the database snapshot that you are deleting.</p>
   */
  relationalDatabaseSnapshotName: string | undefined;
}

export namespace DeleteRelationalDatabaseSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRelationalDatabaseSnapshotRequest): any => ({
    ...obj,
  });
}

export interface DeleteRelationalDatabaseSnapshotResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteRelationalDatabaseSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRelationalDatabaseSnapshotResult): any => ({
    ...obj,
  });
}

export interface DetachCertificateFromDistributionRequest {
  /**
   * <p>The name of the distribution from which to detach the certificate.</p>
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   */
  distributionName: string | undefined;
}

export namespace DetachCertificateFromDistributionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachCertificateFromDistributionRequest): any => ({
    ...obj,
  });
}

export interface DetachCertificateFromDistributionResult {
  /**
   * <p>An object that describes the result of the action, such as the status of the request, the
   *       timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace DetachCertificateFromDistributionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachCertificateFromDistributionResult): any => ({
    ...obj,
  });
}

export interface DetachDiskRequest {
  /**
   * <p>The unique name of the disk you want to detach from your instance (e.g.,
   *         <code>my-disk</code>).</p>
   */
  diskName: string | undefined;
}

export namespace DetachDiskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachDiskRequest): any => ({
    ...obj,
  });
}

export interface DetachDiskResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DetachDiskResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachDiskResult): any => ({
    ...obj,
  });
}

export interface DetachInstancesFromLoadBalancerRequest {
  /**
   * <p>The name of the Lightsail load balancer.</p>
   */
  loadBalancerName: string | undefined;

  /**
   * <p>An array of strings containing the names of the instances you want to detach from the load
   *       balancer.</p>
   */
  instanceNames: string[] | undefined;
}

export namespace DetachInstancesFromLoadBalancerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachInstancesFromLoadBalancerRequest): any => ({
    ...obj,
  });
}

export interface DetachInstancesFromLoadBalancerResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DetachInstancesFromLoadBalancerResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachInstancesFromLoadBalancerResult): any => ({
    ...obj,
  });
}

export interface DetachStaticIpRequest {
  /**
   * <p>The name of the static IP to detach from the instance.</p>
   */
  staticIpName: string | undefined;
}

export namespace DetachStaticIpRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachStaticIpRequest): any => ({
    ...obj,
  });
}

export interface DetachStaticIpResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DetachStaticIpResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachStaticIpResult): any => ({
    ...obj,
  });
}

export interface DisableAddOnRequest {
  /**
   * <p>The add-on type to disable.</p>
   */
  addOnType: AddOnType | string | undefined;

  /**
   * <p>The name of the source resource for which to disable the add-on.</p>
   */
  resourceName: string | undefined;
}

export namespace DisableAddOnRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableAddOnRequest): any => ({
    ...obj,
  });
}

export interface DisableAddOnResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DisableAddOnResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableAddOnResult): any => ({
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

export interface DownloadDefaultKeyPairRequest {}

export namespace DownloadDefaultKeyPairRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DownloadDefaultKeyPairRequest): any => ({
    ...obj,
  });
}

export interface DownloadDefaultKeyPairResult {
  /**
   * <p>A base64-encoded public key of the <code>ssh-rsa</code> type.</p>
   */
  publicKeyBase64?: string;

  /**
   * <p>A base64-encoded RSA private key.</p>
   */
  privateKeyBase64?: string;
}

export namespace DownloadDefaultKeyPairResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DownloadDefaultKeyPairResult): any => ({
    ...obj,
  });
}

export interface EnableAddOnRequest {
  /**
   * <p>The name of the source resource for which to enable or modify the add-on.</p>
   */
  resourceName: string | undefined;

  /**
   * <p>An array of strings representing the add-on to enable or modify.</p>
   */
  addOnRequest: AddOnRequest | undefined;
}

export namespace EnableAddOnRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableAddOnRequest): any => ({
    ...obj,
  });
}

export interface EnableAddOnResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace EnableAddOnResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableAddOnResult): any => ({
    ...obj,
  });
}

export interface ExportSnapshotRequest {
  /**
   * <p>The name of the instance or disk snapshot to be exported to Amazon EC2.</p>
   */
  sourceSnapshotName: string | undefined;
}

export namespace ExportSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportSnapshotRequest): any => ({
    ...obj,
  });
}

export interface ExportSnapshotResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace ExportSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportSnapshotResult): any => ({
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

export interface GetActiveNamesRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetActiveNames</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetActiveNamesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetActiveNamesRequest): any => ({
    ...obj,
  });
}

export interface GetActiveNamesResult {
  /**
   * <p>The list of active names returned by the get active names request.</p>
   */
  activeNames?: string[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetActiveNames</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetActiveNamesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetActiveNamesResult): any => ({
    ...obj,
  });
}

export interface GetAlarmsRequest {
  /**
   * <p>The name of the alarm.</p>
   *          <p>Specify an alarm name to return information about a specific alarm.</p>
   */
  alarmName?: string;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetAlarms</code> request. If your results
   *       are paginated, the response will return a next page token that you can specify as the page
   *       token in a subsequent request.</p>
   */
  pageToken?: string;

  /**
   * <p>The name of the Lightsail resource being monitored by the alarm.</p>
   *          <p>Specify a monitored resource name to return information about all alarms for a specific
   *       resource.</p>
   */
  monitoredResourceName?: string;
}

export namespace GetAlarmsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAlarmsRequest): any => ({
    ...obj,
  });
}

export interface GetAlarmsResult {
  /**
   * <p>An array of objects that describe the alarms.</p>
   */
  alarms?: Alarm[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetAlarms</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetAlarmsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAlarmsResult): any => ({
    ...obj,
  });
}

export interface GetAutoSnapshotsRequest {
  /**
   * <p>The name of the source instance or disk from which to get automatic snapshot
   *       information.</p>
   */
  resourceName: string | undefined;
}

export namespace GetAutoSnapshotsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAutoSnapshotsRequest): any => ({
    ...obj,
  });
}

export interface GetAutoSnapshotsResult {
  /**
   * <p>The name of the source instance or disk for the automatic snapshots.</p>
   */
  resourceName?: string;

  /**
   * <p>The resource type (e.g., <code>Instance</code> or <code>Disk</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>An array of objects that describe the automatic snapshots that are available for the
   *       specified source instance or disk.</p>
   */
  autoSnapshots?: AutoSnapshotDetails[];
}

export namespace GetAutoSnapshotsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAutoSnapshotsResult): any => ({
    ...obj,
  });
}

export interface GetBlueprintsRequest {
  /**
   * <p>A Boolean value indicating whether to include inactive results in your request.</p>
   */
  includeInactive?: boolean;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetBlueprints</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetBlueprintsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBlueprintsRequest): any => ({
    ...obj,
  });
}

export interface GetBlueprintsResult {
  /**
   * <p>An array of key-value pairs that contains information about the available
   *       blueprints.</p>
   */
  blueprints?: Blueprint[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetBlueprints</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetBlueprintsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBlueprintsResult): any => ({
    ...obj,
  });
}

export interface GetBucketAccessKeysRequest {
  /**
   * <p>The name of the bucket for which to return access keys.</p>
   */
  bucketName: string | undefined;
}

export namespace GetBucketAccessKeysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBucketAccessKeysRequest): any => ({
    ...obj,
  });
}

export interface GetBucketAccessKeysResult {
  /**
   * <p>An object that describes the access keys for the specified bucket.</p>
   */
  accessKeys?: AccessKey[];
}

export namespace GetBucketAccessKeysResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBucketAccessKeysResult): any => ({
    ...obj,
    ...(obj.accessKeys && { accessKeys: obj.accessKeys.map((item) => AccessKey.filterSensitiveLog(item)) }),
  });
}

export interface GetBucketBundlesRequest {
  /**
   * <p>A Boolean value that indicates whether to include inactive (unavailable) bundles in the
   *       response.</p>
   */
  includeInactive?: boolean;
}

export namespace GetBucketBundlesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBucketBundlesRequest): any => ({
    ...obj,
  });
}

export interface GetBucketBundlesResult {
  /**
   * <p>An object that describes bucket bundles.</p>
   */
  bundles?: BucketBundle[];
}

export namespace GetBucketBundlesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBucketBundlesResult): any => ({
    ...obj,
  });
}

export interface GetBucketMetricDataRequest {
  /**
   * <p>The name of the bucket for which to get metric data.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>The metric for which you want to return information.</p>
   *
   *          <p>Valid bucket metric names are listed below, along with the most useful statistics to
   *       include in your request, and the published unit value.</p>
   *
   *          <note>
   *             <p>These bucket metrics are reported once per day.</p>
   *          </note>
   *
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
   * <p>The timestamp indicating the earliest data to be returned.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The timestamp indicating the latest data to be returned.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>The granularity, in seconds, of the returned data points.</p>
   *          <note>
   *             <p>Bucket storage metrics are reported once per day. Therefore, you should specify a period
   *         of 86400 seconds, which is the number of seconds in a day.</p>
   *          </note>
   */
  period: number | undefined;

  /**
   * <p>The statistic for the metric.</p>
   *
   *          <p>The following statistics are available:</p>
   *
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
   * <p>The unit for the metric data request.</p>
   *          <p>Valid units depend on the metric data being requested. For the valid units with each
   *       available metric, see the <code>metricName</code> parameter.</p>
   */
  unit: MetricUnit | string | undefined;
}

export namespace GetBucketMetricDataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBucketMetricDataRequest): any => ({
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

export interface GetBucketMetricDataResult {
  /**
   * <p>The name of the metric returned.</p>
   */
  metricName?: BucketMetricName | string;

  /**
   * <p>An array of objects that describe the metric data returned.</p>
   */
  metricData?: MetricDatapoint[];
}

export namespace GetBucketMetricDataResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBucketMetricDataResult): any => ({
    ...obj,
  });
}

export interface GetBucketsRequest {
  /**
   * <p>The name of the bucket for which to return information.</p>
   *
   *          <p>When omitted, the response includes all of your buckets in the AWS Region where the
   *       request is made.</p>
   */
  bucketName?: string;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *
   *          <p>To get a page token, perform an initial <code>GetBuckets</code> request. If your results
   *       are paginated, the response will return a next page token that you can specify as the page
   *       token in a subsequent request.</p>
   */
  pageToken?: string;

  /**
   * <p>A Boolean value that indicates whether to include Lightsail instances that were given
   *       access to the bucket using the <a>SetResourceAccessForBucket</a> action.</p>
   */
  includeConnectedResources?: boolean;
}

export namespace GetBucketsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBucketsRequest): any => ({
    ...obj,
  });
}

export interface GetBucketsResult {
  /**
   * <p>An array of objects that describe buckets.</p>
   */
  buckets?: Bucket[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *
   *          <p>To get the next page of results, perform another <code>GetBuckets</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetBucketsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBucketsResult): any => ({
    ...obj,
  });
}

export interface GetBundlesRequest {
  /**
   * <p>A Boolean value that indicates whether to include inactive bundle results in your
   *       request.</p>
   */
  includeInactive?: boolean;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetBundles</code> request. If your results
   *       are paginated, the response will return a next page token that you can specify as the page
   *       token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetBundlesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBundlesRequest): any => ({
    ...obj,
  });
}

export interface GetBundlesResult {
  /**
   * <p>An array of key-value pairs that contains information about the available bundles.</p>
   */
  bundles?: Bundle[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetBundles</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetBundlesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBundlesResult): any => ({
    ...obj,
  });
}

export interface GetCertificatesRequest {
  /**
   * <p>The status of the certificates for which to return information.</p>
   *          <p>For example, specify <code>ISSUED</code> to return only certificates with an
   *         <code>ISSUED</code> status.</p>
   *          <p>When omitted, the response includes all of your certificates in the AWS Region where the
   *       request is made, regardless of their current status.</p>
   */
  certificateStatuses?: (CertificateStatus | string)[];

  /**
   * <p>Indicates whether to include detailed information about the certificates in the
   *       response.</p>
   *          <p>When omitted, the response includes only the certificate names, Amazon Resource Names
   *       (ARNs), domain names, and tags.</p>
   */
  includeCertificateDetails?: boolean;

  /**
   * <p>The name for the certificate for which to return information.</p>
   *          <p>When omitted, the response includes all of your certificates in the AWS Region where the
   *       request is made.</p>
   */
  certificateName?: string;
}

export namespace GetCertificatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCertificatesRequest): any => ({
    ...obj,
  });
}

export interface GetCertificatesResult {
  /**
   * <p>An object that describes certificates.</p>
   */
  certificates?: CertificateSummary[];
}

export namespace GetCertificatesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCertificatesResult): any => ({
    ...obj,
  });
}

export interface GetCloudFormationStackRecordsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetClouFormationStackRecords</code> request.
   *       If your results are paginated, the response will return a next page token that you can specify
   *       as the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetCloudFormationStackRecordsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCloudFormationStackRecordsRequest): any => ({
    ...obj,
  });
}

export interface GetCloudFormationStackRecordsResult {
  /**
   * <p>A list of objects describing the CloudFormation stack records.</p>
   */
  cloudFormationStackRecords?: CloudFormationStackRecord[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another
   *         <code>GetCloudFormationStackRecords</code> request and specify the next page token using the
   *         <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetCloudFormationStackRecordsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCloudFormationStackRecordsResult): any => ({
    ...obj,
  });
}

export interface GetContactMethodsRequest {
  /**
   * <p>The protocols used to send notifications, such as <code>Email</code>, or <code>SMS</code>
   *       (text messaging).</p>
   *          <p>Specify a protocol in your request to return information about a specific contact method
   *       protocol.</p>
   */
  protocols?: (ContactProtocol | string)[];
}

export namespace GetContactMethodsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContactMethodsRequest): any => ({
    ...obj,
  });
}

export interface GetContactMethodsResult {
  /**
   * <p>An array of objects that describe the contact methods.</p>
   */
  contactMethods?: ContactMethod[];
}

export namespace GetContactMethodsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContactMethodsResult): any => ({
    ...obj,
  });
}

export interface GetContainerAPIMetadataRequest {}

export namespace GetContainerAPIMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerAPIMetadataRequest): any => ({
    ...obj,
  });
}

export interface GetContainerAPIMetadataResult {
  /**
   * <p>Metadata about Lightsail containers, such as the current version of the Lightsail
   *       Control (lightsailctl) plugin.</p>
   */
  metadata?: { [key: string]: string }[];
}

export namespace GetContainerAPIMetadataResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerAPIMetadataResult): any => ({
    ...obj,
  });
}

export interface GetContainerImagesRequest {
  /**
   * <p>The name of the container service for which to return registered container images.</p>
   */
  serviceName: string | undefined;
}

export namespace GetContainerImagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerImagesRequest): any => ({
    ...obj,
  });
}

export interface GetContainerImagesResult {
  /**
   * <p>An array of objects that describe container images that are registered to the container
   *       service.</p>
   */
  containerImages?: ContainerImage[];
}

export namespace GetContainerImagesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerImagesResult): any => ({
    ...obj,
  });
}

export interface GetContainerLogRequest {
  /**
   * <p>The name of the container service for which to get a container log.</p>
   */
  serviceName: string | undefined;

  /**
   * <p>The name of the container that is either running or previously ran on the container
   *       service for which to return a log.</p>
   */
  containerName: string | undefined;

  /**
   * <p>The start of the time interval for which to get log data.</p>
   *
   *          <p>Constraints:</p>
   *
   *          <ul>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Specified in the Unix time format.</p>
   *
   *                <p>For example, if you wish to use a start time of October 1, 2018, at 8 PM UTC, specify
   *             <code>1538424000</code> as the start time.</p>
   *             </li>
   *          </ul>
   *
   *          <p>You can convert a human-friendly time to Unix time format using a converter like <a href="https://www.epochconverter.com/">Epoch converter</a>.</p>
   */
  startTime?: Date;

  /**
   * <p>The end of the time interval for which to get log data.</p>
   *
   *          <p>Constraints:</p>
   *
   *          <ul>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Specified in the Unix time format.</p>
   *
   *                <p>For example, if you wish to use an end time of October 1, 2018, at 9 PM UTC, specify
   *             <code>1538427600</code> as the end time.</p>
   *             </li>
   *          </ul>
   *
   *          <p>You can convert a human-friendly time to Unix time format using a converter like <a href="https://www.epochconverter.com/">Epoch converter</a>.</p>
   */
  endTime?: Date;

  /**
   * <p>The pattern to use to filter the returned log events to a specific term.</p>
   *
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
   * <p>The token to advance to the next page of results from your request.</p>
   *
   *          <p>To get a page token, perform an initial <code>GetContainerLog</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetContainerLogRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerLogRequest): any => ({
    ...obj,
  });
}

export interface GetContainerLogResult {
  /**
   * <p>An array of objects that describe the log events of a container.</p>
   */
  logEvents?: ContainerServiceLogEvent[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *
   *          <p>To get the next page of results, perform another <code>GetContainerLog</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetContainerLogResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerLogResult): any => ({
    ...obj,
  });
}

export interface GetContainerServiceDeploymentsRequest {
  /**
   * <p>The name of the container service for which to return deployments.</p>
   */
  serviceName: string | undefined;
}

export namespace GetContainerServiceDeploymentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerServiceDeploymentsRequest): any => ({
    ...obj,
  });
}

export interface GetContainerServiceDeploymentsResult {
  /**
   * <p>An array of objects that describe deployments for a container service.</p>
   */
  deployments?: ContainerServiceDeployment[];
}

export namespace GetContainerServiceDeploymentsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerServiceDeploymentsResult): any => ({
    ...obj,
  });
}

export interface GetContainerServiceMetricDataRequest {
  /**
   * <p>The name of the container service for which to get metric data.</p>
   */
  serviceName: string | undefined;

  /**
   * <p>The metric for which you want to return information.</p>
   *
   *          <p>Valid container service metric names are listed below, along with the most useful
   *       statistics to include in your request, and the published unit value.</p>
   *
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
   * <p>The start time of the time period.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The end time of the time period.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>The granularity, in seconds, of the returned data points.</p>
   *
   *          <p>All container service metric data is available in 5-minute (300 seconds)
   *       granularity.</p>
   */
  period: number | undefined;

  /**
   * <p>The statistic for the metric.</p>
   *
   *          <p>The following statistics are available:</p>
   *
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

export namespace GetContainerServiceMetricDataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerServiceMetricDataRequest): any => ({
    ...obj,
  });
}

export interface GetContainerServiceMetricDataResult {
  /**
   * <p>The name of the metric returned. </p>
   */
  metricName?: ContainerServiceMetricName | string;

  /**
   * <p>An array of objects that describe the metric data returned.</p>
   */
  metricData?: MetricDatapoint[];
}

export namespace GetContainerServiceMetricDataResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerServiceMetricDataResult): any => ({
    ...obj,
  });
}

export interface GetContainerServicePowersRequest {}

export namespace GetContainerServicePowersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerServicePowersRequest): any => ({
    ...obj,
  });
}

export interface GetContainerServicePowersResult {
  /**
   * <p>An array of objects that describe the powers that can be specified for a container
   *       service.</p>
   */
  powers?: ContainerServicePower[];
}

export namespace GetContainerServicePowersResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerServicePowersResult): any => ({
    ...obj,
  });
}

export interface GetContainerServicesRequest {
  /**
   * <p>The name of the container service for which to return information.</p>
   *
   *          <p>When omitted, the response includes all of your container services in the AWS Region
   *       where the request is made.</p>
   */
  serviceName?: string;
}

export namespace GetContainerServicesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerServicesRequest): any => ({
    ...obj,
  });
}

export interface GetDiskRequest {
  /**
   * <p>The name of the disk (e.g., <code>my-disk</code>).</p>
   */
  diskName: string | undefined;
}

export namespace GetDiskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDiskRequest): any => ({
    ...obj,
  });
}

export interface GetDiskResult {
  /**
   * <p>An object containing information about the disk.</p>
   */
  disk?: Disk;
}

export namespace GetDiskResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDiskResult): any => ({
    ...obj,
  });
}

export interface GetDisksRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetDisks</code> request. If your results are
   *       paginated, the response will return a next page token that you can specify as the page token
   *       in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetDisksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDisksRequest): any => ({
    ...obj,
  });
}

export interface GetDisksResult {
  /**
   * <p>An array of objects containing information about all block storage disks.</p>
   */
  disks?: Disk[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetDisks</code> request and specify
   *       the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetDisksResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDisksResult): any => ({
    ...obj,
  });
}

export interface GetDiskSnapshotRequest {
  /**
   * <p>The name of the disk snapshot (e.g., <code>my-disk-snapshot</code>).</p>
   */
  diskSnapshotName: string | undefined;
}

export namespace GetDiskSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDiskSnapshotRequest): any => ({
    ...obj,
  });
}

export interface GetDiskSnapshotResult {
  /**
   * <p>An object containing information about the disk snapshot.</p>
   */
  diskSnapshot?: DiskSnapshot;
}

export namespace GetDiskSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDiskSnapshotResult): any => ({
    ...obj,
  });
}

export interface GetDiskSnapshotsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetDiskSnapshots</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetDiskSnapshotsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDiskSnapshotsRequest): any => ({
    ...obj,
  });
}

export interface GetDiskSnapshotsResult {
  /**
   * <p>An array of objects containing information about all block storage disk snapshots.</p>
   */
  diskSnapshots?: DiskSnapshot[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetDiskSnapshots</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetDiskSnapshotsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDiskSnapshotsResult): any => ({
    ...obj,
  });
}

export interface GetDistributionBundlesRequest {}

export namespace GetDistributionBundlesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDistributionBundlesRequest): any => ({
    ...obj,
  });
}

export interface GetDistributionBundlesResult {
  /**
   * <p>An object that describes a distribution bundle.</p>
   */
  bundles?: DistributionBundle[];
}

export namespace GetDistributionBundlesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDistributionBundlesResult): any => ({
    ...obj,
  });
}

export interface GetDistributionLatestCacheResetRequest {
  /**
   * <p>The name of the distribution for which to return the timestamp of the last cache
   *       reset.</p>
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   *          <p>When omitted, the response includes the latest cache reset timestamp of all your
   *       distributions.</p>
   */
  distributionName?: string;
}

export namespace GetDistributionLatestCacheResetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDistributionLatestCacheResetRequest): any => ({
    ...obj,
  });
}

export interface GetDistributionLatestCacheResetResult {
  /**
   * <p>The status of the last cache reset.</p>
   */
  status?: string;

  /**
   * <p>The timestamp of the last cache reset (e.g., <code>1479734909.17</code>) in Unix time
   *       format.</p>
   */
  createTime?: Date;
}

export namespace GetDistributionLatestCacheResetResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDistributionLatestCacheResetResult): any => ({
    ...obj,
  });
}

export interface GetDistributionMetricDataRequest {
  /**
   * <p>The name of the distribution for which to get metric data.</p>
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   */
  distributionName: string | undefined;

  /**
   * <p>The metric for which you want to return information.</p>
   *          <p>Valid distribution metric names are listed below, along with the most useful
   *         <code>statistics</code> to include in your request, and the published <code>unit</code>
   *       value.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Requests</code>
   *                   </b> - The total number of viewer
   *           requests received by your Lightsail distribution, for all HTTP methods, and for both
   *           HTTP and HTTPS requests.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>None</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>BytesDownloaded</code>
   *                   </b> - The number of bytes
   *           downloaded by viewers for GET, HEAD, and OPTIONS requests.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>None</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>BytesUploaded </code>
   *                   </b> - The number of bytes
   *           uploaded to your origin by your Lightsail distribution, using POST and PUT
   *           requests.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>None</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>TotalErrorRate</code>
   *                   </b> - The percentage of all
   *           viewer requests for which the response's HTTP status code was 4xx or 5xx.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Percent</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>4xxErrorRate</code>
   *                   </b> - The percentage of all
   *           viewer requests for which the response's HTTP status cod was 4xx. In these cases, the
   *           client or client viewer may have made an error. For example, a status code of 404 (Not
   *           Found) means that the client requested an object that could not be found.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Percent</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>5xxErrorRate</code>
   *                   </b> - The percentage of all
   *           viewer requests for which the response's HTTP status code was 5xx. In these cases, the
   *           origin server did not satisfy the requests. For example, a status code of 503 (Service
   *           Unavailable) means that the origin server is currently unavailable.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Percent</code>.</p>
   *             </li>
   *          </ul>
   */
  metricName: DistributionMetricName | string | undefined;

  /**
   * <p>The start of the time interval for which to get metric data.</p>
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
  startTime: Date | undefined;

  /**
   * <p>The end of the time interval for which to get metric data.</p>
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
  endTime: Date | undefined;

  /**
   * <p>The granularity, in seconds, for the metric data points that will be returned.</p>
   */
  period: number | undefined;

  /**
   * <p>The unit for the metric data request.</p>
   *          <p>Valid units depend on the metric data being requested. For the valid units with each
   *       available metric, see the <code>metricName</code> parameter.</p>
   */
  unit: MetricUnit | string | undefined;

  /**
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
  statistics: (MetricStatistic | string)[] | undefined;
}

export namespace GetDistributionMetricDataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDistributionMetricDataRequest): any => ({
    ...obj,
  });
}

export interface GetDistributionMetricDataResult {
  /**
   * <p>The name of the metric returned.</p>
   */
  metricName?: DistributionMetricName | string;

  /**
   * <p>An array of objects that describe the metric data returned.</p>
   */
  metricData?: MetricDatapoint[];
}

export namespace GetDistributionMetricDataResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDistributionMetricDataResult): any => ({
    ...obj,
  });
}

export interface GetDistributionsRequest {
  /**
   * <p>The name of the distribution for which to return information.</p>
   *
   *          <p>When omitted, the response includes all of your distributions in the AWS Region where
   *       the request is made.</p>
   */
  distributionName?: string;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetDistributions</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetDistributionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDistributionsRequest): any => ({
    ...obj,
  });
}

export interface GetDistributionsResult {
  /**
   * <p>An array of objects that describe your distributions.</p>
   */
  distributions?: LightsailDistribution[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetDistributions</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetDistributionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDistributionsResult): any => ({
    ...obj,
  });
}

export interface GetDomainRequest {
  /**
   * <p>The domain name for which your want to return information about.</p>
   */
  domainName: string | undefined;
}

export namespace GetDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDomainRequest): any => ({
    ...obj,
  });
}

export interface GetDomainResult {
  /**
   * <p>An array of key-value pairs containing information about your get domain request.</p>
   */
  domain?: Domain;
}

export namespace GetDomainResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDomainResult): any => ({
    ...obj,
  });
}

export interface GetDomainsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetDomains</code> request. If your results
   *       are paginated, the response will return a next page token that you can specify as the page
   *       token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetDomainsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDomainsRequest): any => ({
    ...obj,
  });
}

export interface GetDomainsResult {
  /**
   * <p>An array of key-value pairs containing information about each of the domain entries in the
   *       user's account.</p>
   */
  domains?: Domain[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetDomains</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetDomainsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDomainsResult): any => ({
    ...obj,
  });
}

export interface GetExportSnapshotRecordsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetExportSnapshotRecords</code> request. If
   *       your results are paginated, the response will return a next page token that you can specify as
   *       the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetExportSnapshotRecordsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetExportSnapshotRecordsRequest): any => ({
    ...obj,
  });
}

export interface GetExportSnapshotRecordsResult {
  /**
   * <p>A list of objects describing the export snapshot records.</p>
   */
  exportSnapshotRecords?: ExportSnapshotRecord[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetExportSnapshotRecords</code>
   *       request and specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetExportSnapshotRecordsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetExportSnapshotRecordsResult): any => ({
    ...obj,
  });
}

export interface GetInstanceRequest {
  /**
   * <p>The name of the instance.</p>
   */
  instanceName: string | undefined;
}

export namespace GetInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInstanceRequest): any => ({
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

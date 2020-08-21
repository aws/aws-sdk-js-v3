import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  tip?: string;
  message?: string;
  code?: string;
  docs?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccessDeniedException => __isa(o, "AccessDeniedException");
}

export enum AccessDirection {
  inbound = "inbound",
  outbound = "outbound",
}

/**
 * <p>Lightsail throws this exception when an account is still in the setup in progress
 *       state.</p>
 */
export interface AccountSetupInProgressException extends __SmithyException, $MetadataBearer {
  name: "AccountSetupInProgressException";
  $fault: "client";
  docs?: string;
  code?: string;
  tip?: string;
  message?: string;
}

export namespace AccountSetupInProgressException {
  export const filterSensitiveLog = (obj: AccountSetupInProgressException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccountSetupInProgressException => __isa(o, "AccountSetupInProgressException");
}

/**
 * <p>Describes an add-on that is enabled for an Amazon Lightsail resource.</p>
 */
export interface AddOn {
  __type?: "AddOn";
  /**
   * <p>The next daily time an automatic snapshot will be created.</p>
   *          <p>The time shown is in <code>HH:00</code> format, and in Coordinated Universal Time
   *       (UTC).</p>
   *          <p>The snapshot is automatically created between the time shown and up to 45 minutes
   *       after.</p>
   */
  nextSnapshotTimeOfDay?: string;

  /**
   * <p>The name of the add-on.</p>
   */
  name?: string;

  /**
   * <p>The daily time when an automatic snapshot is created.</p>
   *          <p>The time shown is in <code>HH:00</code> format, and in Coordinated Universal Time
   *       (UTC).</p>
   *          <p>The snapshot is automatically created between the time shown and up to 45 minutes
   *       after.</p>
   */
  snapshotTimeOfDay?: string;

  /**
   * <p>The status of the add-on.</p>
   */
  status?: string;
}

export namespace AddOn {
  export const filterSensitiveLog = (obj: AddOn): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AddOn => __isa(o, "AddOn");
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
  __type?: "AddOnRequest";
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
  export const filterSensitiveLog = (obj: AddOnRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AddOnRequest => __isa(o, "AddOnRequest");
}

export enum AddOnType {
  AutoSnapshot = "AutoSnapshot",
}

/**
 * <p>Describes an alarm.</p>
 *          <p>An alarm is a way to monitor your Amazon Lightsail resource metrics. For more information,
 *       see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms
 *         in Amazon Lightsail</a>.</p>
 */
export interface Alarm {
  __type?: "Alarm";
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
   * <p>An object that lists information about the location of the alarm.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The value against which the specified statistic is compared.</p>
   */
  threshold?: number;

  /**
   * <p>The alarm states that trigger a notification.</p>
   */
  notificationTriggers?: (AlarmState | string)[];

  /**
   * <p>The unit of the metric associated with the alarm.</p>
   */
  unit?: MetricUnit | string;

  /**
   * <p>The name of the metric associated with the alarm.</p>
   */
  metricName?: MetricName | string;

  /**
   * <p>The contact protocols for the alarm, such as <code>Email</code>, <code>SMS</code> (text
   *       messaging), or both.</p>
   */
  contactProtocols?: (ContactProtocol | string)[];

  /**
   * <p>The arithmetic operation used when comparing the specified statistic and threshold.</p>
   */
  comparisonOperator?: ComparisonOperator | string;

  /**
   * <p>The number of data points that must not within the specified threshold to trigger the
   *       alarm.</p>
   */
  datapointsToAlarm?: number;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       your Lightsail alarm. This code enables our support team to look up your Lightsail
   *       information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The Lightsail resource type (e.g., <code>Alarm</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The name of the alarm.</p>
   */
  name?: string;

  /**
   * <p>The number of periods over which data is compared to the specified threshold.</p>
   */
  evaluationPeriods?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the alarm.</p>
   */
  arn?: string;

  /**
   * <p>Indicates whether the alarm is enabled.</p>
   */
  notificationEnabled?: boolean;

  /**
   * <p>The period, in seconds, over which the statistic is applied.</p>
   */
  period?: number;

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
   * <p>The timestamp when the alarm was created.</p>
   */
  createdAt?: Date;

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
   * <p>An object that lists information about the resource monitored by the alarm.</p>
   */
  monitoredResourceInfo?: MonitoredResourceInfo;
}

export namespace Alarm {
  export const filterSensitiveLog = (obj: Alarm): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Alarm => __isa(o, "Alarm");
}

export enum AlarmState {
  ALARM = "ALARM",
  INSUFFICIENT_DATA = "INSUFFICIENT_DATA",
  OK = "OK",
}

export interface AllocateStaticIpRequest {
  __type?: "AllocateStaticIpRequest";
  /**
   * <p>The name of the static IP address.</p>
   */
  staticIpName: string | undefined;
}

export namespace AllocateStaticIpRequest {
  export const filterSensitiveLog = (obj: AllocateStaticIpRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AllocateStaticIpRequest => __isa(o, "AllocateStaticIpRequest");
}

export interface AllocateStaticIpResult {
  __type?: "AllocateStaticIpResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace AllocateStaticIpResult {
  export const filterSensitiveLog = (obj: AllocateStaticIpResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AllocateStaticIpResult => __isa(o, "AllocateStaticIpResult");
}

export interface AttachCertificateToDistributionRequest {
  __type?: "AttachCertificateToDistributionRequest";
  /**
   * <p>The name of the certificate to attach to a distribution.</p>
   *
   *          <p>Only certificates with a status of <code>ISSUED</code> can be attached to a
   *       distribution.</p>
   *
   *          <p>Use the <code>GetCertificates</code> action to get a list of certificate names that you
   *       can specify.</p>
   *
   *          <note>
   *             <p>This is the name of the certificate resource type and is used only to reference the
   *         certificate in other API actions. It can be different than the domain name of the
   *         certificate. For example, your certificate name might be
   *           <code>WordPress-Blog-Certificate</code> and the domain name of the certificate might be
   *           <code>example.com</code>.</p>
   *          </note>
   */
  certificateName: string | undefined;

  /**
   * <p>The name of the distribution that the certificate will be attached to.</p>
   *
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   */
  distributionName: string | undefined;
}

export namespace AttachCertificateToDistributionRequest {
  export const filterSensitiveLog = (obj: AttachCertificateToDistributionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AttachCertificateToDistributionRequest =>
    __isa(o, "AttachCertificateToDistributionRequest");
}

export interface AttachCertificateToDistributionResult {
  __type?: "AttachCertificateToDistributionResult";
  /**
   * <p>An object that describes the result of the action, such as the status of the request, the
   *       timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace AttachCertificateToDistributionResult {
  export const filterSensitiveLog = (obj: AttachCertificateToDistributionResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AttachCertificateToDistributionResult =>
    __isa(o, "AttachCertificateToDistributionResult");
}

export interface AttachDiskRequest {
  __type?: "AttachDiskRequest";
  /**
   * <p>The disk path to expose to the instance (e.g., <code>/dev/xvdf</code>).</p>
   */
  diskPath: string | undefined;

  /**
   * <p>The name of the Lightsail instance where you want to utilize the storage disk.</p>
   */
  instanceName: string | undefined;

  /**
   * <p>The unique Lightsail disk name (e.g., <code>my-disk</code>).</p>
   */
  diskName: string | undefined;
}

export namespace AttachDiskRequest {
  export const filterSensitiveLog = (obj: AttachDiskRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AttachDiskRequest => __isa(o, "AttachDiskRequest");
}

export interface AttachDiskResult {
  __type?: "AttachDiskResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace AttachDiskResult {
  export const filterSensitiveLog = (obj: AttachDiskResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AttachDiskResult => __isa(o, "AttachDiskResult");
}

/**
 * <p>Describes a block storage disk that is attached to an instance, and is included in an
 *       automatic snapshot.</p>
 */
export interface AttachedDisk {
  __type?: "AttachedDisk";
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
  export const filterSensitiveLog = (obj: AttachedDisk): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AttachedDisk => __isa(o, "AttachedDisk");
}

export interface AttachInstancesToLoadBalancerRequest {
  __type?: "AttachInstancesToLoadBalancerRequest";
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

  /**
   * <p>The name of the load balancer.</p>
   */
  loadBalancerName: string | undefined;
}

export namespace AttachInstancesToLoadBalancerRequest {
  export const filterSensitiveLog = (obj: AttachInstancesToLoadBalancerRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AttachInstancesToLoadBalancerRequest =>
    __isa(o, "AttachInstancesToLoadBalancerRequest");
}

export interface AttachInstancesToLoadBalancerResult {
  __type?: "AttachInstancesToLoadBalancerResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace AttachInstancesToLoadBalancerResult {
  export const filterSensitiveLog = (obj: AttachInstancesToLoadBalancerResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AttachInstancesToLoadBalancerResult =>
    __isa(o, "AttachInstancesToLoadBalancerResult");
}

export interface AttachLoadBalancerTlsCertificateRequest {
  __type?: "AttachLoadBalancerTlsCertificateRequest";
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
  export const filterSensitiveLog = (obj: AttachLoadBalancerTlsCertificateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AttachLoadBalancerTlsCertificateRequest =>
    __isa(o, "AttachLoadBalancerTlsCertificateRequest");
}

export interface AttachLoadBalancerTlsCertificateResult {
  __type?: "AttachLoadBalancerTlsCertificateResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   *          <p>These SSL/TLS certificates are only usable by Lightsail load balancers. You can't get
   *       the certificate and use it for another purpose.</p>
   */
  operations?: Operation[];
}

export namespace AttachLoadBalancerTlsCertificateResult {
  export const filterSensitiveLog = (obj: AttachLoadBalancerTlsCertificateResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AttachLoadBalancerTlsCertificateResult =>
    __isa(o, "AttachLoadBalancerTlsCertificateResult");
}

export interface AttachStaticIpRequest {
  __type?: "AttachStaticIpRequest";
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
  export const filterSensitiveLog = (obj: AttachStaticIpRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AttachStaticIpRequest => __isa(o, "AttachStaticIpRequest");
}

export interface AttachStaticIpResult {
  __type?: "AttachStaticIpResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace AttachStaticIpResult {
  export const filterSensitiveLog = (obj: AttachStaticIpResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AttachStaticIpResult => __isa(o, "AttachStaticIpResult");
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
  __type?: "AutoSnapshotAddOnRequest";
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
  export const filterSensitiveLog = (obj: AutoSnapshotAddOnRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AutoSnapshotAddOnRequest => __isa(o, "AutoSnapshotAddOnRequest");
}

/**
 * <p>Describes an automatic snapshot.</p>
 */
export interface AutoSnapshotDetails {
  __type?: "AutoSnapshotDetails";
  /**
   * <p>The status of the automatic snapshot.</p>
   */
  status?: AutoSnapshotStatus | string;

  /**
   * <p>An array of objects that describe the block storage disks attached to the instance when
   *       the automatic snapshot was created.</p>
   */
  fromAttachedDisks?: AttachedDisk[];

  /**
   * <p>The timestamp when the automatic snapshot was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The date of the automatic snapshot in <code>YYYY-MM-DD</code> format.</p>
   */
  date?: string;
}

export namespace AutoSnapshotDetails {
  export const filterSensitiveLog = (obj: AutoSnapshotDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AutoSnapshotDetails => __isa(o, "AutoSnapshotDetails");
}

export enum AutoSnapshotStatus {
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  NOT_FOUND = "NotFound",
  SUCCESS = "Success",
}

/**
 * <p>Describes an Availability Zone.</p>
 */
export interface AvailabilityZone {
  __type?: "AvailabilityZone";
  /**
   * <p>The state of the Availability Zone.</p>
   */
  state?: string;

  /**
   * <p>The name of the Availability Zone. The format is <code>us-east-2a</code>
   *       (case-sensitive).</p>
   */
  zoneName?: string;
}

export namespace AvailabilityZone {
  export const filterSensitiveLog = (obj: AvailabilityZone): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AvailabilityZone => __isa(o, "AvailabilityZone");
}

export enum BehaviorEnum {
  CacheSetting = "cache",
  DontCacheSetting = "dont-cache",
}

/**
 * <p>Describes a blueprint (a virtual private server image).</p>
 */
export interface Blueprint {
  __type?: "Blueprint";
  /**
   * <p>The friendly name of the blueprint (e.g., <code>Amazon Linux</code>).</p>
   */
  name?: string;

  /**
   * <p>A Boolean value indicating whether the blueprint is active. Inactive blueprints are listed
   *       to support customers with existing instances but are not necessarily available for launch of
   *       new instances. Blueprints are marked inactive when they become outdated due to operating
   *       system updates or new application releases.</p>
   */
  isActive?: boolean;

  /**
   * <p>The end-user license agreement URL for the image or blueprint.</p>
   */
  licenseUrl?: string;

  /**
   * <p>The version number of the operating system, application, or stack (e.g.,
   *         <code>2016.03.0</code>).</p>
   */
  version?: string;

  /**
   * <p>The product URL to learn more about the image or blueprint.</p>
   */
  productUrl?: string;

  /**
   * <p>The type of the blueprint (e.g., <code>os</code> or <code>app</code>).</p>
   */
  type?: BlueprintType | string;

  /**
   * <p>The minimum bundle power required to run this blueprint. For example, you need a bundle
   *       with a power value of 500 or more to create an instance that uses a blueprint with a minimum
   *       power value of 500. <code>0</code> indicates that the blueprint runs on all instance sizes.
   *     </p>
   */
  minPower?: number;

  /**
   * <p>The group name of the blueprint (e.g., <code>amazon-linux</code>).</p>
   */
  group?: string;

  /**
   * <p>The version code.</p>
   */
  versionCode?: string;

  /**
   * <p>The operating system platform (either Linux/Unix-based or Windows Server-based) of the
   *       blueprint.</p>
   */
  platform?: InstancePlatform | string;

  /**
   * <p>The description of the blueprint.</p>
   */
  description?: string;

  /**
   * <p>The ID for the virtual private server image (e.g., <code>app_wordpress_4_4</code> or
   *         <code>app_lamp_7_0</code>).</p>
   */
  blueprintId?: string;
}

export namespace Blueprint {
  export const filterSensitiveLog = (obj: Blueprint): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Blueprint => __isa(o, "Blueprint");
}

export enum BlueprintType {
  app = "app",
  os = "os",
}

/**
 * <p>Describes a bundle, which is a set of specs describing your virtual private server (or
 *         <i>instance</i>).</p>
 */
export interface Bundle {
  __type?: "Bundle";
  /**
   * <p>The number of vCPUs included in the bundle (e.g., <code>2</code>).</p>
   */
  cpuCount?: number;

  /**
   * <p>The price in US dollars (e.g., <code>5.0</code>) of the bundle.</p>
   */
  price?: number;

  /**
   * <p>The Amazon EC2 instance type (e.g., <code>t2.micro</code>).</p>
   */
  instanceType?: string;

  /**
   * <p>A Boolean value indicating whether the bundle is active.</p>
   */
  isActive?: boolean;

  /**
   * <p>The data transfer rate per month in GB (e.g., <code>2000</code>).</p>
   */
  transferPerMonthInGb?: number;

  /**
   * <p>A numeric value that represents the power of the bundle (e.g., <code>500</code>). You can
   *       use the bundle's power value in conjunction with a blueprint's minimum power value to
   *       determine whether the blueprint will run on the bundle. For example, you need a bundle with a
   *       power value of 500 or more to create an instance that uses a blueprint with a minimum power
   *       value of 500.</p>
   */
  power?: number;

  /**
   * <p>The size of the SSD (e.g., <code>30</code>).</p>
   */
  diskSizeInGb?: number;

  /**
   * <p>The bundle ID (e.g., <code>micro_1_0</code>).</p>
   */
  bundleId?: string;

  /**
   * <p>The operating system platform (Linux/Unix-based or Windows Server-based) that the bundle
   *       supports. You can only launch a <code>WINDOWS</code> bundle on a blueprint that supports the
   *         <code>WINDOWS</code> platform. <code>LINUX_UNIX</code> blueprints require a
   *         <code>LINUX_UNIX</code> bundle.</p>
   */
  supportedPlatforms?: (InstancePlatform | string)[];

  /**
   * <p>A friendly name for the bundle (e.g., <code>Micro</code>).</p>
   */
  name?: string;

  /**
   * <p>The amount of RAM in GB (e.g., <code>2.0</code>).</p>
   */
  ramSizeInGb?: number;
}

export namespace Bundle {
  export const filterSensitiveLog = (obj: Bundle): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Bundle => __isa(o, "Bundle");
}

/**
 * <p>Describes the default cache behavior of an Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 */
export interface CacheBehavior {
  __type?: "CacheBehavior";
  /**
   * <p>The cache behavior of the distribution.</p>
   *
   *          <p>The following cache behaviors can be specified:</p>
   *
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
  export const filterSensitiveLog = (obj: CacheBehavior): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CacheBehavior => __isa(o, "CacheBehavior");
}

/**
 * <p>Describes the per-path cache behavior of an Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *
 *          <p>A per-path cache behavior is used to override, or add an exception to, the default cache
 *       behavior of a distribution. For example, if the <code>cacheBehavior</code> is set to
 *         <code>cache</code>, then a per-path cache behavior can be used to specify a directory, file,
 *       or file type that your distribution will cache. Alternately, if the distribution's
 *         <code>cacheBehavior</code> is <code>dont-cache</code>, then a per-path cache behavior can be
 *       used to specify a directory, file, or file type that your distribution will not cache.</p>
 *
 *
 *          <p>if the cacheBehavior's behavior is set to 'cache', then</p>
 */
export interface CacheBehaviorPerPath {
  __type?: "CacheBehaviorPerPath";
  /**
   * <p>The cache behavior for the specified path.</p>
   *
   *          <p>You can specify one of the following per-path cache behaviors:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>cache</code>
   *                   </b> - This behavior caches the
   *           specified path.
   *           </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>dont-cache</code>
   *                   </b> - This behavior doesn't cache
   *           the specified path.
   *           </p>
   *             </li>
   *          </ul>
   */
  behavior?: BehaviorEnum | string;

  /**
   * <p>The path to a directory or file to cached, or not cache. Use an asterisk symbol to specify
   *       wildcard directories (<code>path/to/assets/*</code>), and file types (<code>*.html, *jpg,
   *         *js</code>). Directories and file paths are case-sensitive.</p>
   *
   *          <p>Examples:</p>
   *
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
   *
   *                <p>Specify the following to cache all files in the images sub-directory of the document
   *           root of an Apache web server.</p>
   *                <p>
   *                   <code>var/www/html/images/</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  path?: string;
}

export namespace CacheBehaviorPerPath {
  export const filterSensitiveLog = (obj: CacheBehaviorPerPath): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CacheBehaviorPerPath => __isa(o, "CacheBehaviorPerPath");
}

/**
 * <p>Describes the cache settings of an Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *
 *          <p>These settings apply only to your distribution's <code>cacheBehaviors</code> (including
 *       the <code>defaultCacheBehavior</code>) that have a <code>behavior</code> of
 *       <code>cache</code>.</p>
 */
export interface CacheSettings {
  __type?: "CacheSettings";
  /**
   * <p>An object that describes the headers that are forwarded to the origin. Your content is
   *       cached based on the headers that are forwarded.</p>
   */
  forwardedHeaders?: HeaderObject;

  /**
   * <p>The default amount of time that objects stay in the distribution's cache before the
   *       distribution forwards another request to the origin to determine whether the content has been
   *       updated.</p>
   *
   *          <note>
   *             <p>The value specified applies only when the origin does not add HTTP headers such as
   *           <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and
   *           <code>Expires</code> to objects.</p>
   *          </note>
   */
  defaultTTL?: number;

  /**
   * <p>An object that describes the cookies that are forwarded to the origin. Your content is
   *       cached based on the cookies that are forwarded.</p>
   */
  forwardedCookies?: CookieObject;

  /**
   * <p>The minimum amount of time that objects stay in the distribution's cache before the
   *       distribution forwards another request to the origin to determine whether the object has been
   *       updated.</p>
   *
   *          <p>A value of <code>0</code> must be specified for <code>minimumTTL</code> if the
   *       distribution is configured to forward all headers to the origin.</p>
   */
  minimumTTL?: number;

  /**
   * <p>The HTTP methods that are processed and forwarded to the distribution's origin.</p>
   *
   *          <p>You can specify the following options:</p>
   *
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
   *
   *          <p>If you specify the third option, you might need to restrict access to your distribution's
   *       origin so users can't perform operations that you don't want them to. For example, you might
   *       not want users to have permission to delete objects from your origin.</p>
   */
  allowedHTTPMethods?: string;

  /**
   * <p>The HTTP method responses that are cached by your distribution.</p>
   *
   *          <p>You can specify the following options:</p>
   *
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
   * <p>The maximum amount of time that objects stay in the distribution's cache before the
   *       distribution forwards another request to the origin to determine whether the object has been
   *       updated.</p>
   *
   *          <p>The value specified applies only when the origin adds HTTP headers such as
   *         <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and
   *         <code>Expires</code> to objects.</p>
   */
  maximumTTL?: number;

  /**
   * <p>An object that describes the query strings that are forwarded to the origin. Your content
   *       is cached based on the query strings that are forwarded.</p>
   */
  forwardedQueryStrings?: QueryStringObject;
}

export namespace CacheSettings {
  export const filterSensitiveLog = (obj: CacheSettings): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CacheSettings => __isa(o, "CacheSettings");
}

/**
 * <p>Describes the full details of an Amazon Lightsail SSL/TLS certificate.</p>
 *
 *          <note>
 *             <p>To get a summary of a certificate, use the <code>GetCertificates</code> action and ommit
 *           <code>includeCertificateDetails</code> from your request. The response will include only
 *         the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.</p>
 *          </note>
 */
export interface Certificate {
  __type?: "Certificate";
  /**
   * <p>The timestamp when the certificate was revoked. This value is present only when the
   *       certificate status is <code>REVOKED</code>.</p>
   */
  revokedAt?: Date;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
   *         Dev Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The validation status of the certificate.</p>
   */
  status?: CertificateStatus | string;

  /**
   * <p>The reason the certificate was revoked. This value is present only when the certificate
   *       status is <code>REVOKED</code>.</p>
   */
  revocationReason?: string;

  /**
   * <p>The timestamp when the certificate was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>An array of strings that specify the alternate domains (e.g., <code>example2.com</code>)
   *       and subdomains (e.g., <code>blog.example.com</code>) of the certificate.</p>
   */
  subjectAlternativeNames?: string[];

  /**
   * <p>The domain name of the certificate.</p>
   */
  domainName?: string;

  /**
   * <p>The number of Lightsail resources that the certificate is attached to.</p>
   */
  inUseResourceCount?: number;

  /**
   * <p>The timestamp when the certificate was issued.</p>
   */
  issuedAt?: Date;

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
   *           is reported as suspicious, see <a href="https://www.google.com/webmasters/hacked/?hl=en">Google Help for Hacked
   *             Websites</a> to learn what you can do.</p>
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
   * <p>The name of the certificate (e.g., <code>my-certificate</code>).</p>
   */
  name?: string;

  /**
   * <p>The algorithm used to generate the key pair (the public and private key) of the
   *       certificate.</p>
   */
  keyAlgorithm?: string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       your Lightsail certificate. This code enables our support team to look up your Lightsail
   *       information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate.</p>
   */
  arn?: string;

  /**
   * <p>The timestamp when the certificate is first valid.</p>
   */
  notBefore?: Date;

  /**
   * <p>An array of objects that describe the domain validation records of the certificate.</p>
   */
  domainValidationRecords?: DomainValidationRecord[];

  /**
   * <p>The certificate authority that issued the certificate.</p>
   */
  issuerCA?: string;

  /**
   * <p>The serial number of the certificate.</p>
   */
  serialNumber?: string;

  /**
   * <p>The timestamp when the certificate expires.</p>
   */
  notAfter?: Date;
}

export namespace Certificate {
  export const filterSensitiveLog = (obj: Certificate): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Certificate => __isa(o, "Certificate");
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
 * <p>Describes an Amazon Lightsail SSL/TLS certificate.</p>
 */
export interface CertificateSummary {
  __type?: "CertificateSummary";
  /**
   * <p>The domain name of the certificate.</p>
   */
  domainName?: string;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
   *         Dev Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>An object that describes a certificate in detail.</p>
   */
  certificateDetail?: Certificate;

  /**
   * <p>The name of the certificate.</p>
   */
  certificateName?: string;
}

export namespace CertificateSummary {
  export const filterSensitiveLog = (obj: CertificateSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CertificateSummary => __isa(o, "CertificateSummary");
}

export interface CloseInstancePublicPortsRequest {
  __type?: "CloseInstancePublicPortsRequest";
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
  export const filterSensitiveLog = (obj: CloseInstancePublicPortsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CloseInstancePublicPortsRequest => __isa(o, "CloseInstancePublicPortsRequest");
}

export interface CloseInstancePublicPortsResult {
  __type?: "CloseInstancePublicPortsResult";
  /**
   * <p>An object that describes the result of the action, such as the status of the request, the
   *       timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace CloseInstancePublicPortsResult {
  export const filterSensitiveLog = (obj: CloseInstancePublicPortsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CloseInstancePublicPortsResult => __isa(o, "CloseInstancePublicPortsResult");
}

/**
 * <p>Describes a CloudFormation stack record created as a result of the <code>create cloud
 *         formation stack</code> operation.</p>
 *          <p>A CloudFormation stack record provides information about the AWS CloudFormation stack used to
 *       create a new Amazon Elastic Compute Cloud instance from an exported Lightsail instance snapshot.</p>
 */
export interface CloudFormationStackRecord {
  __type?: "CloudFormationStackRecord";
  /**
   * <p>The Lightsail resource type (e.g., <code>CloudFormationStackRecord</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>A list of objects describing the Availability Zone and AWS Region of the CloudFormation
   *       stack record.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The date when the CloudFormation stack record was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>A list of objects describing the destination service, which is AWS CloudFormation, and the Amazon
   *       Resource Name (ARN) of the AWS CloudFormation stack.</p>
   */
  destinationInfo?: DestinationInfo;

  /**
   * <p>The current state of the CloudFormation stack record.</p>
   */
  state?: RecordState | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudFormation stack record.</p>
   */
  arn?: string;

  /**
   * <p>A list of objects describing the source of the CloudFormation stack record.</p>
   */
  sourceInfo?: CloudFormationStackRecordSourceInfo[];

  /**
   * <p>The name of the CloudFormation stack record. It starts with
   *         <code>CloudFormationStackRecord</code> followed by a GUID.</p>
   */
  name?: string;
}

export namespace CloudFormationStackRecord {
  export const filterSensitiveLog = (obj: CloudFormationStackRecord): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CloudFormationStackRecord => __isa(o, "CloudFormationStackRecord");
}

/**
 * <p>Describes the source of a CloudFormation stack record (i.e., the export snapshot
 *       record).</p>
 */
export interface CloudFormationStackRecordSourceInfo {
  __type?: "CloudFormationStackRecordSourceInfo";
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
  export const filterSensitiveLog = (obj: CloudFormationStackRecordSourceInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CloudFormationStackRecordSourceInfo =>
    __isa(o, "CloudFormationStackRecordSourceInfo");
}

export enum CloudFormationStackRecordSourceType {
  ExportSnapshotRecord = "ExportSnapshotRecord",
}

export enum ComparisonOperator {
  GreaterThanOrEqualToThreshold = "GreaterThanOrEqualToThreshold",
  GreaterThanThreshold = "GreaterThanThreshold",
  LessThanOrEqualToThreshold = "LessThanOrEqualToThreshold",
  LessThanThreshold = "LessThanThreshold",
}

/**
 * <p>Describes a contact method.</p>
 *          <p>A contact method is a way to send you notifications. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
 */
export interface ContactMethod {
  __type?: "ContactMethod";
  /**
   * <p>The Amazon Resource Name (ARN) of the contact method.</p>
   */
  arn?: string;

  /**
   * <p>The protocol of the contact method, such as email or SMS (text messaging).</p>
   */
  protocol?: ContactProtocol | string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       your Lightsail contact method. This code enables our support team to look up your
   *       Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The timestamp when the contact method was created.</p>
   */
  createdAt?: Date;

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
   * <p>Describes the resource location.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The Lightsail resource type (e.g., <code>ContactMethod</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The name of the contact method.</p>
   */
  name?: string;
}

export namespace ContactMethod {
  export const filterSensitiveLog = (obj: ContactMethod): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ContactMethod => __isa(o, "ContactMethod");
}

export enum ContactMethodStatus {
  Invalid = "Invalid",
  PendingVerification = "PendingVerification",
  Valid = "Valid",
}

export enum ContactMethodVerificationProtocol {
  Email = "Email",
}

export enum ContactProtocol {
  Email = "Email",
  SMS = "SMS",
}

/**
 * <p>Describes whether an Amazon Lightsail content delivery network (CDN) distribution forwards
 *       cookies to the origin and, if so, which ones.</p>
 *
 *          <p>For the cookies that you specify, your distribution caches separate versions of the
 *       specified content based on the cookie values in viewer
 *       requests.</p>
 */
export interface CookieObject {
  __type?: "CookieObject";
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
  export const filterSensitiveLog = (obj: CookieObject): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CookieObject => __isa(o, "CookieObject");
}

export interface CopySnapshotRequest {
  __type?: "CopySnapshotRequest";
  /**
   * <p>The AWS Region where the source manual or automatic snapshot is located.</p>
   */
  sourceRegion: RegionName | string | undefined;

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
   *           For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-keeping-automatic-snapshots">Lightsail Dev Guide</a>.</p>
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
   *           For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-keeping-automatic-snapshots">Lightsail Dev Guide</a>.</p>
   *             </li>
   *          </ul>
   */
  useLatestRestorableAutoSnapshot?: boolean;

  /**
   * <p>The name of the new manual snapshot to be created as a copy.</p>
   */
  targetSnapshotName: string | undefined;

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
   *           For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-keeping-automatic-snapshots">Lightsail Dev Guide</a>.</p>
   *             </li>
   *          </ul>
   */
  sourceResourceName?: string;
}

export namespace CopySnapshotRequest {
  export const filterSensitiveLog = (obj: CopySnapshotRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CopySnapshotRequest => __isa(o, "CopySnapshotRequest");
}

export interface CopySnapshotResult {
  __type?: "CopySnapshotResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CopySnapshotResult {
  export const filterSensitiveLog = (obj: CopySnapshotResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CopySnapshotResult => __isa(o, "CopySnapshotResult");
}

export interface CreateCertificateRequest {
  __type?: "CreateCertificateRequest";
  /**
   * <p>The tag keys and optional values to add to the certificate during create.</p>
   *
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];

  /**
   * <p>The name for the certificate.</p>
   */
  certificateName: string | undefined;

  /**
   * <p>An array of strings that specify the alternate domains (e.g., <code>example2.com</code>)
   *       and subdomains (e.g., <code>blog.example.com</code>) for the certificate.</p>
   *
   *          <p>You can specify a maximum of nine alternate domains (in addition to the primary domain
   *       name).</p>
   *
   *          <p>Wildcard domain entries (e.g., <code>*.example.com</code>) are not supported.</p>
   */
  subjectAlternativeNames?: string[];

  /**
   * <p>The domain name (e.g., <code>example.com</code>) for the certificate.</p>
   */
  domainName: string | undefined;
}

export namespace CreateCertificateRequest {
  export const filterSensitiveLog = (obj: CreateCertificateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateCertificateRequest => __isa(o, "CreateCertificateRequest");
}

export interface CreateCertificateResult {
  __type?: "CreateCertificateResult";
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
  export const filterSensitiveLog = (obj: CreateCertificateResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateCertificateResult => __isa(o, "CreateCertificateResult");
}

export interface CreateCloudFormationStackRequest {
  __type?: "CreateCloudFormationStackRequest";
  /**
   * <p>An array of parameters that will be used to create the new Amazon EC2 instance. You can only
   *       pass one instance entry at a time in this array. You will get an invalid parameter error if
   *       you pass more than one instance entry in this array.</p>
   */
  instances: InstanceEntry[] | undefined;
}

export namespace CreateCloudFormationStackRequest {
  export const filterSensitiveLog = (obj: CreateCloudFormationStackRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateCloudFormationStackRequest => __isa(o, "CreateCloudFormationStackRequest");
}

export interface CreateCloudFormationStackResult {
  __type?: "CreateCloudFormationStackResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateCloudFormationStackResult {
  export const filterSensitiveLog = (obj: CreateCloudFormationStackResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateCloudFormationStackResult => __isa(o, "CreateCloudFormationStackResult");
}

export interface CreateContactMethodRequest {
  __type?: "CreateContactMethodRequest";
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
  export const filterSensitiveLog = (obj: CreateContactMethodRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateContactMethodRequest => __isa(o, "CreateContactMethodRequest");
}

export interface CreateContactMethodResult {
  __type?: "CreateContactMethodResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateContactMethodResult {
  export const filterSensitiveLog = (obj: CreateContactMethodResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateContactMethodResult => __isa(o, "CreateContactMethodResult");
}

export interface CreateDiskFromSnapshotRequest {
  __type?: "CreateDiskFromSnapshotRequest";
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
   *           more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
   *             </li>
   *          </ul>
   */
  sourceDiskName?: string;

  /**
   * <p>The unique Lightsail disk name (e.g., <code>my-disk</code>).</p>
   */
  diskName: string | undefined;

  /**
   * <p>The size of the disk in GB (e.g., <code>32</code>).</p>
   */
  sizeInGb: number | undefined;

  /**
   * <p>An array of objects that represent the add-ons to enable for the new disk.</p>
   */
  addOns?: AddOnRequest[];

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
   *           more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
   *             </li>
   *          </ul>
   */
  useLatestRestorableAutoSnapshot?: boolean;

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];

  /**
   * <p>The Availability Zone where you want to create the disk (e.g., <code>us-east-2a</code>).
   *       Choose the same Availability Zone as the Lightsail instance where you want to create the
   *       disk.</p>
   *          <p>Use the GetRegions operation to list the Availability Zones where Lightsail is currently
   *       available.</p>
   */
  availabilityZone: string | undefined;

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
   *           more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
   *             </li>
   *          </ul>
   */
  restoreDate?: string;
}

export namespace CreateDiskFromSnapshotRequest {
  export const filterSensitiveLog = (obj: CreateDiskFromSnapshotRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDiskFromSnapshotRequest => __isa(o, "CreateDiskFromSnapshotRequest");
}

export interface CreateDiskFromSnapshotResult {
  __type?: "CreateDiskFromSnapshotResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateDiskFromSnapshotResult {
  export const filterSensitiveLog = (obj: CreateDiskFromSnapshotResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDiskFromSnapshotResult => __isa(o, "CreateDiskFromSnapshotResult");
}

export interface CreateDiskRequest {
  __type?: "CreateDiskRequest";
  /**
   * <p>The size of the disk in GB (e.g., <code>32</code>).</p>
   */
  sizeInGb: number | undefined;

  /**
   * <p>An array of objects that represent the add-ons to enable for the new disk.</p>
   */
  addOns?: AddOnRequest[];

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
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

export namespace CreateDiskRequest {
  export const filterSensitiveLog = (obj: CreateDiskRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDiskRequest => __isa(o, "CreateDiskRequest");
}

export interface CreateDiskResult {
  __type?: "CreateDiskResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateDiskResult {
  export const filterSensitiveLog = (obj: CreateDiskResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDiskResult => __isa(o, "CreateDiskResult");
}

export interface CreateDiskSnapshotRequest {
  __type?: "CreateDiskSnapshotRequest";
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

  /**
   * <p>The name of the destination disk snapshot (e.g., <code>my-disk-snapshot</code>) based on
   *       the source disk.</p>
   */
  diskSnapshotName: string | undefined;
}

export namespace CreateDiskSnapshotRequest {
  export const filterSensitiveLog = (obj: CreateDiskSnapshotRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDiskSnapshotRequest => __isa(o, "CreateDiskSnapshotRequest");
}

export interface CreateDiskSnapshotResult {
  __type?: "CreateDiskSnapshotResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateDiskSnapshotResult {
  export const filterSensitiveLog = (obj: CreateDiskSnapshotResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDiskSnapshotResult => __isa(o, "CreateDiskSnapshotResult");
}

export interface CreateDistributionRequest {
  __type?: "CreateDistributionRequest";
  /**
   * <p>The tag keys and optional values to add to the distribution during create.</p>
   *
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];

  /**
   * <p>The name for the distribution.</p>
   */
  distributionName: string | undefined;

  /**
   * <p>An array of objects that describe the per-path cache behavior for the distribution.</p>
   */
  cacheBehaviors?: CacheBehaviorPerPath[];

  /**
   * <p>An object that describes the cache behavior settings for the distribution.</p>
   */
  cacheBehaviorSettings?: CacheSettings;

  /**
   * <p>An object that describes the default cache behavior for the distribution.</p>
   */
  defaultCacheBehavior: CacheBehavior | undefined;

  /**
   * <p>An object that describes the origin resource for the distribution, such as a Lightsail
   *       instance or load balancer.</p>
   *
   *          <p>The distribution pulls, caches, and serves content from the origin.</p>
   */
  origin: InputOrigin | undefined;

  /**
   * <p>The bundle ID to use for the distribution.</p>
   *
   *          <p>A distribution bundle describes the specifications of your distribution, such as the
   *       monthly cost and monthly network transfer quota.</p>
   *
   *          <p>Use the <code>GetDistributionBundles</code> action to get a list of distribution bundle
   *       IDs that you can specify.</p>
   */
  bundleId: string | undefined;
}

export namespace CreateDistributionRequest {
  export const filterSensitiveLog = (obj: CreateDistributionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDistributionRequest => __isa(o, "CreateDistributionRequest");
}

export interface CreateDistributionResult {
  __type?: "CreateDistributionResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;

  /**
   * <p>An object that describes the distribution created.</p>
   */
  distribution?: LightsailDistribution;
}

export namespace CreateDistributionResult {
  export const filterSensitiveLog = (obj: CreateDistributionResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDistributionResult => __isa(o, "CreateDistributionResult");
}

export interface CreateDomainEntryRequest {
  __type?: "CreateDomainEntryRequest";
  /**
   * <p>An array of key-value pairs containing information about the domain entry request.</p>
   */
  domainEntry: DomainEntry | undefined;

  /**
   * <p>The domain name (e.g., <code>example.com</code>) for which you want to create the domain
   *       entry.</p>
   */
  domainName: string | undefined;
}

export namespace CreateDomainEntryRequest {
  export const filterSensitiveLog = (obj: CreateDomainEntryRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDomainEntryRequest => __isa(o, "CreateDomainEntryRequest");
}

export interface CreateDomainEntryResult {
  __type?: "CreateDomainEntryResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace CreateDomainEntryResult {
  export const filterSensitiveLog = (obj: CreateDomainEntryResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDomainEntryResult => __isa(o, "CreateDomainEntryResult");
}

export interface CreateDomainRequest {
  __type?: "CreateDomainRequest";
  /**
   * <p>The domain name to manage (e.g., <code>example.com</code>).</p>
   *          <note>
   *             <p>You cannot register a new domain name using Lightsail. You must register a domain name
   *         using Amazon Route 53 or another domain name registrar. If you have already registered your
   *         domain, you can enter its name in this parameter to manage the DNS records for that
   *         domain.</p>
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
  export const filterSensitiveLog = (obj: CreateDomainRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDomainRequest => __isa(o, "CreateDomainRequest");
}

export interface CreateDomainResult {
  __type?: "CreateDomainResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace CreateDomainResult {
  export const filterSensitiveLog = (obj: CreateDomainResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDomainResult => __isa(o, "CreateDomainResult");
}

export interface CreateInstancesFromSnapshotRequest {
  __type?: "CreateInstancesFromSnapshotRequest";
  /**
   * <p>The name for your key pair.</p>
   */
  keyPairName?: string;

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
   *           For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
   *             </li>
   *          </ul>
   */
  restoreDate?: string;

  /**
   * <p>The bundle of specification information for your virtual private server (or
   *         <i>instance</i>), including the pricing plan (e.g.,
   *       <code>micro_1_0</code>).</p>
   */
  bundleId: string | undefined;

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
   *           For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
   *             </li>
   *          </ul>
   */
  sourceInstanceName?: string;

  /**
   * <p>The Availability Zone where you want to create your instances. Use the following
   *       formatting: <code>us-east-2a</code> (case sensitive). You can get a list of Availability Zones
   *       by using the <a href="http://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRegions.html">get
   *         regions</a> operation. Be sure to add the <code>include Availability Zones</code>
   *       parameter to your request.</p>
   */
  availabilityZone: string | undefined;

  /**
   * <p>An object containing information about one or more disk mappings.</p>
   */
  attachedDiskMapping?: { [key: string]: DiskMap[] };

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
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];

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
   *           For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
   *             </li>
   *          </ul>
   */
  useLatestRestorableAutoSnapshot?: boolean;

  /**
   * <p>You can create a launch script that configures a server with additional user data. For
   *       example, <code>apt-get -y update</code>.</p>
   *          <note>
   *             <p>Depending on the machine image you choose, the command to get software on your instance
   *         varies. Amazon Linux and CentOS use <code>yum</code>, Debian and Ubuntu use
   *           <code>apt-get</code>, and FreeBSD uses <code>pkg</code>. For a complete list, see the
   *           <a href="https://lightsail.aws.amazon.com/ls/docs/getting-started/article/compare-options-choose-lightsail-instance-image">Dev Guide</a>.</p>
   *          </note>
   */
  userData?: string;

  /**
   * <p>The names for your new instances.</p>
   */
  instanceNames: string[] | undefined;

  /**
   * <p>An array of objects representing the add-ons to enable for the new instance.</p>
   */
  addOns?: AddOnRequest[];
}

export namespace CreateInstancesFromSnapshotRequest {
  export const filterSensitiveLog = (obj: CreateInstancesFromSnapshotRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateInstancesFromSnapshotRequest =>
    __isa(o, "CreateInstancesFromSnapshotRequest");
}

export interface CreateInstancesFromSnapshotResult {
  __type?: "CreateInstancesFromSnapshotResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateInstancesFromSnapshotResult {
  export const filterSensitiveLog = (obj: CreateInstancesFromSnapshotResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateInstancesFromSnapshotResult => __isa(o, "CreateInstancesFromSnapshotResult");
}

export interface CreateInstanceSnapshotRequest {
  __type?: "CreateInstanceSnapshotRequest";
  /**
   * <p>The name for your new snapshot.</p>
   */
  instanceSnapshotName: string | undefined;

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];

  /**
   * <p>The Lightsail instance on which to base your snapshot.</p>
   */
  instanceName: string | undefined;
}

export namespace CreateInstanceSnapshotRequest {
  export const filterSensitiveLog = (obj: CreateInstanceSnapshotRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateInstanceSnapshotRequest => __isa(o, "CreateInstanceSnapshotRequest");
}

export interface CreateInstanceSnapshotResult {
  __type?: "CreateInstanceSnapshotResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateInstanceSnapshotResult {
  export const filterSensitiveLog = (obj: CreateInstanceSnapshotResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateInstanceSnapshotResult => __isa(o, "CreateInstanceSnapshotResult");
}

export interface CreateInstancesRequest {
  __type?: "CreateInstancesRequest";
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
   * <p>The name of your key pair.</p>
   */
  keyPairName?: string;

  /**
   * <p>The bundle of specification information for your virtual private server (or
   *         <i>instance</i>), including the pricing plan (e.g.,
   *       <code>micro_1_0</code>).</p>
   */
  bundleId: string | undefined;

  /**
   * <p>The Availability Zone in which to create your instance. Use the following format:
   *         <code>us-east-2a</code> (case sensitive). You can get a list of Availability Zones by using
   *       the <a href="http://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRegions.html">get
   *         regions</a> operation. Be sure to add the <code>include Availability Zones</code>
   *       parameter to your request.</p>
   */
  availabilityZone: string | undefined;

  /**
   * <p>The names to use for your new Lightsail instances. Separate multiple values using
   *       quotation marks and commas, for example:
   *       <code>["MyFirstInstance","MySecondInstance"]</code>
   *          </p>
   */
  instanceNames: string[] | undefined;

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];

  /**
   * <p>A launch script you can create that configures a server with additional user data. For
   *       example, you might want to run <code>apt-get -y update</code>.</p>
   *          <note>
   *             <p>Depending on the machine image you choose, the command to get software on your instance
   *         varies. Amazon Linux and CentOS use <code>yum</code>, Debian and Ubuntu use
   *           <code>apt-get</code>, and FreeBSD uses <code>pkg</code>. For a complete list, see the
   *           <a href="https://lightsail.aws.amazon.com/ls/docs/getting-started/article/compare-options-choose-lightsail-instance-image">Dev Guide</a>.</p>
   *          </note>
   */
  userData?: string;

  /**
   * <p>An array of objects representing the add-ons to enable for the new instance.</p>
   */
  addOns?: AddOnRequest[];

  /**
   * <p>(Deprecated) The name for your custom image.</p>
   *          <note>
   *             <p>In releases prior to June 12, 2017, this parameter was ignored by the API. It is now
   *         deprecated.</p>
   *          </note>
   */
  customImageName?: string;
}

export namespace CreateInstancesRequest {
  export const filterSensitiveLog = (obj: CreateInstancesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateInstancesRequest => __isa(o, "CreateInstancesRequest");
}

export interface CreateInstancesResult {
  __type?: "CreateInstancesResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateInstancesResult {
  export const filterSensitiveLog = (obj: CreateInstancesResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateInstancesResult => __isa(o, "CreateInstancesResult");
}

export interface CreateKeyPairRequest {
  __type?: "CreateKeyPairRequest";
  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];

  /**
   * <p>The name for your new key pair.</p>
   */
  keyPairName: string | undefined;
}

export namespace CreateKeyPairRequest {
  export const filterSensitiveLog = (obj: CreateKeyPairRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateKeyPairRequest => __isa(o, "CreateKeyPairRequest");
}

export interface CreateKeyPairResult {
  __type?: "CreateKeyPairResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;

  /**
   * <p>A base64-encoded RSA private key.</p>
   */
  privateKeyBase64?: string;

  /**
   * <p>An array of key-value pairs containing information about the new key pair you just
   *       created.</p>
   */
  keyPair?: KeyPair;

  /**
   * <p>A base64-encoded public key of the <code>ssh-rsa</code> type.</p>
   */
  publicKeyBase64?: string;
}

export namespace CreateKeyPairResult {
  export const filterSensitiveLog = (obj: CreateKeyPairResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateKeyPairResult => __isa(o, "CreateKeyPairResult");
}

export interface CreateLoadBalancerRequest {
  __type?: "CreateLoadBalancerRequest";
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
   * <p>The domain name with which your certificate is associated (e.g.,
   *       <code>example.com</code>).</p>
   *          <p>If you specify <code>certificateDomainName</code>, then <code>certificateName</code> is
   *       required (and vice-versa).</p>
   */
  certificateDomainName?: string;

  /**
   * <p>The name of your load balancer.</p>
   */
  loadBalancerName: string | undefined;

  /**
   * <p>The name of the SSL/TLS certificate.</p>
   *          <p>If you specify <code>certificateName</code>, then <code>certificateDomainName</code> is
   *       required (and vice-versa).</p>
   */
  certificateName?: string;

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
}

export namespace CreateLoadBalancerRequest {
  export const filterSensitiveLog = (obj: CreateLoadBalancerRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateLoadBalancerRequest => __isa(o, "CreateLoadBalancerRequest");
}

export interface CreateLoadBalancerResult {
  __type?: "CreateLoadBalancerResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateLoadBalancerResult {
  export const filterSensitiveLog = (obj: CreateLoadBalancerResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateLoadBalancerResult => __isa(o, "CreateLoadBalancerResult");
}

export interface CreateLoadBalancerTlsCertificateRequest {
  __type?: "CreateLoadBalancerTlsCertificateRequest";
  /**
   * <p>An array of strings listing alternative domains and subdomains for your SSL/TLS
   *       certificate. Lightsail will de-dupe the names for you. You can have a maximum of 9
   *       alternative names (in addition to the 1 primary domain). We do not support wildcards (e.g.,
   *         <code>*.example.com</code>).</p>
   */
  certificateAlternativeNames?: string[];

  /**
   * <p>The domain name (e.g., <code>example.com</code>) for your SSL/TLS certificate.</p>
   */
  certificateDomainName: string | undefined;

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];

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
}

export namespace CreateLoadBalancerTlsCertificateRequest {
  export const filterSensitiveLog = (obj: CreateLoadBalancerTlsCertificateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateLoadBalancerTlsCertificateRequest =>
    __isa(o, "CreateLoadBalancerTlsCertificateRequest");
}

export interface CreateLoadBalancerTlsCertificateResult {
  __type?: "CreateLoadBalancerTlsCertificateResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateLoadBalancerTlsCertificateResult {
  export const filterSensitiveLog = (obj: CreateLoadBalancerTlsCertificateResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateLoadBalancerTlsCertificateResult =>
    __isa(o, "CreateLoadBalancerTlsCertificateResult");
}

export interface CreateRelationalDatabaseFromSnapshotRequest {
  __type?: "CreateRelationalDatabaseFromSnapshotRequest";
  /**
   * <p>Specifies the accessibility options for your new database. A value of <code>true</code>
   *       specifies a database that is available to resources outside of your Lightsail account. A
   *       value of <code>false</code> specifies a database that is available only to your Lightsail
   *       resources in the same region as your database.</p>
   */
  publiclyAccessible?: boolean;

  /**
   * <p>The name to use for your new database.</p>
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
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];

  /**
   * <p>The name of the source database.</p>
   */
  sourceRelationalDatabaseName?: string;

  /**
   * <p>The Availability Zone in which to create your new database. Use the
   *         <code>us-east-2a</code> case-sensitive format.</p>
   *          <p>You can get a list of Availability Zones by using the <code>get regions</code> operation.
   *       Be sure to add the <code>include relational database Availability Zones</code> parameter to
   *       your request.</p>
   */
  availabilityZone?: string;

  /**
   * <p>Specifies whether your database is restored from the latest backup time. A value of
   *         <code>true</code> restores from the latest backup time. </p>
   *          <p>Default: <code>false</code>
   *          </p>
   *          <p>Constraints: Cannot be specified if the <code>restore time</code> parameter is
   *       provided.</p>
   */
  useLatestRestorableTime?: boolean;
}

export namespace CreateRelationalDatabaseFromSnapshotRequest {
  export const filterSensitiveLog = (obj: CreateRelationalDatabaseFromSnapshotRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateRelationalDatabaseFromSnapshotRequest =>
    __isa(o, "CreateRelationalDatabaseFromSnapshotRequest");
}

export interface CreateRelationalDatabaseFromSnapshotResult {
  __type?: "CreateRelationalDatabaseFromSnapshotResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateRelationalDatabaseFromSnapshotResult {
  export const filterSensitiveLog = (obj: CreateRelationalDatabaseFromSnapshotResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateRelationalDatabaseFromSnapshotResult =>
    __isa(o, "CreateRelationalDatabaseFromSnapshotResult");
}

export interface CreateRelationalDatabaseRequest {
  __type?: "CreateRelationalDatabaseRequest";
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
   * <p>The name to use for your new database.</p>
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
   * <p>The password for the master user of your new database. The password can include any
   *       printable ASCII character except "/", """, or "@".</p>
   *          <p>Constraints: Must contain 8 to 41 characters.</p>
   */
  masterUserPassword?: string;

  /**
   * <p>The name of the master database created when the Lightsail database resource is
   *       created.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 64 alphanumeric characters.</p>
   *             </li>
   *             <li>
   *                <p>Cannot be a word reserved by the specified database engine</p>
   *             </li>
   *          </ul>
   */
  masterDatabaseName: string | undefined;

  /**
   * <p>The bundle ID for your new database. A bundle describes the performance specifications for
   *       your database.</p>
   *          <p>You can get a list of database bundle IDs by using the <code>get relational database
   *         bundles</code> operation.</p>
   */
  relationalDatabaseBundleId: string | undefined;

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

  /**
   * <p>The master user name for your new database.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Master user name is required.</p>
   *             </li>
   *             <li>
   *                <p>Must contain from 1 to 16 alphanumeric characters.</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot be a reserved word for the database engine you choose.</p>
   *                <p>For more information about reserved words in MySQL 5.6 or 5.7, see the Keywords and
   *           Reserved Words articles for <a href="https://dev.mysql.com/doc/refman/5.6/en/keywords.html">MySQL 5.6</a> or <a href="https://dev.mysql.com/doc/refman/5.7/en/keywords.html">MySQL 5.7</a>
   *           respectively.</p>
   *             </li>
   *          </ul>
   */
  masterUsername: string | undefined;

  /**
   * <p>The blueprint ID for your new database. A blueprint describes the major engine version of
   *       a database.</p>
   *          <p>You can get a list of database blueprints IDs by using the <code>get relational database
   *         blueprints</code> operation.</p>
   */
  relationalDatabaseBlueprintId: string | undefined;

  /**
   * <p>The Availability Zone in which to create your new database. Use the
   *         <code>us-east-2a</code> case-sensitive format.</p>
   *          <p>You can get a list of Availability Zones by using the <code>get regions</code> operation.
   *       Be sure to add the <code>include relational database Availability Zones</code> parameter to
   *       your request.</p>
   */
  availabilityZone?: string;

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
}

export namespace CreateRelationalDatabaseRequest {
  export const filterSensitiveLog = (obj: CreateRelationalDatabaseRequest): any => ({
    ...obj,
    ...(obj.masterUserPassword && { masterUserPassword: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is CreateRelationalDatabaseRequest => __isa(o, "CreateRelationalDatabaseRequest");
}

export interface CreateRelationalDatabaseResult {
  __type?: "CreateRelationalDatabaseResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateRelationalDatabaseResult {
  export const filterSensitiveLog = (obj: CreateRelationalDatabaseResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateRelationalDatabaseResult => __isa(o, "CreateRelationalDatabaseResult");
}

export interface CreateRelationalDatabaseSnapshotRequest {
  __type?: "CreateRelationalDatabaseSnapshotRequest";
  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];

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
   * <p>The name of the database on which to base your new snapshot.</p>
   */
  relationalDatabaseName: string | undefined;
}

export namespace CreateRelationalDatabaseSnapshotRequest {
  export const filterSensitiveLog = (obj: CreateRelationalDatabaseSnapshotRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateRelationalDatabaseSnapshotRequest =>
    __isa(o, "CreateRelationalDatabaseSnapshotRequest");
}

export interface CreateRelationalDatabaseSnapshotResult {
  __type?: "CreateRelationalDatabaseSnapshotResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateRelationalDatabaseSnapshotResult {
  export const filterSensitiveLog = (obj: CreateRelationalDatabaseSnapshotResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateRelationalDatabaseSnapshotResult =>
    __isa(o, "CreateRelationalDatabaseSnapshotResult");
}

export interface DeleteAlarmRequest {
  __type?: "DeleteAlarmRequest";
  /**
   * <p>The name of the alarm to delete.</p>
   */
  alarmName: string | undefined;
}

export namespace DeleteAlarmRequest {
  export const filterSensitiveLog = (obj: DeleteAlarmRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteAlarmRequest => __isa(o, "DeleteAlarmRequest");
}

export interface DeleteAlarmResult {
  __type?: "DeleteAlarmResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteAlarmResult {
  export const filterSensitiveLog = (obj: DeleteAlarmResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteAlarmResult => __isa(o, "DeleteAlarmResult");
}

export interface DeleteAutoSnapshotRequest {
  __type?: "DeleteAutoSnapshotRequest";
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
  export const filterSensitiveLog = (obj: DeleteAutoSnapshotRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteAutoSnapshotRequest => __isa(o, "DeleteAutoSnapshotRequest");
}

export interface DeleteAutoSnapshotResult {
  __type?: "DeleteAutoSnapshotResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteAutoSnapshotResult {
  export const filterSensitiveLog = (obj: DeleteAutoSnapshotResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteAutoSnapshotResult => __isa(o, "DeleteAutoSnapshotResult");
}

export interface DeleteCertificateRequest {
  __type?: "DeleteCertificateRequest";
  /**
   * <p>The name of the certificate to delete.</p>
   *
   *          <p>Use the <code>GetCertificates</code> action to get a list of certificate names that you
   *       can specify.</p>
   */
  certificateName: string | undefined;
}

export namespace DeleteCertificateRequest {
  export const filterSensitiveLog = (obj: DeleteCertificateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteCertificateRequest => __isa(o, "DeleteCertificateRequest");
}

export interface DeleteCertificateResult {
  __type?: "DeleteCertificateResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteCertificateResult {
  export const filterSensitiveLog = (obj: DeleteCertificateResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteCertificateResult => __isa(o, "DeleteCertificateResult");
}

export interface DeleteContactMethodRequest {
  __type?: "DeleteContactMethodRequest";
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
  export const filterSensitiveLog = (obj: DeleteContactMethodRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteContactMethodRequest => __isa(o, "DeleteContactMethodRequest");
}

export interface DeleteContactMethodResult {
  __type?: "DeleteContactMethodResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteContactMethodResult {
  export const filterSensitiveLog = (obj: DeleteContactMethodResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteContactMethodResult => __isa(o, "DeleteContactMethodResult");
}

export interface DeleteDiskRequest {
  __type?: "DeleteDiskRequest";
  /**
   * <p>A Boolean value to indicate whether to delete the enabled add-ons for the disk.</p>
   */
  forceDeleteAddOns?: boolean;

  /**
   * <p>The unique name of the disk you want to delete (e.g., <code>my-disk</code>).</p>
   */
  diskName: string | undefined;
}

export namespace DeleteDiskRequest {
  export const filterSensitiveLog = (obj: DeleteDiskRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDiskRequest => __isa(o, "DeleteDiskRequest");
}

export interface DeleteDiskResult {
  __type?: "DeleteDiskResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteDiskResult {
  export const filterSensitiveLog = (obj: DeleteDiskResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDiskResult => __isa(o, "DeleteDiskResult");
}

export interface DeleteDiskSnapshotRequest {
  __type?: "DeleteDiskSnapshotRequest";
  /**
   * <p>The name of the disk snapshot you want to delete (e.g.,
   *       <code>my-disk-snapshot</code>).</p>
   */
  diskSnapshotName: string | undefined;
}

export namespace DeleteDiskSnapshotRequest {
  export const filterSensitiveLog = (obj: DeleteDiskSnapshotRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDiskSnapshotRequest => __isa(o, "DeleteDiskSnapshotRequest");
}

export interface DeleteDiskSnapshotResult {
  __type?: "DeleteDiskSnapshotResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteDiskSnapshotResult {
  export const filterSensitiveLog = (obj: DeleteDiskSnapshotResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDiskSnapshotResult => __isa(o, "DeleteDiskSnapshotResult");
}

export interface DeleteDistributionRequest {
  __type?: "DeleteDistributionRequest";
  /**
   * <p>The name of the distribution to delete.</p>
   *
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   */
  distributionName?: string;
}

export namespace DeleteDistributionRequest {
  export const filterSensitiveLog = (obj: DeleteDistributionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDistributionRequest => __isa(o, "DeleteDistributionRequest");
}

export interface DeleteDistributionResult {
  __type?: "DeleteDistributionResult";
  /**
   * <p>An object that describes the result of the action, such as the status of the request, the
   *       timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace DeleteDistributionResult {
  export const filterSensitiveLog = (obj: DeleteDistributionResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDistributionResult => __isa(o, "DeleteDistributionResult");
}

export interface DeleteDomainEntryRequest {
  __type?: "DeleteDomainEntryRequest";
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
  export const filterSensitiveLog = (obj: DeleteDomainEntryRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDomainEntryRequest => __isa(o, "DeleteDomainEntryRequest");
}

export interface DeleteDomainEntryResult {
  __type?: "DeleteDomainEntryResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace DeleteDomainEntryResult {
  export const filterSensitiveLog = (obj: DeleteDomainEntryResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDomainEntryResult => __isa(o, "DeleteDomainEntryResult");
}

export interface DeleteDomainRequest {
  __type?: "DeleteDomainRequest";
  /**
   * <p>The specific domain name to delete.</p>
   */
  domainName: string | undefined;
}

export namespace DeleteDomainRequest {
  export const filterSensitiveLog = (obj: DeleteDomainRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDomainRequest => __isa(o, "DeleteDomainRequest");
}

export interface DeleteDomainResult {
  __type?: "DeleteDomainResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace DeleteDomainResult {
  export const filterSensitiveLog = (obj: DeleteDomainResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDomainResult => __isa(o, "DeleteDomainResult");
}

export interface DeleteInstanceRequest {
  __type?: "DeleteInstanceRequest";
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
  export const filterSensitiveLog = (obj: DeleteInstanceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteInstanceRequest => __isa(o, "DeleteInstanceRequest");
}

export interface DeleteInstanceResult {
  __type?: "DeleteInstanceResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteInstanceResult {
  export const filterSensitiveLog = (obj: DeleteInstanceResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteInstanceResult => __isa(o, "DeleteInstanceResult");
}

export interface DeleteInstanceSnapshotRequest {
  __type?: "DeleteInstanceSnapshotRequest";
  /**
   * <p>The name of the snapshot to delete.</p>
   */
  instanceSnapshotName: string | undefined;
}

export namespace DeleteInstanceSnapshotRequest {
  export const filterSensitiveLog = (obj: DeleteInstanceSnapshotRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteInstanceSnapshotRequest => __isa(o, "DeleteInstanceSnapshotRequest");
}

export interface DeleteInstanceSnapshotResult {
  __type?: "DeleteInstanceSnapshotResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteInstanceSnapshotResult {
  export const filterSensitiveLog = (obj: DeleteInstanceSnapshotResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteInstanceSnapshotResult => __isa(o, "DeleteInstanceSnapshotResult");
}

export interface DeleteKeyPairRequest {
  __type?: "DeleteKeyPairRequest";
  /**
   * <p>The name of the key pair to delete.</p>
   */
  keyPairName: string | undefined;
}

export namespace DeleteKeyPairRequest {
  export const filterSensitiveLog = (obj: DeleteKeyPairRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteKeyPairRequest => __isa(o, "DeleteKeyPairRequest");
}

export interface DeleteKeyPairResult {
  __type?: "DeleteKeyPairResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace DeleteKeyPairResult {
  export const filterSensitiveLog = (obj: DeleteKeyPairResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteKeyPairResult => __isa(o, "DeleteKeyPairResult");
}

export interface DeleteKnownHostKeysRequest {
  __type?: "DeleteKnownHostKeysRequest";
  /**
   * <p>The name of the instance for which you want to reset the host key or certificate.</p>
   */
  instanceName: string | undefined;
}

export namespace DeleteKnownHostKeysRequest {
  export const filterSensitiveLog = (obj: DeleteKnownHostKeysRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteKnownHostKeysRequest => __isa(o, "DeleteKnownHostKeysRequest");
}

export interface DeleteKnownHostKeysResult {
  __type?: "DeleteKnownHostKeysResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteKnownHostKeysResult {
  export const filterSensitiveLog = (obj: DeleteKnownHostKeysResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteKnownHostKeysResult => __isa(o, "DeleteKnownHostKeysResult");
}

export interface DeleteLoadBalancerRequest {
  __type?: "DeleteLoadBalancerRequest";
  /**
   * <p>The name of the load balancer you want to delete.</p>
   */
  loadBalancerName: string | undefined;
}

export namespace DeleteLoadBalancerRequest {
  export const filterSensitiveLog = (obj: DeleteLoadBalancerRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteLoadBalancerRequest => __isa(o, "DeleteLoadBalancerRequest");
}

export interface DeleteLoadBalancerResult {
  __type?: "DeleteLoadBalancerResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteLoadBalancerResult {
  export const filterSensitiveLog = (obj: DeleteLoadBalancerResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteLoadBalancerResult => __isa(o, "DeleteLoadBalancerResult");
}

export interface DeleteLoadBalancerTlsCertificateRequest {
  __type?: "DeleteLoadBalancerTlsCertificateRequest";
  /**
   * <p>When <code>true</code>, forces the deletion of an SSL/TLS certificate.</p>
   *          <p>There can be two certificates associated with a Lightsail load balancer: the primary and
   *       the backup. The <code>force</code> parameter is required when the primary SSL/TLS certificate
   *       is in use by an instance attached to the load balancer.</p>
   */
  force?: boolean;

  /**
   * <p>The load balancer name.</p>
   */
  loadBalancerName: string | undefined;

  /**
   * <p>The SSL/TLS certificate name.</p>
   */
  certificateName: string | undefined;
}

export namespace DeleteLoadBalancerTlsCertificateRequest {
  export const filterSensitiveLog = (obj: DeleteLoadBalancerTlsCertificateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteLoadBalancerTlsCertificateRequest =>
    __isa(o, "DeleteLoadBalancerTlsCertificateRequest");
}

export interface DeleteLoadBalancerTlsCertificateResult {
  __type?: "DeleteLoadBalancerTlsCertificateResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteLoadBalancerTlsCertificateResult {
  export const filterSensitiveLog = (obj: DeleteLoadBalancerTlsCertificateResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteLoadBalancerTlsCertificateResult =>
    __isa(o, "DeleteLoadBalancerTlsCertificateResult");
}

export interface DeleteRelationalDatabaseRequest {
  __type?: "DeleteRelationalDatabaseRequest";
  /**
   * <p>The name of the database that you are deleting.</p>
   */
  relationalDatabaseName: string | undefined;

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
}

export namespace DeleteRelationalDatabaseRequest {
  export const filterSensitiveLog = (obj: DeleteRelationalDatabaseRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteRelationalDatabaseRequest => __isa(o, "DeleteRelationalDatabaseRequest");
}

export interface DeleteRelationalDatabaseResult {
  __type?: "DeleteRelationalDatabaseResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteRelationalDatabaseResult {
  export const filterSensitiveLog = (obj: DeleteRelationalDatabaseResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteRelationalDatabaseResult => __isa(o, "DeleteRelationalDatabaseResult");
}

export interface DeleteRelationalDatabaseSnapshotRequest {
  __type?: "DeleteRelationalDatabaseSnapshotRequest";
  /**
   * <p>The name of the database snapshot that you are deleting.</p>
   */
  relationalDatabaseSnapshotName: string | undefined;
}

export namespace DeleteRelationalDatabaseSnapshotRequest {
  export const filterSensitiveLog = (obj: DeleteRelationalDatabaseSnapshotRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteRelationalDatabaseSnapshotRequest =>
    __isa(o, "DeleteRelationalDatabaseSnapshotRequest");
}

export interface DeleteRelationalDatabaseSnapshotResult {
  __type?: "DeleteRelationalDatabaseSnapshotResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteRelationalDatabaseSnapshotResult {
  export const filterSensitiveLog = (obj: DeleteRelationalDatabaseSnapshotResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteRelationalDatabaseSnapshotResult =>
    __isa(o, "DeleteRelationalDatabaseSnapshotResult");
}

/**
 * <p>Describes the destination of a record.</p>
 */
export interface DestinationInfo {
  __type?: "DestinationInfo";
  /**
   * <p>The destination service of the record.</p>
   */
  service?: string;

  /**
   * <p>The ID of the resource created at the destination.</p>
   */
  id?: string;
}

export namespace DestinationInfo {
  export const filterSensitiveLog = (obj: DestinationInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DestinationInfo => __isa(o, "DestinationInfo");
}

export interface DetachCertificateFromDistributionRequest {
  __type?: "DetachCertificateFromDistributionRequest";
  /**
   * <p>The name of the distribution from which to detach the certificate.</p>
   *
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   */
  distributionName: string | undefined;
}

export namespace DetachCertificateFromDistributionRequest {
  export const filterSensitiveLog = (obj: DetachCertificateFromDistributionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetachCertificateFromDistributionRequest =>
    __isa(o, "DetachCertificateFromDistributionRequest");
}

export interface DetachCertificateFromDistributionResult {
  __type?: "DetachCertificateFromDistributionResult";
  /**
   * <p>An object that describes the result of the action, such as the status of the request, the
   *       timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace DetachCertificateFromDistributionResult {
  export const filterSensitiveLog = (obj: DetachCertificateFromDistributionResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetachCertificateFromDistributionResult =>
    __isa(o, "DetachCertificateFromDistributionResult");
}

export interface DetachDiskRequest {
  __type?: "DetachDiskRequest";
  /**
   * <p>The unique name of the disk you want to detach from your instance (e.g.,
   *         <code>my-disk</code>).</p>
   */
  diskName: string | undefined;
}

export namespace DetachDiskRequest {
  export const filterSensitiveLog = (obj: DetachDiskRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetachDiskRequest => __isa(o, "DetachDiskRequest");
}

export interface DetachDiskResult {
  __type?: "DetachDiskResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DetachDiskResult {
  export const filterSensitiveLog = (obj: DetachDiskResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetachDiskResult => __isa(o, "DetachDiskResult");
}

export interface DetachInstancesFromLoadBalancerRequest {
  __type?: "DetachInstancesFromLoadBalancerRequest";
  /**
   * <p>An array of strings containing the names of the instances you want to detach from the load
   *       balancer.</p>
   */
  instanceNames: string[] | undefined;

  /**
   * <p>The name of the Lightsail load balancer.</p>
   */
  loadBalancerName: string | undefined;
}

export namespace DetachInstancesFromLoadBalancerRequest {
  export const filterSensitiveLog = (obj: DetachInstancesFromLoadBalancerRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetachInstancesFromLoadBalancerRequest =>
    __isa(o, "DetachInstancesFromLoadBalancerRequest");
}

export interface DetachInstancesFromLoadBalancerResult {
  __type?: "DetachInstancesFromLoadBalancerResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DetachInstancesFromLoadBalancerResult {
  export const filterSensitiveLog = (obj: DetachInstancesFromLoadBalancerResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetachInstancesFromLoadBalancerResult =>
    __isa(o, "DetachInstancesFromLoadBalancerResult");
}

export interface DetachStaticIpRequest {
  __type?: "DetachStaticIpRequest";
  /**
   * <p>The name of the static IP to detach from the instance.</p>
   */
  staticIpName: string | undefined;
}

export namespace DetachStaticIpRequest {
  export const filterSensitiveLog = (obj: DetachStaticIpRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetachStaticIpRequest => __isa(o, "DetachStaticIpRequest");
}

export interface DetachStaticIpResult {
  __type?: "DetachStaticIpResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DetachStaticIpResult {
  export const filterSensitiveLog = (obj: DetachStaticIpResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetachStaticIpResult => __isa(o, "DetachStaticIpResult");
}

export interface DisableAddOnRequest {
  __type?: "DisableAddOnRequest";
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
  export const filterSensitiveLog = (obj: DisableAddOnRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisableAddOnRequest => __isa(o, "DisableAddOnRequest");
}

export interface DisableAddOnResult {
  __type?: "DisableAddOnResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DisableAddOnResult {
  export const filterSensitiveLog = (obj: DisableAddOnResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisableAddOnResult => __isa(o, "DisableAddOnResult");
}

/**
 * <p>Describes a system disk or a block storage disk.</p>
 */
export interface Disk {
  __type?: "Disk";
  /**
   * <p>(Deprecated) The attachment state of the disk.</p>
   *          <note>
   *             <p>In releases prior to November 14, 2017, this parameter returned <code>attached</code>
   *         for system disks in the API response. It is now deprecated, but still included in the
   *         response. Use <code>isAttached</code> instead.</p>
   *          </note>
   */
  attachmentState?: string;

  /**
   * <p>(Deprecated) The number of GB in use by the disk.</p>
   *          <note>
   *             <p>In releases prior to November 14, 2017, this parameter was not included in the API
   *         response. It is now deprecated.</p>
   *          </note>
   */
  gbInUse?: number;

  /**
   * <p>The date when the disk was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The input/output operations per second (IOPS) of the disk.</p>
   */
  iops?: number;

  /**
   * <p>The disk path.</p>
   */
  path?: string;

  /**
   * <p>The resources to which the disk is attached.</p>
   */
  attachedTo?: string;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
   *         Dev Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>Describes the status of the disk.</p>
   */
  state?: DiskState | string;

  /**
   * <p>The AWS Region and Availability Zone where the disk is located.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>A Boolean value indicating whether this disk is a system disk (has an operating system
   *       loaded on it).</p>
   */
  isSystemDisk?: boolean;

  /**
   * <p>The size of the disk in GB.</p>
   */
  sizeInGb?: number;

  /**
   * <p>An array of objects representing the add-ons enabled on the disk.</p>
   */
  addOns?: AddOn[];

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       an instance or another resource in Lightsail. This code enables our support team to look up
   *       your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the disk.</p>
   */
  arn?: string;

  /**
   * <p>The Lightsail resource type (e.g., <code>Disk</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The unique name of the disk.</p>
   */
  name?: string;

  /**
   * <p>A Boolean value indicating whether the disk is attached.</p>
   */
  isAttached?: boolean;
}

export namespace Disk {
  export const filterSensitiveLog = (obj: Disk): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Disk => __isa(o, "Disk");
}

/**
 * <p>Describes a disk.</p>
 */
export interface DiskInfo {
  __type?: "DiskInfo";
  /**
   * <p>A Boolean value indicating whether this disk is a system disk (has an operating system
   *       loaded on it).</p>
   */
  isSystemDisk?: boolean;

  /**
   * <p>The disk path.</p>
   */
  path?: string;

  /**
   * <p>The disk name.</p>
   */
  name?: string;

  /**
   * <p>The size of the disk in GB (e.g., <code>32</code>).</p>
   */
  sizeInGb?: number;
}

export namespace DiskInfo {
  export const filterSensitiveLog = (obj: DiskInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DiskInfo => __isa(o, "DiskInfo");
}

/**
 * <p>Describes a block storage disk mapping.</p>
 */
export interface DiskMap {
  __type?: "DiskMap";
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
  export const filterSensitiveLog = (obj: DiskMap): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DiskMap => __isa(o, "DiskMap");
}

/**
 * <p>Describes a block storage disk snapshot.</p>
 */
export interface DiskSnapshot {
  __type?: "DiskSnapshot";
  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       an instance or another resource in Lightsail. This code enables our support team to look up
   *       your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The AWS Region and Availability Zone where the disk snapshot was created.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The status of the disk snapshot operation.</p>
   */
  state?: DiskSnapshotState | string;

  /**
   * <p>The Lightsail resource type (e.g., <code>DiskSnapshot</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The unique name of the source instance from which the disk (system volume) snapshot was
   *       created.</p>
   */
  fromInstanceName?: string;

  /**
   * <p>The progress of the disk snapshot operation.</p>
   */
  progress?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source instance from which the disk (system volume)
   *       snapshot was created.</p>
   */
  fromInstanceArn?: string;

  /**
   * <p>The name of the disk snapshot (e.g., <code>my-disk-snapshot</code>).</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the disk snapshot.</p>
   */
  arn?: string;

  /**
   * <p>A Boolean value indicating whether the snapshot was created from an automatic
   *       snapshot.</p>
   */
  isFromAutoSnapshot?: boolean;

  /**
   * <p>The date when the disk snapshot was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The size of the disk in GB.</p>
   */
  sizeInGb?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the source disk from which the disk snapshot was
   *       created.</p>
   */
  fromDiskArn?: string;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
   *         Dev Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The unique name of the source disk from which the disk snapshot was created.</p>
   */
  fromDiskName?: string;
}

export namespace DiskSnapshot {
  export const filterSensitiveLog = (obj: DiskSnapshot): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DiskSnapshot => __isa(o, "DiskSnapshot");
}

/**
 * <p>Describes a disk snapshot.</p>
 */
export interface DiskSnapshotInfo {
  __type?: "DiskSnapshotInfo";
  /**
   * <p>The size of the disk in GB (e.g., <code>32</code>).</p>
   */
  sizeInGb?: number;
}

export namespace DiskSnapshotInfo {
  export const filterSensitiveLog = (obj: DiskSnapshotInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DiskSnapshotInfo => __isa(o, "DiskSnapshotInfo");
}

export enum DiskSnapshotState {
  Completed = "completed",
  Error = "error",
  Pending = "pending",
  Unknown = "unknown",
}

export enum DiskState {
  Available = "available",
  Error = "error",
  InUse = "in-use",
  Pending = "pending",
  Unknown = "unknown",
}

/**
 * <p>Describes the specifications of a distribution bundle.</p>
 */
export interface DistributionBundle {
  __type?: "DistributionBundle";
  /**
   * <p>The name of the distribution bundle.</p>
   */
  name?: string;

  /**
   * <p>The ID of the bundle.</p>
   */
  bundleId?: string;

  /**
   * <p>The monthly network transfer quota of the bundle.</p>
   */
  transferPerMonthInGb?: number;

  /**
   * <p>Indicates whether the bundle is active, and can be specified for a new
   *       distribution.</p>
   */
  isActive?: boolean;

  /**
   * <p>The monthly price, in US dollars, of the bundle.</p>
   */
  price?: number;
}

export namespace DistributionBundle {
  export const filterSensitiveLog = (obj: DistributionBundle): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DistributionBundle => __isa(o, "DistributionBundle");
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
 * <p>Describes a domain where you are storing recordsets in Lightsail.</p>
 */
export interface Domain {
  __type?: "Domain";
  /**
   * <p>The AWS Region and Availability Zones where the domain recordset was created.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>An array of key-value pairs containing information about the domain entries.</p>
   */
  domainEntries?: DomainEntry[];

  /**
   * <p>The date when the domain recordset was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The resource type. </p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       an instance or another resource in Lightsail. This code enables our support team to look up
   *       your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The name of the domain.</p>
   */
  name?: string;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
   *         Dev Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of the domain recordset (e.g.,
   *         <code>arn:aws:lightsail:global:123456789101:Domain/824cede0-abc7-4f84-8dbc-12345EXAMPLE</code>).</p>
   */
  arn?: string;
}

export namespace Domain {
  export const filterSensitiveLog = (obj: Domain): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Domain => __isa(o, "Domain");
}

/**
 * <p>Describes a domain recordset entry.</p>
 */
export interface DomainEntry {
  __type?: "DomainEntry";
  /**
   * <p>The target AWS name server (e.g., <code>ns-111.awsdns-22.com.</code>).</p>
   *          <p>For Lightsail load balancers, the value looks like
   *         <code>ab1234c56789c6b86aba6fb203d443bc-123456789.us-east-2.elb.amazonaws.com</code>. Be sure
   *       to also set <code>isAlias</code> to <code>true</code> when setting up an A record for a load
   *       balancer.</p>
   */
  target?: string;

  /**
   * <p>The ID of the domain recordset entry.</p>
   */
  id?: string;

  /**
   * <p>The name of the domain.</p>
   */
  name?: string;

  /**
   * <p>(Deprecated) The options for the domain entry.</p>
   *          <note>
   *             <p>In releases prior to November 29, 2017, this parameter was not included in the API
   *         response. It is now deprecated.</p>
   *          </note>
   */
  options?: { [key: string]: string };

  /**
   * <p>When <code>true</code>, specifies whether the domain entry is an alias used by the
   *       Lightsail load balancer. You can include an alias (A type) record in your request, which
   *       points to a load balancer DNS name and routes traffic to your load balancer</p>
   */
  isAlias?: boolean;

  /**
   * <p>The type of domain entry, such as address (A), canonical name (CNAME), mail exchanger
   *       (MX), name server (NS), start of authority (SOA), service locator (SRV), or text (TXT).</p>
   *          <p>The following domain entry types can be used:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>A</code>
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
}

export namespace DomainEntry {
  export const filterSensitiveLog = (obj: DomainEntry): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DomainEntry => __isa(o, "DomainEntry");
}

/**
 * <p>Describes the domain validation records of an Amazon Lightsail SSL/TLS certificate.</p>
 */
export interface DomainValidationRecord {
  __type?: "DomainValidationRecord";
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
  export const filterSensitiveLog = (obj: DomainValidationRecord): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DomainValidationRecord => __isa(o, "DomainValidationRecord");
}

export interface DownloadDefaultKeyPairRequest {
  __type?: "DownloadDefaultKeyPairRequest";
}

export namespace DownloadDefaultKeyPairRequest {
  export const filterSensitiveLog = (obj: DownloadDefaultKeyPairRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DownloadDefaultKeyPairRequest => __isa(o, "DownloadDefaultKeyPairRequest");
}

export interface DownloadDefaultKeyPairResult {
  __type?: "DownloadDefaultKeyPairResult";
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
  export const filterSensitiveLog = (obj: DownloadDefaultKeyPairResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DownloadDefaultKeyPairResult => __isa(o, "DownloadDefaultKeyPairResult");
}

export interface EnableAddOnRequest {
  __type?: "EnableAddOnRequest";
  /**
   * <p>An array of strings representing the add-on to enable or modify.</p>
   */
  addOnRequest: AddOnRequest | undefined;

  /**
   * <p>The name of the source resource for which to enable or modify the add-on.</p>
   */
  resourceName: string | undefined;
}

export namespace EnableAddOnRequest {
  export const filterSensitiveLog = (obj: EnableAddOnRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EnableAddOnRequest => __isa(o, "EnableAddOnRequest");
}

export interface EnableAddOnResult {
  __type?: "EnableAddOnResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace EnableAddOnResult {
  export const filterSensitiveLog = (obj: EnableAddOnResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EnableAddOnResult => __isa(o, "EnableAddOnResult");
}

/**
 * <p>Describes an export snapshot record.</p>
 */
export interface ExportSnapshotRecord {
  __type?: "ExportSnapshotRecord";
  /**
   * <p>The Amazon Resource Name (ARN) of the export snapshot record.</p>
   */
  arn?: string;

  /**
   * <p>A list of objects describing the source of the export snapshot record.</p>
   */
  sourceInfo?: ExportSnapshotRecordSourceInfo;

  /**
   * <p>The state of the export snapshot record.</p>
   */
  state?: RecordState | string;

  /**
   * <p>A list of objects describing the destination of the export snapshot record.</p>
   */
  destinationInfo?: DestinationInfo;

  /**
   * <p>The date when the export snapshot record was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The Lightsail resource type (e.g., <code>ExportSnapshotRecord</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The AWS Region and Availability Zone where the export snapshot record is located.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The export snapshot record name.</p>
   */
  name?: string;
}

export namespace ExportSnapshotRecord {
  export const filterSensitiveLog = (obj: ExportSnapshotRecord): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ExportSnapshotRecord => __isa(o, "ExportSnapshotRecord");
}

/**
 * <p>Describes the source of an export snapshot record.</p>
 */
export interface ExportSnapshotRecordSourceInfo {
  __type?: "ExportSnapshotRecordSourceInfo";
  /**
   * <p>A list of objects describing an instance snapshot.</p>
   */
  instanceSnapshotInfo?: InstanceSnapshotInfo;

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
   * <p>The date when the source instance or disk snapshot was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The name of the source instance or disk snapshot.</p>
   */
  name?: string;

  /**
   * <p>A list of objects describing a disk snapshot.</p>
   */
  diskSnapshotInfo?: DiskSnapshotInfo;

  /**
   * <p>The Lightsail resource type (e.g., <code>InstanceSnapshot</code> or
   *         <code>DiskSnapshot</code>).</p>
   */
  resourceType?: ExportSnapshotRecordSourceType | string;
}

export namespace ExportSnapshotRecordSourceInfo {
  export const filterSensitiveLog = (obj: ExportSnapshotRecordSourceInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ExportSnapshotRecordSourceInfo => __isa(o, "ExportSnapshotRecordSourceInfo");
}

export enum ExportSnapshotRecordSourceType {
  DiskSnapshot = "DiskSnapshot",
  InstanceSnapshot = "InstanceSnapshot",
}

export interface ExportSnapshotRequest {
  __type?: "ExportSnapshotRequest";
  /**
   * <p>The name of the instance or disk snapshot to be exported to Amazon EC2.</p>
   */
  sourceSnapshotName: string | undefined;
}

export namespace ExportSnapshotRequest {
  export const filterSensitiveLog = (obj: ExportSnapshotRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ExportSnapshotRequest => __isa(o, "ExportSnapshotRequest");
}

export interface ExportSnapshotResult {
  __type?: "ExportSnapshotResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace ExportSnapshotResult {
  export const filterSensitiveLog = (obj: ExportSnapshotResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ExportSnapshotResult => __isa(o, "ExportSnapshotResult");
}

export enum ForwardValues {
  all = "all",
  allowList = "allow-list",
  none = "none",
}

export interface GetActiveNamesRequest {
  __type?: "GetActiveNamesRequest";
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetActiveNames</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetActiveNamesRequest {
  export const filterSensitiveLog = (obj: GetActiveNamesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetActiveNamesRequest => __isa(o, "GetActiveNamesRequest");
}

export interface GetActiveNamesResult {
  __type?: "GetActiveNamesResult";
  /**
   * <p>The token to advance to the next page of resutls from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetActiveNames</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;

  /**
   * <p>The list of active names returned by the get active names request.</p>
   */
  activeNames?: string[];
}

export namespace GetActiveNamesResult {
  export const filterSensitiveLog = (obj: GetActiveNamesResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetActiveNamesResult => __isa(o, "GetActiveNamesResult");
}

export interface GetAlarmsRequest {
  __type?: "GetAlarmsRequest";
  /**
   * <p>The name of the Lightsail resource being monitored by the alarm.</p>
   *          <p>Specify a monitored resource name to return information about all alarms for a specific
   *       resource.</p>
   */
  monitoredResourceName?: string;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetAlarms</code> request. If your results
   *       are paginated, the response will return a next page token that you can specify as the page
   *       token in a subsequent request.</p>
   */
  pageToken?: string;

  /**
   * <p>The name of the alarm.</p>
   *          <p>Specify an alarm name to return information about a specific alarm.</p>
   */
  alarmName?: string;
}

export namespace GetAlarmsRequest {
  export const filterSensitiveLog = (obj: GetAlarmsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAlarmsRequest => __isa(o, "GetAlarmsRequest");
}

export interface GetAlarmsResult {
  __type?: "GetAlarmsResult";
  /**
   * <p>The token to advance to the next page of resutls from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetAlarms</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;

  /**
   * <p>An array of objects that describe the alarms.</p>
   */
  alarms?: Alarm[];
}

export namespace GetAlarmsResult {
  export const filterSensitiveLog = (obj: GetAlarmsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAlarmsResult => __isa(o, "GetAlarmsResult");
}

export interface GetAutoSnapshotsRequest {
  __type?: "GetAutoSnapshotsRequest";
  /**
   * <p>The name of the source instance or disk from which to get automatic snapshot
   *       information.</p>
   */
  resourceName: string | undefined;
}

export namespace GetAutoSnapshotsRequest {
  export const filterSensitiveLog = (obj: GetAutoSnapshotsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAutoSnapshotsRequest => __isa(o, "GetAutoSnapshotsRequest");
}

export interface GetAutoSnapshotsResult {
  __type?: "GetAutoSnapshotsResult";
  /**
   * <p>An array of objects that describe the automatic snapshots that are available for the
   *       specified source instance or disk.</p>
   */
  autoSnapshots?: AutoSnapshotDetails[];

  /**
   * <p>The resource type (e.g., <code>Instance</code> or <code>Disk</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The name of the source instance or disk for the automatic snapshots.</p>
   */
  resourceName?: string;
}

export namespace GetAutoSnapshotsResult {
  export const filterSensitiveLog = (obj: GetAutoSnapshotsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAutoSnapshotsResult => __isa(o, "GetAutoSnapshotsResult");
}

export interface GetBlueprintsRequest {
  __type?: "GetBlueprintsRequest";
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetBlueprints</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   */
  pageToken?: string;

  /**
   * <p>A Boolean value indicating whether to include inactive results in your request.</p>
   */
  includeInactive?: boolean;
}

export namespace GetBlueprintsRequest {
  export const filterSensitiveLog = (obj: GetBlueprintsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBlueprintsRequest => __isa(o, "GetBlueprintsRequest");
}

export interface GetBlueprintsResult {
  __type?: "GetBlueprintsResult";
  /**
   * <p>An array of key-value pairs that contains information about the available
   *       blueprints.</p>
   */
  blueprints?: Blueprint[];

  /**
   * <p>The token to advance to the next page of resutls from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetBlueprints</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetBlueprintsResult {
  export const filterSensitiveLog = (obj: GetBlueprintsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBlueprintsResult => __isa(o, "GetBlueprintsResult");
}

export interface GetBundlesRequest {
  __type?: "GetBundlesRequest";
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetBundles</code> request. If your results
   *       are paginated, the response will return a next page token that you can specify as the page
   *       token in a subsequent request.</p>
   */
  pageToken?: string;

  /**
   * <p>A Boolean value that indicates whether to include inactive bundle results in your
   *       request.</p>
   */
  includeInactive?: boolean;
}

export namespace GetBundlesRequest {
  export const filterSensitiveLog = (obj: GetBundlesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBundlesRequest => __isa(o, "GetBundlesRequest");
}

export interface GetBundlesResult {
  __type?: "GetBundlesResult";
  /**
   * <p>An array of key-value pairs that contains information about the available bundles.</p>
   */
  bundles?: Bundle[];

  /**
   * <p>The token to advance to the next page of resutls from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetBundles</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetBundlesResult {
  export const filterSensitiveLog = (obj: GetBundlesResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBundlesResult => __isa(o, "GetBundlesResult");
}

export interface GetCertificatesRequest {
  __type?: "GetCertificatesRequest";
  /**
   * <p>Indicates whether to include detailed information about the certificates in the
   *       response.</p>
   *
   *          <p>When omitted, the response includes only the certificate names, Amazon Resource Names
   *       (ARNs), domain names, and tags.</p>
   */
  includeCertificateDetails?: boolean;

  /**
   * <p>The name for the certificate for which to return information.</p>
   *
   *          <p>When omitted, the response includes all of your certificates in the AWS region where the
   *       request is made.</p>
   */
  certificateName?: string;

  /**
   * <p>The status of the certificates for which to return information.</p>
   *
   *          <p>For example, specify <code>ISSUED</code> to return only certificates with an
   *         <code>ISSUED</code> status.</p>
   *
   *          <p>When omitted, the response includes all of your certificates in the AWS region where the
   *       request is made, regardless of their current status.</p>
   */
  certificateStatuses?: (CertificateStatus | string)[];
}

export namespace GetCertificatesRequest {
  export const filterSensitiveLog = (obj: GetCertificatesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetCertificatesRequest => __isa(o, "GetCertificatesRequest");
}

export interface GetCertificatesResult {
  __type?: "GetCertificatesResult";
  /**
   * <p>An object that describes certificates.</p>
   */
  certificates?: CertificateSummary[];
}

export namespace GetCertificatesResult {
  export const filterSensitiveLog = (obj: GetCertificatesResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetCertificatesResult => __isa(o, "GetCertificatesResult");
}

export interface GetCloudFormationStackRecordsRequest {
  __type?: "GetCloudFormationStackRecordsRequest";
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetClouFormationStackRecords</code> request.
   *       If your results are paginated, the response will return a next page token that you can specify
   *       as the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetCloudFormationStackRecordsRequest {
  export const filterSensitiveLog = (obj: GetCloudFormationStackRecordsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetCloudFormationStackRecordsRequest =>
    __isa(o, "GetCloudFormationStackRecordsRequest");
}

export interface GetCloudFormationStackRecordsResult {
  __type?: "GetCloudFormationStackRecordsResult";
  /**
   * <p>A list of objects describing the CloudFormation stack records.</p>
   */
  cloudFormationStackRecords?: CloudFormationStackRecord[];

  /**
   * <p>The token to advance to the next page of resutls from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another
   *         <code>GetCloudFormationStackRecords</code> request and specify the next page token using the
   *         <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetCloudFormationStackRecordsResult {
  export const filterSensitiveLog = (obj: GetCloudFormationStackRecordsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetCloudFormationStackRecordsResult =>
    __isa(o, "GetCloudFormationStackRecordsResult");
}

export interface GetContactMethodsRequest {
  __type?: "GetContactMethodsRequest";
  /**
   * <p>The protocols used to send notifications, such as <code>Email</code>, or <code>SMS</code>
   *       (text messaging).</p>
   *          <p>Specify a protocol in your request to return information about a specific contact method
   *       protocol.</p>
   */
  protocols?: (ContactProtocol | string)[];
}

export namespace GetContactMethodsRequest {
  export const filterSensitiveLog = (obj: GetContactMethodsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetContactMethodsRequest => __isa(o, "GetContactMethodsRequest");
}

export interface GetContactMethodsResult {
  __type?: "GetContactMethodsResult";
  /**
   * <p>An array of objects that describe the contact methods.</p>
   */
  contactMethods?: ContactMethod[];
}

export namespace GetContactMethodsResult {
  export const filterSensitiveLog = (obj: GetContactMethodsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetContactMethodsResult => __isa(o, "GetContactMethodsResult");
}

export interface GetDiskRequest {
  __type?: "GetDiskRequest";
  /**
   * <p>The name of the disk (e.g., <code>my-disk</code>).</p>
   */
  diskName: string | undefined;
}

export namespace GetDiskRequest {
  export const filterSensitiveLog = (obj: GetDiskRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDiskRequest => __isa(o, "GetDiskRequest");
}

export interface GetDiskResult {
  __type?: "GetDiskResult";
  /**
   * <p>An object containing information about the disk.</p>
   */
  disk?: Disk;
}

export namespace GetDiskResult {
  export const filterSensitiveLog = (obj: GetDiskResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDiskResult => __isa(o, "GetDiskResult");
}

export interface GetDiskSnapshotRequest {
  __type?: "GetDiskSnapshotRequest";
  /**
   * <p>The name of the disk snapshot (e.g., <code>my-disk-snapshot</code>).</p>
   */
  diskSnapshotName: string | undefined;
}

export namespace GetDiskSnapshotRequest {
  export const filterSensitiveLog = (obj: GetDiskSnapshotRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDiskSnapshotRequest => __isa(o, "GetDiskSnapshotRequest");
}

export interface GetDiskSnapshotResult {
  __type?: "GetDiskSnapshotResult";
  /**
   * <p>An object containing information about the disk snapshot.</p>
   */
  diskSnapshot?: DiskSnapshot;
}

export namespace GetDiskSnapshotResult {
  export const filterSensitiveLog = (obj: GetDiskSnapshotResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDiskSnapshotResult => __isa(o, "GetDiskSnapshotResult");
}

export interface GetDiskSnapshotsRequest {
  __type?: "GetDiskSnapshotsRequest";
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetDiskSnapshots</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetDiskSnapshotsRequest {
  export const filterSensitiveLog = (obj: GetDiskSnapshotsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDiskSnapshotsRequest => __isa(o, "GetDiskSnapshotsRequest");
}

export interface GetDiskSnapshotsResult {
  __type?: "GetDiskSnapshotsResult";
  /**
   * <p>An array of objects containing information about all block storage disk snapshots.</p>
   */
  diskSnapshots?: DiskSnapshot[];

  /**
   * <p>The token to advance to the next page of resutls from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetDiskSnapshots</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetDiskSnapshotsResult {
  export const filterSensitiveLog = (obj: GetDiskSnapshotsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDiskSnapshotsResult => __isa(o, "GetDiskSnapshotsResult");
}

export interface GetDisksRequest {
  __type?: "GetDisksRequest";
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetDisks</code> request. If your results are
   *       paginated, the response will return a next page token that you can specify as the page token
   *       in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetDisksRequest {
  export const filterSensitiveLog = (obj: GetDisksRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDisksRequest => __isa(o, "GetDisksRequest");
}

export interface GetDisksResult {
  __type?: "GetDisksResult";
  /**
   * <p>An array of objects containing information about all block storage disks.</p>
   */
  disks?: Disk[];

  /**
   * <p>The token to advance to the next page of resutls from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetDisks</code> request and specify
   *       the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetDisksResult {
  export const filterSensitiveLog = (obj: GetDisksResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDisksResult => __isa(o, "GetDisksResult");
}

export interface GetDistributionBundlesRequest {
  __type?: "GetDistributionBundlesRequest";
}

export namespace GetDistributionBundlesRequest {
  export const filterSensitiveLog = (obj: GetDistributionBundlesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDistributionBundlesRequest => __isa(o, "GetDistributionBundlesRequest");
}

export interface GetDistributionBundlesResult {
  __type?: "GetDistributionBundlesResult";
  /**
   * <p>An object that describes a distribution bundle.</p>
   */
  bundles?: DistributionBundle[];
}

export namespace GetDistributionBundlesResult {
  export const filterSensitiveLog = (obj: GetDistributionBundlesResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDistributionBundlesResult => __isa(o, "GetDistributionBundlesResult");
}

export interface GetDistributionLatestCacheResetRequest {
  __type?: "GetDistributionLatestCacheResetRequest";
  /**
   * <p>The name of the distribution for which to return the timestamp of the last cache
   *       reset.</p>
   *
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   *
   *          <p>When omitted, the response includes the latest cache reset timestamp of all your
   *       distributions.</p>
   */
  distributionName?: string;
}

export namespace GetDistributionLatestCacheResetRequest {
  export const filterSensitiveLog = (obj: GetDistributionLatestCacheResetRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDistributionLatestCacheResetRequest =>
    __isa(o, "GetDistributionLatestCacheResetRequest");
}

export interface GetDistributionLatestCacheResetResult {
  __type?: "GetDistributionLatestCacheResetResult";
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
  export const filterSensitiveLog = (obj: GetDistributionLatestCacheResetResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDistributionLatestCacheResetResult =>
    __isa(o, "GetDistributionLatestCacheResetResult");
}

export interface GetDistributionMetricDataRequest {
  __type?: "GetDistributionMetricDataRequest";
  /**
   * <p>The metric for which you want to return information.</p>
   *
   *          <p>Valid distribution metric names are listed below, along with the most useful
   *         <code>statistics</code> to include in your request, and the published <code>unit</code>
   *       value.</p>
   *
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
   * <p>The unit for the metric data request.</p>
   *
   *          <p>Valid units depend on the metric data being requested. For the valid units with each
   *       available metric, see the <code>metricName</code> parameter.</p>
   */
  unit: MetricUnit | string | undefined;

  /**
   * <p>The granularity, in seconds, for the metric data points that will be returned.</p>
   */
  period: number | undefined;

  /**
   * <p>The name of the distribution for which to get metric data.</p>
   *
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   */
  distributionName: string | undefined;
}

export namespace GetDistributionMetricDataRequest {
  export const filterSensitiveLog = (obj: GetDistributionMetricDataRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDistributionMetricDataRequest => __isa(o, "GetDistributionMetricDataRequest");
}

export interface GetDistributionMetricDataResult {
  __type?: "GetDistributionMetricDataResult";
  /**
   * <p>An array of objects that describe the metric data returned.</p>
   */
  metricData?: MetricDatapoint[];

  /**
   * <p>The name of the metric returned.</p>
   */
  metricName?: DistributionMetricName | string;
}

export namespace GetDistributionMetricDataResult {
  export const filterSensitiveLog = (obj: GetDistributionMetricDataResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDistributionMetricDataResult => __isa(o, "GetDistributionMetricDataResult");
}

export interface GetDistributionsRequest {
  __type?: "GetDistributionsRequest";
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *
   *          <p>To get a page token, perform an initial <code>GetDistributions</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   */
  pageToken?: string;

  /**
   * <p>The name of the distribution for which to return information.</p>
   *
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   *
   *          <p>When omitted, the response includes all of your distributions in the AWS Region where
   *       the request is made.</p>
   */
  distributionName?: string;
}

export namespace GetDistributionsRequest {
  export const filterSensitiveLog = (obj: GetDistributionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDistributionsRequest => __isa(o, "GetDistributionsRequest");
}

export interface GetDistributionsResult {
  __type?: "GetDistributionsResult";
  /**
   * <p>An array of objects that describe your distributions.</p>
   */
  distributions?: LightsailDistribution[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetDistributions</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetDistributionsResult {
  export const filterSensitiveLog = (obj: GetDistributionsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDistributionsResult => __isa(o, "GetDistributionsResult");
}

export interface GetDomainRequest {
  __type?: "GetDomainRequest";
  /**
   * <p>The domain name for which your want to return information about.</p>
   */
  domainName: string | undefined;
}

export namespace GetDomainRequest {
  export const filterSensitiveLog = (obj: GetDomainRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDomainRequest => __isa(o, "GetDomainRequest");
}

export interface GetDomainResult {
  __type?: "GetDomainResult";
  /**
   * <p>An array of key-value pairs containing information about your get domain request.</p>
   */
  domain?: Domain;
}

export namespace GetDomainResult {
  export const filterSensitiveLog = (obj: GetDomainResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDomainResult => __isa(o, "GetDomainResult");
}

export interface GetDomainsRequest {
  __type?: "GetDomainsRequest";
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetDomains</code> request. If your results
   *       are paginated, the response will return a next page token that you can specify as the page
   *       token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetDomainsRequest {
  export const filterSensitiveLog = (obj: GetDomainsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDomainsRequest => __isa(o, "GetDomainsRequest");
}

export interface GetDomainsResult {
  __type?: "GetDomainsResult";
  /**
   * <p>An array of key-value pairs containing information about each of the domain entries in the
   *       user's account.</p>
   */
  domains?: Domain[];

  /**
   * <p>The token to advance to the next page of resutls from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetDomains</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetDomainsResult {
  export const filterSensitiveLog = (obj: GetDomainsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDomainsResult => __isa(o, "GetDomainsResult");
}

export interface GetExportSnapshotRecordsRequest {
  __type?: "GetExportSnapshotRecordsRequest";
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetExportSnapshotRecords</code> request. If
   *       your results are paginated, the response will return a next page token that you can specify as
   *       the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetExportSnapshotRecordsRequest {
  export const filterSensitiveLog = (obj: GetExportSnapshotRecordsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetExportSnapshotRecordsRequest => __isa(o, "GetExportSnapshotRecordsRequest");
}

export interface GetExportSnapshotRecordsResult {
  __type?: "GetExportSnapshotRecordsResult";
  /**
   * <p>A list of objects describing the export snapshot records.</p>
   */
  exportSnapshotRecords?: ExportSnapshotRecord[];

  /**
   * <p>The token to advance to the next page of resutls from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetExportSnapshotRecords</code>
   *       request and specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetExportSnapshotRecordsResult {
  export const filterSensitiveLog = (obj: GetExportSnapshotRecordsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetExportSnapshotRecordsResult => __isa(o, "GetExportSnapshotRecordsResult");
}

export interface GetInstanceAccessDetailsRequest {
  __type?: "GetInstanceAccessDetailsRequest";
  /**
   * <p>The protocol to use to connect to your instance. Defaults to <code>ssh</code>.</p>
   */
  protocol?: InstanceAccessProtocol | string;

  /**
   * <p>The name of the instance to access.</p>
   */
  instanceName: string | undefined;
}

export namespace GetInstanceAccessDetailsRequest {
  export const filterSensitiveLog = (obj: GetInstanceAccessDetailsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetInstanceAccessDetailsRequest => __isa(o, "GetInstanceAccessDetailsRequest");
}

export interface GetInstanceAccessDetailsResult {
  __type?: "GetInstanceAccessDetailsResult";
  /**
   * <p>An array of key-value pairs containing information about a get instance access
   *       request.</p>
   */
  accessDetails?: InstanceAccessDetails;
}

export namespace GetInstanceAccessDetailsResult {
  export const filterSensitiveLog = (obj: GetInstanceAccessDetailsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetInstanceAccessDetailsResult => __isa(o, "GetInstanceAccessDetailsResult");
}

export interface GetInstanceMetricDataRequest {
  __type?: "GetInstanceMetricDataRequest";
  /**
   * <p>The start time of the time period.</p>
   */
  startTime: Date | undefined;

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

  /**
   * <p>The end time of the time period.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>The unit for the metric data request. Valid units depend on the metric data being
   *       requested. For the valid units to specify with each available metric, see the
   *         <code>metricName</code> parameter.</p>
   */
  unit: MetricUnit | string | undefined;

  /**
   * <p>The name of the instance for which you want to get metrics data.</p>
   */
  instanceName: string | undefined;

  /**
   * <p>The granularity, in seconds, of the returned data points.</p>
   *          <p>The <code>StatusCheckFailed</code>, <code>StatusCheckFailed_Instance</code>, and
   *         <code>StatusCheckFailed_System</code> instance metric data is available in 1-minute (60
   *       seconds) granularity. All other instance metric data is available in 5-minute (300 seconds)
   *       granularity.</p>
   */
  period: number | undefined;

  /**
   * <p>The metric for which you want to return information.</p>
   *          <p>Valid instance metric names are listed below, along with the most useful
   *         <code>statistics</code> to include in your request, and the published <code>unit</code>
   *       value.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>BurstCapacityPercentage</code>
   *                   </b> - The percentage
   *           of CPU performance available for your instance to burst above its baseline. Your instance
   *           continuously accrues and consumes burst capacity. Burst capacity stops accruing when your
   *           instance's <code>BurstCapacityPercentage</code> reaches 100%. For more information, see
   *             <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-viewing-instance-burst-capacity">Viewing instance burst capacity in Amazon Lightsail</a>.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistics are <code>Maximum</code> and
   *             <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Percent</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>BurstCapacityTime</code>
   *                   </b> - The available amount
   *           of time for your instance to burst at 100% CPU utilization. Your instance continuously
   *           accrues and consumes burst capacity. Burst capacity time stops accruing when your
   *           instance's <code>BurstCapacityPercentage</code> metric reaches 100%.</p>
   *                <p>Burst capacity time is consumed at the full rate only when your instance operates at
   *           100% CPU utilization. For example, if your instance operates at 50% CPU utilization in the
   *           burstable zone for a 5-minute period, then it consumes CPU burst capacity minutes at a 50%
   *           rate in that period. Your instance consumed 2 minutes and 30 seconds of CPU burst capacity
   *           minutes in the 5-minute period. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-viewing-instance-burst-capacity">Viewing instance burst capacity in Amazon Lightsail</a>.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistics are <code>Maximum</code> and
   *             <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Seconds</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>CPUUtilization</code>
   *                   </b> - The percentage of
   *           allocated compute units that are currently in use on the instance. This metric identifies
   *           the processing power to run the applications on the instance. Tools in your operating
   *           system can show a lower percentage than Lightsail when the instance is not allocated a
   *           full processor core.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistics are <code>Maximum</code> and
   *             <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Percent</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>NetworkIn</code>
   *                   </b> - The number of bytes received
   *           on all network interfaces by the instance. This metric identifies the volume of incoming
   *           network traffic to the instance. The number reported is the number of bytes received
   *           during the period. Because this metric is reported in 5-minute intervals, divide the
   *           reported number by 300 to find Bytes/second.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Bytes</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>NetworkOut</code>
   *                   </b> - The number of bytes sent
   *           out on all network interfaces by the instance. This metric identifies the volume of
   *           outgoing network traffic from the instance. The number reported is the number of bytes
   *           sent during the period. Because this metric is reported in 5-minute intervals, divide the
   *           reported number by 300 to find Bytes/second.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Bytes</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>StatusCheckFailed</code>
   *                   </b> - Reports whether the
   *           instance passed or failed both the instance status check and the system status check. This
   *           metric can be either 0 (passed) or 1 (failed). This metric data is available in 1-minute
   *           (60 seconds) granularity.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>StatusCheckFailed_Instance</code>
   *                   </b> - Reports
   *           whether the instance passed or failed the instance status check. This metric can be either
   *           0 (passed) or 1 (failed). This metric data is available in 1-minute (60 seconds)
   *           granularity.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>StatusCheckFailed_System</code>
   *                   </b> - Reports
   *           whether the instance passed or failed the system status check. This metric can be either 0
   *           (passed) or 1 (failed). This metric data is available in 1-minute (60 seconds)
   *           granularity.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *          </ul>
   */
  metricName: InstanceMetricName | string | undefined;
}

export namespace GetInstanceMetricDataRequest {
  export const filterSensitiveLog = (obj: GetInstanceMetricDataRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetInstanceMetricDataRequest => __isa(o, "GetInstanceMetricDataRequest");
}

export interface GetInstanceMetricDataResult {
  __type?: "GetInstanceMetricDataResult";
  /**
   * <p>An array of objects that describe the metric data returned.</p>
   */
  metricData?: MetricDatapoint[];

  /**
   * <p>The name of the metric returned.</p>
   */
  metricName?: InstanceMetricName | string;
}

export namespace GetInstanceMetricDataResult {
  export const filterSensitiveLog = (obj: GetInstanceMetricDataResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetInstanceMetricDataResult => __isa(o, "GetInstanceMetricDataResult");
}

export interface GetInstancePortStatesRequest {
  __type?: "GetInstancePortStatesRequest";
  /**
   * <p>The name of the instance for which to return firewall port states.</p>
   */
  instanceName: string | undefined;
}

export namespace GetInstancePortStatesRequest {
  export const filterSensitiveLog = (obj: GetInstancePortStatesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetInstancePortStatesRequest => __isa(o, "GetInstancePortStatesRequest");
}

export interface GetInstancePortStatesResult {
  __type?: "GetInstancePortStatesResult";
  /**
   * <p>An array of objects that describe the firewall port states for the specified
   *       instance.</p>
   */
  portStates?: InstancePortState[];
}

export namespace GetInstancePortStatesResult {
  export const filterSensitiveLog = (obj: GetInstancePortStatesResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetInstancePortStatesResult => __isa(o, "GetInstancePortStatesResult");
}

export interface GetInstanceRequest {
  __type?: "GetInstanceRequest";
  /**
   * <p>The name of the instance.</p>
   */
  instanceName: string | undefined;
}

export namespace GetInstanceRequest {
  export const filterSensitiveLog = (obj: GetInstanceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetInstanceRequest => __isa(o, "GetInstanceRequest");
}

export interface GetInstanceResult {
  __type?: "GetInstanceResult";
  /**
   * <p>An array of key-value pairs containing information about the specified instance.</p>
   */
  instance?: Instance;
}

export namespace GetInstanceResult {
  export const filterSensitiveLog = (obj: GetInstanceResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetInstanceResult => __isa(o, "GetInstanceResult");
}

export interface GetInstanceSnapshotRequest {
  __type?: "GetInstanceSnapshotRequest";
  /**
   * <p>The name of the snapshot for which you are requesting information.</p>
   */
  instanceSnapshotName: string | undefined;
}

export namespace GetInstanceSnapshotRequest {
  export const filterSensitiveLog = (obj: GetInstanceSnapshotRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetInstanceSnapshotRequest => __isa(o, "GetInstanceSnapshotRequest");
}

export interface GetInstanceSnapshotResult {
  __type?: "GetInstanceSnapshotResult";
  /**
   * <p>An array of key-value pairs containing information about the results of your get instance
   *       snapshot request.</p>
   */
  instanceSnapshot?: InstanceSnapshot;
}

export namespace GetInstanceSnapshotResult {
  export const filterSensitiveLog = (obj: GetInstanceSnapshotResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetInstanceSnapshotResult => __isa(o, "GetInstanceSnapshotResult");
}

export interface GetInstanceSnapshotsRequest {
  __type?: "GetInstanceSnapshotsRequest";
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetInstanceSnapshots</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetInstanceSnapshotsRequest {
  export const filterSensitiveLog = (obj: GetInstanceSnapshotsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetInstanceSnapshotsRequest => __isa(o, "GetInstanceSnapshotsRequest");
}

export interface GetInstanceSnapshotsResult {
  __type?: "GetInstanceSnapshotsResult";
  /**
   * <p>The token to advance to the next page of resutls from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetInstanceSnapshots</code> request
   *       and specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;

  /**
   * <p>An array of key-value pairs containing information about the results of your get instance
   *       snapshots request.</p>
   */
  instanceSnapshots?: InstanceSnapshot[];
}

export namespace GetInstanceSnapshotsResult {
  export const filterSensitiveLog = (obj: GetInstanceSnapshotsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetInstanceSnapshotsResult => __isa(o, "GetInstanceSnapshotsResult");
}

export interface GetInstancesRequest {
  __type?: "GetInstancesRequest";
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetInstances</code> request. If your results
   *       are paginated, the response will return a next page token that you can specify as the page
   *       token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetInstancesRequest {
  export const filterSensitiveLog = (obj: GetInstancesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetInstancesRequest => __isa(o, "GetInstancesRequest");
}

export interface GetInstancesResult {
  __type?: "GetInstancesResult";
  /**
   * <p>An array of key-value pairs containing information about your instances.</p>
   */
  instances?: Instance[];

  /**
   * <p>The token to advance to the next page of resutls from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetInstances</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetInstancesResult {
  export const filterSensitiveLog = (obj: GetInstancesResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetInstancesResult => __isa(o, "GetInstancesResult");
}

export interface GetInstanceStateRequest {
  __type?: "GetInstanceStateRequest";
  /**
   * <p>The name of the instance to get state information about.</p>
   */
  instanceName: string | undefined;
}

export namespace GetInstanceStateRequest {
  export const filterSensitiveLog = (obj: GetInstanceStateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetInstanceStateRequest => __isa(o, "GetInstanceStateRequest");
}

export interface GetInstanceStateResult {
  __type?: "GetInstanceStateResult";
  /**
   * <p>The state of the instance.</p>
   */
  state?: InstanceState;
}

export namespace GetInstanceStateResult {
  export const filterSensitiveLog = (obj: GetInstanceStateResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetInstanceStateResult => __isa(o, "GetInstanceStateResult");
}

export interface GetKeyPairRequest {
  __type?: "GetKeyPairRequest";
  /**
   * <p>The name of the key pair for which you are requesting information.</p>
   */
  keyPairName: string | undefined;
}

export namespace GetKeyPairRequest {
  export const filterSensitiveLog = (obj: GetKeyPairRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetKeyPairRequest => __isa(o, "GetKeyPairRequest");
}

export interface GetKeyPairResult {
  __type?: "GetKeyPairResult";
  /**
   * <p>An array of key-value pairs containing information about the key pair.</p>
   */
  keyPair?: KeyPair;
}

export namespace GetKeyPairResult {
  export const filterSensitiveLog = (obj: GetKeyPairResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetKeyPairResult => __isa(o, "GetKeyPairResult");
}

export interface GetKeyPairsRequest {
  __type?: "GetKeyPairsRequest";
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetKeyPairs</code> request. If your results
   *       are paginated, the response will return a next page token that you can specify as the page
   *       token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetKeyPairsRequest {
  export const filterSensitiveLog = (obj: GetKeyPairsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetKeyPairsRequest => __isa(o, "GetKeyPairsRequest");
}

export interface GetKeyPairsResult {
  __type?: "GetKeyPairsResult";
  /**
   * <p>An array of key-value pairs containing information about the key pairs.</p>
   */
  keyPairs?: KeyPair[];

  /**
   * <p>The token to advance to the next page of resutls from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetKeyPairs</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetKeyPairsResult {
  export const filterSensitiveLog = (obj: GetKeyPairsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetKeyPairsResult => __isa(o, "GetKeyPairsResult");
}

export interface GetLoadBalancerMetricDataRequest {
  __type?: "GetLoadBalancerMetricDataRequest";
  /**
   * <p>The granularity, in seconds, of the returned data points.</p>
   */
  period: number | undefined;

  /**
   * <p>The metric for which you want to return information.</p>
   *          <p>Valid load balancer metric names are listed below, along with the most useful
   *         <code>statistics</code> to include in your request, and the published <code>unit</code>
   *       value.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>ClientTLSNegotiationErrorCount</code>
   *                   </b> - The
   *           number of TLS connections initiated by the client that did not establish a session with
   *           the load balancer due to a TLS error generated by the load balancer. Possible causes
   *           include a mismatch of ciphers or protocols.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>HealthyHostCount</code>
   *                   </b> - The number of target
   *           instances that are considered healthy.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic are <code>Average</code>,
   *             <code>Minimum</code>, and <code>Maximum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>HTTPCode_Instance_2XX_Count</code>
   *                   </b> - The number
   *           of HTTP 2XX response codes generated by the target instances. This does not include any
   *           response codes generated by the load balancer.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
   *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
   *             <code>1</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>HTTPCode_Instance_3XX_Count</code>
   *                   </b> - The number
   *           of HTTP 3XX response codes generated by the target instances. This does not include any
   *           response codes generated by the load balancer.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
   *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
   *             <code>1</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>HTTPCode_Instance_4XX_Count</code>
   *                   </b> - The number
   *           of HTTP 4XX response codes generated by the target instances. This does not include any
   *           response codes generated by the load balancer.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
   *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
   *             <code>1</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>HTTPCode_Instance_5XX_Count</code>
   *                   </b> - The number
   *           of HTTP 5XX response codes generated by the target instances. This does not include any
   *           response codes generated by the load balancer.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
   *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
   *             <code>1</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>HTTPCode_LB_4XX_Count</code>
   *                   </b> - The number of
   *           HTTP 4XX client error codes that originated from the load balancer. Client errors are
   *           generated when requests are malformed or incomplete. These requests were not received by
   *           the target instance. This count does not include response codes generated by the target
   *           instances.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
   *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
   *             <code>1</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>HTTPCode_LB_5XX_Count</code>
   *                   </b> - The number of
   *           HTTP 5XX server error codes that originated from the load balancer. This does not include
   *           any response codes generated by the target instance. This metric is reported if there are
   *           no healthy instances attached to the load balancer, or if the request rate exceeds the
   *           capacity of the instances (spillover) or the load balancer.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
   *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
   *             <code>1</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>InstanceResponseTime</code>
   *                   </b> - The time elapsed,
   *           in seconds, after the request leaves the load balancer until a response from the target
   *           instance is received.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Seconds</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>RejectedConnectionCount</code>
   *                   </b> - The number of
   *           connections that were rejected because the load balancer had reached its maximum number of
   *           connections.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>RequestCount</code>
   *                   </b> - The number of requests
   *           processed over IPv4. This count includes only the requests with a response generated by a
   *           target instance of the load balancer.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
   *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
   *             <code>1</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>UnhealthyHostCount</code>
   *                   </b> - The number of
   *           target instances that are considered unhealthy.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic are <code>Average</code>,
   *             <code>Minimum</code>, and <code>Maximum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *          </ul>
   */
  metricName: LoadBalancerMetricName | string | undefined;

  /**
   * <p>The start time of the period.</p>
   */
  startTime: Date | undefined;

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

  /**
   * <p>The name of the load balancer.</p>
   */
  loadBalancerName: string | undefined;

  /**
   * <p>The end time of the period.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>The unit for the metric data request. Valid units depend on the metric data being
   *       requested. For the valid units with each available metric, see the <code>metricName</code>
   *       parameter.</p>
   */
  unit: MetricUnit | string | undefined;
}

export namespace GetLoadBalancerMetricDataRequest {
  export const filterSensitiveLog = (obj: GetLoadBalancerMetricDataRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetLoadBalancerMetricDataRequest => __isa(o, "GetLoadBalancerMetricDataRequest");
}

export interface GetLoadBalancerMetricDataResult {
  __type?: "GetLoadBalancerMetricDataResult";
  /**
   * <p>An array of objects that describe the metric data returned.</p>
   */
  metricData?: MetricDatapoint[];

  /**
   * <p>The name of the metric returned.</p>
   */
  metricName?: LoadBalancerMetricName | string;
}

export namespace GetLoadBalancerMetricDataResult {
  export const filterSensitiveLog = (obj: GetLoadBalancerMetricDataResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetLoadBalancerMetricDataResult => __isa(o, "GetLoadBalancerMetricDataResult");
}

export interface GetLoadBalancerRequest {
  __type?: "GetLoadBalancerRequest";
  /**
   * <p>The name of the load balancer.</p>
   */
  loadBalancerName: string | undefined;
}

export namespace GetLoadBalancerRequest {
  export const filterSensitiveLog = (obj: GetLoadBalancerRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetLoadBalancerRequest => __isa(o, "GetLoadBalancerRequest");
}

export interface GetLoadBalancerResult {
  __type?: "GetLoadBalancerResult";
  /**
   * <p>An object containing information about your load balancer.</p>
   */
  loadBalancer?: LoadBalancer;
}

export namespace GetLoadBalancerResult {
  export const filterSensitiveLog = (obj: GetLoadBalancerResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetLoadBalancerResult => __isa(o, "GetLoadBalancerResult");
}

export interface GetLoadBalancersRequest {
  __type?: "GetLoadBalancersRequest";
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetLoadBalancers</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetLoadBalancersRequest {
  export const filterSensitiveLog = (obj: GetLoadBalancersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetLoadBalancersRequest => __isa(o, "GetLoadBalancersRequest");
}

export interface GetLoadBalancersResult {
  __type?: "GetLoadBalancersResult";
  /**
   * <p>An array of LoadBalancer objects describing your load balancers.</p>
   */
  loadBalancers?: LoadBalancer[];

  /**
   * <p>The token to advance to the next page of resutls from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetLoadBalancers</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetLoadBalancersResult {
  export const filterSensitiveLog = (obj: GetLoadBalancersResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetLoadBalancersResult => __isa(o, "GetLoadBalancersResult");
}

export interface GetLoadBalancerTlsCertificatesRequest {
  __type?: "GetLoadBalancerTlsCertificatesRequest";
  /**
   * <p>The name of the load balancer you associated with your SSL/TLS certificate.</p>
   */
  loadBalancerName: string | undefined;
}

export namespace GetLoadBalancerTlsCertificatesRequest {
  export const filterSensitiveLog = (obj: GetLoadBalancerTlsCertificatesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetLoadBalancerTlsCertificatesRequest =>
    __isa(o, "GetLoadBalancerTlsCertificatesRequest");
}

export interface GetLoadBalancerTlsCertificatesResult {
  __type?: "GetLoadBalancerTlsCertificatesResult";
  /**
   * <p>An array of LoadBalancerTlsCertificate objects describing your SSL/TLS
   *       certificates.</p>
   */
  tlsCertificates?: LoadBalancerTlsCertificate[];
}

export namespace GetLoadBalancerTlsCertificatesResult {
  export const filterSensitiveLog = (obj: GetLoadBalancerTlsCertificatesResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetLoadBalancerTlsCertificatesResult =>
    __isa(o, "GetLoadBalancerTlsCertificatesResult");
}

export interface GetOperationRequest {
  __type?: "GetOperationRequest";
  /**
   * <p>A GUID used to identify the operation.</p>
   */
  operationId: string | undefined;
}

export namespace GetOperationRequest {
  export const filterSensitiveLog = (obj: GetOperationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetOperationRequest => __isa(o, "GetOperationRequest");
}

export interface GetOperationResult {
  __type?: "GetOperationResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace GetOperationResult {
  export const filterSensitiveLog = (obj: GetOperationResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetOperationResult => __isa(o, "GetOperationResult");
}

export interface GetOperationsForResourceRequest {
  __type?: "GetOperationsForResourceRequest";
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetOperationsForResource</code> request. If
   *       your results are paginated, the response will return a next page token that you can specify as
   *       the page token in a subsequent request.</p>
   */
  pageToken?: string;

  /**
   * <p>The name of the resource for which you are requesting information.</p>
   */
  resourceName: string | undefined;
}

export namespace GetOperationsForResourceRequest {
  export const filterSensitiveLog = (obj: GetOperationsForResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetOperationsForResourceRequest => __isa(o, "GetOperationsForResourceRequest");
}

export interface GetOperationsForResourceResult {
  __type?: "GetOperationsForResourceResult";
  /**
   * <p>The token to advance to the next page of resutls from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetOperationsForResource</code>
   *       request and specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;

  /**
   * <p>(Deprecated) Returns the number of pages of results that remain.</p>
   *          <note>
   *             <p>In releases prior to June 12, 2017, this parameter returned <code>null</code> by the
   *         API. It is now deprecated, and the API returns the <code>next page token</code> parameter
   *         instead.</p>
   *          </note>
   */
  nextPageCount?: string;

  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace GetOperationsForResourceResult {
  export const filterSensitiveLog = (obj: GetOperationsForResourceResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetOperationsForResourceResult => __isa(o, "GetOperationsForResourceResult");
}

export interface GetOperationsRequest {
  __type?: "GetOperationsRequest";
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetOperations</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetOperationsRequest {
  export const filterSensitiveLog = (obj: GetOperationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetOperationsRequest => __isa(o, "GetOperationsRequest");
}

export interface GetOperationsResult {
  __type?: "GetOperationsResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];

  /**
   * <p>The token to advance to the next page of resutls from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetOperations</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetOperationsResult {
  export const filterSensitiveLog = (obj: GetOperationsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetOperationsResult => __isa(o, "GetOperationsResult");
}

export interface GetRegionsRequest {
  __type?: "GetRegionsRequest";
  /**
   * <p>A Boolean value indicating whether to also include Availability Zones in your get regions
   *       request. Availability Zones are indicated with a letter: e.g., <code>us-east-2a</code>.</p>
   */
  includeAvailabilityZones?: boolean;

  /**
   * <p>>A Boolean value indicating whether to also include Availability Zones for databases in
   *       your get regions request. Availability Zones are indicated with a letter (e.g.,
   *         <code>us-east-2a</code>).</p>
   */
  includeRelationalDatabaseAvailabilityZones?: boolean;
}

export namespace GetRegionsRequest {
  export const filterSensitiveLog = (obj: GetRegionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRegionsRequest => __isa(o, "GetRegionsRequest");
}

export interface GetRegionsResult {
  __type?: "GetRegionsResult";
  /**
   * <p>An array of key-value pairs containing information about your get regions request.</p>
   */
  regions?: Region[];
}

export namespace GetRegionsResult {
  export const filterSensitiveLog = (obj: GetRegionsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRegionsResult => __isa(o, "GetRegionsResult");
}

export interface GetRelationalDatabaseBlueprintsRequest {
  __type?: "GetRelationalDatabaseBlueprintsRequest";
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabaseBlueprints</code>
   *       request. If your results are paginated, the response will return a next page token that you
   *       can specify as the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetRelationalDatabaseBlueprintsRequest {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseBlueprintsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRelationalDatabaseBlueprintsRequest =>
    __isa(o, "GetRelationalDatabaseBlueprintsRequest");
}

export interface GetRelationalDatabaseBlueprintsResult {
  __type?: "GetRelationalDatabaseBlueprintsResult";
  /**
   * <p>An object describing the result of your get relational database blueprints request.</p>
   */
  blueprints?: RelationalDatabaseBlueprint[];

  /**
   * <p>The token to advance to the next page of resutls from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another
   *         <code>GetRelationalDatabaseBlueprints</code> request and specify the next page token using
   *       the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetRelationalDatabaseBlueprintsResult {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseBlueprintsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRelationalDatabaseBlueprintsResult =>
    __isa(o, "GetRelationalDatabaseBlueprintsResult");
}

export interface GetRelationalDatabaseBundlesRequest {
  __type?: "GetRelationalDatabaseBundlesRequest";
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabaseBundles</code> request.
   *       If your results are paginated, the response will return a next page token that you can specify
   *       as the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetRelationalDatabaseBundlesRequest {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseBundlesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRelationalDatabaseBundlesRequest =>
    __isa(o, "GetRelationalDatabaseBundlesRequest");
}

export interface GetRelationalDatabaseBundlesResult {
  __type?: "GetRelationalDatabaseBundlesResult";
  /**
   * <p>The token to advance to the next page of resutls from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetRelationalDatabaseBundles</code>
   *       request and specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;

  /**
   * <p>An object describing the result of your get relational database bundles request.</p>
   */
  bundles?: RelationalDatabaseBundle[];
}

export namespace GetRelationalDatabaseBundlesResult {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseBundlesResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRelationalDatabaseBundlesResult =>
    __isa(o, "GetRelationalDatabaseBundlesResult");
}

export interface GetRelationalDatabaseEventsRequest {
  __type?: "GetRelationalDatabaseEventsRequest";
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabaseEvents</code> request.
   *       If your results are paginated, the response will return a next page token that you can specify
   *       as the page token in a subsequent request.</p>
   */
  pageToken?: string;

  /**
   * <p>The number of minutes in the past from which to retrieve events. For example, to get all
   *       events from the past 2 hours, enter 120.</p>
   *          <p>Default: <code>60</code>
   *          </p>
   *          <p>The minimum is 1 and the maximum is 14 days (20160 minutes).</p>
   */
  durationInMinutes?: number;

  /**
   * <p>The name of the database from which to get events.</p>
   */
  relationalDatabaseName: string | undefined;
}

export namespace GetRelationalDatabaseEventsRequest {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseEventsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRelationalDatabaseEventsRequest =>
    __isa(o, "GetRelationalDatabaseEventsRequest");
}

export interface GetRelationalDatabaseEventsResult {
  __type?: "GetRelationalDatabaseEventsResult";
  /**
   * <p>An object describing the result of your get relational database events request.</p>
   */
  relationalDatabaseEvents?: RelationalDatabaseEvent[];

  /**
   * <p>The token to advance to the next page of resutls from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetRelationalDatabaseEvents</code>
   *       request and specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetRelationalDatabaseEventsResult {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseEventsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRelationalDatabaseEventsResult => __isa(o, "GetRelationalDatabaseEventsResult");
}

export interface GetRelationalDatabaseLogEventsRequest {
  __type?: "GetRelationalDatabaseLogEventsRequest";
  /**
   * <p>The end of the time interval from which to get log events.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Specified in the Unix time format.</p>
   *                <p>For example, if you wish to use an end time of October 1, 2018, at 8 PM UTC, then you
   *           input <code>1538424000</code> as the end time.</p>
   *
   *             </li>
   *          </ul>
   */
  endTime?: Date;

  /**
   * <p>The name of your database for which to get log events.</p>
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The start of the time interval from which to get log events.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Specified in the Unix time format.</p>
   *                <p>For example, if you wish to use a start time of October 1, 2018, at 8 PM UTC, then you
   *           input <code>1538424000</code> as the start time.</p>
   *             </li>
   *          </ul>
   */
  startTime?: Date;

  /**
   * <p>The token to advance to the next or previous page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabaseLogEvents</code>
   *       request. If your results are paginated, the response will return a next forward token and/or
   *       next backward token that you can specify as the page token in a subsequent request.</p>
   */
  pageToken?: string;

  /**
   * <p>Parameter to specify if the log should start from head or tail. If <code>true</code> is
   *       specified, the log event starts from the head of the log. If <code>false</code> is specified,
   *       the log event starts from the tail of the log.</p>
   *          <note>
   *             <p>For PostgreSQL, the default value of <code>false</code> is the only option
   *         available.</p>
   *          </note>
   */
  startFromHead?: boolean;

  /**
   * <p>The name of the log stream.</p>
   *          <p>Use the <code>get relational database log streams</code> operation to get a list of
   *       available log streams.</p>
   */
  logStreamName: string | undefined;
}

export namespace GetRelationalDatabaseLogEventsRequest {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseLogEventsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRelationalDatabaseLogEventsRequest =>
    __isa(o, "GetRelationalDatabaseLogEventsRequest");
}

export interface GetRelationalDatabaseLogEventsResult {
  __type?: "GetRelationalDatabaseLogEventsResult";
  /**
   * <p>An object describing the result of your get relational database log events request.</p>
   */
  resourceLogEvents?: LogEvent[];

  /**
   * <p>A token used for advancing to the previous page of results from your get relational
   *       database log events request.</p>
   */
  nextBackwardToken?: string;

  /**
   * <p>A token used for advancing to the next page of results from your get relational database
   *       log events request.</p>
   */
  nextForwardToken?: string;
}

export namespace GetRelationalDatabaseLogEventsResult {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseLogEventsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRelationalDatabaseLogEventsResult =>
    __isa(o, "GetRelationalDatabaseLogEventsResult");
}

export interface GetRelationalDatabaseLogStreamsRequest {
  __type?: "GetRelationalDatabaseLogStreamsRequest";
  /**
   * <p>The name of your database for which to get log streams.</p>
   */
  relationalDatabaseName: string | undefined;
}

export namespace GetRelationalDatabaseLogStreamsRequest {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseLogStreamsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRelationalDatabaseLogStreamsRequest =>
    __isa(o, "GetRelationalDatabaseLogStreamsRequest");
}

export interface GetRelationalDatabaseLogStreamsResult {
  __type?: "GetRelationalDatabaseLogStreamsResult";
  /**
   * <p>An object describing the result of your get relational database log streams
   *       request.</p>
   */
  logStreams?: string[];
}

export namespace GetRelationalDatabaseLogStreamsResult {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseLogStreamsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRelationalDatabaseLogStreamsResult =>
    __isa(o, "GetRelationalDatabaseLogStreamsResult");
}

export interface GetRelationalDatabaseMasterUserPasswordRequest {
  __type?: "GetRelationalDatabaseMasterUserPasswordRequest";
  /**
   * <p>The password version to return.</p>
   *          <p>Specifying <code>CURRENT</code> or <code>PREVIOUS</code> returns the current or previous
   *       passwords respectively. Specifying <code>PENDING</code> returns the newest version of the
   *       password that will rotate to <code>CURRENT</code>. After the <code>PENDING</code> password
   *       rotates to <code>CURRENT</code>, the <code>PENDING</code> password is no longer
   *       available.</p>
   *          <p>Default: <code>CURRENT</code>
   *          </p>
   */
  passwordVersion?: RelationalDatabasePasswordVersion | string;

  /**
   * <p>The name of your database for which to get the master user password.</p>
   */
  relationalDatabaseName: string | undefined;
}

export namespace GetRelationalDatabaseMasterUserPasswordRequest {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseMasterUserPasswordRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRelationalDatabaseMasterUserPasswordRequest =>
    __isa(o, "GetRelationalDatabaseMasterUserPasswordRequest");
}

export interface GetRelationalDatabaseMasterUserPasswordResult {
  __type?: "GetRelationalDatabaseMasterUserPasswordResult";
  /**
   * <p>The timestamp when the specified version of the master user password was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The master user password for the <code>password version</code> specified.</p>
   */
  masterUserPassword?: string;
}

export namespace GetRelationalDatabaseMasterUserPasswordResult {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseMasterUserPasswordResult): any => ({
    ...obj,
    ...(obj.masterUserPassword && { masterUserPassword: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is GetRelationalDatabaseMasterUserPasswordResult =>
    __isa(o, "GetRelationalDatabaseMasterUserPasswordResult");
}

export interface GetRelationalDatabaseMetricDataRequest {
  __type?: "GetRelationalDatabaseMetricDataRequest";
  /**
   * <p>The metric for which you want to return information.</p>
   *          <p>Valid relational database metric names are listed below, along with the most useful
   *         <code>statistics</code> to include in your request, and the published <code>unit</code>
   *       value. All relational database metric data is available in 1-minute (60 seconds)
   *       granularity.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>CPUUtilization</code>
   *                   </b> - The percentage of CPU
   *           utilization currently in use on the database.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistics are <code>Maximum</code> and
   *             <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Percent</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>DatabaseConnections</code>
   *                   </b> - The number of
   *           database connections in use.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistics are <code>Maximum</code> and
   *             <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>DiskQueueDepth</code>
   *                   </b> - The number of
   *           outstanding IOs (read/write requests) that are waiting to access the disk.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>FreeStorageSpace</code>
   *                   </b> - The amount of
   *           available storage space.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Bytes</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>NetworkReceiveThroughput</code>
   *                   </b> - The incoming
   *           (Receive) network traffic on the database, including both customer database traffic and
   *           AWS traffic used for monitoring and replication.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Bytes/Second</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>NetworkTransmitThroughput</code>
   *                   </b> - The outgoing
   *           (Transmit) network traffic on the database, including both customer database traffic and
   *           AWS traffic used for monitoring and replication.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Bytes/Second</code>.</p>
   *             </li>
   *          </ul>
   */
  metricName: RelationalDatabaseMetricName | string | undefined;

  /**
   * <p>The end of the time interval from which to get metric data.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Specified in the Unix time format.</p>
   *                <p>For example, if you wish to use an end time of October 1, 2018, at 8 PM UTC, then you
   *           input <code>1538424000</code> as the end time.</p>
   *
   *             </li>
   *          </ul>
   */
  endTime: Date | undefined;

  /**
   * <p>The unit for the metric data request. Valid units depend on the metric data being
   *       requested. For the valid units with each available metric, see the <code>metricName</code>
   *       parameter.</p>
   */
  unit: MetricUnit | string | undefined;

  /**
   * <p>The start of the time interval from which to get metric data.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Specified in the Unix time format.</p>
   *                <p>For example, if you wish to use a start time of October 1, 2018, at 8 PM UTC, then you
   *           input <code>1538424000</code> as the start time.</p>
   *
   *             </li>
   *          </ul>
   */
  startTime: Date | undefined;

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

  /**
   * <p>The name of your database from which to get metric data.</p>
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The granularity, in seconds, of the returned data points.</p>
   *          <p>All relational database metric data is available in 1-minute (60 seconds)
   *       granularity.</p>
   */
  period: number | undefined;
}

export namespace GetRelationalDatabaseMetricDataRequest {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseMetricDataRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRelationalDatabaseMetricDataRequest =>
    __isa(o, "GetRelationalDatabaseMetricDataRequest");
}

export interface GetRelationalDatabaseMetricDataResult {
  __type?: "GetRelationalDatabaseMetricDataResult";
  /**
   * <p>An array of objects that describe the metric data returned.</p>
   */
  metricData?: MetricDatapoint[];

  /**
   * <p>The name of the metric returned.</p>
   */
  metricName?: RelationalDatabaseMetricName | string;
}

export namespace GetRelationalDatabaseMetricDataResult {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseMetricDataResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRelationalDatabaseMetricDataResult =>
    __isa(o, "GetRelationalDatabaseMetricDataResult");
}

export interface GetRelationalDatabaseParametersRequest {
  __type?: "GetRelationalDatabaseParametersRequest";
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabaseParameters</code>
   *       request. If your results are paginated, the response will return a next page token that you
   *       can specify as the page token in a subsequent request.</p>
   */
  pageToken?: string;

  /**
   * <p>The name of your database for which to get parameters.</p>
   */
  relationalDatabaseName: string | undefined;
}

export namespace GetRelationalDatabaseParametersRequest {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseParametersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRelationalDatabaseParametersRequest =>
    __isa(o, "GetRelationalDatabaseParametersRequest");
}

export interface GetRelationalDatabaseParametersResult {
  __type?: "GetRelationalDatabaseParametersResult";
  /**
   * <p>The token to advance to the next page of resutls from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another
   *         <code>GetRelationalDatabaseParameters</code> request and specify the next page token using
   *       the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;

  /**
   * <p>An object describing the result of your get relational database parameters request.</p>
   */
  parameters?: RelationalDatabaseParameter[];
}

export namespace GetRelationalDatabaseParametersResult {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseParametersResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRelationalDatabaseParametersResult =>
    __isa(o, "GetRelationalDatabaseParametersResult");
}

export interface GetRelationalDatabaseRequest {
  __type?: "GetRelationalDatabaseRequest";
  /**
   * <p>The name of the database that you are looking up.</p>
   */
  relationalDatabaseName: string | undefined;
}

export namespace GetRelationalDatabaseRequest {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRelationalDatabaseRequest => __isa(o, "GetRelationalDatabaseRequest");
}

export interface GetRelationalDatabaseResult {
  __type?: "GetRelationalDatabaseResult";
  /**
   * <p>An object describing the specified database.</p>
   */
  relationalDatabase?: RelationalDatabase;
}

export namespace GetRelationalDatabaseResult {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRelationalDatabaseResult => __isa(o, "GetRelationalDatabaseResult");
}

export interface GetRelationalDatabaseSnapshotRequest {
  __type?: "GetRelationalDatabaseSnapshotRequest";
  /**
   * <p>The name of the database snapshot for which to get information.</p>
   */
  relationalDatabaseSnapshotName: string | undefined;
}

export namespace GetRelationalDatabaseSnapshotRequest {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseSnapshotRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRelationalDatabaseSnapshotRequest =>
    __isa(o, "GetRelationalDatabaseSnapshotRequest");
}

export interface GetRelationalDatabaseSnapshotResult {
  __type?: "GetRelationalDatabaseSnapshotResult";
  /**
   * <p>An object describing the specified database snapshot.</p>
   */
  relationalDatabaseSnapshot?: RelationalDatabaseSnapshot;
}

export namespace GetRelationalDatabaseSnapshotResult {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseSnapshotResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRelationalDatabaseSnapshotResult =>
    __isa(o, "GetRelationalDatabaseSnapshotResult");
}

export interface GetRelationalDatabaseSnapshotsRequest {
  __type?: "GetRelationalDatabaseSnapshotsRequest";
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabaseSnapshots</code>
   *       request. If your results are paginated, the response will return a next page token that you
   *       can specify as the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetRelationalDatabaseSnapshotsRequest {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseSnapshotsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRelationalDatabaseSnapshotsRequest =>
    __isa(o, "GetRelationalDatabaseSnapshotsRequest");
}

export interface GetRelationalDatabaseSnapshotsResult {
  __type?: "GetRelationalDatabaseSnapshotsResult";
  /**
   * <p>The token to advance to the next page of resutls from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another
   *         <code>GetRelationalDatabaseSnapshots</code> request and specify the next page token using
   *       the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;

  /**
   * <p>An object describing the result of your get relational database snapshots request.</p>
   */
  relationalDatabaseSnapshots?: RelationalDatabaseSnapshot[];
}

export namespace GetRelationalDatabaseSnapshotsResult {
  export const filterSensitiveLog = (obj: GetRelationalDatabaseSnapshotsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRelationalDatabaseSnapshotsResult =>
    __isa(o, "GetRelationalDatabaseSnapshotsResult");
}

export interface GetRelationalDatabasesRequest {
  __type?: "GetRelationalDatabasesRequest";
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabases</code> request. If
   *       your results are paginated, the response will return a next page token that you can specify as
   *       the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetRelationalDatabasesRequest {
  export const filterSensitiveLog = (obj: GetRelationalDatabasesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRelationalDatabasesRequest => __isa(o, "GetRelationalDatabasesRequest");
}

export interface GetRelationalDatabasesResult {
  __type?: "GetRelationalDatabasesResult";
  /**
   * <p>An object describing the result of your get relational databases request.</p>
   */
  relationalDatabases?: RelationalDatabase[];

  /**
   * <p>The token to advance to the next page of resutls from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetRelationalDatabases</code>
   *       request and specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetRelationalDatabasesResult {
  export const filterSensitiveLog = (obj: GetRelationalDatabasesResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRelationalDatabasesResult => __isa(o, "GetRelationalDatabasesResult");
}

export interface GetStaticIpRequest {
  __type?: "GetStaticIpRequest";
  /**
   * <p>The name of the static IP in Lightsail.</p>
   */
  staticIpName: string | undefined;
}

export namespace GetStaticIpRequest {
  export const filterSensitiveLog = (obj: GetStaticIpRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetStaticIpRequest => __isa(o, "GetStaticIpRequest");
}

export interface GetStaticIpResult {
  __type?: "GetStaticIpResult";
  /**
   * <p>An array of key-value pairs containing information about the requested static IP.</p>
   */
  staticIp?: StaticIp;
}

export namespace GetStaticIpResult {
  export const filterSensitiveLog = (obj: GetStaticIpResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetStaticIpResult => __isa(o, "GetStaticIpResult");
}

export interface GetStaticIpsRequest {
  __type?: "GetStaticIpsRequest";
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetStaticIps</code> request. If your results
   *       are paginated, the response will return a next page token that you can specify as the page
   *       token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetStaticIpsRequest {
  export const filterSensitiveLog = (obj: GetStaticIpsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetStaticIpsRequest => __isa(o, "GetStaticIpsRequest");
}

export interface GetStaticIpsResult {
  __type?: "GetStaticIpsResult";
  /**
   * <p>An array of key-value pairs containing information about your get static IPs
   *       request.</p>
   */
  staticIps?: StaticIp[];

  /**
   * <p>The token to advance to the next page of resutls from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetStaticIps</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetStaticIpsResult {
  export const filterSensitiveLog = (obj: GetStaticIpsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetStaticIpsResult => __isa(o, "GetStaticIpsResult");
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
 *
 *
 *
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
  __type?: "HeaderObject";
  /**
   * <p>The specific headers to forward to your distribution's origin.</p>
   */
  headersAllowList?: (HeaderEnum | string)[];

  /**
   * <p>The headers that you want your distribution to forward to your origin and base caching
   *       on.</p>
   *
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
}

export namespace HeaderObject {
  export const filterSensitiveLog = (obj: HeaderObject): any => ({
    ...obj,
  });
  export const isa = (o: any): o is HeaderObject => __isa(o, "HeaderObject");
}

/**
 * <p>Describes the public SSH host keys or the RDP certificate.</p>
 */
export interface HostKeyAttributes {
  __type?: "HostKeyAttributes";
  /**
   * <p>The SSH host key algorithm or the RDP certificate format.</p>
   *          <p>For SSH host keys, the algorithm may be <code>ssh-rsa</code>,
   *         <code>ecdsa-sha2-nistp256</code>, <code>ssh-ed25519</code>, etc. For RDP certificates, the
   *       algorithm is always <code>x509-cert</code>.</p>
   */
  algorithm?: string;

  /**
   * <p>The returned RDP certificate is not valid after this point in time.</p>
   *          <p>This value is listed only for RDP certificates.</p>
   */
  notValidAfter?: Date;

  /**
   * <p>The public SSH host key or the RDP certificate.</p>
   */
  publicKey?: string;

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
   * <p>The returned RDP certificate is valid after this point in time.</p>
   *          <p>This value is listed only for RDP certificates.</p>
   */
  notValidBefore?: Date;

  /**
   * <p>The time that the SSH host key or RDP certificate was recorded by Lightsail.</p>
   */
  witnessedAt?: Date;
}

export namespace HostKeyAttributes {
  export const filterSensitiveLog = (obj: HostKeyAttributes): any => ({
    ...obj,
  });
  export const isa = (o: any): o is HostKeyAttributes => __isa(o, "HostKeyAttributes");
}

export interface ImportKeyPairRequest {
  __type?: "ImportKeyPairRequest";
  /**
   * <p>A base64-encoded public key of the <code>ssh-rsa</code> type.</p>
   */
  publicKeyBase64: string | undefined;

  /**
   * <p>The name of the key pair for which you want to import the public key.</p>
   */
  keyPairName: string | undefined;
}

export namespace ImportKeyPairRequest {
  export const filterSensitiveLog = (obj: ImportKeyPairRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ImportKeyPairRequest => __isa(o, "ImportKeyPairRequest");
}

export interface ImportKeyPairResult {
  __type?: "ImportKeyPairResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace ImportKeyPairResult {
  export const filterSensitiveLog = (obj: ImportKeyPairResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ImportKeyPairResult => __isa(o, "ImportKeyPairResult");
}

/**
 * <p>Describes the origin resource of an Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *
 *          <p>An origin can be a Lightsail instance or load balancer. A distribution pulls content
 *       from an origin, caches it, and serves it to viewers via a worldwide network of edge
 *       servers.</p>
 */
export interface InputOrigin {
  __type?: "InputOrigin";
  /**
   * <p>The AWS Region name of the origin resource.</p>
   */
  regionName?: RegionName | string;

  /**
   * <p>The protocol that your Amazon Lightsail distribution uses when establishing a connection
   *       with your origin to pull content.</p>
   */
  protocolPolicy?: OriginProtocolPolicyEnum | string;

  /**
   * <p>The name of the origin resource.</p>
   */
  name?: string;
}

export namespace InputOrigin {
  export const filterSensitiveLog = (obj: InputOrigin): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InputOrigin => __isa(o, "InputOrigin");
}

/**
 * <p>Describes an instance (a virtual private server).</p>
 */
export interface Instance {
  __type?: "Instance";
  /**
   * <p>A Boolean value indicating whether this instance has a static IP assigned to it.</p>
   */
  isStaticIp?: boolean;

  /**
   * <p>Information about the public ports and monthly data transfer rates for the
   *       instance.</p>
   */
  networking?: InstanceNetworking;

  /**
   * <p>The timestamp when the instance was created (e.g., <code>1479734909.17</code>) in Unix
   *       time format.</p>
   */
  createdAt?: Date;

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
   * <p>The user name for connecting to the instance (e.g., <code>ec2-user</code>).</p>
   */
  username?: string;

  /**
   * <p>The size of the vCPU and the amount of RAM for the instance.</p>
   */
  hardware?: InstanceHardware;

  /**
   * <p>The name the user gave the instance (e.g., <code>Amazon_Linux-1GB-Ohio-1</code>).</p>
   */
  name?: string;

  /**
   * <p>The type of resource (usually <code>Instance</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The IPv6 address of the instance.</p>
   */
  ipv6Address?: string;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
   *         Dev Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The private IP address of the instance.</p>
   */
  privateIpAddress?: string;

  /**
   * <p>The status code and the state (e.g., <code>running</code>) for the instance.</p>
   */
  state?: InstanceState;

  /**
   * <p>The region name and Availability Zone where the instance is located.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The public IP address of the instance.</p>
   */
  publicIpAddress?: string;

  /**
   * <p>The friendly name of the blueprint (e.g., <code>Amazon Linux</code>).</p>
   */
  blueprintName?: string;

  /**
   * <p>An array of objects representing the add-ons enabled on the instance.</p>
   */
  addOns?: AddOn[];

  /**
   * <p>The bundle for the instance (e.g., <code>micro_1_0</code>).</p>
   */
  bundleId?: string;

  /**
   * <p>The name of the SSH key being used to connect to the instance (e.g.,
   *         <code>LightsailDefaultKeyPair</code>).</p>
   */
  sshKeyName?: string;

  /**
   * <p>The blueprint ID (e.g., <code>os_amlinux_2016_03</code>).</p>
   */
  blueprintId?: string;
}

export namespace Instance {
  export const filterSensitiveLog = (obj: Instance): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Instance => __isa(o, "Instance");
}

/**
 * <p>The parameters for gaining temporary access to one of your Amazon Lightsail
 *       instances.</p>
 */
export interface InstanceAccessDetails {
  __type?: "InstanceAccessDetails";
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
   * <p>For SSH access, the date on which the temporary keys expire.</p>
   */
  expiresAt?: Date;

  /**
   * <p>The public IP address of the Amazon Lightsail instance.</p>
   */
  ipAddress?: string;

  /**
   * <p>The protocol for these Amazon Lightsail instance access details.</p>
   */
  protocol?: InstanceAccessProtocol | string;

  /**
   * <p>Describes the public SSH host keys or the RDP certificate.</p>
   */
  hostKeys?: HostKeyAttributes[];

  /**
   * <p>The name of this Amazon Lightsail instance.</p>
   */
  instanceName?: string;

  /**
   * <p>The user name to use when logging in to the Amazon Lightsail instance.</p>
   */
  username?: string;

  /**
   * <p>For SSH access, the temporary private key. For OpenSSH clients (e.g., command line SSH),
   *       you should save this value to <code>tempkey</code>).</p>
   */
  privateKey?: string;

  /**
   * <p>For a Windows Server-based instance, an object with the data you can use to retrieve your
   *       password. This is only needed if <code>password</code> is empty and the instance is not new
   *       (and therefore the password is not ready yet). When you create an instance, it can take up to
   *       15 minutes for the instance to be ready.</p>
   */
  passwordData?: PasswordData;

  /**
   * <p>For SSH access, the public key to use when accessing your instance For OpenSSH clients
   *       (e.g., command line SSH), you should save this value to <code>tempkey-cert.pub</code>.</p>
   */
  certKey?: string;
}

export namespace InstanceAccessDetails {
  export const filterSensitiveLog = (obj: InstanceAccessDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InstanceAccessDetails => __isa(o, "InstanceAccessDetails");
}

export enum InstanceAccessProtocol {
  rdp = "rdp",
  ssh = "ssh",
}

/**
 * <p>Describes the Amazon Elastic Compute Cloud instance and related resources to be created using the
 *         <code>create cloud formation stack</code> operation.</p>
 */
export interface InstanceEntry {
  __type?: "InstanceEntry";
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
   *          <p>The following configuration options are available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DEFAULT</code> - Use the default firewall settings from the Lightsail instance
   *           blueprint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSTANCE</code> - Use the configured firewall settings from the source
   *           Lightsail instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - Use the default Amazon EC2 security group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CLOSED</code> - All ports closed.</p>
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
  export const filterSensitiveLog = (obj: InstanceEntry): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InstanceEntry => __isa(o, "InstanceEntry");
}

/**
 * <p>Describes the hardware for the instance.</p>
 */
export interface InstanceHardware {
  __type?: "InstanceHardware";
  /**
   * <p>The disks attached to the instance.</p>
   */
  disks?: Disk[];

  /**
   * <p>The number of vCPUs the instance has.</p>
   */
  cpuCount?: number;

  /**
   * <p>The amount of RAM in GB on the instance (e.g., <code>1.0</code>).</p>
   */
  ramSizeInGb?: number;
}

export namespace InstanceHardware {
  export const filterSensitiveLog = (obj: InstanceHardware): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InstanceHardware => __isa(o, "InstanceHardware");
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

export enum InstanceHealthState {
  Draining = "draining",
  Healthy = "healthy",
  Initial = "initial",
  Unavailable = "unavailable",
  Unhealthy = "unhealthy",
  Unused = "unused",
}

/**
 * <p>Describes information about the health of the instance.</p>
 */
export interface InstanceHealthSummary {
  __type?: "InstanceHealthSummary";
  /**
   * <p>The name of the Lightsail instance for which you are requesting health check
   *       data.</p>
   */
  instanceName?: string;

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

  /**
   * <p>Describes the overall instance health. Valid values are below.</p>
   */
  instanceHealth?: InstanceHealthState | string;
}

export namespace InstanceHealthSummary {
  export const filterSensitiveLog = (obj: InstanceHealthSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InstanceHealthSummary => __isa(o, "InstanceHealthSummary");
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

/**
 * <p>Describes monthly data transfer rates and port information for an instance.</p>
 */
export interface InstanceNetworking {
  __type?: "InstanceNetworking";
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
  export const filterSensitiveLog = (obj: InstanceNetworking): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InstanceNetworking => __isa(o, "InstanceNetworking");
}

export enum InstancePlatform {
  LinuxUnix = "LINUX_UNIX",
  Windows = "WINDOWS",
}

/**
 * <p>Describes information about ports for an Amazon Lightsail instance.</p>
 */
export interface InstancePortInfo {
  __type?: "InstancePortInfo";
  /**
   * <p>An alias that defines access for a preconfigured range of IP addresses.</p>
   *          <p>The only alias currently supported is <code>lightsail-connect</code>, which allows IP
   *       addresses of the browser-based RDP/SSH client in the Lightsail console to connect to your
   *       instance.</p>
   */
  cidrListAliases?: string[];

  /**
   * <p>The access direction (<code>inbound</code> or <code>outbound</code>).</p>
   *          <note>
   *             <p>Lightsail currently supports only <code>inbound</code> access direction.</p>
   *          </note>
   */
  accessDirection?: AccessDirection | string;

  /**
   * <p>The type of access (<code>Public</code> or <code>Private</code>).</p>
   */
  accessType?: PortAccessType | string;

  /**
   * <p>The common name of the port information.</p>
   */
  commonName?: string;

  /**
   * <p>The IP address, or range of IP addresses in CIDR notation, that are allowed to connect to
   *       an instance through the ports, and the protocol. Lightsail supports IPv4 addresses.</p>
   *          <p>For more information about CIDR block notation, see <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation">Classless
   *         Inter-Domain Routing</a> on <i>Wikipedia</i>.</p>
   */
  cidrs?: string[];

  /**
   * <p>The last port in a range of open ports on an instance.</p>
   *          <p>Allowed ports:</p>
   *          <ul>
   *             <li>
   *                <p>TCP and UDP - <code>0</code> to <code>65535</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ICMP - The ICMP code. For example, specify <code>8</code> as the <code>fromPort</code>
   *           (ICMP type), and <code>-1</code> as the <code>toPort</code> (ICMP code), to enable ICMP
   *           Ping. For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages">Control Messages</a> on <i>Wikipedia</i>.</p>
   *             </li>
   *          </ul>
   */
  toPort?: number;

  /**
   * <p>The first port in a range of open ports on an instance.</p>
   *          <p>Allowed ports:</p>
   *          <ul>
   *             <li>
   *                <p>TCP and UDP - <code>0</code> to <code>65535</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ICMP - The ICMP type. For example, specify <code>8</code> as the <code>fromPort</code>
   *           (ICMP type), and <code>-1</code> as the <code>toPort</code> (ICMP code), to enable ICMP
   *           Ping. For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages">Control Messages</a> on <i>Wikipedia</i>.</p>
   *             </li>
   *          </ul>
   */
  fromPort?: number;

  /**
   * <p>The location from which access is allowed. For example, <code>Anywhere (0.0.0.0/0)</code>,
   *       or <code>Custom</code> if a specific IP address or range of IP addresses is allowed.</p>
   */
  accessFrom?: string;

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
}

export namespace InstancePortInfo {
  export const filterSensitiveLog = (obj: InstancePortInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InstancePortInfo => __isa(o, "InstancePortInfo");
}

/**
 * <p>Describes open ports on an instance, the IP addresses allowed to connect to the instance
 *       through the ports, and the protocol.</p>
 */
export interface InstancePortState {
  __type?: "InstancePortState";
  /**
   * <p>An alias that defines access for a preconfigured range of IP addresses.</p>
   *          <p>The only alias currently supported is <code>lightsail-connect</code>, which allows IP
   *       addresses of the browser-based RDP/SSH client in the Lightsail console to connect to your
   *       instance.</p>
   */
  cidrListAliases?: string[];

  /**
   * <p>The IP address, or range of IP addresses in CIDR notation, that are allowed to connect to
   *       an instance through the ports, and the protocol. Lightsail supports IPv4 addresses.</p>
   *          <p>For more information about CIDR block notation, see <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation">Classless
   *         Inter-Domain Routing</a> on <i>Wikipedia</i>.</p>
   */
  cidrs?: string[];

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
   * <p>The last port in a range of open ports on an instance.</p>
   *          <p>Allowed ports:</p>
   *          <ul>
   *             <li>
   *                <p>TCP and UDP - <code>0</code> to <code>65535</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ICMP - The ICMP code. For example, specify <code>8</code> as the <code>fromPort</code>
   *           (ICMP type), and <code>-1</code> as the <code>toPort</code> (ICMP code), to enable ICMP
   *           Ping. For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages">Control Messages</a> on <i>Wikipedia</i>.</p>
   *             </li>
   *          </ul>
   */
  toPort?: number;

  /**
   * <p>The first port in a range of open ports on an instance.</p>
   *          <p>Allowed ports:</p>
   *          <ul>
   *             <li>
   *                <p>TCP and UDP - <code>0</code> to <code>65535</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ICMP - The ICMP type. For example, specify <code>8</code> as the <code>fromPort</code>
   *           (ICMP type), and <code>-1</code> as the <code>toPort</code> (ICMP code), to enable ICMP
   *           Ping. For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages">Control Messages</a> on <i>Wikipedia</i>.</p>
   *             </li>
   *          </ul>
   */
  fromPort?: number;
}

export namespace InstancePortState {
  export const filterSensitiveLog = (obj: InstancePortState): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InstancePortState => __isa(o, "InstancePortState");
}

/**
 * <p>Describes an instance snapshot.</p>
 */
export interface InstanceSnapshot {
  __type?: "InstanceSnapshot";
  /**
   * <p>The size in GB of the SSD.</p>
   */
  sizeInGb?: number;

  /**
   * <p>The state the snapshot is in.</p>
   */
  state?: InstanceSnapshotState | string;

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
   * <p>A Boolean value indicating whether the snapshot was created from an automatic
   *       snapshot.</p>
   */
  isFromAutoSnapshot?: boolean;

  /**
   * <p>The progress of the snapshot.</p>
   */
  progress?: string;

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
   * <p>The support code. Include this code in your email to support when you have questions about
   *       an instance or another resource in Lightsail. This code enables our support team to look up
   *       your Lightsail information more easily.</p>
   */
  supportCode?: string;

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
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
   *         Dev Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The blueprint ID from which you created the snapshot (e.g., <code>os_debian_8_3</code>). A
   *       blueprint is a virtual private server (or <i>instance</i>) image used to create
   *       instances quickly.</p>
   */
  fromBlueprintId?: string;

  /**
   * <p>An array of disk objects containing information about all block storage disks.</p>
   */
  fromAttachedDisks?: Disk[];

  /**
   * <p>The bundle ID from which you created the snapshot (e.g., <code>micro_1_0</code>).</p>
   */
  fromBundleId?: string;
}

export namespace InstanceSnapshot {
  export const filterSensitiveLog = (obj: InstanceSnapshot): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InstanceSnapshot => __isa(o, "InstanceSnapshot");
}

/**
 * <p>Describes an instance snapshot.</p>
 */
export interface InstanceSnapshotInfo {
  __type?: "InstanceSnapshotInfo";
  /**
   * <p>The blueprint ID from which the source instance (e.g., <code>os_debian_8_3</code>).</p>
   */
  fromBlueprintId?: string;

  /**
   * <p>A list of objects describing the disks that were attached to the source instance.</p>
   */
  fromDiskInfo?: DiskInfo[];

  /**
   * <p>The bundle ID from which the source instance was created (e.g.,
   *       <code>micro_1_0</code>).</p>
   */
  fromBundleId?: string;
}

export namespace InstanceSnapshotInfo {
  export const filterSensitiveLog = (obj: InstanceSnapshotInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InstanceSnapshotInfo => __isa(o, "InstanceSnapshotInfo");
}

export enum InstanceSnapshotState {
  Available = "available",
  Error = "error",
  Pending = "pending",
}

/**
 * <p>Describes the virtual private server (or <i>instance</i>) status.</p>
 */
export interface InstanceState {
  __type?: "InstanceState";
  /**
   * <p>The state of the instance (e.g., <code>running</code> or <code>pending</code>).</p>
   */
  name?: string;

  /**
   * <p>The status code for the instance.</p>
   */
  code?: number;
}

export namespace InstanceState {
  export const filterSensitiveLog = (obj: InstanceState): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InstanceState => __isa(o, "InstanceState");
}

/**
 * <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set
 *         your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p>
 *          </note>
 */
export interface InvalidInputException extends __SmithyException, $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  tip?: string;
  code?: string;
  docs?: string;
  message?: string;
}

export namespace InvalidInputException {
  export const filterSensitiveLog = (obj: InvalidInputException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidInputException => __isa(o, "InvalidInputException");
}

export interface IsVpcPeeredRequest {
  __type?: "IsVpcPeeredRequest";
}

export namespace IsVpcPeeredRequest {
  export const filterSensitiveLog = (obj: IsVpcPeeredRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is IsVpcPeeredRequest => __isa(o, "IsVpcPeeredRequest");
}

export interface IsVpcPeeredResult {
  __type?: "IsVpcPeeredResult";
  /**
   * <p>Returns <code>true</code> if the Lightsail VPC is peered; otherwise,
   *       <code>false</code>.</p>
   */
  isPeered?: boolean;
}

export namespace IsVpcPeeredResult {
  export const filterSensitiveLog = (obj: IsVpcPeeredResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is IsVpcPeeredResult => __isa(o, "IsVpcPeeredResult");
}

/**
 * <p>Describes the SSH key pair.</p>
 */
export interface KeyPair {
  __type?: "KeyPair";
  /**
   * <p>The friendly name of the SSH key pair.</p>
   */
  name?: string;

  /**
   * <p>The RSA fingerprint of the key pair.</p>
   */
  fingerprint?: string;

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
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
   *         Dev Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The resource type (usually <code>KeyPair</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The region name and Availability Zone where the key pair was created.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The timestamp when the key pair was created (e.g., <code>1479816991.349</code>).</p>
   */
  createdAt?: Date;
}

export namespace KeyPair {
  export const filterSensitiveLog = (obj: KeyPair): any => ({
    ...obj,
  });
  export const isa = (o: any): o is KeyPair => __isa(o, "KeyPair");
}

/**
 * <p>Describes an Amazon Lightsail content delivery network (CDN) distribution.</p>
 */
export interface LightsailDistribution {
  __type?: "LightsailDistribution";
  /**
   * <p>An array of objects that describe the per-path cache behavior of the distribution.</p>
   */
  cacheBehaviors?: CacheBehaviorPerPath[];

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
   * <p>The status of the distribution.</p>
   */
  status?: string;

  /**
   * <p>An object that describes the origin resource of the distribution, such as a Lightsail
   *       instance or load balancer.</p>
   *
   *          <p>The distribution pulls, caches, and serves content from the origin.</p>
   */
  origin?: Origin;

  /**
   * <p>An object that describes the cache behavior settings of the distribution.</p>
   */
  cacheBehaviorSettings?: CacheSettings;

  /**
   * <p>The public DNS of the origin.</p>
   */
  originPublicDNS?: string;

  /**
   * <p>The Lightsail resource type (e.g., <code>Distribution</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>An object that describes the default cache behavior of the distribution.</p>
   */
  defaultCacheBehavior?: CacheBehavior;

  /**
   * <p>The timestamp when the distribution was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the distribution.</p>
   */
  arn?: string;

  /**
   * <p>Indicates whether the distribution is enabled.</p>
   */
  isEnabled?: boolean;

  /**
   * <p>The name of the SSL/TLS certificate attached to the distribution, if any.</p>
   */
  certificateName?: string;

  /**
   * <p>The domain name of the distribution.</p>
   */
  domainName?: string;

  /**
   * <p>Indicates whether the bundle that is currently applied to your distribution, specified
   *       using the <code>distributionName</code> parameter, can be changed to another bundle.</p>
   *
   *          <p>Use the <code>UpdateDistributionBundle</code> action to change your distribution's
   *       bundle.</p>
   */
  ableToUpdateBundle?: boolean;

  /**
   * <p>The name of the distribution.</p>
   */
  name?: string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       your Lightsail distribution. This code enables our support team to look up your Lightsail
   *       information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The alternate domain names of the distribution.</p>
   */
  alternativeDomainNames?: string[];

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
   *         Dev Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The ID of the bundle currently applied to the distribution.</p>
   */
  bundleId?: string;
}

export namespace LightsailDistribution {
  export const filterSensitiveLog = (obj: LightsailDistribution): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LightsailDistribution => __isa(o, "LightsailDistribution");
}

/**
 * <p>Describes the Lightsail load balancer.</p>
 */
export interface LoadBalancer {
  __type?: "LoadBalancer";
  /**
   * <p>The path you specified to perform your health checks. If no path is specified, the load
   *       balancer tries to make a request to the default (root) page.</p>
   */
  healthCheckPath?: string;

  /**
   * <p>The date when your load balancer was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>An array of LoadBalancerTlsCertificateSummary objects that provide additional information
   *       about the SSL/TLS certificates. For example, if <code>true</code>, the certificate is attached
   *       to the load balancer.</p>
   */
  tlsCertificateSummaries?: LoadBalancerTlsCertificateSummary[];

  /**
   * <p>The protocol you have enabled for your load balancer. Valid values are below.</p>
   *          <p>You can't just have <code>HTTP_HTTPS</code>, but you can have just
   *       <code>HTTP</code>.</p>
   */
  protocol?: LoadBalancerProtocol | string;

  /**
   * <p>An array of InstanceHealthSummary objects describing the health of the load
   *       balancer.</p>
   */
  instanceHealthSummary?: InstanceHealthSummary[];

  /**
   * <p>The resource type (e.g., <code>LoadBalancer</code>.</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The name of the load balancer (e.g., <code>my-load-balancer</code>).</p>
   */
  name?: string;

  /**
   * <p>The port where the load balancer will direct traffic to your Lightsail instances. For
   *       HTTP traffic, it's port 80. For HTTPS traffic, it's port 443.</p>
   */
  instancePort?: number;

  /**
   * <p>The status of your load balancer. Valid values are below.</p>
   */
  state?: LoadBalancerState | string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about
   *       your Lightsail load balancer. This code enables our support team to look up your Lightsail
   *       information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  arn?: string;

  /**
   * <p>The DNS name of your Lightsail load balancer.</p>
   */
  dnsName?: string;

  /**
   * <p>An array of public port settings for your load balancer. For HTTP, use port 80. For HTTPS,
   *       use port 443.</p>
   */
  publicPorts?: number[];

  /**
   * <p>The AWS Region where your load balancer was created (e.g., <code>us-east-2a</code>).
   *       Lightsail automatically creates your load balancer across Availability Zones.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
   *         Dev Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>A string to string map of the configuration options for your load balancer. Valid values
   *       are listed below.</p>
   */
  configurationOptions?: { [key: string]: string };
}

export namespace LoadBalancer {
  export const filterSensitiveLog = (obj: LoadBalancer): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LoadBalancer => __isa(o, "LoadBalancer");
}

export enum LoadBalancerAttributeName {
  HealthCheckPath = "HealthCheckPath",
  SessionStickinessEnabled = "SessionStickinessEnabled",
  SessionStickiness_LB_CookieDurationSeconds = "SessionStickiness_LB_CookieDurationSeconds",
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
 * <p>Describes a load balancer SSL/TLS certificate.</p>
 *          <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>
 */
export interface LoadBalancerTlsCertificate {
  __type?: "LoadBalancerTlsCertificate";
  /**
   * <p>The issuer of the certificate.</p>
   */
  issuer?: string;

  /**
   * <p>The name of the entity that is associated with the public key contained in the
   *       certificate.</p>
   */
  subject?: string;

  /**
   * <p>The reason the certificate was revoked. This value is present only when the certificate
   *       status is <code>REVOKED</code>.</p>
   */
  revocationReason?: LoadBalancerTlsCertificateRevocationReason | string;

  /**
   * <p>The timestamp when the SSL/TLS certificate expires.</p>
   */
  notAfter?: Date;

  /**
   * <p>An array of strings that specify the alternate domains (e.g., <code>example2.com</code>)
   *       and subdomains (e.g., <code>blog.example.com</code>) for the certificate.</p>
   */
  subjectAlternativeNames?: string[];

  /**
   * <p>The algorithm used to generate the key pair (the public and private key).</p>
   */
  keyAlgorithm?: string;

  /**
   * <p>The timestamp when the SSL/TLS certificate is first valid.</p>
   */
  notBefore?: Date;

  /**
   * <p>An array of LoadBalancerTlsCertificateDomainValidationRecord objects describing the
   *       records.</p>
   */
  domainValidationRecords?: LoadBalancerTlsCertificateDomainValidationRecord[];

  /**
   * <p>The load balancer name where your SSL/TLS certificate is attached.</p>
   */
  loadBalancerName?: string;

  /**
   * <p>The time when you created your SSL/TLS certificate.</p>
   */
  createdAt?: Date;

  /**
   * <p>An object that describes the status of the certificate renewal managed by
   *       Lightsail.</p>
   */
  renewalSummary?: LoadBalancerTlsCertificateRenewalSummary;

  /**
   * <p>The time when the SSL/TLS certificate was issued.</p>
   */
  issuedAt?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the SSL/TLS certificate.</p>
   */
  arn?: string;

  /**
   * <p>The timestamp when the certificate was revoked. This value is present only when the
   *       certificate status is <code>REVOKED</code>.</p>
   */
  revokedAt?: Date;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
   *         Dev Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The AWS Region and Availability Zone where you created your certificate.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The algorithm that was used to sign the certificate.</p>
   */
  signatureAlgorithm?: string;

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
   *           is reported as suspicious, see <a href="https://www.google.com/webmasters/hacked/?hl=en">Google Help for Hacked
   *             Websites</a> to learn what you can do.</p>
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
   * <p>The domain name for your SSL/TLS certificate.</p>
   */
  domainName?: string;

  /**
   * <p>The serial number of the certificate.</p>
   */
  serial?: string;

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
   * <p>The support code. Include this code in your email to support when you have questions about
   *       your Lightsail load balancer or SSL/TLS certificate. This code enables our support team to
   *       look up your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The name of the SSL/TLS certificate (e.g., <code>my-certificate</code>).</p>
   */
  name?: string;
}

export namespace LoadBalancerTlsCertificate {
  export const filterSensitiveLog = (obj: LoadBalancerTlsCertificate): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LoadBalancerTlsCertificate => __isa(o, "LoadBalancerTlsCertificate");
}

export enum LoadBalancerTlsCertificateDomainStatus {
  Failed = "FAILED",
  PendingValidation = "PENDING_VALIDATION",
  Success = "SUCCESS",
}

/**
 * <p>Contains information about the domain names on an SSL/TLS certificate that you will use to
 *       validate domain ownership.</p>
 */
export interface LoadBalancerTlsCertificateDomainValidationOption {
  __type?: "LoadBalancerTlsCertificateDomainValidationOption";
  /**
   * <p>The status of the domain validation. Valid values are listed below.</p>
   */
  validationStatus?: LoadBalancerTlsCertificateDomainStatus | string;

  /**
   * <p>The fully qualified domain name in the certificate request.</p>
   */
  domainName?: string;
}

export namespace LoadBalancerTlsCertificateDomainValidationOption {
  export const filterSensitiveLog = (obj: LoadBalancerTlsCertificateDomainValidationOption): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LoadBalancerTlsCertificateDomainValidationOption =>
    __isa(o, "LoadBalancerTlsCertificateDomainValidationOption");
}

/**
 * <p>Describes the validation record of each domain name in the SSL/TLS certificate.</p>
 */
export interface LoadBalancerTlsCertificateDomainValidationRecord {
  __type?: "LoadBalancerTlsCertificateDomainValidationRecord";
  /**
   * <p>The value for that type.</p>
   */
  value?: string;

  /**
   * <p>A fully qualified domain name in the certificate. For example,
   *       <code>example.com</code>.</p>
   */
  name?: string;

  /**
   * <p>The domain name against which your SSL/TLS certificate was validated.</p>
   */
  domainName?: string;

  /**
   * <p>The type of validation record. For example, <code>CNAME</code> for domain
   *       validation.</p>
   */
  type?: string;

  /**
   * <p>The validation status. Valid values are listed below.</p>
   */
  validationStatus?: LoadBalancerTlsCertificateDomainStatus | string;
}

export namespace LoadBalancerTlsCertificateDomainValidationRecord {
  export const filterSensitiveLog = (obj: LoadBalancerTlsCertificateDomainValidationRecord): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LoadBalancerTlsCertificateDomainValidationRecord =>
    __isa(o, "LoadBalancerTlsCertificateDomainValidationRecord");
}

export enum LoadBalancerTlsCertificateFailureReason {
  AdditionalVerificationRequired = "ADDITIONAL_VERIFICATION_REQUIRED",
  DomainNotAllowed = "DOMAIN_NOT_ALLOWED",
  InvalidPublicDomain = "INVALID_PUBLIC_DOMAIN",
  NoAvailableContacts = "NO_AVAILABLE_CONTACTS",
  Other = "OTHER",
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
 *
 *
 *
 *
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
  __type?: "LoadBalancerTlsCertificateRenewalSummary";
  /**
   * <p>Contains information about the validation of each domain name in the certificate, as it
   *       pertains to Lightsail's managed renewal. This is different from the initial validation that
   *       occurs as a result of the RequestCertificate request.</p>
   */
  domainValidationOptions?: LoadBalancerTlsCertificateDomainValidationOption[];

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
}

export namespace LoadBalancerTlsCertificateRenewalSummary {
  export const filterSensitiveLog = (obj: LoadBalancerTlsCertificateRenewalSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LoadBalancerTlsCertificateRenewalSummary =>
    __isa(o, "LoadBalancerTlsCertificateRenewalSummary");
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
 * <p>Provides a summary of SSL/TLS certificate metadata.</p>
 */
export interface LoadBalancerTlsCertificateSummary {
  __type?: "LoadBalancerTlsCertificateSummary";
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
  export const filterSensitiveLog = (obj: LoadBalancerTlsCertificateSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LoadBalancerTlsCertificateSummary => __isa(o, "LoadBalancerTlsCertificateSummary");
}

/**
 * <p>Describes a database log event.</p>
 */
export interface LogEvent {
  __type?: "LogEvent";
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
  export const filterSensitiveLog = (obj: LogEvent): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LogEvent => __isa(o, "LogEvent");
}

/**
 * <p>Describes the metric data point.</p>
 */
export interface MetricDatapoint {
  __type?: "MetricDatapoint";
  /**
   * <p>The maximum.</p>
   */
  maximum?: number;

  /**
   * <p>The sample count.</p>
   */
  sampleCount?: number;

  /**
   * <p>The timestamp (e.g., <code>1479816991.349</code>).</p>
   */
  timestamp?: Date;

  /**
   * <p>The unit. </p>
   */
  unit?: MetricUnit | string;

  /**
   * <p>The average.</p>
   */
  average?: number;

  /**
   * <p>The minimum.</p>
   */
  minimum?: number;

  /**
   * <p>The sum.</p>
   */
  sum?: number;
}

export namespace MetricDatapoint {
  export const filterSensitiveLog = (obj: MetricDatapoint): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MetricDatapoint => __isa(o, "MetricDatapoint");
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

export enum MetricStatistic {
  Average = "Average",
  Maximum = "Maximum",
  Minimum = "Minimum",
  SampleCount = "SampleCount",
  Sum = "Sum",
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
 * <p>Describes resource being monitored by an alarm.</p>
 *          <p>An alarm is a way to monitor your Amazon Lightsail resource metrics. For more information,
 *       see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms
 *         in Amazon Lightsail</a>.</p>
 */
export interface MonitoredResourceInfo {
  __type?: "MonitoredResourceInfo";
  /**
   * <p>The name of the Lightsail resource being monitored.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource being monitored.</p>
   */
  arn?: string;

  /**
   * <p>The Lightsail resource type of the resource being monitored.</p>
   *          <p>Instances, load balancers, and relational databases are the only Lightsail resources
   *       that can currently be monitored by alarms.</p>
   */
  resourceType?: ResourceType | string;
}

export namespace MonitoredResourceInfo {
  export const filterSensitiveLog = (obj: MonitoredResourceInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MonitoredResourceInfo => __isa(o, "MonitoredResourceInfo");
}

/**
 * <p>Describes the monthly data transfer in and out of your virtual private server (or
 *         <i>instance</i>).</p>
 */
export interface MonthlyTransfer {
  __type?: "MonthlyTransfer";
  /**
   * <p>The amount allocated per month (in GB).</p>
   */
  gbPerMonthAllocated?: number;
}

export namespace MonthlyTransfer {
  export const filterSensitiveLog = (obj: MonthlyTransfer): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MonthlyTransfer => __isa(o, "MonthlyTransfer");
}

export enum NetworkProtocol {
  ALL = "all",
  ICMP = "icmp",
  TCP = "tcp",
  UDP = "udp",
}

/**
 * <p>Lightsail throws this exception when it cannot find a resource.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  tip?: string;
  message?: string;
  docs?: string;
  code?: string;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NotFoundException => __isa(o, "NotFoundException");
}

export interface OpenInstancePublicPortsRequest {
  __type?: "OpenInstancePublicPortsRequest";
  /**
   * <p>The name of the instance for which to open ports.</p>
   */
  instanceName: string | undefined;

  /**
   * <p>An object to describe the ports to open for the specified instance.</p>
   */
  portInfo: PortInfo | undefined;
}

export namespace OpenInstancePublicPortsRequest {
  export const filterSensitiveLog = (obj: OpenInstancePublicPortsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OpenInstancePublicPortsRequest => __isa(o, "OpenInstancePublicPortsRequest");
}

export interface OpenInstancePublicPortsResult {
  __type?: "OpenInstancePublicPortsResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace OpenInstancePublicPortsResult {
  export const filterSensitiveLog = (obj: OpenInstancePublicPortsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OpenInstancePublicPortsResult => __isa(o, "OpenInstancePublicPortsResult");
}

/**
 * <p>Describes the API operation.</p>
 */
export interface Operation {
  __type?: "Operation";
  /**
   * <p>The timestamp when the status was changed (e.g., <code>1479816991.349</code>).</p>
   */
  statusChangedAt?: Date;

  /**
   * <p>The resource type. </p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The ID of the operation.</p>
   */
  id?: string;

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
   * <p>The resource name.</p>
   */
  resourceName?: string;

  /**
   * <p>The status of the operation. </p>
   */
  status?: OperationStatus | string;

  /**
   * <p>The error details.</p>
   */
  errorDetails?: string;

  /**
   * <p>The timestamp when the operation was initialized (e.g.,
   *       <code>1479816991.349</code>).</p>
   */
  createdAt?: Date;

  /**
   * <p>The error code.</p>
   */
  errorCode?: string;
}

export namespace Operation {
  export const filterSensitiveLog = (obj: Operation): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Operation => __isa(o, "Operation");
}

/**
 * <p>Lightsail throws this exception when an operation fails to execute.</p>
 */
export interface OperationFailureException extends __SmithyException, $MetadataBearer {
  name: "OperationFailureException";
  $fault: "client";
  code?: string;
  message?: string;
  tip?: string;
  docs?: string;
}

export namespace OperationFailureException {
  export const filterSensitiveLog = (obj: OperationFailureException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OperationFailureException => __isa(o, "OperationFailureException");
}

export enum OperationStatus {
  Completed = "Completed",
  Failed = "Failed",
  NotStarted = "NotStarted",
  Started = "Started",
  Succeeded = "Succeeded",
}

export enum OperationType {
  AllocateStaticIp = "AllocateStaticIp",
  AttachCertificateToDistribution = "AttachCertificateToDistribution",
  AttachDisk = "AttachDisk",
  AttachInstancesToLoadBalancer = "AttachInstancesToLoadBalancer",
  AttachLoadBalancerTlsCertificate = "AttachLoadBalancerTlsCertificate",
  AttachStaticIp = "AttachStaticIp",
  CloseInstancePublicPorts = "CloseInstancePublicPorts",
  CreateCertificate = "CreateCertificate",
  CreateContactMethod = "CreateContactMethod",
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
  DeleteCertificate = "DeleteCertificate",
  DeleteContactMethod = "DeleteContactMethod",
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
  ReleaseStaticIp = "ReleaseStaticIp",
  ResetDistributionCache = "ResetDistributionCache",
  SendContactMethodVerification = "SendContactMethodVerification",
  StartInstance = "StartInstance",
  StartRelationalDatabase = "StartRelationalDatabase",
  StopInstance = "StopInstance",
  StopRelationalDatabase = "StopRelationalDatabase",
  TestAlarm = "TestAlarm",
  UpdateDistribution = "UpdateDistribution",
  UpdateDistributionBundle = "UpdateDistributionBundle",
  UpdateDomainEntry = "UpdateDomainEntry",
  UpdateLoadBalancerAttribute = "UpdateLoadBalancerAttribute",
  UpdateRelationalDatabase = "UpdateRelationalDatabase",
  UpdateRelationalDatabaseParameters = "UpdateRelationalDatabaseParameters",
}

/**
 * <p>Describes the origin resource of an Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *
 *          <p>An origin can be a Lightsail instance or load balancer. A distribution pulls content
 *       from an origin, caches it, and serves it to viewers via a worldwide network of edge
 *       servers.</p>
 */
export interface Origin {
  __type?: "Origin";
  /**
   * <p>The AWS Region name of the origin resource.</p>
   */
  regionName?: RegionName | string;

  /**
   * <p>The protocol that your Amazon Lightsail distribution uses when establishing a connection
   *       with your origin to pull content.</p>
   */
  protocolPolicy?: OriginProtocolPolicyEnum | string;

  /**
   * <p>The name of the origin resource.</p>
   */
  name?: string;

  /**
   * <p>The resource type of the origin resource (e.g., <i>Instance</i>).</p>
   */
  resourceType?: ResourceType | string;
}

export namespace Origin {
  export const filterSensitiveLog = (obj: Origin): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Origin => __isa(o, "Origin");
}

export enum OriginProtocolPolicyEnum {
  HTTPOnly = "http-only",
  HTTPSOnly = "https-only",
}

/**
 * <p>The password data for the Windows Server-based instance, including the ciphertext and the
 *       key pair name.</p>
 */
export interface PasswordData {
  __type?: "PasswordData";
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
  export const filterSensitiveLog = (obj: PasswordData): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PasswordData => __isa(o, "PasswordData");
}

export interface PeerVpcRequest {
  __type?: "PeerVpcRequest";
}

export namespace PeerVpcRequest {
  export const filterSensitiveLog = (obj: PeerVpcRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PeerVpcRequest => __isa(o, "PeerVpcRequest");
}

export interface PeerVpcResult {
  __type?: "PeerVpcResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace PeerVpcResult {
  export const filterSensitiveLog = (obj: PeerVpcResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PeerVpcResult => __isa(o, "PeerVpcResult");
}

/**
 * <p>Describes a pending database maintenance action.</p>
 */
export interface PendingMaintenanceAction {
  __type?: "PendingMaintenanceAction";
  /**
   * <p>The effective date of the pending database maintenance action.</p>
   */
  currentApplyDate?: Date;

  /**
   * <p>The type of pending database maintenance action.</p>
   */
  action?: string;

  /**
   * <p>Additional detail about the pending database maintenance action.</p>
   */
  description?: string;
}

export namespace PendingMaintenanceAction {
  export const filterSensitiveLog = (obj: PendingMaintenanceAction): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PendingMaintenanceAction => __isa(o, "PendingMaintenanceAction");
}

/**
 * <p>Describes a pending database value modification.</p>
 */
export interface PendingModifiedRelationalDatabaseValues {
  __type?: "PendingModifiedRelationalDatabaseValues";
  /**
   * <p>The database engine version.</p>
   */
  engineVersion?: string;

  /**
   * <p>A Boolean value indicating whether automated backup retention is enabled.</p>
   */
  backupRetentionEnabled?: boolean;

  /**
   * <p>The password for the master user of the database.</p>
   */
  masterUserPassword?: string;
}

export namespace PendingModifiedRelationalDatabaseValues {
  export const filterSensitiveLog = (obj: PendingModifiedRelationalDatabaseValues): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PendingModifiedRelationalDatabaseValues =>
    __isa(o, "PendingModifiedRelationalDatabaseValues");
}

export enum PortAccessType {
  Private = "Private",
  Public = "Public",
}

/**
 * <p>Describes ports to open on an instance, the IP addresses allowed to connect to the
 *       instance through the ports, and the protocol.</p>
 */
export interface PortInfo {
  __type?: "PortInfo";
  /**
   * <p>An alias that defines access for a preconfigured range of IP addresses.</p>
   *          <p>The only alias currently supported is <code>lightsail-connect</code>, which allows IP
   *       addresses of the browser-based RDP/SSH client in the Lightsail console to connect to your
   *       instance.</p>
   */
  cidrListAliases?: string[];

  /**
   * <p>The IP address, or range of IP addresses in CIDR notation, that are allowed to connect to
   *       an instance through the ports, and the protocol. Lightsail supports IPv4 addresses.</p>
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
   * <p>The first port in a range of open ports on an instance.</p>
   *          <p>Allowed ports:</p>
   *          <ul>
   *             <li>
   *                <p>TCP and UDP - <code>0</code> to <code>65535</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ICMP - The ICMP type. For example, specify <code>8</code> as the <code>fromPort</code>
   *           (ICMP type), and <code>-1</code> as the <code>toPort</code> (ICMP code), to enable ICMP
   *           Ping. For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages">Control Messages</a> on <i>Wikipedia</i>.</p>
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
   *                <p>ICMP - The ICMP code. For example, specify <code>8</code> as the <code>fromPort</code>
   *           (ICMP type), and <code>-1</code> as the <code>toPort</code> (ICMP code), to enable ICMP
   *           Ping. For more information, see <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages">Control Messages</a> on <i>Wikipedia</i>.</p>
   *             </li>
   *          </ul>
   */
  toPort?: number;
}

export namespace PortInfo {
  export const filterSensitiveLog = (obj: PortInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PortInfo => __isa(o, "PortInfo");
}

export enum PortInfoSourceType {
  Closed = "CLOSED",
  Default = "DEFAULT",
  Instance = "INSTANCE",
  None = "NONE",
}

export enum PortState {
  Closed = "closed",
  Open = "open",
}

export interface PutAlarmRequest {
  __type?: "PutAlarmRequest";
  /**
   * <p>The name of the Lightsail resource that will be monitored.</p>
   *          <p>Instances, load balancers, and relational databases are the only Lightsail resources
   *       that can currently be monitored by alarms.</p>
   */
  monitoredResourceName: string | undefined;

  /**
   * <p>The alarm states that trigger a notification.</p>
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
   *          <p>When you specify a notification trigger, the <code>ALARM</code> state must be specified.
   *       The <code>INSUFFICIENT_DATA</code> and <code>OK</code> states can be specified in addition to
   *       the <code>ALARM</code> state.</p>
   *          <ul>
   *             <li>
   *                <p>If you specify <code>OK</code> as an alarm trigger, a notification is sent when the
   *           alarm switches from an <code>ALARM</code> or <code>INSUFFICIENT_DATA</code> alarm state to
   *           an <code>OK</code> state. This can be thought of as an <i>all clear</i>
   *           alarm notification.</p>
   *             </li>
   *             <li>
   *                <p>If you specify <code>INSUFFICIENT_DATA</code> as the alarm trigger, a notification is
   *           sent when the alarm switches from an <code>OK</code> or <code>ALARM</code> alarm state to
   *           an <code>INSUFFICIENT_DATA</code> state.</p>
   *             </li>
   *          </ul>
   *          <p>The notification trigger defaults to <code>ALARM</code> if you don't specify this
   *       parameter.</p>
   */
  notificationTriggers?: (AlarmState | string)[];

  /**
   * <p>The value against which the specified statistic is compared.</p>
   */
  threshold: number | undefined;

  /**
   * <p>Indicates whether the alarm is enabled.</p>
   *          <p>Notifications are enabled by default if you don't specify this parameter.</p>
   */
  notificationEnabled?: boolean;

  /**
   * <p>The number of most recent periods over which data is compared to the specified threshold.
   *       If you are setting an "M out of N" alarm, this value (<code>evaluationPeriods</code>) is the
   *       N.</p>
   *          <p>If you are setting an alarm that requires that a number of consecutive data points be
   *       breaching to trigger the alarm, this value specifies the rolling period of time in which data
   *       points are evaluated.</p>
   *          <p>Each evaluation period is five minutes long. For example, specify an evaluation period of
   *       24 to evaluate a metric over a rolling period of two hours.</p>
   *          <p>You can specify a minimum valuation period of 1 (5 minutes), and a maximum evaluation
   *       period of 288 (24 hours).</p>
   */
  evaluationPeriods: number | undefined;

  /**
   * <p>The name for the alarm. Specify the name of an existing alarm to update, and overwrite the
   *       previous configuration of the alarm.</p>
   */
  alarmName: string | undefined;

  /**
   * <p>The contact protocols to use for the alarm, such as <code>Email</code>, <code>SMS</code>
   *       (text messaging), or both.</p>
   *          <p>A notification is sent via the specified contact protocol if notifications are enabled for
   *       the alarm, and when the alarm is triggered.</p>
   *          <p>A notification is not sent if a contact protocol is not specified, if the specified
   *       contact protocol is not configured in the AWS Region, or if notifications are not enabled
   *       for the alarm using the <code>notificationEnabled</code> paramater.</p>
   *          <p>Use the <code>CreateContactMethod</code> action to configure a contact protocol in an
   *       AWS Region.</p>
   */
  contactProtocols?: (ContactProtocol | string)[];

  /**
   * <p>The name of the metric to associate with the alarm.</p>
   *          <p>You can configure up to two alarms per metric.</p>
   *          <p>The following metrics are available for each resource type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Instances</b>: <code>BurstCapacityPercentage</code>,
   *             <code>BurstCapacityTime</code>, <code>CPUUtilization</code>, <code>NetworkIn</code>,
   *             <code>NetworkOut</code>, <code>StatusCheckFailed</code>,
   *             <code>StatusCheckFailed_Instance</code>, and
   *           <code>StatusCheckFailed_System</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Load balancers</b>:
   *             <code>ClientTLSNegotiationErrorCount</code>, <code>HealthyHostCount</code>,
   *             <code>UnhealthyHostCount</code>, <code>HTTPCode_LB_4XX_Count</code>,
   *             <code>HTTPCode_LB_5XX_Count</code>, <code>HTTPCode_Instance_2XX_Count</code>,
   *             <code>HTTPCode_Instance_3XX_Count</code>, <code>HTTPCode_Instance_4XX_Count</code>,
   *             <code>HTTPCode_Instance_5XX_Count</code>, <code>InstanceResponseTime</code>,
   *             <code>RejectedConnectionCount</code>, and <code>RequestCount</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Relational databases</b>: <code>CPUUtilization</code>,
   *             <code>DatabaseConnections</code>, <code>DiskQueueDepth</code>,
   *             <code>FreeStorageSpace</code>, <code>NetworkReceiveThroughput</code>, and
   *             <code>NetworkTransmitThroughput</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about these metrics, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-resource-health-metrics#available-metrics">Metrics available in Lightsail</a>.</p>
   */
  metricName: MetricName | string | undefined;

  /**
   * <p>The arithmetic operation to use when comparing the specified statistic to the threshold.
   *       The specified statistic value is used as the first operand.</p>
   */
  comparisonOperator: ComparisonOperator | string | undefined;

  /**
   * <p>The number of data points that must be not within the specified threshold to trigger the
   *       alarm. If you are setting an "M out of N" alarm, this value (<code>datapointsToAlarm</code>)
   *       is the M.</p>
   */
  datapointsToAlarm?: number;

  /**
   * <p>Sets how this alarm will handle missing data points.</p>
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
   *          <p>If <code>treatMissingData</code> is not specified, the default behavior of
   *         <code>missing</code> is used.</p>
   */
  treatMissingData?: TreatMissingData | string;
}

export namespace PutAlarmRequest {
  export const filterSensitiveLog = (obj: PutAlarmRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutAlarmRequest => __isa(o, "PutAlarmRequest");
}

export interface PutAlarmResult {
  __type?: "PutAlarmResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace PutAlarmResult {
  export const filterSensitiveLog = (obj: PutAlarmResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutAlarmResult => __isa(o, "PutAlarmResult");
}

export interface PutInstancePublicPortsRequest {
  __type?: "PutInstancePublicPortsRequest";
  /**
   * <p>The name of the instance for which to open ports.</p>
   */
  instanceName: string | undefined;

  /**
   * <p>An array of objects to describe the ports to open for the specified instance.</p>
   */
  portInfos: PortInfo[] | undefined;
}

export namespace PutInstancePublicPortsRequest {
  export const filterSensitiveLog = (obj: PutInstancePublicPortsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutInstancePublicPortsRequest => __isa(o, "PutInstancePublicPortsRequest");
}

export interface PutInstancePublicPortsResult {
  __type?: "PutInstancePublicPortsResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace PutInstancePublicPortsResult {
  export const filterSensitiveLog = (obj: PutInstancePublicPortsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutInstancePublicPortsResult => __isa(o, "PutInstancePublicPortsResult");
}

/**
 * <p>Describes the query string parameters that an Amazon Lightsail content delivery network
 *       (CDN) distribution to bases caching on.</p>
 *
 *          <p>For the query strings that you specify, your distribution caches separate versions of the
 *       specified content based on the query string values in viewer
 *       requests.</p>
 */
export interface QueryStringObject {
  __type?: "QueryStringObject";
  /**
   * <p>The specific query strings that the distribution forwards to the origin.</p>
   *
   *          <p>Your distribution will cache content based on the specified query strings.</p>
   *
   *          <p>If the <code>option</code> parameter is true, then your distribution forwards all query
   *       strings, regardless of what you specify using the <code>queryStringsAllowList</code>
   *       parameter.</p>
   */
  queryStringsAllowList?: string[];

  /**
   * <p>Indicates whether the distribution forwards and caches based on query strings.</p>
   */
  option?: boolean;
}

export namespace QueryStringObject {
  export const filterSensitiveLog = (obj: QueryStringObject): any => ({
    ...obj,
  });
  export const isa = (o: any): o is QueryStringObject => __isa(o, "QueryStringObject");
}

export interface RebootInstanceRequest {
  __type?: "RebootInstanceRequest";
  /**
   * <p>The name of the instance to reboot.</p>
   */
  instanceName: string | undefined;
}

export namespace RebootInstanceRequest {
  export const filterSensitiveLog = (obj: RebootInstanceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RebootInstanceRequest => __isa(o, "RebootInstanceRequest");
}

export interface RebootInstanceResult {
  __type?: "RebootInstanceResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace RebootInstanceResult {
  export const filterSensitiveLog = (obj: RebootInstanceResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RebootInstanceResult => __isa(o, "RebootInstanceResult");
}

export interface RebootRelationalDatabaseRequest {
  __type?: "RebootRelationalDatabaseRequest";
  /**
   * <p>The name of your database to reboot.</p>
   */
  relationalDatabaseName: string | undefined;
}

export namespace RebootRelationalDatabaseRequest {
  export const filterSensitiveLog = (obj: RebootRelationalDatabaseRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RebootRelationalDatabaseRequest => __isa(o, "RebootRelationalDatabaseRequest");
}

export interface RebootRelationalDatabaseResult {
  __type?: "RebootRelationalDatabaseResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace RebootRelationalDatabaseResult {
  export const filterSensitiveLog = (obj: RebootRelationalDatabaseResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RebootRelationalDatabaseResult => __isa(o, "RebootRelationalDatabaseResult");
}

export enum RecordState {
  Failed = "Failed",
  Started = "Started",
  Succeeded = "Succeeded",
}

/**
 * <p>Describes the AWS Region.</p>
 */
export interface Region {
  __type?: "Region";
  /**
   * <p>The continent code (e.g., <code>NA</code>, meaning North America).</p>
   */
  continentCode?: string;

  /**
   * <p>The display name (e.g., <code>Ohio</code>).</p>
   */
  displayName?: string;

  /**
   * <p>The Availability Zones for databases. Follows the format <code>us-east-2a</code>
   *       (case-sensitive).</p>
   */
  relationalDatabaseAvailabilityZones?: AvailabilityZone[];

  /**
   * <p>The region name (e.g., <code>us-east-2</code>).</p>
   */
  name?: RegionName | string;

  /**
   * <p>The description of the AWS Region (e.g., <code>This region is recommended to serve users
   *         in the eastern United States and eastern Canada</code>).</p>
   */
  description?: string;

  /**
   * <p>The Availability Zones. Follows the format <code>us-east-2a</code>
   *       (case-sensitive).</p>
   */
  availabilityZones?: AvailabilityZone[];
}

export namespace Region {
  export const filterSensitiveLog = (obj: Region): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Region => __isa(o, "Region");
}

export enum RegionName {
  AP_NORTHEAST_1 = "ap-northeast-1",
  AP_NORTHEAST_2 = "ap-northeast-2",
  AP_SOUTHEAST_1 = "ap-southeast-1",
  AP_SOUTHEAST_2 = "ap-southeast-2",
  AP_SOUTH_1 = "ap-south-1",
  CA_CENTRAL_1 = "ca-central-1",
  EU_CENTRAL_1 = "eu-central-1",
  EU_WEST_1 = "eu-west-1",
  EU_WEST_2 = "eu-west-2",
  EU_WEST_3 = "eu-west-3",
  US_EAST_1 = "us-east-1",
  US_EAST_2 = "us-east-2",
  US_WEST_1 = "us-west-1",
  US_WEST_2 = "us-west-2",
}

/**
 * <p>Describes a database.</p>
 */
export interface RelationalDatabase {
  __type?: "RelationalDatabase";
  /**
   * <p>The database software (for example, <code>MySQL</code>).</p>
   */
  engine?: string;

  /**
   * <p>A Boolean value indicating whether automated backup retention is enabled for the
   *       database.</p>
   */
  backupRetentionEnabled?: boolean;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
   *         Dev Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The database engine version (for example, <code>5.7.23</code>).</p>
   */
  engineVersion?: string;

  /**
   * <p>The daily time range during which automated backups are created for the database (for
   *       example, <code>16:00-16:30</code>).</p>
   */
  preferredBackupWindow?: string;

  /**
   * <p>The master user name of the database.</p>
   */
  masterUsername?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the database.</p>
   */
  arn?: string;

  /**
   * <p>The timestamp when the database was created. Formatted in Unix time.</p>
   */
  createdAt?: Date;

  /**
   * <p>Describes the pending maintenance actions for the database.</p>
   */
  pendingMaintenanceActions?: PendingMaintenanceAction[];

  /**
   * <p>The name of the master database created when the Lightsail database resource is
   *       created.</p>
   */
  masterDatabaseName?: string;

  /**
   * <p>Describes the secondary Availability Zone of a high availability database.</p>
   *          <p>The secondary database is used for failover support of a high availability
   *       database.</p>
   */
  secondaryAvailabilityZone?: string;

  /**
   * <p>The certificate associated with the database.</p>
   */
  caCertificateIdentifier?: string;

  /**
   * <p>Describes the hardware of the database.</p>
   */
  hardware?: RelationalDatabaseHardware;

  /**
   * <p>A Boolean value indicating whether the database is publicly accessible.</p>
   */
  publiclyAccessible?: boolean;

  /**
   * <p>The latest point in time to which the database can be restored. Formatted in Unix
   *       time.</p>
   */
  latestRestorableTime?: Date;

  /**
   * <p>The status of parameter updates for the database.</p>
   */
  parameterApplyStatus?: string;

  /**
   * <p>Describes the current state of the database.</p>
   */
  state?: string;

  /**
   * <p>The blueprint ID for the database. A blueprint describes the major engine version of a
   *       database.</p>
   */
  relationalDatabaseBlueprintId?: string;

  /**
   * <p>Describes pending database value modifications.</p>
   */
  pendingModifiedValues?: PendingModifiedRelationalDatabaseValues;

  /**
   * <p>The weekly time range during which system maintenance can occur on the database.</p>
   *          <p>In the format <code>ddd:hh24:mi-ddd:hh24:mi</code>. For example,
   *         <code>Tue:17:00-Tue:17:30</code>.</p>
   */
  preferredMaintenanceWindow?: string;

  /**
   * <p>The master endpoint for the database.</p>
   */
  masterEndpoint?: RelationalDatabaseEndpoint;

  /**
   * <p>The bundle ID for the database. A bundle describes the performance specifications for your
   *       database.</p>
   */
  relationalDatabaseBundleId?: string;

  /**
   * <p>The support code for the database. Include this code in your email to support when you
   *       have questions about a database in Lightsail. This code enables our support team to look up
   *       your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The Lightsail resource type for the database (for example,
   *         <code>RelationalDatabase</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The Region name and Availability Zone where the database is located.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The unique name of the database resource in Lightsail.</p>
   */
  name?: string;
}

export namespace RelationalDatabase {
  export const filterSensitiveLog = (obj: RelationalDatabase): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RelationalDatabase => __isa(o, "RelationalDatabase");
}

/**
 * <p>Describes a database image, or blueprint. A blueprint describes the major engine version
 *       of a database.</p>
 */
export interface RelationalDatabaseBlueprint {
  __type?: "RelationalDatabaseBlueprint";
  /**
   * <p>The database engine version for the database blueprint (for example,
   *       <code>5.7.23</code>).</p>
   */
  engineVersion?: string;

  /**
   * <p>A Boolean value indicating whether the engine version is the default for the database
   *       blueprint.</p>
   */
  isEngineDefault?: boolean;

  /**
   * <p>The description of the database engine version for the database blueprint.</p>
   */
  engineVersionDescription?: string;

  /**
   * <p>The database software of the database blueprint (for example, <code>MySQL</code>).</p>
   */
  engine?: RelationalDatabaseEngine | string;

  /**
   * <p>The ID for the database blueprint.</p>
   */
  blueprintId?: string;

  /**
   * <p>The description of the database engine for the database blueprint.</p>
   */
  engineDescription?: string;
}

export namespace RelationalDatabaseBlueprint {
  export const filterSensitiveLog = (obj: RelationalDatabaseBlueprint): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RelationalDatabaseBlueprint => __isa(o, "RelationalDatabaseBlueprint");
}

/**
 * <p>Describes a database bundle. A bundle describes the performance specifications of the
 *       database.</p>
 */
export interface RelationalDatabaseBundle {
  __type?: "RelationalDatabaseBundle";
  /**
   * <p>The ID for the database bundle.</p>
   */
  bundleId?: string;

  /**
   * <p>The name for the database bundle.</p>
   */
  name?: string;

  /**
   * <p>A Boolean value indicating whether the database bundle is active.</p>
   */
  isActive?: boolean;

  /**
   * <p>The size of the disk for the database bundle.</p>
   */
  diskSizeInGb?: number;

  /**
   * <p>The data transfer rate per month in GB for the database bundle.</p>
   */
  transferPerMonthInGb?: number;

  /**
   * <p>A Boolean value indicating whether the database bundle is encrypted.</p>
   */
  isEncrypted?: boolean;

  /**
   * <p>The cost of the database bundle in US currency.</p>
   */
  price?: number;

  /**
   * <p>The amount of RAM in GB (for example, <code>2.0</code>) for the database bundle.</p>
   */
  ramSizeInGb?: number;

  /**
   * <p>The number of virtual CPUs (vCPUs) for the database bundle.</p>
   */
  cpuCount?: number;
}

export namespace RelationalDatabaseBundle {
  export const filterSensitiveLog = (obj: RelationalDatabaseBundle): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RelationalDatabaseBundle => __isa(o, "RelationalDatabaseBundle");
}

/**
 * <p>Describes an endpoint for a database.</p>
 */
export interface RelationalDatabaseEndpoint {
  __type?: "RelationalDatabaseEndpoint";
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
  export const filterSensitiveLog = (obj: RelationalDatabaseEndpoint): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RelationalDatabaseEndpoint => __isa(o, "RelationalDatabaseEndpoint");
}

export enum RelationalDatabaseEngine {
  MYSQL = "mysql",
}

/**
 * <p>Describes an event for a database.</p>
 */
export interface RelationalDatabaseEvent {
  __type?: "RelationalDatabaseEvent";
  /**
   * <p>The timestamp when the database event was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The database that the database event relates to.</p>
   */
  resource?: string;

  /**
   * <p>The category that the database event belongs to.</p>
   */
  eventCategories?: string[];

  /**
   * <p>The message of the database event.</p>
   */
  message?: string;
}

export namespace RelationalDatabaseEvent {
  export const filterSensitiveLog = (obj: RelationalDatabaseEvent): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RelationalDatabaseEvent => __isa(o, "RelationalDatabaseEvent");
}

/**
 * <p>Describes the hardware of a database.</p>
 */
export interface RelationalDatabaseHardware {
  __type?: "RelationalDatabaseHardware";
  /**
   * <p>The amount of RAM in GB for the database.</p>
   */
  ramSizeInGb?: number;

  /**
   * <p>The number of vCPUs for the database.</p>
   */
  cpuCount?: number;

  /**
   * <p>The size of the disk for the database.</p>
   */
  diskSizeInGb?: number;
}

export namespace RelationalDatabaseHardware {
  export const filterSensitiveLog = (obj: RelationalDatabaseHardware): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RelationalDatabaseHardware => __isa(o, "RelationalDatabaseHardware");
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
  __type?: "RelationalDatabaseParameter";
  /**
   * <p>Specifies the name of the parameter.</p>
   */
  parameterName?: string;

  /**
   * <p>Provides a description of the parameter.</p>
   */
  description?: string;

  /**
   * <p>Specifies the valid data type for the parameter.</p>
   */
  dataType?: string;

  /**
   * <p>Indicates when parameter updates are applied.</p>
   *          <p>Can be <code>immediate</code> or <code>pending-reboot</code>.</p>
   */
  applyMethod?: string;

  /**
   * <p>Specifies the valid range of values for the parameter.</p>
   */
  allowedValues?: string;

  /**
   * <p>A Boolean value indicating whether the parameter can be modified.</p>
   */
  isModifiable?: boolean;

  /**
   * <p>Specifies the engine-specific parameter type.</p>
   */
  applyType?: string;

  /**
   * <p>Specifies the value of the parameter.</p>
   */
  parameterValue?: string;
}

export namespace RelationalDatabaseParameter {
  export const filterSensitiveLog = (obj: RelationalDatabaseParameter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RelationalDatabaseParameter => __isa(o, "RelationalDatabaseParameter");
}

export enum RelationalDatabasePasswordVersion {
  CURRENT = "CURRENT",
  PENDING = "PENDING",
  PREVIOUS = "PREVIOUS",
}

/**
 * <p>Describes a database snapshot.</p>
 */
export interface RelationalDatabaseSnapshot {
  __type?: "RelationalDatabaseSnapshot";
  /**
   * <p>The size of the disk in GB (for example, <code>32</code>) for the database
   *       snapshot.</p>
   */
  sizeInGb?: number;

  /**
   * <p>The Region name and Availability Zone where the database snapshot is located.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The bundle ID of the database from which the database snapshot was created.</p>
   */
  fromRelationalDatabaseBundleId?: string;

  /**
   * <p>The database engine version for the database snapshot (for example,
   *       <code>5.7.23</code>).</p>
   */
  engineVersion?: string;

  /**
   * <p>The timestamp when the database snapshot was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in
   *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
   *         Dev Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The blueprint ID of the database from which the database snapshot was created. A blueprint
   *       describes the major engine version of a database.</p>
   */
  fromRelationalDatabaseBlueprintId?: string;

  /**
   * <p>The name of the source database from which the database snapshot was created.</p>
   */
  fromRelationalDatabaseName?: string;

  /**
   * <p>The name of the database snapshot.</p>
   */
  name?: string;

  /**
   * <p>The Lightsail resource type.</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The support code for the database snapshot. Include this code in your email to support
   *       when you have questions about a database snapshot in Lightsail. This code enables our
   *       support team to look up your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the database snapshot.</p>
   */
  arn?: string;

  /**
   * <p>The state of the database snapshot.</p>
   */
  state?: string;

  /**
   * <p>The software of the database snapshot (for example, <code>MySQL</code>)</p>
   */
  engine?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the database from which the database snapshot was
   *       created.</p>
   */
  fromRelationalDatabaseArn?: string;
}

export namespace RelationalDatabaseSnapshot {
  export const filterSensitiveLog = (obj: RelationalDatabaseSnapshot): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RelationalDatabaseSnapshot => __isa(o, "RelationalDatabaseSnapshot");
}

export interface ReleaseStaticIpRequest {
  __type?: "ReleaseStaticIpRequest";
  /**
   * <p>The name of the static IP to delete.</p>
   */
  staticIpName: string | undefined;
}

export namespace ReleaseStaticIpRequest {
  export const filterSensitiveLog = (obj: ReleaseStaticIpRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ReleaseStaticIpRequest => __isa(o, "ReleaseStaticIpRequest");
}

export interface ReleaseStaticIpResult {
  __type?: "ReleaseStaticIpResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace ReleaseStaticIpResult {
  export const filterSensitiveLog = (obj: ReleaseStaticIpResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ReleaseStaticIpResult => __isa(o, "ReleaseStaticIpResult");
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
  __type?: "RenewalSummary";
  /**
   * <p>The timestamp when the certificate was last updated.</p>
   */
  updatedAt?: Date;

  /**
   * <p>An array of objects that describe the domain validation records of the certificate.</p>
   */
  domainValidationRecords?: DomainValidationRecord[];

  /**
   * <p>The renewal status of the certificate.</p>
   *
   *          <p>The following renewal status are possible:</p>
   *
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
}

export namespace RenewalSummary {
  export const filterSensitiveLog = (obj: RenewalSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RenewalSummary => __isa(o, "RenewalSummary");
}

export interface ResetDistributionCacheRequest {
  __type?: "ResetDistributionCacheRequest";
  /**
   * <p>The name of the distribution for which to reset cache.</p>
   *
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   */
  distributionName?: string;
}

export namespace ResetDistributionCacheRequest {
  export const filterSensitiveLog = (obj: ResetDistributionCacheRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResetDistributionCacheRequest => __isa(o, "ResetDistributionCacheRequest");
}

export interface ResetDistributionCacheResult {
  __type?: "ResetDistributionCacheResult";
  /**
   * <p>The timestamp of the reset cache request (e.g., <code>1479734909.17</code>) in Unix time
   *       format.</p>
   */
  createTime?: Date;

  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;

  /**
   * <p>The status of the reset cache request.</p>
   */
  status?: string;
}

export namespace ResetDistributionCacheResult {
  export const filterSensitiveLog = (obj: ResetDistributionCacheResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResetDistributionCacheResult => __isa(o, "ResetDistributionCacheResult");
}

/**
 * <p>Describes the resource location.</p>
 */
export interface ResourceLocation {
  __type?: "ResourceLocation";
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
  export const filterSensitiveLog = (obj: ResourceLocation): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceLocation => __isa(o, "ResourceLocation");
}

/**
 * <p>Describes the domain name system (DNS) records to add to your domain's DNS to validate it
 *       for an Amazon Lightsail certificate.</p>
 */
export interface ResourceRecord {
  __type?: "ResourceRecord";
  /**
   * <p>The name of the record.</p>
   */
  name?: string;

  /**
   * <p>The value for the DNS record.</p>
   */
  value?: string;

  /**
   * <p>The DNS record type.</p>
   */
  type?: string;
}

export namespace ResourceRecord {
  export const filterSensitiveLog = (obj: ResourceRecord): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceRecord => __isa(o, "ResourceRecord");
}

export enum ResourceType {
  Alarm = "Alarm",
  Certificate = "Certificate",
  CloudFormationStackRecord = "CloudFormationStackRecord",
  ContactMethod = "ContactMethod",
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

export interface SendContactMethodVerificationRequest {
  __type?: "SendContactMethodVerificationRequest";
  /**
   * <p>The protocol to verify, such as <code>Email</code> or <code>SMS</code> (text
   *       messaging).</p>
   */
  protocol: ContactMethodVerificationProtocol | string | undefined;
}

export namespace SendContactMethodVerificationRequest {
  export const filterSensitiveLog = (obj: SendContactMethodVerificationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SendContactMethodVerificationRequest =>
    __isa(o, "SendContactMethodVerificationRequest");
}

export interface SendContactMethodVerificationResult {
  __type?: "SendContactMethodVerificationResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace SendContactMethodVerificationResult {
  export const filterSensitiveLog = (obj: SendContactMethodVerificationResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SendContactMethodVerificationResult =>
    __isa(o, "SendContactMethodVerificationResult");
}

/**
 * <p>A general service exception.</p>
 */
export interface ServiceException extends __SmithyException, $MetadataBearer {
  name: "ServiceException";
  $fault: "server";
  message?: string;
  docs?: string;
  tip?: string;
  code?: string;
}

export namespace ServiceException {
  export const filterSensitiveLog = (obj: ServiceException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceException => __isa(o, "ServiceException");
}

export interface StartInstanceRequest {
  __type?: "StartInstanceRequest";
  /**
   * <p>The name of the instance (a virtual private server) to start.</p>
   */
  instanceName: string | undefined;
}

export namespace StartInstanceRequest {
  export const filterSensitiveLog = (obj: StartInstanceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartInstanceRequest => __isa(o, "StartInstanceRequest");
}

export interface StartInstanceResult {
  __type?: "StartInstanceResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace StartInstanceResult {
  export const filterSensitiveLog = (obj: StartInstanceResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartInstanceResult => __isa(o, "StartInstanceResult");
}

export interface StartRelationalDatabaseRequest {
  __type?: "StartRelationalDatabaseRequest";
  /**
   * <p>The name of your database to start.</p>
   */
  relationalDatabaseName: string | undefined;
}

export namespace StartRelationalDatabaseRequest {
  export const filterSensitiveLog = (obj: StartRelationalDatabaseRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartRelationalDatabaseRequest => __isa(o, "StartRelationalDatabaseRequest");
}

export interface StartRelationalDatabaseResult {
  __type?: "StartRelationalDatabaseResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace StartRelationalDatabaseResult {
  export const filterSensitiveLog = (obj: StartRelationalDatabaseResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartRelationalDatabaseResult => __isa(o, "StartRelationalDatabaseResult");
}

/**
 * <p>Describes the static IP.</p>
 */
export interface StaticIp {
  __type?: "StaticIp";
  /**
   * <p>The name of the static IP (e.g., <code>StaticIP-Ohio-EXAMPLE</code>).</p>
   */
  name?: string;

  /**
   * <p>The static IP address.</p>
   */
  ipAddress?: string;

  /**
   * <p>A Boolean value indicating whether the static IP is attached.</p>
   */
  isAttached?: boolean;

  /**
   * <p>The instance where the static IP is attached (e.g.,
   *       <code>Amazon_Linux-1GB-Ohio-1</code>).</p>
   */
  attachedTo?: string;

  /**
   * <p>The region and Availability Zone where the static IP was created.</p>
   */
  location?: ResourceLocation;

  /**
   * <p>The timestamp when the static IP was created (e.g., <code>1479735304.222</code>).</p>
   */
  createdAt?: Date;

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
   * <p>The resource type (usually <code>StaticIp</code>).</p>
   */
  resourceType?: ResourceType | string;
}

export namespace StaticIp {
  export const filterSensitiveLog = (obj: StaticIp): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StaticIp => __isa(o, "StaticIp");
}

export interface StopInstanceRequest {
  __type?: "StopInstanceRequest";
  /**
   * <p>The name of the instance (a virtual private server) to stop.</p>
   */
  instanceName: string | undefined;

  /**
   * <p>When set to <code>True</code>, forces a Lightsail instance that is stuck in a
   *         <code>stopping</code> state to stop.</p>
   *          <important>
   *             <p>Only use the <code>force</code> parameter if your instance is stuck in the
   *           <code>stopping</code> state. In any other state, your instance should stop normally
   *         without adding this parameter to your API request.</p>
   *          </important>
   */
  force?: boolean;
}

export namespace StopInstanceRequest {
  export const filterSensitiveLog = (obj: StopInstanceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopInstanceRequest => __isa(o, "StopInstanceRequest");
}

export interface StopInstanceResult {
  __type?: "StopInstanceResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace StopInstanceResult {
  export const filterSensitiveLog = (obj: StopInstanceResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopInstanceResult => __isa(o, "StopInstanceResult");
}

export interface StopRelationalDatabaseRequest {
  __type?: "StopRelationalDatabaseRequest";
  /**
   * <p>The name of your new database snapshot to be created before stopping your database.</p>
   */
  relationalDatabaseSnapshotName?: string;

  /**
   * <p>The name of your database to stop.</p>
   */
  relationalDatabaseName: string | undefined;
}

export namespace StopRelationalDatabaseRequest {
  export const filterSensitiveLog = (obj: StopRelationalDatabaseRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopRelationalDatabaseRequest => __isa(o, "StopRelationalDatabaseRequest");
}

export interface StopRelationalDatabaseResult {
  __type?: "StopRelationalDatabaseResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace StopRelationalDatabaseResult {
  export const filterSensitiveLog = (obj: StopRelationalDatabaseResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopRelationalDatabaseResult => __isa(o, "StopRelationalDatabaseResult");
}

/**
 * <p>Describes a tag key and optional value assigned to an Amazon Lightsail resource.</p>
 *          <p>For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
 *         Dev Guide</a>.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The value of the tag.</p>
   *          <p>Constraints: Tag values accept a maximum of 256 letters, numbers, spaces in UTF-8, or the
   *       following characters: + - = . _ : / @</p>
   */
  value?: string;

  /**
   * <p>The key of the tag.</p>
   *          <p>Constraints: Tag keys accept a maximum of 128 letters, numbers, spaces in UTF-8, or the
   *       following characters: + - = . _ : / @</p>
   */
  key?: string;
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
   * <p>The Amazon Resource Name (ARN) of the resource to which you want to add a tag.</p>
   */
  resourceArn?: string;

  /**
   * <p>The name of the resource to which you are adding tags.</p>
   */
  resourceName: string | undefined;

  /**
   * <p>The tag key and optional value.</p>
   */
  tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

export interface TagResourceResult {
  __type?: "TagResourceResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace TagResourceResult {
  export const filterSensitiveLog = (obj: TagResourceResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceResult => __isa(o, "TagResourceResult");
}

export interface TestAlarmRequest {
  __type?: "TestAlarmRequest";
  /**
   * <p>The alarm state to test.</p>
   *          <p>An alarm has the following possible states that can be tested:</p>
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
  state: AlarmState | string | undefined;

  /**
   * <p>The name of the alarm to test.</p>
   */
  alarmName: string | undefined;
}

export namespace TestAlarmRequest {
  export const filterSensitiveLog = (obj: TestAlarmRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TestAlarmRequest => __isa(o, "TestAlarmRequest");
}

export interface TestAlarmResult {
  __type?: "TestAlarmResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace TestAlarmResult {
  export const filterSensitiveLog = (obj: TestAlarmResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TestAlarmResult => __isa(o, "TestAlarmResult");
}

export enum TreatMissingData {
  Breaching = "breaching",
  Ignore = "ignore",
  Missing = "missing",
  NotBreaching = "notBreaching",
}

/**
 * <p>Lightsail throws this exception when the user has not been authenticated.</p>
 */
export interface UnauthenticatedException extends __SmithyException, $MetadataBearer {
  name: "UnauthenticatedException";
  $fault: "client";
  tip?: string;
  code?: string;
  docs?: string;
  message?: string;
}

export namespace UnauthenticatedException {
  export const filterSensitiveLog = (obj: UnauthenticatedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnauthenticatedException => __isa(o, "UnauthenticatedException");
}

export interface UnpeerVpcRequest {
  __type?: "UnpeerVpcRequest";
}

export namespace UnpeerVpcRequest {
  export const filterSensitiveLog = (obj: UnpeerVpcRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnpeerVpcRequest => __isa(o, "UnpeerVpcRequest");
}

export interface UnpeerVpcResult {
  __type?: "UnpeerVpcResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace UnpeerVpcResult {
  export const filterSensitiveLog = (obj: UnpeerVpcResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnpeerVpcResult => __isa(o, "UnpeerVpcResult");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The name of the resource from which you are removing a tag.</p>
   */
  resourceName: string | undefined;

  /**
   * <p>The tag keys to delete from the specified resource.</p>
   */
  tagKeys: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which you want to remove a tag.</p>
   */
  resourceArn?: string;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResult {
  __type?: "UntagResourceResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace UntagResourceResult {
  export const filterSensitiveLog = (obj: UntagResourceResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceResult => __isa(o, "UntagResourceResult");
}

export interface UpdateDistributionBundleRequest {
  __type?: "UpdateDistributionBundleRequest";
  /**
   * <p>The bundle ID of the new bundle to apply to your distribution.</p>
   *          <p>Use the <code>GetDistributionBundles</code> action to get a list of distribution bundle
   *       IDs that you can specify.</p>
   */
  bundleId?: string;

  /**
   * <p>The name of the distribution for which to update the bundle.</p>
   *
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   */
  distributionName?: string;
}

export namespace UpdateDistributionBundleRequest {
  export const filterSensitiveLog = (obj: UpdateDistributionBundleRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDistributionBundleRequest => __isa(o, "UpdateDistributionBundleRequest");
}

export interface UpdateDistributionBundleResult {
  __type?: "UpdateDistributionBundleResult";
  /**
   * <p>Describes the API operation.</p>
   */
  operation?: Operation;
}

export namespace UpdateDistributionBundleResult {
  export const filterSensitiveLog = (obj: UpdateDistributionBundleResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDistributionBundleResult => __isa(o, "UpdateDistributionBundleResult");
}

export interface UpdateDistributionRequest {
  __type?: "UpdateDistributionRequest";
  /**
   * <p>An object that describes the default cache behavior for the distribution.</p>
   */
  defaultCacheBehavior?: CacheBehavior;

  /**
   * <p>An object that describes the cache behavior settings for the distribution.</p>
   *          <note>
   *             <p>The <code>cacheBehaviorSettings</code> specified in your
   *           <code>UpdateDistributionRequest</code> will replace your distribution's existing
   *         settings.</p>
   *          </note>
   */
  cacheBehaviorSettings?: CacheSettings;

  /**
   * <p>An array of objects that describe the per-path cache behavior for the distribution.</p>
   */
  cacheBehaviors?: CacheBehaviorPerPath[];

  /**
   * <p>Indicates whether to enable the distribution.</p>
   */
  isEnabled?: boolean;

  /**
   * <p>An object that describes the origin resource for the distribution, such as a Lightsail
   *       instance or load balancer.</p>
   *
   *          <p>The distribution pulls, caches, and serves content from the origin.</p>
   */
  origin?: InputOrigin;

  /**
   * <p>The name of the distribution to update.</p>
   *
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   */
  distributionName: string | undefined;
}

export namespace UpdateDistributionRequest {
  export const filterSensitiveLog = (obj: UpdateDistributionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDistributionRequest => __isa(o, "UpdateDistributionRequest");
}

export interface UpdateDistributionResult {
  __type?: "UpdateDistributionResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace UpdateDistributionResult {
  export const filterSensitiveLog = (obj: UpdateDistributionResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDistributionResult => __isa(o, "UpdateDistributionResult");
}

export interface UpdateDomainEntryRequest {
  __type?: "UpdateDomainEntryRequest";
  /**
   * <p>An array of key-value pairs containing information about the domain entry.</p>
   */
  domainEntry: DomainEntry | undefined;

  /**
   * <p>The name of the domain recordset to update.</p>
   */
  domainName: string | undefined;
}

export namespace UpdateDomainEntryRequest {
  export const filterSensitiveLog = (obj: UpdateDomainEntryRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDomainEntryRequest => __isa(o, "UpdateDomainEntryRequest");
}

export interface UpdateDomainEntryResult {
  __type?: "UpdateDomainEntryResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace UpdateDomainEntryResult {
  export const filterSensitiveLog = (obj: UpdateDomainEntryResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDomainEntryResult => __isa(o, "UpdateDomainEntryResult");
}

export interface UpdateLoadBalancerAttributeRequest {
  __type?: "UpdateLoadBalancerAttributeRequest";
  /**
   * <p>The name of the load balancer that you want to modify (e.g.,
   *       <code>my-load-balancer</code>.</p>
   */
  loadBalancerName: string | undefined;

  /**
   * <p>The value that you want to specify for the attribute name.</p>
   */
  attributeValue: string | undefined;

  /**
   * <p>The name of the attribute you want to update. Valid values are below.</p>
   */
  attributeName: LoadBalancerAttributeName | string | undefined;
}

export namespace UpdateLoadBalancerAttributeRequest {
  export const filterSensitiveLog = (obj: UpdateLoadBalancerAttributeRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateLoadBalancerAttributeRequest =>
    __isa(o, "UpdateLoadBalancerAttributeRequest");
}

export interface UpdateLoadBalancerAttributeResult {
  __type?: "UpdateLoadBalancerAttributeResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace UpdateLoadBalancerAttributeResult {
  export const filterSensitiveLog = (obj: UpdateLoadBalancerAttributeResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateLoadBalancerAttributeResult => __isa(o, "UpdateLoadBalancerAttributeResult");
}

export interface UpdateRelationalDatabaseParametersRequest {
  __type?: "UpdateRelationalDatabaseParametersRequest";
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
  export const filterSensitiveLog = (obj: UpdateRelationalDatabaseParametersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateRelationalDatabaseParametersRequest =>
    __isa(o, "UpdateRelationalDatabaseParametersRequest");
}

export interface UpdateRelationalDatabaseParametersResult {
  __type?: "UpdateRelationalDatabaseParametersResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace UpdateRelationalDatabaseParametersResult {
  export const filterSensitiveLog = (obj: UpdateRelationalDatabaseParametersResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateRelationalDatabaseParametersResult =>
    __isa(o, "UpdateRelationalDatabaseParametersResult");
}

export interface UpdateRelationalDatabaseRequest {
  __type?: "UpdateRelationalDatabaseRequest";
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
   * <p>The name of your database to update.</p>
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>Indicates the certificate that needs to be associated with the database.</p>
   */
  caCertificateIdentifier?: string;

  /**
   * <p>When <code>true</code>, the master user password is changed to a new strong password
   *       generated by Lightsail.</p>
   *          <p>Use the <code>get relational database master user password</code> operation to get the new
   *       password.</p>
   */
  rotateMasterUserPassword?: boolean;

  /**
   * <p>When <code>true</code>, enables automated backup retention for your database.</p>
   *          <p>Updates are applied during the next maintenance window because this can result in an
   *       outage.</p>
   */
  enableBackupRetention?: boolean;

  /**
   * <p>When <code>true</code>, applies changes immediately. When <code>false</code>, applies
   *       changes during the preferred maintenance window. Some changes may cause an outage.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  applyImmediately?: boolean;

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
   * <p>The password for the master user of your database. The password can include any printable
   *       ASCII character except "/", """, or "@".</p>
   *          <p>Constraints: Must contain 8 to 41 characters.</p>
   */
  masterUserPassword?: string;

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
}

export namespace UpdateRelationalDatabaseRequest {
  export const filterSensitiveLog = (obj: UpdateRelationalDatabaseRequest): any => ({
    ...obj,
    ...(obj.masterUserPassword && { masterUserPassword: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is UpdateRelationalDatabaseRequest => __isa(o, "UpdateRelationalDatabaseRequest");
}

export interface UpdateRelationalDatabaseResult {
  __type?: "UpdateRelationalDatabaseResult";
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace UpdateRelationalDatabaseResult {
  export const filterSensitiveLog = (obj: UpdateRelationalDatabaseResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateRelationalDatabaseResult => __isa(o, "UpdateRelationalDatabaseResult");
}

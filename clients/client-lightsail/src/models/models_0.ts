// smithy-typescript generated code
import type {
  AccessDirection,
  AccessType,
  AccountLevelBpaSyncStatus,
  AddOnType,
  AlarmState,
  AppCategory,
  AutoMountStatus,
  AutoSnapshotStatus,
  BehaviorEnum,
  BlueprintType,
  BPAStatusMessage,
  BucketMetricName,
  CertificateDomainValidationStatus,
  CertificateStatus,
  CloudFormationStackRecordSourceType,
  ComparisonOperator,
  ContactMethodStatus,
  ContactProtocol,
  ContainerServiceDeploymentState,
  ContainerServiceMetricName,
  ContainerServicePowerName,
  ContainerServiceProtocol,
  ContainerServiceState,
  ContainerServiceStateDetailCode,
  Currency,
  DiskSnapshotState,
  DiskState,
  DistributionMetricName,
  DnsRecordCreationStateCode,
  ExportSnapshotRecordSourceType,
  ForwardValues,
  HeaderEnum,
  HttpEndpoint,
  HttpProtocolIpv6,
  HttpTokens,
  InstanceAccessProtocol,
  InstanceHealthStatusDetailName,
  InstanceHealthStatusDetailValue,
  InstanceHealthStatusValue,
  InstanceMetadataState,
  InstanceMetricName,
  InstancePlatform,
  InstanceSnapshotState,
  IpAddressType,
  MetricName,
  MetricStatistic,
  MetricUnit,
  NameServersUpdateStateCode,
  NetworkProtocol,
  OperationStatus,
  OperationType,
  OriginIpAddressTypeEnum,
  OriginProtocolPolicyEnum,
  PortAccessType,
  PortInfoSourceType,
  PortState,
  PricingUnit,
  R53HostedZoneDeletionStateCode,
  RecordState,
  RegionName,
  RenewalStatus,
  ResourceType,
  Status,
  StatusType,
  TreatMissingData,
  ViewerMinimumTlsProtocolVersionEnum,
  WafInspectionLevelEnum,
  WafPayloadTypeEnum,
} from "./enums";

/**
 * Describes the last time an access key was used.
 *
 * > **Note:** This object does not include data in the response of a [CreateBucketAccessKey](https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html) action.
 *
 * @public
 */
export interface AccessKeyLastUsed {
  /**
   * The date and time when the access key was most recently used.
   *
   * This value is null if the access key has not been used.
   *
   * @public
   */
  lastUsedDate?: Date | undefined;

  /**
   * The Amazon Web Services Region where this access key was most recently used.
   *
   * This value is `N/A` if the access key has not been used.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The name of the Amazon Web Services service with which this access key was most recently used.
   *
   * This value is `N/A` if the access key has not been used.
   *
   * @public
   */
  serviceName?: string | undefined;
}

/**
 * Describes an access key for an Amazon Lightsail bucket.
 *
 * Access keys grant full programmatic access to the specified bucket and its objects. You can have a maximum of two access keys per bucket. Use the [CreateBucketAccessKey](https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html) action to create an access key for a specific bucket. For more information about access keys, see [Creating access keys for a bucket in Amazon Lightsail](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-creating-bucket-access-keys) in the *Amazon Lightsail Developer Guide*.
 *
 * > **Important:** The `secretAccessKey` value is returned only in response to the `CreateBucketAccessKey` action. You can get a secret access key only when you first create an access key; you cannot get the secret access key later. If you lose the secret access key, you must create a new access key.
 *
 * @public
 */
export interface AccessKey {
  /**
   * The ID of the access key.
   *
   * @public
   */
  accessKeyId?: string | undefined;

  /**
   * The secret access key used to sign requests.
   *
   * You should store the secret access key in a safe location. We recommend that you delete the access key if the secret access key is compromised.
   *
   * @public
   */
  secretAccessKey?: string | undefined;

  /**
   * The status of the access key.
   *
   * A status of `Active` means that the key is valid, while `Inactive` means it is not.
   *
   * @public
   */
  status?: StatusType | undefined;

  /**
   * The timestamp when the access key was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * An object that describes the last time the access key was used.
   *
   * > **Note:** This object does not include data in the response of a [CreateBucketAccessKey](https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html) action. If the access key has not been used, the `region` and `serviceName` values are `N/A`, and the `lastUsedDate` value is null.
   *
   * @public
   */
  lastUsed?: AccessKeyLastUsed | undefined;
}

/**
 * Describes an Amazon Lightsail instance that has access to a Lightsail bucket.
 *
 * @public
 */
export interface ResourceReceivingAccess {
  /**
   * The name of the Lightsail instance.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Lightsail resource type (for example, `Instance`).
   *
   * @public
   */
  resourceType?: string | undefined;
}

/**
 * Describes the anonymous access permissions for an Amazon Lightsail bucket and its objects.
 *
 * For more information about bucket access permissions, see [Understanding bucket permissions in Amazon Lightsail](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-understanding-bucket-permissions) in the
 *
 * *Amazon Lightsail Developer Guide*.
 *
 * @public
 */
export interface AccessRules {
  /**
   * Specifies the anonymous access to all objects in a bucket.
   *
   * The following options can be specified:
   *
   * - `public` - Sets all objects in the bucket to public (read-only), making them readable by anyone in the world.
   *
   *   If the `getObject` value is set to `public`, then all objects in the bucket default to public regardless of the `allowPublicOverrides` value.
   * - `private` - Sets all objects in the bucket to private, making them readable only by you or anyone you give access to.
   *
   *   If the `getObject` value is set to `private`, and the `allowPublicOverrides` value is set to `true`, then all objects in the bucket default to private unless they are configured with a `public-read` ACL. Individual objects with a `public-read` ACL are readable by anyone in the world.
   *
   * @public
   */
  getObject?: AccessType | undefined;

  /**
   * A Boolean value that indicates whether the access control list (ACL) permissions that are applied to individual objects override the `getObject` option that is currently specified.
   *
   * When this is true, you can use the [PutObjectAcl](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html) Amazon S3 API action to set individual objects to public (read-only) using the `public-read` ACL, or to private using the `private` ACL.
   *
   * @public
   */
  allowPublicOverrides?: boolean | undefined;
}

/**
 * Describes the synchronization status of the Amazon Simple Storage Service (Amazon S3) account-level block public access (BPA) feature for your Lightsail buckets.
 *
 * The account-level BPA feature of Amazon S3 provides centralized controls to limit public access to all Amazon S3 buckets in an account. BPA can make all Amazon S3 buckets in an Amazon Web Services account private regardless of the individual bucket and object permissions that are configured. Lightsail buckets take into account the Amazon S3 account-level BPA configuration when allowing or denying public access. To do this, Lightsail periodically fetches the account-level BPA configuration from Amazon S3. When the account-level BPA status is `InSync`, the Amazon S3 account-level BPA configuration is synchronized and it applies to your Lightsail buckets. For more information about Amazon Simple Storage Service account-level BPA and how it affects Lightsail buckets, see [Block public access for buckets in Amazon Lightsail](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-block-public-access-for-buckets) in the *Amazon Lightsail Developer Guide*.
 *
 * @public
 */
export interface AccountLevelBpaSync {
  /**
   * The status of the account-level BPA synchronization.
   *
   * The following statuses are possible:
   *
   * - `InSync` - Account-level BPA is synchronized. The Amazon S3 account-level BPA configuration applies to your Lightsail buckets.
   * - `NeverSynced` - Synchronization has not yet happened. The Amazon S3 account-level BPA configuration does not apply to your Lightsail buckets.
   * - `Failed` - Synchronization failed. The Amazon S3 account-level BPA configuration does not apply to your Lightsail buckets.
   * - `Defaulted` - Synchronization failed and account-level BPA for your Lightsail buckets is defaulted to *active*.
   *
   * > **Note:** You might need to complete further actions if the status is `Failed` or `Defaulted`. The `message` parameter provides more information for those statuses.
   *
   * @public
   */
  status?: AccountLevelBpaSyncStatus | undefined;

  /**
   * The timestamp of when the account-level BPA configuration was last synchronized. This value is null when the account-level BPA configuration has not been synchronized.
   *
   * @public
   */
  lastSyncedAt?: Date | undefined;

  /**
   * A message that provides a reason for a `Failed` or `Defaulted` synchronization status.
   *
   * The following messages are possible:
   *
   * - `SYNC_ON_HOLD` - The synchronization has not yet happened. This status message occurs immediately after you create your first Lightsail bucket. This status message should change after the first synchronization happens, approximately 1 hour after the first bucket is created.
   * - `DEFAULTED_FOR_SLR_MISSING` - The synchronization failed because the required service-linked role is missing from your Amazon Web Services account. The account-level BPA configuration for your Lightsail buckets is defaulted to *active* until the synchronization can occur. This means that all your buckets are private and not publicly accessible. For more information about how to create the required service-linked role to allow synchronization, see [Using Service-Linked Roles for Amazon Lightsail](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-using-service-linked-roles) in the *Amazon Lightsail Developer Guide*.
   * - `DEFAULTED_FOR_SLR_MISSING_ON_HOLD` - The synchronization failed because the required service-linked role is missing from your Amazon Web Services account. Account-level BPA is not yet configured for your Lightsail buckets. Therefore, only the bucket access permissions and individual object access permissions apply to your Lightsail buckets. For more information about how to create the required service-linked role to allow synchronization, see [Using Service-Linked Roles for Amazon Lightsail](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-using-service-linked-roles) in the *Amazon Lightsail Developer Guide*.
   * - `Unknown` - The reason that synchronization failed is unknown. Contact Amazon Web Services Support for more information.
   *
   * @public
   */
  message?: BPAStatusMessage | undefined;

  /**
   * A Boolean value that indicates whether account-level block public access is affecting your Lightsail buckets.
   *
   * @public
   */
  bpaImpactsLightsail?: boolean | undefined;
}

/**
 * Describes an add-on that is enabled for an Amazon Lightsail resource.
 *
 * @public
 */
export interface AddOn {
  /**
   * The name of the add-on.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The status of the add-on.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The daily time when an automatic snapshot is created.
   *
   * The time shown is in `HH:00` format, and in Coordinated Universal Time (UTC).
   *
   * The snapshot is automatically created between the time shown and up to 45 minutes after.
   *
   * @public
   */
  snapshotTimeOfDay?: string | undefined;

  /**
   * The next daily time an automatic snapshot will be created.
   *
   * The time shown is in `HH:00` format, and in Coordinated Universal Time (UTC).
   *
   * The snapshot is automatically created between the time shown and up to 45 minutes after.
   *
   * @public
   */
  nextSnapshotTimeOfDay?: string | undefined;

  /**
   * The trigger threshold of the action.
   *
   * > **Important:** This add-on only applies to Lightsail for Research resources.
   *
   * @public
   */
  threshold?: string | undefined;

  /**
   * The amount of idle time in minutes after which your virtual computer will automatically stop.
   *
   * > **Important:** This add-on only applies to Lightsail for Research resources.
   *
   * @public
   */
  duration?: string | undefined;
}

/**
 * Describes a request to enable or modify the automatic snapshot add-on for an Amazon Lightsail instance or disk.
 *
 * When you modify the automatic snapshot time for a resource, it is typically effective immediately except under the following conditions:
 *
 * - If an automatic snapshot has been created for the current day, and you change the snapshot time to a later time of day, then the new snapshot time will be effective the following day. This ensures that two snapshots are not created for the current day.
 * - If an automatic snapshot has not yet been created for the current day, and you change the snapshot time to an earlier time of day, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day.
 * - If an automatic snapshot has not yet been created for the current day, and you change the snapshot time to a time that is within 30 minutes from your current time, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day, because 30 minutes is required between your current time and the new snapshot time that you specify.
 * - If an automatic snapshot is scheduled to be created within 30 minutes from your current time and you change the snapshot time, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day, because 30 minutes is required between your current time and the new snapshot time that you specify.
 *
 * @public
 */
export interface AutoSnapshotAddOnRequest {
  /**
   * The daily time when an automatic snapshot will be created.
   *
   * Constraints:
   *
   * - Must be in `HH:00` format, and in an hourly increment.
   * - Specified in Coordinated Universal Time (UTC).
   * - The snapshot will be automatically created between the time specified and up to 45 minutes after.
   *
   * @public
   */
  snapshotTimeOfDay?: string | undefined;
}

/**
 * Describes a request to create or edit the `StopInstanceOnIdle` add-on.
 *
 * > **Important:** This add-on only applies to Lightsail for Research resources.
 *
 * @public
 */
export interface StopInstanceOnIdleRequest {
  /**
   * The value to compare with the duration.
   *
   * @public
   */
  threshold?: string | undefined;

  /**
   * The amount of idle time in minutes after which your virtual computer will automatically stop.
   *
   * @public
   */
  duration?: string | undefined;
}

/**
 * Describes a request to enable, modify, or disable an add-on for an Amazon Lightsail resource.
 *
 * > **Note:** An additional cost may be associated with enabling add-ons. For more information, see the [Lightsail pricing page](https://aws.amazon.com/lightsail/pricing/).
 *
 * @public
 */
export interface AddOnRequest {
  /**
   * The add-on type.
   *
   * @public
   */
  addOnType: AddOnType | undefined;

  /**
   * An object that represents additional parameters when enabling or modifying the automatic snapshot add-on.
   *
   * @public
   */
  autoSnapshotAddOnRequest?: AutoSnapshotAddOnRequest | undefined;

  /**
   * An object that represents additional parameters when enabling or modifying the `StopInstanceOnIdle` add-on.
   *
   * > **Important:** This object only applies to Lightsail for Research resources.
   *
   * @public
   */
  stopInstanceOnIdleRequest?: StopInstanceOnIdleRequest | undefined;
}

/**
 * Describes the resource location.
 *
 * @public
 */
export interface ResourceLocation {
  /**
   * The Availability Zone. Follows the format `us-east-2a` (case-sensitive).
   *
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * The Amazon Web Services Region name.
   *
   * @public
   */
  regionName?: RegionName | undefined;
}

/**
 * Describes resource being monitored by an alarm.
 *
 * An alarm is a way to monitor your Amazon Lightsail resource metrics. For more information, see [Alarms in Amazon Lightsail](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-alarms).
 *
 * @public
 */
export interface MonitoredResourceInfo {
  /**
   * The Amazon Resource Name (ARN) of the resource being monitored.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the Lightsail resource being monitored.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Lightsail resource type of the resource being monitored.
   *
   * Instances, load balancers, and relational databases are the only Lightsail resources that can currently be monitored by alarms.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;
}

/**
 * Describes a tag key and optional value assigned to an Amazon Lightsail resource.
 *
 * For more information about tags in Lightsail, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-tags).
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the tag.
   *
   * Constraints: Tag keys accept a maximum of 128 letters, numbers, spaces in UTF-8, or the following characters: + - = . _ : / @
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The value of the tag.
   *
   * Constraints: Tag values accept a maximum of 256 letters, numbers, spaces in UTF-8, or the following characters: + - = . _ : / @
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Describes an alarm.
 *
 * An alarm is a way to monitor your Lightsail resource metrics. For more information, see [Alarms in Amazon Lightsail](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-alarms).
 *
 * @public
 */
export interface Alarm {
  /**
   * The name of the alarm.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the alarm.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The timestamp when the alarm was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * An object that lists information about the location of the alarm.
   *
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * The Lightsail resource type of the alarm.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The support code. Include this code in your email to support when you have questions about your Lightsail alarm. This code enables our support team to look up your Lightsail information more easily.
   *
   * @public
   */
  supportCode?: string | undefined;

  /**
   * An object that lists information about the resource monitored by the alarm.
   *
   * @public
   */
  monitoredResourceInfo?: MonitoredResourceInfo | undefined;

  /**
   * The arithmetic operation used when comparing the specified statistic and threshold.
   *
   * @public
   */
  comparisonOperator?: ComparisonOperator | undefined;

  /**
   * The number of periods over which data is compared to the specified threshold.
   *
   * @public
   */
  evaluationPeriods?: number | undefined;

  /**
   * The period, in seconds, over which the statistic is applied.
   *
   * @public
   */
  period?: number | undefined;

  /**
   * The value against which the specified statistic is compared.
   *
   * @public
   */
  threshold?: number | undefined;

  /**
   * The number of data points that must not within the specified threshold to trigger the alarm.
   *
   * @public
   */
  datapointsToAlarm?: number | undefined;

  /**
   * Specifies how the alarm handles missing data points.
   *
   * An alarm can treat missing data in the following ways:
   *
   * - `breaching` - Assume the missing data is not within the threshold. Missing data counts towards the number of times the metric is not within the threshold.
   * - `notBreaching` - Assume the missing data is within the threshold. Missing data does not count towards the number of times the metric is not within the threshold.
   * - `ignore` - Ignore the missing data. Maintains the current alarm state.
   * - `missing` - Missing data is treated as missing.
   *
   * @public
   */
  treatMissingData?: TreatMissingData | undefined;

  /**
   * The statistic for the metric associated with the alarm.
   *
   * The following statistics are available:
   *
   * - `Minimum` - The lowest value observed during the specified period. Use this value to determine low volumes of activity for your application.
   * - `Maximum` - The highest value observed during the specified period. Use this value to determine high volumes of activity for your application.
   * - `Sum` - All values submitted for the matching metric added together. You can use this statistic to determine the total volume of a metric.
   * - `Average` - The value of Sum / SampleCount during the specified period. By comparing this statistic with the Minimum and Maximum values, you can determine the full scope of a metric and how close the average use is to the Minimum and Maximum values. This comparison helps you to know when to increase or decrease your resources.
   * - `SampleCount` - The count, or number, of data points used for the statistical calculation.
   *
   * @public
   */
  statistic?: MetricStatistic | undefined;

  /**
   * The name of the metric associated with the alarm.
   *
   * @public
   */
  metricName?: MetricName | undefined;

  /**
   * The current state of the alarm.
   *
   * An alarm has the following possible states:
   *
   * - `ALARM` - The metric is outside of the defined threshold.
   * - `INSUFFICIENT_DATA` - The alarm has just started, the metric is not available, or not enough data is available for the metric to determine the alarm state.
   * - `OK` - The metric is within the defined threshold.
   *
   * @public
   */
  state?: AlarmState | undefined;

  /**
   * The unit of the metric associated with the alarm.
   *
   * @public
   */
  unit?: MetricUnit | undefined;

  /**
   * The contact protocols for the alarm, such as `Email`, `SMS` (text messaging), or both.
   *
   * @public
   */
  contactProtocols?: ContactProtocol[] | undefined;

  /**
   * The alarm states that trigger a notification.
   *
   * @public
   */
  notificationTriggers?: AlarmState[] | undefined;

  /**
   * Indicates whether the alarm is enabled.
   *
   * @public
   */
  notificationEnabled?: boolean | undefined;

  /**
   * The tag keys and optional values for the resource. For more information about tags in Lightsail, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-tags).
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface AllocateStaticIpRequest {
  /**
   * The name of the static IP address.
   *
   * @public
   */
  staticIpName: string | undefined;
}

/**
 * Describes the API operation.
 *
 * @public
 */
export interface Operation {
  /**
   * The ID of the operation.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The resource name.
   *
   * @public
   */
  resourceName?: string | undefined;

  /**
   * The resource type.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The timestamp when the operation was initialized (`1479816991.349`).
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Amazon Web Services Region and Availability Zone.
   *
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * A Boolean value indicating whether the operation is terminal.
   *
   * @public
   */
  isTerminal?: boolean | undefined;

  /**
   * Details about the operation (`Debian-1GB-Ohio-1`).
   *
   * @public
   */
  operationDetails?: string | undefined;

  /**
   * The type of operation.
   *
   * @public
   */
  operationType?: OperationType | undefined;

  /**
   * The status of the operation.
   *
   * @public
   */
  status?: OperationStatus | undefined;

  /**
   * The timestamp when the status was changed (`1479816991.349`).
   *
   * @public
   */
  statusChangedAt?: Date | undefined;

  /**
   * The error code.
   *
   * @public
   */
  errorCode?: string | undefined;

  /**
   * The error details.
   *
   * @public
   */
  errorDetails?: string | undefined;
}

/**
 * @public
 */
export interface AllocateStaticIpResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface AttachCertificateToDistributionRequest {
  /**
   * The name of the distribution that the certificate will be attached to.
   *
   * Use the `GetDistributions` action to get a list of distribution names that you can specify.
   *
   * @public
   */
  distributionName: string | undefined;

  /**
   * The name of the certificate to attach to a distribution.
   *
   * Only certificates with a status of `ISSUED` can be attached to a distribution.
   *
   * Use the `GetCertificates` action to get a list of certificate names that you can specify.
   *
   * > **Note:** This is the name of the certificate resource type and is used only to reference the certificate in other API actions. It can be different than the domain name of the certificate. For example, your certificate name might be `WordPress-Blog-Certificate` and the domain name of the certificate might be `example.com`.
   *
   * @public
   */
  certificateName: string | undefined;
}

/**
 * @public
 */
export interface AttachCertificateToDistributionResult {
  /**
   * An object that describes the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * @public
 */
export interface AttachDiskRequest {
  /**
   * The unique Lightsail disk name (`my-disk`).
   *
   * @public
   */
  diskName: string | undefined;

  /**
   * The name of the Lightsail instance where you want to utilize the storage disk.
   *
   * @public
   */
  instanceName: string | undefined;

  /**
   * The disk path to expose to the instance (`/dev/xvdf`).
   *
   * @public
   */
  diskPath: string | undefined;

  /**
   * A Boolean value used to determine the automatic mounting of a storage volume to a virtual computer. The default value is `False`.
   *
   * > **Important:** This value only applies to Lightsail for Research resources.
   *
   * @public
   */
  autoMounting?: boolean | undefined;
}

/**
 * @public
 */
export interface AttachDiskResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * Describes a block storage disk that is attached to an instance, and is included in an automatic snapshot.
 *
 * @public
 */
export interface AttachedDisk {
  /**
   * The path of the disk (`/dev/xvdf`).
   *
   * @public
   */
  path?: string | undefined;

  /**
   * The size of the disk in GB.
   *
   * @public
   */
  sizeInGb?: number | undefined;
}

/**
 * Describes a block storage disk mapping.
 *
 * @public
 */
export interface DiskMap {
  /**
   * The original disk path exposed to the instance (for example, `/dev/sdh`).
   *
   * @public
   */
  originalDiskPath?: string | undefined;

  /**
   * The new disk name (`my-new-disk`).
   *
   * @public
   */
  newDiskName?: string | undefined;
}

/**
 * @public
 */
export interface AttachInstancesToLoadBalancerRequest {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  loadBalancerName: string | undefined;

  /**
   * An array of strings representing the instance name(s) you want to attach to your load balancer.
   *
   * An instance must be `running` before you can attach it to your load balancer.
   *
   * There are no additional limits on the number of instances you can attach to your load balancer, aside from the limit of Lightsail instances you can create in your account (20).
   *
   * @public
   */
  instanceNames: string[] | undefined;
}

/**
 * @public
 */
export interface AttachInstancesToLoadBalancerResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface AttachLoadBalancerTlsCertificateRequest {
  /**
   * The name of the load balancer to which you want to associate the SSL/TLS certificate.
   *
   * @public
   */
  loadBalancerName: string | undefined;

  /**
   * The name of your SSL/TLS certificate.
   *
   * @public
   */
  certificateName: string | undefined;
}

/**
 * @public
 */
export interface AttachLoadBalancerTlsCertificateResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * These SSL/TLS certificates are only usable by Lightsail load balancers. You can't get the certificate and use it for another purpose.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface AttachStaticIpRequest {
  /**
   * The name of the static IP.
   *
   * @public
   */
  staticIpName: string | undefined;

  /**
   * The instance name to which you want to attach the static IP address.
   *
   * @public
   */
  instanceName: string | undefined;
}

/**
 * @public
 */
export interface AttachStaticIpResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * Describes an automatic snapshot.
 *
 * @public
 */
export interface AutoSnapshotDetails {
  /**
   * The date of the automatic snapshot in `YYYY-MM-DD` format.
   *
   * @public
   */
  date?: string | undefined;

  /**
   * The timestamp when the automatic snapshot was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The status of the automatic snapshot.
   *
   * @public
   */
  status?: AutoSnapshotStatus | undefined;

  /**
   * An array of objects that describe the block storage disks attached to the instance when the automatic snapshot was created.
   *
   * @public
   */
  fromAttachedDisks?: AttachedDisk[] | undefined;
}

/**
 * Describes an Availability Zone. This is returned only as part of a `GetRegions` request.
 *
 * @public
 */
export interface AvailabilityZone {
  /**
   * The name of the Availability Zone. The format is `us-east-2a` (case-sensitive).
   *
   * @public
   */
  zoneName?: string | undefined;

  /**
   * The state of the Availability Zone.
   *
   * @public
   */
  state?: string | undefined;
}

/**
 * Describes a blueprint (a virtual private server image).
 *
 * @public
 */
export interface Blueprint {
  /**
   * The ID for the virtual private server image (`app_wordpress_x_x` or `app_lamp_x_x`).
   *
   * @public
   */
  blueprintId?: string | undefined;

  /**
   * The friendly name of the blueprint (`Amazon Linux`).
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The group name of the blueprint (`amazon-linux`).
   *
   * @public
   */
  group?: string | undefined;

  /**
   * The type of the blueprint (`os` or `app`).
   *
   * @public
   */
  type?: BlueprintType | undefined;

  /**
   * The description of the blueprint.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A Boolean value indicating whether the blueprint is active. Inactive blueprints are listed to support customers with existing instances but are not necessarily available for launch of new instances. Blueprints are marked inactive when they become outdated due to operating system updates or new application releases.
   *
   * @public
   */
  isActive?: boolean | undefined;

  /**
   * The minimum bundle power required to run this blueprint. For example, you need a bundle with a power value of 500 or more to create an instance that uses a blueprint with a minimum power value of 500. `0` indicates that the blueprint runs on all instance sizes.
   *
   * @public
   */
  minPower?: number | undefined;

  /**
   * The version number of the operating system, application, or stack ( `2016.03.0`).
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The version code.
   *
   * @public
   */
  versionCode?: string | undefined;

  /**
   * The product URL to learn more about the image or blueprint.
   *
   * @public
   */
  productUrl?: string | undefined;

  /**
   * The end-user license agreement URL for the image or blueprint.
   *
   * @public
   */
  licenseUrl?: string | undefined;

  /**
   * The operating system platform (either Linux/Unix-based or Windows Server-based) of the blueprint.
   *
   * @public
   */
  platform?: InstancePlatform | undefined;

  /**
   * Virtual computer blueprints that are supported by Lightsail for Research.
   *
   * > **Important:** This parameter only applies to Lightsail for Research resources.
   *
   * @public
   */
  appCategory?: AppCategory | undefined;
}

/**
 * Describes the access log configuration for a bucket in the Amazon Lightsail object storage service.
 *
 * For more information about bucket access logs, see [Logging bucket requests using access logging in Amazon Lightsail](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-bucket-access-logs) in the *Amazon Lightsail Developer Guide*.
 *
 * @public
 */
export interface BucketAccessLogConfig {
  /**
   * A Boolean value that indicates whether bucket access logging is enabled for the bucket.
   *
   * @public
   */
  enabled: boolean | undefined;

  /**
   * The name of the bucket where the access logs are saved. The destination can be a Lightsail bucket in the same account, and in the same Amazon Web Services Region as the source bucket.
   *
   * > **Note:** This parameter is required when enabling the access log for a bucket, and should be omitted when disabling the access log.
   *
   * @public
   */
  destination?: string | undefined;

  /**
   * The optional object prefix for the bucket access log.
   *
   * The prefix is an optional addition to the object key that organizes your access log files in the destination bucket. For example, if you specify a `logs/` prefix, then each log object will begin with the `logs/` prefix in its key (for example, `logs/2021-11-01-21-32-16-E568B2907131C0C0`).
   *
   * > **Note:** This parameter can be optionally specified when enabling the access log for a bucket, and should be omitted when disabling the access log.
   *
   * @public
   */
  prefix?: string | undefined;
}

/**
 * Describes a cross-origin resource sharing (CORS) rule for a Lightsail bucket. CORS rules specify which origins are allowed to access the bucket, which HTTP methods are allowed, and other access control information. For more information, see [Configuring cross-origin resource sharing (CORS)](https://docs.aws.amazon.com/lightsail/latest/userguide/configure-cors.html).
 *
 * @public
 */
export interface BucketCorsRule {
  /**
   * A unique identifier for the CORS rule. The ID value can be up to 255 characters long. The IDs help you find a rule in the configuration.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The HTTP methods that are allowed when accessing the bucket from the specified origin. Each CORS rule must identify at least one origin and one method.
   *
   * You can use the following HTTP methods:
   *
   * - `GET` - Retrieves data from the server, such as downloading files or viewing content.
   * - `PUT` - Uploads or replaces data on the server, such as uploading new files.
   * - `POST` - Sends data to the server for processing, such as submitting forms or creating new resources.
   * - `DELETE` - Removes data from the server, such as deleting files or resources.
   * - `HEAD` - Retrieves only the headers from the server without the actual content, useful for checking if a resource exists.
   *
   * @public
   */
  allowedMethods: string[] | undefined;

  /**
   * One or more origins you want customers to be able to access the bucket from. Each CORS rule must identify at least one origin and one method.
   *
   * @public
   */
  allowedOrigins: string[] | undefined;

  /**
   * Headers that are specified in the `Access-Control-Request-Headers` header. These headers are allowed in a preflight `OPTIONS` request. In response to any preflight `OPTIONS` request, Amazon S3 returns any requested headers that are allowed.
   *
   * @public
   */
  allowedHeaders?: string[] | undefined;

  /**
   * One or more headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript `XMLHttpRequest` object).
   *
   * @public
   */
  exposeHeaders?: string[] | undefined;

  /**
   * The time in seconds that your browser is to cache the preflight response for the specified resource. A CORS rule can have only one `maxAgeSeconds` element.
   *
   * @public
   */
  maxAgeSeconds?: number | undefined;
}

/**
 * Describes the cross-origin resource sharing (CORS) configuration for a Lightsail bucket. CORS defines a way for client web applications that are loaded in one domain to interact with resources in a different domain. For more information, see [Configuring cross-origin resource sharing (CORS)](https://docs.aws.amazon.com/lightsail/latest/userguide/configure-cors.html).
 *
 * @public
 */
export interface BucketCorsConfig {
  /**
   * A set of origins and methods (cross-origin access that you want to allow). You can add up to 20 rules to the configuration. The total size is limited to 64 KB.
   *
   * @public
   */
  rules?: BucketCorsRule[] | undefined;
}

/**
 * Describes the state of an Amazon Lightsail bucket.
 *
 * @public
 */
export interface BucketState {
  /**
   * The state code of the bucket.
   *
   * The following codes are possible:
   *
   * - `OK` - The bucket is in a running state.
   * - `Unknown` - Creation of the bucket might have timed-out. You might want to delete the bucket and create a new one.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * A message that describes the state of the bucket.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Describes an Amazon Lightsail bucket.
 *
 * @public
 */
export interface Bucket {
  /**
   * The Lightsail resource type of the bucket.
   *
   * @public
   */
  resourceType?: string | undefined;

  /**
   * An object that describes the access rules of the bucket.
   *
   * @public
   */
  accessRules?: AccessRules | undefined;

  /**
   * The Amazon Resource Name (ARN) of the bucket.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ID of the bundle currently applied to the bucket.
   *
   * A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket.
   *
   * Use the [UpdateBucketBundle](https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucketBundle.html) action to change the bundle of a bucket.
   *
   * @public
   */
  bundleId?: string | undefined;

  /**
   * The timestamp when the distribution was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The URL of the bucket.
   *
   * @public
   */
  url?: string | undefined;

  /**
   * An object that describes the location of the bucket, such as the Amazon Web Services Region and Availability Zone.
   *
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * The name of the bucket.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The support code for a bucket. Include this code in your email to support when you have questions about a Lightsail bucket. This code enables our support team to look up your Lightsail information more easily.
   *
   * @public
   */
  supportCode?: string | undefined;

  /**
   * The tag keys and optional values for the bucket. For more information, see [Tags in Amazon Lightsail](https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags) in the *Amazon Lightsail Developer Guide*.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Indicates whether object versioning is enabled for the bucket.
   *
   * The following options can be configured:
   *
   * - `Enabled` - Object versioning is enabled.
   * - `Suspended` - Object versioning was previously enabled but is currently suspended. Existing object versions are retained.
   * - `NeverEnabled` - Object versioning has never been enabled.
   *
   * @public
   */
  objectVersioning?: string | undefined;

  /**
   * Indicates whether the bundle that is currently applied to a bucket can be changed to another bundle.
   *
   * You can update a bucket's bundle only one time within a monthly Amazon Web Services billing cycle.
   *
   * Use the [UpdateBucketBundle](https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucketBundle.html) action to change a bucket's bundle.
   *
   * @public
   */
  ableToUpdateBundle?: boolean | undefined;

  /**
   * An array of strings that specify the Amazon Web Services account IDs that have read-only access to the bucket.
   *
   * @public
   */
  readonlyAccessAccounts?: string[] | undefined;

  /**
   * An array of objects that describe Lightsail instances that have access to the bucket.
   *
   * Use the [SetResourceAccessForBucket](https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_SetResourceAccessForBucket.html) action to update the instances that have access to a bucket.
   *
   * @public
   */
  resourcesReceivingAccess?: ResourceReceivingAccess[] | undefined;

  /**
   * An object that describes the state of the bucket.
   *
   * @public
   */
  state?: BucketState | undefined;

  /**
   * An object that describes the access log configuration for the bucket.
   *
   * @public
   */
  accessLogConfig?: BucketAccessLogConfig | undefined;

  /**
   * An array of cross-origin resource sharing (CORS) rules that identify origins and the HTTP methods that can be executed on your bucket. This field is only included in the response when CORS configuration is requested or when updating CORS configuration. For more information, see [Configuring cross-origin resource sharing (CORS)](https://docs.aws.amazon.com/lightsail/latest/userguide/configure-cors.html).
   *
   * @public
   */
  cors?: BucketCorsConfig | undefined;
}

/**
 * Describes the specifications of a bundle that can be applied to an Amazon Lightsail bucket.
 *
 * A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket.
 *
 * @public
 */
export interface BucketBundle {
  /**
   * The ID of the bundle.
   *
   * @public
   */
  bundleId?: string | undefined;

  /**
   * The name of the bundle.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The monthly price of the bundle, in US dollars.
   *
   * @public
   */
  price?: number | undefined;

  /**
   * The storage size of the bundle, in GB.
   *
   * @public
   */
  storagePerMonthInGb?: number | undefined;

  /**
   * The monthly network transfer quota of the bundle.
   *
   * @public
   */
  transferPerMonthInGb?: number | undefined;

  /**
   * Indicates whether the bundle is active. Use for a new or existing bucket.
   *
   * @public
   */
  isActive?: boolean | undefined;
}

/**
 * Describes a bundle, which is a set of specs describing your virtual private server (or *instance*).
 *
 * @public
 */
export interface Bundle {
  /**
   * The price in US dollars (`5.0`) of the bundle.
   *
   * @public
   */
  price?: number | undefined;

  /**
   * The number of vCPUs included in the bundle (`2`).
   *
   * @public
   */
  cpuCount?: number | undefined;

  /**
   * The size of the SSD (`30`).
   *
   * @public
   */
  diskSizeInGb?: number | undefined;

  /**
   * The bundle ID (`micro_x_x`).
   *
   * @public
   */
  bundleId?: string | undefined;

  /**
   * The instance type (`micro`).
   *
   * @public
   */
  instanceType?: string | undefined;

  /**
   * A Boolean value indicating whether the bundle is active.
   *
   * @public
   */
  isActive?: boolean | undefined;

  /**
   * A friendly name for the bundle (`Micro`).
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A numeric value that represents the power of the bundle (`500`). You can use the bundle's power value in conjunction with a blueprint's minimum power value to determine whether the blueprint will run on the bundle. For example, you need a bundle with a power value of 500 or more to create an instance that uses a blueprint with a minimum power value of 500.
   *
   * @public
   */
  power?: number | undefined;

  /**
   * The amount of RAM in GB (`2.0`).
   *
   * @public
   */
  ramSizeInGb?: number | undefined;

  /**
   * The data transfer rate per month in GB (`2000`).
   *
   * @public
   */
  transferPerMonthInGb?: number | undefined;

  /**
   * The operating system platform (Linux/Unix-based or Windows Server-based) that the bundle supports. You can only launch a `WINDOWS` bundle on a blueprint that supports the `WINDOWS` platform. `LINUX_UNIX` blueprints require a `LINUX_UNIX` bundle.
   *
   * @public
   */
  supportedPlatforms?: InstancePlatform[] | undefined;

  /**
   * Virtual computer blueprints that are supported by a Lightsail for Research bundle.
   *
   * > **Important:** This parameter only applies to Lightsail for Research resources.
   *
   * @public
   */
  supportedAppCategories?: AppCategory[] | undefined;

  /**
   * An integer that indicates the public ipv4 address count included in the bundle, the value is either 0 or 1.
   *
   * @public
   */
  publicIpv4AddressCount?: number | undefined;
}

/**
 * Describes the default cache behavior of an Amazon Lightsail content delivery network (CDN) distribution.
 *
 * @public
 */
export interface CacheBehavior {
  /**
   * The cache behavior of the distribution.
   *
   * The following cache behaviors can be specified:
   *
   * - **`cache`** - This option is best for static sites. When specified, your distribution caches and serves your entire website as static content. This behavior is ideal for websites with static content that doesn't change depending on who views it, or for websites that don't use cookies, headers, or query strings to personalize content.
   * - **`dont-cache`** - This option is best for sites that serve a mix of static and dynamic content. When specified, your distribution caches and serve only the content that is specified in the distribution's `CacheBehaviorPerPath` parameter. This behavior is ideal for websites or web applications that use cookies, headers, and query strings to personalize content for individual users.
   *
   * @public
   */
  behavior?: BehaviorEnum | undefined;
}

/**
 * Describes the per-path cache behavior of an Amazon Lightsail content delivery network (CDN) distribution.
 *
 * A per-path cache behavior is used to override, or add an exception to, the default cache behavior of a distribution. For example, if the `cacheBehavior` is set to `cache`, then a per-path cache behavior can be used to specify a directory, file, or file type that your distribution will cache. Alternately, if the distribution's `cacheBehavior` is `dont-cache`, then a per-path cache behavior can be used to specify a directory, file, or file type that your distribution will not cache.
 *
 * @public
 */
export interface CacheBehaviorPerPath {
  /**
   * The path to a directory or file to cached, or not cache. Use an asterisk symbol to specify wildcard directories (`path/to/assets/*`), and file types (`*.html, *jpg, *js`). Directories and file paths are case-sensitive.
   *
   * Examples:
   *
   * - Specify the following to cache all files in the document root of an Apache web server running on a Lightsail instance.
   *
   *   `var/www/html/`
   * - Specify the following file to cache only the index page in the document root of an Apache web server.
   *
   *   `var/www/html/index.html`
   * - Specify the following to cache only the .html files in the document root of an Apache web server.
   *
   *   `var/www/html/*.html`
   * - Specify the following to cache only the .jpg, .png, and .gif files in the images sub-directory of the document root of an Apache web server.
   *
   *   `var/www/html/images/*.jpg`
   *
   *   `var/www/html/images/*.png`
   *
   *   `var/www/html/images/*.gif`
   *
   *   Specify the following to cache all files in the images sub-directory of the document root of an Apache web server.
   *
   *   `var/www/html/images/`
   *
   * @public
   */
  path?: string | undefined;

  /**
   * The cache behavior for the specified path.
   *
   * You can specify one of the following per-path cache behaviors:
   *
   * - **`cache`** - This behavior caches the specified path.
   * - **`dont-cache`** - This behavior doesn't cache the specified path.
   *
   * @public
   */
  behavior?: BehaviorEnum | undefined;
}

/**
 * Describes whether an Amazon Lightsail content delivery network (CDN) distribution forwards cookies to the origin and, if so, which ones.
 *
 * For the cookies that you specify, your distribution caches separate versions of the specified content based on the cookie values in viewer requests.
 *
 * @public
 */
export interface CookieObject {
  /**
   * Specifies which cookies to forward to the distribution's origin for a cache behavior: `all`, `none`, or `allow-list` to forward only the cookies specified in the `cookiesAllowList` parameter.
   *
   * @public
   */
  option?: ForwardValues | undefined;

  /**
   * The specific cookies to forward to your distribution's origin.
   *
   * @public
   */
  cookiesAllowList?: string[] | undefined;
}

/**
 * Describes the request headers that a Lightsail distribution bases caching on.
 *
 * For the headers that you specify, your distribution caches separate versions of the specified content based on the header values in viewer requests. For example, suppose viewer requests for `logo.jpg` contain a custom `product` header that has a value of either `acme` or `apex`, and you configure your distribution to cache your content based on values in the `product` header. Your distribution forwards the `product` header to the origin and caches the response from the origin once for each header value.
 *
 * @public
 */
export interface HeaderObject {
  /**
   * The headers that you want your distribution to forward to your origin and base caching on.
   *
   * You can configure your distribution to do one of the following:
   *
   * - **`all`** - Forward all headers to your origin.
   * - **`none`** - Forward only the default headers.
   * - **`allow-list`** - Forward only the headers you specify using the `headersAllowList` parameter.
   *
   * @public
   */
  option?: ForwardValues | undefined;

  /**
   * The specific headers to forward to your distribution's origin.
   *
   * @public
   */
  headersAllowList?: HeaderEnum[] | undefined;
}

/**
 * Describes the query string parameters that an Amazon Lightsail content delivery network (CDN) distribution to bases caching on.
 *
 * For the query strings that you specify, your distribution caches separate versions of the specified content based on the query string values in viewer requests.
 *
 * @public
 */
export interface QueryStringObject {
  /**
   * Indicates whether the distribution forwards and caches based on query strings.
   *
   * @public
   */
  option?: boolean | undefined;

  /**
   * The specific query strings that the distribution forwards to the origin.
   *
   * Your distribution will cache content based on the specified query strings.
   *
   * If the `option` parameter is true, then your distribution forwards all query strings, regardless of what you specify using the `queryStringsAllowList` parameter.
   *
   * @public
   */
  queryStringsAllowList?: string[] | undefined;
}

/**
 * Describes the cache settings of an Amazon Lightsail content delivery network (CDN) distribution.
 *
 * These settings apply only to your distribution's `cacheBehaviors` (including the `defaultCacheBehavior`) that have a `behavior` of `cache`.
 *
 * @public
 */
export interface CacheSettings {
  /**
   * The default amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the content has been updated.
   *
   * > **Note:** The value specified applies only when the origin does not add HTTP headers such as `Cache-Control max-age`, `Cache-Control s-maxage`, and `Expires` to objects.
   *
   * @public
   */
  defaultTTL?: number | undefined;

  /**
   * The minimum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.
   *
   * A value of `0` must be specified for `minimumTTL` if the distribution is configured to forward all headers to the origin.
   *
   * @public
   */
  minimumTTL?: number | undefined;

  /**
   * The maximum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.
   *
   * The value specified applies only when the origin adds HTTP headers such as `Cache-Control max-age`, `Cache-Control s-maxage`, and `Expires` to objects.
   *
   * @public
   */
  maximumTTL?: number | undefined;

  /**
   * The HTTP methods that are processed and forwarded to the distribution's origin.
   *
   * You can specify the following options:
   *
   * - `GET,HEAD` - The distribution forwards the `GET` and `HEAD` methods.
   * - `GET,HEAD,OPTIONS` - The distribution forwards the `GET`, `HEAD`, and `OPTIONS` methods.
   * - `GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE` - The distribution forwards the `GET`, `HEAD`, `OPTIONS`, `PUT`, `PATCH`, `POST`, and `DELETE` methods.
   *
   * If you specify the third option, you might need to restrict access to your distribution's origin so users can't perform operations that you don't want them to. For example, you might not want users to have permission to delete objects from your origin.
   *
   * @public
   */
  allowedHTTPMethods?: string | undefined;

  /**
   * The HTTP method responses that are cached by your distribution.
   *
   * You can specify the following options:
   *
   * - `GET,HEAD` - The distribution caches responses to the `GET` and `HEAD` methods.
   * - `GET,HEAD,OPTIONS` - The distribution caches responses to the `GET`, `HEAD`, and `OPTIONS` methods.
   *
   * @public
   */
  cachedHTTPMethods?: string | undefined;

  /**
   * An object that describes the cookies that are forwarded to the origin. Your content is cached based on the cookies that are forwarded.
   *
   * @public
   */
  forwardedCookies?: CookieObject | undefined;

  /**
   * An object that describes the headers that are forwarded to the origin. Your content is cached based on the headers that are forwarded.
   *
   * @public
   */
  forwardedHeaders?: HeaderObject | undefined;

  /**
   * An object that describes the query strings that are forwarded to the origin. Your content is cached based on the query strings that are forwarded.
   *
   * @public
   */
  forwardedQueryStrings?: QueryStringObject | undefined;
}

/**
 * Describes the creation state of the canonical name (CNAME) records that are automatically added by Amazon Lightsail to the DNS of a domain to validate domain ownership for an SSL/TLS certificate.
 *
 * When you create an SSL/TLS certificate for a Lightsail resource, you must add a set of CNAME records to the DNS of the domains for the certificate to validate that you own the domains. Lightsail can automatically add the CNAME records to the DNS of the domain if the DNS zone for the domain exists within your Lightsail account. If automatic record addition fails, or if you manage the DNS of your domain using a third-party service, then you must manually add the CNAME records to the DNS of your domain. For more information, see [Verify an SSL/TLS certificate in Amazon Lightsail](https://docs.aws.amazon.com/lightsail/latest/userguide/verify-tls-ssl-certificate-using-dns-cname-https) in the *Amazon Lightsail Developer Guide*.
 *
 * @public
 */
export interface DnsRecordCreationState {
  /**
   * The status code for the automated DNS record creation.
   *
   * Following are the possible values:
   *
   * - `SUCCEEDED` - The validation records were successfully added to the domain.
   * - `STARTED` - The automatic DNS record creation has started.
   * - `FAILED` - The validation records failed to be added to the domain.
   *
   * @public
   */
  code?: DnsRecordCreationStateCode | undefined;

  /**
   * The message that describes the reason for the status code.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Describes the domain name system (DNS) records to add to your domain's DNS to validate it for an Amazon Lightsail certificate.
 *
 * @public
 */
export interface ResourceRecord {
  /**
   * The name of the record.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The DNS record type.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The value for the DNS record.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Describes the domain name system (DNS) records that you must add to the DNS of your registered domain to validate ownership for an Amazon Lightsail SSL/TLS certificate.
 *
 * @public
 */
export interface DomainValidationRecord {
  /**
   * The domain name of the certificate validation record. For example, `example.com` or `www.example.com`.
   *
   * @public
   */
  domainName?: string | undefined;

  /**
   * An object that describes the DNS records to add to your domain's DNS to validate it for the certificate.
   *
   * @public
   */
  resourceRecord?: ResourceRecord | undefined;

  /**
   * An object that describes the state of the canonical name (CNAME) records that are automatically added by Lightsail to the DNS of the domain to validate domain ownership.
   *
   * @public
   */
  dnsRecordCreationState?: DnsRecordCreationState | undefined;

  /**
   * The validation status of the record.
   *
   * @public
   */
  validationStatus?: CertificateDomainValidationStatus | undefined;
}

/**
 * Describes the status of a SSL/TLS certificate renewal managed by Amazon Lightsail.
 *
 * @public
 */
export interface RenewalSummary {
  /**
   * An array of objects that describe the domain validation records of the certificate.
   *
   * @public
   */
  domainValidationRecords?: DomainValidationRecord[] | undefined;

  /**
   * The renewal status of the certificate.
   *
   * The following renewal status are possible:
   *
   * - **`PendingAutoRenewal`** - Lightsail is attempting to automatically validate the domain names of the certificate. No further action is required.
   * - **`PendingValidation`** - Lightsail couldn't automatically validate one or more domain names of the certificate. You must take action to validate these domain names or the certificate won't be renewed. Check to make sure your certificate's domain validation records exist in your domain's DNS, and that your certificate remains in use.
   * - **`Success`** - All domain names in the certificate are validated, and Lightsail renewed the certificate. No further action is required.
   * - **`Failed`** - One or more domain names were not validated before the certificate expired, and Lightsail did not renew the certificate. You can request a new certificate using the `CreateCertificate` action.
   *
   * @public
   */
  renewalStatus?: RenewalStatus | undefined;

  /**
   * The reason for the renewal status of the certificate.
   *
   * @public
   */
  renewalStatusReason?: string | undefined;

  /**
   * The timestamp when the certificate was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Describes the full details of an Amazon Lightsail SSL/TLS certificate.
 *
 * > **Note:** To get a summary of a certificate, use the `GetCertificates` action and omit `includeCertificateDetails` from your request. The response will include only the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.
 *
 * @public
 */
export interface Certificate {
  /**
   * The Amazon Resource Name (ARN) of the certificate.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the certificate (`my-certificate`).
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The domain name of the certificate.
   *
   * @public
   */
  domainName?: string | undefined;

  /**
   * The validation status of the certificate.
   *
   * @public
   */
  status?: CertificateStatus | undefined;

  /**
   * The serial number of the certificate.
   *
   * @public
   */
  serialNumber?: string | undefined;

  /**
   * An array of strings that specify the alternate domains (`example2.com`) and subdomains (`blog.example.com`) of the certificate.
   *
   * @public
   */
  subjectAlternativeNames?: string[] | undefined;

  /**
   * An array of objects that describe the domain validation records of the certificate.
   *
   * @public
   */
  domainValidationRecords?: DomainValidationRecord[] | undefined;

  /**
   * The validation failure reason, if any, of the certificate.
   *
   * The following failure reasons are possible:
   *
   * - **`NO_AVAILABLE_CONTACTS`** - This failure applies to email validation, which is not available for Lightsail certificates.
   * - **`ADDITIONAL_VERIFICATION_REQUIRED`** - Lightsail requires additional information to process this certificate request. This can happen as a fraud-protection measure, such as when the domain ranks within the Alexa top 1000 websites. To provide the required information, use the [Amazon Web Services Support Center](https://console.aws.amazon.com/support/home) to contact Amazon Web Services Support.
   *
   *   > **Note:** You cannot request a certificate for Amazon-owned domain names such as those ending in amazonaws.com, cloudfront.net, or elasticbeanstalk.com.
   * - **`DOMAIN_NOT_ALLOWED`** - One or more of the domain names in the certificate request was reported as an unsafe domain by [VirusTotal](https://www.virustotal.com/gui/home/url). To correct the problem, search for your domain name on the [VirusTotal](https://www.virustotal.com/gui/home/url) website. If your domain is reported as suspicious, see [Google Help for Hacked Websites](https://developers.google.com/web/fundamentals/security/hacked) to learn what you can do.
   *
   *   If you believe that the result is a false positive, notify the organization that is reporting the domain. VirusTotal is an aggregate of several antivirus and URL scanners and cannot remove your domain from a block list itself. After you correct the problem and the VirusTotal registry has been updated, request a new certificate.
   *
   *   If you see this error and your domain is not included in the VirusTotal list, visit the [Amazon Web Services Support Center](https://console.aws.amazon.com/support/home) and create a case.
   * - **`INVALID_PUBLIC_DOMAIN`** - One or more of the domain names in the certificate request is not valid. Typically, this is because a domain name in the request is not a valid top-level domain. Try to request a certificate again, correcting any spelling errors or typos that were in the failed request, and ensure that all domain names in the request are for valid top-level domains. For example, you cannot request a certificate for `example.invalidpublicdomain` because `invalidpublicdomain` is not a valid top-level domain.
   * - **`OTHER`** - Typically, this failure occurs when there is a typographical error in one or more of the domain names in the certificate request. Try to request a certificate again, correcting any spelling errors or typos that were in the failed request.
   *
   * @public
   */
  requestFailureReason?: string | undefined;

  /**
   * The number of Lightsail resources that the certificate is attached to.
   *
   * @public
   */
  inUseResourceCount?: number | undefined;

  /**
   * The algorithm used to generate the key pair (the public and private key) of the certificate.
   *
   * @public
   */
  keyAlgorithm?: string | undefined;

  /**
   * The timestamp when the certificate was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the certificate was issued.
   *
   * @public
   */
  issuedAt?: Date | undefined;

  /**
   * The certificate authority that issued the certificate.
   *
   * @public
   */
  issuerCA?: string | undefined;

  /**
   * The timestamp when the certificate is first valid.
   *
   * @public
   */
  notBefore?: Date | undefined;

  /**
   * The timestamp when the certificate expires.
   *
   * @public
   */
  notAfter?: Date | undefined;

  /**
   * The renewal eligibility of the certificate.
   *
   * @public
   */
  eligibleToRenew?: string | undefined;

  /**
   * An object that describes the status of the certificate renewal managed by Lightsail.
   *
   * @public
   */
  renewalSummary?: RenewalSummary | undefined;

  /**
   * The timestamp when the certificate was revoked. This value is present only when the certificate status is `REVOKED`.
   *
   * @public
   */
  revokedAt?: Date | undefined;

  /**
   * The reason the certificate was revoked. This value is present only when the certificate status is `REVOKED`.
   *
   * @public
   */
  revocationReason?: string | undefined;

  /**
   * The tag keys and optional values for the resource. For more information about tags in Lightsail, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-tags).
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The support code. Include this code in your email to support when you have questions about your Lightsail certificate. This code enables our support team to look up your Lightsail information more easily.
   *
   * @public
   */
  supportCode?: string | undefined;
}

/**
 * Describes an Amazon Lightsail SSL/TLS certificate.
 *
 * @public
 */
export interface CertificateSummary {
  /**
   * The Amazon Resource Name (ARN) of the certificate.
   *
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * The name of the certificate.
   *
   * @public
   */
  certificateName?: string | undefined;

  /**
   * The domain name of the certificate.
   *
   * @public
   */
  domainName?: string | undefined;

  /**
   * An object that describes a certificate in detail.
   *
   * @public
   */
  certificateDetail?: Certificate | undefined;

  /**
   * The tag keys and optional values for the resource. For more information about tags in Lightsail, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-tags).
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Describes ports to open on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.
 *
 * @public
 */
export interface PortInfo {
  /**
   * The first port in a range of open ports on an instance.
   *
   * Allowed ports:
   *
   * - TCP and UDP - `0` to `65535`
   * - ICMP - The ICMP type for IPv4 addresses. For example, specify `8` as the `fromPort` (ICMP type), and `-1` as the `toPort` (ICMP code), to enable ICMP Ping. For more information, see [Control Messages](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages) on *Wikipedia*.
   * - ICMPv6 - The ICMP type for IPv6 addresses. For example, specify `128` as the `fromPort` (ICMPv6 type), and `0` as `toPort` (ICMPv6 code). For more information, see [Internet Control Message Protocol for IPv6](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol_for_IPv6).
   *
   * @public
   */
  fromPort?: number | undefined;

  /**
   * The last port in a range of open ports on an instance.
   *
   * Allowed ports:
   *
   * - TCP and UDP - `0` to `65535`
   * - ICMP - The ICMP code for IPv4 addresses. For example, specify `8` as the `fromPort` (ICMP type), and `-1` as the `toPort` (ICMP code), to enable ICMP Ping. For more information, see [Control Messages](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages) on *Wikipedia*.
   * - ICMPv6 - The ICMP code for IPv6 addresses. For example, specify `128` as the `fromPort` (ICMPv6 type), and `0` as `toPort` (ICMPv6 code). For more information, see [Internet Control Message Protocol for IPv6](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol_for_IPv6).
   *
   * @public
   */
  toPort?: number | undefined;

  /**
   * The IP protocol name.
   *
   * The name can be one of the following:
   *
   * - `tcp` - Transmission Control Protocol (TCP) provides reliable, ordered, and error-checked delivery of streamed data between applications running on hosts communicating by an IP network. If you have an application that doesn't require reliable data stream service, use UDP instead.
   * - `all` - All transport layer protocol types. For more general information, see [Transport layer](https://en.wikipedia.org/wiki/Transport_layer) on *Wikipedia*.
   * - `udp` - With User Datagram Protocol (UDP), computer applications can send messages (or datagrams) to other hosts on an Internet Protocol (IP) network. Prior communications are not required to set up transmission channels or data paths. Applications that don't require reliable data stream service can use UDP, which provides a connectionless datagram service that emphasizes reduced latency over reliability. If you do require reliable data stream service, use TCP instead.
   * - `icmp` - Internet Control Message Protocol (ICMP) is used to send error messages and operational information indicating success or failure when communicating with an instance. For example, an error is indicated when an instance could not be reached. When you specify `icmp` as the `protocol`, you must specify the ICMP type using the `fromPort` parameter, and ICMP code using the `toPort` parameter.
   * - `icmp6` - Internet Control Message Protocol (ICMP) for IPv6. When you specify `icmp6` as the `protocol`, you must specify the ICMP type using the `fromPort` parameter, and ICMP code using the `toPort` parameter.
   *
   * @public
   */
  protocol?: NetworkProtocol | undefined;

  /**
   * The IPv4 address, or range of IPv4 addresses (in CIDR notation) that are allowed to connect to an instance through the ports, and the protocol.
   *
   * > **Note:** The `ipv6Cidrs` parameter lists the IPv6 addresses that are allowed to connect to an instance.
   *
   * Examples:
   *
   * - To allow the IP address `192.0.2.44`, specify `192.0.2.44` or `192.0.2.44/32`.
   * - To allow the IP addresses `192.0.2.0` to `192.0.2.255`, specify `192.0.2.0/24`.
   *
   * For more information about CIDR block notation, see [Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation) on *Wikipedia*.
   *
   * @public
   */
  cidrs?: string[] | undefined;

  /**
   * The IPv6 address, or range of IPv6 addresses (in CIDR notation) that are allowed to connect to an instance through the ports, and the protocol. Only devices with an IPv6 address can connect to an instance through IPv6; otherwise, IPv4 should be used.
   *
   * > **Note:** The `cidrs` parameter lists the IPv4 addresses that are allowed to connect to an instance.
   *
   * For more information about CIDR block notation, see [Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation) on *Wikipedia*.
   *
   * @public
   */
  ipv6Cidrs?: string[] | undefined;

  /**
   * An alias that defines access for a preconfigured range of IP addresses.
   *
   * The only alias currently supported is `lightsail-connect`, which allows IP addresses of the browser-based RDP/SSH client in the Lightsail console to connect to your instance.
   *
   * @public
   */
  cidrListAliases?: string[] | undefined;
}

/**
 * @public
 */
export interface CloseInstancePublicPortsRequest {
  /**
   * An object to describe the ports to close for the specified instance.
   *
   * @public
   */
  portInfo: PortInfo | undefined;

  /**
   * The name of the instance for which to close ports.
   *
   * @public
   */
  instanceName: string | undefined;
}

/**
 * @public
 */
export interface CloseInstancePublicPortsResult {
  /**
   * An object that describes the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * Describes the destination of a record.
 *
 * @public
 */
export interface DestinationInfo {
  /**
   * The ID of the resource created at the destination.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The destination service of the record.
   *
   * @public
   */
  service?: string | undefined;
}

/**
 * Describes the source of a CloudFormation stack record (i.e., the export snapshot record).
 *
 * @public
 */
export interface CloudFormationStackRecordSourceInfo {
  /**
   * The Lightsail resource type (`ExportSnapshotRecord`).
   *
   * @public
   */
  resourceType?: CloudFormationStackRecordSourceType | undefined;

  /**
   * The name of the record.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the export snapshot record.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * Describes a CloudFormation stack record created as a result of the `create cloud formation stack` action.
 *
 * A CloudFormation stack record provides information about the AWS CloudFormation stack used to create a new Amazon Elastic Compute Cloud instance from an exported Lightsail instance snapshot.
 *
 * @public
 */
export interface CloudFormationStackRecord {
  /**
   * The name of the CloudFormation stack record. It starts with `CloudFormationStackRecord` followed by a GUID.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the CloudFormation stack record.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The date when the CloudFormation stack record was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * A list of objects describing the Availability Zone and Amazon Web Services Region of the CloudFormation stack record.
   *
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * The Lightsail resource type (`CloudFormationStackRecord`).
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The current state of the CloudFormation stack record.
   *
   * @public
   */
  state?: RecordState | undefined;

  /**
   * A list of objects describing the source of the CloudFormation stack record.
   *
   * @public
   */
  sourceInfo?: CloudFormationStackRecordSourceInfo[] | undefined;

  /**
   * A list of objects describing the destination service, which is AWS CloudFormation, and the Amazon Resource Name (ARN) of the AWS CloudFormation stack.
   *
   * @public
   */
  destinationInfo?: DestinationInfo | undefined;
}

/**
 * Describes a contact method.
 *
 * A contact method is a way to send you notifications. For more information, see [Notifications in Amazon Lightsail](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-notifications).
 *
 * @public
 */
export interface ContactMethod {
  /**
   * The destination of the contact method, such as an email address or a mobile phone number.
   *
   * @public
   */
  contactEndpoint?: string | undefined;

  /**
   * The current status of the contact method.
   *
   * A contact method has the following possible status:
   *
   * - `PendingVerification` - The contact method has not yet been verified, and the verification has not yet expired.
   * - `Valid` - The contact method has been verified.
   * - `InValid` - An attempt was made to verify the contact method, but the verification has expired.
   *
   * @public
   */
  status?: ContactMethodStatus | undefined;

  /**
   * The protocol of the contact method, such as email or SMS (text messaging).
   *
   * @public
   */
  protocol?: ContactProtocol | undefined;

  /**
   * The name of the contact method.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the contact method.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The timestamp when the contact method was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * An object that describes the location of the contact method, such as the Amazon Web Services Region and Availability Zone.
   *
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * The Lightsail resource type of the contact method.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The support code. Include this code in your email to support when you have questions about your Lightsail contact method. This code enables our support team to look up your Lightsail information more easily.
   *
   * @public
   */
  supportCode?: string | undefined;

  /**
   * The tag keys and optional values for the resource. For more information about tags in Lightsail, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-tags).
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Describes the settings of a container that will be launched, or that is launched, to an Amazon Lightsail container service.
 *
 * @public
 */
export interface Container {
  /**
   * The name of the image used for the container.
   *
   * Container images sourced from your Lightsail container service, that are registered and stored on your service, start with a colon (`:`). For example, if your container service name is `container-service-1`, the container image label is `mystaticsite`, and you want to use the third (`3`) version of the registered container image, then you should specify `:container-service-1.mystaticsite.3`. To use the latest version of a container image, specify `latest` instead of a version number (for example, `:container-service-1.mystaticsite.latest`). Lightsail will automatically use the highest numbered version of the registered container image.
   *
   * Container images sourced from a public registry like Docker Hub don't start with a colon. For example, `nginx:latest` or `nginx`.
   *
   * @public
   */
  image?: string | undefined;

  /**
   * The launch command for the container.
   *
   * @public
   */
  command?: string[] | undefined;

  /**
   * The environment variables of the container.
   *
   * @public
   */
  environment?: Record<string, string> | undefined;

  /**
   * The open firewall ports of the container.
   *
   * @public
   */
  ports?: Record<string, ContainerServiceProtocol> | undefined;
}

/**
 * Describes a container image that is registered to an Amazon Lightsail container service.
 *
 * @public
 */
export interface ContainerImage {
  /**
   * The name of the container image.
   *
   * @public
   */
  image?: string | undefined;

  /**
   * The digest of the container image.
   *
   * @public
   */
  digest?: string | undefined;

  /**
   * The timestamp when the container image was created.
   *
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * Describes the health check configuration of an Amazon Lightsail container service.
 *
 * @public
 */
export interface ContainerServiceHealthCheckConfig {
  /**
   * The number of consecutive health checks successes required before moving the container to the `Healthy` state. The default value is `2`.
   *
   * @public
   */
  healthyThreshold?: number | undefined;

  /**
   * The number of consecutive health check failures required before moving the container to the `Unhealthy` state. The default value is `2`.
   *
   * @public
   */
  unhealthyThreshold?: number | undefined;

  /**
   * The amount of time, in seconds, during which no response means a failed health check. You can specify between 2 and 60 seconds. The default value is `2`.
   *
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * The approximate interval, in seconds, between health checks of an individual container. You can specify between 5 and 300 seconds. The default value is `5`.
   *
   * @public
   */
  intervalSeconds?: number | undefined;

  /**
   * The path on the container on which to perform the health check. The default value is `/`.
   *
   * @public
   */
  path?: string | undefined;

  /**
   * The HTTP codes to use when checking for a successful response from a container. You can specify values between `200` and `499`. You can specify multiple values (for example, `200,202`) or a range of values (for example, `200-299`).
   *
   * @public
   */
  successCodes?: string | undefined;
}

/**
 * Describes the public endpoint configuration of a deployment of an Amazon Lightsail container service.
 *
 * @public
 */
export interface ContainerServiceEndpoint {
  /**
   * The name of the container entry of the deployment that the endpoint configuration applies to.
   *
   * @public
   */
  containerName?: string | undefined;

  /**
   * The port of the specified container to which traffic is forwarded to.
   *
   * @public
   */
  containerPort?: number | undefined;

  /**
   * An object that describes the health check configuration of the container.
   *
   * @public
   */
  healthCheck?: ContainerServiceHealthCheckConfig | undefined;
}

/**
 * Describes a container deployment configuration of an Amazon Lightsail container service.
 *
 * A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.
 *
 * @public
 */
export interface ContainerServiceDeployment {
  /**
   * The version number of the deployment.
   *
   * @public
   */
  version?: number | undefined;

  /**
   * The state of the deployment.
   *
   * A deployment can be in one of the following states:
   *
   * - `ACTIVATING` - The deployment is being created.
   * - `ACTIVE` - The deployment was successfully created, and it's currently running on the container service. The container service can have only one deployment in an active state at a time.
   * - `INACTIVE` - The deployment was previously successfully created, but it is not currently running on the container service.
   * - `FAILED` - The deployment failed. Use the `GetContainerLog` action to view the log events for the containers in the deployment to try to determine the reason for the failure.
   *
   * @public
   */
  state?: ContainerServiceDeploymentState | undefined;

  /**
   * An object that describes the configuration for the containers of the deployment.
   *
   * @public
   */
  containers?: Record<string, Container> | undefined;

  /**
   * An object that describes the endpoint of the deployment.
   *
   * @public
   */
  publicEndpoint?: ContainerServiceEndpoint | undefined;

  /**
   * The timestamp when the deployment was created.
   *
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * Describes the activation status of the role that you can use to grant an Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR) private repositories.
 *
 * When activated, Lightsail creates an Identity and Access Management (IAM) role for the specified Lightsail container service. You can use the ARN of the role to create a trust relationship between your Lightsail container service and an Amazon ECR private repository in your Amazon Web Services account. This allows your container service to pull images from Amazon ECR private repositories. For more information, see [Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-container-service-ecr-private-repo-access) in the *Amazon Lightsail Developer Guide*.
 *
 * @public
 */
export interface ContainerServiceECRImagePullerRole {
  /**
   * A Boolean value that indicates whether the role is activated.
   *
   * @public
   */
  isActive?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role, if it is activated.
   *
   * @public
   */
  principalArn?: string | undefined;
}

/**
 * Describes the configuration for an Amazon Lightsail container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.
 *
 * For more information, see [Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-container-service-ecr-private-repo-access) in the *Amazon Lightsail Developer Guide*.
 *
 * @public
 */
export interface PrivateRegistryAccess {
  /**
   * An object that describes the activation status of the role that you can use to grant a Lightsail container service access to Amazon ECR private repositories. If the role is activated, the Amazon Resource Name (ARN) of the role is also listed.
   *
   * @public
   */
  ecrImagePullerRole?: ContainerServiceECRImagePullerRole | undefined;
}

/**
 * Describes the current state of a container service.
 *
 * @public
 */
export interface ContainerServiceStateDetail {
  /**
   * The state code of the container service.
   *
   * The following state codes are possible:
   *
   * - The following state codes are possible if your container service is in a `DEPLOYING` or `UPDATING` state:
   *
   *   - `CREATING_SYSTEM_RESOURCES` - The system resources for your container service are being created.
   *   - `CREATING_NETWORK_INFRASTRUCTURE` - The network infrastructure for your container service are being created.
   *   - `PROVISIONING_CERTIFICATE` - The SSL/TLS certificate for your container service is being created.
   *   - `PROVISIONING_SERVICE` - Your container service is being provisioned.
   *   - `CREATING_DEPLOYMENT` - Your deployment is being created on your container service.
   *   - `EVALUATING_HEALTH_CHECK` - The health of your deployment is being evaluated.
   *   - `ACTIVATING_DEPLOYMENT` - Your deployment is being activated.
   * - The following state codes are possible if your container service is in a `PENDING` state:
   *
   *   - `CERTIFICATE_LIMIT_EXCEEDED` - The SSL/TLS certificate required for your container service exceeds the maximum number of certificates allowed for your account.
   *   - `UNKNOWN_ERROR` - An error was experienced when your container service was being created.
   *
   * @public
   */
  code?: ContainerServiceStateDetailCode | undefined;

  /**
   * A message that provides more information for the state code.
   *
   * > **Note:** The state detail is populated only when a container service is in a `PENDING`, `DEPLOYING`, or `UPDATING` state.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Describes an Amazon Lightsail container service.
 *
 * @public
 */
export interface ContainerService {
  /**
   * The name of the container service.
   *
   * @public
   */
  containerServiceName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the container service.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The timestamp when the container service was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * An object that describes the location of the container service, such as the Amazon Web Services Region and Availability Zone.
   *
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * The Lightsail resource type of the container service.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The tag keys and optional values for the resource. For more information about tags in Lightsail, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-tags).
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The power specification of the container service.
   *
   * The power specifies the amount of RAM, the number of vCPUs, and the base price of the container service.
   *
   * @public
   */
  power?: ContainerServicePowerName | undefined;

  /**
   * The ID of the power of the container service.
   *
   * @public
   */
  powerId?: string | undefined;

  /**
   * The current state of the container service.
   *
   * The following container service states are possible:
   *
   * - `PENDING` - The container service is being created.
   * - `READY` - The container service is running but it does not have an active container deployment.
   * - `DEPLOYING` - The container service is launching a container deployment.
   * - `RUNNING` - The container service is running and it has an active container deployment.
   * - `UPDATING` - The container service capacity or its custom domains are being updated.
   * - `DELETING` - The container service is being deleted.
   * - `DISABLED` - The container service is disabled, and its active deployment and containers, if any, are shut down.
   *
   * @public
   */
  state?: ContainerServiceState | undefined;

  /**
   * An object that describes the current state of the container service.
   *
   * > **Note:** The state detail is populated only when a container service is in a `PENDING`, `DEPLOYING`, or `UPDATING` state.
   *
   * @public
   */
  stateDetail?: ContainerServiceStateDetail | undefined;

  /**
   * The scale specification of the container service.
   *
   * The scale specifies the allocated compute nodes of the container service.
   *
   * @public
   */
  scale?: number | undefined;

  /**
   * An object that describes the current container deployment of the container service.
   *
   * @public
   */
  currentDeployment?: ContainerServiceDeployment | undefined;

  /**
   * An object that describes the next deployment of the container service.
   *
   * This value is `null` when there is no deployment in a `pending` state.
   *
   * @public
   */
  nextDeployment?: ContainerServiceDeployment | undefined;

  /**
   * A Boolean value indicating whether the container service is disabled.
   *
   * @public
   */
  isDisabled?: boolean | undefined;

  /**
   * The principal ARN of the container service.
   *
   * The principal ARN can be used to create a trust relationship between your standard Amazon Web Services account and your Lightsail container service. This allows you to give your service permission to access resources in your standard Amazon Web Services account.
   *
   * @public
   */
  principalArn?: string | undefined;

  /**
   * The private domain name of the container service.
   *
   * The private domain name is accessible only by other resources within the default virtual private cloud (VPC) of your Lightsail account.
   *
   * @public
   */
  privateDomainName?: string | undefined;

  /**
   * The public domain name of the container service, such as `example.com` and `www.example.com`.
   *
   * You can specify up to four public domain names for a container service. The domain names that you specify are used when you create a deployment with a container configured as the public endpoint of your container service.
   *
   * If you don't specify public domain names, then you can use the default domain of the container service.
   *
   * > **Important:** You must create and validate an SSL/TLS certificate before you can use public domain names with your container service. Use the `CreateCertificate` action to create a certificate for the public domain names you want to use with your container service.
   *
   * See `CreateContainerService` or `UpdateContainerService` for information about how to specify public domain names for your Lightsail container service.
   *
   * @public
   */
  publicDomainNames?: Record<string, string[]> | undefined;

  /**
   * The publicly accessible URL of the container service.
   *
   * If no public endpoint is specified in the `currentDeployment`, this URL returns a 404 response.
   *
   * @public
   */
  url?: string | undefined;

  /**
   * An object that describes the configuration for the container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.
   *
   * For more information, see [Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-container-service-ecr-private-repo-access) in the *Amazon Lightsail Developer Guide*.
   *
   * @public
   */
  privateRegistryAccess?: PrivateRegistryAccess | undefined;
}

/**
 * Describes the settings of a public endpoint for an Amazon Lightsail container service.
 *
 * @public
 */
export interface EndpointRequest {
  /**
   * The name of the container for the endpoint.
   *
   * @public
   */
  containerName: string | undefined;

  /**
   * The port of the container to which traffic is forwarded to.
   *
   * @public
   */
  containerPort: number | undefined;

  /**
   * An object that describes the health check configuration of the container.
   *
   * @public
   */
  healthCheck?: ContainerServiceHealthCheckConfig | undefined;
}

/**
 * Describes a container deployment configuration of an Amazon Lightsail container service.
 *
 * A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.
 *
 * @public
 */
export interface ContainerServiceDeploymentRequest {
  /**
   * An object that describes the configuration for the containers of the deployment.
   *
   * @public
   */
  containers?: Record<string, Container> | undefined;

  /**
   * An object that describes the endpoint of the deployment.
   *
   * @public
   */
  publicEndpoint?: EndpointRequest | undefined;
}

/**
 * Describes a request to activate or deactivate the role that you can use to grant an Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR) private repositories.
 *
 * When activated, Lightsail creates an Identity and Access Management (IAM) role for the specified Lightsail container service. You can use the ARN of the role to create a trust relationship between your Lightsail container service and an Amazon ECR private repository in your Amazon Web Services account. This allows your container service to pull images from Amazon ECR private repositories. For more information, see [Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-container-service-ecr-private-repo-access) in the *Amazon Lightsail Developer Guide*.
 *
 * @public
 */
export interface ContainerServiceECRImagePullerRoleRequest {
  /**
   * A Boolean value that indicates whether to activate the role.
   *
   * @public
   */
  isActive?: boolean | undefined;
}

/**
 * Describes the log events of a container of an Amazon Lightsail container service.
 *
 * @public
 */
export interface ContainerServiceLogEvent {
  /**
   * The timestamp when the container service log event was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The message of the container service log event.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Describes the powers that can be specified for an Amazon Lightsail container service.
 *
 * The power specifies the amount of RAM, the number of vCPUs, and the base price of the container service.
 *
 * @public
 */
export interface ContainerServicePower {
  /**
   * The ID of the power (`nano-1`).
   *
   * @public
   */
  powerId?: string | undefined;

  /**
   * The monthly price of the power in USD.
   *
   * @public
   */
  price?: number | undefined;

  /**
   * The number of vCPUs included in the power.
   *
   * @public
   */
  cpuCount?: number | undefined;

  /**
   * The amount of RAM (in GB) of the power.
   *
   * @public
   */
  ramSizeInGb?: number | undefined;

  /**
   * The friendly name of the power (`nano`).
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A Boolean value indicating whether the power is active and can be specified for container services.
   *
   * @public
   */
  isActive?: boolean | undefined;
}

/**
 * Describes the sign-in credentials for the container image registry of an Amazon Lightsail account.
 *
 * @public
 */
export interface ContainerServiceRegistryLogin {
  /**
   * The container service registry username to use to push container images to the container image registry of a Lightsail account.
   *
   * @public
   */
  username?: string | undefined;

  /**
   * The container service registry password to use to push container images to the container image registry of a Lightsail account
   *
   * @public
   */
  password?: string | undefined;

  /**
   * The timestamp of when the container image registry sign-in credentials expire.
   *
   * The log in credentials expire 12 hours after they are created, at which point you will need to create a new set of log in credentials using the `CreateContainerServiceRegistryLogin` action.
   *
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * The address to use to push container images to the container image registry of a Lightsail account.
   *
   * @public
   */
  registry?: string | undefined;
}

/**
 * @public
 */
export interface ContainerServicesListResult {
  /**
   * An array of objects that describe one or more container services.
   *
   * @public
   */
  containerServices?: ContainerService[] | undefined;
}

/**
 * @public
 */
export interface CopySnapshotRequest {
  /**
   * The name of the source manual snapshot to copy.
   *
   * Constraint:
   *
   * - Define this parameter only when copying a manual snapshot as another manual snapshot.
   *
   * @public
   */
  sourceSnapshotName?: string | undefined;

  /**
   * The name of the source instance or disk from which the source automatic snapshot was created.
   *
   * Constraint:
   *
   * - Define this parameter only when copying an automatic snapshot as a manual snapshot. For more information, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-keeping-automatic-snapshots).
   *
   * @public
   */
  sourceResourceName?: string | undefined;

  /**
   * The date of the source automatic snapshot to copy. Use the `get auto snapshots` operation to identify the dates of the available automatic snapshots.
   *
   * Constraints:
   *
   * - Must be specified in `YYYY-MM-DD` format.
   * - This parameter cannot be defined together with the `use latest restorable auto snapshot` parameter. The `restore date` and `use latest restorable auto snapshot` parameters are mutually exclusive.
   * - Define this parameter only when copying an automatic snapshot as a manual snapshot. For more information, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-keeping-automatic-snapshots).
   *
   * @public
   */
  restoreDate?: string | undefined;

  /**
   * A Boolean value to indicate whether to use the latest available automatic snapshot of the specified source instance or disk.
   *
   * Constraints:
   *
   * - This parameter cannot be defined together with the `restore date` parameter. The `use latest restorable auto snapshot` and `restore date` parameters are mutually exclusive.
   * - Define this parameter only when copying an automatic snapshot as a manual snapshot. For more information, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-keeping-automatic-snapshots).
   *
   * @public
   */
  useLatestRestorableAutoSnapshot?: boolean | undefined;

  /**
   * The name of the new manual snapshot to be created as a copy.
   *
   * @public
   */
  targetSnapshotName: string | undefined;

  /**
   * The Amazon Web Services Region where the source manual or automatic snapshot is located.
   *
   * @public
   */
  sourceRegion: RegionName | undefined;
}

/**
 * @public
 */
export interface CopySnapshotResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * Sets the start date and end date for retrieving a cost estimate. The start date is inclusive, but the end date is exclusive. For example, if `start` is `2017-01-01` and `end` is `2017-05-01`, then the cost and usage data is retrieved from `2017-01-01` up to and including `2017-04-30` but not including `2017-05-01`.
 *
 * @public
 */
export interface TimePeriod {
  /**
   * The beginning of the time period. The start date is inclusive. For example, if `start` is `2017-01-01`, Lightsail for Research retrieves cost and usage data starting at `2017-01-01` up to the end date. The start date must be equal to or no later than the current date to avoid a validation error.
   *
   * @public
   */
  start?: Date | undefined;

  /**
   * The end of the time period. The end date is exclusive. For example, if `end` is `2017-05-01`, Lightsail for Research retrieves cost and usage data from the start date up to, but not including, `2017-05-01`.
   *
   * @public
   */
  end?: Date | undefined;
}

/**
 * An estimate that's associated with a time period.
 *
 * @public
 */
export interface EstimateByTime {
  /**
   * The amount of cost or usage that's measured for the cost estimate.
   *
   * @public
   */
  usageCost?: number | undefined;

  /**
   * The unit of measurement that's used for the cost estimate.
   *
   * @public
   */
  pricingUnit?: PricingUnit | undefined;

  /**
   * The number of pricing units used to calculate the total number of hours. For example, 1 unit equals 1 hour.
   *
   * @public
   */
  unit?: number | undefined;

  /**
   * The currency of the estimate in USD.
   *
   * @public
   */
  currency?: Currency | undefined;

  /**
   * The period of time, in days, that an estimate covers. The period has a start date and an end date. The start date must come before the end date.
   *
   * @public
   */
  timePeriod?: TimePeriod | undefined;
}

/**
 * Describes the estimated cost for resources in your Lightsail for Research account.
 *
 * @public
 */
export interface CostEstimate {
  /**
   * The types of usage that are included in the estimate, such as costs, usage, or data transfer.
   *
   * @public
   */
  usageType?: string | undefined;

  /**
   * The cost estimate result that's associated with a time period.
   *
   * @public
   */
  resultsByTime?: EstimateByTime[] | undefined;
}

/**
 * @public
 */
export interface CreateBucketRequest {
  /**
   * The name for the bucket.
   *
   * For more information about bucket names, see [Bucket naming rules in Amazon Lightsail](https://docs.aws.amazon.com/lightsail/latest/userguide/bucket-naming-rules-in-amazon-lightsail) in the *Amazon Lightsail Developer Guide*.
   *
   * @public
   */
  bucketName: string | undefined;

  /**
   * The ID of the bundle to use for the bucket.
   *
   * A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket.
   *
   * Use the [GetBucketBundles](https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketBundles.html) action to get a list of bundle IDs that you can specify.
   *
   * Use the [UpdateBucketBundle](https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucketBundle.html) action to change the bundle after the bucket is created.
   *
   * @public
   */
  bundleId: string | undefined;

  /**
   * The tag keys and optional values to add to the bucket during creation.
   *
   * Use the [TagResource](https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_TagResource.html) action to tag the bucket after it's created.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * A Boolean value that indicates whether to enable versioning of objects in the bucket.
   *
   * For more information about versioning, see [Enabling and suspending object versioning in a bucket in Amazon Lightsail](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-managing-bucket-object-versioning) in the *Amazon Lightsail Developer Guide*.
   *
   * @public
   */
  enableObjectVersioning?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateBucketResult {
  /**
   * An object that describes the bucket that is created.
   *
   * @public
   */
  bucket?: Bucket | undefined;

  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface CreateBucketAccessKeyRequest {
  /**
   * The name of the bucket that the new access key will belong to, and grant access to.
   *
   * @public
   */
  bucketName: string | undefined;
}

/**
 * @public
 */
export interface CreateBucketAccessKeyResult {
  /**
   * An object that describes the access key that is created.
   *
   * @public
   */
  accessKey?: AccessKey | undefined;

  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface CreateCertificateRequest {
  /**
   * The name for the certificate.
   *
   * @public
   */
  certificateName: string | undefined;

  /**
   * The domain name (`example.com`) for the certificate.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * An array of strings that specify the alternate domains (`example2.com`) and subdomains (`blog.example.com`) for the certificate.
   *
   * You can specify a maximum of nine alternate domains (in addition to the primary domain name).
   *
   * Wildcard domain entries (`*.example.com`) are not supported.
   *
   * @public
   */
  subjectAlternativeNames?: string[] | undefined;

  /**
   * The tag keys and optional values to add to the certificate during create.
   *
   * Use the `TagResource` action to tag a resource after it's created.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateCertificateResult {
  /**
   * An object that describes the certificate created.
   *
   * @public
   */
  certificate?: CertificateSummary | undefined;

  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * Describes the Amazon Elastic Compute Cloud instance and related resources to be created using the `create cloud formation stack` operation.
 *
 * @public
 */
export interface InstanceEntry {
  /**
   * The name of the export snapshot record, which contains the exported Lightsail instance snapshot that will be used as the source of the new Amazon EC2 instance.
   *
   * Use the `get export snapshot records` operation to get a list of export snapshot records that you can use to create a CloudFormation stack.
   *
   * @public
   */
  sourceName: string | undefined;

  /**
   * The instance type (`t2.micro`) to use for the new Amazon EC2 instance.
   *
   * @public
   */
  instanceType: string | undefined;

  /**
   * The port configuration to use for the new Amazon EC2 instance.
   *
   * The following configuration options are available:
   *
   * - `DEFAULT` - Use the default firewall settings from the Lightsail instance blueprint. If this is specified, then IPv4 and IPv6 will be configured for the new instance that is created in Amazon EC2.
   * - `INSTANCE` - Use the configured firewall settings from the source Lightsail instance. If this is specified, the new instance that is created in Amazon EC2 will be configured to match the configuration of the source Lightsail instance. For example, if the source instance is configured for dual-stack (IPv4 and IPv6), then IPv4 and IPv6 will be configured for the new instance that is created in Amazon EC2. If the source instance is configured for IPv4 only, then only IPv4 will be configured for the new instance that is created in Amazon EC2.
   * - `NONE` - Use the default Amazon EC2 security group. If this is specified, then only IPv4 will be configured for the new instance that is created in Amazon EC2.
   * - `CLOSED` - All ports closed. If this is specified, then only IPv4 will be configured for the new instance that is created in Amazon EC2.
   *
   * > **Note:** If you configured `lightsail-connect` as a `cidrListAliases` on your instance, or if you chose to allow the Lightsail browser-based SSH or RDP clients to connect to your instance, that configuration is not carried over to your new Amazon EC2 instance.
   *
   * @public
   */
  portInfoSource: PortInfoSourceType | undefined;

  /**
   * A launch script you can create that configures a server with additional user data. For example, you might want to run `apt-get -y update`.
   *
   * > **Note:** Depending on the machine image you choose, the command to get software on your instance varies. Amazon Linux and CentOS use `yum`, Debian and Ubuntu use `apt-get`, and FreeBSD uses `pkg`.
   *
   * @public
   */
  userData?: string | undefined;

  /**
   * The Availability Zone for the new Amazon EC2 instance.
   *
   * @public
   */
  availabilityZone: string | undefined;
}

/**
 * @public
 */
export interface CreateCloudFormationStackRequest {
  /**
   * An array of parameters that will be used to create the new Amazon EC2 instance. You can only pass one instance entry at a time in this array. You will get an invalid parameter error if you pass more than one instance entry in this array.
   *
   * @public
   */
  instances: InstanceEntry[] | undefined;
}

/**
 * @public
 */
export interface CreateCloudFormationStackResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface CreateContactMethodRequest {
  /**
   * The protocol of the contact method, such as `Email` or `SMS` (text messaging).
   *
   * The `SMS` protocol is supported only in the following Amazon Web Services Regions.
   *
   * - US East (N. Virginia) (`us-east-1`)
   * - US West (Oregon) (`us-west-2`)
   * - Europe (Ireland) (`eu-west-1`)
   * - Asia Pacific (Tokyo) (`ap-northeast-1`)
   * - Asia Pacific (Singapore) (`ap-southeast-1`)
   * - Asia Pacific (Sydney) (`ap-southeast-2`)
   *
   * For a list of countries/regions where SMS text messages can be sent, and the latest Amazon Web Services Regions where SMS text messaging is supported, see [Supported Regions and Countries](https://docs.aws.amazon.com/sns/latest/dg/sns-supported-regions-countries.html) in the *Amazon SNS Developer Guide*.
   *
   * For more information about notifications in Amazon Lightsail, see [Notifications in Amazon Lightsail](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-notifications).
   *
   * @public
   */
  protocol: ContactProtocol | undefined;

  /**
   * The destination of the contact method, such as an email address or a mobile phone number.
   *
   * Use the E.164 format when specifying a mobile phone number. E.164 is a standard for the phone number structure used for international telecommunication. Phone numbers that follow this format can have a maximum of 15 digits, and they are prefixed with the plus character (+) and the country code. For example, a U.S. phone number in E.164 format would be specified as +1XXX5550100. For more information, see [E.164](https://en.wikipedia.org/wiki/E.164) on *Wikipedia*.
   *
   * @public
   */
  contactEndpoint: string | undefined;

  /**
   * The tag keys and optional values to add to the contact method during create.
   *
   * Use the `TagResource` action to tag a resource after it's created.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateContactMethodResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * Describes a request to configure an Amazon Lightsail container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.
 *
 * For more information, see [Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-container-service-ecr-private-repo-access) in the *Amazon Lightsail Developer Guide*.
 *
 * @public
 */
export interface PrivateRegistryAccessRequest {
  /**
   * An object to describe a request to activate or deactivate the role that you can use to grant an Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR) private repositories.
   *
   * @public
   */
  ecrImagePullerRole?: ContainerServiceECRImagePullerRoleRequest | undefined;
}

/**
 * @public
 */
export interface CreateContainerServiceRequest {
  /**
   * The name for the container service.
   *
   * The name that you specify for your container service will make up part of its default domain. The default domain of a container service is typically `https://<ServiceName>.<RandomGUID>.<AWSRegion>.cs.amazonlightsail.com`. If the name of your container service is `container-service-1`, and it's located in the US East (Ohio) Amazon Web Services Region (`us-east-2`), then the domain for your container service will be like the following example: `https://container-service-1.ur4EXAMPLE2uq.us-east-2.cs.amazonlightsail.com`
   *
   * The following are the requirements for container service names:
   *
   * - Must be unique within each Amazon Web Services Region in your Lightsail account.
   * - Must contain 1 to 63 characters.
   * - Must contain only alphanumeric characters and hyphens.
   * - A hyphen (-) can separate words but cannot be at the start or end of the name.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * The power specification for the container service.
   *
   * The power specifies the amount of memory, vCPUs, and base monthly cost of each node of the container service. The `power` and `scale` of a container service makes up its configured capacity. To determine the monthly price of your container service, multiply the base price of the `power` with the `scale` (the number of nodes) of the service.
   *
   * Use the `GetContainerServicePowers` action to get a list of power options that you can specify using this parameter, and their base monthly cost.
   *
   * @public
   */
  power: ContainerServicePowerName | undefined;

  /**
   * The scale specification for the container service.
   *
   * The scale specifies the allocated compute nodes of the container service. The `power` and `scale` of a container service makes up its configured capacity. To determine the monthly price of your container service, multiply the base price of the `power` with the `scale` (the number of nodes) of the service.
   *
   * @public
   */
  scale: number | undefined;

  /**
   * The tag keys and optional values to add to the container service during create.
   *
   * Use the `TagResource` action to tag a resource after it's created.
   *
   * For more information about tags in Lightsail, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-tags).
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The public domain names to use with the container service, such as `example.com` and `www.example.com`.
   *
   * You can specify up to four public domain names for a container service. The domain names that you specify are used when you create a deployment with a container configured as the public endpoint of your container service.
   *
   * If you don't specify public domain names, then you can use the default domain of the container service.
   *
   * > **Important:** You must create and validate an SSL/TLS certificate before you can use public domain names with your container service. Use the `CreateCertificate` action to create a certificate for the public domain names you want to use with your container service.
   *
   * You can specify public domain names using a string to array map as shown in the example later on this page.
   *
   * @public
   */
  publicDomainNames?: Record<string, string[]> | undefined;

  /**
   * An object that describes a deployment for the container service.
   *
   * A deployment specifies the containers that will be launched on the container service and their settings, such as the ports to open, the environment variables to apply, and the launch command to run. It also specifies the container that will serve as the public endpoint of the deployment and its settings, such as the HTTP or HTTPS port to use, and the health check configuration.
   *
   * @public
   */
  deployment?: ContainerServiceDeploymentRequest | undefined;

  /**
   * An object to describe the configuration for the container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.
   *
   * For more information, see [Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-container-service-ecr-private-repo-access) in the *Amazon Lightsail Developer Guide*.
   *
   * @public
   */
  privateRegistryAccess?: PrivateRegistryAccessRequest | undefined;
}

/**
 * @public
 */
export interface CreateContainerServiceResult {
  /**
   * An object that describes a container service.
   *
   * @public
   */
  containerService?: ContainerService | undefined;
}

/**
 * @public
 */
export interface CreateContainerServiceDeploymentRequest {
  /**
   * The name of the container service for which to create the deployment.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * An object that describes the settings of the containers that will be launched on the container service.
   *
   * @public
   */
  containers?: Record<string, Container> | undefined;

  /**
   * An object that describes the settings of the public endpoint for the container service.
   *
   * @public
   */
  publicEndpoint?: EndpointRequest | undefined;
}

/**
 * @public
 */
export interface CreateContainerServiceDeploymentResult {
  /**
   * An object that describes a container service.
   *
   * @public
   */
  containerService?: ContainerService | undefined;
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
   * An object that describes the log in information for the container service registry of your Lightsail account.
   *
   * @public
   */
  registryLogin?: ContainerServiceRegistryLogin | undefined;
}

/**
 * @public
 */
export interface CreateDiskRequest {
  /**
   * The unique Lightsail disk name (`my-disk`).
   *
   * @public
   */
  diskName: string | undefined;

  /**
   * The Availability Zone where you want to create the disk (`us-east-2a`). Use the same Availability Zone as the Lightsail instance to which you want to attach the disk.
   *
   * Use the `get regions` operation to list the Availability Zones where Lightsail is currently available.
   *
   * @public
   */
  availabilityZone: string | undefined;

  /**
   * The size of the disk in GB (`32`).
   *
   * @public
   */
  sizeInGb: number | undefined;

  /**
   * The tag keys and optional values to add to the resource during create.
   *
   * Use the `TagResource` action to tag a resource after it's created.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * An array of objects that represent the add-ons to enable for the new disk.
   *
   * @public
   */
  addOns?: AddOnRequest[] | undefined;
}

/**
 * @public
 */
export interface CreateDiskResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface CreateDiskFromSnapshotRequest {
  /**
   * The unique Lightsail disk name (`my-disk`).
   *
   * @public
   */
  diskName: string | undefined;

  /**
   * The name of the disk snapshot (`my-snapshot`) from which to create the new storage disk.
   *
   * Constraint:
   *
   * - This parameter cannot be defined together with the `source disk name` parameter. The `disk snapshot name` and `source disk name` parameters are mutually exclusive.
   *
   * @public
   */
  diskSnapshotName?: string | undefined;

  /**
   * The Availability Zone where you want to create the disk (`us-east-2a`). Choose the same Availability Zone as the Lightsail instance where you want to create the disk.
   *
   * Use the GetRegions operation to list the Availability Zones where Lightsail is currently available.
   *
   * @public
   */
  availabilityZone: string | undefined;

  /**
   * The size of the disk in GB (`32`).
   *
   * @public
   */
  sizeInGb: number | undefined;

  /**
   * The tag keys and optional values to add to the resource during create.
   *
   * Use the `TagResource` action to tag a resource after it's created.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * An array of objects that represent the add-ons to enable for the new disk.
   *
   * @public
   */
  addOns?: AddOnRequest[] | undefined;

  /**
   * The name of the source disk from which the source automatic snapshot was created.
   *
   * Constraints:
   *
   * - This parameter cannot be defined together with the `disk snapshot name` parameter. The `source disk name` and `disk snapshot name` parameters are mutually exclusive.
   * - Define this parameter only when creating a new disk from an automatic snapshot. For more information, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-configuring-automatic-snapshots).
   *
   * @public
   */
  sourceDiskName?: string | undefined;

  /**
   * The date of the automatic snapshot to use for the new disk. Use the `get auto snapshots` operation to identify the dates of the available automatic snapshots.
   *
   * Constraints:
   *
   * - Must be specified in `YYYY-MM-DD` format.
   * - This parameter cannot be defined together with the `use latest restorable auto snapshot` parameter. The `restore date` and `use latest restorable auto snapshot` parameters are mutually exclusive.
   * - Define this parameter only when creating a new disk from an automatic snapshot. For more information, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-configuring-automatic-snapshots).
   *
   * @public
   */
  restoreDate?: string | undefined;

  /**
   * A Boolean value to indicate whether to use the latest available automatic snapshot.
   *
   * Constraints:
   *
   * - This parameter cannot be defined together with the `restore date` parameter. The `use latest restorable auto snapshot` and `restore date` parameters are mutually exclusive.
   * - Define this parameter only when creating a new disk from an automatic snapshot. For more information, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-configuring-automatic-snapshots).
   *
   * @public
   */
  useLatestRestorableAutoSnapshot?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateDiskFromSnapshotResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface CreateDiskSnapshotRequest {
  /**
   * The unique name of the source disk (`Disk-Virginia-1`).
   *
   * > **Note:** This parameter cannot be defined together with the `instance name` parameter. The `disk name` and `instance name` parameters are mutually exclusive.
   *
   * @public
   */
  diskName?: string | undefined;

  /**
   * The name of the destination disk snapshot (`my-disk-snapshot`) based on the source disk.
   *
   * @public
   */
  diskSnapshotName: string | undefined;

  /**
   * The unique name of the source instance (`Amazon_Linux-512MB-Virginia-1`). When this is defined, a snapshot of the instance's system volume is created.
   *
   * > **Note:** This parameter cannot be defined together with the `disk name` parameter. The `instance name` and `disk name` parameters are mutually exclusive.
   *
   * @public
   */
  instanceName?: string | undefined;

  /**
   * The tag keys and optional values to add to the resource during create.
   *
   * Use the `TagResource` action to tag a resource after it's created.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDiskSnapshotResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * Describes a custom error response for a Lightsail distribution. A custom error response specifies the page that the distribution returns to the viewer. It also specifies the HTTP status code that the distribution sends when the origin responds with a given HTTP error code.
 *
 * @public
 */
export interface DistributionCustomErrorResponse {
  /**
   * The HTTP error code from the origin that triggers the custom error response (for example, `403` or `404`).
   *
   * @public
   */
  errorCode?: number | undefined;

  /**
   * The HTTP status code that the distribution returns to the viewer for the custom error response.
   *
   * @public
   */
  responseCode?: string | undefined;

  /**
   * The path to the custom error page that the distribution returns to the viewer (for example, `/404.html`). The path must begin with a forward slash (`/`) and reference an object that is available from the origin.
   *
   * @public
   */
  responsePagePath?: string | undefined;

  /**
   * The minimum time, in seconds, that the distribution caches the custom error response before requesting the object again from the origin. If you don't specify a value, the default is `10` seconds.
   *
   * @public
   */
  errorCachingMinTTL?: number | undefined;
}

/**
 * Describes the origin resource of an Amazon Lightsail content delivery network (CDN) distribution.
 *
 * An origin can be a Lightsail instance, bucket, container service, or load balancer. A distribution pulls content from an origin, caches it, and serves it to viewers via a worldwide network of edge servers.
 *
 * @public
 */
export interface InputOrigin {
  /**
   * The name of the origin resource.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The AWS Region name of the origin resource.
   *
   * @public
   */
  regionName?: RegionName | undefined;

  /**
   * The protocol that your Amazon Lightsail distribution uses when establishing a connection with your origin to pull content.
   *
   * @public
   */
  protocolPolicy?: OriginProtocolPolicyEnum | undefined;

  /**
   * The amount of time, in seconds, that the distribution waits for a response after forwarding a request to the origin. The minimum timeout is 1 second, the maximum is 60 seconds, and the default (if you don't specify otherwise) is 30 seconds.
   *
   * @public
   */
  responseTimeout?: number | undefined;

  /**
   * The IP address type that the distribution uses when connecting to the origin.
   *
   * The possible values are `ipv4` for IPv4 only, `ipv6` for IPv6 only, and `dualstack` for IPv4 and IPv6.
   *
   * @public
   */
  ipAddressType?: OriginIpAddressTypeEnum | undefined;
}

/**
 * Describes the HTTP status codes that your application returns to indicate successful and failed attempts. The Web Application Firewall (WAF) rule group uses these status codes to track successful and failed attempts.
 *
 * @public
 */
export interface WafResponseInspection {
  /**
   * The HTTP status codes that indicate a successful attempt (for example, `200`).
   *
   * Constraints:
   *
   * - Must contain from 1 to 10 status codes.
   * - Each status code must be from `0` to `999`.
   * - Can't contain a status code that is also in `failureCodes`.
   *
   * @public
   */
  successCodes?: number[] | undefined;

  /**
   * The HTTP status codes that indicate a failed attempt (for example, `401`).
   *
   * Constraints:
   *
   * - Must contain from 1 to 10 status codes.
   * - Each status code must be from `0` to `999`.
   * - Can't contain a status code that is also in `successCodes`.
   *
   * @public
   */
  failureCodes?: number[] | undefined;
}

/**
 * Describes the configuration of the account creation fraud prevention Web Application Firewall (WAF) rule group. The rule group inspects account creation requests to your application.
 *
 * @public
 */
export interface WafAcfpConfig {
  /**
   * The content type of the request body of account creation requests.
   *
   * The following content types are possible:
   *
   * - `JSON` – The request body is in JSON format.
   * - `FORM_ENCODED` – The request body is form encoded.
   *
   * @public
   */
  payloadType?: WafPayloadTypeEnum | undefined;

  /**
   * The path of the endpoint that accepts completed account creation forms (for example, `/signup/submit`). This endpoint must accept `POST` requests.
   *
   * Constraints:
   *
   * - Must start with a forward slash (`/`).
   * - Must contain from 1 to 256 characters.
   *
   * @public
   */
  creationPath?: string | undefined;

  /**
   * The path of the page that displays the account creation form (for example, `/signup`).
   *
   * Constraints:
   *
   * - Must start with a forward slash (`/`).
   * - Must contain from 1 to 256 characters.
   *
   * @public
   */
  registrationPagePath?: string | undefined;

  /**
   * An object that describes the HTTP status codes that your application returns for successful and failed account creation attempts.
   *
   * @public
   */
  responseInspection?: WafResponseInspection | undefined;
}

/**
 * Describes the configuration of the account takeover prevention Web Application Firewall (WAF) rule group. The rule group inspects login requests to the login path of your application.
 *
 * @public
 */
export interface WafAtpConfig {
  /**
   * The path of the login endpoint of your application (for example, `/login`). Login paths that start with the path that you specify are a match.
   *
   * Constraints:
   *
   * - Must start with a forward slash (`/`).
   * - Must contain from 1 to 256 characters.
   *
   * @public
   */
  loginPath?: string | undefined;

  /**
   * The content type of the request body of login requests.
   *
   * The following content types are possible:
   *
   * - `JSON` – The request body is in JSON format.
   * - `FORM_ENCODED` – The request body is form encoded.
   *
   * @public
   */
  payloadType?: WafPayloadTypeEnum | undefined;

  /**
   * The name of the field in the request body that contains the username (for example, `/username` for `JSON` or `username` for `FORM_ENCODED`).
   *
   * Constraints:
   *
   * - For a `JSON` payload, must be a JSON pointer that starts with a forward slash (`/`).
   * - Must contain from 1 to 512 characters.
   *
   * @public
   */
  usernameField?: string | undefined;

  /**
   * The name of the field in the request body that contains the password (for example, `/password` for `JSON` or `password` for `FORM_ENCODED`).
   *
   * Constraints:
   *
   * - For a `JSON` payload, must be a JSON pointer that starts with a forward slash (`/`).
   * - Must contain from 1 to 512 characters.
   *
   * @public
   */
  passwordField?: string | undefined;

  /**
   * An object that describes the HTTP status codes that your application returns for successful and failed login attempts.
   *
   * @public
   */
  responseInspection?: WafResponseInspection | undefined;
}

/**
 * Describes the configuration of the bot control Web Application Firewall (WAF) rule group.
 *
 * @public
 */
export interface WafBotControlConfig {
  /**
   * The inspection level of the bot control rule group.
   *
   * The following inspection levels are possible:
   *
   * - `COMMON` – Detects a variety of bots that identify themselves, such as web scraping frameworks, search engines, and automated browsers.
   * - `TARGETED` – Includes the `COMMON` protections, and adds detection for sophisticated bots that don't identify themselves. This level uses rate limiting, CAPTCHA, and background browser challenges.
   *
   * @public
   */
  inspectionLevel?: WafInspectionLevelEnum | undefined;
}

/**
 * Describes a Web Application Firewall (WAF) rule group for a Lightsail distribution. A WAF rule group is a set of rules managed by AWS. The rules inspect viewer requests and block requests that match them.
 *
 * @public
 */
export interface WafRule {
  /**
   * The name of the WAF rule group (for example, `AWSManagedRulesCommonRuleSet`).
   *
   * For the WAF rule groups that you can specify for each bundle, see the `wafRules` parameter of the `CreateDistribution` action.
   *
   * @public
   */
  name: string | undefined;

  /**
   * An object that describes the configuration of the account takeover prevention rule group.
   *
   * Constraints:
   *
   * - Define this parameter only when the `name` is `AWSManagedRulesATPRuleSet`.
   * - This parameter is required when the `name` is `AWSManagedRulesATPRuleSet`.
   *
   * @public
   */
  atpConfig?: WafAtpConfig | undefined;

  /**
   * An object that describes the configuration of the account creation fraud prevention rule group.
   *
   * Constraints:
   *
   * - Define this parameter only when the `name` is `AWSManagedRulesACFPRuleSet`.
   * - This parameter is required when the `name` is `AWSManagedRulesACFPRuleSet`.
   *
   * @public
   */
  acfpConfig?: WafAcfpConfig | undefined;

  /**
   * An object that describes the configuration of the bot control rule group.
   *
   * Constraints:
   *
   * - Define this parameter only when the `name` is `AWSManagedRulesBotControlRuleSet`.
   * - This parameter is required when the `name` is `AWSManagedRulesBotControlRuleSet`.
   *
   * @public
   */
  botControlConfig?: WafBotControlConfig | undefined;
}

/**
 * @public
 */
export interface CreateDistributionRequest {
  /**
   * The name for the distribution.
   *
   * @public
   */
  distributionName: string | undefined;

  /**
   * An object that describes the origin resource for the distribution, such as a Lightsail instance, bucket, or load balancer.
   *
   * The distribution pulls, caches, and serves content from the origin.
   *
   * @public
   */
  origin: InputOrigin | undefined;

  /**
   * An object that describes the default cache behavior for the distribution.
   *
   * @public
   */
  defaultCacheBehavior: CacheBehavior | undefined;

  /**
   * An object that describes the cache behavior settings for the distribution.
   *
   * @public
   */
  cacheBehaviorSettings?: CacheSettings | undefined;

  /**
   * An array of objects that describe the per-path cache behavior for the distribution.
   *
   * @public
   */
  cacheBehaviors?: CacheBehaviorPerPath[] | undefined;

  /**
   * The bundle ID to use for the distribution.
   *
   * A distribution bundle describes the specifications of your distribution, such as the monthly cost and monthly network transfer quota.
   *
   * Use the `GetDistributionBundles` action to get a list of distribution bundle IDs that you can specify.
   *
   * @public
   */
  bundleId: string | undefined;

  /**
   * The IP address type for the distribution.
   *
   * The possible values are `ipv4` for IPv4 only, and `dualstack` for IPv4 and IPv6.
   *
   * The default value is `dualstack`.
   *
   * @public
   */
  ipAddressType?: IpAddressType | undefined;

  /**
   * The tag keys and optional values to add to the distribution during create.
   *
   * Use the `TagResource` action to tag a resource after it's created.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The name of the SSL/TLS certificate that you want to attach to the distribution.
   *
   * Use the [GetCertificates](https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetCertificates.html) action to get a list of certificate names that you can specify.
   *
   * @public
   */
  certificateName?: string | undefined;

  /**
   * The minimum TLS protocol version for the SSL/TLS certificate.
   *
   * @public
   */
  viewerMinimumTlsProtocolVersion?: ViewerMinimumTlsProtocolVersionEnum | undefined;

  /**
   * Specifies whether to enable private origin access for the distribution. With private origin access, the distribution can serve objects that aren't publicly accessible from a Lightsail bucket.
   *
   * Lightsail grants the distribution permission to read the bucket's objects. Enabling private origin access doesn't change the bucket's access settings, and you can still retrieve publicly accessible objects directly from the bucket's endpoint.
   *
   * > **Note:** You can enable private origin access only when the distribution's origin is a Lightsail bucket. If the origin is another resource type, the request fails.
   *
   * @public
   */
  enablePrivateOriginAccess?: boolean | undefined;

  /**
   * The object (for example, `index.html`) that the distribution returns when a viewer requests the root URL of the distribution (`/`) instead of a specific object. The object that you specify must be available from the origin.
   *
   * @public
   */
  defaultRootObject?: string | undefined;

  /**
   * An array of objects that describe the custom error responses for the distribution. With a custom error response, you can specify the page to return when the origin responds with a given HTTP error code. You can also specify the HTTP status code to send to the viewer.
   *
   * @public
   */
  customErrorResponses?: DistributionCustomErrorResponse[] | undefined;

  /**
   * Specifies whether to enable Web Application Firewall (WAF) for the distribution. WAF inspects viewer requests and blocks requests that match the WAF rule groups that you enable.
   *
   * When you enable WAF without specifying the `wafRules` parameter, the distribution has no WAF rule groups enabled and doesn't block any requests.
   *
   * > **Note:** WAF is available only for distributions that use the `medium_1_0` or `large_1_0` bundle.
   *
   * @public
   */
  enableWaf?: boolean | undefined;

  /**
   * An array of objects that describe the WAF rule groups to enable for the distribution.
   *
   * The WAF rule groups that you can specify depend on the bundle of the distribution:
   *
   * - `medium_1_0` – Supports the `AWSManagedRulesCommonRuleSet`, `AWSManagedRulesKnownBadInputsRuleSet`, and `AWSManagedRulesAnonymousIpList` rule groups.
   * - `large_1_0` – Supports the rule groups for `medium_1_0`, plus `AWSManagedRulesAdminProtectionRuleSet`, `AWSManagedRulesSQLiRuleSet`, `AWSManagedRulesLinuxRuleSet`, `AWSManagedRulesUnixRuleSet`, `AWSManagedRulesWindowsRuleSet`, `AWSManagedRulesPHPRuleSet`, `AWSManagedRulesWordPressRuleSet`, `AWSManagedRulesAmazonIpReputationList`, `AWSManagedRulesATPRuleSet`, `AWSManagedRulesACFPRuleSet`, and `AWSManagedRulesBotControlRuleSet` rule groups.
   *
   * @public
   */
  wafRules?: WafRule[] | undefined;
}

/**
 * Describes the origin resource of an Amazon Lightsail content delivery network (CDN) distribution.
 *
 * An origin can be a Lightsail instance, bucket, or load balancer. A distribution pulls content from an origin, caches it, and serves it to viewers via a worldwide network of edge servers.
 *
 * @public
 */
export interface Origin {
  /**
   * The name of the origin resource.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The resource type of the origin resource (*Instance*).
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The AWS Region name of the origin resource.
   *
   * @public
   */
  regionName?: RegionName | undefined;

  /**
   * The protocol that your Amazon Lightsail distribution uses when establishing a connection with your origin to pull content.
   *
   * @public
   */
  protocolPolicy?: OriginProtocolPolicyEnum | undefined;

  /**
   * The amount of time, in seconds, that the distribution waits for a response after forwarding a request to the origin. The minimum timeout is 1 second, the maximum is 60 seconds, and the default (if you don't specify otherwise) is 30 seconds.
   *
   * @public
   */
  responseTimeout?: number | undefined;

  /**
   * The IP address type that the distribution uses when connecting to the origin.
   *
   * The possible values are `ipv4` for IPv4 only, `ipv6` for IPv6 only, and `dualstack` for IPv4 and IPv6.
   *
   * @public
   */
  ipAddressType?: OriginIpAddressTypeEnum | undefined;

  /**
   * Specifies whether private origin access is enabled for the distribution's origin. With private origin access, the distribution can serve objects that aren't publicly accessible from a Lightsail bucket.
   *
   * This applies when you set the bucket's `getObject` access rule to `private`. It also applies when you set `getObject` to `public` but set individual objects to private.
   *
   * @public
   */
  isPrivateOriginAccessEnabled?: boolean | undefined;
}

/**
 * Describes the Web Application Firewall (WAF) configuration of a Lightsail distribution.
 *
 * @public
 */
export interface WafConfig {
  /**
   * Specifies whether WAF is enabled for the distribution.
   *
   * @public
   */
  isWafEnabled?: boolean | undefined;

  /**
   * An array of objects that describe the WAF rule groups enabled for the distribution.
   *
   * @public
   */
  wafRules?: WafRule[] | undefined;
}

/**
 * Describes an Amazon Lightsail content delivery network (CDN) distribution.
 *
 * @public
 */
export interface LightsailDistribution {
  /**
   * The name of the distribution.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the distribution.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The support code. Include this code in your email to support when you have questions about your Lightsail distribution. This code enables our support team to look up your Lightsail information more easily.
   *
   * @public
   */
  supportCode?: string | undefined;

  /**
   * The timestamp when the distribution was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * An object that describes the location of the distribution, such as the Amazon Web Services Region and Availability Zone.
   *
   * > **Note:** Lightsail distributions are global resources that can reference an origin in any Amazon Web Services Region, and distribute its content globally. However, all distributions are located in the `us-east-1` Region.
   *
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * The Lightsail resource type (`Distribution`).
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The alternate domain names of the distribution.
   *
   * @public
   */
  alternativeDomainNames?: string[] | undefined;

  /**
   * The status of the distribution.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * Indicates whether the distribution is enabled.
   *
   * @public
   */
  isEnabled?: boolean | undefined;

  /**
   * The domain name of the distribution.
   *
   * @public
   */
  domainName?: string | undefined;

  /**
   * The ID of the bundle currently applied to the distribution.
   *
   * @public
   */
  bundleId?: string | undefined;

  /**
   * The name of the SSL/TLS certificate attached to the distribution, if any.
   *
   * @public
   */
  certificateName?: string | undefined;

  /**
   * An object that describes the origin resource of the distribution, such as a Lightsail instance, bucket, or load balancer.
   *
   * The distribution pulls, caches, and serves content from the origin.
   *
   * @public
   */
  origin?: Origin | undefined;

  /**
   * The public DNS of the origin.
   *
   * @public
   */
  originPublicDNS?: string | undefined;

  /**
   * An object that describes the default cache behavior of the distribution.
   *
   * @public
   */
  defaultCacheBehavior?: CacheBehavior | undefined;

  /**
   * An object that describes the cache behavior settings of the distribution.
   *
   * @public
   */
  cacheBehaviorSettings?: CacheSettings | undefined;

  /**
   * An array of objects that describe the per-path cache behavior of the distribution.
   *
   * @public
   */
  cacheBehaviors?: CacheBehaviorPerPath[] | undefined;

  /**
   * Indicates whether the bundle that is currently applied to your distribution, specified using the `distributionName` parameter, can be changed to another bundle.
   *
   * Use the `UpdateDistributionBundle` action to change your distribution's bundle.
   *
   * @public
   */
  ableToUpdateBundle?: boolean | undefined;

  /**
   * The IP address type of the distribution.
   *
   * The possible values are `ipv4` for IPv4 only, and `dualstack` for IPv4 and IPv6.
   *
   * @public
   */
  ipAddressType?: IpAddressType | undefined;

  /**
   * The tag keys and optional values for the resource. For more information about tags in Lightsail, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-tags).
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The minimum TLS protocol version that the distribution can use to communicate with viewers.
   *
   * @public
   */
  viewerMinimumTlsProtocolVersion?: string | undefined;

  /**
   * The object (for example, `index.html`) that the distribution returns when a viewer requests the root URL of the distribution (`/`) instead of a specific object.
   *
   * @public
   */
  defaultRootObject?: string | undefined;

  /**
   * An array of objects that describe the custom error responses configured for the distribution.
   *
   * @public
   */
  customErrorResponses?: DistributionCustomErrorResponse[] | undefined;

  /**
   * An object that describes the Web Application Firewall (WAF) configuration of the distribution.
   *
   * @public
   */
  waf?: WafConfig | undefined;
}

/**
 * @public
 */
export interface CreateDistributionResult {
  /**
   * An object that describes the distribution created.
   *
   * @public
   */
  distribution?: LightsailDistribution | undefined;

  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * @public
 */
export interface CreateDomainRequest {
  /**
   * The domain name to manage (`example.com`).
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The tag keys and optional values to add to the resource during create.
   *
   * Use the `TagResource` action to tag a resource after it's created.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDomainResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * Describes a domain recordset entry.
 *
 * @public
 */
export interface DomainEntry {
  /**
   * The ID of the domain recordset entry.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the domain.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The target IP address (`192.0.2.0`), or AWS name server (`ns-111.awsdns-22.com.`).
   *
   * For Lightsail load balancers, the value looks like `ab1234c56789c6b86aba6fb203d443bc-123456789.us-east-2.elb.amazonaws.com`. For Lightsail distributions, the value looks like `exampled1182ne.cloudfront.net`. For Lightsail container services, the value looks like `container-service-1.example23scljs.us-west-2.cs.amazonlightsail.com`. Be sure to also set `isAlias` to `true` when setting up an A record for a Lightsail load balancer, distribution, or container service.
   *
   * @public
   */
  target?: string | undefined;

  /**
   * When `true`, specifies whether the domain entry is an alias used by the Lightsail load balancer, Lightsail container service, Lightsail content delivery network (CDN) distribution, or another Amazon Web Services resource. You can include an alias (A type) record in your request, which points to the DNS name of a load balancer, container service, CDN distribution, or other Amazon Web Services resource and routes traffic to that resource.
   *
   * @public
   */
  isAlias?: boolean | undefined;

  /**
   * The type of domain entry, such as address for IPv4 (A), address for IPv6 (AAAA), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA), service locator (SRV), or text (TXT).
   *
   * The following domain entry types can be used:
   *
   * - `A`
   * - `AAAA`
   * - `CNAME`
   * - `MX`
   * - `NS`
   * - `SOA`
   * - `SRV`
   * - `TXT`
   *
   * @public
   */
  type?: string | undefined;

  /**
   * (Discontinued) The options for the domain entry.
   *
   * > **Note:** In releases prior to November 29, 2017, this parameter was not included in the API response. It is now discontinued.
   *
   * @deprecated deprecated.
   * @public
   */
  options?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDomainEntryRequest {
  /**
   * The domain name (`example.com`) for which you want to create the domain entry.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * An array of key-value pairs containing information about the domain entry request.
   *
   * @public
   */
  domainEntry: DomainEntry | undefined;
}

/**
 * @public
 */
export interface CreateDomainEntryResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * @public
 */
export interface CreateGUISessionAccessDetailsRequest {
  /**
   * The resource name.
   *
   * @public
   */
  resourceName: string | undefined;
}

/**
 * Describes a web-based, remote graphical user interface (GUI), Amazon DCV session. The session is used to access a virtual computer’s operating system or application.
 *
 * @public
 */
export interface Session {
  /**
   * The session name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The session URL.
   *
   * @public
   */
  url?: string | undefined;

  /**
   * When true, this Boolean value indicates the primary session for the specified resource.
   *
   * @public
   */
  isPrimary?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateGUISessionAccessDetailsResult {
  /**
   * The resource name.
   *
   * @public
   */
  resourceName?: string | undefined;

  /**
   * The status of the operation.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * The percentage of completion for the operation.
   *
   * @public
   */
  percentageComplete?: number | undefined;

  /**
   * The reason the operation failed.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * Returns information about the specified Amazon DCV GUI session.
   *
   * @public
   */
  sessions?: Session[] | undefined;
}

/**
 * @public
 */
export interface CreateInstancesRequest {
  /**
   * The names to use for your new Lightsail instances. Separate multiple values using quotation marks and commas, for example: `["MyFirstInstance","MySecondInstance"]`
   *
   * @public
   */
  instanceNames: string[] | undefined;

  /**
   * The Availability Zone in which to create your instance. Use the following format: `us-east-2a` (case sensitive). You can get a list of Availability Zones by using the [get regions](http://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRegions.html) operation. Be sure to add the `include Availability Zones` parameter to your request.
   *
   * @public
   */
  availabilityZone: string | undefined;

  /**
   * (Discontinued) The name for your custom image.
   *
   * > **Note:** In releases prior to June 12, 2017, this parameter was ignored by the API. It is now discontinued.
   *
   * @deprecated deprecated.
   * @public
   */
  customImageName?: string | undefined;

  /**
   * The ID for a virtual private server image (`app_wordpress_x_x` or `app_lamp_x_x`). Use the `get blueprints` operation to return a list of available images (or *blueprints*).
   *
   * > **Note:** Use active blueprints when creating new instances. Inactive blueprints are listed to support customers with existing instances and are not necessarily available to create new instances. Blueprints are marked inactive when they become outdated due to operating system updates or new application releases.
   *
   * @public
   */
  blueprintId: string | undefined;

  /**
   * The bundle of specification information for your virtual private server (or *instance*), including the pricing plan (`medium_x_x`).
   *
   * @public
   */
  bundleId: string | undefined;

  /**
   * A launch script you can create that configures a server with additional user data. For example, you might want to run `apt-get -y update`.
   *
   * > **Note:** Depending on the machine image you choose, the command to get software on your instance varies. Amazon Linux and CentOS use `yum`, Debian and Ubuntu use `apt-get`, and FreeBSD uses `pkg`. For a complete list, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/compare-options-choose-lightsail-instance-image).
   *
   * @public
   */
  userData?: string | undefined;

  /**
   * The name of your key pair.
   *
   * @public
   */
  keyPairName?: string | undefined;

  /**
   * The tag keys and optional values to add to the resource during create.
   *
   * Use the `TagResource` action to tag a resource after it's created.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * An array of objects representing the add-ons to enable for the new instance.
   *
   * @public
   */
  addOns?: AddOnRequest[] | undefined;

  /**
   * The IP address type for the instance.
   *
   * The possible values are `ipv4` for IPv4 only, `ipv6` for IPv6 only, and `dualstack` for IPv4 and IPv6.
   *
   * The default value is `dualstack`.
   *
   * @public
   */
  ipAddressType?: IpAddressType | undefined;
}

/**
 * @public
 */
export interface CreateInstancesResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface CreateInstancesFromSnapshotRequest {
  /**
   * The names for your new instances.
   *
   * @public
   */
  instanceNames: string[] | undefined;

  /**
   * An object containing information about one or more disk mappings.
   *
   * @public
   */
  attachedDiskMapping?: Record<string, DiskMap[]> | undefined;

  /**
   * The Availability Zone where you want to create your instances. Use the following formatting: `us-east-2a` (case sensitive). You can get a list of Availability Zones by using the [get regions](http://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRegions.html) operation. Be sure to add the `include Availability Zones` parameter to your request.
   *
   * @public
   */
  availabilityZone: string | undefined;

  /**
   * The name of the instance snapshot on which you are basing your new instances. Use the get instance snapshots operation to return information about your existing snapshots.
   *
   * Constraint:
   *
   * - This parameter cannot be defined together with the `source instance name` parameter. The `instance snapshot name` and `source instance name` parameters are mutually exclusive.
   *
   * @public
   */
  instanceSnapshotName?: string | undefined;

  /**
   * The bundle of specification information for your virtual private server (or *instance*), including the pricing plan (`micro_x_x`).
   *
   * @public
   */
  bundleId: string | undefined;

  /**
   * You can create a launch script that configures a server with additional user data. For example, `apt-get -y update`.
   *
   * > **Note:** Depending on the machine image you choose, the command to get software on your instance varies. Amazon Linux and CentOS use `yum`, Debian and Ubuntu use `apt-get`, and FreeBSD uses `pkg`. For a complete list, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/compare-options-choose-lightsail-instance-image).
   *
   * @public
   */
  userData?: string | undefined;

  /**
   * The name for your key pair.
   *
   * @public
   */
  keyPairName?: string | undefined;

  /**
   * The tag keys and optional values to add to the resource during create.
   *
   * Use the `TagResource` action to tag a resource after it's created.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * An array of objects representing the add-ons to enable for the new instance.
   *
   * @public
   */
  addOns?: AddOnRequest[] | undefined;

  /**
   * The IP address type for the instance.
   *
   * The possible values are `ipv4` for IPv4 only, `ipv6` for IPv6 only, and `dualstack` for IPv4 and IPv6.
   *
   * The default value is `dualstack`.
   *
   * @public
   */
  ipAddressType?: IpAddressType | undefined;

  /**
   * The name of the source instance from which the source automatic snapshot was created.
   *
   * Constraints:
   *
   * - This parameter cannot be defined together with the `instance snapshot name` parameter. The `source instance name` and `instance snapshot name` parameters are mutually exclusive.
   * - Define this parameter only when creating a new instance from an automatic snapshot. For more information, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-configuring-automatic-snapshots).
   *
   * @public
   */
  sourceInstanceName?: string | undefined;

  /**
   * The date of the automatic snapshot to use for the new instance. Use the `get auto snapshots` operation to identify the dates of the available automatic snapshots.
   *
   * Constraints:
   *
   * - Must be specified in `YYYY-MM-DD` format.
   * - This parameter cannot be defined together with the `use latest restorable auto snapshot` parameter. The `restore date` and `use latest restorable auto snapshot` parameters are mutually exclusive.
   * - Define this parameter only when creating a new instance from an automatic snapshot. For more information, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-configuring-automatic-snapshots).
   *
   * @public
   */
  restoreDate?: string | undefined;

  /**
   * A Boolean value to indicate whether to use the latest available automatic snapshot.
   *
   * Constraints:
   *
   * - This parameter cannot be defined together with the `restore date` parameter. The `use latest restorable auto snapshot` and `restore date` parameters are mutually exclusive.
   * - Define this parameter only when creating a new instance from an automatic snapshot. For more information, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-configuring-automatic-snapshots).
   *
   * @public
   */
  useLatestRestorableAutoSnapshot?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateInstancesFromSnapshotResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface CreateInstanceSnapshotRequest {
  /**
   * The name for your new snapshot.
   *
   * @public
   */
  instanceSnapshotName: string | undefined;

  /**
   * The Lightsail instance on which to base your snapshot.
   *
   * @public
   */
  instanceName: string | undefined;

  /**
   * The tag keys and optional values to add to the resource during create.
   *
   * Use the `TagResource` action to tag a resource after it's created.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateInstanceSnapshotResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface CreateKeyPairRequest {
  /**
   * The name for your new key pair.
   *
   * @public
   */
  keyPairName: string | undefined;

  /**
   * The tag keys and optional values to add to the resource during create.
   *
   * Use the `TagResource` action to tag a resource after it's created.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Describes an SSH key pair.
 *
 * @public
 */
export interface KeyPair {
  /**
   * The friendly name of the SSH key pair.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the key pair (`arn:aws:lightsail:us-east-2:123456789101:KeyPair/05859e3d-331d-48ba-9034-12345EXAMPLE`).
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.
   *
   * @public
   */
  supportCode?: string | undefined;

  /**
   * The timestamp when the key pair was created (`1479816991.349`).
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The region name and Availability Zone where the key pair was created.
   *
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * The resource type (usually `KeyPair`).
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The tag keys and optional values for the resource. For more information about tags in Lightsail, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-tags).
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The RSA fingerprint of the key pair.
   *
   * @public
   */
  fingerprint?: string | undefined;
}

/**
 * @public
 */
export interface CreateKeyPairResult {
  /**
   * An array of key-value pairs containing information about the new key pair you just created.
   *
   * @public
   */
  keyPair?: KeyPair | undefined;

  /**
   * A base64-encoded public key of the `ssh-rsa` type.
   *
   * @public
   */
  publicKeyBase64?: string | undefined;

  /**
   * A base64-encoded RSA private key.
   *
   * @public
   */
  privateKeyBase64?: string | undefined;

  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * @public
 */
export interface CreateLoadBalancerRequest {
  /**
   * The name of your load balancer.
   *
   * @public
   */
  loadBalancerName: string | undefined;

  /**
   * The instance port where you're creating your load balancer.
   *
   * @public
   */
  instancePort: number | undefined;

  /**
   * The path you provided to perform the load balancer health check. If you didn't specify a health check path, Lightsail uses the root path of your website (`"/"`).
   *
   * You may want to specify a custom health check path other than the root of your application if your home page loads slowly or has a lot of media or scripting on it.
   *
   * @public
   */
  healthCheckPath?: string | undefined;

  /**
   * The name of the SSL/TLS certificate.
   *
   * If you specify `certificateName`, then `certificateDomainName` is required (and vice-versa).
   *
   * @public
   */
  certificateName?: string | undefined;

  /**
   * The domain name with which your certificate is associated (`example.com`).
   *
   * If you specify `certificateDomainName`, then `certificateName` is required (and vice-versa).
   *
   * @public
   */
  certificateDomainName?: string | undefined;

  /**
   * The optional alternative domains and subdomains to use with your SSL/TLS certificate (`www.example.com`, `example.com`, `m.example.com`, `blog.example.com`).
   *
   * @public
   */
  certificateAlternativeNames?: string[] | undefined;

  /**
   * The tag keys and optional values to add to the resource during create.
   *
   * Use the `TagResource` action to tag a resource after it's created.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The IP address type for the load balancer.
   *
   * The possible values are `ipv4` for IPv4 only, `ipv6` for IPv6 only, and `dualstack` for IPv4 and IPv6.
   *
   * The default value is `dualstack`.
   *
   * @public
   */
  ipAddressType?: IpAddressType | undefined;

  /**
   * The name of the TLS policy to apply to the load balancer.
   *
   * Use the [GetLoadBalancerTlsPolicies](https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancerTlsPolicies.html) action to get a list of TLS policy names that you can specify.
   *
   * For more information about load balancer TLS policies, see [Configuring TLS security policies on your Amazon Lightsail load balancers](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-configure-load-balancer-tls-security-policy) in the *Amazon Lightsail Developer Guide*.
   *
   * @public
   */
  tlsPolicyName?: string | undefined;
}

/**
 * @public
 */
export interface CreateLoadBalancerResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface CreateLoadBalancerTlsCertificateRequest {
  /**
   * The load balancer name where you want to create the SSL/TLS certificate.
   *
   * @public
   */
  loadBalancerName: string | undefined;

  /**
   * The SSL/TLS certificate name.
   *
   * You can have up to 10 certificates in your account at one time. Each Lightsail load balancer can have up to 2 certificates associated with it at one time. There is also an overall limit to the number of certificates that can be issue in a 365-day period. For more information, see [Limits](http://docs.aws.amazon.com/acm/latest/userguide/acm-limits.html).
   *
   * @public
   */
  certificateName: string | undefined;

  /**
   * The domain name (`example.com`) for your SSL/TLS certificate.
   *
   * @public
   */
  certificateDomainName: string | undefined;

  /**
   * An array of strings listing alternative domains and subdomains for your SSL/TLS certificate. Lightsail will de-dupe the names for you. You can have a maximum of 9 alternative names (in addition to the 1 primary domain). We do not support wildcards (`*.example.com`).
   *
   * @public
   */
  certificateAlternativeNames?: string[] | undefined;

  /**
   * The tag keys and optional values to add to the resource during create.
   *
   * Use the `TagResource` action to tag a resource after it's created.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateLoadBalancerTlsCertificateResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface CreateRelationalDatabaseRequest {
  /**
   * The name to use for your new Lightsail database resource.
   *
   * Constraints:
   *
   * - Must contain from 2 to 255 alphanumeric characters, or hyphens.
   * - The first and last character must be a letter or number.
   *
   * @public
   */
  relationalDatabaseName: string | undefined;

  /**
   * The Availability Zone in which to create your new database. Use the `us-east-2a` case-sensitive format.
   *
   * You can get a list of Availability Zones by using the `get regions` operation. Be sure to add the `include relational database Availability Zones` parameter to your request.
   *
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * The blueprint ID for your new database. A blueprint describes the major engine version of a database.
   *
   * You can get a list of database blueprints IDs by using the `get relational database blueprints` operation.
   *
   * @public
   */
  relationalDatabaseBlueprintId: string | undefined;

  /**
   * The bundle ID for your new database. A bundle describes the performance specifications for your database.
   *
   * You can get a list of database bundle IDs by using the `get relational database bundles` operation.
   *
   * @public
   */
  relationalDatabaseBundleId: string | undefined;

  /**
   * The meaning of this parameter differs according to the database engine you use.
   *
   * **MySQL**
   *
   * The name of the database to create when the Lightsail database resource is created. If this parameter isn't specified, no database is created in the database resource.
   *
   * Constraints:
   *
   * - Must contain 1 to 64 letters or numbers.
   * - Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0- 9).
   * - Can't be a word reserved by the specified database engine.
   *
   *   For more information about reserved words in MySQL, see the Keywords and Reserved Words articles for [MySQL 5.6](https://dev.mysql.com/doc/refman/5.6/en/keywords.html), [MySQL 5.7](https://dev.mysql.com/doc/refman/5.7/en/keywords.html), and [MySQL 8.0](https://dev.mysql.com/doc/refman/8.0/en/keywords.html).
   *
   * **PostgreSQL**
   *
   * The name of the database to create when the Lightsail database resource is created. If this parameter isn't specified, a database named `postgres` is created in the database resource.
   *
   * Constraints:
   *
   * - Must contain 1 to 63 letters or numbers.
   * - Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0- 9).
   * - Can't be a word reserved by the specified database engine.
   *
   *   For more information about reserved words in PostgreSQL, see the SQL Key Words articles for [PostgreSQL 9.6](https://www.postgresql.org/docs/9.6/sql-keywords-appendix.html), [PostgreSQL 10](https://www.postgresql.org/docs/10/sql-keywords-appendix.html), [PostgreSQL 11](https://www.postgresql.org/docs/11/sql-keywords-appendix.html), and [PostgreSQL 12](https://www.postgresql.org/docs/12/sql-keywords-appendix.html).
   *
   * @public
   */
  masterDatabaseName: string | undefined;

  /**
   * The name for the master user.
   *
   * **MySQL**
   *
   * Constraints:
   *
   * - Required for MySQL.
   * - Must be 1 to 16 letters or numbers. Can contain underscores.
   * - First character must be a letter.
   * - Can't be a reserved word for the chosen database engine.
   *
   *   For more information about reserved words in MySQL 5.6 or 5.7, see the Keywords and Reserved Words articles for [MySQL 5.6](https://dev.mysql.com/doc/refman/5.6/en/keywords.html), [MySQL 5.7](https://dev.mysql.com/doc/refman/5.7/en/keywords.html), or [MySQL 8.0](https://dev.mysql.com/doc/refman/8.0/en/keywords.html).
   *
   * **PostgreSQL**
   *
   * Constraints:
   *
   * - Required for PostgreSQL.
   * - Must be 1 to 63 letters or numbers. Can contain underscores.
   * - First character must be a letter.
   * - Can't be a reserved word for the chosen database engine.
   *
   *   For more information about reserved words in MySQL 5.6 or 5.7, see the Keywords and Reserved Words articles for [PostgreSQL 9.6](https://www.postgresql.org/docs/9.6/sql-keywords-appendix.html), [PostgreSQL 10](https://www.postgresql.org/docs/10/sql-keywords-appendix.html), [PostgreSQL 11](https://www.postgresql.org/docs/11/sql-keywords-appendix.html), and [PostgreSQL 12](https://www.postgresql.org/docs/12/sql-keywords-appendix.html).
   *
   * @public
   */
  masterUsername: string | undefined;

  /**
   * The password for the master user. The password can include any printable ASCII character except "/", """, or "@". It cannot contain spaces.
   *
   * **MySQL**
   *
   * Constraints: Must contain from 8 to 41 characters.
   *
   * **PostgreSQL**
   *
   * Constraints: Must contain from 8 to 128 characters.
   *
   * @public
   */
  masterUserPassword?: string | undefined;

  /**
   * The daily time range during which automated backups are created for your new database if automated backups are enabled.
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. For more information about the preferred backup window time blocks for each region, see the [Working With Backups](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow) guide in the Amazon Relational Database Service documentation.
   *
   * Constraints:
   *
   * - Must be in the `hh24:mi-hh24:mi` format.
   *
   *   Example: `16:00-16:30`
   * - Specified in Coordinated Universal Time (UTC).
   * - Must not conflict with the preferred maintenance window.
   * - Must be at least 30 minutes.
   *
   * @public
   */
  preferredBackupWindow?: string | undefined;

  /**
   * The weekly time range during which system maintenance can occur on your new database.
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week.
   *
   * Constraints:
   *
   * - Must be in the `ddd:hh24:mi-ddd:hh24:mi` format.
   * - Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.
   * - Must be at least 30 minutes.
   * - Specified in Coordinated Universal Time (UTC).
   * - Example: `Tue:17:00-Tue:17:30`
   *
   * @public
   */
  preferredMaintenanceWindow?: string | undefined;

  /**
   * Specifies the accessibility options for your new database. A value of `true` specifies a database that is available to resources outside of your Lightsail account. A value of `false` specifies a database that is available only to your Lightsail resources in the same region as your database.
   *
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * The tag keys and optional values to add to the resource during create.
   *
   * Use the `TagResource` action to tag a resource after it's created.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateRelationalDatabaseResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface CreateRelationalDatabaseFromSnapshotRequest {
  /**
   * The name to use for your new Lightsail database resource.
   *
   * Constraints:
   *
   * - Must contain from 2 to 255 alphanumeric characters, or hyphens.
   * - The first and last character must be a letter or number.
   *
   * @public
   */
  relationalDatabaseName: string | undefined;

  /**
   * The Availability Zone in which to create your new database. Use the `us-east-2a` case-sensitive format.
   *
   * You can get a list of Availability Zones by using the `get regions` operation. Be sure to add the `include relational database Availability Zones` parameter to your request.
   *
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * Specifies the accessibility options for your new database. A value of `true` specifies a database that is available to resources outside of your Lightsail account. A value of `false` specifies a database that is available only to your Lightsail resources in the same region as your database.
   *
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * The name of the database snapshot from which to create your new database.
   *
   * @public
   */
  relationalDatabaseSnapshotName?: string | undefined;

  /**
   * The bundle ID for your new database. A bundle describes the performance specifications for your database.
   *
   * You can get a list of database bundle IDs by using the `get relational database bundles` operation.
   *
   * When creating a new database from a snapshot, you cannot choose a bundle that is smaller than the bundle of the source database.
   *
   * @public
   */
  relationalDatabaseBundleId?: string | undefined;

  /**
   * The name of the source database.
   *
   * @public
   */
  sourceRelationalDatabaseName?: string | undefined;

  /**
   * The date and time to restore your database from.
   *
   * Constraints:
   *
   * - Must be before the latest restorable time for the database.
   * - Cannot be specified if the `use latest restorable time` parameter is `true`.
   * - Specified in Coordinated Universal Time (UTC).
   * - Specified in the Unix time format.
   *
   *   For example, if you wish to use a restore time of October 1, 2018, at 8 PM UTC, then you input `1538424000` as the restore time.
   *
   * @public
   */
  restoreTime?: Date | undefined;

  /**
   * Specifies whether your database is restored from the latest backup time. A value of `true` restores from the latest backup time.
   *
   * Default: `false`
   *
   * Constraints: Cannot be specified if the `restore time` parameter is provided.
   *
   * @public
   */
  useLatestRestorableTime?: boolean | undefined;

  /**
   * The tag keys and optional values to add to the resource during create.
   *
   * Use the `TagResource` action to tag a resource after it's created.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateRelationalDatabaseFromSnapshotResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface CreateRelationalDatabaseSnapshotRequest {
  /**
   * The name of the database on which to base your new snapshot.
   *
   * @public
   */
  relationalDatabaseName: string | undefined;

  /**
   * The name for your new database snapshot.
   *
   * Constraints:
   *
   * - Must contain from 2 to 255 alphanumeric characters, or hyphens.
   * - The first and last character must be a letter or number.
   *
   * @public
   */
  relationalDatabaseSnapshotName: string | undefined;

  /**
   * The tag keys and optional values to add to the resource during create.
   *
   * Use the `TagResource` action to tag a resource after it's created.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateRelationalDatabaseSnapshotResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface DeleteAlarmRequest {
  /**
   * The name of the alarm to delete.
   *
   * @public
   */
  alarmName: string | undefined;
}

/**
 * @public
 */
export interface DeleteAlarmResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface DeleteAutoSnapshotRequest {
  /**
   * The name of the source instance or disk from which to delete the automatic snapshot.
   *
   * @public
   */
  resourceName: string | undefined;

  /**
   * The date of the automatic snapshot to delete in `YYYY-MM-DD` format. Use the `get auto snapshots` operation to get the available automatic snapshots for a resource.
   *
   * @public
   */
  date: string | undefined;
}

/**
 * @public
 */
export interface DeleteAutoSnapshotResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface DeleteBucketRequest {
  /**
   * The name of the bucket to delete.
   *
   * Use the [GetBuckets](https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBuckets.html) action to get a list of bucket names that you can specify.
   *
   * @public
   */
  bucketName: string | undefined;

  /**
   * A Boolean value that indicates whether to force delete the bucket.
   *
   * You must force delete the bucket if it has one of the following conditions:
   *
   * - The bucket is the origin of a distribution.
   * - The bucket has instances that were granted access to it using the [SetResourceAccessForBucket](https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_SetResourceAccessForBucket.html) action.
   * - The bucket has objects.
   * - The bucket has access keys.
   *
   * > **Important:** Force deleting a bucket might impact other resources that rely on the bucket, such as instances, distributions, or software that use the issued access keys.
   *
   * @public
   */
  forceDelete?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteBucketResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface DeleteBucketAccessKeyRequest {
  /**
   * The name of the bucket that the access key belongs to.
   *
   * @public
   */
  bucketName: string | undefined;

  /**
   * The ID of the access key to delete.
   *
   * Use the [GetBucketAccessKeys](https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketAccessKeys.html) action to get a list of access key IDs that you can specify.
   *
   * @public
   */
  accessKeyId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketAccessKeyResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface DeleteCertificateRequest {
  /**
   * The name of the certificate to delete.
   *
   * Use the `GetCertificates` action to get a list of certificate names that you can specify.
   *
   * @public
   */
  certificateName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCertificateResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface DeleteContactMethodRequest {
  /**
   * The protocol that will be deleted, such as `Email` or `SMS` (text messaging).
   *
   * > **Note:** To delete an `Email` and an `SMS` contact method if you added both, you must run separate `DeleteContactMethod` actions to delete each protocol.
   *
   * @public
   */
  protocol: ContactProtocol | undefined;
}

/**
 * @public
 */
export interface DeleteContactMethodResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface DeleteContainerImageRequest {
  /**
   * The name of the container service for which to delete a registered container image.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * The name of the container image to delete from the container service.
   *
   * Use the `GetContainerImages` action to get the name of the container images that are registered to a container service.
   *
   * > **Note:** Container images sourced from your Lightsail container service, that are registered and stored on your service, start with a colon (`:`). For example, `:container-service-1.mystaticwebsite.1`. Container images sourced from a public registry like Docker Hub don't start with a colon. For example, `nginx:latest` or `nginx`.
   *
   * @public
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
   * The name of the container service to delete.
   *
   * @public
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
   * The unique name of the disk you want to delete (`my-disk`).
   *
   * @public
   */
  diskName: string | undefined;

  /**
   * A Boolean value to indicate whether to delete all add-ons for the disk.
   *
   * @public
   */
  forceDeleteAddOns?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteDiskResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface DeleteDiskSnapshotRequest {
  /**
   * The name of the disk snapshot you want to delete (`my-disk-snapshot`).
   *
   * @public
   */
  diskSnapshotName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDiskSnapshotResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface DeleteDistributionRequest {
  /**
   * The name of the distribution to delete.
   *
   * Use the `GetDistributions` action to get a list of distribution names that you can specify.
   *
   * @public
   */
  distributionName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDistributionResult {
  /**
   * An object that describes the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * @public
 */
export interface DeleteDomainRequest {
  /**
   * The specific domain name to delete.
   *
   * @public
   */
  domainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * @public
 */
export interface DeleteDomainEntryRequest {
  /**
   * The name of the domain entry to delete.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * An array of key-value pairs containing information about your domain entries.
   *
   * @public
   */
  domainEntry: DomainEntry | undefined;
}

/**
 * @public
 */
export interface DeleteDomainEntryResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceRequest {
  /**
   * The name of the instance to delete.
   *
   * @public
   */
  instanceName: string | undefined;

  /**
   * A Boolean value to indicate whether to delete all add-ons for the instance.
   *
   * @public
   */
  forceDeleteAddOns?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceSnapshotRequest {
  /**
   * The name of the snapshot to delete.
   *
   * @public
   */
  instanceSnapshotName: string | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceSnapshotResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface DeleteKeyPairRequest {
  /**
   * The name of the key pair to delete.
   *
   * @public
   */
  keyPairName: string | undefined;

  /**
   * The RSA fingerprint of the Lightsail default key pair to delete.
   *
   * > **Note:** The `expectedFingerprint` parameter is required only when specifying to delete a Lightsail default key pair.
   *
   * @public
   */
  expectedFingerprint?: string | undefined;
}

/**
 * @public
 */
export interface DeleteKeyPairResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * @public
 */
export interface DeleteKnownHostKeysRequest {
  /**
   * The name of the instance for which you want to reset the host key or certificate.
   *
   * @public
   */
  instanceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteKnownHostKeysResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface DeleteLoadBalancerRequest {
  /**
   * The name of the load balancer you want to delete.
   *
   * @public
   */
  loadBalancerName: string | undefined;
}

/**
 * @public
 */
export interface DeleteLoadBalancerResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface DeleteLoadBalancerTlsCertificateRequest {
  /**
   * The load balancer name.
   *
   * @public
   */
  loadBalancerName: string | undefined;

  /**
   * The SSL/TLS certificate name.
   *
   * @public
   */
  certificateName: string | undefined;

  /**
   * When `true`, forces the deletion of an SSL/TLS certificate.
   *
   * There can be two certificates associated with a Lightsail load balancer: the primary and the backup. The `force` parameter is required when the primary SSL/TLS certificate is in use by an instance attached to the load balancer.
   *
   * @public
   */
  force?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteLoadBalancerTlsCertificateResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface DeleteRelationalDatabaseRequest {
  /**
   * The name of the database that you are deleting.
   *
   * @public
   */
  relationalDatabaseName: string | undefined;

  /**
   * Determines whether a final database snapshot is created before your database is deleted. If `true` is specified, no database snapshot is created. If `false` is specified, a database snapshot is created before your database is deleted.
   *
   * You must specify the `final relational database snapshot name` parameter if the `skip final snapshot` parameter is `false`.
   *
   * Default: `false`
   *
   * @public
   */
  skipFinalSnapshot?: boolean | undefined;

  /**
   * The name of the database snapshot created if `skip final snapshot` is `false`, which is the default value for that parameter.
   *
   * > **Note:** Specifying this parameter and also specifying the `skip final snapshot` parameter to `true` results in an error.
   *
   * Constraints:
   *
   * - Must contain from 2 to 255 alphanumeric characters, or hyphens.
   * - The first and last character must be a letter or number.
   *
   * @public
   */
  finalRelationalDatabaseSnapshotName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRelationalDatabaseResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface DeleteRelationalDatabaseSnapshotRequest {
  /**
   * The name of the database snapshot that you are deleting.
   *
   * @public
   */
  relationalDatabaseSnapshotName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRelationalDatabaseSnapshotResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface DetachCertificateFromDistributionRequest {
  /**
   * The name of the distribution from which to detach the certificate.
   *
   * Use the `GetDistributions` action to get a list of distribution names that you can specify.
   *
   * @public
   */
  distributionName: string | undefined;
}

/**
 * @public
 */
export interface DetachCertificateFromDistributionResult {
  /**
   * An object that describes the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operation?: Operation | undefined;
}

/**
 * @public
 */
export interface DetachDiskRequest {
  /**
   * The unique name of the disk you want to detach from your instance (`my-disk`).
   *
   * @public
   */
  diskName: string | undefined;
}

/**
 * @public
 */
export interface DetachDiskResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface DetachInstancesFromLoadBalancerRequest {
  /**
   * The name of the Lightsail load balancer.
   *
   * @public
   */
  loadBalancerName: string | undefined;

  /**
   * An array of strings containing the names of the instances you want to detach from the load balancer.
   *
   * @public
   */
  instanceNames: string[] | undefined;
}

/**
 * @public
 */
export interface DetachInstancesFromLoadBalancerResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface DetachStaticIpRequest {
  /**
   * The name of the static IP to detach from the instance.
   *
   * @public
   */
  staticIpName: string | undefined;
}

/**
 * @public
 */
export interface DetachStaticIpResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface DisableAddOnRequest {
  /**
   * The add-on type to disable.
   *
   * @public
   */
  addOnType: AddOnType | undefined;

  /**
   * The name of the source resource for which to disable the add-on.
   *
   * @public
   */
  resourceName: string | undefined;
}

/**
 * @public
 */
export interface DisableAddOnResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * Describes a block storage disk.
 *
 * @public
 */
export interface Disk {
  /**
   * The unique name of the disk.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the disk.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.
   *
   * @public
   */
  supportCode?: string | undefined;

  /**
   * The date when the disk was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The AWS Region and Availability Zone where the disk is located.
   *
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * The Lightsail resource type (`Disk`).
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The tag keys and optional values for the resource. For more information about tags in Lightsail, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-tags).
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * An array of objects representing the add-ons enabled on the disk.
   *
   * @public
   */
  addOns?: AddOn[] | undefined;

  /**
   * The size of the disk in GB.
   *
   * @public
   */
  sizeInGb?: number | undefined;

  /**
   * A Boolean value indicating whether this disk is a system disk (has an operating system loaded on it).
   *
   * @public
   */
  isSystemDisk?: boolean | undefined;

  /**
   * The input/output operations per second (IOPS) of the disk.
   *
   * @public
   */
  iops?: number | undefined;

  /**
   * The disk path.
   *
   * @public
   */
  path?: string | undefined;

  /**
   * Describes the status of the disk.
   *
   * @public
   */
  state?: DiskState | undefined;

  /**
   * The resources to which the disk is attached.
   *
   * @public
   */
  attachedTo?: string | undefined;

  /**
   * A Boolean value indicating whether the disk is attached.
   *
   * @public
   */
  isAttached?: boolean | undefined;

  /**
   * (Discontinued) The attachment state of the disk.
   *
   * > **Note:** In releases prior to November 14, 2017, this parameter returned `attached` for system disks in the API response. It is now discontinued, but still included in the response. Use `isAttached` instead.
   *
   * @deprecated deprecated.
   * @public
   */
  attachmentState?: string | undefined;

  /**
   * (Discontinued) The number of GB in use by the disk.
   *
   * > **Note:** In releases prior to November 14, 2017, this parameter was not included in the API response. It is now discontinued.
   *
   * @deprecated deprecated.
   * @public
   */
  gbInUse?: number | undefined;

  /**
   * The status of automatically mounting a storage disk to a virtual computer.
   *
   * > **Important:** This parameter only applies to Lightsail for Research resources.
   *
   * @public
   */
  autoMountStatus?: AutoMountStatus | undefined;
}

/**
 * Describes a disk.
 *
 * @public
 */
export interface DiskInfo {
  /**
   * The disk name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The disk path.
   *
   * @public
   */
  path?: string | undefined;

  /**
   * The size of the disk in GB (`32`).
   *
   * @public
   */
  sizeInGb?: number | undefined;

  /**
   * A Boolean value indicating whether this disk is a system disk (has an operating system loaded on it).
   *
   * @public
   */
  isSystemDisk?: boolean | undefined;
}

/**
 * Describes a block storage disk snapshot.
 *
 * @public
 */
export interface DiskSnapshot {
  /**
   * The name of the disk snapshot (`my-disk-snapshot`).
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the disk snapshot.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.
   *
   * @public
   */
  supportCode?: string | undefined;

  /**
   * The date when the disk snapshot was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The AWS Region and Availability Zone where the disk snapshot was created.
   *
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * The Lightsail resource type (`DiskSnapshot`).
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The tag keys and optional values for the resource. For more information about tags in Lightsail, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-tags).
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The size of the disk in GB.
   *
   * @public
   */
  sizeInGb?: number | undefined;

  /**
   * The status of the disk snapshot operation.
   *
   * @public
   */
  state?: DiskSnapshotState | undefined;

  /**
   * The progress of the snapshot.
   *
   * @public
   */
  progress?: string | undefined;

  /**
   * The unique name of the source disk from which the disk snapshot was created.
   *
   * @public
   */
  fromDiskName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source disk from which the disk snapshot was created.
   *
   * @public
   */
  fromDiskArn?: string | undefined;

  /**
   * The unique name of the source instance from which the disk (system volume) snapshot was created.
   *
   * @public
   */
  fromInstanceName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source instance from which the disk (system volume) snapshot was created.
   *
   * @public
   */
  fromInstanceArn?: string | undefined;

  /**
   * A Boolean value indicating whether the snapshot was created from an automatic snapshot.
   *
   * @public
   */
  isFromAutoSnapshot?: boolean | undefined;
}

/**
 * Describes a disk snapshot.
 *
 * @public
 */
export interface DiskSnapshotInfo {
  /**
   * The size of the disk in GB (`32`).
   *
   * @public
   */
  sizeInGb?: number | undefined;
}

/**
 * Describes the specifications of a distribution bundle.
 *
 * @public
 */
export interface DistributionBundle {
  /**
   * The ID of the bundle.
   *
   * @public
   */
  bundleId?: string | undefined;

  /**
   * The name of the distribution bundle.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The monthly price, in US dollars, of the bundle.
   *
   * @public
   */
  price?: number | undefined;

  /**
   * The monthly network transfer quota of the bundle.
   *
   * @public
   */
  transferPerMonthInGb?: number | undefined;

  /**
   * Indicates whether the bundle is active, and can be specified for a new or existing distribution.
   *
   * @public
   */
  isActive?: boolean | undefined;
}

/**
 * Describes the state of the name server records update made by Amazon Lightsail to an Amazon Route 53 registered domain.
 *
 * For more information, see [DNS in Amazon Lightsail](https://docs.aws.amazon.com/lightsail/latest/userguide/understanding-dns-in-amazon-lightsail) in the *Amazon Lightsail Developer Guide*.
 *
 * @public
 */
export interface NameServersUpdateState {
  /**
   * The status code for the name servers update.
   *
   * Following are the possible values:
   *
   * - `SUCCEEDED` - The name server records were successfully updated.
   * - `PENDING` - The name server record update is in progress.
   * - `FAILED` - The name server record update failed.
   * - `STARTED` - The automatic name server record update started.
   *
   * @public
   */
  code?: NameServersUpdateStateCode | undefined;

  /**
   * The message that describes the reason for the status code.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Describes the deletion state of an Amazon Route 53 hosted zone for a domain that is being automatically delegated to an Amazon Lightsail DNS zone.
 *
 * @public
 */
export interface R53HostedZoneDeletionState {
  /**
   * The status code for the deletion state.
   *
   * Following are the possible values:
   *
   * - `SUCCEEDED` - The hosted zone was successfully deleted.
   * - `PENDING` - The hosted zone deletion is in progress.
   * - `FAILED` - The hosted zone deletion failed.
   * - `STARTED` - The hosted zone deletion started.
   *
   * @public
   */
  code?: R53HostedZoneDeletionStateCode | undefined;

  /**
   * The message that describes the reason for the status code.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Describes the delegation state of an Amazon Route 53 registered domain to Amazon Lightsail.
 *
 * When you delegate an Amazon Route 53 registered domain to Lightsail, you can manage the DNS of the domain using a Lightsail DNS zone. You no longer use the Route 53 hosted zone to manage the DNS of the domain. To delegate the domain, Lightsail automatically updates the domain's name servers in Route 53 to the name servers of the Lightsail DNS zone. Then, Lightsail automatically deletes the Route 53 hosted zone for the domain.
 *
 * All of the following conditions must be true for automatic domain delegation to be successful:
 *
 * - The registered domain must be in the same Amazon Web Services account as the Lightsail account making the request.
 * - The user or entity making the request must have permission to manage domains in Route 53.
 * - The Route 53 hosted zone for the domain must be empty. It cannot contain DNS records other than start of authority (SOA) and name server records.
 *
 * If automatic domain delegation fails, or if you manage the DNS of your domain using a service other than Route 53, then you must manually add the Lightsail DNS zone name servers to your domain in order to delegate management of its DNS to Lightsail. For more information, see [Creating a DNS zone to manage your domain’s records in Amazon Lightsail](https://docs.aws.amazon.com/lightsail/latest/userguide/lightsail-how-to-create-dns-entry) in the *Amazon Lightsail Developer Guide*.
 *
 * @public
 */
export interface RegisteredDomainDelegationInfo {
  /**
   * An object that describes the state of the name server records that are automatically added to the Route 53 domain by Lightsail.
   *
   * @public
   */
  nameServersUpdateState?: NameServersUpdateState | undefined;

  /**
   * Describes the deletion state of an Amazon Route 53 hosted zone for a domain that is being automatically delegated to an Amazon Lightsail DNS zone.
   *
   * @public
   */
  r53HostedZoneDeletionState?: R53HostedZoneDeletionState | undefined;
}

/**
 * Describes a domain where you are storing recordsets.
 *
 * @public
 */
export interface Domain {
  /**
   * The name of the domain.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain recordset (`arn:aws:lightsail:global:123456789101:Domain/824cede0-abc7-4f84-8dbc-12345EXAMPLE`).
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.
   *
   * @public
   */
  supportCode?: string | undefined;

  /**
   * The date when the domain recordset was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The AWS Region and Availability Zones where the domain recordset was created.
   *
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * The resource type.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The tag keys and optional values for the resource. For more information about tags in Lightsail, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-tags).
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * An array of key-value pairs containing information about the domain entries.
   *
   * @public
   */
  domainEntries?: DomainEntry[] | undefined;

  /**
   * An object that describes the state of the Route 53 domain delegation to a Lightsail DNS zone.
   *
   * @public
   */
  registeredDomainDelegationInfo?: RegisteredDomainDelegationInfo | undefined;
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
   * A base64-encoded public key of the `ssh-rsa` type.
   *
   * @public
   */
  publicKeyBase64?: string | undefined;

  /**
   * A base64-encoded RSA private key.
   *
   * @public
   */
  privateKeyBase64?: string | undefined;

  /**
   * The timestamp when the default key pair was created.
   *
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface EnableAddOnRequest {
  /**
   * The name of the source resource for which to enable or modify the add-on.
   *
   * @public
   */
  resourceName: string | undefined;

  /**
   * An array of strings representing the add-on to enable or modify.
   *
   * @public
   */
  addOnRequest: AddOnRequest | undefined;
}

/**
 * @public
 */
export interface EnableAddOnResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * @public
 */
export interface ExportSnapshotRequest {
  /**
   * The name of the instance or disk snapshot to be exported to Amazon EC2.
   *
   * @public
   */
  sourceSnapshotName: string | undefined;
}

/**
 * @public
 */
export interface ExportSnapshotResult {
  /**
   * An array of objects that describe the result of the action, such as the status of the request, the timestamp of the request, and the resources affected by the request.
   *
   * @public
   */
  operations?: Operation[] | undefined;
}

/**
 * Describes an instance snapshot.
 *
 * @public
 */
export interface InstanceSnapshotInfo {
  /**
   * The bundle ID from which the source instance was created (`micro_x_x`).
   *
   * @public
   */
  fromBundleId?: string | undefined;

  /**
   * The blueprint ID from which the source instance (`amazon_linux_2023`).
   *
   * @public
   */
  fromBlueprintId?: string | undefined;

  /**
   * A list of objects describing the disks that were attached to the source instance.
   *
   * @public
   */
  fromDiskInfo?: DiskInfo[] | undefined;
}

/**
 * Describes the source of an export snapshot record.
 *
 * @public
 */
export interface ExportSnapshotRecordSourceInfo {
  /**
   * The Lightsail resource type (`InstanceSnapshot` or `DiskSnapshot`).
   *
   * @public
   */
  resourceType?: ExportSnapshotRecordSourceType | undefined;

  /**
   * The date when the source instance or disk snapshot was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The name of the source instance or disk snapshot.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source instance or disk snapshot.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the snapshot's source instance or disk.
   *
   * @public
   */
  fromResourceName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the snapshot's source instance or disk.
   *
   * @public
   */
  fromResourceArn?: string | undefined;

  /**
   * A list of objects describing an instance snapshot.
   *
   * @public
   */
  instanceSnapshotInfo?: InstanceSnapshotInfo | undefined;

  /**
   * A list of objects describing a disk snapshot.
   *
   * @public
   */
  diskSnapshotInfo?: DiskSnapshotInfo | undefined;
}

/**
 * Describes an export snapshot record.
 *
 * @public
 */
export interface ExportSnapshotRecord {
  /**
   * The export snapshot record name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the export snapshot record.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The date when the export snapshot record was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The AWS Region and Availability Zone where the export snapshot record is located.
   *
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * The Lightsail resource type (`ExportSnapshotRecord`).
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The state of the export snapshot record.
   *
   * @public
   */
  state?: RecordState | undefined;

  /**
   * A list of objects describing the source of the export snapshot record.
   *
   * @public
   */
  sourceInfo?: ExportSnapshotRecordSourceInfo | undefined;

  /**
   * A list of objects describing the destination of the export snapshot record.
   *
   * @public
   */
  destinationInfo?: DestinationInfo | undefined;
}

/**
 * @public
 */
export interface GetActiveNamesRequest {
  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetActiveNames` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetActiveNamesResult {
  /**
   * The list of active names returned by the get active names request.
   *
   * @public
   */
  activeNames?: string[] | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetActiveNames` request and specify the next page token using the `pageToken` parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAlarmsRequest {
  /**
   * The name of the alarm.
   *
   * Specify an alarm name to return information about a specific alarm.
   *
   * @public
   */
  alarmName?: string | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetAlarms` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;

  /**
   * The name of the Lightsail resource being monitored by the alarm.
   *
   * Specify a monitored resource name to return information about all alarms for a specific resource.
   *
   * @public
   */
  monitoredResourceName?: string | undefined;
}

/**
 * @public
 */
export interface GetAlarmsResult {
  /**
   * An array of objects that describe the alarms.
   *
   * @public
   */
  alarms?: Alarm[] | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetAlarms` request and specify the next page token using the `pageToken` parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAutoSnapshotsRequest {
  /**
   * The name of the source instance or disk from which to get automatic snapshot information.
   *
   * @public
   */
  resourceName: string | undefined;
}

/**
 * @public
 */
export interface GetAutoSnapshotsResult {
  /**
   * The name of the source instance or disk for the automatic snapshots.
   *
   * @public
   */
  resourceName?: string | undefined;

  /**
   * The resource type of the automatic snapshot. The possible values are `Instance`, and `Disk`.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * An array of objects that describe the automatic snapshots that are available for the specified source instance or disk.
   *
   * @public
   */
  autoSnapshots?: AutoSnapshotDetails[] | undefined;
}

/**
 * @public
 */
export interface GetBlueprintsRequest {
  /**
   * A Boolean value that indicates whether to include inactive (unavailable) blueprints in the response of your request.
   *
   * @public
   */
  includeInactive?: boolean | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetBlueprints` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;

  /**
   * Returns a list of blueprints that are specific to Lightsail for Research.
   *
   * > **Important:** You must use this parameter to view Lightsail for Research blueprints.
   *
   * @public
   */
  appCategory?: AppCategory | undefined;
}

/**
 * @public
 */
export interface GetBlueprintsResult {
  /**
   * An array of key-value pairs that contains information about the available blueprints.
   *
   * @public
   */
  blueprints?: Blueprint[] | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetBlueprints` request and specify the next page token using the `pageToken` parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetBucketAccessKeysRequest {
  /**
   * The name of the bucket for which to return access keys.
   *
   * @public
   */
  bucketName: string | undefined;
}

/**
 * @public
 */
export interface GetBucketAccessKeysResult {
  /**
   * An object that describes the access keys for the specified bucket.
   *
   * @public
   */
  accessKeys?: AccessKey[] | undefined;
}

/**
 * @public
 */
export interface GetBucketBundlesRequest {
  /**
   * A Boolean value that indicates whether to include inactive (unavailable) bundles in the response of your request.
   *
   * @public
   */
  includeInactive?: boolean | undefined;
}

/**
 * @public
 */
export interface GetBucketBundlesResult {
  /**
   * An object that describes bucket bundles.
   *
   * @public
   */
  bundles?: BucketBundle[] | undefined;
}

/**
 * @public
 */
export interface GetBucketMetricDataRequest {
  /**
   * The name of the bucket for which to get metric data.
   *
   * @public
   */
  bucketName: string | undefined;

  /**
   * The metric for which you want to return information.
   *
   * Valid bucket metric names are listed below, along with the most useful statistics to include in your request, and the published unit value.
   *
   * > **Note:** These bucket metrics are reported once per day.
   *
   * - **`BucketSizeBytes`** - The amount of data in bytes stored in a bucket. This value is calculated by summing the size of all objects in the bucket (including object versions), including the size of all parts for all incomplete multipart uploads to the bucket.
   *
   *   Statistics: The most useful statistic is `Maximum`.
   *
   *   Unit: The published unit is `Bytes`.
   * - **`NumberOfObjects`** - The total number of objects stored in a bucket. This value is calculated by counting all objects in the bucket (including object versions) and the total number of parts for all incomplete multipart uploads to the bucket.
   *
   *   Statistics: The most useful statistic is `Average`.
   *
   *   Unit: The published unit is `Count`.
   *
   * @public
   */
  metricName: BucketMetricName | undefined;

  /**
   * The timestamp indicating the earliest data to be returned.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The timestamp indicating the latest data to be returned.
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * The granularity, in seconds, of the returned data points.
   *
   * > **Note:** Bucket storage metrics are reported once per day. Therefore, you should specify a period of 86400 seconds, which is the number of seconds in a day.
   *
   * @public
   */
  period: number | undefined;

  /**
   * The statistic for the metric.
   *
   * The following statistics are available:
   *
   * - `Minimum` - The lowest value observed during the specified period. Use this value to determine low volumes of activity for your application.
   * - `Maximum` - The highest value observed during the specified period. Use this value to determine high volumes of activity for your application.
   * - `Sum` - The sum of all values submitted for the matching metric. You can use this statistic to determine the total volume of a metric.
   * - `Average` - The value of `Sum` / `SampleCount` during the specified period. By comparing this statistic with the `Minimum` and `Maximum` values, you can determine the full scope of a metric and how close the average use is to the `Minimum` and `Maximum` values. This comparison helps you to know when to increase or decrease your resources.
   * - `SampleCount` - The count, or number, of data points used for the statistical calculation.
   *
   * @public
   */
  statistics: MetricStatistic[] | undefined;

  /**
   * The unit for the metric data request.
   *
   * Valid units depend on the metric data being requested. For the valid units with each available metric, see the `metricName` parameter.
   *
   * @public
   */
  unit: MetricUnit | undefined;
}

/**
 * Describes the metric data point.
 *
 * @public
 */
export interface MetricDatapoint {
  /**
   * The average.
   *
   * @public
   */
  average?: number | undefined;

  /**
   * The maximum.
   *
   * @public
   */
  maximum?: number | undefined;

  /**
   * The minimum.
   *
   * @public
   */
  minimum?: number | undefined;

  /**
   * The sample count.
   *
   * @public
   */
  sampleCount?: number | undefined;

  /**
   * The sum.
   *
   * @public
   */
  sum?: number | undefined;

  /**
   * The timestamp (`1479816991.349`).
   *
   * @public
   */
  timestamp?: Date | undefined;

  /**
   * The unit.
   *
   * @public
   */
  unit?: MetricUnit | undefined;
}

/**
 * @public
 */
export interface GetBucketMetricDataResult {
  /**
   * The name of the metric returned.
   *
   * @public
   */
  metricName?: BucketMetricName | undefined;

  /**
   * An array of objects that describe the metric data returned.
   *
   * @public
   */
  metricData?: MetricDatapoint[] | undefined;
}

/**
 * @public
 */
export interface GetBucketsRequest {
  /**
   * The name of the bucket for which to return information.
   *
   * When omitted, the response includes all of your buckets in the Amazon Web Services Region where the request is made.
   *
   * @public
   */
  bucketName?: string | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetBuckets` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;

  /**
   * A Boolean value that indicates whether to include Lightsail instances that were given access to the bucket using the [SetResourceAccessForBucket](https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_SetResourceAccessForBucket.html) action.
   *
   * @public
   */
  includeConnectedResources?: boolean | undefined;

  /**
   * A Boolean value that indicates whether to include Lightsail bucket CORS configuration in the response. For more information, see [Configuring cross-origin resource sharing (CORS)](https://docs.aws.amazon.com/lightsail/latest/userguide/configure-cors.html).
   *
   * > **Note:** This parameter is only supported when getting a single bucket with `bucketName` specified. The default value for this parameter is `False`.
   *
   * @public
   */
  includeCors?: boolean | undefined;
}

/**
 * @public
 */
export interface GetBucketsResult {
  /**
   * An array of objects that describe buckets.
   *
   * @public
   */
  buckets?: Bucket[] | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetBuckets` request and specify the next page token using the `pageToken` parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;

  /**
   * An object that describes the synchronization status of the Amazon S3 account-level block public access feature for your Lightsail buckets.
   *
   * For more information about this feature and how it affects Lightsail buckets, see [Block public access for buckets in Amazon Lightsail](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-block-public-access-for-buckets).
   *
   * @public
   */
  accountLevelBpaSync?: AccountLevelBpaSync | undefined;
}

/**
 * @public
 */
export interface GetBundlesRequest {
  /**
   * A Boolean value that indicates whether to include inactive (unavailable) bundles in the response of your request.
   *
   * @public
   */
  includeInactive?: boolean | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetBundles` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;

  /**
   * Returns a list of bundles that are specific to Lightsail for Research.
   *
   * > **Important:** You must use this parameter to view Lightsail for Research bundles.
   *
   * @public
   */
  appCategory?: AppCategory | undefined;
}

/**
 * @public
 */
export interface GetBundlesResult {
  /**
   * An array of key-value pairs that contains information about the available bundles.
   *
   * @public
   */
  bundles?: Bundle[] | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetBundles` request and specify the next page token using the `pageToken` parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCertificatesRequest {
  /**
   * The status of the certificates for which to return information.
   *
   * For example, specify `ISSUED` to return only certificates with an `ISSUED` status.
   *
   * When omitted, the response includes all of your certificates in the Amazon Web Services Region where the request is made, regardless of their current status.
   *
   * @public
   */
  certificateStatuses?: CertificateStatus[] | undefined;

  /**
   * Indicates whether to include detailed information about the certificates in the response.
   *
   * When omitted, the response includes only the certificate names, Amazon Resource Names (ARNs), domain names, and tags.
   *
   * @public
   */
  includeCertificateDetails?: boolean | undefined;

  /**
   * The name for the certificate for which to return information.
   *
   * When omitted, the response includes all of your certificates in the Amazon Web Services Region where the request is made.
   *
   * @public
   */
  certificateName?: string | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetCertificates` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCertificatesResult {
  /**
   * An object that describes certificates.
   *
   * @public
   */
  certificates?: CertificateSummary[] | undefined;

  /**
   * If `NextPageToken` is returned there are more results available. The value of `NextPageToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCloudFormationStackRecordsRequest {
  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetClouFormationStackRecords` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCloudFormationStackRecordsResult {
  /**
   * A list of objects describing the CloudFormation stack records.
   *
   * @public
   */
  cloudFormationStackRecords?: CloudFormationStackRecord[] | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetCloudFormationStackRecords` request and specify the next page token using the `pageToken` parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetContactMethodsRequest {
  /**
   * The protocols used to send notifications, such as `Email`, or `SMS` (text messaging).
   *
   * Specify a protocol in your request to return information about a specific contact method protocol.
   *
   * @public
   */
  protocols?: ContactProtocol[] | undefined;
}

/**
 * @public
 */
export interface GetContactMethodsResult {
  /**
   * An array of objects that describe the contact methods.
   *
   * @public
   */
  contactMethods?: ContactMethod[] | undefined;
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
   * Metadata about Lightsail containers, such as the current version of the Lightsail Control (lightsailctl) plugin.
   *
   * @public
   */
  metadata?: Record<string, string>[] | undefined;
}

/**
 * @public
 */
export interface GetContainerImagesRequest {
  /**
   * The name of the container service for which to return registered container images.
   *
   * @public
   */
  serviceName: string | undefined;
}

/**
 * @public
 */
export interface GetContainerImagesResult {
  /**
   * An array of objects that describe container images that are registered to the container service.
   *
   * @public
   */
  containerImages?: ContainerImage[] | undefined;
}

/**
 * @public
 */
export interface GetContainerLogRequest {
  /**
   * The name of the container service for which to get a container log.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * The name of the container that is either running or previously ran on the container service for which to return a log.
   *
   * @public
   */
  containerName: string | undefined;

  /**
   * The start of the time interval for which to get log data.
   *
   * Constraints:
   *
   * - Specified in Coordinated Universal Time (UTC).
   * - Specified in the Unix time format.
   *
   *   For example, if you wish to use a start time of October 1, 2018, at 8 PM UTC, specify `1538424000` as the start time.
   *
   * You can convert a human-friendly time to Unix time format using a converter like [Epoch converter](https://www.epochconverter.com/).
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The end of the time interval for which to get log data.
   *
   * Constraints:
   *
   * - Specified in Coordinated Universal Time (UTC).
   * - Specified in the Unix time format.
   *
   *   For example, if you wish to use an end time of October 1, 2018, at 9 PM UTC, specify `1538427600` as the end time.
   *
   * You can convert a human-friendly time to Unix time format using a converter like [Epoch converter](https://www.epochconverter.com/).
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The pattern to use to filter the returned log events to a specific term.
   *
   * The following are a few examples of filter patterns that you can specify:
   *
   * - To return all log events, specify a filter pattern of `""`.
   * - To exclude log events that contain the `ERROR` term, and return all other log events, specify a filter pattern of `"-ERROR"`.
   * - To return log events that contain the `ERROR` term, specify a filter pattern of `"ERROR"`.
   * - To return log events that contain both the `ERROR` and `Exception` terms, specify a filter pattern of `"ERROR Exception"`.
   * - To return log events that contain the `ERROR` *or* the `Exception` term, specify a filter pattern of `"?ERROR ?Exception"`.
   *
   * @public
   */
  filterPattern?: string | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetContainerLog` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetContainerLogResult {
  /**
   * An array of objects that describe the log events of a container.
   *
   * @public
   */
  logEvents?: ContainerServiceLogEvent[] | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetContainerLog` request and specify the next page token using the `pageToken` parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetContainerServiceDeploymentsRequest {
  /**
   * The name of the container service for which to return deployments.
   *
   * @public
   */
  serviceName: string | undefined;
}

/**
 * @public
 */
export interface GetContainerServiceDeploymentsResult {
  /**
   * An array of objects that describe deployments for a container service.
   *
   * @public
   */
  deployments?: ContainerServiceDeployment[] | undefined;
}

/**
 * @public
 */
export interface GetContainerServiceMetricDataRequest {
  /**
   * The name of the container service for which to get metric data.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * The metric for which you want to return information.
   *
   * Valid container service metric names are listed below, along with the most useful statistics to include in your request, and the published unit value.
   *
   * - `CPUUtilization` - The average percentage of compute units that are currently in use across all nodes of the container service. This metric identifies the processing power required to run containers on each node of the container service.
   *
   *   Statistics: The most useful statistics are `Maximum` and `Average`.
   *
   *   Unit: The published unit is `Percent`.
   * - `MemoryUtilization` - The average percentage of available memory that is currently in use across all nodes of the container service. This metric identifies the memory required to run containers on each node of the container service.
   *
   *   Statistics: The most useful statistics are `Maximum` and `Average`.
   *
   *   Unit: The published unit is `Percent`.
   *
   * @public
   */
  metricName: ContainerServiceMetricName | undefined;

  /**
   * The start time of the time period.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The end time of the time period.
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * The granularity, in seconds, of the returned data points.
   *
   * All container service metric data is available in 5-minute (300 seconds) granularity.
   *
   * @public
   */
  period: number | undefined;

  /**
   * The statistic for the metric.
   *
   * The following statistics are available:
   *
   * - `Minimum` - The lowest value observed during the specified period. Use this value to determine low volumes of activity for your application.
   * - `Maximum` - The highest value observed during the specified period. Use this value to determine high volumes of activity for your application.
   * - `Sum` - All values submitted for the matching metric added together. You can use this statistic to determine the total volume of a metric.
   * - `Average` - The value of `Sum` / `SampleCount` during the specified period. By comparing this statistic with the `Minimum` and `Maximum` values, you can determine the full scope of a metric and how close the average use is to the `Minimum` and `Maximum` values. This comparison helps you to know when to increase or decrease your resources.
   * - `SampleCount` - The count, or number, of data points used for the statistical calculation.
   *
   * @public
   */
  statistics: MetricStatistic[] | undefined;
}

/**
 * @public
 */
export interface GetContainerServiceMetricDataResult {
  /**
   * The name of the metric returned.
   *
   * @public
   */
  metricName?: ContainerServiceMetricName | undefined;

  /**
   * An array of objects that describe the metric data returned.
   *
   * @public
   */
  metricData?: MetricDatapoint[] | undefined;
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
   * An array of objects that describe the powers that can be specified for a container service.
   *
   * @public
   */
  powers?: ContainerServicePower[] | undefined;
}

/**
 * @public
 */
export interface GetContainerServicesRequest {
  /**
   * The name of the container service for which to return information.
   *
   * When omitted, the response includes all of your container services in the Amazon Web Services Region where the request is made.
   *
   * @public
   */
  serviceName?: string | undefined;
}

/**
 * @public
 */
export interface GetCostEstimateRequest {
  /**
   * The resource name.
   *
   * @public
   */
  resourceName: string | undefined;

  /**
   * The cost estimate start time.
   *
   * Constraints:
   *
   * - Specified in Coordinated Universal Time (UTC).
   * - Specified in the Unix time format.
   *
   *   For example, if you want to use a start time of October 1, 2018, at 8 PM UTC, specify `1538424000` as the start time.
   *
   * You can convert a human-friendly time to Unix time format using a converter like [Epoch converter](https://www.epochconverter.com/).
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The cost estimate end time.
   *
   * Constraints:
   *
   * - Specified in Coordinated Universal Time (UTC).
   * - Specified in the Unix time format.
   *
   *   For example, if you want to use an end time of October 1, 2018, at 9 PM UTC, specify `1538427600` as the end time.
   *
   * You can convert a human-friendly time to Unix time format using a converter like [Epoch converter](https://www.epochconverter.com/).
   *
   * @public
   */
  endTime: Date | undefined;
}

/**
 * Describes the estimated cost or usage that a budget tracks.
 *
 * @public
 */
export interface ResourceBudgetEstimate {
  /**
   * The resource name.
   *
   * @public
   */
  resourceName?: string | undefined;

  /**
   * The type of resource the budget will track.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The cost estimate for the specified budget.
   *
   * @public
   */
  costEstimates?: CostEstimate[] | undefined;

  /**
   * The estimate start time.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The estimate end time.
   *
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetCostEstimateResult {
  /**
   * Returns the estimate's forecasted cost or usage.
   *
   * @public
   */
  resourcesBudgetEstimate?: ResourceBudgetEstimate[] | undefined;
}

/**
 * @public
 */
export interface GetDiskRequest {
  /**
   * The name of the disk (`my-disk`).
   *
   * @public
   */
  diskName: string | undefined;
}

/**
 * @public
 */
export interface GetDiskResult {
  /**
   * An object containing information about the disk.
   *
   * @public
   */
  disk?: Disk | undefined;
}

/**
 * @public
 */
export interface GetDisksRequest {
  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetDisks` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDisksResult {
  /**
   * An array of objects containing information about all block storage disks.
   *
   * @public
   */
  disks?: Disk[] | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetDisks` request and specify the next page token using the `pageToken` parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDiskSnapshotRequest {
  /**
   * The name of the disk snapshot (`my-disk-snapshot`).
   *
   * @public
   */
  diskSnapshotName: string | undefined;
}

/**
 * @public
 */
export interface GetDiskSnapshotResult {
  /**
   * An object containing information about the disk snapshot.
   *
   * @public
   */
  diskSnapshot?: DiskSnapshot | undefined;
}

/**
 * @public
 */
export interface GetDiskSnapshotsRequest {
  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetDiskSnapshots` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDiskSnapshotsResult {
  /**
   * An array of objects containing information about all block storage disk snapshots.
   *
   * @public
   */
  diskSnapshots?: DiskSnapshot[] | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetDiskSnapshots` request and specify the next page token using the `pageToken` parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDistributionBundlesRequest {}

/**
 * @public
 */
export interface GetDistributionBundlesResult {
  /**
   * An object that describes a distribution bundle.
   *
   * @public
   */
  bundles?: DistributionBundle[] | undefined;
}

/**
 * @public
 */
export interface GetDistributionLatestCacheResetRequest {
  /**
   * The name of the distribution for which to return the timestamp of the last cache reset.
   *
   * Use the `GetDistributions` action to get a list of distribution names that you can specify.
   *
   * When omitted, the response includes the latest cache reset timestamp of all your distributions.
   *
   * @public
   */
  distributionName?: string | undefined;
}

/**
 * @public
 */
export interface GetDistributionLatestCacheResetResult {
  /**
   * The status of the last cache reset.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The timestamp of the last cache reset (`1479734909.17`) in Unix time format.
   *
   * @public
   */
  createTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetDistributionMetricDataRequest {
  /**
   * The name of the distribution for which to get metric data.
   *
   * Use the `GetDistributions` action to get a list of distribution names that you can specify.
   *
   * @public
   */
  distributionName: string | undefined;

  /**
   * The metric for which you want to return information.
   *
   * Valid distribution metric names are listed below, along with the most useful `statistics` to include in your request, and the published `unit` value.
   *
   * - **`Requests`** - The total number of viewer requests received by your Lightsail distribution, for all HTTP methods, and for both HTTP and HTTPS requests.
   *
   *   `Statistics`: The most useful statistic is `Sum`.
   *
   *   `Unit`: The published unit is `None`.
   * - **`BytesDownloaded`** - The number of bytes downloaded by viewers for GET, HEAD, and OPTIONS requests.
   *
   *   `Statistics`: The most useful statistic is `Sum`.
   *
   *   `Unit`: The published unit is `None`.
   * - **`BytesUploaded`** - The number of bytes uploaded to your origin by your Lightsail distribution, using POST and PUT requests.
   *
   *   `Statistics`: The most useful statistic is `Sum`.
   *
   *   `Unit`: The published unit is `None`.
   * - **`TotalErrorRate`** - The percentage of all viewer requests for which the response's HTTP status code was 4xx or 5xx.
   *
   *   `Statistics`: The most useful statistic is `Average`.
   *
   *   `Unit`: The published unit is `Percent`.
   * - **`4xxErrorRate`** - The percentage of all viewer requests for which the response's HTTP status cod was 4xx. In these cases, the client or client viewer may have made an error. For example, a status code of 404 (Not Found) means that the client requested an object that could not be found.
   *
   *   `Statistics`: The most useful statistic is `Average`.
   *
   *   `Unit`: The published unit is `Percent`.
   * - **`5xxErrorRate`** - The percentage of all viewer requests for which the response's HTTP status code was 5xx. In these cases, the origin server did not satisfy the requests. For example, a status code of 503 (Service Unavailable) means that the origin server is currently unavailable.
   *
   *   `Statistics`: The most useful statistic is `Average`.
   *
   *   `Unit`: The published unit is `Percent`.
   * - **`WafAllowedRequests`** - The number of viewer requests that Web Application Firewall (WAF) allowed. This metric is available only when WAF is enabled for the distribution.
   *
   *   `Statistics`: The most useful statistic is `Sum`.
   *
   *   `Unit`: The published unit is `None`.
   * - **`WafBlockedRequests`** - The number of viewer requests that WAF blocked. This metric is available only when WAF is enabled for the distribution.
   *
   *   `Statistics`: The most useful statistic is `Sum`.
   *
   *   `Unit`: The published unit is `None`.
   *
   * @public
   */
  metricName: DistributionMetricName | undefined;

  /**
   * The start of the time interval for which to get metric data.
   *
   * Constraints:
   *
   * - Specified in Coordinated Universal Time (UTC).
   * - Specified in the Unix time format.
   *
   *   For example, if you wish to use a start time of October 1, 2018, at 8 PM UTC, specify `1538424000` as the start time.
   *
   * You can convert a human-friendly time to Unix time format using a converter like [Epoch converter](https://www.epochconverter.com/).
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The end of the time interval for which to get metric data.
   *
   * Constraints:
   *
   * - Specified in Coordinated Universal Time (UTC).
   * - Specified in the Unix time format.
   *
   *   For example, if you wish to use an end time of October 1, 2018, at 9 PM UTC, specify `1538427600` as the end time.
   *
   * You can convert a human-friendly time to Unix time format using a converter like [Epoch converter](https://www.epochconverter.com/).
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * The granularity, in seconds, for the metric data points that will be returned.
   *
   * @public
   */
  period: number | undefined;

  /**
   * The unit for the metric data request.
   *
   * Valid units depend on the metric data being requested. For the valid units with each available metric, see the `metricName` parameter.
   *
   * @public
   */
  unit: MetricUnit | undefined;

  /**
   * The statistic for the metric.
   *
   * The following statistics are available:
   *
   * - `Minimum` - The lowest value observed during the specified period. Use this value to determine low volumes of activity for your application.
   * - `Maximum` - The highest value observed during the specified period. Use this value to determine high volumes of activity for your application.
   * - `Sum` - All values submitted for the matching metric added together. You can use this statistic to determine the total volume of a metric.
   * - `Average` - The value of Sum / SampleCount during the specified period. By comparing this statistic with the Minimum and Maximum values, you can determine the full scope of a metric and how close the average use is to the Minimum and Maximum values. This comparison helps you to know when to increase or decrease your resources.
   * - `SampleCount` - The count, or number, of data points used for the statistical calculation.
   *
   * @public
   */
  statistics: MetricStatistic[] | undefined;
}

/**
 * @public
 */
export interface GetDistributionMetricDataResult {
  /**
   * The name of the metric returned.
   *
   * @public
   */
  metricName?: DistributionMetricName | undefined;

  /**
   * An array of objects that describe the metric data returned.
   *
   * @public
   */
  metricData?: MetricDatapoint[] | undefined;
}

/**
 * @public
 */
export interface GetDistributionsRequest {
  /**
   * The name of the distribution for which to return information.
   *
   * When omitted, the response includes all of your distributions in the Amazon Web Services Region where the request is made.
   *
   * @public
   */
  distributionName?: string | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetDistributions` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDistributionsResult {
  /**
   * An array of objects that describe your distributions.
   *
   * @public
   */
  distributions?: LightsailDistribution[] | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetDistributions` request and specify the next page token using the `pageToken` parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDomainRequest {
  /**
   * The domain name for which your want to return information about.
   *
   * @public
   */
  domainName: string | undefined;
}

/**
 * @public
 */
export interface GetDomainResult {
  /**
   * An array of key-value pairs containing information about your get domain request.
   *
   * @public
   */
  domain?: Domain | undefined;
}

/**
 * @public
 */
export interface GetDomainsRequest {
  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetDomains` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDomainsResult {
  /**
   * An array of key-value pairs containing information about each of the domain entries in the user's account.
   *
   * @public
   */
  domains?: Domain[] | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetDomains` request and specify the next page token using the `pageToken` parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetExportSnapshotRecordsRequest {
  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetExportSnapshotRecords` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetExportSnapshotRecordsResult {
  /**
   * A list of objects describing the export snapshot records.
   *
   * @public
   */
  exportSnapshotRecords?: ExportSnapshotRecord[] | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetExportSnapshotRecords` request and specify the next page token using the `pageToken` parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInstanceRequest {
  /**
   * The name of the instance.
   *
   * @public
   */
  instanceName: string | undefined;

  /**
   * Specifies whether to include the instance health status checks in the response of your request.
   *
   * When set to `true`, the response includes the `instanceStatus` and `systemStatus` of the instance. When omitted or set to `false`, the response doesn't include them.
   *
   * @public
   */
  includeHealthStatus?: boolean | undefined;
}

/**
 * Describes the hardware for the instance.
 *
 * @public
 */
export interface InstanceHardware {
  /**
   * The number of vCPUs the instance has.
   *
   * @public
   */
  cpuCount?: number | undefined;

  /**
   * The disks attached to the instance.
   *
   * @public
   */
  disks?: Disk[] | undefined;

  /**
   * The amount of RAM in GB on the instance (`1.0`).
   *
   * @public
   */
  ramSizeInGb?: number | undefined;
}

/**
 * Describes the instance status.
 *
 * @public
 */
export interface InstanceHealthStatusDetail {
  /**
   * The type of instance status. The only possible value is `reachability`.
   *
   * @public
   */
  name?: InstanceHealthStatusDetailName | undefined;

  /**
   * The status.
   *
   * The following values are possible:
   *
   * - `passed` - The check passed.
   * - `failed` - The check failed.
   * - `initializing` - The check is in progress.
   * - `insufficient-data` - There isn't enough data yet to determine the result.
   *
   * @public
   */
  status?: InstanceHealthStatusDetailValue | undefined;

  /**
   * The time when a status check failed. For an instance that was launched and impaired, this is the time when the instance was launched.
   *
   * @public
   */
  impairedSince?: Date | undefined;
}

/**
 * Describes the status of an Amazon Lightsail instance.
 *
 * @public
 */
export interface InstanceHealthStatus {
  /**
   * The status.
   *
   * The following values are possible:
   *
   * - `ok` - All checks are passing. The instance is reachable.
   * - `impaired` - One or more checks have failed.
   * - `initializing` - The instance was recently started, and the checks are in progress.
   * - `insufficient-data` - There isn't enough data yet to determine the result.
   * - `not-applicable` - The check doesn't apply because the instance isn't running.
   *
   * @public
   */
  status?: InstanceHealthStatusValue | undefined;

  /**
   * The system instance health or instance health.
   *
   * @public
   */
  details?: InstanceHealthStatusDetail[] | undefined;
}

/**
 * The metadata options for the instance.
 *
 * @public
 */
export interface InstanceMetadataOptions {
  /**
   * The state of the metadata option changes.
   *
   * The following states are possible:
   *
   * - `pending` - The metadata options are being updated. The instance is not yet ready to process metadata traffic with the new selection.
   * - `applied` - The metadata options have been successfully applied to the instance.
   *
   * @public
   */
  state?: InstanceMetadataState | undefined;

  /**
   * The state of token usage for your instance metadata requests.
   *
   * If the state is `optional`, you can choose whether to retrieve instance metadata with a signed token header on your request. If you retrieve the IAM role credentials without a token, the version 1.0 role credentials are returned. If you retrieve the IAM role credentials by using a valid signed token, the version 2.0 role credentials are returned.
   *
   * If the state is `required`, you must send a signed token header with all instance metadata retrieval requests. In this state, retrieving the IAM role credential always returns the version 2.0 credentials. The version 1.0 credentials are not available.
   *
   * > **Important:** Not all instance blueprints in Lightsail support version 2.0 credentials. Use the `MetadataNoToken` instance metric to track the number of calls to the instance metadata service that are using version 1.0 credentials. For more information, see [Viewing instance metrics in Amazon Lightsail](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-viewing-instance-health-metrics) in the *Amazon Lightsail Developer Guide*.
   *
   * @public
   */
  httpTokens?: HttpTokens | undefined;

  /**
   * Indicates whether the HTTP metadata endpoint on your instances is enabled or disabled.
   *
   * If the value is `disabled`, you cannot access your instance metadata.
   *
   * @public
   */
  httpEndpoint?: HttpEndpoint | undefined;

  /**
   * The desired HTTP PUT response hop limit for instance metadata requests. A larger number means that the instance metadata requests can travel farther.
   *
   * @public
   */
  httpPutResponseHopLimit?: number | undefined;

  /**
   * Indicates whether the IPv6 endpoint for the instance metadata service is enabled or disabled.
   *
   * @public
   */
  httpProtocolIpv6?: HttpProtocolIpv6 | undefined;
}

/**
 * Describes the monthly data transfer in and out of your virtual private server (or *instance*).
 *
 * @public
 */
export interface MonthlyTransfer {
  /**
   * The amount allocated per month (in GB).
   *
   * @public
   */
  gbPerMonthAllocated?: number | undefined;
}

/**
 * Describes information about ports for an Amazon Lightsail instance.
 *
 * @public
 */
export interface InstancePortInfo {
  /**
   * The first port in a range of open ports on an instance.
   *
   * Allowed ports:
   *
   * - TCP and UDP - `0` to `65535`
   * - ICMP - The ICMP type for IPv4 addresses. For example, specify `8` as the `fromPort` (ICMP type), and `-1` as the `toPort` (ICMP code), to enable ICMP Ping. For more information, see [Control Messages](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages) on *Wikipedia*.
   * - ICMPv6 - The ICMP type for IPv6 addresses. For example, specify `128` as the `fromPort` (ICMPv6 type), and `0` as `toPort` (ICMPv6 code). For more information, see [Internet Control Message Protocol for IPv6](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol_for_IPv6).
   *
   * @public
   */
  fromPort?: number | undefined;

  /**
   * The last port in a range of open ports on an instance.
   *
   * Allowed ports:
   *
   * - TCP and UDP - `0` to `65535`
   * - ICMP - The ICMP code for IPv4 addresses. For example, specify `8` as the `fromPort` (ICMP type), and `-1` as the `toPort` (ICMP code), to enable ICMP Ping. For more information, see [Control Messages](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages) on *Wikipedia*.
   * - ICMPv6 - The ICMP code for IPv6 addresses. For example, specify `128` as the `fromPort` (ICMPv6 type), and `0` as `toPort` (ICMPv6 code). For more information, see [Internet Control Message Protocol for IPv6](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol_for_IPv6).
   *
   * @public
   */
  toPort?: number | undefined;

  /**
   * The IP protocol name.
   *
   * The name can be one of the following:
   *
   * - `tcp` - Transmission Control Protocol (TCP) provides reliable, ordered, and error-checked delivery of streamed data between applications running on hosts communicating by an IP network. If you have an application that doesn't require reliable data stream service, use UDP instead.
   * - `all` - All transport layer protocol types. For more general information, see [Transport layer](https://en.wikipedia.org/wiki/Transport_layer) on *Wikipedia*.
   * - `udp` - With User Datagram Protocol (UDP), computer applications can send messages (or datagrams) to other hosts on an Internet Protocol (IP) network. Prior communications are not required to set up transmission channels or data paths. Applications that don't require reliable data stream service can use UDP, which provides a connectionless datagram service that emphasizes reduced latency over reliability. If you do require reliable data stream service, use TCP instead.
   * - `icmp` - Internet Control Message Protocol (ICMP) is used to send error messages and operational information indicating success or failure when communicating with an instance. For example, an error is indicated when an instance could not be reached. When you specify `icmp` as the `protocol`, you must specify the ICMP type using the `fromPort` parameter, and ICMP code using the `toPort` parameter.
   * - `icmp6` - Internet Control Message Protocol (ICMP) for IPv6. When you specify `icmp6` as the `protocol`, you must specify the ICMP type using the `fromPort` parameter, and ICMP code using the `toPort` parameter.
   *
   * @public
   */
  protocol?: NetworkProtocol | undefined;

  /**
   * The location from which access is allowed. For example, `Anywhere (0.0.0.0/0)`, or `Custom` if a specific IP address or range of IP addresses is allowed.
   *
   * @public
   */
  accessFrom?: string | undefined;

  /**
   * The type of access (`Public` or `Private`).
   *
   * @public
   */
  accessType?: PortAccessType | undefined;

  /**
   * The common name of the port information.
   *
   * @public
   */
  commonName?: string | undefined;

  /**
   * The access direction (`inbound` or `outbound`).
   *
   * > **Note:** Lightsail currently supports only `inbound` access direction.
   *
   * @public
   */
  accessDirection?: AccessDirection | undefined;

  /**
   * The IPv4 address, or range of IPv4 addresses (in CIDR notation) that are allowed to connect to an instance through the ports, and the protocol.
   *
   * > **Note:** The `ipv6Cidrs` parameter lists the IPv6 addresses that are allowed to connect to an instance.
   *
   * For more information about CIDR block notation, see [Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation) on *Wikipedia*.
   *
   * @public
   */
  cidrs?: string[] | undefined;

  /**
   * The IPv6 address, or range of IPv6 addresses (in CIDR notation) that are allowed to connect to an instance through the ports, and the protocol. Only devices with an IPv6 address can connect to an instance through IPv6; otherwise, IPv4 should be used.
   *
   * > **Note:** The `cidrs` parameter lists the IPv4 addresses that are allowed to connect to an instance.
   *
   * For more information about CIDR block notation, see [Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation) on *Wikipedia*.
   *
   * @public
   */
  ipv6Cidrs?: string[] | undefined;

  /**
   * An alias that defines access for a preconfigured range of IP addresses.
   *
   * The only alias currently supported is `lightsail-connect`, which allows IP addresses of the browser-based RDP/SSH client in the Lightsail console to connect to your instance.
   *
   * @public
   */
  cidrListAliases?: string[] | undefined;
}

/**
 * Describes monthly data transfer rates and port information for an instance.
 *
 * @public
 */
export interface InstanceNetworking {
  /**
   * The amount of data in GB allocated for monthly data transfers.
   *
   * @public
   */
  monthlyTransfer?: MonthlyTransfer | undefined;

  /**
   * An array of key-value pairs containing information about the ports on the instance.
   *
   * @public
   */
  ports?: InstancePortInfo[] | undefined;
}

/**
 * Describes the virtual private server (or *instance*) status.
 *
 * @public
 */
export interface InstanceState {
  /**
   * The status code for the instance.
   *
   * @public
   */
  code?: number | undefined;

  /**
   * The state of the instance (`running` or `pending`).
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Describes an instance (a virtual private server).
 *
 * @public
 */
export interface Instance {
  /**
   * The name the user gave the instance (`Amazon_Linux_2023-1`).
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the instance (`arn:aws:lightsail:us-east-2:123456789101:Instance/244ad76f-8aad-4741-809f-12345EXAMPLE`).
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.
   *
   * @public
   */
  supportCode?: string | undefined;

  /**
   * The timestamp when the instance was created (`1479734909.17`) in Unix time format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The region name and Availability Zone where the instance is located.
   *
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * The type of resource (usually `Instance`).
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The tag keys and optional values for the resource. For more information about tags in Lightsail, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-tags).
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The blueprint ID (`amazon_linux_2023`).
   *
   * @public
   */
  blueprintId?: string | undefined;

  /**
   * The friendly name of the blueprint (`Amazon Linux 2023`).
   *
   * @public
   */
  blueprintName?: string | undefined;

  /**
   * The bundle for the instance (`micro_x_x`).
   *
   * @public
   */
  bundleId?: string | undefined;

  /**
   * An array of objects representing the add-ons enabled on the instance.
   *
   * @public
   */
  addOns?: AddOn[] | undefined;

  /**
   * A Boolean value indicating whether this instance has a static IP assigned to it.
   *
   * @public
   */
  isStaticIp?: boolean | undefined;

  /**
   * The private IP address of the instance.
   *
   * @public
   */
  privateIpAddress?: string | undefined;

  /**
   * The public IP address of the instance.
   *
   * @public
   */
  publicIpAddress?: string | undefined;

  /**
   * The IPv6 addresses of the instance.
   *
   * @public
   */
  ipv6Addresses?: string[] | undefined;

  /**
   * The IP address type of the instance.
   *
   * The possible values are `ipv4` for IPv4 only, `ipv6` for IPv6 only, and `dualstack` for IPv4 and IPv6.
   *
   * @public
   */
  ipAddressType?: IpAddressType | undefined;

  /**
   * The size of the vCPU and the amount of RAM for the instance.
   *
   * @public
   */
  hardware?: InstanceHardware | undefined;

  /**
   * Information about the public ports and monthly data transfer rates for the instance.
   *
   * @public
   */
  networking?: InstanceNetworking | undefined;

  /**
   * The status code and the state (`running`) for the instance.
   *
   * @public
   */
  state?: InstanceState | undefined;

  /**
   * The user name for connecting to the instance (`ec2-user`).
   *
   * @public
   */
  username?: string | undefined;

  /**
   * The name of the SSH key being used to connect to the instance (`LightsailDefaultKeyPair`).
   *
   * @public
   */
  sshKeyName?: string | undefined;

  /**
   * The metadata options for the Amazon Lightsail instance.
   *
   * @public
   */
  metadataOptions?: InstanceMetadataOptions | undefined;

  /**
   * Reports impaired functionality that stems from issues internal to the instance, such as impaired reachability.
   *
   * This value is returned only when you set `includeHealthStatus` to `true` in your request.
   *
   * @public
   */
  instanceStatus?: InstanceHealthStatus | undefined;

  /**
   * Reports impaired functionality that stems from issues related to the systems that support an instance, such as hardware failures and network connectivity problems.
   *
   * This value is returned only when you set `includeHealthStatus` to `true` in your request.
   *
   * @public
   */
  systemStatus?: InstanceHealthStatus | undefined;
}

/**
 * @public
 */
export interface GetInstanceResult {
  /**
   * An array of key-value pairs containing information about the specified instance.
   *
   * @public
   */
  instance?: Instance | undefined;
}

/**
 * @public
 */
export interface GetInstanceAccessDetailsRequest {
  /**
   * The name of the instance to access.
   *
   * @public
   */
  instanceName: string | undefined;

  /**
   * The protocol to use to connect to your instance. Defaults to `ssh`.
   *
   * @public
   */
  protocol?: InstanceAccessProtocol | undefined;
}

/**
 * Describes the public SSH host keys or the RDP certificate.
 *
 * @public
 */
export interface HostKeyAttributes {
  /**
   * The SSH host key algorithm or the RDP certificate format.
   *
   * For SSH host keys, the algorithm may be `ssh-rsa`, `ecdsa-sha2-nistp256`, `ssh-ed25519`, etc. For RDP certificates, the algorithm is always `x509-cert`.
   *
   * @public
   */
  algorithm?: string | undefined;

  /**
   * The public SSH host key or the RDP certificate.
   *
   * @public
   */
  publicKey?: string | undefined;

  /**
   * The time that the SSH host key or RDP certificate was recorded by Lightsail.
   *
   * @public
   */
  witnessedAt?: Date | undefined;

  /**
   * The SHA-1 fingerprint of the returned SSH host key or RDP certificate.
   *
   * - Example of an SHA-1 SSH fingerprint:
   *
   *   `SHA1:1CHH6FaAaXjtFOsR/t83vf91SR0`
   * - Example of an SHA-1 RDP fingerprint:
   *
   *   `af:34:51:fe:09:f0:e0:da:b8:4e:56:ca:60:c2:10:ff:38:06:db:45`
   *
   * @public
   */
  fingerprintSHA1?: string | undefined;

  /**
   * The SHA-256 fingerprint of the returned SSH host key or RDP certificate.
   *
   * - Example of an SHA-256 SSH fingerprint:
   *
   *   `SHA256:KTsMnRBh1IhD17HpdfsbzeGA4jOijm5tyXsMjKVbB8o`
   * - Example of an SHA-256 RDP fingerprint:
   *
   *   `03:9b:36:9f:4b:de:4e:61:70:fc:7c:c9:78:e7:d2:1a:1c:25:a8:0c:91:f6:7c:e4:d6:a0:85:c8:b4:53:99:68`
   *
   * @public
   */
  fingerprintSHA256?: string | undefined;

  /**
   * The returned RDP certificate is valid after this point in time.
   *
   * This value is listed only for RDP certificates.
   *
   * @public
   */
  notValidBefore?: Date | undefined;

  /**
   * The returned RDP certificate is not valid after this point in time.
   *
   * This value is listed only for RDP certificates.
   *
   * @public
   */
  notValidAfter?: Date | undefined;
}

/**
 * The password data for the Windows Server-based instance, including the ciphertext and the key pair name.
 *
 * @public
 */
export interface PasswordData {
  /**
   * The encrypted password. Ciphertext will be an empty string if access to your new instance is not ready yet. When you create an instance, it can take up to 15 minutes for the instance to be ready.
   *
   * > **Note:**
   * >
   * > If you use the default key pair (`LightsailDefaultKeyPair`), the decrypted password will be available in the password field.
   * >
   * > If you are using a custom key pair, you need to use your own means of decryption.
   * >
   * > If you change the Administrator password on the instance, Lightsail will continue to return the original ciphertext value. When accessing the instance using RDP, you need to manually enter the Administrator password after changing it from the default.
   *
   * @public
   */
  ciphertext?: string | undefined;

  /**
   * The name of the key pair that you used when creating your instance. If no key pair name was specified when creating the instance, Lightsail uses the default key pair (`LightsailDefaultKeyPair`).
   *
   * If you are using a custom key pair, you need to use your own means of decrypting your password using the `ciphertext`. Lightsail creates the ciphertext by encrypting your password with the public key part of this key pair.
   *
   * @public
   */
  keyPairName?: string | undefined;
}

/**
 * The parameters for gaining temporary access to one of your Amazon Lightsail instances.
 *
 * @public
 */
export interface InstanceAccessDetails {
  /**
   * For SSH access, the public key to use when accessing your instance For OpenSSH clients (command line SSH), you should save this value to `tempkey-cert.pub`.
   *
   * @public
   */
  certKey?: string | undefined;

  /**
   * For SSH access, the date on which the temporary keys expire.
   *
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * The public IP address of the Amazon Lightsail instance.
   *
   * @public
   */
  ipAddress?: string | undefined;

  /**
   * The IPv6 address of the Amazon Lightsail instance.
   *
   * @public
   */
  ipv6Addresses?: string[] | undefined;

  /**
   * For RDP access, the password for your Amazon Lightsail instance. Password will be an empty string if the password for your new instance is not ready yet. When you create an instance, it can take up to 15 minutes for the instance to be ready.
   *
   * > **Note:**
   * >
   * > If you create an instance using any key pair other than the default (`LightsailDefaultKeyPair`), `password` will always be an empty string.
   * >
   * > If you change the Administrator password on the instance, Lightsail will continue to return the original password value. When accessing the instance using RDP, you need to manually enter the Administrator password after changing it from the default.
   *
   * @public
   */
  password?: string | undefined;

  /**
   * For a Windows Server-based instance, an object with the data you can use to retrieve your password. This is only needed if `password` is empty and the instance is not new (and therefore the password is not ready yet). When you create an instance, it can take up to 15 minutes for the instance to be ready.
   *
   * @public
   */
  passwordData?: PasswordData | undefined;

  /**
   * For SSH access, the temporary private key. For OpenSSH clients (command line SSH), you should save this value to `tempkey`).
   *
   * @public
   */
  privateKey?: string | undefined;

  /**
   * The protocol for these Amazon Lightsail instance access details.
   *
   * @public
   */
  protocol?: InstanceAccessProtocol | undefined;

  /**
   * The name of this Amazon Lightsail instance.
   *
   * @public
   */
  instanceName?: string | undefined;

  /**
   * The user name to use when logging in to the Amazon Lightsail instance.
   *
   * @public
   */
  username?: string | undefined;

  /**
   * Describes the public SSH host keys or the RDP certificate.
   *
   * @public
   */
  hostKeys?: HostKeyAttributes[] | undefined;
}

/**
 * @public
 */
export interface GetInstanceAccessDetailsResult {
  /**
   * An array of key-value pairs containing information about a get instance access request.
   *
   * @public
   */
  accessDetails?: InstanceAccessDetails | undefined;
}

/**
 * @public
 */
export interface GetInstanceMetricDataRequest {
  /**
   * The name of the instance for which you want to get metrics data.
   *
   * @public
   */
  instanceName: string | undefined;

  /**
   * The metric for which you want to return information.
   *
   * Valid instance metric names are listed below, along with the most useful `statistics` to include in your request, and the published `unit` value.
   *
   * - **`BurstCapacityPercentage`** - The percentage of CPU performance available for your instance to burst above its baseline. Your instance continuously accrues and consumes burst capacity. Burst capacity stops accruing when your instance's `BurstCapacityPercentage` reaches 100%. For more information, see [Viewing instance burst capacity in Amazon Lightsail](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-viewing-instance-burst-capacity).
   *
   *   `Statistics`: The most useful statistics are `Maximum` and `Average`.
   *
   *   `Unit`: The published unit is `Percent`.
   * - **`BurstCapacityTime`** - The available amount of time for your instance to burst at 100% CPU utilization. Your instance continuously accrues and consumes burst capacity. Burst capacity time stops accruing when your instance's `BurstCapacityPercentage` metric reaches 100%.
   *
   *   Burst capacity time is consumed at the full rate only when your instance operates at 100% CPU utilization. For example, if your instance operates at 50% CPU utilization in the burstable zone for a 5-minute period, then it consumes CPU burst capacity minutes at a 50% rate in that period. Your instance consumed 2 minutes and 30 seconds of CPU burst capacity minutes in the 5-minute period. For more information, see [Viewing instance burst capacity in Amazon Lightsail](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-viewing-instance-burst-capacity).
   *
   *   `Statistics`: The most useful statistics are `Maximum` and `Average`.
   *
   *   `Unit`: The published unit is `Seconds`.
   * - **`CPUUtilization`** - The percentage of allocated compute units that are currently in use on the instance. This metric identifies the processing power to run the applications on the instance. Tools in your operating system can show a lower percentage than Lightsail when the instance is not allocated a full processor core.
   *
   *   `Statistics`: The most useful statistics are `Maximum` and `Average`.
   *
   *   `Unit`: The published unit is `Percent`.
   * - **`NetworkIn`** - The number of bytes received on all network interfaces by the instance. This metric identifies the volume of incoming network traffic to the instance. The number reported is the number of bytes received during the period. Because this metric is reported in 5-minute intervals, divide the reported number by 300 to find Bytes/second.
   *
   *   `Statistics`: The most useful statistic is `Sum`.
   *
   *   `Unit`: The published unit is `Bytes`.
   * - **`NetworkOut`** - The number of bytes sent out on all network interfaces by the instance. This metric identifies the volume of outgoing network traffic from the instance. The number reported is the number of bytes sent during the period. Because this metric is reported in 5-minute intervals, divide the reported number by 300 to find Bytes/second.
   *
   *   `Statistics`: The most useful statistic is `Sum`.
   *
   *   `Unit`: The published unit is `Bytes`.
   * - **`StatusCheckFailed`** - Reports whether the instance passed or failed both the instance status check and the system status check. This metric can be either 0 (passed) or 1 (failed). This metric data is available in 1-minute (60 seconds) granularity.
   *
   *   `Statistics`: The most useful statistic is `Sum`.
   *
   *   `Unit`: The published unit is `Count`.
   * - **`StatusCheckFailed_Instance`** - Reports whether the instance passed or failed the instance status check. This metric can be either 0 (passed) or 1 (failed). This metric data is available in 1-minute (60 seconds) granularity.
   *
   *   `Statistics`: The most useful statistic is `Sum`.
   *
   *   `Unit`: The published unit is `Count`.
   * - **`StatusCheckFailed_System`** - Reports whether the instance passed or failed the system status check. This metric can be either 0 (passed) or 1 (failed). This metric data is available in 1-minute (60 seconds) granularity.
   *
   *   `Statistics`: The most useful statistic is `Sum`.
   *
   *   `Unit`: The published unit is `Count`.
   * - **`MetadataNoToken`** - Reports the number of times that the instance metadata service was successfully accessed without a token. This metric determines if there are any processes accessing instance metadata by using Instance Metadata Service Version 1, which doesn't use a token. If all requests use token-backed sessions, such as Instance Metadata Service Version 2, then the value is 0.
   *
   *   `Statistics`: The most useful statistic is `Sum`.
   *
   *   `Unit`: The published unit is `Count`.
   * - **`DiskReadOps`** - The number of read operations completed on the system disk of the instance during the period. This metric doesn't include activity on additional disks that you attach to the instance.
   *
   *   `Statistics`: The most useful statistic is `Sum`.
   *
   *   `Unit`: The published unit is `Count`.
   * - **`DiskWriteOps`** - The number of write operations completed on the system disk of the instance during the period. This metric doesn't include activity on additional disks that you attach to the instance.
   *
   *   `Statistics`: The most useful statistic is `Sum`.
   *
   *   `Unit`: The published unit is `Count`.
   * - **`DiskReadBytes`** - The number of bytes read from the system disk of the instance during the period. This metric doesn't include activity on additional disks that you attach to the instance.
   *
   *   `Statistics`: The most useful statistic is `Sum`.
   *
   *   `Unit`: The published unit is `Bytes`.
   * - **`DiskWriteBytes`** - The number of bytes written to the system disk of the instance during the period. This metric doesn't include activity on additional disks that you attach to the instance.
   *
   *   `Statistics`: The most useful statistic is `Sum`.
   *
   *   `Unit`: The published unit is `Bytes`.
   * - **`DiskTotalReadTime`** - The total number of seconds spent by all read operations that completed on the system disk of the instance during the period. This metric doesn't include activity on additional disks that you attach to the instance.
   *
   *   `Statistics`: The most useful statistic is `Average`.
   *
   *   `Unit`: The published unit is `Seconds`.
   * - **`DiskTotalWriteTime`** - The total number of seconds spent by all write operations that completed on the system disk of the instance during the period. This metric doesn't include activity on additional disks that you attach to the instance.
   *
   *   `Statistics`: The most useful statistic is `Average`.
   *
   *   `Unit`: The published unit is `Seconds`.
   * - **`DiskQueueLength`** - The number of read and write requests that are waiting to access the system disk of the instance. This metric doesn't include activity on additional disks that you attach to the instance.
   *
   *   `Statistics`: The most useful statistic is `Average`.
   *
   *   `Unit`: The published unit is `Count`.
   *
   * For more information about system disk performance metrics, see [View system disk performance metrics for your Lightsail instance](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-viewing-instance-disk-performance-metrics).
   *
   * @public
   */
  metricName: InstanceMetricName | undefined;

  /**
   * The granularity, in seconds, of the returned data points.
   *
   * The `StatusCheckFailed`, `StatusCheckFailed_Instance`, and `StatusCheckFailed_System` instance metric data is available in 1-minute (60 seconds) granularity. All other instance metric data is available in 5-minute (300 seconds) granularity.
   *
   * @public
   */
  period: number | undefined;

  /**
   * The start time of the time period.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The end time of the time period.
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * The unit for the metric data request. Valid units depend on the metric data being requested. For the valid units to specify with each available metric, see the `metricName` parameter.
   *
   * @public
   */
  unit: MetricUnit | undefined;

  /**
   * The statistic for the metric.
   *
   * The following statistics are available:
   *
   * - `Minimum` - The lowest value observed during the specified period. Use this value to determine low volumes of activity for your application.
   * - `Maximum` - The highest value observed during the specified period. Use this value to determine high volumes of activity for your application.
   * - `Sum` - All values submitted for the matching metric added together. You can use this statistic to determine the total volume of a metric.
   * - `Average` - The value of Sum / SampleCount during the specified period. By comparing this statistic with the Minimum and Maximum values, you can determine the full scope of a metric and how close the average use is to the Minimum and Maximum values. This comparison helps you to know when to increase or decrease your resources.
   * - `SampleCount` - The count, or number, of data points used for the statistical calculation.
   *
   * @public
   */
  statistics: MetricStatistic[] | undefined;
}

/**
 * @public
 */
export interface GetInstanceMetricDataResult {
  /**
   * The name of the metric returned.
   *
   * @public
   */
  metricName?: InstanceMetricName | undefined;

  /**
   * An array of objects that describe the metric data returned.
   *
   * @public
   */
  metricData?: MetricDatapoint[] | undefined;
}

/**
 * @public
 */
export interface GetInstancePortStatesRequest {
  /**
   * The name of the instance for which to return firewall port states.
   *
   * @public
   */
  instanceName: string | undefined;
}

/**
 * Describes open ports on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.
 *
 * @public
 */
export interface InstancePortState {
  /**
   * The first port in a range of open ports on an instance.
   *
   * Allowed ports:
   *
   * - TCP and UDP - `0` to `65535`
   * - ICMP - The ICMP type for IPv4 addresses. For example, specify `8` as the `fromPort` (ICMP type), and `-1` as the `toPort` (ICMP code), to enable ICMP Ping. For more information, see [Control Messages](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages) on *Wikipedia*.
   * - ICMPv6 - The ICMP type for IPv6 addresses. For example, specify `128` as the `fromPort` (ICMPv6 type), and `0` as `toPort` (ICMPv6 code). For more information, see [Internet Control Message Protocol for IPv6](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol_for_IPv6).
   *
   * @public
   */
  fromPort?: number | undefined;

  /**
   * The last port in a range of open ports on an instance.
   *
   * Allowed ports:
   *
   * - TCP and UDP - `0` to `65535`
   * - ICMP - The ICMP code for IPv4 addresses. For example, specify `8` as the `fromPort` (ICMP type), and `-1` as the `toPort` (ICMP code), to enable ICMP Ping. For more information, see [Control Messages](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol#Control_messages) on *Wikipedia*.
   * - ICMPv6 - The ICMP code for IPv6 addresses. For example, specify `128` as the `fromPort` (ICMPv6 type), and `0` as `toPort` (ICMPv6 code). For more information, see [Internet Control Message Protocol for IPv6](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol_for_IPv6).
   *
   * @public
   */
  toPort?: number | undefined;

  /**
   * The IP protocol name.
   *
   * The name can be one of the following:
   *
   * - `tcp` - Transmission Control Protocol (TCP) provides reliable, ordered, and error-checked delivery of streamed data between applications running on hosts communicating by an IP network. If you have an application that doesn't require reliable data stream service, use UDP instead.
   * - `all` - All transport layer protocol types. For more general information, see [Transport layer](https://en.wikipedia.org/wiki/Transport_layer) on *Wikipedia*.
   * - `udp` - With User Datagram Protocol (UDP), computer applications can send messages (or datagrams) to other hosts on an Internet Protocol (IP) network. Prior communications are not required to set up transmission channels or data paths. Applications that don't require reliable data stream service can use UDP, which provides a connectionless datagram service that emphasizes reduced latency over reliability. If you do require reliable data stream service, use TCP instead.
   * - `icmp` - Internet Control Message Protocol (ICMP) is used to send error messages and operational information indicating success or failure when communicating with an instance. For example, an error is indicated when an instance could not be reached. When you specify `icmp` as the `protocol`, you must specify the ICMP type using the `fromPort` parameter, and ICMP code using the `toPort` parameter.
   * - `icmp6` - Internet Control Message Protocol (ICMP) for IPv6. When you specify `icmp6` as the `protocol`, you must specify the ICMP type using the `fromPort` parameter, and ICMP code using the `toPort` parameter.
   *
   * @public
   */
  protocol?: NetworkProtocol | undefined;

  /**
   * Specifies whether the instance port is `open` or `closed`.
   *
   * > **Note:** The port state for Lightsail instances is always `open`.
   *
   * @public
   */
  state?: PortState | undefined;

  /**
   * The IPv4 address, or range of IPv4 addresses (in CIDR notation) that are allowed to connect to an instance through the ports, and the protocol.
   *
   * > **Note:** The `ipv6Cidrs` parameter lists the IPv6 addresses that are allowed to connect to an instance.
   *
   * For more information about CIDR block notation, see [Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation) on *Wikipedia*.
   *
   * @public
   */
  cidrs?: string[] | undefined;

  /**
   * The IPv6 address, or range of IPv6 addresses (in CIDR notation) that are allowed to connect to an instance through the ports, and the protocol. Only devices with an IPv6 address can connect to an instance through IPv6; otherwise, IPv4 should be used.
   *
   * > **Note:** The `cidrs` parameter lists the IPv4 addresses that are allowed to connect to an instance.
   *
   * For more information about CIDR block notation, see [Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation) on *Wikipedia*.
   *
   * @public
   */
  ipv6Cidrs?: string[] | undefined;

  /**
   * An alias that defines access for a preconfigured range of IP addresses.
   *
   * The only alias currently supported is `lightsail-connect`, which allows IP addresses of the browser-based RDP/SSH client in the Lightsail console to connect to your instance.
   *
   * @public
   */
  cidrListAliases?: string[] | undefined;
}

/**
 * @public
 */
export interface GetInstancePortStatesResult {
  /**
   * An array of objects that describe the firewall port states for the specified instance.
   *
   * @public
   */
  portStates?: InstancePortState[] | undefined;
}

/**
 * @public
 */
export interface GetInstancesRequest {
  /**
   * The token to advance to the next page of results from your request.
   *
   * To get a page token, perform an initial `GetInstances` request. If your results are paginated, the response will return a next page token that you can specify as the page token in a subsequent request.
   *
   * @public
   */
  pageToken?: string | undefined;

  /**
   * Specifies whether to include the instance health status checks of each instance in the response of your request.
   *
   * When set to `true`, the response includes the `instanceStatus` and `systemStatus` of each instance. When omitted or set to `false`, the response doesn't include them.
   *
   * @public
   */
  includeHealthStatus?: boolean | undefined;
}

/**
 * @public
 */
export interface GetInstancesResult {
  /**
   * An array of key-value pairs containing information about your instances.
   *
   * @public
   */
  instances?: Instance[] | undefined;

  /**
   * The token to advance to the next page of results from your request.
   *
   * A next page token is not returned if there are no more results to display.
   *
   * To get the next page of results, perform another `GetInstances` request and specify the next page token using the `pageToken` parameter.
   *
   * @public
   */
  nextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInstanceSnapshotRequest {
  /**
   * The name of the snapshot for which you are requesting information.
   *
   * @public
   */
  instanceSnapshotName: string | undefined;
}

/**
 * Describes an instance snapshot.
 *
 * @public
 */
export interface InstanceSnapshot {
  /**
   * The name of the snapshot.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the snapshot (`arn:aws:lightsail:us-east-2:123456789101:InstanceSnapshot/d23b5706-3322-4d83-81e5-12345EXAMPLE`).
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.
   *
   * @public
   */
  supportCode?: string | undefined;

  /**
   * The timestamp when the snapshot was created (`1479907467.024`).
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The region name and Availability Zone where you created the snapshot.
   *
   * @public
   */
  location?: ResourceLocation | undefined;

  /**
   * The type of resource (usually `InstanceSnapshot`).
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The tag keys and optional values for the resource. For more information about tags in Lightsail, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-tags).
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The state the snapshot is in.
   *
   * @public
   */
  state?: InstanceSnapshotState | undefined;

  /**
   * The progress of the snapshot.
   *
   * > **Note:** This is populated only for disk snapshots, and is `null` for instance snapshots.
   *
   * @public
   */
  progress?: string | undefined;

  /**
   * An array of disk objects containing information about all block storage disks.
   *
   * @public
   */
  fromAttachedDisks?: Disk[] | undefined;

  /**
   * The instance from which the snapshot was created.
   *
   * @public
   */
  fromInstanceName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the instance from which the snapshot was created (`arn:aws:lightsail:us-east-2:123456789101:Instance/64b8404c-ccb1-430b-8daf-12345EXAMPLE`).
   *
   * @public
   */
  fromInstanceArn?: string | undefined;

  /**
   * The blueprint ID from which you created the snapshot (`amazon_linux_2023`). A blueprint is a virtual private server (or *instance*) image used to create instances quickly.
   *
   * @public
   */
  fromBlueprintId?: string | undefined;

  /**
   * The bundle ID from which you created the snapshot (`micro_x_x`).
   *
   * @public
   */
  fromBundleId?: string | undefined;

  /**
   * A Boolean value indicating whether the snapshot was created from an automatic snapshot.
   *
   * @public
   */
  isFromAutoSnapshot?: boolean | undefined;

  /**
   * The size in GB of the SSD.
   *
   * @public
   */
  sizeInGb?: number | undefined;
}

/**
 * @public
 */
export interface GetInstanceSnapshotResult {
  /**
   * An array of key-value pairs containing information about the results of your get instance snapshot request.
   *
   * @public
   */
  instanceSnapshot?: InstanceSnapshot | undefined;
}

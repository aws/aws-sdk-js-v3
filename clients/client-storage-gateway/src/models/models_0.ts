// smithy-typescript generated code
import type {
  ActiveDirectoryStatus,
  AutomaticUpdatePolicy,
  AvailabilityMonitorTestStatus,
  CacheReportFilterName,
  CacheReportStatus,
  CaseSensitivity,
  EncryptionType,
  ErrorCode,
  FileShareType,
  GatewayCapacity,
  HostEnvironment,
  ObjectACL,
  PoolStatus,
  RetentionLockType,
  SMBSecurityStrategy,
  TapeStorageClass,
} from "./enums";

/**
 * A key-value pair that helps you manage, filter, and search for your resource. Allowed characters: letters, white space, and numbers, representable in UTF-8, and the following characters: + - = . _ : /.
 *
 * @public
 */
export interface Tag {
  /**
   * Tag key. The key can't start with aws:.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Value of the tag key.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * A JSON object containing one or more of the following fields:
 *
 * - ActivateGatewayInput$ActivationKey
 * - ActivateGatewayInput$GatewayName
 * - ActivateGatewayInput$GatewayRegion
 * - ActivateGatewayInput$GatewayTimezone
 * - ActivateGatewayInput$GatewayType
 * - ActivateGatewayInput$MediumChangerType
 * - ActivateGatewayInput$TapeDriveType
 *
 * @public
 */
export interface ActivateGatewayInput {
  /**
   * Your gateway activation key. You can obtain the activation key by sending an HTTP GET request with redirects enabled to the gateway IP address (port 80). The redirect URL returned in the response provides you the activation key for your gateway in the query string parameter `activationKey`. It may also include other activation-related parameters, however, these are merely defaults -- the arguments you pass to the `ActivateGateway` API call determine the actual configuration of your gateway.
   *
   * For more information, see [Getting activation key](https://docs.aws.amazon.com/storagegateway/latest/userguide/get-activation-key.html) in the *Storage Gateway User Guide*.
   *
   * @public
   */
  ActivationKey: string | undefined;

  /**
   * The name you configured for your gateway.
   *
   * @public
   */
  GatewayName: string | undefined;

  /**
   * A value that indicates the time zone you want to set for the gateway. The time zone is of the format "GMT", "GMT-hr:mm", or "GMT+hr:mm". For example, GMT indicates Greenwich Mean Time without any offset. GMT-4:00 indicates the time is 4 hours behind GMT. GMT+2:00 indicates the time is 2 hours ahead of GMT. The time zone is used, for example, for scheduling snapshots and your gateway's maintenance schedule.
   *
   * @public
   */
  GatewayTimezone: string | undefined;

  /**
   * A value that indicates the Amazon Web Services Region where you want to store your data. The gateway Amazon Web Services Region specified must be the same Amazon Web Services Region as the Amazon Web Services Region in your `Host` header in the request. For more information about available Amazon Web Services Regions and endpoints for Storage Gateway, see [Storage Gateway endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/sg.html) in the *Amazon Web Services General Reference*.
   *
   * Valid Values: See [Storage Gateway endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/sg.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  GatewayRegion: string | undefined;

  /**
   * A value that defines the type of gateway to activate. The type specified is critical to all later functions of the gateway and cannot be changed after activation. The default value is `CACHED`.
   *
   * > **Important:** Amazon FSx File Gateway is no longer available to new customers. Existing customers of FSx File Gateway can continue to use the service normally. For capabilities similar to FSx File Gateway, visit [this blog post](https://aws.amazon.com/blogs/storage/switch-your-file-share-access-from-amazon-fsx-file-gateway-to-amazon-fsx-for-windows-file-server/).
   *
   * Valid Values: `STORED` | `CACHED` | `VTL` | `FILE_S3` | `FILE_FSX_SMB`
   *
   * @public
   */
  GatewayType?: string | undefined;

  /**
   * The value that indicates the type of tape drive to use for tape gateway. This field is optional.
   *
   * Valid Values: `IBM-ULT3580-TD5`
   *
   * @public
   */
  TapeDriveType?: string | undefined;

  /**
   * The value that indicates the type of medium changer to use for tape gateway. This field is optional.
   *
   * Valid Values: `STK-L700` | `AWS-Gateway-VTL` | `IBM-03584L32-0402`
   *
   * @public
   */
  MediumChangerType?: string | undefined;

  /**
   * A list of up to 50 tags that you can assign to the gateway. Each tag is a key-value pair.
   *
   * > **Note:** Valid characters for key and value are letters, spaces, and numbers that can be represented in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256 characters.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Storage Gateway returns the Amazon Resource Name (ARN) of the activated gateway. It is a string made of information such as your account, gateway name, and Amazon Web Services Region. This ARN is used to reference the gateway in other API operations as well as resource-based authorization.
 *
 * > **Note:** For gateways activated prior to September 02, 2015, the gateway ARN contains the gateway name rather than the gateway ID. Changing the name of the gateway has no effect on the gateway ARN.
 *
 * @public
 */
export interface ActivateGatewayOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * Provides additional information about an error that was returned by the service. See the `errorCode` and `errorDetails` members for more information about the error.
 *
 * @public
 */
export interface StorageGatewayError {
  /**
   * Additional information about the error.
   *
   * @public
   */
  errorCode?: ErrorCode | undefined;

  /**
   * Human-readable text that provides detail about the error that occurred.
   *
   * @public
   */
  errorDetails?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface AddCacheInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * An array of strings that identify disks that are to be configured as working storage. Each string has a minimum length of 1 and maximum length of 300. You can get the disk IDs from the ListLocalDisks API.
   *
   * @public
   */
  DiskIds: string[] | undefined;
}

/**
 * @public
 */
export interface AddCacheOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * AddTagsToResourceInput
 *
 * @public
 */
export interface AddTagsToResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource you want to add tags to.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The key-value pair that represents the tag you want to add to the resource. The value can be an empty string.
   *
   * > **Note:** Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * AddTagsToResourceOutput
 *
 * @public
 */
export interface AddTagsToResourceOutput {
  /**
   * The Amazon Resource Name (ARN) of the resource you want to add tags to.
   *
   * @public
   */
  ResourceARN?: string | undefined;
}

/**
 * @public
 */
export interface AddUploadBufferInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * An array of strings that identify disks that are to be configured as working storage. Each string has a minimum length of 1 and maximum length of 300. You can get the disk IDs from the ListLocalDisks API.
   *
   * @public
   */
  DiskIds: string[] | undefined;
}

/**
 * @public
 */
export interface AddUploadBufferOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * A JSON object containing one or more of the following fields:
 *
 * - AddWorkingStorageInput$DiskIds
 *
 * @public
 */
export interface AddWorkingStorageInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * An array of strings that identify disks that are to be configured as working storage. Each string has a minimum length of 1 and maximum length of 300. You can get the disk IDs from the ListLocalDisks API.
   *
   * @public
   */
  DiskIds: string[] | undefined;
}

/**
 * A JSON object containing the Amazon Resource Name (ARN) of the gateway for which working storage was configured.
 *
 * @public
 */
export interface AddWorkingStorageOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * @public
 */
export interface AssignTapePoolInput {
  /**
   * The unique Amazon Resource Name (ARN) of the virtual tape that you want to add to the tape pool.
   *
   * @public
   */
  TapeARN: string | undefined;

  /**
   * The ID of the pool that you want to add your tape to for archiving. The tape in this pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.
   *
   * @public
   */
  PoolId: string | undefined;

  /**
   * Set permissions to bypass governance retention. If the lock type of the archived tape is `Governance`, the tape's archived age is not older than `RetentionLockInDays`, and the user does not already have `BypassGovernanceRetention`, setting this to TRUE enables the user to bypass the retention lock. This parameter is set to true by default for calls from the console.
   *
   * Valid values: `TRUE` | `FALSE`
   *
   * @public
   */
  BypassGovernanceRetention?: boolean | undefined;
}

/**
 * @public
 */
export interface AssignTapePoolOutput {
  /**
   * The unique Amazon Resource Names (ARN) of the virtual tape that was added to the tape pool.
   *
   * @public
   */
  TapeARN?: string | undefined;
}

/**
 * The refresh cache information for the file share or FSx file systems.
 *
 * @public
 */
export interface CacheAttributes {
  /**
   * Refreshes a file share's cache by using Time To Live (TTL). TTL is the length of time since the last refresh after which access to the directory would cause the file gateway to first refresh that directory's contents from the Amazon S3 bucket or Amazon FSx file system. The TTL duration is in seconds.
   *
   * Valid Values:0, 300 to 2,592,000 seconds (5 minutes to 30 days)
   *
   * @public
   */
  CacheStaleTimeoutInSeconds?: number | undefined;
}

/**
 * Specifies network configuration information for the gateway associated with the Amazon FSx file system.
 *
 * @public
 */
export interface EndpointNetworkConfiguration {
  /**
   * A list of gateway IP addresses on which the associated Amazon FSx file system is available.
   *
   * > **Note:** If multiple file systems are associated with this gateway, this field is required.
   *
   * @public
   */
  IpAddresses?: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateFileSystemInput {
  /**
   * The user name of the user credential that has permission to access the root share D$ of the Amazon FSx file system. The user account must belong to the Amazon FSx delegated admin user group.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The password of the user credential.
   *
   * @public
   */
  Password: string | undefined;

  /**
   * A unique string value that you supply that is used by the FSx File Gateway to ensure idempotent file system association creation.
   *
   * @public
   */
  ClientToken: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon FSx file system to associate with the FSx File Gateway.
   *
   * @public
   */
  LocationARN: string | undefined;

  /**
   * A list of up to 50 tags that can be assigned to the file system association. Each tag is a key-value pair.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the storage used for the audit logs.
   *
   * @public
   */
  AuditDestinationARN?: string | undefined;

  /**
   * The refresh cache information for the file share or FSx file systems.
   *
   * @public
   */
  CacheAttributes?: CacheAttributes | undefined;

  /**
   * Specifies the network configuration information for the gateway associated with the Amazon FSx file system.
   *
   * > **Note:** If multiple file systems are associated with this gateway, this parameter's `IpAddresses` field is required.
   *
   * @public
   */
  EndpointNetworkConfiguration?: EndpointNetworkConfiguration | undefined;
}

/**
 * @public
 */
export interface AssociateFileSystemOutput {
  /**
   * The ARN of the newly created file system association.
   *
   * @public
   */
  FileSystemAssociationARN?: string | undefined;
}

/**
 * AttachVolumeInput
 *
 * @public
 */
export interface AttachVolumeInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway that you want to attach the volume to.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. For example, specifying `TargetName` as *myvolume* results in the target ARN of `arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume`. The target name must be unique across all volumes on a gateway.
   *
   * If you don't specify a value, Storage Gateway uses the value that was previously used for this volume as the new target name.
   *
   * @public
   */
  TargetName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the volume to attach to the specified gateway.
   *
   * @public
   */
  VolumeARN: string | undefined;

  /**
   * The network interface of the gateway on which to expose the iSCSI target. Accepts IPv4 and IPv6 addresses. Use DescribeGatewayInformation to get a list of the network interfaces available on a gateway.
   *
   * Valid Values: A valid IP address.
   *
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * The unique device ID or other distinguishing data that identifies the local disk used to create the volume. This value is only required when you are attaching a stored volume.
   *
   * @public
   */
  DiskId?: string | undefined;
}

/**
 * AttachVolumeOutput
 *
 * @public
 */
export interface AttachVolumeOutput {
  /**
   * The Amazon Resource Name (ARN) of the volume that was attached to the gateway.
   *
   * @public
   */
  VolumeARN?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name for the initiator that was used to connect to the target.
   *
   * @public
   */
  TargetARN?: string | undefined;
}

/**
 * An automatic tape creation policy consists of automatic tape creation rules where each rule defines when and how to create new tapes. For more information about automatic tape creation, see [Creating Tapes Automatically](https://docs.aws.amazon.com/storagegateway/latest/userguide/GettingStartedCreateTapes.html#CreateTapesAutomatically).
 *
 * @public
 */
export interface AutomaticTapeCreationRule {
  /**
   * A prefix that you append to the barcode of the virtual tape that you are creating. This prefix makes the barcode unique.
   *
   * > **Note:** The prefix must be 1-4 characters in length and must be one of the uppercase letters from A to Z.
   *
   * @public
   */
  TapeBarcodePrefix: string | undefined;

  /**
   * The ID of the pool that you want to add your tape to for archiving. The tape in this pool is archived in the Amazon S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.
   *
   * @public
   */
  PoolId: string | undefined;

  /**
   * The size, in bytes, of the virtual tape capacity.
   *
   * @public
   */
  TapeSizeInBytes: number | undefined;

  /**
   * The minimum number of available virtual tapes that the gateway maintains at all times. If the number of tapes on the gateway goes below this value, the gateway creates as many new tapes as are needed to have `MinimumNumTapes` on the gateway. For more information about automatic tape creation, see [Creating Tapes Automatically](https://docs.aws.amazon.com/storagegateway/latest/userguide/GettingStartedCreateTapes.html#CreateTapesAutomatically).
   *
   * @public
   */
  MinimumNumTapes: number | undefined;

  /**
   * Set to `true` to indicate that tapes are to be archived as write-once-read-many (WORM). Set to `false` when WORM is not enabled for tapes.
   *
   * @public
   */
  Worm?: boolean | undefined;
}

/**
 * Information about the gateway's automatic tape creation policies, including the automatic tape creation rules and the gateway that is using the policies.
 *
 * @public
 */
export interface AutomaticTapeCreationPolicyInfo {
  /**
   * An automatic tape creation policy consists of a list of automatic tape creation rules. This returns the rules that determine when and how to automatically create new tapes.
   *
   * @public
   */
  AutomaticTapeCreationRules?: AutomaticTapeCreationRule[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * Describes a bandwidth rate limit interval for a gateway. A bandwidth rate limit schedule consists of one or more bandwidth rate limit intervals. A bandwidth rate limit interval defines a period of time on one or more days of the week, during which bandwidth rate limits are specified for uploading, downloading, or both.
 *
 * > **Note:** FSx File Gateway does not support this feature.
 *
 * @public
 */
export interface BandwidthRateLimitInterval {
  /**
   * The hour of the day to start the bandwidth rate limit interval.
   *
   * @public
   */
  StartHourOfDay: number | undefined;

  /**
   * The minute of the hour to start the bandwidth rate limit interval. The interval begins at the start of that minute. To begin an interval exactly at the start of the hour, use the value `0`.
   *
   * @public
   */
  StartMinuteOfHour: number | undefined;

  /**
   * The hour of the day to end the bandwidth rate limit interval.
   *
   * @public
   */
  EndHourOfDay: number | undefined;

  /**
   * The minute of the hour to end the bandwidth rate limit interval.
   *
   * > **Important:** The bandwidth rate limit interval ends at the end of the minute. To end an interval at the end of an hour, use the value `59`.
   *
   * @public
   */
  EndMinuteOfHour: number | undefined;

  /**
   * The days of the week component of the bandwidth rate limit interval, represented as ordinal numbers from 0 to 6, where 0 represents Sunday and 6 represents Saturday.
   *
   * @public
   */
  DaysOfWeek: number[] | undefined;

  /**
   * The average upload rate limit component of the bandwidth rate limit interval, in bits per second. This field does not appear in the response if the upload rate limit is not set.
   *
   * > **Note:**
   * >
   * > For Tape Gateway and Volume Gateway, the minimum value is `51200`.
   * >
   * > This field is required for S3 File Gateway, and the minimum value is `104857600`.
   *
   * @public
   */
  AverageUploadRateLimitInBitsPerSec?: number | undefined;

  /**
   * The average download rate limit component of the bandwidth rate limit interval, in bits per second. This field does not appear in the response if the download rate limit is not set.
   *
   * > **Note:** S3 File Gateway does not support this feature.
   *
   * @public
   */
  AverageDownloadRateLimitInBitsPerSec?: number | undefined;
}

/**
 * Lists iSCSI information about a volume.
 *
 * @public
 */
export interface VolumeiSCSIAttributes {
  /**
   * The Amazon Resource Name (ARN) of the volume target.
   *
   * @public
   */
  TargetARN?: string | undefined;

  /**
   * The network interface identifier.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The port used to communicate with iSCSI targets.
   *
   * @public
   */
  NetworkInterfacePort?: number | undefined;

  /**
   * The logical disk number.
   *
   * @public
   */
  LunNumber?: number | undefined;

  /**
   * Indicates whether mutual CHAP is enabled for the iSCSI target.
   *
   * @public
   */
  ChapEnabled?: boolean | undefined;
}

/**
 * Describes an iSCSI cached volume.
 *
 * @public
 */
export interface CachediSCSIVolume {
  /**
   * The Amazon Resource Name (ARN) of the storage volume.
   *
   * @public
   */
  VolumeARN?: string | undefined;

  /**
   * The unique identifier of the volume, e.g., vol-AE4B946D.
   *
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * One of the VolumeType enumeration values that describes the type of the volume.
   *
   * @public
   */
  VolumeType?: string | undefined;

  /**
   * One of the VolumeStatus values that indicates the state of the storage volume.
   *
   * @public
   */
  VolumeStatus?: string | undefined;

  /**
   * A value that indicates whether a storage volume is attached to or detached from a gateway. For more information, see [Moving your volumes to a different gateway](https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-volumes.html#attach-detach-volume).
   *
   * @public
   */
  VolumeAttachmentStatus?: string | undefined;

  /**
   * The size, in bytes, of the volume capacity.
   *
   * @public
   */
  VolumeSizeInBytes?: number | undefined;

  /**
   * Represents the percentage complete if the volume is restoring or bootstrapping that represents the percent of data transferred. This field does not appear in the response if the cached volume is not restoring or bootstrapping.
   *
   * @public
   */
  VolumeProgress?: number | undefined;

  /**
   * If the cached volume was created from a snapshot, this field contains the snapshot ID used, e.g., snap-78e22663. Otherwise, this field is not included.
   *
   * @public
   */
  SourceSnapshotId?: string | undefined;

  /**
   * An VolumeiSCSIAttributes object that represents a collection of iSCSI attributes for one stored volume.
   *
   * @public
   */
  VolumeiSCSIAttributes?: VolumeiSCSIAttributes | undefined;

  /**
   * The date the volume was created. Volumes created prior to March 28, 2017 don’t have this timestamp.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The size of the data stored on the volume in bytes. This value is calculated based on the number of blocks that are touched, instead of the actual amount of data written. This value can be useful for sequential write patterns but less accurate for random write patterns. `VolumeUsedInBytes` is different from the compressed size of the volume, which is the value that is used to calculate your bill.
   *
   * > **Note:**
   * >
   * > This value is not available for volumes created prior to May 13, 2015, until you store data on the volume.
   * >
   * > If you use a delete tool that overwrites the data on your volume with random data, your usage will not be reduced. This is because the random data is not compressible. If you want to reduce the amount of billed storage on your volume, we recommend overwriting your files with zeros to compress the data to a negligible amount of actual storage.
   *
   * @public
   */
  VolumeUsedInBytes?: number | undefined;

  /**
   * Optional. The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value must be set if `KMSEncrypted` is `true`, or if `EncryptionType` is `SseKms` or `DsseKms`.
   *
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. For example, specifying `TargetName` as *myvolume* results in the target ARN of `arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume`. The target name must be unique across all volumes on a gateway.
   *
   * If you don't specify a value, Storage Gateway uses the value that was previously used for this volume as the new target name.
   *
   * @public
   */
  TargetName?: string | undefined;
}

/**
 * A list of filter parameters and associated values that determine which files are included or excluded from a cache report created by a `StartCacheReport` request. Multiple instances of the same filter parameter are combined with an OR operation, while different parameters are combined with an AND operation.
 *
 * @public
 */
export interface CacheReportFilter {
  /**
   * The parameter name for a filter that determines which files are included or excluded from a cache report.
   *
   * **Valid Names:**
   *
   * UploadFailureReason | UploadState
   *
   * @public
   */
  Name: CacheReportFilterName | undefined;

  /**
   * The parameter value for a filter that determines which files are included or excluded from a cache report.
   *
   * **Valid `UploadFailureReason` Values:**
   *
   * `InaccessibleStorageClass` | `InvalidObjectState` | `ObjectMissing` | `S3AccessDenied`
   *
   * **Valid `UploadState` Values:**
   *
   * `FailingUpload`
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * Contains all informational fields associated with a cache report. Includes name, ARN, tags, status, progress, filters, start time, and end time.
 *
 * @public
 */
export interface CacheReportInfo {
  /**
   * The Amazon Resource Name (ARN) of the cache report you want to describe.
   *
   * @public
   */
  CacheReportARN?: string | undefined;

  /**
   * The status of the specified cache report.
   *
   * @public
   */
  CacheReportStatus?: CacheReportStatus | undefined;

  /**
   * The percentage of the report generation process that has been completed at time of inquiry.
   *
   * @public
   */
  ReportCompletionPercent?: number | undefined;

  /**
   * The time at which the gateway stopped generating the cache report.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The ARN of the IAM role that an S3 File Gateway assumes when it accesses the underlying storage.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the file share.
   *
   * @public
   */
  FileShareARN?: string | undefined;

  /**
   * The ARN of the Amazon S3 bucket location where the cache report is saved.
   *
   * @public
   */
  LocationARN?: string | undefined;

  /**
   * The time at which the gateway started generating the cache report.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The list of filters and parameters that determine which files are included in the report.
   *
   * @public
   */
  InclusionFilters?: CacheReportFilter[] | undefined;

  /**
   * The list of filters and parameters that determine which files are excluded from the report.
   *
   * @public
   */
  ExclusionFilters?: CacheReportFilter[] | undefined;

  /**
   * The file name of the completed cache report object stored in Amazon S3.
   *
   * @public
   */
  ReportName?: string | undefined;

  /**
   * The list of key/value tags associated with the report.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * CancelArchivalInput
 *
 * @public
 */
export interface CancelArchivalInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the virtual tape you want to cancel archiving for.
   *
   * @public
   */
  TapeARN: string | undefined;
}

/**
 * CancelArchivalOutput
 *
 * @public
 */
export interface CancelArchivalOutput {
  /**
   * The Amazon Resource Name (ARN) of the virtual tape for which archiving was canceled.
   *
   * @public
   */
  TapeARN?: string | undefined;
}

/**
 * @public
 */
export interface CancelCacheReportInput {
  /**
   * The Amazon Resource Name (ARN) of the cache report you want to cancel.
   *
   * @public
   */
  CacheReportARN: string | undefined;
}

/**
 * @public
 */
export interface CancelCacheReportOutput {
  /**
   * The Amazon Resource Name (ARN) of the cache report you want to cancel.
   *
   * @public
   */
  CacheReportARN?: string | undefined;
}

/**
 * CancelRetrievalInput
 *
 * @public
 */
export interface CancelRetrievalInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the virtual tape you want to cancel retrieval for.
   *
   * @public
   */
  TapeARN: string | undefined;
}

/**
 * CancelRetrievalOutput
 *
 * @public
 */
export interface CancelRetrievalOutput {
  /**
   * The Amazon Resource Name (ARN) of the virtual tape for which retrieval was canceled.
   *
   * @public
   */
  TapeARN?: string | undefined;
}

/**
 * Describes Challenge-Handshake Authentication Protocol (CHAP) information that supports authentication between your gateway and iSCSI initiators.
 *
 * @public
 */
export interface ChapInfo {
  /**
   * The Amazon Resource Name (ARN) of the volume.
   *
   * Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).
   *
   * @public
   */
  TargetARN?: string | undefined;

  /**
   * The secret key that the initiator (for example, the Windows client) must provide to participate in mutual CHAP with the target.
   *
   * @public
   */
  SecretToAuthenticateInitiator?: string | undefined;

  /**
   * The iSCSI initiator that connects to the target.
   *
   * @public
   */
  InitiatorName?: string | undefined;

  /**
   * The secret key that the target must provide to participate in mutual CHAP with the initiator (e.g., Windows client).
   *
   * @public
   */
  SecretToAuthenticateTarget?: string | undefined;
}

/**
 * @public
 */
export interface CreateCachediSCSIVolumeInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * The size of the volume in bytes.
   *
   * @public
   */
  VolumeSizeInBytes: number | undefined;

  /**
   * The snapshot ID (e.g. "snap-1122aabb") of the snapshot to restore as the new cached volume. Specify this field if you want to create the iSCSI storage volume from a snapshot; otherwise, do not include this field. To list snapshots for your account use [DescribeSnapshots](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html) in the *Amazon Elastic Compute Cloud API Reference*.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. For example, specifying `TargetName` as *myvolume* results in the target ARN of `arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume`. The target name must be unique across all volumes on a gateway.
   *
   * If you don't specify a value, Storage Gateway uses the value that was previously used for this volume as the new target name.
   *
   * @public
   */
  TargetName: string | undefined;

  /**
   * The ARN for an existing volume. Specifying this ARN makes the new volume into an exact copy of the specified existing volume's latest recovery point. The `VolumeSizeInBytes` value for this new volume must be equal to or larger than the size of the existing volume, in bytes.
   *
   * @public
   */
  SourceVolumeARN?: string | undefined;

  /**
   * The network interface of the gateway on which to expose the iSCSI target. Accepts IPv4 and IPv6 addresses. Use DescribeGatewayInformation to get a list of the network interfaces available on a gateway.
   *
   * Valid Values: A valid IP address.
   *
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * A unique identifier that you use to retry a request. If you retry a request, use the same `ClientToken` you specified in the initial request.
   *
   * @public
   */
  ClientToken: string | undefined;

  /**
   * Set to `true` to use Amazon S3 server-side encryption with your own KMS key, or `false` to use a key managed by Amazon S3. Optional.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  KMSEncrypted?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when `KMSEncrypted` is `true`. Optional.
   *
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * A list of up to 50 tags that you can assign to a cached volume. Each tag is a key-value pair.
   *
   * > **Note:** Valid characters for key and value are letters, spaces, and numbers that you can represent in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256 characters.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateCachediSCSIVolumeOutput {
  /**
   * The Amazon Resource Name (ARN) of the configured volume.
   *
   * @public
   */
  VolumeARN?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name that initiators can use to connect to the target.
   *
   * @public
   */
  TargetARN?: string | undefined;
}

/**
 * Describes Network File System (NFS) file share default values. Files and folders stored as Amazon S3 objects in S3 buckets don't, by default, have Unix file permissions assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3 objects that represent files and folders are assigned these default Unix permissions. This operation is only supported for S3 File Gateways.
 *
 * @public
 */
export interface NFSFileShareDefaults {
  /**
   * The Unix file mode in the form "nnnn". For example, `0666` represents the default file mode inside the file share. The default value is `0666`.
   *
   * @public
   */
  FileMode?: string | undefined;

  /**
   * The Unix directory mode in the form "nnnn". For example, `0666` represents the default access mode for all directories inside the file share. The default value is `0777`.
   *
   * @public
   */
  DirectoryMode?: string | undefined;

  /**
   * The default group ID for the file share (unless the files have another group ID specified). The default value is `nfsnobody`.
   *
   * @public
   */
  GroupId?: number | undefined;

  /**
   * The default owner ID for files in the file share (unless the files have another owner ID specified). The default value is `nfsnobody`.
   *
   * @public
   */
  OwnerId?: number | undefined;
}

/**
 * CreateNFSFileShareInput
 *
 * @public
 */
export interface CreateNFSFileShareInput {
  /**
   * A unique string value that you supply that is used by S3 File Gateway to ensure idempotent file share creation.
   *
   * @public
   */
  ClientToken: string | undefined;

  /**
   * File share default values. Optional.
   *
   * @public
   */
  NFSFileShareDefaults?: NFSFileShareDefaults | undefined;

  /**
   * The Amazon Resource Name (ARN) of the S3 File Gateway on which you want to create a file share.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * A value that specifies the type of server-side encryption that the file share will use for the data that it stores in Amazon S3.
   *
   * > **Note:**
   * >
   * > We recommend using `EncryptionType` instead of `KMSEncrypted` to set the file share encryption method. You do not need to provide values for both parameters.
   * >
   * > If values for both parameters exist in the same request, then the specified encryption methods must not conflict. For example, if `EncryptionType` is `SseS3`, then `KMSEncrypted` must be `false`. If `EncryptionType` is `SseKms` or `DsseKms`, then `KMSEncrypted` must be `true`.
   *
   * @public
   */
  EncryptionType?: EncryptionType | undefined;

  /**
   * Optional. Set to `true` to use Amazon S3 server-side encryption with your own KMS key (SSE-KMS), or `false` to use a key managed by Amazon S3 (SSE-S3). To use dual-layer encryption (DSSE-KMS), set the `EncryptionType` parameter instead.
   *
   * > **Note:**
   * >
   * > We recommend using `EncryptionType` instead of `KMSEncrypted` to set the file share encryption method. You do not need to provide values for both parameters.
   * >
   * > If values for both parameters exist in the same request, then the specified encryption methods must not conflict. For example, if `EncryptionType` is `SseS3`, then `KMSEncrypted` must be `false`. If `EncryptionType` is `SseKms` or `DsseKms`, then `KMSEncrypted` must be `true`.
   *
   * Valid Values: `true` | `false`
   *
   * @deprecated KMSEncrypted is deprecated, use EncryptionType instead.
   * @public
   */
  KMSEncrypted?: boolean | undefined;

  /**
   * Optional. The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value must be set if `KMSEncrypted` is `true`, or if `EncryptionType` is `SseKms` or `DsseKms`.
   *
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * The ARN of the Identity and Access Management (IAM) role that an S3 File Gateway assumes when it accesses the underlying storage.
   *
   * @public
   */
  Role: string | undefined;

  /**
   * A custom ARN for the backend storage used for storing data for file shares. It includes a resource ARN with an optional prefix concatenation. The prefix must end with a forward slash (/).
   *
   * > **Note:**
   * >
   * > You can specify LocationARN as a bucket ARN, access point ARN or access point alias, as shown in the following examples.
   * >
   * > Bucket ARN:
   * >
   * > `arn:aws:s3:::amzn-s3-demo-bucket/prefix/`
   * >
   * > Access point ARN:
   * >
   * > `arn:aws:s3:region:account-id:accesspoint/access-point-name/prefix/`
   * >
   * > If you specify an access point, the bucket policy must be configured to delegate access control to the access point. For information, see [Delegating access control to access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html#access-points-delegating-control) in the *Amazon S3 User Guide*.
   * >
   * > Access point alias:
   * >
   * > `test-ap-ab123cdef4gehijklmn5opqrstuvuse1a-s3alias`
   *
   * @public
   */
  LocationARN: string | undefined;

  /**
   * The default storage class for objects put into an Amazon S3 bucket by the S3 File Gateway. The default value is `S3_STANDARD`. Optional.
   *
   * Valid Values: `S3_STANDARD` | `S3_INTELLIGENT_TIERING` | `S3_STANDARD_IA` | `S3_ONEZONE_IA`
   *
   * @public
   */
  DefaultStorageClass?: string | undefined;

  /**
   * A value that sets the access control list (ACL) permission for objects in the S3 bucket that a S3 File Gateway puts objects into. The default value is `private`.
   *
   * @public
   */
  ObjectACL?: ObjectACL | undefined;

  /**
   * The list of clients that are allowed to access the S3 File Gateway. The list must contain either valid IPv4/IPv6 addresses or valid CIDR blocks.
   *
   * @public
   */
  ClientList?: string[] | undefined;

  /**
   * A value that maps a user to anonymous user.
   *
   * Valid values are the following:
   *
   * - `RootSquash`: Only root is mapped to anonymous user.
   * - `NoSquash`: No one is mapped to anonymous user.
   * - `AllSquash`: Everyone is mapped to anonymous user.
   *
   * @public
   */
  Squash?: string | undefined;

  /**
   * A value that sets the write status of a file share. Set this value to `true` to set the write status to read-only, otherwise set to `false`.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  ReadOnly?: boolean | undefined;

  /**
   * A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to `true` to enable MIME type guessing, otherwise set to `false`. The default value is `true`.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  GuessMIMETypeEnabled?: boolean | undefined;

  /**
   * A value that sets who pays the cost of the request and the cost associated with data download from the S3 bucket. If this value is set to `true`, the requester pays the costs; otherwise, the S3 bucket owner pays. However, the S3 bucket owner always pays the cost of storing data.
   *
   * > **Note:** `RequesterPays` is a configuration for the S3 bucket that backs the file share, so make sure that the configuration on the file share is the same as the S3 bucket configuration.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  RequesterPays?: boolean | undefined;

  /**
   * A list of up to 50 tags that can be assigned to the NFS file share. Each tag is a key-value pair.
   *
   * > **Note:** Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The name of the file share. Optional.
   *
   * > **Note:**
   * >
   * > `FileShareName` must be set if an S3 prefix name is set in `LocationARN`, or if an access point or access point alias is used.
   * >
   * > A valid NFS file share name can only contain the following characters: `a`-`z`, `A`-`Z`, `0`-`9`, `-`, `.`, and `_`.
   *
   * @public
   */
  FileShareName?: string | undefined;

  /**
   * Specifies refresh cache information for the file share.
   *
   * @public
   */
  CacheAttributes?: CacheAttributes | undefined;

  /**
   * The notification policy of the file share. `SettlingTimeInSeconds` controls the number of seconds to wait after the last point in time a client wrote to a file before generating an `ObjectUploaded` notification. Because clients can make many small writes to files, it's best to set this parameter for as long as possible to avoid generating multiple notifications for the same file in a small time period.
   *
   * > **Note:**
   * >
   * > `SettlingTimeInSeconds` has no effect on the timing of the object uploading to Amazon S3, only the timing of the notification.
   * >
   * > This setting is not meant to specify an exact time at which the notification will be sent. In some cases, the gateway might require more than the specified delay time to generate and send notifications.
   *
   * The following example sets `NotificationPolicy` on with `SettlingTimeInSeconds` set to 60.
   *
   * `\{\"Upload\": \{\"SettlingTimeInSeconds\": 60\}\}`
   *
   * The following example sets `NotificationPolicy` off.
   *
   * `\{\}`
   *
   * @public
   */
  NotificationPolicy?: string | undefined;

  /**
   * Specifies the DNS name for the VPC endpoint that the NFS file share uses to connect to Amazon S3.
   *
   * > **Note:** This parameter is required for NFS file shares that connect to Amazon S3 through a VPC endpoint, a VPC access point, or an access point alias that points to a VPC access point.
   *
   * @public
   */
  VPCEndpointDNSName?: string | undefined;

  /**
   * Specifies the Region of the S3 bucket where the NFS file share stores files.
   *
   * > **Note:** This parameter is required for NFS file shares that connect to Amazon S3 through a VPC endpoint, a VPC access point, or an access point alias that points to a VPC access point.
   *
   * @public
   */
  BucketRegion?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the storage used for audit logs.
   *
   * @public
   */
  AuditDestinationARN?: string | undefined;
}

/**
 * CreateNFSFileShareOutput
 *
 * @public
 */
export interface CreateNFSFileShareOutput {
  /**
   * The Amazon Resource Name (ARN) of the newly created file share.
   *
   * @public
   */
  FileShareARN?: string | undefined;
}

/**
 * CreateSMBFileShareInput
 *
 * @public
 */
export interface CreateSMBFileShareInput {
  /**
   * A unique string value that you supply that is used by S3 File Gateway to ensure idempotent file share creation.
   *
   * @public
   */
  ClientToken: string | undefined;

  /**
   * The ARN of the S3 File Gateway on which you want to create a file share.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * A value that specifies the type of server-side encryption that the file share will use for the data that it stores in Amazon S3.
   *
   * > **Note:**
   * >
   * > We recommend using `EncryptionType` instead of `KMSEncrypted` to set the file share encryption method. You do not need to provide values for both parameters.
   * >
   * > If values for both parameters exist in the same request, then the specified encryption methods must not conflict. For example, if `EncryptionType` is `SseS3`, then `KMSEncrypted` must be `false`. If `EncryptionType` is `SseKms` or `DsseKms`, then `KMSEncrypted` must be `true`.
   *
   * @public
   */
  EncryptionType?: EncryptionType | undefined;

  /**
   * Optional. Set to `true` to use Amazon S3 server-side encryption with your own KMS key (SSE-KMS), or `false` to use a key managed by Amazon S3 (SSE-S3). To use dual-layer encryption (DSSE-KMS), set the `EncryptionType` parameter instead.
   *
   * > **Note:**
   * >
   * > We recommend using `EncryptionType` instead of `KMSEncrypted` to set the file share encryption method. You do not need to provide values for both parameters.
   * >
   * > If values for both parameters exist in the same request, then the specified encryption methods must not conflict. For example, if `EncryptionType` is `SseS3`, then `KMSEncrypted` must be `false`. If `EncryptionType` is `SseKms` or `DsseKms`, then `KMSEncrypted` must be `true`.
   *
   * Valid Values: `true` | `false`
   *
   * @deprecated KMSEncrypted is deprecated, use EncryptionType instead.
   * @public
   */
  KMSEncrypted?: boolean | undefined;

  /**
   * Optional. The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value must be set if `KMSEncrypted` is `true`, or if `EncryptionType` is `SseKms` or `DsseKms`.
   *
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * The ARN of the Identity and Access Management (IAM) role that an S3 File Gateway assumes when it accesses the underlying storage.
   *
   * @public
   */
  Role: string | undefined;

  /**
   * A custom ARN for the backend storage used for storing data for file shares. It includes a resource ARN with an optional prefix concatenation. The prefix must end with a forward slash (/).
   *
   * > **Note:**
   * >
   * > You can specify LocationARN as a bucket ARN, access point ARN or access point alias, as shown in the following examples.
   * >
   * > Bucket ARN:
   * >
   * > `arn:aws:s3:::amzn-s3-demo-bucket/prefix/`
   * >
   * > Access point ARN:
   * >
   * > `arn:aws:s3:region:account-id:accesspoint/access-point-name/prefix/`
   * >
   * > If you specify an access point, the bucket policy must be configured to delegate access control to the access point. For information, see [Delegating access control to access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html#access-points-delegating-control) in the *Amazon S3 User Guide*.
   * >
   * > Access point alias:
   * >
   * > `test-ap-ab123cdef4gehijklmn5opqrstuvuse1a-s3alias`
   *
   * @public
   */
  LocationARN: string | undefined;

  /**
   * The default storage class for objects put into an Amazon S3 bucket by the S3 File Gateway. The default value is `S3_STANDARD`. Optional.
   *
   * Valid Values: `S3_STANDARD` | `S3_INTELLIGENT_TIERING` | `S3_STANDARD_IA` | `S3_ONEZONE_IA`
   *
   * @public
   */
  DefaultStorageClass?: string | undefined;

  /**
   * A value that sets the access control list (ACL) permission for objects in the S3 bucket that a S3 File Gateway puts objects into. The default value is `private`.
   *
   * @public
   */
  ObjectACL?: ObjectACL | undefined;

  /**
   * A value that sets the write status of a file share. Set this value to `true` to set the write status to read-only, otherwise set to `false`.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  ReadOnly?: boolean | undefined;

  /**
   * A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to `true` to enable MIME type guessing, otherwise set to `false`. The default value is `true`.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  GuessMIMETypeEnabled?: boolean | undefined;

  /**
   * A value that sets who pays the cost of the request and the cost associated with data download from the S3 bucket. If this value is set to `true`, the requester pays the costs; otherwise, the S3 bucket owner pays. However, the S3 bucket owner always pays the cost of storing data.
   *
   * > **Note:** `RequesterPays` is a configuration for the S3 bucket that backs the file share, so make sure that the configuration on the file share is the same as the S3 bucket configuration.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  RequesterPays?: boolean | undefined;

  /**
   * Set this value to `true` to enable access control list (ACL) on the SMB file share. Set it to `false` to map file and directory permissions to the POSIX permissions.
   *
   * For more information, see [Using Windows ACLs to limit SMB file share access](https://docs.aws.amazon.com/filegateway/latest/files3/smb-acl.html) in the *Amazon S3 File Gateway User Guide*.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  SMBACLEnabled?: boolean | undefined;

  /**
   * The files and folders on this share will only be visible to users with read access.
   *
   * @public
   */
  AccessBasedEnumeration?: boolean | undefined;

  /**
   * A list of users or groups in the Active Directory that will be granted administrator privileges on the file share. These users can do all file operations as the super-user. Acceptable formats include: `DOMAIN\User1`, `user1`, `@group1`, and `@DOMAIN\group1`.
   *
   * > **Important:** Use this option very carefully, because any user in this list can do anything they like on the file share, regardless of file permissions.
   *
   * @public
   */
  AdminUserList?: string[] | undefined;

  /**
   * A list of users or groups in the Active Directory that are allowed to access the file share. A group must be prefixed with the @ character. Acceptable formats include: `DOMAIN\User1`, `user1`, `@group1`, and `@DOMAIN\group1`. Can only be set if Authentication is set to `ActiveDirectory`.
   *
   * @public
   */
  ValidUserList?: string[] | undefined;

  /**
   * A list of users or groups in the Active Directory that are not allowed to access the file share. A group must be prefixed with the @ character. Acceptable formats include: `DOMAIN\User1`, `user1`, `@group1`, and `@DOMAIN\group1`. Can only be set if Authentication is set to `ActiveDirectory`.
   *
   * @public
   */
  InvalidUserList?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the storage used for audit logs.
   *
   * @public
   */
  AuditDestinationARN?: string | undefined;

  /**
   * The authentication method that users use to access the file share. The default is `ActiveDirectory`.
   *
   * Valid Values: `ActiveDirectory` | `GuestAccess`
   *
   * @public
   */
  Authentication?: string | undefined;

  /**
   * The case of an object name in an Amazon S3 bucket. For `ClientSpecified`, the client determines the case sensitivity. For `CaseSensitive`, the gateway determines the case sensitivity. The default value is `ClientSpecified`.
   *
   * @public
   */
  CaseSensitivity?: CaseSensitivity | undefined;

  /**
   * A list of up to 50 tags that can be assigned to the NFS file share. Each tag is a key-value pair.
   *
   * > **Note:** Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The name of the file share. Optional.
   *
   * > **Note:**
   * >
   * > `FileShareName` must be set if an S3 prefix name is set in `LocationARN`, or if an access point or access point alias is used.
   * >
   * > A valid SMB file share name cannot contain the following characters: `[`,`]`,`#`,`;`,`<`,`>`,`:`,`"`,`\`,`/`,`|`,`?`,`*`,`+`, or ASCII control characters `1-31`.
   *
   * @public
   */
  FileShareName?: string | undefined;

  /**
   * Specifies refresh cache information for the file share.
   *
   * @public
   */
  CacheAttributes?: CacheAttributes | undefined;

  /**
   * The notification policy of the file share. `SettlingTimeInSeconds` controls the number of seconds to wait after the last point in time a client wrote to a file before generating an `ObjectUploaded` notification. Because clients can make many small writes to files, it's best to set this parameter for as long as possible to avoid generating multiple notifications for the same file in a small time period.
   *
   * > **Note:**
   * >
   * > `SettlingTimeInSeconds` has no effect on the timing of the object uploading to Amazon S3, only the timing of the notification.
   * >
   * > This setting is not meant to specify an exact time at which the notification will be sent. In some cases, the gateway might require more than the specified delay time to generate and send notifications.
   *
   * The following example sets `NotificationPolicy` on with `SettlingTimeInSeconds` set to 60.
   *
   * `\{\"Upload\": \{\"SettlingTimeInSeconds\": 60\}\}`
   *
   * The following example sets `NotificationPolicy` off.
   *
   * `\{\}`
   *
   * @public
   */
  NotificationPolicy?: string | undefined;

  /**
   * Specifies the DNS name for the VPC endpoint that the SMB file share uses to connect to Amazon S3.
   *
   * > **Note:** This parameter is required for SMB file shares that connect to Amazon S3 through a VPC endpoint, a VPC access point, or an access point alias that points to a VPC access point.
   *
   * @public
   */
  VPCEndpointDNSName?: string | undefined;

  /**
   * Specifies the Region of the S3 bucket where the SMB file share stores files.
   *
   * > **Note:** This parameter is required for SMB file shares that connect to Amazon S3 through a VPC endpoint, a VPC access point, or an access point alias that points to a VPC access point.
   *
   * @public
   */
  BucketRegion?: string | undefined;

  /**
   * Specifies whether opportunistic locking is enabled for the SMB file share.
   *
   * > **Note:** Enabling opportunistic locking on case-sensitive shares is not recommended for workloads that involve access to files with the same name in different case.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  OplocksEnabled?: boolean | undefined;
}

/**
 * CreateSMBFileShareOutput
 *
 * @public
 */
export interface CreateSMBFileShareOutput {
  /**
   * The Amazon Resource Name (ARN) of the newly created file share.
   *
   * @public
   */
  FileShareARN?: string | undefined;
}

/**
 * A JSON object containing one or more of the following fields:
 *
 * - CreateSnapshotInput$SnapshotDescription
 * - CreateSnapshotInput$VolumeARN
 *
 * @public
 */
export interface CreateSnapshotInput {
  /**
   * The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to return a list of gateway volumes.
   *
   * @public
   */
  VolumeARN: string | undefined;

  /**
   * Textual description of the snapshot that appears in the Amazon EC2 console, Elastic Block Store snapshots panel in the **Description** field, and in the Storage Gateway snapshot **Details** pane, **Description** field.
   *
   * @public
   */
  SnapshotDescription: string | undefined;

  /**
   * A list of up to 50 tags that can be assigned to a snapshot. Each tag is a key-value pair.
   *
   * > **Note:** Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * A JSON object containing the following fields:
 *
 * @public
 */
export interface CreateSnapshotOutput {
  /**
   * The Amazon Resource Name (ARN) of the volume of which the snapshot was taken.
   *
   * @public
   */
  VolumeARN?: string | undefined;

  /**
   * The snapshot ID that is used to refer to the snapshot in future operations such as describing snapshots (Amazon Elastic Compute Cloud API `DescribeSnapshots`) or creating a volume from a snapshot (CreateStorediSCSIVolume).
   *
   * @public
   */
  SnapshotId?: string | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotFromVolumeRecoveryPointInput {
  /**
   * The Amazon Resource Name (ARN) of the iSCSI volume target. Use the DescribeStorediSCSIVolumes operation to return to retrieve the TargetARN for specified VolumeARN.
   *
   * @public
   */
  VolumeARN: string | undefined;

  /**
   * Textual description of the snapshot that appears in the Amazon EC2 console, Elastic Block Store snapshots panel in the **Description** field, and in the Storage Gateway snapshot **Details** pane, **Description** field.
   *
   * @public
   */
  SnapshotDescription: string | undefined;

  /**
   * A list of up to 50 tags that can be assigned to a snapshot. Each tag is a key-value pair.
   *
   * > **Note:** Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotFromVolumeRecoveryPointOutput {
  /**
   * The ID of the snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the iSCSI volume target. Use the DescribeStorediSCSIVolumes operation to return to retrieve the TargetARN for specified VolumeARN.
   *
   * @public
   */
  VolumeARN?: string | undefined;

  /**
   * The time the volume was created from the recovery point.
   *
   * @public
   */
  VolumeRecoveryPointTime?: string | undefined;
}

/**
 * A JSON object containing one or more of the following fields:
 *
 * - CreateStorediSCSIVolumeInput$DiskId
 * - CreateStorediSCSIVolumeInput$NetworkInterfaceId
 * - CreateStorediSCSIVolumeInput$PreserveExistingData
 * - CreateStorediSCSIVolumeInput$SnapshotId
 * - CreateStorediSCSIVolumeInput$TargetName
 *
 * @public
 */
export interface CreateStorediSCSIVolumeInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * The unique identifier for the gateway local disk that is configured as a stored volume. Use [ListLocalDisks](https://docs.aws.amazon.com/storagegateway/latest/userguide/API_ListLocalDisks.html) to list disk IDs for a gateway.
   *
   * @public
   */
  DiskId: string | undefined;

  /**
   * The snapshot ID (e.g., "snap-1122aabb") of the snapshot to restore as the new stored volume. Specify this field if you want to create the iSCSI storage volume from a snapshot; otherwise, do not include this field. To list snapshots for your account use [DescribeSnapshots](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html) in the *Amazon Elastic Compute Cloud API Reference*.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * Set to `true` if you want to preserve the data on the local disk. Otherwise, set to `false` to create an empty volume.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  PreserveExistingData: boolean | undefined;

  /**
   * The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. For example, specifying `TargetName` as *myvolume* results in the target ARN of `arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume`. The target name must be unique across all volumes on a gateway.
   *
   * If you don't specify a value, Storage Gateway uses the value that was previously used for this volume as the new target name.
   *
   * @public
   */
  TargetName: string | undefined;

  /**
   * The network interface of the gateway on which to expose the iSCSI target. Accepts IPv4 and IPv6 addresses. Use DescribeGatewayInformation to get a list of the network interfaces available on a gateway.
   *
   * Valid Values: A valid IP address.
   *
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * Set to `true` to use Amazon S3 server-side encryption with your own KMS key, or `false` to use a key managed by Amazon S3. Optional.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  KMSEncrypted?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when `KMSEncrypted` is `true`. Optional.
   *
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * A list of up to 50 tags that can be assigned to a stored volume. Each tag is a key-value pair.
   *
   * > **Note:** Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * A JSON object containing the following fields:
 *
 * @public
 */
export interface CreateStorediSCSIVolumeOutput {
  /**
   * The Amazon Resource Name (ARN) of the configured volume.
   *
   * @public
   */
  VolumeARN?: string | undefined;

  /**
   * The size of the volume in bytes.
   *
   * @public
   */
  VolumeSizeInBytes?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name that initiators can use to connect to the target.
   *
   * @public
   */
  TargetARN?: string | undefined;
}

/**
 * @public
 */
export interface CreateTapePoolInput {
  /**
   * The name of the new custom tape pool.
   *
   * @public
   */
  PoolName: string | undefined;

  /**
   * The storage class that is associated with the new custom pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.
   *
   * @public
   */
  StorageClass: TapeStorageClass | undefined;

  /**
   * Tape retention lock can be configured in two modes. When configured in governance mode, Amazon Web Services accounts with specific IAM permissions are authorized to remove the tape retention lock from archived virtual tapes. When configured in compliance mode, the tape retention lock cannot be removed by any user, including the root Amazon Web Services account.
   *
   * @public
   */
  RetentionLockType?: RetentionLockType | undefined;

  /**
   * Tape retention lock time is set in days. Tape retention lock can be enabled for up to 100 years (36,500 days).
   *
   * @public
   */
  RetentionLockTimeInDays?: number | undefined;

  /**
   * A list of up to 50 tags that can be assigned to tape pool. Each tag is a key-value pair.
   *
   * > **Note:** Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTapePoolOutput {
  /**
   * The unique Amazon Resource Name (ARN) that represents the custom tape pool. Use the ListTapePools operation to return a list of tape pools for your account and Amazon Web Services Region.
   *
   * @public
   */
  PoolARN?: string | undefined;
}

/**
 * CreateTapesInput
 *
 * @public
 */
export interface CreateTapesInput {
  /**
   * The unique Amazon Resource Name (ARN) that represents the gateway to associate the virtual tapes with. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * The size, in bytes, of the virtual tapes that you want to create.
   *
   * > **Note:** The size must be aligned by gigabyte (1024*1024*1024 bytes).
   *
   * @public
   */
  TapeSizeInBytes: number | undefined;

  /**
   * A unique identifier that you use to retry a request. If you retry a request, use the same `ClientToken` you specified in the initial request.
   *
   * > **Note:** Using the same `ClientToken` prevents creating the tape multiple times.
   *
   * @public
   */
  ClientToken: string | undefined;

  /**
   * The number of virtual tapes that you want to create.
   *
   * @public
   */
  NumTapesToCreate: number | undefined;

  /**
   * A prefix that you append to the barcode of the virtual tape you are creating. This prefix makes the barcode unique.
   *
   * > **Note:** The prefix must be 1-4 characters in length and must be one of the uppercase letters from A to Z.
   *
   * @public
   */
  TapeBarcodePrefix: string | undefined;

  /**
   * Set to `true` to use Amazon S3 server-side encryption with your own KMS key, or `false` to use a key managed by Amazon S3. Optional.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  KMSEncrypted?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when `KMSEncrypted` is `true`. Optional.
   *
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * The ID of the pool that you want to add your tape to for archiving. The tape in this pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * Set to `TRUE` if the tape you are creating is to be configured as a write-once-read-many (WORM) tape.
   *
   * @public
   */
  Worm?: boolean | undefined;

  /**
   * A list of up to 50 tags that can be assigned to a virtual tape. Each tag is a key-value pair.
   *
   * > **Note:** Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * CreateTapeOutput
 *
 * @public
 */
export interface CreateTapesOutput {
  /**
   * A list of unique Amazon Resource Names (ARNs) that represents the virtual tapes that were created.
   *
   * @public
   */
  TapeARNs?: string[] | undefined;
}

/**
 * CreateTapeWithBarcodeInput
 *
 * @public
 */
export interface CreateTapeWithBarcodeInput {
  /**
   * The unique Amazon Resource Name (ARN) that represents the gateway to associate the virtual tape with. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * The size, in bytes, of the virtual tape that you want to create.
   *
   * > **Note:** The size must be aligned by gigabyte (1024*1024*1024 bytes).
   *
   * @public
   */
  TapeSizeInBytes: number | undefined;

  /**
   * The barcode that you want to assign to the tape.
   *
   * > **Note:** Barcodes cannot be reused. This includes barcodes used for tapes that have been deleted.
   *
   * @public
   */
  TapeBarcode: string | undefined;

  /**
   * Set to `true` to use Amazon S3 server-side encryption with your own KMS key, or `false` to use a key managed by Amazon S3. Optional.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  KMSEncrypted?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when `KMSEncrypted` is `true`. Optional.
   *
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * The ID of the pool that you want to add your tape to for archiving. The tape in this pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Deep Archive) that corresponds to the pool.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * Set to `TRUE` if the tape you are creating is to be configured as a write-once-read-many (WORM) tape.
   *
   * @public
   */
  Worm?: boolean | undefined;

  /**
   * A list of up to 50 tags that can be assigned to a virtual tape that has a barcode. Each tag is a key-value pair.
   *
   * > **Note:** Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * CreateTapeOutput
 *
 * @public
 */
export interface CreateTapeWithBarcodeOutput {
  /**
   * A unique Amazon Resource Name (ARN) that represents the virtual tape that was created.
   *
   * @public
   */
  TapeARN?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAutomaticTapeCreationPolicyInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface DeleteAutomaticTapeCreationPolicyOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * A JSON object containing the following fields:
 *
 * - DeleteBandwidthRateLimitInput$BandwidthType
 *
 * @public
 */
export interface DeleteBandwidthRateLimitInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * One of the BandwidthType values that indicates the gateway bandwidth rate limit to delete.
   *
   * Valid Values: `UPLOAD` | `DOWNLOAD` | `ALL`
   *
   * @public
   */
  BandwidthType: string | undefined;
}

/**
 * A JSON object containing the Amazon Resource Name (ARN) of the gateway whose bandwidth rate information was deleted.
 *
 * @public
 */
export interface DeleteBandwidthRateLimitOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCacheReportInput {
  /**
   * The Amazon Resource Name (ARN) of the cache report you want to delete.
   *
   * @public
   */
  CacheReportARN: string | undefined;
}

/**
 * @public
 */
export interface DeleteCacheReportOutput {
  /**
   * The Amazon Resource Name (ARN) of the cache report you want to delete.
   *
   * @public
   */
  CacheReportARN?: string | undefined;
}

/**
 * A JSON object containing one or more of the following fields:
 *
 * - DeleteChapCredentialsInput$InitiatorName
 * - DeleteChapCredentialsInput$TargetARN
 *
 * @public
 */
export interface DeleteChapCredentialsInput {
  /**
   * The Amazon Resource Name (ARN) of the iSCSI volume target. Use the DescribeStorediSCSIVolumes operation to return to retrieve the TargetARN for specified VolumeARN.
   *
   * @public
   */
  TargetARN: string | undefined;

  /**
   * The iSCSI initiator that connects to the target.
   *
   * @public
   */
  InitiatorName: string | undefined;
}

/**
 * A JSON object containing the following fields:
 *
 * @public
 */
export interface DeleteChapCredentialsOutput {
  /**
   * The Amazon Resource Name (ARN) of the target.
   *
   * @public
   */
  TargetARN?: string | undefined;

  /**
   * The iSCSI initiator that connects to the target.
   *
   * @public
   */
  InitiatorName?: string | undefined;
}

/**
 * DeleteFileShareInput
 *
 * @public
 */
export interface DeleteFileShareInput {
  /**
   * The Amazon Resource Name (ARN) of the file share to be deleted.
   *
   * @public
   */
  FileShareARN: string | undefined;

  /**
   * If this value is set to `true`, the operation deletes a file share immediately and aborts all data uploads to Amazon Web Services. Otherwise, the file share is not deleted until all data is uploaded to Amazon Web Services. This process aborts the data upload process, and the file share enters the `FORCE_DELETING` status.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  ForceDelete?: boolean | undefined;
}

/**
 * DeleteFileShareOutput
 *
 * @public
 */
export interface DeleteFileShareOutput {
  /**
   * The Amazon Resource Name (ARN) of the deleted file share.
   *
   * @public
   */
  FileShareARN?: string | undefined;
}

/**
 * A JSON object containing the ID of the gateway to delete.
 *
 * @public
 */
export interface DeleteGatewayInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * A JSON object containing the ID of the deleted gateway.
 *
 * @public
 */
export interface DeleteGatewayOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSnapshotScheduleInput {
  /**
   * The volume which snapshot schedule to delete.
   *
   * @public
   */
  VolumeARN: string | undefined;
}

/**
 * @public
 */
export interface DeleteSnapshotScheduleOutput {
  /**
   * The volume which snapshot schedule was deleted.
   *
   * @public
   */
  VolumeARN?: string | undefined;
}

/**
 * DeleteTapeInput
 *
 * @public
 */
export interface DeleteTapeInput {
  /**
   * The unique Amazon Resource Name (ARN) of the gateway that the virtual tape to delete is associated with. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the virtual tape to delete.
   *
   * @public
   */
  TapeARN: string | undefined;

  /**
   * Set to `TRUE` to delete an archived tape that belongs to a custom pool with tape retention lock. Only archived tapes with tape retention lock set to `governance` can be deleted. Archived tapes with tape retention lock set to `compliance` can't be deleted.
   *
   * @public
   */
  BypassGovernanceRetention?: boolean | undefined;
}

/**
 * DeleteTapeOutput
 *
 * @public
 */
export interface DeleteTapeOutput {
  /**
   * The Amazon Resource Name (ARN) of the deleted virtual tape.
   *
   * @public
   */
  TapeARN?: string | undefined;
}

/**
 * DeleteTapeArchiveInput
 *
 * @public
 */
export interface DeleteTapeArchiveInput {
  /**
   * The Amazon Resource Name (ARN) of the virtual tape to delete from the virtual tape shelf (VTS).
   *
   * @public
   */
  TapeARN: string | undefined;

  /**
   * Set to `TRUE` to delete an archived tape that belongs to a custom pool with tape retention lock. Only archived tapes with tape retention lock set to `governance` can be deleted. Archived tapes with tape retention lock set to `compliance` can't be deleted.
   *
   * @public
   */
  BypassGovernanceRetention?: boolean | undefined;
}

/**
 * DeleteTapeArchiveOutput
 *
 * @public
 */
export interface DeleteTapeArchiveOutput {
  /**
   * The Amazon Resource Name (ARN) of the virtual tape that was deleted from the virtual tape shelf (VTS).
   *
   * @public
   */
  TapeARN?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTapePoolInput {
  /**
   * The Amazon Resource Name (ARN) of the custom tape pool to delete.
   *
   * @public
   */
  PoolARN: string | undefined;
}

/**
 * @public
 */
export interface DeleteTapePoolOutput {
  /**
   * The Amazon Resource Name (ARN) of the custom tape pool being deleted.
   *
   * @public
   */
  PoolARN?: string | undefined;
}

/**
 * A JSON object containing the DeleteVolumeInput$VolumeARN to delete.
 *
 * @public
 */
export interface DeleteVolumeInput {
  /**
   * The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to return a list of gateway volumes.
   *
   * @public
   */
  VolumeARN: string | undefined;
}

/**
 * A JSON object containing the Amazon Resource Name (ARN) of the storage volume that was deleted.
 *
 * @public
 */
export interface DeleteVolumeOutput {
  /**
   * The Amazon Resource Name (ARN) of the storage volume that was deleted. It is the same ARN you provided in the request.
   *
   * @public
   */
  VolumeARN?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAvailabilityMonitorTestInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface DescribeAvailabilityMonitorTestOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * The status of the high availability monitoring test. If a test hasn't been performed, the value of this field is null.
   *
   * @public
   */
  Status?: AvailabilityMonitorTestStatus | undefined;

  /**
   * The time the high availability monitoring test was started. If a test hasn't been performed, the value of this field is null.
   *
   * @public
   */
  StartTime?: Date | undefined;
}

/**
 * A JSON object containing the Amazon Resource Name (ARN) of the gateway.
 *
 * @public
 */
export interface DescribeBandwidthRateLimitInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * A JSON object containing the following fields:
 *
 * @public
 */
export interface DescribeBandwidthRateLimitOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * The average upload bandwidth rate limit in bits per second. This field does not appear in the response if the upload rate limit is not set.
   *
   * @public
   */
  AverageUploadRateLimitInBitsPerSec?: number | undefined;

  /**
   * The average download bandwidth rate limit in bits per second. This field does not appear in the response if the download rate limit is not set.
   *
   * @public
   */
  AverageDownloadRateLimitInBitsPerSec?: number | undefined;
}

/**
 * @public
 */
export interface DescribeBandwidthRateLimitScheduleInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface DescribeBandwidthRateLimitScheduleOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * An array that contains the bandwidth rate limit intervals for a tape or volume gateway.
   *
   * @public
   */
  BandwidthRateLimitIntervals?: BandwidthRateLimitInterval[] | undefined;
}

/**
 * @public
 */
export interface DescribeCacheInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface DescribeCacheOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * An array of strings that identify disks that are to be configured as working storage. Each string has a minimum length of 1 and maximum length of 300. You can get the disk IDs from the ListLocalDisks API.
   *
   * @public
   */
  DiskIds?: string[] | undefined;

  /**
   * The amount of cache in bytes allocated to a gateway.
   *
   * @public
   */
  CacheAllocatedInBytes?: number | undefined;

  /**
   * Percent use of the gateway's cache storage. This metric applies only to the gateway-cached volume setup. The sample is taken at the end of the reporting period.
   *
   * @public
   */
  CacheUsedPercentage?: number | undefined;

  /**
   * The file share's contribution to the overall percentage of the gateway's cache that has not been persisted to Amazon Web Services. The sample is taken at the end of the reporting period.
   *
   * @public
   */
  CacheDirtyPercentage?: number | undefined;

  /**
   * Percent of application read operations from the file shares that are served from cache. The sample is taken at the end of the reporting period.
   *
   * @public
   */
  CacheHitPercentage?: number | undefined;

  /**
   * Percent of application read operations from the file shares that are not served from cache. The sample is taken at the end of the reporting period.
   *
   * @public
   */
  CacheMissPercentage?: number | undefined;
}

/**
 * @public
 */
export interface DescribeCachediSCSIVolumesInput {
  /**
   * An array of strings where each string represents the Amazon Resource Name (ARN) of a cached volume. All of the specified cached volumes must be from the same gateway. Use ListVolumes to get volume ARNs for a gateway.
   *
   * @public
   */
  VolumeARNs: string[] | undefined;
}

/**
 * A JSON object containing the following fields:
 *
 * @public
 */
export interface DescribeCachediSCSIVolumesOutput {
  /**
   * An array of objects where each object contains metadata about one cached volume.
   *
   * @public
   */
  CachediSCSIVolumes?: CachediSCSIVolume[] | undefined;
}

/**
 * @public
 */
export interface DescribeCacheReportInput {
  /**
   * The Amazon Resource Name (ARN) of the cache report you want to describe.
   *
   * @public
   */
  CacheReportARN: string | undefined;
}

/**
 * @public
 */
export interface DescribeCacheReportOutput {
  /**
   * Contains all informational fields associated with a cache report. Includes name, ARN, tags, status, progress, filters, start time, and end time.
   *
   * @public
   */
  CacheReportInfo?: CacheReportInfo | undefined;
}

/**
 * A JSON object containing the Amazon Resource Name (ARN) of the iSCSI volume target.
 *
 * @public
 */
export interface DescribeChapCredentialsInput {
  /**
   * The Amazon Resource Name (ARN) of the iSCSI volume target. Use the DescribeStorediSCSIVolumes operation to return to retrieve the TargetARN for specified VolumeARN.
   *
   * @public
   */
  TargetARN: string | undefined;
}

/**
 * A JSON object containing the following fields:
 *
 * @public
 */
export interface DescribeChapCredentialsOutput {
  /**
   * An array of ChapInfo objects that represent CHAP credentials. Each object in the array contains CHAP credential information for one target-initiator pair. If no CHAP credentials are set, an empty array is returned. CHAP credential information is provided in a JSON object with the following fields:
   *
   * - **InitiatorName**: The iSCSI initiator that connects to the target.
   * - **SecretToAuthenticateInitiator**: The secret key that the initiator (for example, the Windows client) must provide to participate in mutual CHAP with the target.
   * - **SecretToAuthenticateTarget**: The secret key that the target must provide to participate in mutual CHAP with the initiator (e.g. Windows client).
   * - **TargetARN**: The Amazon Resource Name (ARN) of the storage volume.
   *
   * @public
   */
  ChapCredentials?: ChapInfo[] | undefined;
}

/**
 * @public
 */
export interface DescribeFileSystemAssociationsInput {
  /**
   * An array containing the Amazon Resource Name (ARN) of each file system association to be described.
   *
   * @public
   */
  FileSystemAssociationARNList: string[] | undefined;
}

/**
 * Detailed information on file system association status.
 *
 * @public
 */
export interface FileSystemAssociationStatusDetail {
  /**
   * The error code for a given file system association status.
   *
   * @public
   */
  ErrorCode?: string | undefined;
}

/**
 * Describes the object returned by `DescribeFileSystemAssociations` that describes a created file system association.
 *
 * @public
 */
export interface FileSystemAssociationInfo {
  /**
   * The Amazon Resource Name (ARN) of the file system association.
   *
   * @public
   */
  FileSystemAssociationARN?: string | undefined;

  /**
   * The ARN of the backend Amazon FSx file system used for storing file data. For information, see [FileSystem](https://docs.aws.amazon.com/fsx/latest/APIReference/API_FileSystem.html) in the *Amazon FSx API Reference*.
   *
   * @public
   */
  LocationARN?: string | undefined;

  /**
   * The status of the file system association. Valid Values: `AVAILABLE` | `CREATING` | `DELETING` | `FORCE_DELETING` | `UPDATING` | `ERROR`
   *
   * @public
   */
  FileSystemAssociationStatus?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the storage used for the audit logs.
   *
   * @public
   */
  AuditDestinationARN?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * A list of up to 50 tags assigned to the SMB file share, sorted alphabetically by key name. Each tag is a key-value pair.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The refresh cache information for the file share or FSx file systems.
   *
   * @public
   */
  CacheAttributes?: CacheAttributes | undefined;

  /**
   * Specifies network configuration information for the gateway associated with the Amazon FSx file system.
   *
   * > **Note:** If multiple file systems are associated with this gateway, this parameter's `IpAddresses` field is required.
   *
   * @public
   */
  EndpointNetworkConfiguration?: EndpointNetworkConfiguration | undefined;

  /**
   * An array containing the FileSystemAssociationStatusDetail data type, which provides detailed information on file system association status.
   *
   * @public
   */
  FileSystemAssociationStatusDetails?: FileSystemAssociationStatusDetail[] | undefined;
}

/**
 * @public
 */
export interface DescribeFileSystemAssociationsOutput {
  /**
   * An array containing the `FileSystemAssociationInfo` data type of each file system association to be described.
   *
   * @public
   */
  FileSystemAssociationInfoList?: FileSystemAssociationInfo[] | undefined;
}

/**
 * A JSON object containing the ID of the gateway.
 *
 * @public
 */
export interface DescribeGatewayInformationInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * Describes a gateway's network interface.
 *
 * @public
 */
export interface NetworkInterface {
  /**
   * The Internet Protocol version 4 (IPv4) address of the interface.
   *
   * @public
   */
  Ipv4Address?: string | undefined;

  /**
   * The Media Access Control (MAC) address of the interface.
   *
   * > **Note:** This is currently unsupported and will not be returned in output.
   *
   * @public
   */
  MacAddress?: string | undefined;

  /**
   * The Internet Protocol version 6 (IPv6) address of the interface.
   *
   * > **Note:** This element returns IPv6 addresses for all gateway types except FSx File Gateway.
   *
   * @public
   */
  Ipv6Address?: string | undefined;
}

/**
 * A JSON object containing the following fields:
 *
 * @public
 */
export interface DescribeGatewayInformationOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * The unique identifier assigned to your gateway during activation. This ID becomes part of the gateway Amazon Resource Name (ARN), which you use as input for other operations.
   *
   * @public
   */
  GatewayId?: string | undefined;

  /**
   * The name you configured for your gateway.
   *
   * @public
   */
  GatewayName?: string | undefined;

  /**
   * A value that indicates the time zone configured for the gateway.
   *
   * @public
   */
  GatewayTimezone?: string | undefined;

  /**
   * A value that indicates the operating state of the gateway.
   *
   * @public
   */
  GatewayState?: string | undefined;

  /**
   * A NetworkInterface array that contains descriptions of the gateway network interfaces.
   *
   * @public
   */
  GatewayNetworkInterfaces?: NetworkInterface[] | undefined;

  /**
   * The type of the gateway.
   *
   * > **Important:** Amazon FSx File Gateway is no longer available to new customers. Existing customers of FSx File Gateway can continue to use the service normally. For capabilities similar to FSx File Gateway, visit [this blog post](https://aws.amazon.com/blogs/storage/switch-your-file-share-access-from-amazon-fsx-file-gateway-to-amazon-fsx-for-windows-file-server/).
   *
   * @public
   */
  GatewayType?: string | undefined;

  /**
   * The date on which an update to the gateway is available. This date is in the time zone of the gateway. If the gateway is not available for an update this field is not returned in the response.
   *
   * @public
   */
  NextUpdateAvailabilityDate?: string | undefined;

  /**
   * The date on which the last software update was applied to the gateway. If the gateway has never been updated, this field does not return a value in the response. This only only exist and returns once it have been chosen and set by the SGW service, based on the OS version of the gateway VM
   *
   * @public
   */
  LastSoftwareUpdate?: string | undefined;

  /**
   * The ID of the Amazon EC2 instance that was used to launch the gateway.
   *
   * @public
   */
  Ec2InstanceId?: string | undefined;

  /**
   * The Amazon Web Services Region where the Amazon EC2 instance is located.
   *
   * @public
   */
  Ec2InstanceRegion?: string | undefined;

  /**
   * A list of up to 50 tags assigned to the gateway, sorted alphabetically by key name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all tags using the `ListTagsForResource` API operation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The configuration settings for the virtual private cloud (VPC) endpoint for your gateway.
   *
   * @public
   */
  VPCEndpoint?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that is used to monitor events in the gateway. This field only only exist and returns once it have been chosen and set by the SGW service, based on the OS version of the gateway VM
   *
   * @public
   */
  CloudWatchLogGroupARN?: string | undefined;

  /**
   * The type of hardware or software platform on which the gateway is running.
   *
   * > **Note:** Tape Gateway is no longer available on Snow Family devices.
   *
   * @public
   */
  HostEnvironment?: HostEnvironment | undefined;

  /**
   * The type of endpoint for your gateway.
   *
   * Valid Values: `STANDARD` | `FIPS`
   *
   * @public
   */
  EndpointType?: string | undefined;

  /**
   * Date after which this gateway will not receive software updates for new features.
   *
   * @public
   */
  SoftwareUpdatesEndDate?: string | undefined;

  /**
   * Date after which this gateway will not receive software updates for new features and bug fixes.
   *
   * @public
   */
  DeprecationDate?: string | undefined;

  /**
   * Specifies the size of the gateway's metadata cache.
   *
   * @public
   */
  GatewayCapacity?: GatewayCapacity | undefined;

  /**
   * A list of the metadata cache sizes that the gateway can support based on its current hardware specifications.
   *
   * @public
   */
  SupportedGatewayCapacities?: GatewayCapacity[] | undefined;

  /**
   * A unique identifier for the specific instance of the host platform running the gateway. This value is only available for certain host environments, and its format depends on the host environment type.
   *
   * @public
   */
  HostEnvironmentId?: string | undefined;

  /**
   * The version number of the software running on the gateway appliance.
   *
   * @public
   */
  SoftwareVersion?: string | undefined;
}

/**
 * A JSON object containing the Amazon Resource Name (ARN) of the gateway.
 *
 * @public
 */
export interface DescribeMaintenanceStartTimeInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * A set of variables indicating the software update preferences for the gateway.
 *
 * @public
 */
export interface SoftwareUpdatePreferences {
  /**
   * Indicates the automatic update policy for a gateway.
   *
   * `ALL_VERSIONS` - Enables regular gateway maintenance updates.
   *
   * `EMERGENCY_VERSIONS_ONLY` - Disables regular gateway maintenance updates. The gateway will still receive emergency version updates on rare occasions if necessary to remedy highly critical security or durability issues. You will be notified before an emergency version update is applied. These updates are applied during your gateway's scheduled maintenance window.
   *
   * @public
   */
  AutomaticUpdatePolicy?: AutomaticUpdatePolicy | undefined;
}

/**
 * A JSON object containing the following fields:
 *
 * - DescribeMaintenanceStartTimeOutput$SoftwareUpdatePreferences
 * - DescribeMaintenanceStartTimeOutput$DayOfMonth
 * - DescribeMaintenanceStartTimeOutput$DayOfWeek
 * - DescribeMaintenanceStartTimeOutput$HourOfDay
 * - DescribeMaintenanceStartTimeOutput$MinuteOfHour
 * - DescribeMaintenanceStartTimeOutput$Timezone
 *
 * @public
 */
export interface DescribeMaintenanceStartTimeOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * The hour component of the maintenance start time represented as *hh*, where *hh* is the hour (0 to 23). The hour of the day is in the time zone of the gateway.
   *
   * @public
   */
  HourOfDay?: number | undefined;

  /**
   * The minute component of the maintenance start time represented as *mm*, where *mm* is the minute (0 to 59). The minute of the hour is in the time zone of the gateway.
   *
   * @public
   */
  MinuteOfHour?: number | undefined;

  /**
   * An ordinal number between 0 and 6 that represents the day of the week, where 0 represents Sunday and 6 represents Saturday. The day of week is in the time zone of the gateway.
   *
   * @public
   */
  DayOfWeek?: number | undefined;

  /**
   * The day of the month component of the maintenance start time represented as an ordinal number from 1 to 28, where 1 represents the first day of the month. It is not possible to set the maintenance schedule to start on days 29 through 31.
   *
   * @public
   */
  DayOfMonth?: number | undefined;

  /**
   * A value that indicates the time zone that is set for the gateway. The start time and day of week specified should be in the time zone of the gateway.
   *
   * @public
   */
  Timezone?: string | undefined;

  /**
   * A set of variables indicating the software update preferences for the gateway.
   *
   * Includes `AutomaticUpdatePolicy` parameter with the following inputs:
   *
   * `ALL_VERSIONS` - Enables regular gateway maintenance updates.
   *
   * `EMERGENCY_VERSIONS_ONLY` - Disables regular gateway maintenance updates. The gateway will still receive emergency version updates on rare occasions if necessary to remedy highly critical security or durability issues. You will be notified before an emergency version update is applied. These updates are applied during your gateway's scheduled maintenance window.
   *
   * @public
   */
  SoftwareUpdatePreferences?: SoftwareUpdatePreferences | undefined;
}

/**
 * DescribeNFSFileSharesInput
 *
 * @public
 */
export interface DescribeNFSFileSharesInput {
  /**
   * An array containing the Amazon Resource Name (ARN) of each file share to be described.
   *
   * @public
   */
  FileShareARNList: string[] | undefined;
}

/**
 * The Unix file permissions and ownership information assigned, by default, to native S3 objects when an S3 File Gateway discovers them in S3 buckets. This operation is only supported in S3 File Gateways.
 *
 * @public
 */
export interface NFSFileShareInfo {
  /**
   * Describes Network File System (NFS) file share default values. Files and folders stored as Amazon S3 objects in S3 buckets don't, by default, have Unix file permissions assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3 objects that represent files and folders are assigned these default Unix permissions. This operation is only supported for S3 File Gateways.
   *
   * @public
   */
  NFSFileShareDefaults?: NFSFileShareDefaults | undefined;

  /**
   * The Amazon Resource Name (ARN) of the file share.
   *
   * @public
   */
  FileShareARN?: string | undefined;

  /**
   * The ID of the file share.
   *
   * @public
   */
  FileShareId?: string | undefined;

  /**
   * The status of the file share.
   *
   * Valid Values: `CREATING` | `UPDATING` | `AVAILABLE` | `DELETING`
   *
   * @public
   */
  FileShareStatus?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * A value that specifies the type of server-side encryption that the file share will use for the data that it stores in Amazon S3.
   *
   * > **Note:**
   * >
   * > We recommend using `EncryptionType` instead of `KMSEncrypted` to set the file share encryption method. You do not need to provide values for both parameters.
   * >
   * > If values for both parameters exist in the same request, then the specified encryption methods must not conflict. For example, if `EncryptionType` is `SseS3`, then `KMSEncrypted` must be `false`. If `EncryptionType` is `SseKms` or `DsseKms`, then `KMSEncrypted` must be `true`.
   *
   * @public
   */
  EncryptionType?: EncryptionType | undefined;

  /**
   * Optional. Set to `true` to use Amazon S3 server-side encryption with your own KMS key (SSE-KMS), or `false` to use a key managed by Amazon S3 (SSE-S3). To use dual-layer encryption (DSSE-KMS), set the `EncryptionType` parameter instead.
   *
   * > **Note:**
   * >
   * > We recommend using `EncryptionType` instead of `KMSEncrypted` to set the file share encryption method. You do not need to provide values for both parameters.
   * >
   * > If values for both parameters exist in the same request, then the specified encryption methods must not conflict. For example, if `EncryptionType` is `SseS3`, then `KMSEncrypted` must be `false`. If `EncryptionType` is `SseKms` or `DsseKms`, then `KMSEncrypted` must be `true`.
   *
   * Valid Values: `true` | `false`
   *
   * @deprecated KMSEncrypted is deprecated, use EncryptionType instead.
   * @public
   */
  KMSEncrypted?: boolean | undefined;

  /**
   * Optional. The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value must be set if `KMSEncrypted` is `true`, or if `EncryptionType` is `SseKms` or `DsseKms`.
   *
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * The file share path used by the NFS client to identify the mount point.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The ARN of the IAM role that an S3 File Gateway assumes when it accesses the underlying storage.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * A custom ARN for the backend storage used for storing data for file shares. It includes a resource ARN with an optional prefix concatenation. The prefix must end with a forward slash (/).
   *
   * > **Note:**
   * >
   * > You can specify LocationARN as a bucket ARN, access point ARN or access point alias, as shown in the following examples.
   * >
   * > Bucket ARN:
   * >
   * > `arn:aws:s3:::amzn-s3-demo-bucket/prefix/`
   * >
   * > Access point ARN:
   * >
   * > `arn:aws:s3:region:account-id:accesspoint/access-point-name/prefix/`
   * >
   * > If you specify an access point, the bucket policy must be configured to delegate access control to the access point. For information, see [Delegating access control to access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html#access-points-delegating-control) in the *Amazon S3 User Guide*.
   * >
   * > Access point alias:
   * >
   * > `test-ap-ab123cdef4gehijklmn5opqrstuvuse1a-s3alias`
   *
   * @public
   */
  LocationARN?: string | undefined;

  /**
   * The default storage class for objects put into an Amazon S3 bucket by the S3 File Gateway. The default value is `S3_STANDARD`. Optional.
   *
   * Valid Values: `S3_STANDARD` | `S3_INTELLIGENT_TIERING` | `S3_STANDARD_IA` | `S3_ONEZONE_IA`
   *
   * @public
   */
  DefaultStorageClass?: string | undefined;

  /**
   * A value that sets the access control list (ACL) permission for objects in the S3 bucket that an S3 File Gateway puts objects into. The default value is `private`.
   *
   * @public
   */
  ObjectACL?: ObjectACL | undefined;

  /**
   * The list of clients that are allowed to access the S3 File Gateway. The list must contain either valid IPv4/IPv6 addresses or valid CIDR blocks.
   *
   * @public
   */
  ClientList?: string[] | undefined;

  /**
   * The user mapped to anonymous user. Valid options are the following:
   *
   * - `RootSquash`: Only root is mapped to anonymous user.
   * - `NoSquash`: No one is mapped to anonymous user.
   * - `AllSquash`: Everyone is mapped to anonymous user.
   *
   * @public
   */
  Squash?: string | undefined;

  /**
   * A value that sets the write status of a file share. Set this value to `true` to set the write status to read-only, otherwise set to `false`.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  ReadOnly?: boolean | undefined;

  /**
   * A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to `true` to enable MIME type guessing, otherwise set to `false`. The default value is `true`.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  GuessMIMETypeEnabled?: boolean | undefined;

  /**
   * A value that sets who pays the cost of the request and the cost associated with data download from the S3 bucket. If this value is set to `true`, the requester pays the costs; otherwise, the S3 bucket owner pays. However, the S3 bucket owner always pays the cost of storing data.
   *
   * > **Note:** `RequesterPays` is a configuration for the S3 bucket that backs the file share, so make sure that the configuration on the file share is the same as the S3 bucket configuration.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  RequesterPays?: boolean | undefined;

  /**
   * A list of up to 50 tags assigned to the NFS file share, sorted alphabetically by key name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all tags using the `ListTagsForResource` API operation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The name of the file share. Optional.
   *
   * > **Note:** `FileShareName` must be set if an S3 prefix name is set in `LocationARN`, or if an access point or access point alias is used.
   *
   * @public
   */
  FileShareName?: string | undefined;

  /**
   * Refresh cache information for the file share.
   *
   * @public
   */
  CacheAttributes?: CacheAttributes | undefined;

  /**
   * The notification policy of the file share. `SettlingTimeInSeconds` controls the number of seconds to wait after the last point in time a client wrote to a file before generating an `ObjectUploaded` notification. Because clients can make many small writes to files, it's best to set this parameter for as long as possible to avoid generating multiple notifications for the same file in a small time period.
   *
   * > **Note:**
   * >
   * > `SettlingTimeInSeconds` has no effect on the timing of the object uploading to Amazon S3, only the timing of the notification.
   * >
   * > This setting is not meant to specify an exact time at which the notification will be sent. In some cases, the gateway might require more than the specified delay time to generate and send notifications.
   *
   * The following example sets `NotificationPolicy` on with `SettlingTimeInSeconds` set to 60.
   *
   * `\{\"Upload\": \{\"SettlingTimeInSeconds\": 60\}\}`
   *
   * The following example sets `NotificationPolicy` off.
   *
   * `\{\}`
   *
   * @public
   */
  NotificationPolicy?: string | undefined;

  /**
   * Specifies the DNS name for the VPC endpoint that the NFS file share uses to connect to Amazon S3.
   *
   * > **Note:** This parameter is required for NFS file shares that connect to Amazon S3 through a VPC endpoint, a VPC access point, or an access point alias that points to a VPC access point.
   *
   * @public
   */
  VPCEndpointDNSName?: string | undefined;

  /**
   * Specifies the Region of the S3 bucket where the NFS file share stores files.
   *
   * > **Note:** This parameter is required for NFS file shares that connect to Amazon S3 through a VPC endpoint, a VPC access point, or an access point alias that points to a VPC access point.
   *
   * @public
   */
  BucketRegion?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the storage used for audit logs.
   *
   * @public
   */
  AuditDestinationARN?: string | undefined;
}

/**
 * DescribeNFSFileSharesOutput
 *
 * @public
 */
export interface DescribeNFSFileSharesOutput {
  /**
   * An array containing a description for each requested file share.
   *
   * @public
   */
  NFSFileShareInfoList?: NFSFileShareInfo[] | undefined;
}

/**
 * DescribeSMBFileSharesInput
 *
 * @public
 */
export interface DescribeSMBFileSharesInput {
  /**
   * An array containing the Amazon Resource Name (ARN) of each file share to be described.
   *
   * @public
   */
  FileShareARNList: string[] | undefined;
}

/**
 * The Windows file permissions and ownership information assigned, by default, to native S3 objects when S3 File Gateway discovers them in S3 buckets. This operation is only supported for S3 File Gateways.
 *
 * @public
 */
export interface SMBFileShareInfo {
  /**
   * The Amazon Resource Name (ARN) of the file share.
   *
   * @public
   */
  FileShareARN?: string | undefined;

  /**
   * The ID of the file share.
   *
   * @public
   */
  FileShareId?: string | undefined;

  /**
   * The status of the file share.
   *
   * Valid Values: `CREATING` | `UPDATING` | `AVAILABLE` | `DELETING`
   *
   * @public
   */
  FileShareStatus?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * A value that specifies the type of server-side encryption that the file share will use for the data that it stores in Amazon S3.
   *
   * > **Note:**
   * >
   * > We recommend using `EncryptionType` instead of `KMSEncrypted` to set the file share encryption method. You do not need to provide values for both parameters.
   * >
   * > If values for both parameters exist in the same request, then the specified encryption methods must not conflict. For example, if `EncryptionType` is `SseS3`, then `KMSEncrypted` must be `false`. If `EncryptionType` is `SseKms` or `DsseKms`, then `KMSEncrypted` must be `true`.
   *
   * @public
   */
  EncryptionType?: EncryptionType | undefined;

  /**
   * Optional. Set to `true` to use Amazon S3 server-side encryption with your own KMS key (SSE-KMS), or `false` to use a key managed by Amazon S3 (SSE-S3). To use dual-layer encryption (DSSE-KMS), set the `EncryptionType` parameter instead.
   *
   * > **Note:**
   * >
   * > We recommend using `EncryptionType` instead of `KMSEncrypted` to set the file share encryption method. You do not need to provide values for both parameters.
   * >
   * > If values for both parameters exist in the same request, then the specified encryption methods must not conflict. For example, if `EncryptionType` is `SseS3`, then `KMSEncrypted` must be `false`. If `EncryptionType` is `SseKms` or `DsseKms`, then `KMSEncrypted` must be `true`.
   *
   * Valid Values: `true` | `false`
   *
   * @deprecated KMSEncrypted is deprecated, use EncryptionType instead.
   * @public
   */
  KMSEncrypted?: boolean | undefined;

  /**
   * Optional. The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value must be set if `KMSEncrypted` is `true`, or if `EncryptionType` is `SseKms` or `DsseKms`.
   *
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * The file share path used by the SMB client to identify the mount point.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The ARN of the IAM role that an S3 File Gateway assumes when it accesses the underlying storage.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * A custom ARN for the backend storage used for storing data for file shares. It includes a resource ARN with an optional prefix concatenation. The prefix must end with a forward slash (/).
   *
   * > **Note:**
   * >
   * > You can specify LocationARN as a bucket ARN, access point ARN or access point alias, as shown in the following examples.
   * >
   * > Bucket ARN:
   * >
   * > `arn:aws:s3:::amzn-s3-demo-bucket/prefix/`
   * >
   * > Access point ARN:
   * >
   * > `arn:aws:s3:region:account-id:accesspoint/access-point-name/prefix/`
   * >
   * > If you specify an access point, the bucket policy must be configured to delegate access control to the access point. For information, see [Delegating access control to access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html#access-points-delegating-control) in the *Amazon S3 User Guide*.
   * >
   * > Access point alias:
   * >
   * > `test-ap-ab123cdef4gehijklmn5opqrstuvuse1a-s3alias`
   *
   * @public
   */
  LocationARN?: string | undefined;

  /**
   * The default storage class for objects put into an Amazon S3 bucket by the S3 File Gateway. The default value is `S3_STANDARD`. Optional.
   *
   * Valid Values: `S3_STANDARD` | `S3_INTELLIGENT_TIERING` | `S3_STANDARD_IA` | `S3_ONEZONE_IA`
   *
   * @public
   */
  DefaultStorageClass?: string | undefined;

  /**
   * A value that sets the access control list (ACL) permission for objects in the S3 bucket that an S3 File Gateway puts objects into. The default value is `private`.
   *
   * @public
   */
  ObjectACL?: ObjectACL | undefined;

  /**
   * A value that sets the write status of a file share. Set this value to `true` to set the write status to read-only, otherwise set to `false`.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  ReadOnly?: boolean | undefined;

  /**
   * A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to `true` to enable MIME type guessing, otherwise set to `false`. The default value is `true`.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  GuessMIMETypeEnabled?: boolean | undefined;

  /**
   * A value that sets who pays the cost of the request and the cost associated with data download from the S3 bucket. If this value is set to `true`, the requester pays the costs; otherwise, the S3 bucket owner pays. However, the S3 bucket owner always pays the cost of storing data.
   *
   * > **Note:** `RequesterPays` is a configuration for the S3 bucket that backs the file share, so make sure that the configuration on the file share is the same as the S3 bucket configuration.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  RequesterPays?: boolean | undefined;

  /**
   * If this value is set to `true`, it indicates that access control list (ACL) is enabled on the SMB file share. If it is set to `false`, it indicates that file and directory permissions are mapped to the POSIX permission.
   *
   * For more information, see [Using Windows ACLs to limit SMB file share access](https://docs.aws.amazon.com/filegateway/latest/files3/smb-acl.html) in the *Amazon S3 File Gateway User Guide*.
   *
   * @public
   */
  SMBACLEnabled?: boolean | undefined;

  /**
   * Indicates whether `AccessBasedEnumeration` is enabled.
   *
   * @public
   */
  AccessBasedEnumeration?: boolean | undefined;

  /**
   * A list of users or groups in the Active Directory that have administrator rights to the file share. A group must be prefixed with the @ character. Acceptable formats include: `DOMAIN\User1`, `user1`, `@group1`, and `@DOMAIN\group1`. Can only be set if Authentication is set to `ActiveDirectory`.
   *
   * @public
   */
  AdminUserList?: string[] | undefined;

  /**
   * A list of users or groups in the Active Directory that are allowed to access the file share. A group must be prefixed with the @ character. Acceptable formats include: `DOMAIN\User1`, `user1`, `@group1`, and `@DOMAIN\group1`. Can only be set if Authentication is set to `ActiveDirectory`.
   *
   * @public
   */
  ValidUserList?: string[] | undefined;

  /**
   * A list of users or groups in the Active Directory that are not allowed to access the file share. A group must be prefixed with the @ character. Acceptable formats include: `DOMAIN\User1`, `user1`, `@group1`, and `@DOMAIN\group1`. Can only be set if Authentication is set to `ActiveDirectory`.
   *
   * @public
   */
  InvalidUserList?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the storage used for audit logs.
   *
   * @public
   */
  AuditDestinationARN?: string | undefined;

  /**
   * The authentication method of the file share. The default is `ActiveDirectory`.
   *
   * Valid Values: `ActiveDirectory` | `GuestAccess`
   *
   * @public
   */
  Authentication?: string | undefined;

  /**
   * The case of an object name in an Amazon S3 bucket. For `ClientSpecified`, the client determines the case sensitivity. For `CaseSensitive`, the gateway determines the case sensitivity. The default value is `ClientSpecified`.
   *
   * @public
   */
  CaseSensitivity?: CaseSensitivity | undefined;

  /**
   * A list of up to 50 tags assigned to the SMB file share, sorted alphabetically by key name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all tags using the `ListTagsForResource` API operation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The name of the file share. Optional.
   *
   * > **Note:** `FileShareName` must be set if an S3 prefix name is set in `LocationARN`, or if an access point or access point alias is used.
   *
   * @public
   */
  FileShareName?: string | undefined;

  /**
   * Refresh cache information for the file share.
   *
   * @public
   */
  CacheAttributes?: CacheAttributes | undefined;

  /**
   * The notification policy of the file share. `SettlingTimeInSeconds` controls the number of seconds to wait after the last point in time a client wrote to a file before generating an `ObjectUploaded` notification. Because clients can make many small writes to files, it's best to set this parameter for as long as possible to avoid generating multiple notifications for the same file in a small time period.
   *
   * > **Note:**
   * >
   * > `SettlingTimeInSeconds` has no effect on the timing of the object uploading to Amazon S3, only the timing of the notification.
   * >
   * > This setting is not meant to specify an exact time at which the notification will be sent. In some cases, the gateway might require more than the specified delay time to generate and send notifications.
   *
   * The following example sets `NotificationPolicy` on with `SettlingTimeInSeconds` set to 60.
   *
   * `\{\"Upload\": \{\"SettlingTimeInSeconds\": 60\}\}`
   *
   * The following example sets `NotificationPolicy` off.
   *
   * `\{\}`
   *
   * @public
   */
  NotificationPolicy?: string | undefined;

  /**
   * Specifies the DNS name for the VPC endpoint that the SMB file share uses to connect to Amazon S3.
   *
   * > **Note:** This parameter is required for SMB file shares that connect to Amazon S3 through a VPC endpoint, a VPC access point, or an access point alias that points to a VPC access point.
   *
   * @public
   */
  VPCEndpointDNSName?: string | undefined;

  /**
   * Specifies the Region of the S3 bucket where the SMB file share stores files.
   *
   * > **Note:** This parameter is required for SMB file shares that connect to Amazon S3 through a VPC endpoint, a VPC access point, or an access point alias that points to a VPC access point.
   *
   * @public
   */
  BucketRegion?: string | undefined;

  /**
   * Specifies whether opportunistic locking is enabled for the SMB file share.
   *
   * > **Note:** Enabling opportunistic locking on case-sensitive shares is not recommended for workloads that involve access to files with the same name in different case.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  OplocksEnabled?: boolean | undefined;
}

/**
 * DescribeSMBFileSharesOutput
 *
 * @public
 */
export interface DescribeSMBFileSharesOutput {
  /**
   * An array containing a description for each requested file share.
   *
   * @public
   */
  SMBFileShareInfoList?: SMBFileShareInfo[] | undefined;
}

/**
 * @public
 */
export interface DescribeSMBSettingsInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * A list of Active Directory users and groups that have special permissions for SMB file shares on the gateway.
 *
 * @public
 */
export interface SMBLocalGroups {
  /**
   * A list of Active Directory users and groups that have local Gateway Admin permissions. Acceptable formats include: `DOMAIN\User1`, `user1`, `DOMAIN\group1`, and `group1`.
   *
   * Gateway Admins can use the Shared Folders Microsoft Management Console snap-in to force-close files that are open and locked.
   *
   * @public
   */
  GatewayAdmins?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeSMBSettingsOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * The name of the domain that the gateway is joined to.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * Indicates the status of a gateway that is a member of the Active Directory domain.
   *
   * > **Note:** This field is only used as part of a `JoinDomain` request. It is not affected by Active Directory connectivity changes that occur after the `JoinDomain` request succeeds.
   *
   * - `ACCESS_DENIED`: Indicates that the `JoinDomain` operation failed due to an authentication error.
   * - `DETACHED`: Indicates that gateway is not joined to a domain.
   * - `JOINED`: Indicates that the gateway has successfully joined a domain.
   * - `JOINING`: Indicates that a `JoinDomain` operation is in progress.
   * - `NETWORK_ERROR`: Indicates that `JoinDomain` operation failed due to a network or connectivity error.
   * - `TIMEOUT`: Indicates that the `JoinDomain` operation failed because the operation didn't complete within the allotted time.
   * - `UNKNOWN_ERROR`: Indicates that the `JoinDomain` operation failed due to another type of error.
   *
   * @public
   */
  ActiveDirectoryStatus?: ActiveDirectoryStatus | undefined;

  /**
   * This value is `true` if a password for the guest user `smbguest` is set, otherwise `false`. Only supported for S3 File Gateways.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  SMBGuestPasswordSet?: boolean | undefined;

  /**
   * The type of security strategy that was specified for file gateway.
   *
   * - `ClientSpecified`: If you choose this option, requests are established based on what is negotiated by the client. This option is recommended when you want to maximize compatibility across different clients in your environment. Supported only for S3 File Gateway.
   * - `MandatorySigning`: If you choose this option, File Gateway only allows connections from SMBv2 or SMBv3 clients that have signing turned on. This option works with SMB clients on Microsoft Windows Vista, Windows Server 2008, or later.
   * - `MandatoryEncryption`: If you choose this option, File Gateway only allows connections from SMBv3 clients that have encryption turned on. Both 256-bit and 128-bit algorithms are allowed. This option is recommended for environments that handle sensitive data. It works with SMB clients on Microsoft Windows 8, Windows Server 2012, or later.
   * - `MandatoryEncryptionNoAes128`: If you choose this option, File Gateway only allows connections from SMBv3 clients that use 256-bit AES encryption algorithms. 128-bit algorithms are not allowed. This option is recommended for environments that handle sensitive data. It works with SMB clients on Microsoft Windows 8, Windows Server 2012, or later.
   *
   * @public
   */
  SMBSecurityStrategy?: SMBSecurityStrategy | undefined;

  /**
   * The shares on this gateway appear when listing shares. Only supported for S3 File Gateways.
   *
   * @public
   */
  FileSharesVisible?: boolean | undefined;

  /**
   * A list of Active Directory users and groups that have special permissions for SMB file shares on the gateway.
   *
   * @public
   */
  SMBLocalGroups?: SMBLocalGroups | undefined;
}

/**
 * A JSON object containing the DescribeSnapshotScheduleInput$VolumeARN of the volume.
 *
 * @public
 */
export interface DescribeSnapshotScheduleInput {
  /**
   * The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to return a list of gateway volumes.
   *
   * @public
   */
  VolumeARN: string | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotScheduleOutput {
  /**
   * The Amazon Resource Name (ARN) of the volume that was specified in the request.
   *
   * @public
   */
  VolumeARN?: string | undefined;

  /**
   * The hour of the day at which the snapshot schedule begins represented as *hh*, where *hh* is the hour (0 to 23). The hour of the day is in the time zone of the gateway.
   *
   * @public
   */
  StartAt?: number | undefined;

  /**
   * The number of hours between snapshots.
   *
   * @public
   */
  RecurrenceInHours?: number | undefined;

  /**
   * The snapshot description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A value that indicates the time zone of the gateway.
   *
   * @public
   */
  Timezone?: string | undefined;

  /**
   * A list of up to 50 tags assigned to the snapshot schedule, sorted alphabetically by key name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all tags using the `ListTagsForResource` API operation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * A JSON object containing a list of DescribeStorediSCSIVolumesInput$VolumeARNs.
 *
 * @public
 */
export interface DescribeStorediSCSIVolumesInput {
  /**
   * An array of strings where each string represents the Amazon Resource Name (ARN) of a stored volume. All of the specified stored volumes must be from the same gateway. Use ListVolumes to get volume ARNs for a gateway.
   *
   * @public
   */
  VolumeARNs: string[] | undefined;
}

/**
 * Describes an iSCSI stored volume.
 *
 * @public
 */
export interface StorediSCSIVolume {
  /**
   * The Amazon Resource Name (ARN) of the storage volume.
   *
   * @public
   */
  VolumeARN?: string | undefined;

  /**
   * The unique identifier of the volume, e.g., vol-AE4B946D.
   *
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * One of the VolumeType enumeration values describing the type of the volume.
   *
   * @public
   */
  VolumeType?: string | undefined;

  /**
   * One of the VolumeStatus values that indicates the state of the storage volume.
   *
   * @public
   */
  VolumeStatus?: string | undefined;

  /**
   * A value that indicates whether a storage volume is attached to, detached from, or is in the process of detaching from a gateway. For more information, see [Moving your volumes to a different gateway](https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-volumes.html#attach-detach-volume).
   *
   * @public
   */
  VolumeAttachmentStatus?: string | undefined;

  /**
   * The size of the volume in bytes.
   *
   * @public
   */
  VolumeSizeInBytes?: number | undefined;

  /**
   * Represents the percentage complete if the volume is restoring or bootstrapping that represents the percent of data transferred. This field does not appear in the response if the stored volume is not restoring or bootstrapping.
   *
   * @public
   */
  VolumeProgress?: number | undefined;

  /**
   * The ID of the local disk that was specified in the CreateStorediSCSIVolume operation.
   *
   * @public
   */
  VolumeDiskId?: string | undefined;

  /**
   * If the stored volume was created from a snapshot, this field contains the snapshot ID used, e.g. snap-78e22663. Otherwise, this field is not included.
   *
   * @public
   */
  SourceSnapshotId?: string | undefined;

  /**
   * Indicates if when the stored volume was created, existing data on the underlying local disk was preserved.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  PreservedExistingData?: boolean | undefined;

  /**
   * An VolumeiSCSIAttributes object that represents a collection of iSCSI attributes for one stored volume.
   *
   * @public
   */
  VolumeiSCSIAttributes?: VolumeiSCSIAttributes | undefined;

  /**
   * The date the volume was created. Volumes created prior to March 28, 2017 don’t have this timestamp.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The size of the data stored on the volume in bytes. This value is calculated based on the number of blocks that are touched, instead of the actual amount of data written. This value can be useful for sequential write patterns but less accurate for random write patterns. `VolumeUsedInBytes` is different from the compressed size of the volume, which is the value that is used to calculate your bill.
   *
   * > **Note:** This value is not available for volumes created prior to May 13, 2015, until you store data on the volume.
   *
   * @public
   */
  VolumeUsedInBytes?: number | undefined;

  /**
   * Optional. The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value must be set if `KMSEncrypted` is `true`, or if `EncryptionType` is `SseKms` or `DsseKms`.
   *
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. For example, specifying `TargetName` as *myvolume* results in the target ARN of `arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume`. The target name must be unique across all volumes on a gateway.
   *
   * If you don't specify a value, Storage Gateway uses the value that was previously used for this volume as the new target name.
   *
   * @public
   */
  TargetName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStorediSCSIVolumesOutput {
  /**
   * Describes a single unit of output from DescribeStorediSCSIVolumes. The following fields are returned:
   *
   * - `ChapEnabled`: Indicates whether mutual CHAP is enabled for the iSCSI target.
   * - `LunNumber`: The logical disk number.
   * - `NetworkInterfaceId`: The network interface ID of the stored volume that initiator use to map the stored volume as an iSCSI target.
   * - `NetworkInterfacePort`: The port used to communicate with iSCSI targets.
   * - `PreservedExistingData`: Indicates when the stored volume was created, existing data on the underlying local disk was preserved.
   * - `SourceSnapshotId`: If the stored volume was created from a snapshot, this field contains the snapshot ID used, e.g. `snap-1122aabb`. Otherwise, this field is not included.
   * - `StorediSCSIVolumes`: An array of StorediSCSIVolume objects where each object contains metadata about one stored volume.
   * - `TargetARN`: The Amazon Resource Name (ARN) of the volume target.
   * - `VolumeARN`: The Amazon Resource Name (ARN) of the stored volume.
   * - `VolumeDiskId`: The disk ID of the local disk that was specified in the CreateStorediSCSIVolume operation.
   * - `VolumeId`: The unique identifier of the storage volume, e.g. `vol-1122AABB`.
   * - `VolumeiSCSIAttributes`: An VolumeiSCSIAttributes object that represents a collection of iSCSI attributes for one stored volume.
   * - `VolumeProgress`: Represents the percentage complete if the volume is restoring or bootstrapping that represents the percent of data transferred. This field does not appear in the response if the stored volume is not restoring or bootstrapping.
   * - `VolumeSizeInBytes`: The size of the volume in bytes.
   * - `VolumeStatus`: One of the `VolumeStatus` values that indicates the state of the volume.
   * - `VolumeType`: One of the enumeration values describing the type of the volume. Currently, only `STORED` volumes are supported.
   *
   * @public
   */
  StorediSCSIVolumes?: StorediSCSIVolume[] | undefined;
}

/**
 * DescribeTapeArchivesInput
 *
 * @public
 */
export interface DescribeTapeArchivesInput {
  /**
   * Specifies one or more unique Amazon Resource Names (ARNs) that represent the virtual tapes you want to describe.
   *
   * @public
   */
  TapeARNs?: string[] | undefined;

  /**
   * An opaque string that indicates the position at which to begin describing virtual tapes.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Specifies that the number of virtual tapes described be limited to the specified number.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * Represents a virtual tape that is archived in the virtual tape shelf (VTS).
 *
 * @public
 */
export interface TapeArchive {
  /**
   * The Amazon Resource Name (ARN) of an archived virtual tape.
   *
   * @public
   */
  TapeARN?: string | undefined;

  /**
   * The barcode that identifies the archived virtual tape.
   *
   * @public
   */
  TapeBarcode?: string | undefined;

  /**
   * The date the virtual tape was created.
   *
   * @public
   */
  TapeCreatedDate?: Date | undefined;

  /**
   * The size, in bytes, of the archived virtual tape.
   *
   * @public
   */
  TapeSizeInBytes?: number | undefined;

  /**
   * The time that the archiving of the virtual tape was completed.
   *
   * The default timestamp format is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z' format.
   *
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the tape gateway that the virtual tape is being retrieved to.
   *
   * The virtual tape is retrieved from the virtual tape shelf (VTS).
   *
   * @public
   */
  RetrievedTo?: string | undefined;

  /**
   * The current state of the archived virtual tape.
   *
   * @public
   */
  TapeStatus?: string | undefined;

  /**
   * The size, in bytes, of data stored on the virtual tape.
   *
   * > **Note:** This value is not available for tapes created prior to May 13, 2015.
   *
   * @public
   */
  TapeUsedInBytes?: number | undefined;

  /**
   * Optional. The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value must be set if `KMSEncrypted` is `true`, or if `EncryptionType` is `SseKms` or `DsseKms`.
   *
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * The ID of the pool that was used to archive the tape. The tapes in this pool are archived in the S3 storage class that is associated with the pool.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * Set to `true` if the archived tape is stored as write-once-read-many (WORM).
   *
   * @public
   */
  Worm?: boolean | undefined;

  /**
   * If the archived tape is subject to tape retention lock, the date that the archived tape started being retained.
   *
   * @public
   */
  RetentionStartDate?: Date | undefined;

  /**
   * The time that the tape entered the custom tape pool.
   *
   * The default timestamp format is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z' format.
   *
   * @public
   */
  PoolEntryDate?: Date | undefined;
}

/**
 * DescribeTapeArchivesOutput
 *
 * @public
 */
export interface DescribeTapeArchivesOutput {
  /**
   * An array of virtual tape objects in the virtual tape shelf (VTS). The description includes of the Amazon Resource Name (ARN) of the virtual tapes. The information returned includes the Amazon Resource Names (ARNs) of the tapes, size of the tapes, status of the tapes, progress of the description, and tape barcode.
   *
   * @public
   */
  TapeArchives?: TapeArchive[] | undefined;

  /**
   * An opaque string that indicates the position at which the virtual tapes that were fetched for description ended. Use this marker in your next request to fetch the next set of virtual tapes in the virtual tape shelf (VTS). If there are no more virtual tapes to describe, this field does not appear in the response.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * DescribeTapeRecoveryPointsInput
 *
 * @public
 */
export interface DescribeTapeRecoveryPointsInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * An opaque string that indicates the position at which to begin describing the virtual tape recovery points.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Specifies that the number of virtual tape recovery points that are described be limited to the specified number.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * Describes a recovery point.
 *
 * @public
 */
export interface TapeRecoveryPointInfo {
  /**
   * The Amazon Resource Name (ARN) of the virtual tape.
   *
   * @public
   */
  TapeARN?: string | undefined;

  /**
   * The time when the point-in-time view of the virtual tape was replicated for later recovery.
   *
   * The default timestamp format of the tape recovery point time is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z' format.
   *
   * @public
   */
  TapeRecoveryPointTime?: Date | undefined;

  /**
   * The size, in bytes, of the virtual tapes to recover.
   *
   * @public
   */
  TapeSizeInBytes?: number | undefined;

  /**
   * The status of the virtual tapes.
   *
   * @public
   */
  TapeStatus?: string | undefined;
}

/**
 * DescribeTapeRecoveryPointsOutput
 *
 * @public
 */
export interface DescribeTapeRecoveryPointsOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * An array of TapeRecoveryPointInfos that are available for the specified gateway.
   *
   * @public
   */
  TapeRecoveryPointInfos?: TapeRecoveryPointInfo[] | undefined;

  /**
   * An opaque string that indicates the position at which the virtual tape recovery points that were listed for description ended.
   *
   * Use this marker in your next request to list the next set of virtual tape recovery points in the list. If there are no more recovery points to describe, this field does not appear in the response.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * DescribeTapesInput
 *
 * @public
 */
export interface DescribeTapesInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * Specifies one or more unique Amazon Resource Names (ARNs) that represent the virtual tapes you want to describe. If this parameter is not specified, Tape gateway returns a description of all virtual tapes associated with the specified gateway.
   *
   * @public
   */
  TapeARNs?: string[] | undefined;

  /**
   * A marker value, obtained in a previous call to `DescribeTapes`. This marker indicates which page of results to retrieve.
   *
   * If not specified, the first page of results is retrieved.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Specifies that the number of virtual tapes described be limited to the specified number.
   *
   * > **Note:** Amazon Web Services may impose its own limit, if this field is not set.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * Describes a virtual tape object.
 *
 * @public
 */
export interface Tape {
  /**
   * The Amazon Resource Name (ARN) of the virtual tape.
   *
   * @public
   */
  TapeARN?: string | undefined;

  /**
   * The barcode that identifies a specific virtual tape.
   *
   * @public
   */
  TapeBarcode?: string | undefined;

  /**
   * The date the virtual tape was created.
   *
   * @public
   */
  TapeCreatedDate?: Date | undefined;

  /**
   * The size, in bytes, of the virtual tape capacity.
   *
   * @public
   */
  TapeSizeInBytes?: number | undefined;

  /**
   * The current state of the virtual tape.
   *
   * @public
   */
  TapeStatus?: string | undefined;

  /**
   * The virtual tape library (VTL) device that the virtual tape is associated with.
   *
   * @public
   */
  VTLDevice?: string | undefined;

  /**
   * For archiving virtual tapes, indicates how much data remains to be uploaded before archiving is complete.
   *
   * Range: 0 (not started) to 100 (complete).
   *
   * @public
   */
  Progress?: number | undefined;

  /**
   * The size, in bytes, of data stored on the virtual tape.
   *
   * > **Note:** This value is not available for tapes created prior to May 13, 2015.
   *
   * @public
   */
  TapeUsedInBytes?: number | undefined;

  /**
   * Optional. The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value must be set if `KMSEncrypted` is `true`, or if `EncryptionType` is `SseKms` or `DsseKms`.
   *
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * The ID of the pool that contains tapes that will be archived. The tapes in this pool are archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * If the tape is archived as write-once-read-many (WORM), this value is `true`.
   *
   * @public
   */
  Worm?: boolean | undefined;

  /**
   * The date that the tape is first archived with tape retention lock enabled.
   *
   * @public
   */
  RetentionStartDate?: Date | undefined;

  /**
   * The date that the tape enters a custom tape pool.
   *
   * @public
   */
  PoolEntryDate?: Date | undefined;
}

/**
 * DescribeTapesOutput
 *
 * @public
 */
export interface DescribeTapesOutput {
  /**
   * An array of virtual tape descriptions.
   *
   * @public
   */
  Tapes?: Tape[] | undefined;

  /**
   * An opaque string that can be used as part of a subsequent `DescribeTapes` call to retrieve the next page of results.
   *
   * If a response does not contain a marker, then there are no more results to be retrieved.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUploadBufferInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface DescribeUploadBufferOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * An array of the gateway's local disk IDs that are configured as working storage. Each local disk ID is specified as a string (minimum length of 1 and maximum length of 300). If no local disks are configured as working storage, then the DiskIds array is empty.
   *
   * @public
   */
  DiskIds?: string[] | undefined;

  /**
   * The total number of bytes being used in the gateway's upload buffer.
   *
   * @public
   */
  UploadBufferUsedInBytes?: number | undefined;

  /**
   * The total number of bytes allocated in the gateway's as upload buffer.
   *
   * @public
   */
  UploadBufferAllocatedInBytes?: number | undefined;
}

/**
 * DescribeVTLDevicesInput
 *
 * @public
 */
export interface DescribeVTLDevicesInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * An array of strings, where each string represents the Amazon Resource Name (ARN) of a VTL device.
   *
   * > **Note:** All of the specified VTL devices must be from the same gateway. If no VTL devices are specified, the result will contain all devices on the specified gateway.
   *
   * @public
   */
  VTLDeviceARNs?: string[] | undefined;

  /**
   * An opaque string that indicates the position at which to begin describing the VTL devices.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Specifies that the number of VTL devices described be limited to the specified number.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * Lists iSCSI information about a VTL device.
 *
 * @public
 */
export interface DeviceiSCSIAttributes {
  /**
   * Specifies the unique Amazon Resource Name (ARN) that encodes the iSCSI qualified name(iqn) of a tape drive or media changer target.
   *
   * @public
   */
  TargetARN?: string | undefined;

  /**
   * The network interface identifier of the VTL device.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The port used to communicate with iSCSI VTL device targets.
   *
   * @public
   */
  NetworkInterfacePort?: number | undefined;

  /**
   * Indicates whether mutual CHAP is enabled for the iSCSI target.
   *
   * @public
   */
  ChapEnabled?: boolean | undefined;
}

/**
 * Represents a device object associated with a tape gateway.
 *
 * @public
 */
export interface VTLDevice {
  /**
   * Specifies the unique Amazon Resource Name (ARN) of the device (tape drive or media changer).
   *
   * @public
   */
  VTLDeviceARN?: string | undefined;

  /**
   * Specifies the type of device that the VTL device emulates.
   *
   * @public
   */
  VTLDeviceType?: string | undefined;

  /**
   * Specifies the vendor of the device that the VTL device object emulates.
   *
   * @public
   */
  VTLDeviceVendor?: string | undefined;

  /**
   * Specifies the model number of device that the VTL device emulates.
   *
   * @public
   */
  VTLDeviceProductIdentifier?: string | undefined;

  /**
   * A list of iSCSI information about a VTL device.
   *
   * @public
   */
  DeviceiSCSIAttributes?: DeviceiSCSIAttributes | undefined;
}

/**
 * DescribeVTLDevicesOutput
 *
 * @public
 */
export interface DescribeVTLDevicesOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * An array of VTL device objects composed of the Amazon Resource Name (ARN) of the VTL devices.
   *
   * @public
   */
  VTLDevices?: VTLDevice[] | undefined;

  /**
   * An opaque string that indicates the position at which the VTL devices that were fetched for description ended. Use the marker in your next request to fetch the next set of VTL devices in the list. If there are no more VTL devices to describe, this field does not appear in the response.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * A JSON object containing the Amazon Resource Name (ARN) of the gateway.
 *
 * @public
 */
export interface DescribeWorkingStorageInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * A JSON object containing the following fields:
 *
 * @public
 */
export interface DescribeWorkingStorageOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * An array of the gateway's local disk IDs that are configured as working storage. Each local disk ID is specified as a string (minimum length of 1 and maximum length of 300). If no local disks are configured as working storage, then the DiskIds array is empty.
   *
   * @public
   */
  DiskIds?: string[] | undefined;

  /**
   * The total working storage in bytes in use by the gateway. If no working storage is configured for the gateway, this field returns 0.
   *
   * @public
   */
  WorkingStorageUsedInBytes?: number | undefined;

  /**
   * The total working storage in bytes allocated for the gateway. If no working storage is configured for the gateway, this field returns 0.
   *
   * @public
   */
  WorkingStorageAllocatedInBytes?: number | undefined;
}

/**
 * AttachVolumeInput
 *
 * @public
 */
export interface DetachVolumeInput {
  /**
   * The Amazon Resource Name (ARN) of the volume to detach from the gateway.
   *
   * @public
   */
  VolumeARN: string | undefined;

  /**
   * Set to `true` to forcibly remove the iSCSI connection of the target volume and detach the volume. The default is `false`. If this value is set to `false`, you must manually disconnect the iSCSI connection from the target volume.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  ForceDetach?: boolean | undefined;
}

/**
 * AttachVolumeOutput
 *
 * @public
 */
export interface DetachVolumeOutput {
  /**
   * The Amazon Resource Name (ARN) of the volume that was detached.
   *
   * @public
   */
  VolumeARN?: string | undefined;
}

/**
 * DisableGatewayInput
 *
 * @public
 */
export interface DisableGatewayInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * DisableGatewayOutput
 *
 * @public
 */
export interface DisableGatewayOutput {
  /**
   * The unique Amazon Resource Name (ARN) of the disabled gateway.
   *
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateFileSystemInput {
  /**
   * The Amazon Resource Name (ARN) of the file system association to be deleted.
   *
   * @public
   */
  FileSystemAssociationARN: string | undefined;

  /**
   * If this value is set to true, the operation disassociates an Amazon FSx file system immediately. It ends all data uploads to the file system, and the file system association enters the `FORCE_DELETING` status. If this value is set to false, the Amazon FSx file system does not disassociate until all data is uploaded.
   *
   * @public
   */
  ForceDelete?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateFileSystemOutput {
  /**
   * The Amazon Resource Name (ARN) of the deleted file system association.
   *
   * @public
   */
  FileSystemAssociationARN?: string | undefined;
}

/**
 * Represents a gateway's local disk.
 *
 * @public
 */
export interface Disk {
  /**
   * The unique device ID or other distinguishing data that identifies a local disk.
   *
   * @public
   */
  DiskId?: string | undefined;

  /**
   * The path of a local disk in the gateway virtual machine (VM).
   *
   * @public
   */
  DiskPath?: string | undefined;

  /**
   * The device node of a local disk as assigned by the virtualization environment.
   *
   * @public
   */
  DiskNode?: string | undefined;

  /**
   * A value that represents the status of a local disk.
   *
   * @public
   */
  DiskStatus?: string | undefined;

  /**
   * The local disk size in bytes.
   *
   * @public
   */
  DiskSizeInBytes?: number | undefined;

  /**
   * One of the `DiskAllocationType` enumeration values that identifies how a local disk is used.
   *
   * Valid Values: `UPLOAD_BUFFER` | `CACHE_STORAGE`
   *
   * @public
   */
  DiskAllocationType?: string | undefined;

  /**
   * The iSCSI qualified name (IQN) that is defined for a disk. This field is not included in the response if the local disk is not defined as an iSCSI target. The format of this field is *targetIqn::LUNNumber::region-volumeId*.
   *
   * @public
   */
  DiskAllocationResource?: string | undefined;

  /**
   * A list of values that represents attributes of a local disk.
   *
   * @public
   */
  DiskAttributeList?: string[] | undefined;
}

/**
 * @public
 */
export interface EvictFilesFailingUploadInput {
  /**
   * The Amazon Resource Name (ARN) of the file share for which you want to start the cache clean operation.
   *
   * @public
   */
  FileShareARN: string | undefined;

  /**
   * Specifies whether cache entries with full or partial file data currently stored on the gateway will be forcibly removed by the cache clean operation.
   *
   * Valid arguments:
   *
   * - `False` - The cache clean operation skips cache entries failing upload if they are associated with data currently stored on the gateway. This preserves the cached data.
   * - `True` - The cache clean operation removes cache entries failing upload even if they are associated with data currently stored on the gateway. This deletes the cached data.
   *
   *   > **Important:** If `ForceRemove` is set to `True`, the cache clean operation will delete file data from the gateway which might otherwise be recoverable.
   *
   * @public
   */
  ForceRemove?: boolean | undefined;
}

/**
 * @public
 */
export interface EvictFilesFailingUploadOutput {
  /**
   * The randomly generated ID of the CloudWatch notification associated with the cache clean operation. This ID is in UUID format.
   *
   * @public
   */
  NotificationId?: string | undefined;
}

/**
 * Describes a file share. Only supported S3 File Gateway.
 *
 * @public
 */
export interface FileShareInfo {
  /**
   * The type of the file share.
   *
   * @public
   */
  FileShareType?: FileShareType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the file share.
   *
   * @public
   */
  FileShareARN?: string | undefined;

  /**
   * The ID of the file share.
   *
   * @public
   */
  FileShareId?: string | undefined;

  /**
   * The status of the file share.
   *
   * Valid Values: `CREATING` | `UPDATING` | `AVAILABLE` | `DELETING`
   *
   * @public
   */
  FileShareStatus?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * Gets the summary returned by `ListFileSystemAssociation`, which is a summary of a created file system association.
 *
 * @public
 */
export interface FileSystemAssociationSummary {
  /**
   * The ID of the file system association.
   *
   * @public
   */
  FileSystemAssociationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the file system association.
   *
   * @public
   */
  FileSystemAssociationARN?: string | undefined;

  /**
   * The status of the file share. Valid Values: `AVAILABLE` | `CREATING` | `DELETING` | `FORCE_DELETING` | `UPDATING` | `ERROR`
   *
   * @public
   */
  FileSystemAssociationStatus?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * Describes a gateway object.
 *
 * @public
 */
export interface GatewayInfo {
  /**
   * The unique identifier assigned to your gateway during activation. This ID becomes part of the gateway Amazon Resource Name (ARN), which you use as input for other operations.
   *
   * @public
   */
  GatewayId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * The type of the gateway.
   *
   * > **Important:** Amazon FSx File Gateway is no longer available to new customers. Existing customers of FSx File Gateway can continue to use the service normally. For capabilities similar to FSx File Gateway, visit [this blog post](https://aws.amazon.com/blogs/storage/switch-your-file-share-access-from-amazon-fsx-file-gateway-to-amazon-fsx-for-windows-file-server/).
   *
   * @public
   */
  GatewayType?: string | undefined;

  /**
   * The state of the gateway.
   *
   * Valid Values: `DISABLED` | `ACTIVE`
   *
   * @public
   */
  GatewayOperationalState?: string | undefined;

  /**
   * The name of the gateway.
   *
   * @public
   */
  GatewayName?: string | undefined;

  /**
   * The ID of the Amazon EC2 instance that was used to launch the gateway.
   *
   * @public
   */
  Ec2InstanceId?: string | undefined;

  /**
   * The Amazon Web Services Region where the Amazon EC2 instance is located.
   *
   * @public
   */
  Ec2InstanceRegion?: string | undefined;

  /**
   * The type of hardware or software platform on which the gateway is running.
   *
   * > **Note:** Tape Gateway is no longer available on Snow Family devices.
   *
   * @public
   */
  HostEnvironment?: HostEnvironment | undefined;

  /**
   * A unique identifier for the specific instance of the host platform running the gateway. This value is only available for certain host environments, and its format depends on the host environment type.
   *
   * @public
   */
  HostEnvironmentId?: string | undefined;

  /**
   * Date after which this gateway will not receive software updates for new features and bug fixes.
   *
   * @public
   */
  DeprecationDate?: string | undefined;

  /**
   * The version number of the software running on the gateway appliance.
   *
   * @public
   */
  SoftwareVersion?: string | undefined;
}

/**
 * JoinDomainInput
 *
 * @public
 */
export interface JoinDomainInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the `ListGateways` operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * The name of the domain that you want the gateway to join.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The organizational unit (OU) is a container in an Active Directory that can hold users, groups, computers, and other OUs and this parameter specifies the OU that the gateway will join within the AD domain.
   *
   * @public
   */
  OrganizationalUnit?: string | undefined;

  /**
   * List of IP addresses, NetBIOS names, or host names of your domain server. If you need to specify the port number include it after the colon (“:”). For example, `mydc.mydomain.com:389`.
   *
   * > **Note:**
   * >
   * > S3 File Gateway supports IPv6 addresses in addition to IPv4 and other existing formats.
   * >
   * > FSx File Gateway does not support IPv6.
   *
   * @public
   */
  DomainControllers?: string[] | undefined;

  /**
   * Specifies the time in seconds, in which the `JoinDomain` operation must complete. The default is 20 seconds.
   *
   * @public
   */
  TimeoutInSeconds?: number | undefined;

  /**
   * Sets the user name of user who has permission to add the gateway to the Active Directory domain. The domain user account should be enabled to join computers to the domain. For example, you can use the domain administrator account or an account with delegated permissions to join computers to the domain.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * Sets the password of the user who has permission to add the gateway to the Active Directory domain.
   *
   * @public
   */
  Password: string | undefined;
}

/**
 * JoinDomainOutput
 *
 * @public
 */
export interface JoinDomainOutput {
  /**
   * The unique Amazon Resource Name (ARN) of the gateway that joined the domain.
   *
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * Indicates the status of the gateway as a member of the Active Directory domain.
   *
   * > **Note:** This field is only used as part of a `JoinDomain` request. It is not affected by Active Directory connectivity changes that occur after the `JoinDomain` request succeeds.
   *
   * - `ACCESS_DENIED`: Indicates that the `JoinDomain` operation failed due to an authentication error.
   * - `DETACHED`: Indicates that gateway is not joined to a domain.
   * - `JOINED`: Indicates that the gateway has successfully joined a domain.
   * - `JOINING`: Indicates that a `JoinDomain` operation is in progress.
   * - `INSUFFICIENT_PERMISSIONS`: Indicates that the `JoinDomain` operation failed because the specified user lacks the necessary permissions to join the domain.
   * - `NETWORK_ERROR`: Indicates that `JoinDomain` operation failed due to a network or connectivity error.
   * - `TIMEOUT`: Indicates that the `JoinDomain` operation failed because the operation didn't complete within the allotted time.
   * - `UNKNOWN_ERROR`: Indicates that the `JoinDomain` operation failed due to another type of error.
   *
   * @public
   */
  ActiveDirectoryStatus?: ActiveDirectoryStatus | undefined;
}

/**
 * @public
 */
export interface ListAutomaticTapeCreationPoliciesInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomaticTapeCreationPoliciesOutput {
  /**
   * Gets a listing of information about the gateway's automatic tape creation policies, including the automatic tape creation rules and the gateway that is using the policies.
   *
   * @public
   */
  AutomaticTapeCreationPolicyInfos?: AutomaticTapeCreationPolicyInfo[] | undefined;
}

/**
 * @public
 */
export interface ListCacheReportsInput {
  /**
   * Opaque pagination token returned from a previous `ListCacheReports` operation. If present, `Marker` specifies where to continue the list from after a previous call to `ListCacheReports`. Optional.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListCacheReportsOutput {
  /**
   * A list of existing cache reports for all file shares associated with your Amazon Web Services account. This list includes all information provided by the `DescribeCacheReport` action, such as report status, completion progress, start time, end time, filters, and tags.
   *
   * @public
   */
  CacheReportList?: CacheReportInfo[] | undefined;

  /**
   * If the request includes `Marker`, the response returns that value in this field.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * ListFileShareInput
 *
 * @public
 */
export interface ListFileSharesInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway whose file shares you want to list. If this field is not present, all file shares under your account are listed.
   *
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * The maximum number of file shares to return in the response. The value must be an integer with a value greater than zero. Optional.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * Opaque pagination token returned from a previous ListFileShares operation. If present, `Marker` specifies where to continue the list from after a previous call to ListFileShares. Optional.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * ListFileShareOutput
 *
 * @public
 */
export interface ListFileSharesOutput {
  /**
   * If the request includes `Marker`, the response returns that value in this field.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * If a value is present, there are more file shares to return. In a subsequent request, use `NextMarker` as the value for `Marker` to retrieve the next set of file shares.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * An array of information about the S3 File Gateway's file shares.
   *
   * @public
   */
  FileShareInfoList?: FileShareInfo[] | undefined;
}

/**
 * @public
 */
export interface ListFileSystemAssociationsInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * The maximum number of file system associations to return in the response. If present, `Limit` must be an integer with a value greater than zero. Optional.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * Opaque pagination token returned from a previous `ListFileSystemAssociations` operation. If present, `Marker` specifies where to continue the list from after a previous call to `ListFileSystemAssociations`. Optional.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListFileSystemAssociationsOutput {
  /**
   * If the request includes `Marker`, the response returns that value in this field.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * If a value is present, there are more file system associations to return. In a subsequent request, use `NextMarker` as the value for `Marker` to retrieve the next set of file system associations.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * An array of information about the Amazon FSx gateway's file system associations.
   *
   * @public
   */
  FileSystemAssociationSummaryList?: FileSystemAssociationSummary[] | undefined;
}

/**
 * A JSON object containing zero or more of the following fields:
 *
 * - ListGatewaysInput$Limit
 * - ListGatewaysInput$Marker
 *
 * @public
 */
export interface ListGatewaysInput {
  /**
   * An opaque string that indicates the position at which to begin the returned list of gateways.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Specifies that the list of gateways returned be limited to the specified number of items.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface ListGatewaysOutput {
  /**
   * An array of GatewayInfo objects.
   *
   * @public
   */
  Gateways?: GatewayInfo[] | undefined;

  /**
   * Use the marker in your next request to fetch the next set of gateways in the list. If there are no more gateways to list, this field does not appear in the response.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * A JSON object containing the Amazon Resource Name (ARN) of the gateway.
 *
 * @public
 */
export interface ListLocalDisksInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface ListLocalDisksOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * A JSON object containing the following fields:
   *
   * - ListLocalDisksOutput$Disks
   *
   * @public
   */
  Disks?: Disk[] | undefined;
}

/**
 * ListTagsForResourceInput
 *
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource for which you want to list tags.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * An opaque string that indicates the position at which to begin returning the list of tags.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Specifies that the list of tags returned be limited to the specified number of items.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * ListTagsForResourceOutput
 *
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * The Amazon Resource Name (ARN) of the resource for which you want to list tags.
   *
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * An opaque string that indicates the position at which to stop returning the list of tags.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * An array that contains the tags for the specified resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListTapePoolsInput {
  /**
   * The Amazon Resource Name (ARN) of each of the custom tape pools you want to list. If you don't specify a custom tape pool ARN, the response lists all custom tape pools.
   *
   * @public
   */
  PoolARNs?: string[] | undefined;

  /**
   * A string that indicates the position at which to begin the returned list of tape pools.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * An optional number limit for the tape pools in the list returned by this call.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * Describes a custom tape pool.
 *
 * @public
 */
export interface PoolInfo {
  /**
   * The Amazon Resource Name (ARN) of the custom tape pool. Use the ListTapePools operation to return a list of custom tape pools for your account and Amazon Web Services Region.
   *
   * @public
   */
  PoolARN?: string | undefined;

  /**
   * The name of the custom tape pool. `PoolName` can use all ASCII characters, except '/' and '\'.
   *
   * @public
   */
  PoolName?: string | undefined;

  /**
   * The storage class that is associated with the custom pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.
   *
   * @public
   */
  StorageClass?: TapeStorageClass | undefined;

  /**
   * Tape retention lock type, which can be configured in two modes. When configured in governance mode, Amazon Web Services accounts with specific IAM permissions are authorized to remove the tape retention lock from archived virtual tapes. When configured in compliance mode, the tape retention lock cannot be removed by any user, including the root Amazon Web Services account.
   *
   * @public
   */
  RetentionLockType?: RetentionLockType | undefined;

  /**
   * Tape retention lock time is set in days. Tape retention lock can be enabled for up to 100 years (36,500 days).
   *
   * @public
   */
  RetentionLockTimeInDays?: number | undefined;

  /**
   * Status of the custom tape pool. Pool can be `ACTIVE` or `DELETED`.
   *
   * @public
   */
  PoolStatus?: PoolStatus | undefined;
}

/**
 * @public
 */
export interface ListTapePoolsOutput {
  /**
   * An array of `PoolInfo` objects, where each object describes a single custom tape pool. If there are no custom tape pools, the `PoolInfos` is an empty array.
   *
   * @public
   */
  PoolInfos?: PoolInfo[] | undefined;

  /**
   * A string that indicates the position at which to begin the returned list of tape pools. Use the marker in your next request to continue pagination of tape pools. If there are no more tape pools to list, this element does not appear in the response body.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * A JSON object that contains one or more of the following fields:
 *
 * - ListTapesInput$Limit
 * - ListTapesInput$Marker
 * - ListTapesInput$TapeARNs
 *
 * @public
 */
export interface ListTapesInput {
  /**
   * The Amazon Resource Name (ARN) of each of the tapes you want to list. If you don't specify a tape ARN, the response lists all tapes in both your VTL and VTS.
   *
   * @public
   */
  TapeARNs?: string[] | undefined;

  /**
   * A string that indicates the position at which to begin the returned list of tapes.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * An optional number limit for the tapes in the list returned by this call.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * Describes a virtual tape.
 *
 * @public
 */
export interface TapeInfo {
  /**
   * The Amazon Resource Name (ARN) of a virtual tape.
   *
   * @public
   */
  TapeARN?: string | undefined;

  /**
   * The barcode that identifies a specific virtual tape.
   *
   * @public
   */
  TapeBarcode?: string | undefined;

  /**
   * The size, in bytes, of a virtual tape.
   *
   * @public
   */
  TapeSizeInBytes?: number | undefined;

  /**
   * The status of the tape.
   *
   * @public
   */
  TapeStatus?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * The ID of the pool that you want to add your tape to for archiving. The tape in this pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * The date that the tape became subject to tape retention lock.
   *
   * @public
   */
  RetentionStartDate?: Date | undefined;

  /**
   * The date that the tape entered the custom tape pool with tape retention lock enabled.
   *
   * @public
   */
  PoolEntryDate?: Date | undefined;
}

/**
 * A JSON object containing the following fields:
 *
 * - ListTapesOutput$Marker
 * - ListTapesOutput$VolumeInfos
 *
 * @public
 */
export interface ListTapesOutput {
  /**
   * An array of TapeInfo objects, where each object describes a single tape. If there are no tapes in the tape library or VTS, then the `TapeInfos` is an empty array.
   *
   * @public
   */
  TapeInfos?: TapeInfo[] | undefined;

  /**
   * A string that indicates the position at which to begin returning the next list of tapes. Use the marker in your next request to continue pagination of tapes. If there are no more tapes to list, this element does not appear in the response body.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * ListVolumeInitiatorsInput
 *
 * @public
 */
export interface ListVolumeInitiatorsInput {
  /**
   * The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to return a list of gateway volumes for the gateway.
   *
   * @public
   */
  VolumeARN: string | undefined;
}

/**
 * ListVolumeInitiatorsOutput
 *
 * @public
 */
export interface ListVolumeInitiatorsOutput {
  /**
   * The host names and port numbers of all iSCSI initiators that are connected to the gateway.
   *
   * @public
   */
  Initiators?: string[] | undefined;
}

/**
 * @public
 */
export interface ListVolumeRecoveryPointsInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * Describes a storage volume recovery point object.
 *
 * @public
 */
export interface VolumeRecoveryPointInfo {
  /**
   * The Amazon Resource Name (ARN) of the volume target.
   *
   * @public
   */
  VolumeARN?: string | undefined;

  /**
   * The size of the volume in bytes.
   *
   * @public
   */
  VolumeSizeInBytes?: number | undefined;

  /**
   * The size of the data stored on the volume in bytes.
   *
   * > **Note:** This value is not available for volumes created prior to May 13, 2015, until you store data on the volume.
   *
   * @public
   */
  VolumeUsageInBytes?: number | undefined;

  /**
   * The time the recovery point was taken.
   *
   * @public
   */
  VolumeRecoveryPointTime?: string | undefined;
}

/**
 * @public
 */
export interface ListVolumeRecoveryPointsOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * An array of VolumeRecoveryPointInfo objects.
   *
   * @public
   */
  VolumeRecoveryPointInfos?: VolumeRecoveryPointInfo[] | undefined;
}

/**
 * A JSON object that contains one or more of the following fields:
 *
 * - ListVolumesInput$Limit
 * - ListVolumesInput$Marker
 *
 * @public
 */
export interface ListVolumesInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * A string that indicates the position at which to begin the returned list of volumes. Obtain the marker from the response of a previous List iSCSI Volumes request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Specifies that the list of volumes returned be limited to the specified number of items.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * Describes a storage volume object.
 *
 * @public
 */
export interface VolumeInfo {
  /**
   * The Amazon Resource Name (ARN) for the storage volume. For example, the following is a valid ARN:
   *
   * `arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB`
   *
   * Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).
   *
   * @public
   */
  VolumeARN?: string | undefined;

  /**
   * The unique identifier assigned to the volume. This ID becomes part of the volume Amazon Resource Name (ARN), which you use as input for other operations.
   *
   * Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).
   *
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * The unique identifier assigned to your gateway during activation. This ID becomes part of the gateway Amazon Resource Name (ARN), which you use as input for other operations.
   *
   * Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).
   *
   * @public
   */
  GatewayId?: string | undefined;

  /**
   * One of the VolumeType enumeration values describing the type of the volume.
   *
   * @public
   */
  VolumeType?: string | undefined;

  /**
   * The size of the volume in bytes.
   *
   * Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).
   *
   * @public
   */
  VolumeSizeInBytes?: number | undefined;

  /**
   * One of the VolumeStatus values that indicates the state of the storage volume.
   *
   * @public
   */
  VolumeAttachmentStatus?: string | undefined;
}

/**
 * A JSON object containing the following fields:
 *
 * - ListVolumesOutput$Marker
 * - ListVolumesOutput$VolumeInfos
 *
 * @public
 */
export interface ListVolumesOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * Use the marker in your next request to continue pagination of iSCSI volumes. If there are no more volumes to list, this field does not appear in the response body.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * An array of VolumeInfo objects, where each object describes an iSCSI volume. If no volumes are defined for the gateway, then `VolumeInfos` is an empty array "[]".
   *
   * @public
   */
  VolumeInfos?: VolumeInfo[] | undefined;
}

/**
 * @public
 */
export interface NotifyWhenUploadedInput {
  /**
   * The Amazon Resource Name (ARN) of the file share.
   *
   * @public
   */
  FileShareARN: string | undefined;
}

/**
 * @public
 */
export interface NotifyWhenUploadedOutput {
  /**
   * The Amazon Resource Name (ARN) of the file share.
   *
   * @public
   */
  FileShareARN?: string | undefined;

  /**
   * The randomly generated ID of the notification that was sent. This ID is in UUID format.
   *
   * @public
   */
  NotificationId?: string | undefined;
}

/**
 * RefreshCacheInput
 *
 * @public
 */
export interface RefreshCacheInput {
  /**
   * The Amazon Resource Name (ARN) of the file share you want to refresh.
   *
   * @public
   */
  FileShareARN: string | undefined;

  /**
   * A comma-separated list of the paths of folders to refresh in the cache. The default is [`"/"`]. The default refreshes objects and folders at the root of the Amazon S3 bucket. If `Recursive` is set to `true`, the entire S3 bucket that the file share has access to is refreshed.
   *
   * Do not include `/` when specifying folder names. For example, you would specify `samplefolder` rather than `samplefolder/`.
   *
   * @public
   */
  FolderList?: string[] | undefined;

  /**
   * A value that specifies whether to recursively refresh folders in the cache. The refresh includes folders that were in the cache the last time the gateway listed the folder's contents. If this value set to `true`, each folder that is listed in `FolderList` is recursively updated. Otherwise, subfolders listed in `FolderList` are not refreshed. Only objects that are in folders listed directly under `FolderList` are found and used for the update. The default is `true`.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  Recursive?: boolean | undefined;
}

/**
 * RefreshCacheOutput
 *
 * @public
 */
export interface RefreshCacheOutput {
  /**
   * The Amazon Resource Name (ARN) of the file share.
   *
   * @public
   */
  FileShareARN?: string | undefined;

  /**
   * The randomly generated ID of the notification that was sent. This ID is in UUID format.
   *
   * @public
   */
  NotificationId?: string | undefined;
}

/**
 * RemoveTagsFromResourceInput
 *
 * @public
 */
export interface RemoveTagsFromResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource you want to remove the tags from.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The keys of the tags you want to remove from the specified resource. A tag is composed of a key-value pair.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * RemoveTagsFromResourceOutput
 *
 * @public
 */
export interface RemoveTagsFromResourceOutput {
  /**
   * The Amazon Resource Name (ARN) of the resource that the tags were removed from.
   *
   * @public
   */
  ResourceARN?: string | undefined;
}

/**
 * @public
 */
export interface ResetCacheInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface ResetCacheOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * RetrieveTapeArchiveInput
 *
 * @public
 */
export interface RetrieveTapeArchiveInput {
  /**
   * The Amazon Resource Name (ARN) of the virtual tape you want to retrieve from the virtual tape shelf (VTS).
   *
   * @public
   */
  TapeARN: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway you want to retrieve the virtual tape to. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * You retrieve archived virtual tapes to only one gateway and the gateway must be a tape gateway.
   *
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * RetrieveTapeArchiveOutput
 *
 * @public
 */
export interface RetrieveTapeArchiveOutput {
  /**
   * The Amazon Resource Name (ARN) of the retrieved virtual tape.
   *
   * @public
   */
  TapeARN?: string | undefined;
}

/**
 * RetrieveTapeRecoveryPointInput
 *
 * @public
 */
export interface RetrieveTapeRecoveryPointInput {
  /**
   * The Amazon Resource Name (ARN) of the virtual tape for which you want to retrieve the recovery point.
   *
   * @public
   */
  TapeARN: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * RetrieveTapeRecoveryPointOutput
 *
 * @public
 */
export interface RetrieveTapeRecoveryPointOutput {
  /**
   * The Amazon Resource Name (ARN) of the virtual tape for which the recovery point was retrieved.
   *
   * @public
   */
  TapeARN?: string | undefined;
}

/**
 * SetLocalConsolePasswordInput
 *
 * @public
 */
export interface SetLocalConsolePasswordInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * The password you want to set for your VM local console.
   *
   * @public
   */
  LocalConsolePassword: string | undefined;
}

/**
 * @public
 */
export interface SetLocalConsolePasswordOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * SetSMBGuestPasswordInput
 *
 * @public
 */
export interface SetSMBGuestPasswordInput {
  /**
   * The Amazon Resource Name (ARN) of the S3 File Gateway the SMB file share is associated with.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * The password that you want to set for your SMB server.
   *
   * @public
   */
  Password: string | undefined;
}

/**
 * @public
 */
export interface SetSMBGuestPasswordOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * A JSON object containing the Amazon Resource Name (ARN) of the gateway to shut down.
 *
 * @public
 */
export interface ShutdownGatewayInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * A JSON object containing the Amazon Resource Name (ARN) of the gateway that was shut down.
 *
 * @public
 */
export interface ShutdownGatewayOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * @public
 */
export interface StartAvailabilityMonitorTestInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface StartAvailabilityMonitorTestOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * @public
 */
export interface StartCacheReportInput {
  /**
   * The Amazon Resource Name (ARN) of the file share.
   *
   * @public
   */
  FileShareARN: string | undefined;

  /**
   * The ARN of the IAM role used when saving the cache report to Amazon S3.
   *
   * @public
   */
  Role: string | undefined;

  /**
   * The ARN of the Amazon S3 bucket where you want to save the cache report.
   *
   * > **Note:**
   * >
   * > We do not recommend saving the cache report to the same Amazon S3 bucket for which you are generating the report.
   * >
   * > This field does not accept access point ARNs.
   *
   * @public
   */
  LocationARN: string | undefined;

  /**
   * The Amazon Web Services Region of the Amazon S3 bucket where you want to save the cache report.
   *
   * @public
   */
  BucketRegion: string | undefined;

  /**
   * The DNS name of the VPC endpoint associated with the Amazon S3 where you want to save the cache report. Optional.
   *
   * @public
   */
  VPCEndpointDNSName?: string | undefined;

  /**
   * The list of filters and parameters that determine which files are included in the report. You must specify at least one value for `InclusionFilters` or `ExclusionFilters` in a `StartCacheReport` request.
   *
   * @public
   */
  InclusionFilters?: CacheReportFilter[] | undefined;

  /**
   * The list of filters and parameters that determine which files are excluded from the report. You must specify at least one value for `InclusionFilters` or `ExclusionFilters` in a `StartCacheReport` request.
   *
   * @public
   */
  ExclusionFilters?: CacheReportFilter[] | undefined;

  /**
   * A unique identifier that you use to ensure idempotent report generation if you need to retry an unsuccessful `StartCacheReport` request. If you retry a request, use the same `ClientToken` you specified in the initial request.
   *
   * @public
   */
  ClientToken: string | undefined;

  /**
   * A list of up to 50 key/value tags that you can assign to the cache report. Using tags can help you categorize your reports and more easily locate them in search results.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartCacheReportOutput {
  /**
   * The Amazon Resource Name (ARN) of the cache report generated by the `StartCacheReport` request.
   *
   * @public
   */
  CacheReportARN?: string | undefined;
}

/**
 * A JSON object containing the Amazon Resource Name (ARN) of the gateway to start.
 *
 * @public
 */
export interface StartGatewayInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * A JSON object containing the Amazon Resource Name (ARN) of the gateway that was restarted.
 *
 * @public
 */
export interface StartGatewayOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAutomaticTapeCreationPolicyInput {
  /**
   * An automatic tape creation policy consists of a list of automatic tape creation rules. The rules determine when and how to automatically create new tapes.
   *
   * @public
   */
  AutomaticTapeCreationRules: AutomaticTapeCreationRule[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * @public
 */
export interface UpdateAutomaticTapeCreationPolicyOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * A JSON object containing one or more of the following fields:
 *
 * - UpdateBandwidthRateLimitInput$AverageDownloadRateLimitInBitsPerSec
 * - UpdateBandwidthRateLimitInput$AverageUploadRateLimitInBitsPerSec
 *
 * @public
 */
export interface UpdateBandwidthRateLimitInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * The average upload bandwidth rate limit in bits per second.
   *
   * @public
   */
  AverageUploadRateLimitInBitsPerSec?: number | undefined;

  /**
   * The average download bandwidth rate limit in bits per second.
   *
   * @public
   */
  AverageDownloadRateLimitInBitsPerSec?: number | undefined;
}

/**
 * A JSON object containing the Amazon Resource Name (ARN) of the gateway whose throttle information was updated.
 *
 * @public
 */
export interface UpdateBandwidthRateLimitOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBandwidthRateLimitScheduleInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * An array containing bandwidth rate limit schedule intervals for a gateway. When no bandwidth rate limit intervals have been scheduled, the array is empty.
   *
   * @public
   */
  BandwidthRateLimitIntervals: BandwidthRateLimitInterval[] | undefined;
}

/**
 * @public
 */
export interface UpdateBandwidthRateLimitScheduleOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * A JSON object containing one or more of the following fields:
 *
 * - UpdateChapCredentialsInput$InitiatorName
 * - UpdateChapCredentialsInput$SecretToAuthenticateInitiator
 * - UpdateChapCredentialsInput$SecretToAuthenticateTarget
 * - UpdateChapCredentialsInput$TargetARN
 *
 * @public
 */
export interface UpdateChapCredentialsInput {
  /**
   * The Amazon Resource Name (ARN) of the iSCSI volume target. Use the DescribeStorediSCSIVolumes operation to return the TargetARN for specified VolumeARN.
   *
   * @public
   */
  TargetARN: string | undefined;

  /**
   * The secret key that the initiator (for example, the Windows client) must provide to participate in mutual CHAP with the target.
   *
   * > **Note:** The secret key must be between 12 and 16 bytes when encoded in UTF-8.
   *
   * @public
   */
  SecretToAuthenticateInitiator: string | undefined;

  /**
   * The iSCSI initiator that connects to the target.
   *
   * @public
   */
  InitiatorName: string | undefined;

  /**
   * The secret key that the target must provide to participate in mutual CHAP with the initiator (e.g. Windows client).
   *
   * Byte constraints: Minimum bytes of 12. Maximum bytes of 16.
   *
   * > **Note:** The secret key must be between 12 and 16 bytes when encoded in UTF-8.
   *
   * @public
   */
  SecretToAuthenticateTarget?: string | undefined;
}

/**
 * A JSON object containing the following fields:
 *
 * @public
 */
export interface UpdateChapCredentialsOutput {
  /**
   * The Amazon Resource Name (ARN) of the target. This is the same target specified in the request.
   *
   * @public
   */
  TargetARN?: string | undefined;

  /**
   * The iSCSI initiator that connects to the target. This is the same initiator name specified in the request.
   *
   * @public
   */
  InitiatorName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFileSystemAssociationInput {
  /**
   * The Amazon Resource Name (ARN) of the file system association that you want to update.
   *
   * @public
   */
  FileSystemAssociationARN: string | undefined;

  /**
   * The user name of the user credential that has permission to access the root share D$ of the Amazon FSx file system. The user account must belong to the Amazon FSx delegated admin user group.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The password of the user credential.
   *
   * @public
   */
  Password?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the storage used for the audit logs.
   *
   * @public
   */
  AuditDestinationARN?: string | undefined;

  /**
   * The refresh cache information for the file share or FSx file systems.
   *
   * @public
   */
  CacheAttributes?: CacheAttributes | undefined;
}

/**
 * @public
 */
export interface UpdateFileSystemAssociationOutput {
  /**
   * The ARN of the updated file system association.
   *
   * @public
   */
  FileSystemAssociationARN?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayInformationInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * The name you configured for your gateway.
   *
   * @public
   */
  GatewayName?: string | undefined;

  /**
   * A value that indicates the time zone of the gateway.
   *
   * @public
   */
  GatewayTimezone?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that you want to use to monitor and log events in the gateway.
   *
   * For more information, see [What is Amazon CloudWatch Logs?](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html)
   *
   * @public
   */
  CloudWatchLogGroupARN?: string | undefined;

  /**
   * Specifies the size of the gateway's metadata cache. This setting impacts gateway performance and hardware recommendations. For more information, see [Performance guidance for gateways with multiple file shares](https://docs.aws.amazon.com/filegateway/latest/files3/performance-multiple-file-shares.html) in the *Amazon S3 File Gateway User Guide*.
   *
   * @public
   */
  GatewayCapacity?: GatewayCapacity | undefined;
}

/**
 * A JSON object containing the Amazon Resource Name (ARN) of the gateway that was updated.
 *
 * @public
 */
export interface UpdateGatewayInformationOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;

  /**
   * The name you configured for your gateway.
   *
   * @public
   */
  GatewayName?: string | undefined;
}

/**
 * A JSON object containing the Amazon Resource Name (ARN) of the gateway to update.
 *
 * @public
 */
export interface UpdateGatewaySoftwareNowInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;
}

/**
 * A JSON object containing the Amazon Resource Name (ARN) of the gateway that was updated.
 *
 * @public
 */
export interface UpdateGatewaySoftwareNowOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * A JSON object containing the following fields:
 *
 * - UpdateMaintenanceStartTimeInput$SoftwareUpdatePreferences
 * - UpdateMaintenanceStartTimeInput$DayOfMonth
 * - UpdateMaintenanceStartTimeInput$DayOfWeek
 * - UpdateMaintenanceStartTimeInput$HourOfDay
 * - UpdateMaintenanceStartTimeInput$MinuteOfHour
 *
 * @public
 */
export interface UpdateMaintenanceStartTimeInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * The hour component of the maintenance start time represented as *hh*, where *hh* is the hour (00 to 23). The hour of the day is in the time zone of the gateway.
   *
   * @public
   */
  HourOfDay?: number | undefined;

  /**
   * The minute component of the maintenance start time represented as *mm*, where *mm* is the minute (00 to 59). The minute of the hour is in the time zone of the gateway.
   *
   * @public
   */
  MinuteOfHour?: number | undefined;

  /**
   * The day of the week component of the maintenance start time week represented as an ordinal number from 0 to 6, where 0 represents Sunday and 6 represents Saturday.
   *
   * @public
   */
  DayOfWeek?: number | undefined;

  /**
   * The day of the month component of the maintenance start time represented as an ordinal number from 1 to 28, where 1 represents the first day of the month. It is not possible to set the maintenance schedule to start on days 29 through 31.
   *
   * @public
   */
  DayOfMonth?: number | undefined;

  /**
   * A set of variables indicating the software update preferences for the gateway.
   *
   * Includes `AutomaticUpdatePolicy` field with the following inputs:
   *
   * `ALL_VERSIONS` - Enables regular gateway maintenance updates.
   *
   * `EMERGENCY_VERSIONS_ONLY` - Disables regular gateway maintenance updates. The gateway will still receive emergency version updates on rare occasions if necessary to remedy highly critical security or durability issues. You will be notified before an emergency version update is applied. These updates are applied during your gateway's scheduled maintenance window.
   *
   * @public
   */
  SoftwareUpdatePreferences?: SoftwareUpdatePreferences | undefined;
}

/**
 * A JSON object containing the Amazon Resource Name (ARN) of the gateway whose maintenance start time is updated.
 *
 * @public
 */
export interface UpdateMaintenanceStartTimeOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * UpdateNFSFileShareInput
 *
 * @public
 */
export interface UpdateNFSFileShareInput {
  /**
   * The Amazon Resource Name (ARN) of the file share to be updated.
   *
   * @public
   */
  FileShareARN: string | undefined;

  /**
   * A value that specifies the type of server-side encryption that the file share will use for the data that it stores in Amazon S3.
   *
   * > **Note:**
   * >
   * > We recommend using `EncryptionType` instead of `KMSEncrypted` to set the file share encryption method. You do not need to provide values for both parameters.
   * >
   * > If values for both parameters exist in the same request, then the specified encryption methods must not conflict. For example, if `EncryptionType` is `SseS3`, then `KMSEncrypted` must be `false`. If `EncryptionType` is `SseKms` or `DsseKms`, then `KMSEncrypted` must be `true`.
   *
   * @public
   */
  EncryptionType?: EncryptionType | undefined;

  /**
   * Optional. Set to `true` to use Amazon S3 server-side encryption with your own KMS key (SSE-KMS), or `false` to use a key managed by Amazon S3 (SSE-S3). To use dual-layer encryption (DSSE-KMS), set the `EncryptionType` parameter instead.
   *
   * > **Note:**
   * >
   * > We recommend using `EncryptionType` instead of `KMSEncrypted` to set the file share encryption method. You do not need to provide values for both parameters.
   * >
   * > If values for both parameters exist in the same request, then the specified encryption methods must not conflict. For example, if `EncryptionType` is `SseS3`, then `KMSEncrypted` must be `false`. If `EncryptionType` is `SseKms` or `DsseKms`, then `KMSEncrypted` must be `true`.
   *
   * Valid Values: `true` | `false`
   *
   * @deprecated KMSEncrypted is deprecated, use EncryptionType instead.
   * @public
   */
  KMSEncrypted?: boolean | undefined;

  /**
   * Optional. The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value must be set if `KMSEncrypted` is `true`, or if `EncryptionType` is `SseKms` or `DsseKms`.
   *
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * The default values for the file share. Optional.
   *
   * @public
   */
  NFSFileShareDefaults?: NFSFileShareDefaults | undefined;

  /**
   * The default storage class for objects put into an Amazon S3 bucket by the S3 File Gateway. The default value is `S3_STANDARD`. Optional.
   *
   * Valid Values: `S3_STANDARD` | `S3_INTELLIGENT_TIERING` | `S3_STANDARD_IA` | `S3_ONEZONE_IA`
   *
   * @public
   */
  DefaultStorageClass?: string | undefined;

  /**
   * A value that sets the access control list (ACL) permission for objects in the S3 bucket that a S3 File Gateway puts objects into. The default value is `private`.
   *
   * @public
   */
  ObjectACL?: ObjectACL | undefined;

  /**
   * The list of clients that are allowed to access the S3 File Gateway. The list must contain either valid IPv4/IPv6 addresses or valid CIDR blocks.
   *
   * @public
   */
  ClientList?: string[] | undefined;

  /**
   * The user mapped to anonymous user.
   *
   * Valid values are the following:
   *
   * - `RootSquash`: Only root is mapped to anonymous user.
   * - `NoSquash`: No one is mapped to anonymous user.
   * - `AllSquash`: Everyone is mapped to anonymous user.
   *
   * @public
   */
  Squash?: string | undefined;

  /**
   * A value that sets the write status of a file share. Set this value to `true` to set the write status to read-only, otherwise set to `false`.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  ReadOnly?: boolean | undefined;

  /**
   * A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to `true` to enable MIME type guessing, otherwise set to `false`. The default value is `true`.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  GuessMIMETypeEnabled?: boolean | undefined;

  /**
   * A value that sets who pays the cost of the request and the cost associated with data download from the S3 bucket. If this value is set to `true`, the requester pays the costs; otherwise, the S3 bucket owner pays. However, the S3 bucket owner always pays the cost of storing data.
   *
   * > **Note:** `RequesterPays` is a configuration for the S3 bucket that backs the file share, so make sure that the configuration on the file share is the same as the S3 bucket configuration.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  RequesterPays?: boolean | undefined;

  /**
   * The name of the file share. Optional.
   *
   * > **Note:**
   * >
   * > `FileShareName` must be set if an S3 prefix name is set in `LocationARN`, or if an access point or access point alias is used.
   * >
   * > A valid NFS file share name can only contain the following characters: `a`-`z`, `A`-`Z`, `0`-`9`, `-`, `.`, and `_`.
   *
   * @public
   */
  FileShareName?: string | undefined;

  /**
   * Specifies refresh cache information for the file share.
   *
   * @public
   */
  CacheAttributes?: CacheAttributes | undefined;

  /**
   * The notification policy of the file share. `SettlingTimeInSeconds` controls the number of seconds to wait after the last point in time a client wrote to a file before generating an `ObjectUploaded` notification. Because clients can make many small writes to files, it's best to set this parameter for as long as possible to avoid generating multiple notifications for the same file in a small time period.
   *
   * > **Note:**
   * >
   * > `SettlingTimeInSeconds` has no effect on the timing of the object uploading to Amazon S3, only the timing of the notification.
   * >
   * > This setting is not meant to specify an exact time at which the notification will be sent. In some cases, the gateway might require more than the specified delay time to generate and send notifications.
   *
   * The following example sets `NotificationPolicy` on with `SettlingTimeInSeconds` set to 60.
   *
   * `\{\"Upload\": \{\"SettlingTimeInSeconds\": 60\}\}`
   *
   * The following example sets `NotificationPolicy` off.
   *
   * `\{\}`
   *
   * @public
   */
  NotificationPolicy?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the storage used for audit logs.
   *
   * @public
   */
  AuditDestinationARN?: string | undefined;
}

/**
 * UpdateNFSFileShareOutput
 *
 * @public
 */
export interface UpdateNFSFileShareOutput {
  /**
   * The Amazon Resource Name (ARN) of the updated file share.
   *
   * @public
   */
  FileShareARN?: string | undefined;
}

/**
 * UpdateSMBFileShareInput
 *
 * @public
 */
export interface UpdateSMBFileShareInput {
  /**
   * The Amazon Resource Name (ARN) of the SMB file share that you want to update.
   *
   * @public
   */
  FileShareARN: string | undefined;

  /**
   * A value that specifies the type of server-side encryption that the file share will use for the data that it stores in Amazon S3.
   *
   * > **Note:**
   * >
   * > We recommend using `EncryptionType` instead of `KMSEncrypted` to set the file share encryption method. You do not need to provide values for both parameters.
   * >
   * > If values for both parameters exist in the same request, then the specified encryption methods must not conflict. For example, if `EncryptionType` is `SseS3`, then `KMSEncrypted` must be `false`. If `EncryptionType` is `SseKms` or `DsseKms`, then `KMSEncrypted` must be `true`.
   *
   * @public
   */
  EncryptionType?: EncryptionType | undefined;

  /**
   * Optional. Set to `true` to use Amazon S3 server-side encryption with your own KMS key (SSE-KMS), or `false` to use a key managed by Amazon S3 (SSE-S3). To use dual-layer encryption (DSSE-KMS), set the `EncryptionType` parameter instead.
   *
   * > **Note:**
   * >
   * > We recommend using `EncryptionType` instead of `KMSEncrypted` to set the file share encryption method. You do not need to provide values for both parameters.
   * >
   * > If values for both parameters exist in the same request, then the specified encryption methods must not conflict. For example, if `EncryptionType` is `SseS3`, then `KMSEncrypted` must be `false`. If `EncryptionType` is `SseKms` or `DsseKms`, then `KMSEncrypted` must be `true`.
   *
   * Valid Values: `true` | `false`
   *
   * @deprecated KMSEncrypted is deprecated, use EncryptionType instead.
   * @public
   */
  KMSEncrypted?: boolean | undefined;

  /**
   * Optional. The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value must be set if `KMSEncrypted` is `true`, or if `EncryptionType` is `SseKms` or `DsseKms`.
   *
   * @public
   */
  KMSKey?: string | undefined;

  /**
   * The default storage class for objects put into an Amazon S3 bucket by the S3 File Gateway. The default value is `S3_STANDARD`. Optional.
   *
   * Valid Values: `S3_STANDARD` | `S3_INTELLIGENT_TIERING` | `S3_STANDARD_IA` | `S3_ONEZONE_IA`
   *
   * @public
   */
  DefaultStorageClass?: string | undefined;

  /**
   * A value that sets the access control list (ACL) permission for objects in the S3 bucket that a S3 File Gateway puts objects into. The default value is `private`.
   *
   * @public
   */
  ObjectACL?: ObjectACL | undefined;

  /**
   * A value that sets the write status of a file share. Set this value to `true` to set write status to read-only, otherwise set to `false`.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  ReadOnly?: boolean | undefined;

  /**
   * A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to `true` to enable MIME type guessing, otherwise set to `false`. The default value is `true`.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  GuessMIMETypeEnabled?: boolean | undefined;

  /**
   * A value that sets who pays the cost of the request and the cost associated with data download from the S3 bucket. If this value is set to `true`, the requester pays the costs; otherwise, the S3 bucket owner pays. However, the S3 bucket owner always pays the cost of storing data.
   *
   * > **Note:** `RequesterPays` is a configuration for the S3 bucket that backs the file share, so make sure that the configuration on the file share is the same as the S3 bucket configuration.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  RequesterPays?: boolean | undefined;

  /**
   * Set this value to `true` to enable access control list (ACL) on the SMB file share. Set it to `false` to map file and directory permissions to the POSIX permissions.
   *
   * For more information, see [Using Windows ACLs to limit SMB file share access](https://docs.aws.amazon.com/filegateway/latest/files3/smb-acl.html) in the *Amazon S3 File Gateway User Guide*.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  SMBACLEnabled?: boolean | undefined;

  /**
   * The files and folders on this share will only be visible to users with read access.
   *
   * @public
   */
  AccessBasedEnumeration?: boolean | undefined;

  /**
   * A list of users or groups in the Active Directory that have administrator rights to the file share. A group must be prefixed with the @ character. Acceptable formats include: `DOMAIN\User1`, `user1`, `@group1`, and `@DOMAIN\group1`. Can only be set if Authentication is set to `ActiveDirectory`.
   *
   * @public
   */
  AdminUserList?: string[] | undefined;

  /**
   * A list of users or groups in the Active Directory that are allowed to access the file share. A group must be prefixed with the @ character. Acceptable formats include: `DOMAIN\User1`, `user1`, `@group1`, and `@DOMAIN\group1`. Can only be set if Authentication is set to `ActiveDirectory`.
   *
   * @public
   */
  ValidUserList?: string[] | undefined;

  /**
   * A list of users or groups in the Active Directory that are not allowed to access the file share. A group must be prefixed with the @ character. Acceptable formats include: `DOMAIN\User1`, `user1`, `@group1`, and `@DOMAIN\group1`. Can only be set if Authentication is set to `ActiveDirectory`.
   *
   * @public
   */
  InvalidUserList?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the storage used for audit logs.
   *
   * @public
   */
  AuditDestinationARN?: string | undefined;

  /**
   * The case of an object name in an Amazon S3 bucket. For `ClientSpecified`, the client determines the case sensitivity. For `CaseSensitive`, the gateway determines the case sensitivity. The default value is `ClientSpecified`.
   *
   * @public
   */
  CaseSensitivity?: CaseSensitivity | undefined;

  /**
   * The name of the file share. Optional.
   *
   * > **Note:**
   * >
   * > `FileShareName` must be set if an S3 prefix name is set in `LocationARN`, or if an access point or access point alias is used.
   * >
   * > A valid SMB file share name cannot contain the following characters: `[`,`]`,`#`,`;`,`<`,`>`,`:`,`"`,`\`,`/`,`|`,`?`,`*`,`+`, or ASCII control characters `1-31`.
   *
   * @public
   */
  FileShareName?: string | undefined;

  /**
   * Specifies refresh cache information for the file share.
   *
   * @public
   */
  CacheAttributes?: CacheAttributes | undefined;

  /**
   * The notification policy of the file share. `SettlingTimeInSeconds` controls the number of seconds to wait after the last point in time a client wrote to a file before generating an `ObjectUploaded` notification. Because clients can make many small writes to files, it's best to set this parameter for as long as possible to avoid generating multiple notifications for the same file in a small time period.
   *
   * > **Note:**
   * >
   * > `SettlingTimeInSeconds` has no effect on the timing of the object uploading to Amazon S3, only the timing of the notification.
   * >
   * > This setting is not meant to specify an exact time at which the notification will be sent. In some cases, the gateway might require more than the specified delay time to generate and send notifications.
   *
   * The following example sets `NotificationPolicy` on with `SettlingTimeInSeconds` set to 60.
   *
   * `\{\"Upload\": \{\"SettlingTimeInSeconds\": 60\}\}`
   *
   * The following example sets `NotificationPolicy` off.
   *
   * `\{\}`
   *
   * @public
   */
  NotificationPolicy?: string | undefined;

  /**
   * Specifies whether opportunistic locking is enabled for the SMB file share.
   *
   * > **Note:** Enabling opportunistic locking on case-sensitive shares is not recommended for workloads that involve access to files with the same name in different case.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  OplocksEnabled?: boolean | undefined;
}

/**
 * UpdateSMBFileShareOutput
 *
 * @public
 */
export interface UpdateSMBFileShareOutput {
  /**
   * The Amazon Resource Name (ARN) of the updated SMB file share.
   *
   * @public
   */
  FileShareARN?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSMBFileShareVisibilityInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * The shares on this gateway appear when listing shares.
   *
   * @public
   */
  FileSharesVisible: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateSMBFileShareVisibilityOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSMBLocalGroupsInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * A list of Active Directory users and groups that you want to grant special permissions for SMB file shares on the gateway.
   *
   * @public
   */
  SMBLocalGroups: SMBLocalGroups | undefined;
}

/**
 * @public
 */
export interface UpdateSMBLocalGroupsOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSMBSecurityStrategyInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN: string | undefined;

  /**
   * Specifies the type of security strategy.
   *
   * `ClientSpecified`: If you choose this option, requests are established based on what is negotiated by the client. This option is recommended when you want to maximize compatibility across different clients in your environment. Supported only for S3 File Gateway.
   *
   * `MandatorySigning`: If you choose this option, File Gateway only allows connections from SMBv2 or SMBv3 clients that have signing enabled. This option works with SMB clients on Microsoft Windows Vista, Windows Server 2008 or newer.
   *
   * `MandatoryEncryption`: If you choose this option, File Gateway only allows connections from SMBv3 clients that have encryption enabled. This option is recommended for environments that handle sensitive data. This option works with SMB clients on Microsoft Windows 8, Windows Server 2012 or newer.
   *
   * `MandatoryEncryptionNoAes128`: If you choose this option, File Gateway only allows connections from SMBv3 clients that use 256-bit AES encryption algorithms. 128-bit algorithms are not allowed. This option is recommended for environments that handle sensitive data. It works with SMB clients on Microsoft Windows 8, Windows Server 2012, or later.
   *
   * @public
   */
  SMBSecurityStrategy: SMBSecurityStrategy | undefined;
}

/**
 * @public
 */
export interface UpdateSMBSecurityStrategyOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayARN?: string | undefined;
}

/**
 * A JSON object containing one or more of the following fields:
 *
 * - UpdateSnapshotScheduleInput$Description
 * - UpdateSnapshotScheduleInput$RecurrenceInHours
 * - UpdateSnapshotScheduleInput$StartAt
 * - UpdateSnapshotScheduleInput$VolumeARN
 *
 * @public
 */
export interface UpdateSnapshotScheduleInput {
  /**
   * The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to return a list of gateway volumes.
   *
   * @public
   */
  VolumeARN: string | undefined;

  /**
   * The hour of the day at which the snapshot schedule begins represented as *hh*, where *hh* is the hour (0 to 23). The hour of the day is in the time zone of the gateway.
   *
   * @public
   */
  StartAt: number | undefined;

  /**
   * Frequency of snapshots. Specify the number of hours between snapshots.
   *
   * @public
   */
  RecurrenceInHours: number | undefined;

  /**
   * Optional description of the snapshot that overwrites the existing description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of up to 50 tags that can be assigned to a snapshot. Each tag is a key-value pair.
   *
   * > **Note:** Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * A JSON object containing the Amazon Resource Name (ARN) of the updated storage volume.
 *
 * @public
 */
export interface UpdateSnapshotScheduleOutput {
  /**
   * The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to return a list of gateway volumes.
   *
   * @public
   */
  VolumeARN?: string | undefined;
}

/**
 * @public
 */
export interface UpdateVTLDeviceTypeInput {
  /**
   * The Amazon Resource Name (ARN) of the medium changer you want to select.
   *
   * @public
   */
  VTLDeviceARN: string | undefined;

  /**
   * The type of medium changer you want to select.
   *
   * Valid Values: `STK-L700` | `AWS-Gateway-VTL` | `IBM-03584L32-0402`
   *
   * @public
   */
  DeviceType: string | undefined;
}

/**
 * UpdateVTLDeviceTypeOutput
 *
 * @public
 */
export interface UpdateVTLDeviceTypeOutput {
  /**
   * The Amazon Resource Name (ARN) of the medium changer you have selected.
   *
   * @public
   */
  VTLDeviceARN?: string | undefined;
}

// smithy-typescript generated code
import type {
  DeletionMode,
  IpAddressType,
  LifeCycleState,
  PerformanceMode,
  ReplicationOverwriteProtection,
  ReplicationStatus,
  Resource,
  ResourceIdType,
  Status,
  ThroughputMode,
  TransitionToArchiveRules,
  TransitionToIARules,
  TransitionToPrimaryStorageClassRules,
} from "./enums";

/**
 * The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.
 *
 * @public
 */
export interface PosixUser {
  /**
   * The POSIX user ID used for all file system operations using this access point.
   *
   * @public
   */
  Uid: number | undefined;

  /**
   * The POSIX group ID used for all file system operations using this access point.
   *
   * @public
   */
  Gid: number | undefined;

  /**
   * Secondary POSIX group IDs used for all file system operations using this access point.
   *
   * @public
   */
  SecondaryGids?: number[] | undefined;
}

/**
 * Required if the `RootDirectory` > `Path` specified does not exist. Specifies the POSIX IDs and permissions to apply to the access point's `RootDirectory` > `Path`. If the access point root directory does not exist, EFS creates it with these settings when a client connects to the access point. When specifying `CreationInfo`, you must include values for all properties.
 *
 * Amazon EFS creates a root directory only if you have provided the CreationInfo: OwnUid, OwnGID, and permissions for the directory. If you do not provide this information, Amazon EFS does not create the root directory. If the root directory does not exist, attempts to mount using the access point will fail.
 *
 * > **Important:** If you do not provide `CreationInfo` and the specified `RootDirectory` does not exist, attempts to mount the file system using the access point will fail.
 *
 * @public
 */
export interface CreationInfo {
  /**
   * Specifies the POSIX user ID to apply to the `RootDirectory`. Accepts values from 0 to 2^32 (4294967295).
   *
   * @public
   */
  OwnerUid: number | undefined;

  /**
   * Specifies the POSIX group ID to apply to the `RootDirectory`. Accepts values from 0 to 2^32 (4294967295).
   *
   * @public
   */
  OwnerGid: number | undefined;

  /**
   * Specifies the POSIX permissions to apply to the `RootDirectory`, in the format of an octal number representing the file's mode bits.
   *
   * @public
   */
  Permissions: string | undefined;
}

/**
 * Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's `RootDirectory` and its subdirectories.
 *
 * @public
 */
export interface RootDirectory {
  /**
   * Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system. A path can have up to four subdirectories. If the specified path does not exist, you are required to provide the `CreationInfo`.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * (Optional) Specifies the POSIX IDs and permissions to apply to the access point's `RootDirectory`. If the `RootDirectory` > `Path` specified does not exist, EFS creates the root directory using the `CreationInfo` settings when a client connects to an access point. When specifying the `CreationInfo`, you must provide values for all properties.
   *
   * > **Important:** If you do not provide `CreationInfo` and the specified `RootDirectory` > `Path` does not exist, attempts to mount the file system using the access point will fail.
   *
   * @public
   */
  CreationInfo?: CreationInfo | undefined;
}

/**
 * A tag is a key-value pair. Allowed characters are letters, white space, and numbers that can be represented in UTF-8, and the following characters:`+ - = . _ : /`.
 *
 * @public
 */
export interface Tag {
  /**
   * The tag key (String). The key can't start with `aws:`.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value of the tag key.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Provides a description of an EFS file system access point.
 *
 * @public
 */
export interface AccessPointDescription {
  /**
   * The opaque string specified in the request to ensure idempotent creation.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The name of the access point. This is the value of the `Name` tag.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The tags associated with the access point, presented as an array of Tag objects.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The ID of the access point, assigned by Amazon EFS.
   *
   * @public
   */
  AccessPointId?: string | undefined;

  /**
   * The unique Amazon Resource Name (ARN) associated with the access point.
   *
   * @public
   */
  AccessPointArn?: string | undefined;

  /**
   * The ID of the EFS file system that the access point applies to.
   *
   * @public
   */
  FileSystemId?: string | undefined;

  /**
   * The full POSIX identity, including the user ID, group ID, and secondary group IDs on the access point that is used for all file operations by NFS clients using the access point.
   *
   * @public
   */
  PosixUser?: PosixUser | undefined;

  /**
   * The directory on the EFS file system that the access point exposes as the root directory to NFS clients using the access point.
   *
   * @public
   */
  RootDirectory?: RootDirectory | undefined;

  /**
   * Identifies the Amazon Web Services account that owns the access point resource.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * Identifies the lifecycle phase of the access point.
   *
   * @public
   */
  LifeCycleState?: LifeCycleState | undefined;
}

/**
 * The backup policy for the file system used to create automatic daily backups. If status has a value of `ENABLED`, the file system is being automatically backed up. For more information, see [Automatic backups](https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups).
 *
 * @public
 */
export interface BackupPolicy {
  /**
   * Describes the status of the file system's backup policy.
   *
   * - **`ENABLED`** – EFS is automatically backing up the file system.
   * - **`ENABLING`** – EFS is turning on automatic backups for the file system.
   * - **`DISABLED`** – Automatic back ups are turned off for the file system.
   * - **`DISABLING`** – EFS is turning off automatic backups for the file system.
   *
   * @public
   */
  Status: Status | undefined;
}

/**
 * @public
 */
export interface BackupPolicyDescription {
  /**
   * Describes the file system's backup policy, indicating whether automatic backups are turned on or off.
   *
   * @public
   */
  BackupPolicy?: BackupPolicy | undefined;
}

/**
 * @public
 */
export interface CreateAccessPointRequest {
  /**
   * A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Creates tags associated with the access point. Each tag is a key-value pair, each key must be unique. For more information, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The ID of the EFS file system that the access point provides access to.
   *
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * The operating system user and group applied to all file system requests made using the access point.
   *
   * @public
   */
  PosixUser?: PosixUser | undefined;

  /**
   * Specifies the directory on the EFS file system that the access point exposes as the root directory of your file system to NFS clients using the access point. The clients using the access point can only access the root directory and below. If the `RootDirectory` > `Path` specified does not exist, Amazon EFS creates it and applies the `CreationInfo` settings when a client connects to an access point. When specifying a `RootDirectory`, you must provide the `Path`, and the `CreationInfo`.
   *
   * Amazon EFS creates a root directory only if you have provided the CreationInfo: OwnUid, OwnGID, and permissions for the directory. If you do not provide this information, Amazon EFS does not create the root directory. If the root directory does not exist, attempts to mount using the access point will fail.
   *
   * @public
   */
  RootDirectory?: RootDirectory | undefined;
}

/**
 * @public
 */
export interface CreateFileSystemRequest {
  /**
   * A string of up to 64 ASCII characters. Amazon EFS uses this to ensure idempotent creation.
   *
   * @public
   */
  CreationToken?: string | undefined;

  /**
   * The performance mode of the file system. We recommend `generalPurpose` performance mode for all file systems. File systems using the `maxIO` performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. The `maxIO` mode is not supported on One Zone file systems.
   *
   * > **Important:** Due to the higher per-operation latencies with Max I/O, we recommend using General Purpose performance mode for all file systems.
   *
   * Default is `generalPurpose`.
   *
   * @public
   */
  PerformanceMode?: PerformanceMode | undefined;

  /**
   * A Boolean value that, if true, creates an encrypted file system. When creating an encrypted file system, you have the option of specifying an existing Key Management Service key (KMS key). If you don't specify a KMS key, then the default KMS key for Amazon EFS, `/aws/elasticfilesystem`, is used to protect the encrypted file system.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * The ID of the KMS key that you want to use to protect the encrypted file system. This parameter is required only if you want to use a non-default KMS key. If this parameter is not specified, the default KMS key for Amazon EFS is used. You can specify a KMS key ID using the following formats:
   *
   * - Key ID - A unique identifier of the key, for example `1234abcd-12ab-34cd-56ef-1234567890ab`.
   * - ARN - An Amazon Resource Name (ARN) for the key, for example `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`.
   * - Key alias - A previously created display name for a key, for example `alias/projectKey1`.
   * - Key alias ARN - An ARN for a key alias, for example `arn:aws:kms:us-west-2:444455556666:alias/projectKey1`.
   *
   * If you use `KmsKeyId`, you must set the CreateFileSystemRequest$Encrypted parameter to true.
   *
   * > **Important:** EFS accepts only symmetric KMS keys. You cannot use asymmetric KMS keys with Amazon EFS file systems.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Specifies the throughput mode for the file system. The mode can be `bursting`, `provisioned`, or `elastic`. If you set `ThroughputMode` to `provisioned`, you must also set a value for `ProvisionedThroughputInMibps`. After you create the file system, you can decrease your file system's Provisioned throughput or change between the throughput modes, with certain time restrictions. For more information, see [Specifying throughput with provisioned mode](https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput) in the *Amazon EFS User Guide*.
   *
   * Default is `bursting`.
   *
   * @public
   */
  ThroughputMode?: ThroughputMode | undefined;

  /**
   * The throughput, measured in mebibytes per second (MiBps), that you want to provision for a file system that you're creating. Required if `ThroughputMode` is set to `provisioned`. Valid values are 1-3414 MiBps, with the upper limit depending on Region. To increase this limit, contact Amazon Web Services Support. For more information, see [Amazon EFS quotas that you can increase](https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits) in the *Amazon EFS User Guide*.
   *
   * @public
   */
  ProvisionedThroughputInMibps?: number | undefined;

  /**
   * For One Zone file systems, specify the Amazon Web Services Availability Zone in which to create the file system. Use the format `us-east-1a` to specify the Availability Zone. For more information about One Zone file systems, see [EFS file system types](https://docs.aws.amazon.com/efs/latest/ug/availability-durability.html#file-system-type) in the *Amazon EFS User Guide*.
   *
   * > **Note:** One Zone file systems are not available in all Availability Zones in Amazon Web Services Regions where Amazon EFS is available.
   *
   * @public
   */
  AvailabilityZoneName?: string | undefined;

  /**
   * Specifies whether automatic backups are enabled on the file system that you are creating. Set the value to `true` to enable automatic backups. If you are creating a One Zone file system, automatic backups are enabled by default. For more information, see [Automatic backups](https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups) in the *Amazon EFS User Guide*.
   *
   * Default is `false`. However, if you specify an `AvailabilityZoneName`, the default is `true`.
   *
   * > **Note:** Backup is not available in all Amazon Web Services Regions where Amazon EFS is available.
   *
   * @public
   */
  Backup?: boolean | undefined;

  /**
   * Use to create one or more tags associated with the file system. Each tag is a user-defined key-value pair. Name your file system on creation by including a `"Key":"Name","Value":"\{value\}"` key-value pair. Each key must be unique. For more information, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Describes the protection on a file system.
 *
 * @public
 */
export interface FileSystemProtectionDescription {
  /**
   * The status of the file system's replication overwrite protection.
   *
   * - `ENABLED` – The file system cannot be used as the destination file system in a replication configuration. The file system is writeable. Replication overwrite protection is `ENABLED` by default.
   * - `DISABLED` – The file system can be used as the destination file system in a replication configuration. The file system is read-only and can only be modified by EFS replication.
   * - `REPLICATING` – The file system is being used as the destination file system in a replication configuration. The file system is read-only and is modified only by EFS replication.
   *
   * If the replication configuration is deleted, the file system's replication overwrite protection is re-enabled, the file system becomes writeable.
   *
   * @public
   */
  ReplicationOverwriteProtection?: ReplicationOverwriteProtection | undefined;
}

/**
 * The latest known metered size (in bytes) of data stored in the file system, in its `Value` field, and the time at which that size was determined in its `Timestamp` field. The value doesn't represent the size of a consistent snapshot of the file system, but it is eventually consistent when there are no writes to the file system. That is, the value represents the actual size only if the file system is not modified for a period longer than a couple of hours. Otherwise, the value is not necessarily the exact size the file system was at any instant in time.
 *
 * @public
 */
export interface FileSystemSize {
  /**
   * The latest known metered size (in bytes) of data stored in the file system.
   *
   * @public
   */
  Value: number | undefined;

  /**
   * The time at which the size of data, returned in the `Value` field, was determined. The value is the integer number of seconds since 1970-01-01T00:00:00Z.
   *
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * The latest known metered size (in bytes) of data stored in the Infrequent Access storage class.
   *
   * @public
   */
  ValueInIA?: number | undefined;

  /**
   * The latest known metered size (in bytes) of data stored in the Standard storage class.
   *
   * @public
   */
  ValueInStandard?: number | undefined;

  /**
   * The latest known metered size (in bytes) of data stored in the Archive storage class.
   *
   * @public
   */
  ValueInArchive?: number | undefined;
}

/**
 * A description of the file system.
 *
 * @public
 */
export interface FileSystemDescription {
  /**
   * The Amazon Web Services account that created the file system.
   *
   * @public
   */
  OwnerId: string | undefined;

  /**
   * The opaque string specified in the request.
   *
   * @public
   */
  CreationToken: string | undefined;

  /**
   * The ID of the file system, assigned by Amazon EFS.
   *
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the EFS file system, in the format `arn:aws:elasticfilesystem:region:account-id:file-system/file-system-id`. Example with sample data: `arn:aws:elasticfilesystem:us-west-2:1111333322228888:file-system/fs-01234567`
   *
   * @public
   */
  FileSystemArn?: string | undefined;

  /**
   * The time that the file system was created, in seconds (since 1970-01-01T00:00:00Z).
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The lifecycle phase of the file system.
   *
   * @public
   */
  LifeCycleState: LifeCycleState | undefined;

  /**
   * You can add tags to a file system, including a `Name` tag. For more information, see CreateFileSystem. If the file system has a `Name` tag, Amazon EFS returns the value in this field.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The current number of mount targets that the file system has. For more information, see CreateMountTarget.
   *
   * @public
   */
  NumberOfMountTargets: number | undefined;

  /**
   * The latest known metered size (in bytes) of data stored in the file system, in its `Value` field, and the time at which that size was determined in its `Timestamp` field. The `Timestamp` value is the integer number of seconds since 1970-01-01T00:00:00Z. The `SizeInBytes` value doesn't represent the size of a consistent snapshot of the file system, but it is eventually consistent when there are no writes to the file system. That is, `SizeInBytes` represents actual size only if the file system is not modified for a period longer than a couple of hours. Otherwise, the value is not the exact size that the file system was at any point in time.
   *
   * @public
   */
  SizeInBytes: FileSystemSize | undefined;

  /**
   * The performance mode of the file system.
   *
   * @public
   */
  PerformanceMode: PerformanceMode | undefined;

  /**
   * A Boolean value that, if true, indicates that the file system is encrypted.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * The ID of an KMS key used to protect the encrypted file system.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Displays the file system's throughput mode. For more information, see [Throughput modes](https://docs.aws.amazon.com/efs/latest/ug/performance.html#throughput-modes) in the *Amazon EFS User Guide*.
   *
   * @public
   */
  ThroughputMode?: ThroughputMode | undefined;

  /**
   * The amount of provisioned throughput, measured in MiBps, for the file system. Valid for file systems using `ThroughputMode` set to `provisioned`.
   *
   * @public
   */
  ProvisionedThroughputInMibps?: number | undefined;

  /**
   * Describes the Amazon Web Services Availability Zone in which the file system is located, and is valid only for One Zone file systems. For more information, see [Using EFS storage classes](https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html) in the *Amazon EFS User Guide*.
   *
   * @public
   */
  AvailabilityZoneName?: string | undefined;

  /**
   * The unique and consistent identifier of the Availability Zone in which the file system is located, and is valid only for One Zone file systems. For example, `use1-az1` is an Availability Zone ID for the us-east-1 Amazon Web Services Region, and it has the same location in every Amazon Web Services account.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The tags associated with the file system, presented as an array of `Tag` objects.
   *
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * Describes the protection on the file system.
   *
   * @public
   */
  FileSystemProtection?: FileSystemProtectionDescription | undefined;
}

/**
 * @public
 */
export interface CreateMountTargetRequest {
  /**
   * The ID of the file system for which to create the mount target.
   *
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * The ID of the subnet to add the mount target in. For One Zone file systems, use the subnet that is associated with the file system's Availability Zone.
   *
   * @public
   */
  SubnetId: string | undefined;

  /**
   * If the IP address type for the mount target is IPv4, then specify the IPv4 address within the address range of the specified subnet.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * If the IP address type for the mount target is IPv6, then specify the IPv6 address within the address range of the specified subnet.
   *
   * @public
   */
  Ipv6Address?: string | undefined;

  /**
   * Specify the type of IP address of the mount target you are creating. Options are IPv4, dual stack, or IPv6. If you don’t specify an IpAddressType, then IPv4 is used.
   *
   * - IPV4_ONLY – Create mount target with IPv4 only subnet or dual-stack subnet.
   * - DUAL_STACK – Create mount target with dual-stack subnet.
   * - IPV6_ONLY – Create mount target with IPv6 only subnet.
   *
   * > **Note:** Creating IPv6 mount target only ENI in dual-stack subnet is not supported.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * VPC security group IDs, of the form `sg-xxxxxxxx`. These must be for the same VPC as the subnet specified. The maximum number of security groups depends on account quota. For more information, see [Amazon VPC Quotas](https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html) in the *Amazon VPC User Guide* (see the **Security Groups** table).
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;
}

/**
 * Provides a description of a mount target.
 *
 * @public
 */
export interface MountTargetDescription {
  /**
   * Amazon Web Services account ID that owns the resource.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * System-assigned mount target ID.
   *
   * @public
   */
  MountTargetId: string | undefined;

  /**
   * The ID of the file system for which the mount target is intended.
   *
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * The ID of the mount target's subnet.
   *
   * @public
   */
  SubnetId: string | undefined;

  /**
   * Lifecycle state of the mount target.
   *
   * @public
   */
  LifeCycleState: LifeCycleState | undefined;

  /**
   * Address at which the file system can be mounted by using the mount target.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * The IPv6 address for the mount target.
   *
   * @public
   */
  Ipv6Address?: string | undefined;

  /**
   * The ID of the network interface that Amazon EFS created when it created the mount target.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The unique and consistent identifier of the Availability Zone that the mount target resides in. For example, `use1-az1` is an AZ ID for the us-east-1 Region and it has the same location in every Amazon Web Services account.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The name of the Availability Zone in which the mount target is located. Availability Zones are independently mapped to names for each Amazon Web Services account. For example, the Availability Zone `us-east-1a` for your Amazon Web Services account might not be the same location as `us-east-1a` for another Amazon Web Services account.
   *
   * @public
   */
  AvailabilityZoneName?: string | undefined;

  /**
   * The virtual private cloud (VPC) ID that the mount target is configured in.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * Describes the new or existing destination file system for the replication configuration.
 *
 * - If you want to replicate to a new file system, do not specify the File System ID for the destination file system. Amazon EFS creates a new, empty file system. For One Zone storage, specify the Availability Zone to create the file system in. To use an Key Management Service key other than the default KMS key, then specify it. For more information, see [Configuring replication to new Amazon EFS file system](https://docs.aws.amazon.com/efs/latest/ug/create-replication.html) in the *Amazon EFS User Guide*.
 *
 *   > **Note:** After the file system is created, you cannot change the KMS key or the performance mode.
 * - If you want to replicate to an existing file system that's in the same account as the source file system, then you need to provide the ID or Amazon Resource Name (ARN) of the file system to which to replicate. The file system's replication overwrite protection must be disabled. For more information, see [Replicating to an existing file system](https://docs.aws.amazon.com/efs/latest/ug/efs-replication#replicate-existing-destination) in the *Amazon EFS User Guide*.
 * - If you are replicating the file system to a file system that's in a different account than the source file system (cross-account replication), you need to provide the ARN for the file system and the IAM role that allows Amazon EFS to perform replication on the destination account. The file system's replication overwrite protection must be disabled. For more information, see [Replicating across Amazon Web Services accounts](https://docs.aws.amazon.com/efs/latest/ug/cross-account-replication.html) in the *Amazon EFS User Guide*.
 *
 * @public
 */
export interface DestinationToCreate {
  /**
   * To create a file system that uses Regional storage, specify the Amazon Web Services Region in which to create the destination file system. The Region must be enabled for the Amazon Web Services account that owns the source file system. For more information, see [Managing Amazon Web Services Regions](https://docs.aws.amazon.com/general/latest/gr/rande-manage.html#rande-manage-enable) in the *Amazon Web Services General Reference Reference Guide*.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * To create a file system that uses One Zone storage, specify the name of the Availability Zone in which to create the destination file system.
   *
   * @public
   */
  AvailabilityZoneName?: string | undefined;

  /**
   * Specify the Key Management Service (KMS) key that you want to use to encrypt the destination file system. If you do not specify a KMS key, Amazon EFS uses your default KMS key for Amazon EFS, `/aws/elasticfilesystem`. This ID can be in one of the following formats:
   *
   * - Key ID - The unique identifier of the key, for example `1234abcd-12ab-34cd-56ef-1234567890ab`.
   * - ARN - The ARN for the key, for example `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`.
   * - Key alias - A previously created display name for a key, for example `alias/projectKey1`.
   * - Key alias ARN - The ARN for a key alias, for example `arn:aws:kms:us-west-2:444455556666:alias/projectKey1`.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The ID or ARN of the file system to use for the destination. For cross-account replication, this must be an ARN. The file system's replication overwrite replication must be disabled. If no ID or ARN is specified, then a new file system is created.
   *
   * > **Note:** When you initially configure replication to an existing file system, Amazon EFS writes data to or removes existing data from the destination file system to match data in the source file system. If you don't want to change data in the destination file system, then you should replicate to a new file system instead. For more information, see [https://docs.aws.amazon.com/efs/latest/ug/create-replication.html](https://docs.aws.amazon.com/efs/latest/ug/create-replication.html).
   *
   * @public
   */
  FileSystemId?: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the IAM role in the source account that allows Amazon EFS to perform replication on its behalf. This is optional for same-account replication and required for cross-account replication.
   *
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateReplicationConfigurationRequest {
  /**
   * Specifies the Amazon EFS file system that you want to replicate. This file system cannot already be a source or destination file system in another replication configuration.
   *
   * @public
   */
  SourceFileSystemId: string | undefined;

  /**
   * An array of destination configuration objects. Only one destination configuration object is supported.
   *
   * @public
   */
  Destinations: DestinationToCreate[] | undefined;
}

/**
 * Describes the destination file system in the replication configuration.
 *
 * @public
 */
export interface Destination {
  /**
   * Describes the status of the replication configuration. For more information about replication status, see [Viewing replication details](https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#restoring-backup-efsmonitoring-replication-status.html) in the *Amazon EFS User Guide*.
   *
   * @public
   */
  Status: ReplicationStatus | undefined;

  /**
   * The ID of the destination Amazon EFS file system.
   *
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * The Amazon Web Services Region in which the destination file system is located.
   *
   * @public
   */
  Region: string | undefined;

  /**
   * The time when the most recent sync was successfully completed on the destination file system. Any changes to data on the source file system that occurred before this time have been successfully replicated to the destination file system. Any changes that occurred after this time might not be fully replicated.
   *
   * @public
   */
  LastReplicatedTimestamp?: Date | undefined;

  /**
   * ID of the Amazon Web Services account in which the destination file system resides.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * Message that provides details about the `PAUSED` or `ERRROR` state of the replication destination configuration. For more information about replication status messages, see [Viewing replication details](https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#restoring-backup-efsmonitoring-replication-status.html) in the *Amazon EFS User Guide*.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the IAM role in the source account that allows Amazon EFS to perform replication on its behalf. This is optional for same-account replication and required for cross-account replication.
   *
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * Describes the replication configuration for a specific file system.
 *
 * @public
 */
export interface ReplicationConfigurationDescription {
  /**
   * The ID of the source Amazon EFS file system that is being replicated.
   *
   * @public
   */
  SourceFileSystemId: string | undefined;

  /**
   * The Amazon Web Services Region in which the source EFS file system is located.
   *
   * @public
   */
  SourceFileSystemRegion: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the current source file system in the replication configuration.
   *
   * @public
   */
  SourceFileSystemArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the original source EFS file system in the replication configuration.
   *
   * @public
   */
  OriginalSourceFileSystemArn: string | undefined;

  /**
   * Describes when the replication configuration was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * An array of destination objects. Only one destination object is supported.
   *
   * @public
   */
  Destinations: Destination[] | undefined;

  /**
   * ID of the Amazon Web Services account in which the source file system resides.
   *
   * @public
   */
  SourceFileSystemOwnerId?: string | undefined;
}

/**
 * @public
 */
export interface CreateTagsRequest {
  /**
   * The ID of the file system whose tags you want to modify (String). This operation modifies the tags only, not the file system.
   *
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * An array of `Tag` objects to add. Each `Tag` object is a key-value pair.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface DeleteAccessPointRequest {
  /**
   * The ID of the access point that you want to delete.
   *
   * @public
   */
  AccessPointId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFileSystemRequest {
  /**
   * The ID of the file system you want to delete.
   *
   * @public
   */
  FileSystemId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFileSystemPolicyRequest {
  /**
   * Specifies the EFS file system for which to delete the `FileSystemPolicy`.
   *
   * @public
   */
  FileSystemId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMountTargetRequest {
  /**
   * The ID of the mount target to delete (String).
   *
   * @public
   */
  MountTargetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationConfigurationRequest {
  /**
   * The ID of the source file system in the replication configuration.
   *
   * @public
   */
  SourceFileSystemId: string | undefined;

  /**
   * When replicating across Amazon Web Services accounts or across Amazon Web Services Regions, Amazon EFS deletes the replication configuration from both the source and destination account or Region (`ALL_CONFIGURATIONS`) by default. If there's a configuration or permissions issue that prevents Amazon EFS from deleting the replication configuration from both sides, you can use the `LOCAL_CONFIGURATION_ONLY` mode to delete the replication configuration from only the local side (the account or Region from which the delete is performed).
   *
   * > **Note:**
   * >
   * > Only use the `LOCAL_CONFIGURATION_ONLY` mode in the case that Amazon EFS is unable to delete the replication configuration in both the source and destination account or Region. Deleting the local configuration leaves the configuration in the other account or Region unrecoverable.
   * >
   * > Additionally, do not use this mode for same-account, same-region replication as doing so results in a BadRequest exception error.
   *
   * @public
   */
  DeletionMode?: DeletionMode | undefined;
}

/**
 * @public
 */
export interface DeleteTagsRequest {
  /**
   * The ID of the file system whose tags you want to delete (String).
   *
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * A list of tag keys to delete.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAccessPointsRequest {
  /**
   * (Optional) When retrieving all access points for a file system, you can optionally specify the `MaxItems` parameter to limit the number of objects returned in a response. The default value is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * `NextToken` is present if the response is paginated. You can use `NextMarker` in the subsequent request to fetch the next page of access point descriptions.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * (Optional) Specifies an EFS access point to describe in the response; mutually exclusive with `FileSystemId`.
   *
   * @public
   */
  AccessPointId?: string | undefined;

  /**
   * (Optional) If you provide a `FileSystemId`, EFS returns all access points for that file system; mutually exclusive with `AccessPointId`.
   *
   * @public
   */
  FileSystemId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccessPointsResponse {
  /**
   * An array of access point descriptions.
   *
   * @public
   */
  AccessPoints?: AccessPointDescription[] | undefined;

  /**
   * Present if there are more access points than returned in the response. You can use the NextMarker in the subsequent request to fetch the additional descriptions.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountPreferencesRequest {
  /**
   * (Optional) You can use `NextToken` in a subsequent request to fetch the next page of Amazon Web Services account preferences if the response payload was paginated.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * (Optional) When retrieving account preferences, you can optionally specify the `MaxItems` parameter to limit the number of objects returned in a response. The default value is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Describes the resource type and its ID preference for the user's Amazon Web Services account, in the current Amazon Web Services Region.
 *
 * @public
 */
export interface ResourceIdPreference {
  /**
   * Identifies the EFS resource ID preference, either `LONG_ID` (17 characters) or `SHORT_ID` (8 characters).
   *
   * @public
   */
  ResourceIdType?: ResourceIdType | undefined;

  /**
   * Identifies the Amazon EFS resources to which the ID preference setting applies, `FILE_SYSTEM` and `MOUNT_TARGET`.
   *
   * @public
   */
  Resources?: Resource[] | undefined;
}

/**
 * @public
 */
export interface DescribeAccountPreferencesResponse {
  /**
   * Describes the resource ID preference setting for the Amazon Web Services account associated with the user making the request, in the current Amazon Web Services Region.
   *
   * @public
   */
  ResourceIdPreference?: ResourceIdPreference | undefined;

  /**
   * Present if there are more records than returned in the response. You can use the `NextToken` in the subsequent request to fetch the additional descriptions.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBackupPolicyRequest {
  /**
   * Specifies which EFS file system for which to retrieve the `BackupPolicy`.
   *
   * @public
   */
  FileSystemId: string | undefined;
}

/**
 * @public
 */
export interface DescribeFileSystemPolicyRequest {
  /**
   * Specifies which EFS file system to retrieve the `FileSystemPolicy` for.
   *
   * @public
   */
  FileSystemId: string | undefined;
}

/**
 * @public
 */
export interface FileSystemPolicyDescription {
  /**
   * Specifies the EFS file system to which the `FileSystemPolicy` applies.
   *
   * @public
   */
  FileSystemId?: string | undefined;

  /**
   * The JSON formatted `FileSystemPolicy` for the EFS file system.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFileSystemsRequest {
  /**
   * (Optional) Specifies the maximum number of file systems to return in the response (integer). This number is automatically set to 100. The response is paginated at 100 per page if you have more than 100 file systems.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * (Optional) Opaque pagination token returned from a previous `DescribeFileSystems` operation (String). If present, specifies to continue the list from where the returning call had left off.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * (Optional) Restricts the list to the file system with this creation token (String). You specify a creation token when you create an Amazon EFS file system.
   *
   * @public
   */
  CreationToken?: string | undefined;

  /**
   * (Optional) ID of the file system whose description you want to retrieve (String).
   *
   * @public
   */
  FileSystemId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFileSystemsResponse {
  /**
   * Present if provided by caller in the request (String).
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * An array of file system descriptions.
   *
   * @public
   */
  FileSystems?: FileSystemDescription[] | undefined;

  /**
   * Present if there are more file systems than returned in the response (String). You can use the `NextMarker` in the subsequent request to fetch the descriptions.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLifecycleConfigurationRequest {
  /**
   * The ID of the file system whose `LifecycleConfiguration` object you want to retrieve (String).
   *
   * @public
   */
  FileSystemId: string | undefined;
}

/**
 * Describes a policy used by lifecycle management that specifies when to transition files into and out of storage classes. For more information, see [Managing file system storage](https://docs.aws.amazon.com/efs/latest/ug/lifecycle-management-efs.html).
 *
 * > **Note:** When using the `put-lifecycle-configuration` CLI command or the `PutLifecycleConfiguration` API action, Amazon EFS requires that each `LifecyclePolicy` object have only a single transition. This means that in a request body, `LifecyclePolicies` must be structured as an array of `LifecyclePolicy` objects, one object for each transition. For more information, see the request examples in PutLifecycleConfiguration.
 *
 * @public
 */
export interface LifecyclePolicy {
  /**
   * The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Infrequent Access (IA) storage. Metadata operations such as listing the contents of a directory don't count as file access events.
   *
   * @public
   */
  TransitionToIA?: TransitionToIARules | undefined;

  /**
   * Whether to move files back to primary (Standard) storage after they are accessed in IA or Archive storage. Metadata operations such as listing the contents of a directory don't count as file access events.
   *
   * @public
   */
  TransitionToPrimaryStorageClass?: TransitionToPrimaryStorageClassRules | undefined;

  /**
   * The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Archive storage. Metadata operations such as listing the contents of a directory don't count as file access events.
   *
   * @public
   */
  TransitionToArchive?: TransitionToArchiveRules | undefined;
}

/**
 * @public
 */
export interface LifecycleConfigurationDescription {
  /**
   * An array of lifecycle management policies. EFS supports a maximum of one policy per file system.
   *
   * @public
   */
  LifecyclePolicies?: LifecyclePolicy[] | undefined;
}

/**
 * @public
 */
export interface DescribeMountTargetsRequest {
  /**
   * (Optional) Maximum number of mount targets to return in the response. Currently, this number is automatically set to 10, and other values are ignored. The response is paginated at 100 per page if you have more than 100 mount targets.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * (Optional) Opaque pagination token returned from a previous `DescribeMountTargets` operation (String). If present, it specifies to continue the list from where the previous returning call left off.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * (Optional) ID of the file system whose mount targets you want to list (String). It must be included in your request if an `AccessPointId` or `MountTargetId` is not included. Accepts either a file system ID or ARN as input.
   *
   * @public
   */
  FileSystemId?: string | undefined;

  /**
   * (Optional) ID of the mount target that you want to have described (String). It must be included in your request if `FileSystemId` is not included. Accepts either a mount target ID or ARN as input.
   *
   * @public
   */
  MountTargetId?: string | undefined;

  /**
   * (Optional) The ID of the access point whose mount targets that you want to list. It must be included in your request if a `FileSystemId` or `MountTargetId` is not included in your request. Accepts either an access point ID or ARN as input.
   *
   * @public
   */
  AccessPointId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMountTargetsResponse {
  /**
   * If the request included the `Marker`, the response returns that value in this field.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Returns the file system's mount targets as an array of `MountTargetDescription` objects.
   *
   * @public
   */
  MountTargets?: MountTargetDescription[] | undefined;

  /**
   * If a value is present, there are more mount targets to return. In a subsequent request, you can provide `Marker` in your request with this value to retrieve the next set of mount targets.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMountTargetSecurityGroupsRequest {
  /**
   * The ID of the mount target whose security groups you want to retrieve.
   *
   * @public
   */
  MountTargetId: string | undefined;
}

/**
 * @public
 */
export interface DescribeMountTargetSecurityGroupsResponse {
  /**
   * An array of security groups.
   *
   * @public
   */
  SecurityGroups: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationConfigurationsRequest {
  /**
   * You can retrieve the replication configuration for a specific file system by providing its file system ID. For cross-account,cross-region replication, an account can only describe the replication configuration for a file system in its own Region.
   *
   * @public
   */
  FileSystemId?: string | undefined;

  /**
   * `NextToken` is present if the response is paginated. You can use `NextToken` in a subsequent request to fetch the next page of output.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * (Optional) To limit the number of objects returned in a response, you can specify the `MaxItems` parameter. The default value is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationConfigurationsResponse {
  /**
   * The collection of replication configurations that is returned.
   *
   * @public
   */
  Replications?: ReplicationConfigurationDescription[] | undefined;

  /**
   * You can use the `NextToken` from the previous response in a subsequent request to fetch the additional descriptions.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTagsRequest {
  /**
   * (Optional) The maximum number of file system tags to return in the response. Currently, this number is automatically set to 100, and other values are ignored. The response is paginated at 100 per page if you have more than 100 tags.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * (Optional) An opaque pagination token returned from a previous `DescribeTags` operation (String). If present, it specifies to continue the list from where the previous call left off.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The ID of the file system whose tag set you want to retrieve.
   *
   * @public
   */
  FileSystemId: string | undefined;
}

/**
 * @public
 */
export interface DescribeTagsResponse {
  /**
   * If the request included a `Marker`, the response returns that value in this field.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Returns tags associated with the file system as an array of `Tag` objects.
   *
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * If a value is present, there are more tags to return. In a subsequent request, you can provide the value of `NextMarker` as the value of the `Marker` parameter in your next request to retrieve the next set of tags.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * Specifies the EFS resource you want to retrieve tags for. You can retrieve tags for EFS file systems and access points using this API endpoint.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * (Optional) Specifies the maximum number of tag objects to return in the response. The default value is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * (Optional) You can use `NextToken` in a subsequent request to fetch the next page of access point descriptions if the response payload was paginated.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * An array of the tags for the specified EFS resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * `NextToken` is present if the response payload is paginated. You can use `NextToken` in a subsequent request to fetch the next page of access point descriptions.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ModifyMountTargetSecurityGroupsRequest {
  /**
   * The ID of the mount target whose security groups you want to modify.
   *
   * @public
   */
  MountTargetId: string | undefined;

  /**
   * An array of VPC security group IDs.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;
}

/**
 * @public
 */
export interface PutAccountPreferencesRequest {
  /**
   * Specifies the EFS resource ID preference to set for the user's Amazon Web Services account, in the current Amazon Web Services Region, either `LONG_ID` (17 characters), or `SHORT_ID` (8 characters).
   *
   * > **Note:** Starting in October, 2021, you will receive an error when setting the account preference to `SHORT_ID`. Contact Amazon Web Services support if you receive an error and must use short IDs for file system and mount target resources.
   *
   * @public
   */
  ResourceIdType: ResourceIdType | undefined;
}

/**
 * @public
 */
export interface PutAccountPreferencesResponse {
  /**
   * Describes the resource type and its ID preference for the user's Amazon Web Services account, in the current Amazon Web Services Region.
   *
   * @public
   */
  ResourceIdPreference?: ResourceIdPreference | undefined;
}

/**
 * @public
 */
export interface PutBackupPolicyRequest {
  /**
   * Specifies which EFS file system to update the backup policy for.
   *
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * The backup policy included in the `PutBackupPolicy` request.
   *
   * @public
   */
  BackupPolicy: BackupPolicy | undefined;
}

/**
 * @public
 */
export interface PutFileSystemPolicyRequest {
  /**
   * The ID of the EFS file system that you want to create or update the `FileSystemPolicy` for.
   *
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * The `FileSystemPolicy` that you're creating. Accepts a JSON formatted policy definition. EFS file system policies have a 20,000 character limit. To find out more about the elements that make up a file system policy, see [Resource-based policies within Amazon EFS](https://docs.aws.amazon.com/efs/latest/ug/security_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies).
   *
   * @public
   */
  Policy: string | undefined;

  /**
   * (Optional) A boolean that specifies whether or not to bypass the `FileSystemPolicy` lockout safety check. The lockout safety check determines whether the policy in the request will lock out, or prevent, the IAM principal that is making the request from making future `PutFileSystemPolicy` requests on this file system. Set `BypassPolicyLockoutSafetyCheck` to `True` only when you intend to prevent the IAM principal that is making the request from making subsequent `PutFileSystemPolicy` requests on this file system. The default value is `False`.
   *
   * @public
   */
  BypassPolicyLockoutSafetyCheck?: boolean | undefined;
}

/**
 * @public
 */
export interface PutLifecycleConfigurationRequest {
  /**
   * The ID of the file system for which you are creating the `LifecycleConfiguration` object (String).
   *
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * An array of `LifecyclePolicy` objects that define the file system's `LifecycleConfiguration` object. A `LifecycleConfiguration` object informs lifecycle management of the following:
   *
   * - **`TransitionToIA`** – When to move files in the file system from primary storage (Standard storage class) into the Infrequent Access (IA) storage.
   * - **`TransitionToArchive`** – When to move files in the file system from their current storage class (either IA or Standard storage) into the Archive storage.
   *
   *   File systems cannot transition into Archive storage before transitioning into IA storage. Therefore, TransitionToArchive must either not be set or must be later than TransitionToIA.
   *
   *   > **Note:** The Archive storage class is available only for file systems that use the Elastic throughput mode and the General Purpose performance mode.
   * - **`TransitionToPrimaryStorageClass`** – Whether to move files in the file system back to primary storage (Standard storage class) after they are accessed in IA or Archive storage.
   *
   * > **Note:** When using the `put-lifecycle-configuration` CLI command or the `PutLifecycleConfiguration` API action, Amazon EFS requires that each `LifecyclePolicy` object have only a single transition. This means that in a request body, `LifecyclePolicies` must be structured as an array of `LifecyclePolicy` objects, one object for each storage transition. See the example requests in the following section for more information.
   *
   * @public
   */
  LifecyclePolicies: LifecyclePolicy[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ID specifying the EFS resource that you want to create a tag for.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * An array of `Tag` objects to add. Each `Tag` object is a key-value pair.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * Specifies the EFS resource that you want to remove tags from.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The keys of the key-value tag pairs that you want to remove from the specified EFS resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateFileSystemRequest {
  /**
   * The ID of the file system that you want to update.
   *
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * (Optional) Updates the file system's throughput mode. If you're not updating your throughput mode, you don't need to provide this value in your request. If you are changing the `ThroughputMode` to `provisioned`, you must also set a value for `ProvisionedThroughputInMibps`.
   *
   * @public
   */
  ThroughputMode?: ThroughputMode | undefined;

  /**
   * (Optional) The throughput, measured in mebibytes per second (MiBps), that you want to provision for a file system that you're creating. Required if `ThroughputMode` is set to `provisioned`. Valid values are 1-3414 MiBps, with the upper limit depending on Region. To increase this limit, contact Amazon Web Services Support. For more information, see [Amazon EFS quotas that you can increase](https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits) in the *Amazon EFS User Guide*.
   *
   * @public
   */
  ProvisionedThroughputInMibps?: number | undefined;
}

/**
 * @public
 */
export interface UpdateFileSystemProtectionRequest {
  /**
   * The ID of the file system to update.
   *
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * The status of the file system's replication overwrite protection.
   *
   * - `ENABLED` – The file system cannot be used as the destination file system in a replication configuration. The file system is writeable. Replication overwrite protection is `ENABLED` by default.
   * - `DISABLED` – The file system can be used as the destination file system in a replication configuration. The file system is read-only and can only be modified by EFS replication.
   * - `REPLICATING` – The file system is being used as the destination file system in a replication configuration. The file system is read-only and is only modified only by EFS replication.
   *
   * If the replication configuration is deleted, the file system's replication overwrite protection is re-enabled and the file system becomes writeable.
   *
   * @public
   */
  ReplicationOverwriteProtection?: ReplicationOverwriteProtection | undefined;
}

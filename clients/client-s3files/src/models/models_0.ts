// smithy-typescript generated code
import type { ImportTrigger, IpAddressType, LifeCycleState } from "./enums";

/**
 * Specifies the POSIX identity with uid, gid, and secondary group IDs for user enforcement.
 *
 * @public
 */
export interface PosixUser {
  /**
   * The POSIX user ID.
   *
   * @public
   */
  uid: number | undefined;

  /**
   * The POSIX group ID.
   *
   * @public
   */
  gid: number | undefined;

  /**
   * An array of secondary POSIX group IDs.
   *
   * @public
   */
  secondaryGids?: number[] | undefined;
}

/**
 * Specifies the permissions to set on newly created directories within the file system.
 *
 * @public
 */
export interface CreationPermissions {
  /**
   * The POSIX user ID to assign to newly created directories.
   *
   * @public
   */
  ownerUid: number | undefined;

  /**
   * The POSIX group ID to assign to newly created directories.
   *
   * @public
   */
  ownerGid: number | undefined;

  /**
   * The octal permissions to assign to newly created directories.
   *
   * @public
   */
  permissions: string | undefined;
}

/**
 * Specifies the root directory path and optional creation permissions for newly created directories.
 *
 * @public
 */
export interface RootDirectory {
  /**
   * The path to use as the root directory for the access point.
   *
   * @public
   */
  path?: string | undefined;

  /**
   * The permissions to set on newly created directories.
   *
   * @public
   */
  creationPermissions?: CreationPermissions | undefined;
}

/**
 * Contains information about an S3 File System Access Point returned in list operations.
 *
 * @public
 */
export interface ListAccessPointsDescription {
  /**
   * The Amazon Resource Name (ARN) of the access point.
   *
   * @public
   */
  accessPointArn: string | undefined;

  /**
   * The ID of the access point.
   *
   * @public
   */
  accessPointId: string | undefined;

  /**
   * The ID of the S3 File System.
   *
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * The current status of the access point.
   *
   * @public
   */
  status: LifeCycleState | undefined;

  /**
   * The Amazon Web Services account ID of the access point owner.
   *
   * @public
   */
  ownerId: string | undefined;

  /**
   * The POSIX identity configured for this access point.
   *
   * @public
   */
  posixUser?: PosixUser | undefined;

  /**
   * The root directory configuration for this access point.
   *
   * @public
   */
  rootDirectory?: RootDirectory | undefined;

  /**
   * The name of the access point.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * A key-value pair for resource tagging.
 *
 * @public
 */
export interface Tag {
  /**
   * The tag key. The key can't start with `aws:`.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The tag value.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateAccessPointRequest {
  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Web Services ignores the request, but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * An array of key-value pairs to apply to the access point for resource tagging.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The ID or Amazon Resource Name (ARN) of the S3 File System.
   *
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * The POSIX identity with uid, gid, and secondary group IDs for user enforcement when accessing the file system through this access point.
   *
   * @public
   */
  posixUser?: PosixUser | undefined;

  /**
   * The root directory path for the access point, with optional creation permissions for newly created directories.
   *
   * @public
   */
  rootDirectory?: RootDirectory | undefined;
}

/**
 * @public
 */
export interface CreateAccessPointResponse {
  /**
   * The Amazon Resource Name (ARN) of the access point.
   *
   * @public
   */
  accessPointArn: string | undefined;

  /**
   * The ID of the access point.
   *
   * @public
   */
  accessPointId: string | undefined;

  /**
   * The client token that was provided in the request.
   *
   * @public
   */
  clientToken: string | undefined;

  /**
   * The ID of the S3 File System.
   *
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * The current status of the access point.
   *
   * @public
   */
  status: LifeCycleState | undefined;

  /**
   * The Amazon Web Services account ID of the access point owner.
   *
   * @public
   */
  ownerId: string | undefined;

  /**
   * The POSIX identity configured for this access point.
   *
   * @public
   */
  posixUser?: PosixUser | undefined;

  /**
   * The root directory configuration for this access point.
   *
   * @public
   */
  rootDirectory?: RootDirectory | undefined;

  /**
   * The tags associated with the access point.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The name of the access point.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface CreateFileSystemRequest {
  /**
   * The Amazon Resource Name (ARN) of the S3 bucket that will be accessible through the file system. The bucket must exist and be in the same Amazon Web Services Region as the file system.
   *
   * @public
   */
  bucket: string | undefined;

  /**
   * An optional prefix within the S3 bucket to scope the file system access. If specified, the file system provides access only to objects with keys that begin with this prefix. If not specified, the file system provides access to the entire bucket.
   *
   * @public
   */
  prefix?: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure idempotent creation. Up to 64 ASCII characters are allowed. If you don't specify a client token, the Amazon Web Services SDK automatically generates one.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The ARN, key ID, or alias of the KMS key to use for encryption. If not specified, the service uses a service-owned key for encryption. You can specify a KMS key using the following formats: key ID, ARN, key alias, or key alias ARN. If you use `KmsKeyId`, the file system will be encrypted.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The ARN of the IAM role that grants the S3 Files service permission to read and write data between the file system and the S3 bucket. This role must have the necessary permissions to access the specified bucket and prefix.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * An array of key-value pairs to apply as tags to the file system resource. Each tag is a user-defined key-value pair. You can use tags to categorize and manage your file systems. Each key must be unique for the resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Set to true to acknowledge and accept any warnings about the bucket configuration. If not specified, the operation may fail if there are bucket configuration warnings.
   *
   * @public
   */
  acceptBucketWarning?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateFileSystemResponse {
  /**
   * The time when the file system was created, in seconds since 1970-01-01T00:00:00Z (Unix epoch time).
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The ARN for the S3 file system, in the format `arn:aws:s3files:region:account-id:file-system/file-system-id`.
   *
   * @public
   */
  fileSystemArn?: string | undefined;

  /**
   * The ID of the file system, assigned by S3 Files. This ID is used to reference the file system in subsequent API calls.
   *
   * @public
   */
  fileSystemId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the S3 bucket associated with the file system.
   *
   * @public
   */
  bucket?: string | undefined;

  /**
   * The prefix within the S3 bucket that scopes the file system access.
   *
   * @public
   */
  prefix?: string | undefined;

  /**
   * The client token used for idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The ARN or alias of the KMS key used for encryption.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The lifecycle state of the file system. Valid values are: `AVAILABLE` (the file system is available for use), `CREATING` (the file system is being created), `DELETING` (the file system is being deleted), `DELETED` (the file system has been deleted), `ERROR` (the file system is in an error state), `MISCONFIGURED` (the file system has a misconfiguration), or `UPDATING` (the file system is being updated).
   *
   * @public
   */
  status?: LifeCycleState | undefined;

  /**
   * Additional information about the file system status. This field provides more details when the status is `ERROR`, or during state transitions.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The ARN of the IAM role used for S3 access.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The Amazon Web Services account ID of the file system owner.
   *
   * @public
   */
  ownerId?: string | undefined;

  /**
   * The tags associated with the file system.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The name of the file system, derived from the `Name` tag if present.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface CreateMountTargetRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the S3 File System to create the mount target for.
   *
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * The ID of the subnet where the mount target will be created. The subnet must be in the same Amazon Web Services Region as the file system. For file systems with regional availability, you can create mount targets in any subnet within the Region. The subnet determines the Availability Zone where the mount target will be located.
   *
   * @public
   */
  subnetId: string | undefined;

  /**
   * A specific IPv4 address to assign to the mount target. If not specified and the IP address type supports IPv4, an address is automatically assigned from the subnet's available IPv4 address range. The address must be within the subnet's CIDR block and not already in use.
   *
   * @public
   */
  ipv4Address?: string | undefined;

  /**
   * A specific IPv6 address to assign to the mount target. If not specified and the IP address type supports IPv6, an address is automatically assigned from the subnet's available IPv6 address range. The address must be within the subnet's IPv6 CIDR block and not already in use.
   *
   * @public
   */
  ipv6Address?: string | undefined;

  /**
   * The IP address type for the mount target. If not specified, `IPV4_ONLY` is used. The IP address type must match the IP configuration of the specified subnet.
   *
   * @public
   */
  ipAddressType?: IpAddressType | undefined;

  /**
   * An array of VPC security group IDs to associate with the mount target's network interface. These security groups control network access to the mount target. If not specified, the default security group for the subnet's VPC is used. All security groups must belong to the same VPC as the subnet.
   *
   * @public
   */
  securityGroups?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateMountTargetResponse {
  /**
   * The unique and consistent identifier of the Availability Zone where the mount target is located. For example, `use1-az1` is an Availability Zone ID for the `us-east-1` Amazon Web Services Region, and it has the same location in every Amazon Web Services account.
   *
   * @public
   */
  availabilityZoneId?: string | undefined;

  /**
   * The Amazon Web Services account ID of the mount target owner.
   *
   * @public
   */
  ownerId: string | undefined;

  /**
   * The ID of the mount target, assigned by S3 Files. This ID is used to reference the mount target in subsequent API calls.
   *
   * @public
   */
  mountTargetId: string | undefined;

  /**
   * The ID of the S3 File System associated with the mount target.
   *
   * @public
   */
  fileSystemId?: string | undefined;

  /**
   * The ID of the subnet where the mount target is located.
   *
   * @public
   */
  subnetId: string | undefined;

  /**
   * The IPv4 address assigned to the mount target.
   *
   * @public
   */
  ipv4Address?: string | undefined;

  /**
   * The IPv6 address assigned to the mount target.
   *
   * @public
   */
  ipv6Address?: string | undefined;

  /**
   * The ID of the network interface that S3 Files created when it created the mount target. This network interface is managed by the service.
   *
   * @public
   */
  networkInterfaceId?: string | undefined;

  /**
   * The ID of the VPC where the mount target is located.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The security groups associated with the mount target's network interface.
   *
   * @public
   */
  securityGroups?: string[] | undefined;

  /**
   * The lifecycle state of the mount target. Valid values are: `AVAILABLE` (the mount target is available for use), `CREATING` (the mount target is being created), `DELETING` (the mount target is being deleted), `DELETED` (the mount target has been deleted), or `ERROR` (the mount target is in an error state), or `UPDATING` (the mount target is being updated).
   *
   * @public
   */
  status?: LifeCycleState | undefined;

  /**
   * Additional information about the mount target status. This field provides more details when the status is `ERROR`, or during state transitions.
   *
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessPointRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the access point to delete.
   *
   * @public
   */
  accessPointId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFileSystemRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the S3 File System to delete.
   *
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * If true, allows deletion of a file system that contains data pending export to S3. If false (the default), the deletion will fail if there is data that has not yet been exported to the S3 bucket. Use this parameter with caution as it may result in data loss.
   *
   * @public
   */
  forceDelete?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteFileSystemPolicyRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the S3 File System whose resource policy to delete.
   *
   * @public
   */
  fileSystemId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMountTargetRequest {
  /**
   * The ID of the mount target to delete.
   *
   * @public
   */
  mountTargetId: string | undefined;
}

/**
 * Specifies a rule that controls when cached data expires from the file system based on last access time.
 *
 * @public
 */
export interface ExpirationDataRule {
  /**
   * The number of days after last access before cached data expires from the file system.
   *
   * @public
   */
  daysAfterLastAccess: number | undefined;
}

/**
 * Contains information about an S3 File System returned in list operations.
 *
 * @public
 */
export interface ListFileSystemsDescription {
  /**
   * The time when the file system was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the file system.
   *
   * @public
   */
  fileSystemArn: string | undefined;

  /**
   * The ID of the file system.
   *
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * The name of the file system.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the S3 bucket.
   *
   * @public
   */
  bucket: string | undefined;

  /**
   * The current status of the file system.
   *
   * @public
   */
  status: LifeCycleState | undefined;

  /**
   * Additional information about the file system status.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role used for S3 access.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The Amazon Web Services account ID of the file system owner.
   *
   * @public
   */
  ownerId: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the access point to retrieve information for.
   *
   * @public
   */
  accessPointId: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointResponse {
  /**
   * The ARN of the access point.
   *
   * @public
   */
  accessPointArn: string | undefined;

  /**
   * The ID of the access point.
   *
   * @public
   */
  accessPointId: string | undefined;

  /**
   * The client token used for idempotency when the access point was created.
   *
   * @public
   */
  clientToken: string | undefined;

  /**
   * The ID of the S3 File System.
   *
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * The current status of the access point.
   *
   * @public
   */
  status: LifeCycleState | undefined;

  /**
   * The Amazon Web Services account ID of the access point owner.
   *
   * @public
   */
  ownerId: string | undefined;

  /**
   * The POSIX identity configured for this access point.
   *
   * @public
   */
  posixUser?: PosixUser | undefined;

  /**
   * The root directory configuration for this access point.
   *
   * @public
   */
  rootDirectory?: RootDirectory | undefined;

  /**
   * The tags associated with the access point.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The name of the access point.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface GetFileSystemRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the S3 File System to retrieve information for.
   *
   * @public
   */
  fileSystemId: string | undefined;
}

/**
 * @public
 */
export interface GetFileSystemResponse {
  /**
   * The time when the file system was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the file system.
   *
   * @public
   */
  fileSystemArn?: string | undefined;

  /**
   * The ID of the file system.
   *
   * @public
   */
  fileSystemId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the S3 bucket.
   *
   * @public
   */
  bucket?: string | undefined;

  /**
   * The prefix in the S3 bucket that the file system provides access to.
   *
   * @public
   */
  prefix?: string | undefined;

  /**
   * The client token used for idempotency when the file system was created.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services KMS key used for encryption.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The current status of the file system.
   *
   * @public
   */
  status?: LifeCycleState | undefined;

  /**
   * Additional information about the file system status.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role used for S3 access.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The Amazon Web Services account ID of the file system owner.
   *
   * @public
   */
  ownerId?: string | undefined;

  /**
   * The tags associated with the file system.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The name of the file system.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface GetFileSystemPolicyRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the S3 File System whose resource policy to retrieve.
   *
   * @public
   */
  fileSystemId: string | undefined;
}

/**
 * @public
 */
export interface GetFileSystemPolicyResponse {
  /**
   * The ID of the file system.
   *
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * The JSON-formatted resource policy for the file system.
   *
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface GetMountTargetRequest {
  /**
   * The ID of the mount target to retrieve information for.
   *
   * @public
   */
  mountTargetId: string | undefined;
}

/**
 * @public
 */
export interface GetMountTargetResponse {
  /**
   * The Availability Zone ID where the mount target is located.
   *
   * @public
   */
  availabilityZoneId?: string | undefined;

  /**
   * The Amazon Web Services account ID of the mount target owner.
   *
   * @public
   */
  ownerId: string | undefined;

  /**
   * The ID of the mount target.
   *
   * @public
   */
  mountTargetId: string | undefined;

  /**
   * The ID of the file system.
   *
   * @public
   */
  fileSystemId?: string | undefined;

  /**
   * The ID of the subnet where the mount target is located.
   *
   * @public
   */
  subnetId: string | undefined;

  /**
   * The IPv4 address of the mount target.
   *
   * @public
   */
  ipv4Address?: string | undefined;

  /**
   * The IPv6 address of the mount target.
   *
   * @public
   */
  ipv6Address?: string | undefined;

  /**
   * The ID of the network interface associated with the mount target.
   *
   * @public
   */
  networkInterfaceId?: string | undefined;

  /**
   * The ID of the VPC where the mount target is located.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The security groups associated with the mount target.
   *
   * @public
   */
  securityGroups?: string[] | undefined;

  /**
   * The current status of the mount target.
   *
   * @public
   */
  status?: LifeCycleState | undefined;

  /**
   * Additional information about the mount target status.
   *
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetSynchronizationConfigurationRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the S3 File System to retrieve the synchronization configuration for.
   *
   * @public
   */
  fileSystemId: string | undefined;
}

/**
 * Specifies a rule that controls how data is imported from S3 into the file system.
 *
 * @public
 */
export interface ImportDataRule {
  /**
   * The S3 key prefix that scopes this import rule. Only objects with keys beginning with this prefix are subject to the rule.
   *
   * @public
   */
  prefix: string | undefined;

  /**
   * The event that triggers data import. Valid values are `ON_DIRECTORY_FIRST_ACCESS` (import when a directory is first accessed) and `ON_FILE_ACCESS` (import when a file is accessed).
   *
   * @public
   */
  trigger: ImportTrigger | undefined;

  /**
   * The upper size limit in bytes for this import rule. Only objects with a size strictly less than this value will have data imported into the file system.
   *
   * @public
   */
  sizeLessThan: number | undefined;
}

/**
 * @public
 */
export interface GetSynchronizationConfigurationResponse {
  /**
   * The version number of the synchronization configuration. Use this value with `PutSynchronizationConfiguration` to ensure optimistic concurrency control.
   *
   * @public
   */
  latestVersionNumber?: number | undefined;

  /**
   * An array of import data rules that control how data is imported from S3 into the file system.
   *
   * @public
   */
  importDataRules: ImportDataRule[] | undefined;

  /**
   * An array of expiration data rules that control when cached data expires from the file system.
   *
   * @public
   */
  expirationDataRules: ExpirationDataRule[] | undefined;
}

/**
 * @public
 */
export interface ListAccessPointsRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the S3 File System to list access points for.
   *
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * The maximum number of access points to return in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token returned from a previous call to continue listing access points.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccessPointsResponse {
  /**
   * A pagination token to use in a subsequent request if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of access point descriptions.
   *
   * @public
   */
  accessPoints: ListAccessPointsDescription[] | undefined;
}

/**
 * @public
 */
export interface ListFileSystemsRequest {
  /**
   * Optional filter to list only file systems associated with the specified S3 bucket Amazon Resource Name (ARN). If provided, only file systems that provide access to this bucket will be returned in the response.
   *
   * @public
   */
  bucket?: string | undefined;

  /**
   * The maximum number of file systems to return in a single response. If not specified, up to 100 file systems are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token returned from a previous call to continue listing file systems.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFileSystemsResponse {
  /**
   * A pagination token to use in a subsequent request if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of file system descriptions.
   *
   * @public
   */
  fileSystems: ListFileSystemsDescription[] | undefined;
}

/**
 * @public
 */
export interface ListMountTargetsRequest {
  /**
   * Optional filter to list only mount targets associated with the specified S3 File System ID or Amazon Resource Name (ARN). If provided, only mount targets for this file system will be returned in the response.
   *
   * @public
   */
  fileSystemId?: string | undefined;

  /**
   * Optional filter to list only mount targets associated with the specified access point ID or Amazon Resource Name (ARN).
   *
   * @public
   */
  accessPointId?: string | undefined;

  /**
   * The maximum number of mount targets to return in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token returned from a previous call to continue listing mount targets.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains information about a mount target returned in list operations.
 *
 * @public
 */
export interface ListMountTargetsDescription {
  /**
   * The Availability Zone ID where the mount target is located.
   *
   * @public
   */
  availabilityZoneId?: string | undefined;

  /**
   * The ID of the S3 File System.
   *
   * @public
   */
  fileSystemId?: string | undefined;

  /**
   * The IPv4 address of the mount target.
   *
   * @public
   */
  ipv4Address?: string | undefined;

  /**
   * The IPv6 address of the mount target.
   *
   * @public
   */
  ipv6Address?: string | undefined;

  /**
   * The current status of the mount target.
   *
   * @public
   */
  status?: LifeCycleState | undefined;

  /**
   * Additional information about the mount target status.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The ID of the mount target.
   *
   * @public
   */
  mountTargetId: string | undefined;

  /**
   * The ID of the network interface associated with the mount target.
   *
   * @public
   */
  networkInterfaceId?: string | undefined;

  /**
   * The Amazon Web Services account ID of the mount target owner.
   *
   * @public
   */
  ownerId: string | undefined;

  /**
   * The ID of the subnet where the mount target is located.
   *
   * @public
   */
  subnetId: string | undefined;

  /**
   * The ID of the VPC where the mount target is located.
   *
   * @public
   */
  vpcId?: string | undefined;
}

/**
 * @public
 */
export interface ListMountTargetsResponse {
  /**
   * A pagination token to use in a subsequent request if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of mount target descriptions.
   *
   * @public
   */
  mountTargets: ListMountTargetsDescription[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the resource to list tags for.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The maximum number of tags to return in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token returned from a previous call to continue listing tags.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * An array of tags associated with the resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * A pagination token to use in a subsequent request if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutFileSystemPolicyRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the S3 File System to apply the resource policy to.
   *
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * The JSON-formatted resource policy to apply to the file system. The policy defines the permissions for accessing the file system. The policy must be a valid JSON document that follows IAM policy syntax.
   *
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutFileSystemPolicyResponse {}

/**
 * @public
 */
export interface PutSynchronizationConfigurationRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the S3 File System to configure synchronization for.
   *
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * The version number of the current synchronization configuration. Omit this value when creating a synchronization configuration for the first time. For subsequent updates, provide this value for optimistic concurrency control. If the version number does not match the current configuration, the request fails with a `ConflictException`.
   *
   * @public
   */
  latestVersionNumber?: number | undefined;

  /**
   * An array of import data rules that control how data is imported from S3 into the file system.
   *
   * @public
   */
  importDataRules: ImportDataRule[] | undefined;

  /**
   * An array of expiration data rules that control when cached data expires from the file system.
   *
   * @public
   */
  expirationDataRules: ExpirationDataRule[] | undefined;
}

/**
 * @public
 */
export interface PutSynchronizationConfigurationResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the resource to add tags to.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * An array of key-value pairs to add as tags to the resource.
   *
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the resource to remove tags from.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * An array of tag keys to remove from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateMountTargetRequest {
  /**
   * The ID of the mount target to update.
   *
   * @public
   */
  mountTargetId: string | undefined;

  /**
   * An array of VPC security group IDs to associate with the mount target's network interface. This replaces the existing security groups. All security groups must belong to the same VPC as the mount target's subnet.
   *
   * @public
   */
  securityGroups: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateMountTargetResponse {
  /**
   * The Availability Zone ID where the mount target is located.
   *
   * @public
   */
  availabilityZoneId?: string | undefined;

  /**
   * The Amazon Web Services account ID of the mount target owner.
   *
   * @public
   */
  ownerId: string | undefined;

  /**
   * The ID of the mount target.
   *
   * @public
   */
  mountTargetId: string | undefined;

  /**
   * The ID of the S3 File System.
   *
   * @public
   */
  fileSystemId?: string | undefined;

  /**
   * The ID of the subnet where the mount target is located.
   *
   * @public
   */
  subnetId: string | undefined;

  /**
   * The IPv4 address of the mount target.
   *
   * @public
   */
  ipv4Address?: string | undefined;

  /**
   * The IPv6 address of the mount target.
   *
   * @public
   */
  ipv6Address?: string | undefined;

  /**
   * The ID of the network interface associated with the mount target.
   *
   * @public
   */
  networkInterfaceId?: string | undefined;

  /**
   * The ID of the VPC where the mount target is located.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The security groups associated with the mount target.
   *
   * @public
   */
  securityGroups?: string[] | undefined;

  /**
   * The current status of the mount target.
   *
   * @public
   */
  status?: LifeCycleState | undefined;

  /**
   * Additional information about the mount target status.
   *
   * @public
   */
  statusMessage?: string | undefined;
}

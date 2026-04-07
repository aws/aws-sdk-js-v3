// smithy-typescript generated code
import type { ImportTrigger, IpAddressType, LifeCycleState } from "./enums";

/**
 * <p>Specifies the POSIX identity with uid, gid, and secondary group IDs for user enforcement.</p>
 * @public
 */
export interface PosixUser {
  /**
   * <p>The POSIX user ID.</p>
   * @public
   */
  uid: number | undefined;

  /**
   * <p>The POSIX group ID.</p>
   * @public
   */
  gid: number | undefined;

  /**
   * <p>An array of secondary POSIX group IDs.</p>
   * @public
   */
  secondaryGids?: number[] | undefined;
}

/**
 * <p>Specifies the permissions to set on newly created directories within the file system.</p>
 * @public
 */
export interface CreationPermissions {
  /**
   * <p>The POSIX user ID to assign to newly created directories.</p>
   * @public
   */
  ownerUid: number | undefined;

  /**
   * <p>The POSIX group ID to assign to newly created directories.</p>
   * @public
   */
  ownerGid: number | undefined;

  /**
   * <p>The octal permissions to assign to newly created directories.</p>
   * @public
   */
  permissions: string | undefined;
}

/**
 * <p>Specifies the root directory path and optional creation permissions for newly created directories.</p>
 * @public
 */
export interface RootDirectory {
  /**
   * <p>The path to use as the root directory for the access point.</p>
   * @public
   */
  path?: string | undefined;

  /**
   * <p>The permissions to set on newly created directories.</p>
   * @public
   */
  creationPermissions?: CreationPermissions | undefined;
}

/**
 * <p>Contains information about an S3 File System Access Point returned in list operations.</p>
 * @public
 */
export interface ListAccessPointsDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the access point.</p>
   * @public
   */
  accessPointArn: string | undefined;

  /**
   * <p>The ID of the access point.</p>
   * @public
   */
  accessPointId: string | undefined;

  /**
   * <p>The ID of the S3 File System.</p>
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * <p>The current status of the access point.</p>
   * @public
   */
  status: LifeCycleState | undefined;

  /**
   * <p>The Amazon Web Services account ID of the access point owner.</p>
   * @public
   */
  ownerId: string | undefined;

  /**
   * <p>The POSIX identity configured for this access point.</p>
   * @public
   */
  posixUser?: PosixUser | undefined;

  /**
   * <p>The root directory configuration for this access point.</p>
   * @public
   */
  rootDirectory?: RootDirectory | undefined;

  /**
   * <p>The name of the access point.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>A key-value pair for resource tagging.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The tag key. The key can't start with <code>aws:</code>.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The tag value.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateAccessPointRequest {
  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Web Services ignores the request, but does not return an error.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>An array of key-value pairs to apply to the access point for resource tagging.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The ID or Amazon Resource Name (ARN) of the S3 File System.</p>
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * <p>The POSIX identity with uid, gid, and secondary group IDs for user enforcement when accessing the file system through this access point.</p>
   * @public
   */
  posixUser?: PosixUser | undefined;

  /**
   * <p>The root directory path for the access point, with optional creation permissions for newly created directories.</p>
   * @public
   */
  rootDirectory?: RootDirectory | undefined;
}

/**
 * @public
 */
export interface CreateAccessPointResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the access point.</p>
   * @public
   */
  accessPointArn: string | undefined;

  /**
   * <p>The ID of the access point.</p>
   * @public
   */
  accessPointId: string | undefined;

  /**
   * <p>The client token that was provided in the request.</p>
   * @public
   */
  clientToken: string | undefined;

  /**
   * <p>The ID of the S3 File System.</p>
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * <p>The current status of the access point.</p>
   * @public
   */
  status: LifeCycleState | undefined;

  /**
   * <p>The Amazon Web Services account ID of the access point owner.</p>
   * @public
   */
  ownerId: string | undefined;

  /**
   * <p>The POSIX identity configured for this access point.</p>
   * @public
   */
  posixUser?: PosixUser | undefined;

  /**
   * <p>The root directory configuration for this access point.</p>
   * @public
   */
  rootDirectory?: RootDirectory | undefined;

  /**
   * <p>The tags associated with the access point.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The name of the access point.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface CreateFileSystemRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket that will be accessible through the file system. The bucket must exist and be in the same Amazon Web Services Region as the file system.</p>
   * @public
   */
  bucket: string | undefined;

  /**
   * <p>An optional prefix within the S3 bucket to scope the file system access. If specified, the file system provides access only to objects with keys that begin with this prefix. If not specified, the file system provides access to the entire bucket.</p>
   * @public
   */
  prefix?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure idempotent creation. Up to 64 ASCII characters are allowed. If you don't specify a client token, the Amazon Web Services SDK automatically generates one.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The ARN, key ID, or alias of the KMS key to use for encryption. If not specified, the service uses a service-owned key for encryption. You can specify a KMS key using the following formats: key ID, ARN, key alias, or key alias ARN. If you use <code>KmsKeyId</code>, the file system will be encrypted.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The ARN of the IAM role that grants the S3 Files service permission to read and write data between the file system and the S3 bucket. This role must have the necessary permissions to access the specified bucket and prefix.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>An array of key-value pairs to apply as tags to the file system resource. Each tag is a user-defined key-value pair. You can use tags to categorize and manage your file systems. Each key must be unique for the resource.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>Set to true to acknowledge and accept any warnings about the bucket configuration. If not specified, the operation may fail if there are bucket configuration warnings.</p>
   * @public
   */
  acceptBucketWarning?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateFileSystemResponse {
  /**
   * <p>The time when the file system was created, in seconds since 1970-01-01T00:00:00Z (Unix epoch time).</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The ARN for the S3 file system, in the format <code>arn:aws:s3files:region:account-id:file-system/file-system-id</code>.</p>
   * @public
   */
  fileSystemArn?: string | undefined;

  /**
   * <p>The ID of the file system, assigned by S3 Files. This ID is used to reference the file system in subsequent API calls.</p>
   * @public
   */
  fileSystemId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket associated with the file system.</p>
   * @public
   */
  bucket?: string | undefined;

  /**
   * <p>The prefix within the S3 bucket that scopes the file system access.</p>
   * @public
   */
  prefix?: string | undefined;

  /**
   * <p>The client token used for idempotency.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The ARN or alias of the KMS key used for encryption.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The lifecycle state of the file system. Valid values are: <code>AVAILABLE</code> (the file system is available for use), <code>CREATING</code> (the file system is being created), <code>DELETING</code> (the file system is being deleted), <code>DELETED</code> (the file system has been deleted), <code>ERROR</code> (the file system is in an error state), or <code>UPDATING</code> (the file system is being updated).</p>
   * @public
   */
  status?: LifeCycleState | undefined;

  /**
   * <p>Additional information about the file system status. This field provides more details when the status is <code>ERROR</code>, or during state transitions.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The ARN of the IAM role used for S3 access.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the file system owner.</p>
   * @public
   */
  ownerId?: string | undefined;

  /**
   * <p>The tags associated with the file system.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The name of the file system, derived from the <code>Name</code> tag if present.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface CreateMountTargetRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the S3 File System to create the mount target for.</p>
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * <p>The ID of the subnet where the mount target will be created. The subnet must be in the same Amazon Web Services Region as the file system. For file systems with regional availability, you can create mount targets in any subnet within the Region. The subnet determines the Availability Zone where the mount target will be located.</p>
   * @public
   */
  subnetId: string | undefined;

  /**
   * <p>A specific IPv4 address to assign to the mount target. If not specified and the IP address type supports IPv4, an address is automatically assigned from the subnet's available IPv4 address range. The address must be within the subnet's CIDR block and not already in use.</p>
   * @public
   */
  ipv4Address?: string | undefined;

  /**
   * <p>A specific IPv6 address to assign to the mount target. If not specified and the IP address type supports IPv6, an address is automatically assigned from the subnet's available IPv6 address range. The address must be within the subnet's IPv6 CIDR block and not already in use.</p>
   * @public
   */
  ipv6Address?: string | undefined;

  /**
   * <p>The IP address type for the mount target. If not specified, <code>IPV4_ONLY</code> is used. The IP address type must match the IP configuration of the specified subnet.</p>
   * @public
   */
  ipAddressType?: IpAddressType | undefined;

  /**
   * <p>An array of VPC security group IDs to associate with the mount target's network interface. These security groups control network access to the mount target. If not specified, the default security group for the subnet's VPC is used. All security groups must belong to the same VPC as the subnet.</p>
   * @public
   */
  securityGroups?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateMountTargetResponse {
  /**
   * <p>The unique and consistent identifier of the Availability Zone where the mount target is located. For example, <code>use1-az1</code> is an Availability Zone ID for the <code>us-east-1</code> Amazon Web Services Region, and it has the same location in every Amazon Web Services account.</p>
   * @public
   */
  availabilityZoneId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the mount target owner.</p>
   * @public
   */
  ownerId: string | undefined;

  /**
   * <p>The ID of the mount target, assigned by S3 Files. This ID is used to reference the mount target in subsequent API calls.</p>
   * @public
   */
  mountTargetId: string | undefined;

  /**
   * <p>The ID of the S3 File System associated with the mount target.</p>
   * @public
   */
  fileSystemId?: string | undefined;

  /**
   * <p>The ID of the subnet where the mount target is located.</p>
   * @public
   */
  subnetId: string | undefined;

  /**
   * <p>The IPv4 address assigned to the mount target.</p>
   * @public
   */
  ipv4Address?: string | undefined;

  /**
   * <p>The IPv6 address assigned to the mount target.</p>
   * @public
   */
  ipv6Address?: string | undefined;

  /**
   * <p>The ID of the network interface that S3 Files created when it created the mount target. This network interface is managed by the service.</p>
   * @public
   */
  networkInterfaceId?: string | undefined;

  /**
   * <p>The ID of the VPC where the mount target is located.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>The security groups associated with the mount target's network interface.</p>
   * @public
   */
  securityGroups?: string[] | undefined;

  /**
   * <p>The lifecycle state of the mount target. Valid values are: <code>AVAILABLE</code> (the mount target is available for use), <code>CREATING</code> (the mount target is being created), <code>DELETING</code> (the mount target is being deleted), <code>DELETED</code> (the mount target has been deleted), or <code>ERROR</code> (the mount target is in an error state), or <code>UPDATING</code> (the mount target is being updated).</p>
   * @public
   */
  status?: LifeCycleState | undefined;

  /**
   * <p>Additional information about the mount target status. This field provides more details when the status is <code>ERROR</code>, or during state transitions.</p>
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessPointRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the access point to delete.</p>
   * @public
   */
  accessPointId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFileSystemRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the S3 File System to delete.</p>
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * <p>If true, allows deletion of a file system that contains data pending export to S3. If false (the default), the deletion will fail if there is data that has not yet been exported to the S3 bucket. Use this parameter with caution as it may result in data loss.</p>
   * @public
   */
  forceDelete?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteFileSystemPolicyRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the S3 File System whose resource policy to delete.</p>
   * @public
   */
  fileSystemId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMountTargetRequest {
  /**
   * <p>The ID of the mount target to delete.</p>
   * @public
   */
  mountTargetId: string | undefined;
}

/**
 * <p>Specifies a rule that controls when cached data expires from the file system based on last access time.</p>
 * @public
 */
export interface ExpirationDataRule {
  /**
   * <p>The number of days after last access before cached data expires from the file system.</p>
   * @public
   */
  daysAfterLastAccess: number | undefined;
}

/**
 * <p>Contains information about an S3 File System returned in list operations.</p>
 * @public
 */
export interface ListFileSystemsDescription {
  /**
   * <p>The time when the file system was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the file system.</p>
   * @public
   */
  fileSystemArn: string | undefined;

  /**
   * <p>The ID of the file system.</p>
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * <p>The name of the file system.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   * @public
   */
  bucket: string | undefined;

  /**
   * <p>The current status of the file system.</p>
   * @public
   */
  status: LifeCycleState | undefined;

  /**
   * <p>Additional information about the file system status.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used for S3 access.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the file system owner.</p>
   * @public
   */
  ownerId: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the access point to retrieve information for.</p>
   * @public
   */
  accessPointId: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointResponse {
  /**
   * <p>The ARN of the access point.</p>
   * @public
   */
  accessPointArn: string | undefined;

  /**
   * <p>The ID of the access point.</p>
   * @public
   */
  accessPointId: string | undefined;

  /**
   * <p>The client token used for idempotency when the access point was created.</p>
   * @public
   */
  clientToken: string | undefined;

  /**
   * <p>The ID of the S3 File System.</p>
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * <p>The current status of the access point.</p>
   * @public
   */
  status: LifeCycleState | undefined;

  /**
   * <p>The Amazon Web Services account ID of the access point owner.</p>
   * @public
   */
  ownerId: string | undefined;

  /**
   * <p>The POSIX identity configured for this access point.</p>
   * @public
   */
  posixUser?: PosixUser | undefined;

  /**
   * <p>The root directory configuration for this access point.</p>
   * @public
   */
  rootDirectory?: RootDirectory | undefined;

  /**
   * <p>The tags associated with the access point.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The name of the access point.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface GetFileSystemRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the S3 File System to retrieve information for.</p>
   * @public
   */
  fileSystemId: string | undefined;
}

/**
 * @public
 */
export interface GetFileSystemResponse {
  /**
   * <p>The time when the file system was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the file system.</p>
   * @public
   */
  fileSystemArn?: string | undefined;

  /**
   * <p>The ID of the file system.</p>
   * @public
   */
  fileSystemId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   * @public
   */
  bucket?: string | undefined;

  /**
   * <p>The prefix in the S3 bucket that the file system provides access to.</p>
   * @public
   */
  prefix?: string | undefined;

  /**
   * <p>The client token used for idempotency when the file system was created.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services KMS key used for encryption.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The current status of the file system.</p>
   * @public
   */
  status?: LifeCycleState | undefined;

  /**
   * <p>Additional information about the file system status.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used for S3 access.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the file system owner.</p>
   * @public
   */
  ownerId?: string | undefined;

  /**
   * <p>The tags associated with the file system.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The name of the file system.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface GetFileSystemPolicyRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the S3 File System whose resource policy to retrieve.</p>
   * @public
   */
  fileSystemId: string | undefined;
}

/**
 * @public
 */
export interface GetFileSystemPolicyResponse {
  /**
   * <p>The ID of the file system.</p>
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * <p>The JSON-formatted resource policy for the file system.</p>
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface GetMountTargetRequest {
  /**
   * <p>The ID of the mount target to retrieve information for.</p>
   * @public
   */
  mountTargetId: string | undefined;
}

/**
 * @public
 */
export interface GetMountTargetResponse {
  /**
   * <p>The Availability Zone ID where the mount target is located.</p>
   * @public
   */
  availabilityZoneId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the mount target owner.</p>
   * @public
   */
  ownerId: string | undefined;

  /**
   * <p>The ID of the mount target.</p>
   * @public
   */
  mountTargetId: string | undefined;

  /**
   * <p>The ID of the file system.</p>
   * @public
   */
  fileSystemId?: string | undefined;

  /**
   * <p>The ID of the subnet where the mount target is located.</p>
   * @public
   */
  subnetId: string | undefined;

  /**
   * <p>The IPv4 address of the mount target.</p>
   * @public
   */
  ipv4Address?: string | undefined;

  /**
   * <p>The IPv6 address of the mount target.</p>
   * @public
   */
  ipv6Address?: string | undefined;

  /**
   * <p>The ID of the network interface associated with the mount target.</p>
   * @public
   */
  networkInterfaceId?: string | undefined;

  /**
   * <p>The ID of the VPC where the mount target is located.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>The security groups associated with the mount target.</p>
   * @public
   */
  securityGroups?: string[] | undefined;

  /**
   * <p>The current status of the mount target.</p>
   * @public
   */
  status?: LifeCycleState | undefined;

  /**
   * <p>Additional information about the mount target status.</p>
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetSynchronizationConfigurationRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the S3 File System to retrieve the synchronization configuration for.</p>
   * @public
   */
  fileSystemId: string | undefined;
}

/**
 * <p>Specifies a rule that controls how data is imported from S3 into the file system.</p>
 * @public
 */
export interface ImportDataRule {
  /**
   * <p>The S3 key prefix that scopes this import rule. Only objects with keys beginning with this prefix are subject to the rule.</p>
   * @public
   */
  prefix: string | undefined;

  /**
   * <p>The event that triggers data import. Valid values are <code>ON_DIRECTORY_FIRST_ACCESS</code> (import when a directory is first accessed) and <code>ON_FILE_ACCESS</code> (import when a file is accessed).</p>
   * @public
   */
  trigger: ImportTrigger | undefined;

  /**
   * <p>The upper size limit in bytes for this import rule. Only objects with a size strictly less than this value will have data imported into the file system.</p>
   * @public
   */
  sizeLessThan: number | undefined;
}

/**
 * @public
 */
export interface GetSynchronizationConfigurationResponse {
  /**
   * <p>The version number of the synchronization configuration. Use this value with <code>PutSynchronizationConfiguration</code> to ensure optimistic concurrency control.</p>
   * @public
   */
  latestVersionNumber?: number | undefined;

  /**
   * <p>An array of import data rules that control how data is imported from S3 into the file system.</p>
   * @public
   */
  importDataRules: ImportDataRule[] | undefined;

  /**
   * <p>An array of expiration data rules that control when cached data expires from the file system.</p>
   * @public
   */
  expirationDataRules: ExpirationDataRule[] | undefined;
}

/**
 * @public
 */
export interface ListAccessPointsRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the S3 File System to list access points for.</p>
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * <p>The maximum number of access points to return in a single response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token returned from a previous call to continue listing access points.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccessPointsResponse {
  /**
   * <p>A pagination token to use in a subsequent request if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of access point descriptions.</p>
   * @public
   */
  accessPoints: ListAccessPointsDescription[] | undefined;
}

/**
 * @public
 */
export interface ListFileSystemsRequest {
  /**
   * <p>Optional filter to list only file systems associated with the specified S3 bucket Amazon Resource Name (ARN). If provided, only file systems that provide access to this bucket will be returned in the response.</p>
   * @public
   */
  bucket?: string | undefined;

  /**
   * <p>The maximum number of file systems to return in a single response. If not specified, up to 100 file systems are returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token returned from a previous call to continue listing file systems.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFileSystemsResponse {
  /**
   * <p>A pagination token to use in a subsequent request if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of file system descriptions.</p>
   * @public
   */
  fileSystems: ListFileSystemsDescription[] | undefined;
}

/**
 * @public
 */
export interface ListMountTargetsRequest {
  /**
   * <p>Optional filter to list only mount targets associated with the specified S3 File System ID or Amazon Resource Name (ARN). If provided, only mount targets for this file system will be returned in the response.</p>
   * @public
   */
  fileSystemId?: string | undefined;

  /**
   * <p>Optional filter to list only mount targets associated with the specified access point ID or Amazon Resource Name (ARN).</p>
   * @public
   */
  accessPointId?: string | undefined;

  /**
   * <p>The maximum number of mount targets to return in a single response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token returned from a previous call to continue listing mount targets.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains information about a mount target returned in list operations.</p>
 * @public
 */
export interface ListMountTargetsDescription {
  /**
   * <p>The Availability Zone ID where the mount target is located.</p>
   * @public
   */
  availabilityZoneId?: string | undefined;

  /**
   * <p>The ID of the S3 File System.</p>
   * @public
   */
  fileSystemId?: string | undefined;

  /**
   * <p>The IPv4 address of the mount target.</p>
   * @public
   */
  ipv4Address?: string | undefined;

  /**
   * <p>The IPv6 address of the mount target.</p>
   * @public
   */
  ipv6Address?: string | undefined;

  /**
   * <p>The current status of the mount target.</p>
   * @public
   */
  status?: LifeCycleState | undefined;

  /**
   * <p>Additional information about the mount target status.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The ID of the mount target.</p>
   * @public
   */
  mountTargetId: string | undefined;

  /**
   * <p>The ID of the network interface associated with the mount target.</p>
   * @public
   */
  networkInterfaceId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the mount target owner.</p>
   * @public
   */
  ownerId: string | undefined;

  /**
   * <p>The ID of the subnet where the mount target is located.</p>
   * @public
   */
  subnetId: string | undefined;

  /**
   * <p>The ID of the VPC where the mount target is located.</p>
   * @public
   */
  vpcId?: string | undefined;
}

/**
 * @public
 */
export interface ListMountTargetsResponse {
  /**
   * <p>A pagination token to use in a subsequent request if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of mount target descriptions.</p>
   * @public
   */
  mountTargets: ListMountTargetsDescription[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the resource to list tags for.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The maximum number of tags to return in a single response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token returned from a previous call to continue listing tags.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>An array of tags associated with the resource.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>A pagination token to use in a subsequent request if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutFileSystemPolicyRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the S3 File System to apply the resource policy to.</p>
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * <p>The JSON-formatted resource policy to apply to the file system. The policy defines the permissions for accessing the file system. The policy must be a valid JSON document that follows IAM policy syntax.</p>
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
   * <p>The ID or Amazon Resource Name (ARN) of the S3 File System to configure synchronization for.</p>
   * @public
   */
  fileSystemId: string | undefined;

  /**
   * <p>The version number of the current synchronization configuration. Omit this value when creating a synchronization configuration for the first time. For subsequent updates, provide this value for optimistic concurrency control. If the version number does not match the current configuration, the request fails with a <code>ConflictException</code>.</p>
   * @public
   */
  latestVersionNumber?: number | undefined;

  /**
   * <p>An array of import data rules that control how data is imported from S3 into the file system.</p>
   * @public
   */
  importDataRules: ImportDataRule[] | undefined;

  /**
   * <p>An array of expiration data rules that control when cached data expires from the file system.</p>
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
   * <p>The ID or Amazon Resource Name (ARN) of the resource to add tags to.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>An array of key-value pairs to add as tags to the resource.</p>
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the resource to remove tags from.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>An array of tag keys to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateMountTargetRequest {
  /**
   * <p>The ID of the mount target to update.</p>
   * @public
   */
  mountTargetId: string | undefined;

  /**
   * <p>An array of VPC security group IDs to associate with the mount target's network interface. This replaces the existing security groups. All security groups must belong to the same VPC as the mount target's subnet.</p>
   * @public
   */
  securityGroups: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateMountTargetResponse {
  /**
   * <p>The Availability Zone ID where the mount target is located.</p>
   * @public
   */
  availabilityZoneId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the mount target owner.</p>
   * @public
   */
  ownerId: string | undefined;

  /**
   * <p>The ID of the mount target.</p>
   * @public
   */
  mountTargetId: string | undefined;

  /**
   * <p>The ID of the S3 File System.</p>
   * @public
   */
  fileSystemId?: string | undefined;

  /**
   * <p>The ID of the subnet where the mount target is located.</p>
   * @public
   */
  subnetId: string | undefined;

  /**
   * <p>The IPv4 address of the mount target.</p>
   * @public
   */
  ipv4Address?: string | undefined;

  /**
   * <p>The IPv6 address of the mount target.</p>
   * @public
   */
  ipv6Address?: string | undefined;

  /**
   * <p>The ID of the network interface associated with the mount target.</p>
   * @public
   */
  networkInterfaceId?: string | undefined;

  /**
   * <p>The ID of the VPC where the mount target is located.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>The security groups associated with the mount target.</p>
   * @public
   */
  securityGroups?: string[] | undefined;

  /**
   * <p>The current status of the mount target.</p>
   * @public
   */
  status?: LifeCycleState | undefined;

  /**
   * <p>Additional information about the mount target status.</p>
   * @public
   */
  statusMessage?: string | undefined;
}

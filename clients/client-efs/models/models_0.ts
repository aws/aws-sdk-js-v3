import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Returned if the access point you are trying to create already exists, with the
 *             creation token you provided in the request.</p>
 */
export interface AccessPointAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "AccessPointAlreadyExists";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
  AccessPointId: string | undefined;
}

export namespace AccessPointAlreadyExists {
  export const filterSensitiveLog = (obj: AccessPointAlreadyExists): any => ({
    ...obj,
  });
}

export enum LifeCycleState {
  AVAILABLE = "available",
  CREATING = "creating",
  DELETED = "deleted",
  DELETING = "deleting",
  UPDATING = "updating",
}

/**
 * <p>The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by
 *       NFS clients using the access point.</p>
 */
export interface PosixUser {
  /**
   * <p>The POSIX user ID used for all file system operations using this access point.</p>
   */
  Uid: number | undefined;

  /**
   * <p>The POSIX group ID used for all file system operations using this access point.</p>
   */
  Gid: number | undefined;

  /**
   * <p>Secondary POSIX group IDs used for all file system operations using this access point.</p>
   */
  SecondaryGids?: number[];
}

export namespace PosixUser {
  export const filterSensitiveLog = (obj: PosixUser): any => ({
    ...obj,
  });
}

/**
 * <p>Required if the <code>RootDirectory</code> > <code>Path</code> specified does not exist.
 *       Specifies the POSIX IDs and permissions to apply to the access point's <code>RootDirectory</code> > <code>Path</code>.
 *       If the access point root directory does not exist, EFS creates it with these settings when a client connects to the access point.
 *       When specifying <code>CreationInfo</code>, you must include values for all properties.
 *    </p>
 *          <important>
 *             <p>If you do not provide <code>CreationInfo</code> and the specified <code>RootDirectory</code> does not exist,
 *       attempts to mount the file system using the access point will fail.</p>
 *          </important>
 */
export interface CreationInfo {
  /**
   * <p>Specifies the POSIX user ID to apply to the <code>RootDirectory</code>. Accepts values from 0 to 2^32 (4294967295).</p>
   */
  OwnerUid: number | undefined;

  /**
   * <p>Specifies the POSIX group ID to apply to the <code>RootDirectory</code>. Accepts values from 0 to 2^32 (4294967295).</p>
   */
  OwnerGid: number | undefined;

  /**
   * <p>Specifies the POSIX permissions to apply to the <code>RootDirectory</code>, in the format of an octal number representing the file's mode bits.</p>
   */
  Permissions: string | undefined;
}

export namespace CreationInfo {
  export const filterSensitiveLog = (obj: CreationInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the directory on the Amazon EFS file system that the access point provides access to.
 *       The access point exposes the specified file system path as
 *       the root directory of your file system to applications using the access point.
 *       NFS clients using the access point can only access data in the access point's <code>RootDirectory</code> and it's subdirectories.</p>
 */
export interface RootDirectory {
  /**
   * <p>Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system.
   *        A path can have up to four subdirectories.
   *     If the specified path does not exist, you are required to provide the <code>CreationInfo</code>.</p>
   */
  Path?: string;

  /**
   * <p>(Optional) Specifies the POSIX IDs and permissions to apply to the access point's <code>RootDirectory</code>.
   *       If the <code>RootDirectory</code> > <code>Path</code> specified does not exist,
   *       EFS creates the root directory using the <code>CreationInfo</code> settings when a client connects to an access point.
   *       When specifying the <code>CreationInfo</code>, you must provide values for all properties.
   *     </p>
   *          <important>
   *             <p>If you do not provide <code>CreationInfo</code> and the specified <code>RootDirectory</code> > <code>Path</code> does not exist,
   *       attempts to mount the file system using the access point will fail.</p>
   *          </important>
   */
  CreationInfo?: CreationInfo;
}

export namespace RootDirectory {
  export const filterSensitiveLog = (obj: RootDirectory): any => ({
    ...obj,
  });
}

/**
 * <p>A tag is a key-value pair. Allowed characters are letters, white space, and numbers that
 *       can be represented in UTF-8, and the following characters:<code> + - = . _ : /</code>
 *          </p>
 */
export interface Tag {
  /**
   * <p>The tag key (String). The key can't start with <code>aws:</code>.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag key.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a description of an EFS file system access point.</p>
 */
export interface AccessPointDescription {
  /**
   * <p>The opaque string specified in the request to ensure idempotent creation.</p>
   */
  ClientToken?: string;

  /**
   * <p>The name of the access point. This is the value of the <code>Name</code> tag.</p>
   */
  Name?: string;

  /**
   * <p>The tags associated with the access point, presented as an array of Tag objects.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the access point, assigned by Amazon EFS.</p>
   */
  AccessPointId?: string;

  /**
   * <p>The  unique Amazon Resource Name (ARN) associated with the access point.</p>
   */
  AccessPointArn?: string;

  /**
   * <p>The ID of the EFS file system that the access point applies to.</p>
   */
  FileSystemId?: string;

  /**
   * <p>The full POSIX identity, including the user ID, group ID, and secondary group IDs on the access point that is used for all file operations by
   *       NFS clients using the access point.</p>
   */
  PosixUser?: PosixUser;

  /**
   * <p>The directory on the Amazon EFS file system that the access point exposes as the root directory to NFS clients using the access point.</p>
   */
  RootDirectory?: RootDirectory;

  /**
   * <p>Identified the AWS account that owns the access point resource.</p>
   */
  OwnerId?: string;

  /**
   * <p>Identifies the lifecycle phase of the access point.</p>
   */
  LifeCycleState?: LifeCycleState | string;
}

export namespace AccessPointDescription {
  export const filterSensitiveLog = (obj: AccessPointDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Returned if the AWS account has already created the maximum number of access points
 *             allowed per file system.</p>
 */
export interface AccessPointLimitExceeded extends __SmithyException, $MetadataBearer {
  name: "AccessPointLimitExceeded";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace AccessPointLimitExceeded {
  export const filterSensitiveLog = (obj: AccessPointLimitExceeded): any => ({
    ...obj,
  });
}

/**
 * <p>Returned if the specified <code>AccessPointId</code> value doesn't exist in the
 *             requester's AWS account.</p>
 */
export interface AccessPointNotFound extends __SmithyException, $MetadataBearer {
  name: "AccessPointNotFound";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace AccessPointNotFound {
  export const filterSensitiveLog = (obj: AccessPointNotFound): any => ({
    ...obj,
  });
}

export enum Status {
  DISABLED = "DISABLED",
  DISABLING = "DISABLING",
  ENABLED = "ENABLED",
  ENABLING = "ENABLING",
}

/**
 * <p>The backup policy for the file system, showing the curent status. If
 *       <code>ENABLED</code>, the file system is being backed up.</p>
 */
export interface BackupPolicy {
  /**
   * <p>Describes the status of the file system's backup policy.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>
   *                      <code>ENABLED</code> - EFS is automatically backing up the file system.</i>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>
   *                      <code>ENABLING</code> - EFS is turning on automatic backups for the file system.</i>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>
   *                      <code>DISABLED</code> - automatic back ups are turned off for the file system.</i>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>
   *                      <code>DISABLED</code> - EFS is turning off automatic backups for the file system.</i>
   *                </p>
   *             </li>
   *          </ul>
   */
  Status: Status | string | undefined;
}

export namespace BackupPolicy {
  export const filterSensitiveLog = (obj: BackupPolicy): any => ({
    ...obj,
  });
}

export interface BackupPolicyDescription {
  /**
   * <p>Describes the file system's backup policy, indicating whether automatic backups are turned on or off..</p>
   */
  BackupPolicy?: BackupPolicy;
}

export namespace BackupPolicyDescription {
  export const filterSensitiveLog = (obj: BackupPolicyDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Returned if the request is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter.</p>
 */
export interface BadRequest extends __SmithyException, $MetadataBearer {
  name: "BadRequest";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace BadRequest {
  export const filterSensitiveLog = (obj: BadRequest): any => ({
    ...obj,
  });
}

export interface CreateAccessPointRequest {
  /**
   * <p>A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent
   *       creation.</p>
   */
  ClientToken?: string;

  /**
   * <p>Creates tags associated with the access point. Each tag is a key-value pair.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the EFS file system that the access point provides access to.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>The operating system user and
   *       group applied to all file system requests made using the access point.</p>
   */
  PosixUser?: PosixUser;

  /**
   * <p>Specifies the directory on the Amazon EFS file system that the access point exposes as
   *       the root directory of your file system to NFS clients using the access point.
   *       The clients using the access point can only access the root directory and below.
   *       If the <code>RootDirectory</code> > <code>Path</code> specified does not exist,
   *       EFS creates it and applies the <code>CreationInfo</code> settings when a client connects to an access point.
   *       When specifying a <code>RootDirectory</code>, you need to provide the <code>Path</code>, and the <code>CreationInfo</code> is optional.</p>
   */
  RootDirectory?: RootDirectory;
}

export namespace CreateAccessPointRequest {
  export const filterSensitiveLog = (obj: CreateAccessPointRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the
 *             requester's AWS account.</p>
 */
export interface FileSystemNotFound extends __SmithyException, $MetadataBearer {
  name: "FileSystemNotFound";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace FileSystemNotFound {
  export const filterSensitiveLog = (obj: FileSystemNotFound): any => ({
    ...obj,
  });
}

/**
 * <p>Returned if the file system's lifecycle state is not "available".</p>
 */
export interface IncorrectFileSystemLifeCycleState extends __SmithyException, $MetadataBearer {
  name: "IncorrectFileSystemLifeCycleState";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace IncorrectFileSystemLifeCycleState {
  export const filterSensitiveLog = (obj: IncorrectFileSystemLifeCycleState): any => ({
    ...obj,
  });
}

/**
 * <p>Returned if an error occurred on the server side.</p>
 */
export interface InternalServerError extends __SmithyException, $MetadataBearer {
  name: "InternalServerError";
  $fault: "server";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace InternalServerError {
  export const filterSensitiveLog = (obj: InternalServerError): any => ({
    ...obj,
  });
}

export enum PerformanceMode {
  GENERAL_PURPOSE = "generalPurpose",
  MAX_IO = "maxIO",
}

export enum ThroughputMode {
  BURSTING = "bursting",
  PROVISIONED = "provisioned",
}

export interface CreateFileSystemRequest {
  /**
   * <p>A string of up to 64 ASCII characters. Amazon EFS uses this to ensure idempotent
   *       creation.</p>
   */
  CreationToken?: string;

  /**
   * <p>The performance mode of the file system. We recommend <code>generalPurpose</code>
   *       performance mode for most file systems. File systems using the <code>maxIO</code> performance
   *       mode can scale to higher levels of aggregate throughput and operations per second with a
   *       tradeoff of slightly higher latencies for most file operations. The performance mode
   *       can't be changed after the file system has been created.</p>
   */
  PerformanceMode?: PerformanceMode | string;

  /**
   * <p>A Boolean value that, if true, creates an encrypted file system. When creating an
   *       encrypted file system, you have the option of specifying <a>CreateFileSystemRequest$KmsKeyId</a> for an existing AWS Key Management Service (AWS
   *       KMS) customer master key (CMK). If you don't specify a CMK, then the default CMK for
   *       Amazon EFS, <code>/aws/elasticfilesystem</code>, is used to protect the encrypted file system.
   *     </p>
   */
  Encrypted?: boolean;

  /**
   * <p>The ID of the AWS KMS CMK to be used to protect the encrypted file system. This
   *       parameter is only required if you want to use a nondefault CMK. If this parameter is not
   *       specified, the default CMK for Amazon EFS is used. This ID can be in one of the following
   *       formats:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID - A unique identifier of the key, for example
   *             <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                <p>ARN - An Amazon Resource Name (ARN) for the key, for example
   *             <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                <p>Key alias - A previously created display name for a key, for example
   *             <code>alias/projectKey1</code>.</p>
   *             </li>
   *             <li>
   *                <p>Key alias ARN - An ARN for a key alias, for example
   *             <code>arn:aws:kms:us-west-2:444455556666:alias/projectKey1</code>.</p>
   *             </li>
   *          </ul>
   *          <p>If <code>KmsKeyId</code> is specified, the <a>CreateFileSystemRequest$Encrypted</a> parameter must be set to true.</p>
   *          <important>
   *             <p>EFS accepts only symmetric CMKs. You cannot use asymmetric CMKs with EFS file systems.</p>
   *          </important>
   */
  KmsKeyId?: string;

  /**
   * <p>The throughput mode for the file system to be created. There are two throughput modes to
   *       choose from for your file system: <code>bursting</code> and <code>provisioned</code>. If you set <code>ThroughputMode</code> to <code>provisioned</code>,
   *       you must also set a value for <code>ProvisionedThroughPutInMibps</code>. You can decrease your file
   *       system's throughput in Provisioned Throughput mode or change between the throughput modes
   *       as long as it’s been more than 24 hours since the last decrease or throughput mode
   *       change. For more,
   *       see <a href="https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput">Specifying Throughput with Provisioned Mode</a>
   *       in the <i>Amazon EFS User Guide.</i>
   *          </p>
   */
  ThroughputMode?: ThroughputMode | string;

  /**
   * <p>The throughput, measured in MiB/s, that you want to provision for a file system that
   *       you're creating. Valid values are 1-1024. Required if <code>ThroughputMode</code> is set to <code>provisioned</code>. The upper limit for throughput is 1024 MiB/s.
   *       You can get this limit increased by contacting AWS Support. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits">Amazon EFS Limits That You Can Increase</a>
   *       in the <i>Amazon EFS User Guide.</i>
   *          </p>
   */
  ProvisionedThroughputInMibps?: number;

  /**
   * <p>A value that specifies to create one or more tags associated with the file system. Each
   *         tag is a user-defined key-value pair. Name your file system on creation by including a
   *           <code>"Key":"Name","Value":"{value}"</code> key-value pair.</p>
   */
  Tags?: Tag[];
}

export namespace CreateFileSystemRequest {
  export const filterSensitiveLog = (obj: CreateFileSystemRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Returned if the file system you are trying to create already exists, with the
 *             creation token you provided.</p>
 */
export interface FileSystemAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "FileSystemAlreadyExists";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
  FileSystemId: string | undefined;
}

export namespace FileSystemAlreadyExists {
  export const filterSensitiveLog = (obj: FileSystemAlreadyExists): any => ({
    ...obj,
  });
}

/**
 * <p>The latest known metered size (in bytes) of data stored in the file system, in its
 *         <code>Value</code> field, and the time at which that size was determined in its
 *         <code>Timestamp</code> field. The value doesn't represent the size of a consistent
 *       snapshot of the file system, but it is eventually consistent when there are no writes to the
 *       file system. That is, the value represents the actual size only if the file system is not
 *       modified for a period longer than a couple of hours. Otherwise, the value is not necessarily
 *       the exact size the file system was at any instant in time.</p>
 */
export interface FileSystemSize {
  /**
   * <p>The latest known metered size (in bytes) of data stored in the file system.</p>
   */
  Value: number | undefined;

  /**
   * <p>The time at which the size of data, returned in the <code>Value</code> field, was
   *       determined. The value is the integer number of seconds since 1970-01-01T00:00:00Z.</p>
   */
  Timestamp?: Date;

  /**
   * <p>The latest known metered size (in bytes) of data stored in the Infrequent Access
   *       storage class.</p>
   */
  ValueInIA?: number;

  /**
   * <p>The latest known metered size (in bytes) of data stored in the Standard storage
   *       class.</p>
   */
  ValueInStandard?: number;
}

export namespace FileSystemSize {
  export const filterSensitiveLog = (obj: FileSystemSize): any => ({
    ...obj,
  });
}

/**
 * <p>A description of the file system.</p>
 */
export interface FileSystemDescription {
  /**
   * <p>The AWS account that created the file system. If the file system was created by an IAM
   *       user, the parent account to which the user belongs is the owner.</p>
   */
  OwnerId: string | undefined;

  /**
   * <p>The opaque string specified in the request.</p>
   */
  CreationToken: string | undefined;

  /**
   * <p>The ID of the file system, assigned by Amazon EFS.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the EFS file system, in the format
   *       <code>arn:aws:elasticfilesystem:<i>region</i>:<i>account-id</i>:file-system/<i>file-system-id</i>
   *             </code>.
   *       Example with sample data: <code>arn:aws:elasticfilesystem:us-west-2:1111333322228888:file-system/fs-01234567</code>
   *          </p>
   */
  FileSystemArn?: string;

  /**
   * <p>The time that the file system was created, in seconds (since
   *       1970-01-01T00:00:00Z).</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The lifecycle phase of the file system.</p>
   */
  LifeCycleState: LifeCycleState | string | undefined;

  /**
   * <p>You can add tags to a file system, including a <code>Name</code> tag. For more
   *       information, see <a>CreateFileSystem</a>. If the file system has a <code>Name</code> tag, Amazon EFS returns
   *       the value in this field. </p>
   */
  Name?: string;

  /**
   * <p>The current number of mount targets that the file system has. For more information, see <a>CreateMountTarget</a>.</p>
   */
  NumberOfMountTargets: number | undefined;

  /**
   * <p>The latest known metered size (in bytes) of data stored in the file system, in its
   *         <code>Value</code> field, and the time at which that size was determined in its
   *         <code>Timestamp</code> field. The <code>Timestamp</code> value is the integer number of
   *       seconds since 1970-01-01T00:00:00Z. The <code>SizeInBytes</code> value doesn't represent
   *       the size of a consistent snapshot of the file system, but it is eventually consistent when
   *       there are no writes to the file system. That is, <code>SizeInBytes</code> represents actual
   *       size only if the file system is not modified for a period longer than a couple of hours.
   *       Otherwise, the value is not the exact size that the file system was at any point in time.
   *     </p>
   */
  SizeInBytes: FileSystemSize | undefined;

  /**
   * <p>The performance mode of the file system.</p>
   */
  PerformanceMode: PerformanceMode | string | undefined;

  /**
   * <p>A Boolean value that, if true, indicates that the file system is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The ID of an AWS Key Management Service (AWS KMS) customer master key (CMK) that was
   *       used to protect the encrypted file system.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The throughput mode for a file system. There are two throughput modes to choose from for
   *       your file system: <code>bursting</code> and <code>provisioned</code>. If you set <code>ThroughputMode</code> to <code>provisioned</code>,
   *       you must also set a value for <code>ProvisionedThroughPutInMibps</code>. You can decrease your file system's
   *       throughput in Provisioned Throughput mode or change between the throughput modes as long as
   *       it’s been more than 24 hours since the last decrease or throughput mode change.
   *     </p>
   */
  ThroughputMode?: ThroughputMode | string;

  /**
   * <p>The throughput, measured in MiB/s, that you want to provision for a file system. Valid values are 1-1024.
   *       Required if <code>ThroughputMode</code> is set to <code>provisioned</code>. The limit
   *       on throughput is 1024 MiB/s. You can get these limits increased by contacting AWS Support. For
   *       more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits">Amazon EFS Limits That You Can Increase</a>
   *       in the <i>Amazon EFS User Guide.</i>
   *          </p>
   */
  ProvisionedThroughputInMibps?: number;

  /**
   * <p>The tags associated with the file system, presented as an array of <code>Tag</code>
   *       objects.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace FileSystemDescription {
  export const filterSensitiveLog = (obj: FileSystemDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Returned if the AWS account has already created the maximum number of file systems
 *             allowed per account.</p>
 */
export interface FileSystemLimitExceeded extends __SmithyException, $MetadataBearer {
  name: "FileSystemLimitExceeded";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace FileSystemLimitExceeded {
  export const filterSensitiveLog = (obj: FileSystemLimitExceeded): any => ({
    ...obj,
  });
}

/**
 * <p>Returned if there's not enough capacity to provision additional throughput. This value
 *             might be returned when you try to create a file system in provisioned throughput mode,
 *             when you attempt to increase the provisioned throughput of an existing file system, or
 *             when you attempt to change an existing file system from bursting to provisioned
 *             throughput mode.</p>
 */
export interface InsufficientThroughputCapacity extends __SmithyException, $MetadataBearer {
  name: "InsufficientThroughputCapacity";
  $fault: "server";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace InsufficientThroughputCapacity {
  export const filterSensitiveLog = (obj: InsufficientThroughputCapacity): any => ({
    ...obj,
  });
}

/**
 * <p>Returned if the throughput mode or amount of provisioned throughput can't be changed
 *             because the throughput limit of 1024 MiB/s has been reached.</p>
 */
export interface ThroughputLimitExceeded extends __SmithyException, $MetadataBearer {
  name: "ThroughputLimitExceeded";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace ThroughputLimitExceeded {
  export const filterSensitiveLog = (obj: ThroughputLimitExceeded): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateMountTargetRequest {
  /**
   * <p>The ID of the file system for which to create the mount target.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>The ID of the subnet to add the mount target in.</p>
   */
  SubnetId: string | undefined;

  /**
   * <p>Valid IPv4 address within the address range of the specified subnet.</p>
   */
  IpAddress?: string;

  /**
   * <p>Up to five VPC security group IDs, of the form <code>sg-xxxxxxxx</code>. These must be
   *       for the same VPC as subnet specified.</p>
   */
  SecurityGroups?: string[];
}

export namespace CreateMountTargetRequest {
  export const filterSensitiveLog = (obj: CreateMountTargetRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Returned if the request specified an <code>IpAddress</code> that is already in use
 *             in the subnet.</p>
 */
export interface IpAddressInUse extends __SmithyException, $MetadataBearer {
  name: "IpAddressInUse";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace IpAddressInUse {
  export const filterSensitiveLog = (obj: IpAddressInUse): any => ({
    ...obj,
  });
}

/**
 * <p>Returned if the mount target would violate one of the specified restrictions based
 *             on the file system's existing mount targets.</p>
 */
export interface MountTargetConflict extends __SmithyException, $MetadataBearer {
  name: "MountTargetConflict";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace MountTargetConflict {
  export const filterSensitiveLog = (obj: MountTargetConflict): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a description of a mount target.</p>
 */
export interface MountTargetDescription {
  /**
   * <p>AWS account ID that owns the resource.</p>
   */
  OwnerId?: string;

  /**
   * <p>System-assigned mount target ID.</p>
   */
  MountTargetId: string | undefined;

  /**
   * <p>The ID of the file system for which the mount target is intended.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>The ID of the mount target's subnet.</p>
   */
  SubnetId: string | undefined;

  /**
   * <p>Lifecycle state of the mount target.</p>
   */
  LifeCycleState: LifeCycleState | string | undefined;

  /**
   * <p>Address at which the file system can be mounted by using the mount target.</p>
   */
  IpAddress?: string;

  /**
   * <p>The ID of the network interface that Amazon EFS created when it created the mount
   *       target.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The unique and consistent identifier of the Availability Zone (AZ) that the mount target resides in.
   *       For example, <code>use1-az1</code> is an AZ ID for the us-east-1 Region and it has the same location in every AWS account.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The name of the Availability Zone (AZ) that the mount target resides in. AZs are
   *       independently mapped to names for each AWS account. For example, the Availability Zone
   *       <code>us-east-1a</code> for your AWS account might not be the same location as <code>us-east-1a</code> for another AWS account.</p>
   */
  AvailabilityZoneName?: string;

  /**
   * <p>The Virtual Private Cloud (VPC) ID that the mount target is configured in.</p>
   */
  VpcId?: string;
}

export namespace MountTargetDescription {
  export const filterSensitiveLog = (obj: MountTargetDescription): any => ({
    ...obj,
  });
}

/**
 * <p>The calling account has reached the limit for elastic network interfaces for the
 *             specific AWS Region. The client should try to delete some elastic network interfaces or
 *             get the account limit raised. For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Appendix_Limits.html">Amazon VPC Limits</a>
 *             in the <i>Amazon VPC User Guide </i> (see the Network interfaces per VPC
 *             entry in the table). </p>
 */
export interface NetworkInterfaceLimitExceeded extends __SmithyException, $MetadataBearer {
  name: "NetworkInterfaceLimitExceeded";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace NetworkInterfaceLimitExceeded {
  export const filterSensitiveLog = (obj: NetworkInterfaceLimitExceeded): any => ({
    ...obj,
  });
}

/**
 * <p>Returned if <code>IpAddress</code> was not specified in the request and there are
 *             no free IP addresses in the subnet.</p>
 */
export interface NoFreeAddressesInSubnet extends __SmithyException, $MetadataBearer {
  name: "NoFreeAddressesInSubnet";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace NoFreeAddressesInSubnet {
  export const filterSensitiveLog = (obj: NoFreeAddressesInSubnet): any => ({
    ...obj,
  });
}

/**
 * <p>Returned if the size of <code>SecurityGroups</code> specified in the request is
 *             greater than five.</p>
 */
export interface SecurityGroupLimitExceeded extends __SmithyException, $MetadataBearer {
  name: "SecurityGroupLimitExceeded";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace SecurityGroupLimitExceeded {
  export const filterSensitiveLog = (obj: SecurityGroupLimitExceeded): any => ({
    ...obj,
  });
}

/**
 * <p>Returned if one of the specified security groups doesn't exist in the subnet's
 *             VPC.</p>
 */
export interface SecurityGroupNotFound extends __SmithyException, $MetadataBearer {
  name: "SecurityGroupNotFound";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace SecurityGroupNotFound {
  export const filterSensitiveLog = (obj: SecurityGroupNotFound): any => ({
    ...obj,
  });
}

/**
 * <p>Returned if there is no subnet with ID <code>SubnetId</code> provided in the
 *             request.</p>
 */
export interface SubnetNotFound extends __SmithyException, $MetadataBearer {
  name: "SubnetNotFound";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace SubnetNotFound {
  export const filterSensitiveLog = (obj: SubnetNotFound): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface UnsupportedAvailabilityZone extends __SmithyException, $MetadataBearer {
  name: "UnsupportedAvailabilityZone";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace UnsupportedAvailabilityZone {
  export const filterSensitiveLog = (obj: UnsupportedAvailabilityZone): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateTagsRequest {
  /**
   * <p>The ID of the file system whose tags you want to modify (String). This operation modifies
   *       the tags only, not the file system.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>An array of <code>Tag</code> objects to add. Each <code>Tag</code> object is a key-value
   *       pair. </p>
   */
  Tags: Tag[] | undefined;
}

export namespace CreateTagsRequest {
  export const filterSensitiveLog = (obj: CreateTagsRequest): any => ({
    ...obj,
  });
}

export interface DeleteAccessPointRequest {
  /**
   * <p>The ID of the access point that you want to delete.</p>
   */
  AccessPointId: string | undefined;
}

export namespace DeleteAccessPointRequest {
  export const filterSensitiveLog = (obj: DeleteAccessPointRequest): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteFileSystemRequest {
  /**
   * <p>The ID of the file system you want to delete.</p>
   */
  FileSystemId: string | undefined;
}

export namespace DeleteFileSystemRequest {
  export const filterSensitiveLog = (obj: DeleteFileSystemRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Returned if a file system has mount targets.</p>
 */
export interface FileSystemInUse extends __SmithyException, $MetadataBearer {
  name: "FileSystemInUse";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace FileSystemInUse {
  export const filterSensitiveLog = (obj: FileSystemInUse): any => ({
    ...obj,
  });
}

export interface DeleteFileSystemPolicyRequest {
  /**
   * <p>Specifies the EFS file system for which to delete the <code>FileSystemPolicy</code>.</p>
   */
  FileSystemId: string | undefined;
}

export namespace DeleteFileSystemPolicyRequest {
  export const filterSensitiveLog = (obj: DeleteFileSystemPolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteMountTargetRequest {
  /**
   * <p>The ID of the mount target to delete (String).</p>
   */
  MountTargetId: string | undefined;
}

export namespace DeleteMountTargetRequest {
  export const filterSensitiveLog = (obj: DeleteMountTargetRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The service timed out trying to fulfill the request, and the client should try the
 *             call again.</p>
 */
export interface DependencyTimeout extends __SmithyException, $MetadataBearer {
  name: "DependencyTimeout";
  $fault: "server";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace DependencyTimeout {
  export const filterSensitiveLog = (obj: DependencyTimeout): any => ({
    ...obj,
  });
}

/**
 * <p>Returned if there is no mount target with the specified ID found in the
 *             caller's account.</p>
 */
export interface MountTargetNotFound extends __SmithyException, $MetadataBearer {
  name: "MountTargetNotFound";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace MountTargetNotFound {
  export const filterSensitiveLog = (obj: MountTargetNotFound): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteTagsRequest {
  /**
   * <p>The ID of the file system whose tags you want to delete (String).</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>A list of tag keys to delete.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace DeleteTagsRequest {
  export const filterSensitiveLog = (obj: DeleteTagsRequest): any => ({
    ...obj,
  });
}

export interface DescribeAccessPointsRequest {
  /**
   * <p>(Optional) When retrieving all access points for a file system,
   *       you can optionally specify the <code>MaxItems</code> parameter to limit the number of objects returned in a response.
   *       The default value is 100. </p>
   */
  MaxResults?: number;

  /**
   * <p>
   *             <code>NextToken</code> is present if the response is paginated. You can use <code>NextMarker</code> in the subsequent request to fetch the next page of access point descriptions.</p>
   */
  NextToken?: string;

  /**
   * <p>(Optional) Specifies an EFS access point to describe in the response; mutually exclusive with <code>FileSystemId</code>.</p>
   */
  AccessPointId?: string;

  /**
   * <p>(Optional) If you provide a <code>FileSystemId</code>, EFS returns all access points for that file system; mutually exclusive with <code>AccessPointId</code>.</p>
   */
  FileSystemId?: string;
}

export namespace DescribeAccessPointsRequest {
  export const filterSensitiveLog = (obj: DescribeAccessPointsRequest): any => ({
    ...obj,
  });
}

export interface DescribeAccessPointsResponse {
  /**
   * <p>An array of access point descriptions.</p>
   */
  AccessPoints?: AccessPointDescription[];

  /**
   * <p>Present if there are more access points than returned in the response.
   *       You can use the NextMarker in the subsequent request to fetch the additional descriptions.</p>
   */
  NextToken?: string;
}

export namespace DescribeAccessPointsResponse {
  export const filterSensitiveLog = (obj: DescribeAccessPointsResponse): any => ({
    ...obj,
  });
}

export interface DescribeBackupPolicyRequest {
  /**
   * <p>Specifies which EFS file system to retrieve the <code>BackupPolicy</code> for.</p>
   */
  FileSystemId: string | undefined;
}

export namespace DescribeBackupPolicyRequest {
  export const filterSensitiveLog = (obj: DescribeBackupPolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Returned if the default file system policy is in effect for the EFS file system specified.</p>
 */
export interface PolicyNotFound extends __SmithyException, $MetadataBearer {
  name: "PolicyNotFound";
  $fault: "client";
  ErrorCode?: string;
  Message?: string;
}

export namespace PolicyNotFound {
  export const filterSensitiveLog = (obj: PolicyNotFound): any => ({
    ...obj,
  });
}

/**
 * <p>Returned if the AWS Backup service is not available in the region that the request was made.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export interface DescribeFileSystemPolicyRequest {
  /**
   * <p>Specifies which EFS file system to retrieve the <code>FileSystemPolicy</code> for.</p>
   */
  FileSystemId: string | undefined;
}

export namespace DescribeFileSystemPolicyRequest {
  export const filterSensitiveLog = (obj: DescribeFileSystemPolicyRequest): any => ({
    ...obj,
  });
}

export interface FileSystemPolicyDescription {
  /**
   * <p>Specifies the EFS file system to which the <code>FileSystemPolicy</code> applies.</p>
   */
  FileSystemId?: string;

  /**
   * <p>The JSON formatted <code>FileSystemPolicy</code> for the EFS file system.</p>
   */
  Policy?: string;
}

export namespace FileSystemPolicyDescription {
  export const filterSensitiveLog = (obj: FileSystemPolicyDescription): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeFileSystemsRequest {
  /**
   * <p>(Optional) Specifies the maximum number of file systems to return in the response
   *       (integer). This number is automatically set to 100. The response is paginated at 100 per page if you have more than 100 file systems.
   *       </p>
   */
  MaxItems?: number;

  /**
   * <p>(Optional) Opaque pagination token returned from a previous
   *         <code>DescribeFileSystems</code> operation (String). If present, specifies to continue the
   *       list from where the returning call had left off. </p>
   */
  Marker?: string;

  /**
   * <p>(Optional) Restricts the list to the file system with this creation token (String). You
   *       specify a creation token when you create an Amazon EFS file system.</p>
   */
  CreationToken?: string;

  /**
   * <p>(Optional) ID of the file system whose description you want to retrieve
   *       (String).</p>
   */
  FileSystemId?: string;
}

export namespace DescribeFileSystemsRequest {
  export const filterSensitiveLog = (obj: DescribeFileSystemsRequest): any => ({
    ...obj,
  });
}

export interface DescribeFileSystemsResponse {
  /**
   * <p>Present if provided by caller in the request (String).</p>
   */
  Marker?: string;

  /**
   * <p>An array of file system descriptions.</p>
   */
  FileSystems?: FileSystemDescription[];

  /**
   * <p>Present if there are more file systems than returned in the response (String). You can
   *       use the <code>NextMarker</code> in the subsequent request to fetch the descriptions.</p>
   */
  NextMarker?: string;
}

export namespace DescribeFileSystemsResponse {
  export const filterSensitiveLog = (obj: DescribeFileSystemsResponse): any => ({
    ...obj,
  });
}

export interface DescribeLifecycleConfigurationRequest {
  /**
   * <p>The ID of the file system whose <code>LifecycleConfiguration</code> object you want to
   *       retrieve (String).</p>
   */
  FileSystemId: string | undefined;
}

export namespace DescribeLifecycleConfigurationRequest {
  export const filterSensitiveLog = (obj: DescribeLifecycleConfigurationRequest): any => ({
    ...obj,
  });
}

export enum TransitionToIARules {
  AFTER_14_DAYS = "AFTER_14_DAYS",
  AFTER_30_DAYS = "AFTER_30_DAYS",
  AFTER_60_DAYS = "AFTER_60_DAYS",
  AFTER_7_DAYS = "AFTER_7_DAYS",
  AFTER_90_DAYS = "AFTER_90_DAYS",
}

/**
 * <p>Describes a policy used by EFS lifecycle management to transition files to the Infrequent
 *       Access (IA) storage class.</p>
 */
export interface LifecyclePolicy {
  /**
   * <p>
   *       A value that describes the period of time that a file is not accessed, after which it transitions to the IA storage class. Metadata
   *       operations such as listing the contents of a directory don't count as file access
   *       events.</p>
   */
  TransitionToIA?: TransitionToIARules | string;
}

export namespace LifecyclePolicy {
  export const filterSensitiveLog = (obj: LifecyclePolicy): any => ({
    ...obj,
  });
}

export interface LifecycleConfigurationDescription {
  /**
   * <p>An array of lifecycle management policies. Currently, EFS supports a maximum of one
   *       policy per file system.</p>
   */
  LifecyclePolicies?: LifecyclePolicy[];
}

export namespace LifecycleConfigurationDescription {
  export const filterSensitiveLog = (obj: LifecycleConfigurationDescription): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeMountTargetsRequest {
  /**
   * <p>(Optional) Maximum number of mount targets to return in the response. Currently, this
   *       number is automatically set to
   *       10, and other values are ignored. The response is paginated at 100 per page if you have more than 100 mount targets.</p>
   */
  MaxItems?: number;

  /**
   * <p>(Optional) Opaque pagination token returned from a previous
   *         <code>DescribeMountTargets</code> operation (String). If present, it specifies to continue
   *       the list from where the previous returning call left off.</p>
   */
  Marker?: string;

  /**
   * <p>(Optional) ID of the file system whose mount targets you want to list (String). It must
   *       be included in your request if an <code>AccessPointId</code> or <code>MountTargetId</code> is not included. Accepts either a file system ID or ARN as input.</p>
   */
  FileSystemId?: string;

  /**
   * <p>(Optional) ID of the mount target that you want to have described (String). It must be
   *       included in your request if <code>FileSystemId</code> is not included. Accepts either a mount target ID or ARN as input.</p>
   */
  MountTargetId?: string;

  /**
   * <p>(Optional) The ID of the access point whose mount targets that you want to list. It must be included in your request if a
   *       <code>FileSystemId</code> or <code>MountTargetId</code> is not included in your request. Accepts either an access point ID or ARN as input.</p>
   */
  AccessPointId?: string;
}

export namespace DescribeMountTargetsRequest {
  export const filterSensitiveLog = (obj: DescribeMountTargetsRequest): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeMountTargetsResponse {
  /**
   * <p>If the request included the <code>Marker</code>, the response returns that value in
   *       this field.</p>
   */
  Marker?: string;

  /**
   * <p>Returns the file system's mount targets as an array of
   *         <code>MountTargetDescription</code> objects.</p>
   */
  MountTargets?: MountTargetDescription[];

  /**
   * <p>If a value is present, there are more mount targets to return. In a subsequent request,
   *       you can provide <code>Marker</code> in your request with this value to retrieve the next set
   *       of mount targets.</p>
   */
  NextMarker?: string;
}

export namespace DescribeMountTargetsResponse {
  export const filterSensitiveLog = (obj: DescribeMountTargetsResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeMountTargetSecurityGroupsRequest {
  /**
   * <p>The ID of the mount target whose security groups you want to retrieve.</p>
   */
  MountTargetId: string | undefined;
}

export namespace DescribeMountTargetSecurityGroupsRequest {
  export const filterSensitiveLog = (obj: DescribeMountTargetSecurityGroupsRequest): any => ({
    ...obj,
  });
}

export interface DescribeMountTargetSecurityGroupsResponse {
  /**
   * <p>An array of security groups.</p>
   */
  SecurityGroups: string[] | undefined;
}

export namespace DescribeMountTargetSecurityGroupsResponse {
  export const filterSensitiveLog = (obj: DescribeMountTargetSecurityGroupsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Returned if the mount target is not in the correct state for the
 *             operation.</p>
 */
export interface IncorrectMountTargetState extends __SmithyException, $MetadataBearer {
  name: "IncorrectMountTargetState";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace IncorrectMountTargetState {
  export const filterSensitiveLog = (obj: IncorrectMountTargetState): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeTagsRequest {
  /**
   * <p>(Optional) The maximum number of file system tags to return in the response. Currently,
   *       this number is automatically set to
   *       100, and other values are ignored. The response is paginated at 100 per page if you have more than 100 tags.</p>
   */
  MaxItems?: number;

  /**
   * <p>(Optional) An opaque pagination token returned from a previous
   *         <code>DescribeTags</code> operation (String). If present, it specifies to continue the list
   *       from where the previous call left off.</p>
   */
  Marker?: string;

  /**
   * <p>The ID of the file system whose tag set you want to retrieve.</p>
   */
  FileSystemId: string | undefined;
}

export namespace DescribeTagsRequest {
  export const filterSensitiveLog = (obj: DescribeTagsRequest): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeTagsResponse {
  /**
   * <p>If the request included a <code>Marker</code>, the response returns that value in this
   *       field.</p>
   */
  Marker?: string;

  /**
   * <p>Returns tags associated with the file system as an array of <code>Tag</code> objects.
   *     </p>
   */
  Tags: Tag[] | undefined;

  /**
   * <p>If a value is present, there are more tags to return. In a subsequent request, you can
   *       provide the value of <code>NextMarker</code> as the value of the <code>Marker</code> parameter
   *       in your next request to retrieve the next set of tags.</p>
   */
  NextMarker?: string;
}

export namespace DescribeTagsResponse {
  export const filterSensitiveLog = (obj: DescribeTagsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Returned if the <code>FileSystemPolicy</code> is is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter. Returned in the case of a policy lockout safety check error.</p>
 */
export interface InvalidPolicyException extends __SmithyException, $MetadataBearer {
  name: "InvalidPolicyException";
  $fault: "client";
  ErrorCode?: string;
  Message?: string;
}

export namespace InvalidPolicyException {
  export const filterSensitiveLog = (obj: InvalidPolicyException): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>Specifies the EFS resource you want to retrieve tags for. You can retrieve tags for EFS file systems and access points using this API endpoint.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>(Optional) Specifies the maximum number of tag objects to return in the response. The default value is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>You can use <code>NextToken</code> in a subsequent request to fetch the next page of access point descriptions if the response payload was paginated.</p>
   */
  NextToken?: string;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>An array of the tags for the specified EFS resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>
   *             <code>NextToken</code> is present if the response payload is paginated. You can use <code>NextToken</code> in a subsequent request to fetch the next page of access point descriptions.</p>
   */
  NextToken?: string;
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyMountTargetSecurityGroupsRequest {
  /**
   * <p>The ID of the mount target whose security groups you want to modify.</p>
   */
  MountTargetId: string | undefined;

  /**
   * <p>An array of up to five VPC security group IDs.</p>
   */
  SecurityGroups?: string[];
}

export namespace ModifyMountTargetSecurityGroupsRequest {
  export const filterSensitiveLog = (obj: ModifyMountTargetSecurityGroupsRequest): any => ({
    ...obj,
  });
}

export interface PutBackupPolicyRequest {
  /**
   * <p>Specifies which EFS file system to update the backup policy for.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>The backup policy included in the <code>PutBackupPolicy</code> request.</p>
   */
  BackupPolicy: BackupPolicy | undefined;
}

export namespace PutBackupPolicyRequest {
  export const filterSensitiveLog = (obj: PutBackupPolicyRequest): any => ({
    ...obj,
  });
}

export interface PutFileSystemPolicyRequest {
  /**
   * <p>The ID of the EFS file system that you want to create or update the <code>FileSystemPolicy</code> for.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>The <code>FileSystemPolicy</code> that you're creating. Accepts a JSON formatted policy definition.
   *       To find out more about the elements that make up a file system policy, see
   *       <a href="https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-manage-access-intro-resource-policies">EFS Resource-based Policies</a>.
   *     </p>
   */
  Policy: string | undefined;

  /**
   * <p>(Optional) A flag to indicate whether to bypass the <code>FileSystemPolicy</code> lockout safety check. The policy lockout safety check
   *       determines whether the policy in the request will prevent the principal making the request will be locked out from making future <code>PutFileSystemPolicy</code> requests on the file system.
   *       Set <code>BypassPolicyLockoutSafetyCheck</code> to <code>True</code> only when you intend to prevent
   *       the principal that is making the request from making a subsequent <code>PutFileSystemPolicy</code> request on the file system.
   *       The default value is False.
   *     </p>
   */
  BypassPolicyLockoutSafetyCheck?: boolean;
}

export namespace PutFileSystemPolicyRequest {
  export const filterSensitiveLog = (obj: PutFileSystemPolicyRequest): any => ({
    ...obj,
  });
}

export interface PutLifecycleConfigurationRequest {
  /**
   * <p>The ID of the file system for which you are creating the
   *         <code>LifecycleConfiguration</code> object (String).</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>An array of <code>LifecyclePolicy</code> objects that define the file system's
   *         <code>LifecycleConfiguration</code> object. A <code>LifecycleConfiguration</code> object
   *       tells lifecycle management when to transition files from the Standard storage class to the
   *       Infrequent Access storage class.</p>
   */
  LifecyclePolicies: LifecyclePolicy[] | undefined;
}

export namespace PutLifecycleConfigurationRequest {
  export const filterSensitiveLog = (obj: PutLifecycleConfigurationRequest): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The ID specifying the EFS resource that you want to create a tag for. </p>
   */
  ResourceId: string | undefined;

  /**
   * <p></p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>Specifies the EFS resource that you want to remove tags from.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The keys of the key:value tag pairs that you want to remove from the specified EFS resource.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Returned if you don’t wait at least 24 hours before changing the throughput mode, or
 *             decreasing the Provisioned Throughput value.</p>
 */
export interface TooManyRequests extends __SmithyException, $MetadataBearer {
  name: "TooManyRequests";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace TooManyRequests {
  export const filterSensitiveLog = (obj: TooManyRequests): any => ({
    ...obj,
  });
}

export interface UpdateFileSystemRequest {
  /**
   * <p>The ID of the file system that you want to update.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>(Optional) The throughput mode that you want your file system to use. If you're not
   *       updating your throughput mode, you don't need to provide this value in your
   *       request. If you are changing the <code>ThroughputMode</code> to <code>provisioned</code>, you must also set a value for <code>ProvisionedThroughputInMibps</code>.</p>
   */
  ThroughputMode?: ThroughputMode | string;

  /**
   * <p>(Optional) The amount of throughput, in MiB/s, that you want to provision for your file
   *       system. Valid values are 1-1024. Required if <code>ThroughputMode</code> is changed to <code>provisioned</code> on update.
   *       If you're not updating the amount of provisioned throughput for your file system, you
   *       don't need to provide this value in your request. </p>
   */
  ProvisionedThroughputInMibps?: number;
}

export namespace UpdateFileSystemRequest {
  export const filterSensitiveLog = (obj: UpdateFileSystemRequest): any => ({
    ...obj,
  });
}

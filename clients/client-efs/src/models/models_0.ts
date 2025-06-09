// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { EFSServiceException as __BaseException } from "./EFSServiceException";

/**
 * <p>Returned if the access point that you are trying to create already exists, with the
 *             creation token you provided in the request.</p>
 * @public
 */
export class AccessPointAlreadyExists extends __BaseException {
  readonly name: "AccessPointAlreadyExists" = "AccessPointAlreadyExists";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;

  AccessPointId: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessPointAlreadyExists, __BaseException>) {
    super({
      name: "AccessPointAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessPointAlreadyExists.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
    this.AccessPointId = opts.AccessPointId;
  }
}

/**
 * @public
 * @enum
 */
export const LifeCycleState = {
  AVAILABLE: "available",
  CREATING: "creating",
  DELETED: "deleted",
  DELETING: "deleting",
  ERROR: "error",
  UPDATING: "updating",
} as const;

/**
 * @public
 */
export type LifeCycleState = (typeof LifeCycleState)[keyof typeof LifeCycleState];

/**
 * <p>The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by
 *       NFS clients using the access point.</p>
 * @public
 */
export interface PosixUser {
  /**
   * <p>The POSIX user ID used for all file system operations using this access point.</p>
   * @public
   */
  Uid: number | undefined;

  /**
   * <p>The POSIX group ID used for all file system operations using this access point.</p>
   * @public
   */
  Gid: number | undefined;

  /**
   * <p>Secondary POSIX group IDs used for all file system operations using this access point.</p>
   * @public
   */
  SecondaryGids?: number[] | undefined;
}

/**
 * <p>Required if the <code>RootDirectory</code> > <code>Path</code> specified does not exist.
 *       Specifies the POSIX IDs and permissions to apply to the access point's <code>RootDirectory</code> > <code>Path</code>.
 *       If the access point root directory does not exist, EFS creates it with these settings when a client connects to the access point.
 *       When specifying <code>CreationInfo</code>, you must include values for all properties.
 *    </p>
 *          <p>Amazon EFS creates a root directory only if you have provided the  CreationInfo: OwnUid, OwnGID, and permissions for the directory.
 *       If  you do not provide this information, Amazon EFS does not create the root directory. If the root directory does not exist, attempts to mount
 *       using the access point will fail.</p>
 *          <important>
 *             <p>If you do not provide <code>CreationInfo</code> and the specified <code>RootDirectory</code> does not exist,
 *       attempts to mount the file system using the access point will fail.</p>
 *          </important>
 * @public
 */
export interface CreationInfo {
  /**
   * <p>Specifies the POSIX user ID to apply to the <code>RootDirectory</code>. Accepts values from 0 to 2^32 (4294967295).</p>
   * @public
   */
  OwnerUid: number | undefined;

  /**
   * <p>Specifies the POSIX group ID to apply to the <code>RootDirectory</code>. Accepts values from 0 to 2^32 (4294967295).</p>
   * @public
   */
  OwnerGid: number | undefined;

  /**
   * <p>Specifies the POSIX permissions to apply to the <code>RootDirectory</code>, in the format of an octal number representing the file's mode bits.</p>
   * @public
   */
  Permissions: string | undefined;
}

/**
 * <p>Specifies the directory on the Amazon EFS file system that the access point
 *       provides access to. The access point exposes the specified file system path as the root
 *       directory of your file system to applications using the access point. NFS clients using the
 *       access point can only access data in the access point's <code>RootDirectory</code> and its
 *       subdirectories.</p>
 * @public
 */
export interface RootDirectory {
  /**
   * <p>Specifies the path on the EFS file system to expose as the root directory to
   *       NFS clients using the access point to access the EFS file system. A path can have
   *       up to four subdirectories. If the specified path does not exist, you are required to provide
   *       the <code>CreationInfo</code>.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>(Optional) Specifies the POSIX IDs and permissions to apply to the access point's
   *         <code>RootDirectory</code>. If the <code>RootDirectory</code> > <code>Path</code>
   *       specified does not exist, EFS creates the root directory using the
   *         <code>CreationInfo</code> settings when a client connects to an access point. When
   *       specifying the <code>CreationInfo</code>, you must provide values for all properties. </p>
   *          <important>
   *             <p>If you do not provide <code>CreationInfo</code> and the specified <code>RootDirectory</code> > <code>Path</code> does not exist,
   *       attempts to mount the file system using the access point will fail.</p>
   *          </important>
   * @public
   */
  CreationInfo?: CreationInfo | undefined;
}

/**
 * <p>A tag is a key-value pair. Allowed characters are letters, white space, and numbers that
 *       can be represented in UTF-8, and the following characters:<code> + - = . _ : /</code>.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The tag key (String). The key can't start with <code>aws:</code>.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag key.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Provides a description of an EFS file system access point.</p>
 * @public
 */
export interface AccessPointDescription {
  /**
   * <p>The opaque string specified in the request to ensure idempotent creation.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The name of the access point. This is the value of the <code>Name</code> tag.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The tags associated with the access point, presented as an array of Tag objects.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the access point, assigned by Amazon EFS.</p>
   * @public
   */
  AccessPointId?: string | undefined;

  /**
   * <p>The unique Amazon Resource Name (ARN) associated with the access
   *       point.</p>
   * @public
   */
  AccessPointArn?: string | undefined;

  /**
   * <p>The ID of the EFS file system that the access point applies to.</p>
   * @public
   */
  FileSystemId?: string | undefined;

  /**
   * <p>The full POSIX identity, including the user ID, group ID, and secondary group IDs on the access point that is used for all file operations by
   *       NFS clients using the access point.</p>
   * @public
   */
  PosixUser?: PosixUser | undefined;

  /**
   * <p>The directory on the EFS file system that the access point exposes as the root
   *       directory to NFS clients using the access point.</p>
   * @public
   */
  RootDirectory?: RootDirectory | undefined;

  /**
   * <p>Identifies the Amazon Web Services account that owns the access point resource.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>Identifies the lifecycle phase of the access point.</p>
   * @public
   */
  LifeCycleState?: LifeCycleState | undefined;
}

/**
 * <p>Returned if the Amazon Web Services account has already created the maximum number of access points
 *             allowed per file system. For more informaton, see <a href="https://docs.aws.amazon.com/efs/latest/ug/limits.html#limits-efs-resources-per-account-per-region">https://docs.aws.amazon.com/efs/latest/ug/limits.html#limits-efs-resources-per-account-per-region</a>.</p>
 * @public
 */
export class AccessPointLimitExceeded extends __BaseException {
  readonly name: "AccessPointLimitExceeded" = "AccessPointLimitExceeded";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessPointLimitExceeded, __BaseException>) {
    super({
      name: "AccessPointLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessPointLimitExceeded.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if the specified <code>AccessPointId</code> value doesn't exist in the
 *             requester's Amazon Web Services account.</p>
 * @public
 */
export class AccessPointNotFound extends __BaseException {
  readonly name: "AccessPointNotFound" = "AccessPointNotFound";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessPointNotFound, __BaseException>) {
    super({
      name: "AccessPointNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessPointNotFound.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if the Availability Zone that was specified for a mount target is
 *             different from the Availability Zone that was specified for One Zone storage.
 *             For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/availability-durability.html">Regional and One Zone storage redundancy</a>.</p>
 * @public
 */
export class AvailabilityZonesMismatch extends __BaseException {
  readonly name: "AvailabilityZonesMismatch" = "AvailabilityZonesMismatch";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AvailabilityZonesMismatch, __BaseException>) {
    super({
      name: "AvailabilityZonesMismatch",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AvailabilityZonesMismatch.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const Status = {
  DISABLED: "DISABLED",
  DISABLING: "DISABLING",
  ENABLED: "ENABLED",
  ENABLING: "ENABLING",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * <p>The backup policy for the file system used to create automatic daily backups. If status has a value of
 *       <code>ENABLED</code>, the file system is being automatically backed up. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups">Automatic backups</a>.</p>
 * @public
 */
export interface BackupPolicy {
  /**
   * <p>Describes the status of the file system's backup policy.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>ENABLED</code>
   *                   </b> – EFS is automatically
   *           backing up the file system.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>ENABLING</code>
   *                   </b> – EFS is turning on
   *           automatic backups for the file system.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>DISABLED</code>
   *                   </b> – Automatic back ups are turned
   *           off for the file system.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>DISABLING</code>
   *                   </b> – EFS is turning off
   *           automatic backups for the file system.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status: Status | undefined;
}

/**
 * @public
 */
export interface BackupPolicyDescription {
  /**
   * <p>Describes the file system's backup policy, indicating whether automatic backups are
   *       turned on or off.</p>
   * @public
   */
  BackupPolicy?: BackupPolicy | undefined;
}

/**
 * <p>Returned if the request is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter.</p>
 * @public
 */
export class BadRequest extends __BaseException {
  readonly name: "BadRequest" = "BadRequest";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequest, __BaseException>) {
    super({
      name: "BadRequest",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequest.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if the source file system in a replication is encrypted but the destination file system is unencrypted.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateAccessPointRequest {
  /**
   * <p>A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent
   *       creation.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Creates tags associated with the access point. Each tag is a key-value pair, each key must be unique. For more
   *       information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>
   *       in the <i>Amazon Web Services General Reference Guide</i>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the EFS file system that the access point provides access to.</p>
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * <p>The operating system user and
   *       group applied to all file system requests made using the access point.</p>
   * @public
   */
  PosixUser?: PosixUser | undefined;

  /**
   * <p>Specifies the directory on the EFS file system that the access point exposes as
   *       the root directory of your file system to NFS clients using the access point. The clients
   *       using the access point can only access the root directory and below. If the
   *         <code>RootDirectory</code> > <code>Path</code> specified does not exist, Amazon EFS creates it and applies the <code>CreationInfo</code> settings when a client connects to an
   *       access point. When specifying a <code>RootDirectory</code>, you must provide the
   *         <code>Path</code>, and the <code>CreationInfo</code>.</p>
   *          <p>Amazon EFS creates a root directory only if you have provided the  CreationInfo: OwnUid, OwnGID, and permissions for the directory.
   *       If  you do not provide this information, Amazon EFS does not create the root directory. If the root directory does not exist, attempts to mount
   *       using the access point will fail.</p>
   * @public
   */
  RootDirectory?: RootDirectory | undefined;
}

/**
 * <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the
 *             requester's Amazon Web Services account.</p>
 * @public
 */
export class FileSystemNotFound extends __BaseException {
  readonly name: "FileSystemNotFound" = "FileSystemNotFound";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FileSystemNotFound, __BaseException>) {
    super({
      name: "FileSystemNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FileSystemNotFound.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if the file system's lifecycle state is not "available".</p>
 * @public
 */
export class IncorrectFileSystemLifeCycleState extends __BaseException {
  readonly name: "IncorrectFileSystemLifeCycleState" = "IncorrectFileSystemLifeCycleState";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncorrectFileSystemLifeCycleState, __BaseException>) {
    super({
      name: "IncorrectFileSystemLifeCycleState",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncorrectFileSystemLifeCycleState.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if an error occurred on the server side.</p>
 * @public
 */
export class InternalServerError extends __BaseException {
  readonly name: "InternalServerError" = "InternalServerError";
  readonly $fault: "server" = "server";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerError, __BaseException>) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerError.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned when the <code>CreateAccessPoint</code> API action is called too quickly and
 *             the number of Access Points on the file system is nearing the
 *             <a href="https://docs.aws.amazon.com/efs/latest/ug/limits.html#limits-efs-resources-per-account-per-region">limit of 120</a>.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const PerformanceMode = {
  GENERAL_PURPOSE: "generalPurpose",
  MAX_IO: "maxIO",
} as const;

/**
 * @public
 */
export type PerformanceMode = (typeof PerformanceMode)[keyof typeof PerformanceMode];

/**
 * @public
 * @enum
 */
export const ThroughputMode = {
  BURSTING: "bursting",
  ELASTIC: "elastic",
  PROVISIONED: "provisioned",
} as const;

/**
 * @public
 */
export type ThroughputMode = (typeof ThroughputMode)[keyof typeof ThroughputMode];

/**
 * @public
 */
export interface CreateFileSystemRequest {
  /**
   * <p>A string of up to 64 ASCII characters. Amazon EFS uses this to ensure idempotent
   *       creation.</p>
   * @public
   */
  CreationToken?: string | undefined;

  /**
   * <p>The performance mode of the file system. We recommend <code>generalPurpose</code>
   *       performance mode for all file systems. File systems using the <code>maxIO</code> performance
   *       mode can scale to higher levels of aggregate throughput and operations per second with a
   *       tradeoff of slightly higher latencies for most file operations. The performance mode
   *       can't be changed after the file system has been created. The <code>maxIO</code> mode is
   *       not supported on One Zone file systems.</p>
   *          <important>
   *             <p>Due to the higher per-operation latencies with Max I/O, we recommend using General Purpose performance mode for all file systems.</p>
   *          </important>
   *          <p>Default is <code>generalPurpose</code>.</p>
   * @public
   */
  PerformanceMode?: PerformanceMode | undefined;

  /**
   * <p>A Boolean value that, if true, creates an encrypted file system. When creating an
   *       encrypted file system, you have the option of specifying an existing Key Management Service key (KMS key).
   *       If you don't specify a KMS key, then the default KMS key for
   *       Amazon EFS, <code>/aws/elasticfilesystem</code>, is used to protect the encrypted file system.
   *     </p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The ID of the KMS key that you want to use to protect the encrypted file
   *       system. This parameter is required only if you want to use a non-default KMS key. If this parameter is not specified, the default KMS key for Amazon EFS is used. You can specify a KMS key ID using the following
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
   *          <p>If you use <code>KmsKeyId</code>, you must set the <a>CreateFileSystemRequest$Encrypted</a>
   *       parameter to true.</p>
   *          <important>
   *             <p>EFS accepts only symmetric KMS keys. You cannot use asymmetric
   *       KMS keys with Amazon EFS file systems.</p>
   *          </important>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>Specifies the throughput mode for the file system. The mode can be <code>bursting</code>,
   *         <code>provisioned</code>, or <code>elastic</code>. If you set <code>ThroughputMode</code> to
   *         <code>provisioned</code>, you must also set a value for
   *         <code>ProvisionedThroughputInMibps</code>. After you create the file system, you can
   *       decrease your file system's Provisioned throughput or change between the
   *       throughput modes, with certain time restrictions. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput">Specifying
   *         throughput with provisioned mode</a> in the <i>Amazon EFS User
   *         Guide</i>. </p>
   *          <p>Default is <code>bursting</code>.</p>
   * @public
   */
  ThroughputMode?: ThroughputMode | undefined;

  /**
   * <p>The throughput, measured in mebibytes per second (MiBps), that you want to provision for a
   *       file system that you're creating. Required if <code>ThroughputMode</code> is set to
   *         <code>provisioned</code>. Valid values are 1-3414 MiBps, with the upper limit depending on
   *       Region. To increase this limit, contact Amazon Web ServicesSupport. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits">Amazon EFS quotas
   *         that you can increase</a> in the <i>Amazon EFS User
   *       Guide</i>.</p>
   * @public
   */
  ProvisionedThroughputInMibps?: number | undefined;

  /**
   * <p>For One Zone file systems, specify the Amazon Web Services
   *       Availability Zone in which to create the file system. Use the format <code>us-east-1a</code> to
   *       specify the  Availability Zone. For more information about One Zone file systems, see
   *       <a href="https://docs.aws.amazon.com/efs/latest/ug/availability-durability.html#file-system-type">EFS file system types</a> in the <i>Amazon EFS User Guide</i>.</p>
   *          <note>
   *             <p>One Zone file systems are not available in all Availability Zones in Amazon Web Services Regions where Amazon EFS is available.</p>
   *          </note>
   * @public
   */
  AvailabilityZoneName?: string | undefined;

  /**
   * <p>Specifies whether automatic backups are enabled on the file system that you are creating.
   *       Set the value to <code>true</code> to enable automatic backups. If you are creating a
   *       One Zone file system, automatic backups are enabled by default. For more
   *       information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups">Automatic backups</a> in the
   *           <i>Amazon EFS User Guide</i>.</p>
   *          <p>Default is <code>false</code>. However, if you specify an <code>AvailabilityZoneName</code>,
   *       the default is <code>true</code>.</p>
   *          <note>
   *             <p>Backup is not available in all Amazon Web Services Regions where Amazon EFS is available.</p>
   *          </note>
   * @public
   */
  Backup?: boolean | undefined;

  /**
   * <p>Use to create one or more tags associated with the file system. Each
   *         tag is a user-defined key-value pair. Name your file system on creation by including a
   *         <code>"Key":"Name","Value":"\{value\}"</code> key-value pair. Each key must be unique. For more
   *         information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>
   *         in the <i>Amazon Web Services General Reference Guide</i>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Returned if the file system you are trying to create already exists, with the
 *             creation token you provided.</p>
 * @public
 */
export class FileSystemAlreadyExists extends __BaseException {
  readonly name: "FileSystemAlreadyExists" = "FileSystemAlreadyExists";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;

  FileSystemId: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FileSystemAlreadyExists, __BaseException>) {
    super({
      name: "FileSystemAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FileSystemAlreadyExists.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
    this.FileSystemId = opts.FileSystemId;
  }
}

/**
 * @public
 * @enum
 */
export const ReplicationOverwriteProtection = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  REPLICATING: "REPLICATING",
} as const;

/**
 * @public
 */
export type ReplicationOverwriteProtection =
  (typeof ReplicationOverwriteProtection)[keyof typeof ReplicationOverwriteProtection];

/**
 * <p>Describes the protection on a file system. </p>
 * @public
 */
export interface FileSystemProtectionDescription {
  /**
   * <p>The status of the file system's replication overwrite protection.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – The file system cannot be used as the destination file
   *           system in a replication configuration. The file system is writeable. Replication overwrite
   *           protection is <code>ENABLED</code> by default. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> – The file system can be used as the destination file
   *           system in a replication configuration. The file system is read-only and can only be
   *           modified by EFS replication.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REPLICATING</code> – The file system is being used as the destination
   *           file system in a replication configuration. The file system is read-only and is modified
   *           only by EFS replication.</p>
   *             </li>
   *          </ul>
   *          <p>If the replication configuration is deleted, the file system's replication overwrite
   *       protection is re-enabled, the file system becomes writeable.</p>
   * @public
   */
  ReplicationOverwriteProtection?: ReplicationOverwriteProtection | undefined;
}

/**
 * <p>The latest known metered size (in bytes) of data stored in the file system, in its
 *         <code>Value</code> field, and the time at which that size was determined in its
 *         <code>Timestamp</code> field. The value doesn't represent the size of a consistent
 *       snapshot of the file system, but it is eventually consistent when there are no writes to the
 *       file system. That is, the value represents the actual size only if the file system is not
 *       modified for a period longer than a couple of hours. Otherwise, the value is not necessarily
 *       the exact size the file system was at any instant in time.</p>
 * @public
 */
export interface FileSystemSize {
  /**
   * <p>The latest known metered size (in bytes) of data stored in the file system.</p>
   * @public
   */
  Value: number | undefined;

  /**
   * <p>The time at which the size of data, returned in the <code>Value</code> field, was
   *       determined. The value is the integer number of seconds since 1970-01-01T00:00:00Z.</p>
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * <p>The latest known metered size (in bytes) of data stored in the Infrequent Access storage
   *       class.</p>
   * @public
   */
  ValueInIA?: number | undefined;

  /**
   * <p>The latest known metered size (in bytes) of data stored in the Standard
   *       storage class.</p>
   * @public
   */
  ValueInStandard?: number | undefined;

  /**
   * <p>The latest known metered size (in bytes) of data stored in the Archive
   *       storage class.</p>
   * @public
   */
  ValueInArchive?: number | undefined;
}

/**
 * <p>A description of the file system.</p>
 * @public
 */
export interface FileSystemDescription {
  /**
   * <p>The Amazon Web Services account that created the file system.</p>
   * @public
   */
  OwnerId: string | undefined;

  /**
   * <p>The opaque string specified in the request.</p>
   * @public
   */
  CreationToken: string | undefined;

  /**
   * <p>The ID of the file system, assigned by Amazon EFS.</p>
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the EFS file system, in the
   *       format
   *           <code>arn:aws:elasticfilesystem:<i>region</i>:<i>account-id</i>:file-system/<i>file-system-id</i>
   *             </code>.
   *       Example with sample data:
   *         <code>arn:aws:elasticfilesystem:us-west-2:1111333322228888:file-system/fs-01234567</code>
   *          </p>
   * @public
   */
  FileSystemArn?: string | undefined;

  /**
   * <p>The time that the file system was created, in seconds (since
   *       1970-01-01T00:00:00Z).</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The lifecycle phase of the file system.</p>
   * @public
   */
  LifeCycleState: LifeCycleState | undefined;

  /**
   * <p>You can add tags to a file system, including a <code>Name</code> tag. For more
   *       information, see <a>CreateFileSystem</a>. If the file system has a <code>Name</code> tag, Amazon EFS returns
   *       the value in this field. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The current number of mount targets that the file system has. For more information, see <a>CreateMountTarget</a>.</p>
   * @public
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
   * @public
   */
  SizeInBytes: FileSystemSize | undefined;

  /**
   * <p>The performance mode of the file system.</p>
   * @public
   */
  PerformanceMode: PerformanceMode | undefined;

  /**
   * <p>A Boolean value that, if true, indicates that the file system is encrypted.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The ID of an KMS key used to protect the encrypted file system.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>Displays the file system's throughput mode. For more information, see
   *       <a href="https://docs.aws.amazon.com/efs/latest/ug/performance.html#throughput-modes">Throughput modes</a>
   *       in the <i>Amazon EFS User Guide</i>.
   *     </p>
   * @public
   */
  ThroughputMode?: ThroughputMode | undefined;

  /**
   * <p>The amount of provisioned throughput, measured in MiBps, for the file system. Valid for
   *       file systems using <code>ThroughputMode</code> set to <code>provisioned</code>.</p>
   * @public
   */
  ProvisionedThroughputInMibps?: number | undefined;

  /**
   * <p>Describes the Amazon Web Services Availability Zone in which the file system is located, and is
   *       valid only for One Zone file systems. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html">Using EFS storage
   *         classes</a> in the <i>Amazon EFS User Guide</i>.</p>
   * @public
   */
  AvailabilityZoneName?: string | undefined;

  /**
   * <p>The unique and consistent identifier of the Availability Zone in which the file system is
   *       located, and is valid only for One Zone file systems. For example,
   *         <code>use1-az1</code> is an Availability Zone ID for the us-east-1 Amazon Web Services Region, and
   *       it has the same location in every Amazon Web Services account.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The tags associated with the file system, presented as an array of <code>Tag</code>
   *       objects.</p>
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * <p>Describes the protection on the file system. </p>
   * @public
   */
  FileSystemProtection?: FileSystemProtectionDescription | undefined;
}

/**
 * <p>Returned if the Amazon Web Services account has already created the maximum number of file systems
 *             allowed per account.</p>
 * @public
 */
export class FileSystemLimitExceeded extends __BaseException {
  readonly name: "FileSystemLimitExceeded" = "FileSystemLimitExceeded";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FileSystemLimitExceeded, __BaseException>) {
    super({
      name: "FileSystemLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FileSystemLimitExceeded.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if there's not enough capacity to provision additional throughput. This value
 *             might be returned when you try to create a file system in provisioned throughput mode,
 *             when you attempt to increase the provisioned throughput of an existing file system, or
 *             when you attempt to change an existing file system from Bursting Throughput to
 *             Provisioned Throughput mode. Try again later.</p>
 * @public
 */
export class InsufficientThroughputCapacity extends __BaseException {
  readonly name: "InsufficientThroughputCapacity" = "InsufficientThroughputCapacity";
  readonly $fault: "server" = "server";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientThroughputCapacity, __BaseException>) {
    super({
      name: "InsufficientThroughputCapacity",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientThroughputCapacity.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if the throughput mode or amount of provisioned throughput can't be changed
 *             because the throughput limit of 1024 MiB/s has been reached.</p>
 * @public
 */
export class ThroughputLimitExceeded extends __BaseException {
  readonly name: "ThroughputLimitExceeded" = "ThroughputLimitExceeded";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThroughputLimitExceeded, __BaseException>) {
    super({
      name: "ThroughputLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThroughputLimitExceeded.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if the requested Amazon EFS functionality is not available in the specified Availability Zone.</p>
 * @public
 */
export class UnsupportedAvailabilityZone extends __BaseException {
  readonly name: "UnsupportedAvailabilityZone" = "UnsupportedAvailabilityZone";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedAvailabilityZone, __BaseException>) {
    super({
      name: "UnsupportedAvailabilityZone",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedAvailabilityZone.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const IpAddressType = {
  DUAL_STACK: "DUAL_STACK",
  IPV4_ONLY: "IPV4_ONLY",
  IPV6_ONLY: "IPV6_ONLY",
} as const;

/**
 * @public
 */
export type IpAddressType = (typeof IpAddressType)[keyof typeof IpAddressType];

/**
 * <p></p>
 * @public
 */
export interface CreateMountTargetRequest {
  /**
   * <p>The ID of the file system for which to create the mount target.</p>
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * <p>The ID of the subnet to add the mount target in. For One Zone file systems, use the subnet
   *       that is associated with the file system's Availability Zone.</p>
   * @public
   */
  SubnetId: string | undefined;

  /**
   * <p>If the IP address type for the mount target is IPv4, then specify the IPv4 address within
   *       the address range of the specified subnet.</p>
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * <p>If the IP address type for the mount target is IPv6, then specify the IPv6 address within
   *       the address range of the specified subnet.</p>
   * @public
   */
  Ipv6Address?: string | undefined;

  /**
   * <p>Specify the type of IP address of the mount target you are creating. Options are IPv4,
   *       dual stack, or IPv6. If you don’t specify an IpAddressType, then IPv4 is used.</p>
   *          <ul>
   *             <li>
   *                <p>IPV4_ONLY – Create mount target with IPv4 only subnet or dual-stack subnet.</p>
   *             </li>
   *             <li>
   *                <p>DUAL_STACK – Create mount target with dual-stack subnet.</p>
   *             </li>
   *             <li>
   *                <p>IPV6_ONLY – Create mount target with IPv6 only subnet.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Creating IPv6 mount target only ENI in dual-stack subnet is not supported.</p>
   *          </note>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>VPC security group IDs, of the form <code>sg-xxxxxxxx</code>. These must be for the same
   *       VPC as the subnet specified. The maximum number of security groups depends on account quota.
   *       For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC Quotas</a>
   *       in the <i>Amazon VPC User Guide</i> (see the <b>Security Groups</b>
   *       table).
   *     </p>
   * @public
   */
  SecurityGroups?: string[] | undefined;
}

/**
 * <p>Returned if the request specified an <code>IpAddress</code> that is already in use
 *             in the subnet.</p>
 * @public
 */
export class IpAddressInUse extends __BaseException {
  readonly name: "IpAddressInUse" = "IpAddressInUse";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IpAddressInUse, __BaseException>) {
    super({
      name: "IpAddressInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IpAddressInUse.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if the mount target would violate one of the specified restrictions based
 *             on the file system's existing mount targets.</p>
 * @public
 */
export class MountTargetConflict extends __BaseException {
  readonly name: "MountTargetConflict" = "MountTargetConflict";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MountTargetConflict, __BaseException>) {
    super({
      name: "MountTargetConflict",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MountTargetConflict.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Provides a description of a mount target.</p>
 * @public
 */
export interface MountTargetDescription {
  /**
   * <p>Amazon Web Services account ID that owns the resource.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>System-assigned mount target ID.</p>
   * @public
   */
  MountTargetId: string | undefined;

  /**
   * <p>The ID of the file system for which the mount target is intended.</p>
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * <p>The ID of the mount target's subnet.</p>
   * @public
   */
  SubnetId: string | undefined;

  /**
   * <p>Lifecycle state of the mount target.</p>
   * @public
   */
  LifeCycleState: LifeCycleState | undefined;

  /**
   * <p>Address at which the file system can be mounted by using the mount target.</p>
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * <p>The IPv6 address for the mount target.</p>
   * @public
   */
  Ipv6Address?: string | undefined;

  /**
   * <p>The ID of the network interface that Amazon EFS created when it created the mount
   *       target.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The unique and consistent identifier of the Availability Zone that the mount target resides in.
   *       For example, <code>use1-az1</code> is an AZ ID for the us-east-1 Region and it
   *       has the same location in every Amazon Web Services account.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The name of the Availability Zone in which the mount target is located. Availability Zones are
   *       independently mapped to names for each Amazon Web Services account. For example, the
   *       Availability Zone <code>us-east-1a</code> for your Amazon Web Services account might not be the
   *       same location as <code>us-east-1a</code> for another Amazon Web Services account.</p>
   * @public
   */
  AvailabilityZoneName?: string | undefined;

  /**
   * <p>The virtual private cloud (VPC) ID that the mount target is configured in.</p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * <p>The calling account has reached the limit for elastic network interfaces for the
 *             specific Amazon Web Services Region. Either delete some network interfaces or request
 *             that the account quota be raised. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC Quotas</a>
 *             in the <i>Amazon VPC User Guide</i> (see the <b>Network
 *                 interfaces per Region</b> entry in the <b>Network
 *                 interfaces</b> table). </p>
 * @public
 */
export class NetworkInterfaceLimitExceeded extends __BaseException {
  readonly name: "NetworkInterfaceLimitExceeded" = "NetworkInterfaceLimitExceeded";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NetworkInterfaceLimitExceeded, __BaseException>) {
    super({
      name: "NetworkInterfaceLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NetworkInterfaceLimitExceeded.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if <code>IpAddress</code> was not specified in the request and there are
 *             no free IP addresses in the subnet.</p>
 * @public
 */
export class NoFreeAddressesInSubnet extends __BaseException {
  readonly name: "NoFreeAddressesInSubnet" = "NoFreeAddressesInSubnet";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoFreeAddressesInSubnet, __BaseException>) {
    super({
      name: "NoFreeAddressesInSubnet",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoFreeAddressesInSubnet.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if the number of <code>SecurityGroups</code> specified in the request is
 *             greater than the limit, which is based on account quota.  Either delete some security groups
 *             or request that the account quota be raised. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC Quotas</a>
 *             in the <i>Amazon VPC User Guide</i> (see the <b>Security Groups</b>
 *             table).
 *         </p>
 * @public
 */
export class SecurityGroupLimitExceeded extends __BaseException {
  readonly name: "SecurityGroupLimitExceeded" = "SecurityGroupLimitExceeded";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SecurityGroupLimitExceeded, __BaseException>) {
    super({
      name: "SecurityGroupLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SecurityGroupLimitExceeded.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if one of the specified security groups doesn't exist in the subnet's
 *             virtual private cloud (VPC).</p>
 * @public
 */
export class SecurityGroupNotFound extends __BaseException {
  readonly name: "SecurityGroupNotFound" = "SecurityGroupNotFound";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SecurityGroupNotFound, __BaseException>) {
    super({
      name: "SecurityGroupNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SecurityGroupNotFound.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if there is no subnet with ID <code>SubnetId</code> provided in the
 *             request.</p>
 * @public
 */
export class SubnetNotFound extends __BaseException {
  readonly name: "SubnetNotFound" = "SubnetNotFound";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetNotFound, __BaseException>) {
    super({
      name: "SubnetNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetNotFound.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Describes the new or existing destination file system for the replication
 *       configuration.</p>
 *          <ul>
 *             <li>
 *                <p>If you want to replicate to a new file system, do not specify the File System ID
 *           for the destination file system. Amazon EFS creates a new, empty file system.
 *           For One Zone storage, specify the Availability Zone to create the file system in. To
 *           use an Key Management Service key other than the default KMS key, then
 *           specify it. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/create-replication.html">Configuring replication to new Amazon EFS file system</a> in the <i>Amazon EFS User
 *                 Guide</i>.</p>
 *                <note>
 *                   <p>After the file system is created, you cannot change the KMS key or the performance mode.</p>
 *                </note>
 *             </li>
 *             <li>
 *                <p>If you want to replicate to an existing file system that's in the same account
 *           as the source file system, then you need to
 *           provide the ID or Amazon Resource Name (ARN) of the file system to which to replicate. The file system's replication
 *           overwrite protection must be disabled. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-replication#replicate-existing-destination">Replicating to
 *             an existing file system</a> in the <i>Amazon EFS User
 *               Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>If you are replicating the file system to a file system that's in a different account than the
 *         source file system (cross-account replication), you need to provide the ARN for the file system and the IAM role that allows Amazon EFS to perform
 *           replication on the destination account. The file system's replication overwrite protection
 *           must be disabled. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/cross-account-replication.html">Replicating across Amazon Web Services accounts</a> in the <i>Amazon EFS User
 *           Guide</i>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface DestinationToCreate {
  /**
   * <p>To create a file system that uses Regional storage, specify the Amazon Web Services Region in which to create the destination file system. The Region must be enabled
   *       for the Amazon Web Services account that owns the source file system. For more information, see
   *         <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html#rande-manage-enable">Managing Amazon Web Services Regions</a> in the <i>Amazon Web Services General
   *         Reference Reference Guide</i>.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>To create a file system that uses One Zone storage, specify the name of the
   *       Availability Zone in which to create the destination file system.</p>
   * @public
   */
  AvailabilityZoneName?: string | undefined;

  /**
   * <p>Specify the Key Management Service (KMS) key that you want to use to
   *       encrypt the destination file system. If you do not specify a KMS key, Amazon EFS uses your default KMS key for Amazon EFS,
   *         <code>/aws/elasticfilesystem</code>. This ID can be in one of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID - The unique identifier of the key, for example
   *             <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                <p>ARN - The ARN for the key, for example
   *             <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                <p>Key alias - A previously created display name for a key, for example
   *           <code>alias/projectKey1</code>.</p>
   *             </li>
   *             <li>
   *                <p>Key alias ARN - The ARN for a key alias, for example
   *             <code>arn:aws:kms:us-west-2:444455556666:alias/projectKey1</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The ID or ARN of the file system to use for the destination.
   *       For cross-account replication, this must be an  ARN. The file system's
   *       replication overwrite replication must be disabled. If no ID or ARN is
   *       specified, then a new file system is created. </p>
   *          <note>
   *             <p>When you initially configure replication to an existing file system, Amazon EFS
   *         writes data to or removes existing data from the destination file system to match data in
   *         the source file system. If you don't want to change data in the destination file system,
   *         then you should replicate to a new file system instead. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/create-replication.html">https://docs.aws.amazon.com/efs/latest/ug/create-replication.html</a>.</p>
   *          </note>
   * @public
   */
  FileSystemId?: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the IAM role in the source account that allows
   *         Amazon EFS to perform replication on its behalf. This is optional for same-account
   *       replication and required for cross-account replication.</p>
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateReplicationConfigurationRequest {
  /**
   * <p>Specifies the Amazon EFS file system that you want to replicate. This file system cannot already be
   *     a source or destination file system in another replication configuration.</p>
   * @public
   */
  SourceFileSystemId: string | undefined;

  /**
   * <p>An array of destination configuration objects. Only one destination configuration object is supported.</p>
   * @public
   */
  Destinations: DestinationToCreate[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ReplicationStatus = {
  DELETING: "DELETING",
  ENABLED: "ENABLED",
  ENABLING: "ENABLING",
  ERROR: "ERROR",
  PAUSED: "PAUSED",
  PAUSING: "PAUSING",
} as const;

/**
 * @public
 */
export type ReplicationStatus = (typeof ReplicationStatus)[keyof typeof ReplicationStatus];

/**
 * <p>Describes the destination file system in the replication configuration.</p>
 * @public
 */
export interface Destination {
  /**
   * <p>Describes the status of the replication configuration. For more information
   *     about replication status, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#restoring-backup-efsmonitoring-replication-status.html">Viewing
   *       replication details</a> in the <i>Amazon EFS User Guide</i>.
   *     </p>
   * @public
   */
  Status: ReplicationStatus | undefined;

  /**
   * <p>The ID of the destination Amazon EFS file system.</p>
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which the destination file system is located.</p>
   * @public
   */
  Region: string | undefined;

  /**
   * <p>The time when the most recent sync was successfully completed on the destination file
   *       system. Any changes to data on the source file system that occurred before this time have been
   *       successfully replicated to the destination file system. Any changes that occurred after this
   *       time might not be fully replicated.</p>
   * @public
   */
  LastReplicatedTimestamp?: Date | undefined;

  /**
   * <p>ID of the Amazon Web Services account in which the destination file system resides.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>Message that provides details about the <code>PAUSED</code> or <code>ERRROR</code> state
   *       of the replication destination configuration. For more information
   *       about replication status messages, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#restoring-backup-efsmonitoring-replication-status.html">Viewing
   *         replication details</a> in the <i>Amazon EFS User Guide</i>.
   *     </p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the IAM role in the source account that allows
   *         Amazon EFS to perform replication on its behalf. This is optional for same-account
   *       replication and required for cross-account replication.</p>
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * <p>Describes the replication configuration for a specific file system.</p>
 * @public
 */
export interface ReplicationConfigurationDescription {
  /**
   * <p>The ID of the source Amazon EFS file system that is being replicated.</p>
   * @public
   */
  SourceFileSystemId: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which the source EFS file system is
   *       located.</p>
   * @public
   */
  SourceFileSystemRegion: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the current source file system in the
   *       replication configuration.</p>
   * @public
   */
  SourceFileSystemArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the original source EFS file
   *       system in the replication configuration.</p>
   * @public
   */
  OriginalSourceFileSystemArn: string | undefined;

  /**
   * <p>Describes when the replication configuration was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>An array of destination objects. Only one destination object is supported.</p>
   * @public
   */
  Destinations: Destination[] | undefined;

  /**
   * <p>ID of the Amazon Web Services account in which the source file system resides.</p>
   * @public
   */
  SourceFileSystemOwnerId?: string | undefined;
}

/**
 * <p>Returned if the specified file system does not have a replication
 *             configuration.</p>
 * @public
 */
export class ReplicationNotFound extends __BaseException {
  readonly name: "ReplicationNotFound" = "ReplicationNotFound";
  readonly $fault: "client" = "client";
  /**
   * <p>ReplicationNotFound</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReplicationNotFound, __BaseException>) {
    super({
      name: "ReplicationNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReplicationNotFound.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if the Backup service is not available in the Amazon Web Services Region in which the request was made.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p></p>
 * @public
 */
export interface CreateTagsRequest {
  /**
   * <p>The ID of the file system whose tags you want to modify (String). This operation modifies
   *       the tags only, not the file system.</p>
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * <p>An array of <code>Tag</code> objects to add. Each <code>Tag</code> object is a key-value
   *       pair. </p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface DeleteAccessPointRequest {
  /**
   * <p>The ID of the access point that you want to delete.</p>
   * @public
   */
  AccessPointId: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteFileSystemRequest {
  /**
   * <p>The ID of the file system you want to delete.</p>
   * @public
   */
  FileSystemId: string | undefined;
}

/**
 * <p>Returned if a file system has mount targets.</p>
 * @public
 */
export class FileSystemInUse extends __BaseException {
  readonly name: "FileSystemInUse" = "FileSystemInUse";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FileSystemInUse, __BaseException>) {
    super({
      name: "FileSystemInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FileSystemInUse.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteFileSystemPolicyRequest {
  /**
   * <p>Specifies the EFS file system for which to delete the
   *         <code>FileSystemPolicy</code>.</p>
   * @public
   */
  FileSystemId: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteMountTargetRequest {
  /**
   * <p>The ID of the mount target to delete (String).</p>
   * @public
   */
  MountTargetId: string | undefined;
}

/**
 * <p>The service timed out trying to fulfill the request, and the client should try the
 *             call again.</p>
 * @public
 */
export class DependencyTimeout extends __BaseException {
  readonly name: "DependencyTimeout" = "DependencyTimeout";
  readonly $fault: "server" = "server";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependencyTimeout, __BaseException>) {
    super({
      name: "DependencyTimeout",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DependencyTimeout.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returned if there is no mount target with the specified ID found in the
 *             caller's Amazon Web Services account.</p>
 * @public
 */
export class MountTargetNotFound extends __BaseException {
  readonly name: "MountTargetNotFound" = "MountTargetNotFound";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MountTargetNotFound, __BaseException>) {
    super({
      name: "MountTargetNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MountTargetNotFound.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const DeletionMode = {
  ALL_CONFIGURATIONS: "ALL_CONFIGURATIONS",
  LOCAL_CONFIGURATION_ONLY: "LOCAL_CONFIGURATION_ONLY",
} as const;

/**
 * @public
 */
export type DeletionMode = (typeof DeletionMode)[keyof typeof DeletionMode];

/**
 * @public
 */
export interface DeleteReplicationConfigurationRequest {
  /**
   * <p>The ID of the source file system in the replication configuration.</p>
   * @public
   */
  SourceFileSystemId: string | undefined;

  /**
   * <p>When replicating across Amazon Web Services accounts or across Amazon Web Services Regions,
   *       Amazon EFS deletes the replication configuration from both the source
   *       and destination account or Region (<code>ALL_CONFIGURATIONS</code>) by default.
   *       If there's a configuration or permissions issue that prevents Amazon EFS from deleting the
   *       replication configuration from both sides, you can use the <code>LOCAL_CONFIGURATION_ONLY</code> mode
   *       to delete the replication configuration from only the local side (the account
   *        or Region from which the delete is performed). </p>
   *          <note>
   *             <p>Only use the <code>LOCAL_CONFIGURATION_ONLY</code> mode in the case that Amazon EFS is unable
   *        to delete the replication configuration in both the source and destination account or Region.
   *         Deleting the local configuration
   *        leaves the configuration in the other account or Region unrecoverable.</p>
   *             <p>Additionally, do not use this mode for same-account, same-region replication as doing so results in a
   *         BadRequest exception error.</p>
   *          </note>
   * @public
   */
  DeletionMode?: DeletionMode | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteTagsRequest {
  /**
   * <p>The ID of the file system whose tags you want to delete (String).</p>
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * <p>A list of tag keys to delete.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAccessPointsRequest {
  /**
   * <p>(Optional) When retrieving all access points for a file system,
   *       you can optionally specify the <code>MaxItems</code> parameter to limit the number of objects returned in a response.
   *       The default value is 100. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   *             <code>NextToken</code> is present if the response is paginated. You can use
   *       <code>NextMarker</code> in the subsequent request to fetch the next page of access point descriptions.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>(Optional) Specifies an EFS access point to describe in the response; mutually
   *       exclusive with <code>FileSystemId</code>.</p>
   * @public
   */
  AccessPointId?: string | undefined;

  /**
   * <p>(Optional) If you provide a <code>FileSystemId</code>, EFS returns all access
   *       points for that file system; mutually exclusive with <code>AccessPointId</code>.</p>
   * @public
   */
  FileSystemId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccessPointsResponse {
  /**
   * <p>An array of access point descriptions.</p>
   * @public
   */
  AccessPoints?: AccessPointDescription[] | undefined;

  /**
   * <p>Present if there are more access points than returned in the response.
   *       You can use the NextMarker in the subsequent request to fetch the additional descriptions.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountPreferencesRequest {
  /**
   * <p>(Optional) You can use <code>NextToken</code> in a subsequent request to fetch the next page of
   *       Amazon Web Services account preferences if the response payload was paginated.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>(Optional) When retrieving account preferences,
   *       you can optionally specify the <code>MaxItems</code> parameter to limit the number of objects returned in a response.
   *       The default value is 100. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceIdType = {
  LongId: "LONG_ID",
  ShortId: "SHORT_ID",
} as const;

/**
 * @public
 */
export type ResourceIdType = (typeof ResourceIdType)[keyof typeof ResourceIdType];

/**
 * @public
 * @enum
 */
export const Resource = {
  FileSystem: "FILE_SYSTEM",
  MountTarget: "MOUNT_TARGET",
} as const;

/**
 * @public
 */
export type Resource = (typeof Resource)[keyof typeof Resource];

/**
 * <p>Describes the resource type and its ID preference for the user's Amazon Web Services account, in the current Amazon Web Services Region.</p>
 * @public
 */
export interface ResourceIdPreference {
  /**
   * <p>Identifies the EFS resource ID preference, either <code>LONG_ID</code> (17
   *       characters) or <code>SHORT_ID</code> (8 characters).</p>
   * @public
   */
  ResourceIdType?: ResourceIdType | undefined;

  /**
   * <p>Identifies the Amazon EFS resources to which the ID preference setting applies, <code>FILE_SYSTEM</code> and <code>MOUNT_TARGET</code>.</p>
   * @public
   */
  Resources?: Resource[] | undefined;
}

/**
 * @public
 */
export interface DescribeAccountPreferencesResponse {
  /**
   * <p>Describes the resource ID preference setting for the Amazon Web Services account associated with the user making the request, in the current Amazon Web Services Region.</p>
   * @public
   */
  ResourceIdPreference?: ResourceIdPreference | undefined;

  /**
   * <p>Present if there are more records than returned in the response.
   *       You can use the <code>NextToken</code> in the subsequent request to fetch the additional descriptions.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBackupPolicyRequest {
  /**
   * <p>Specifies which EFS file system for which to retrieve the
   *         <code>BackupPolicy</code>.</p>
   * @public
   */
  FileSystemId: string | undefined;
}

/**
 * <p>Returned if <code>no backup</code> is specified for a One Zone EFS file system.</p>
 * @public
 */
export class PolicyNotFound extends __BaseException {
  readonly name: "PolicyNotFound" = "PolicyNotFound";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyNotFound, __BaseException>) {
    super({
      name: "PolicyNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyNotFound.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DescribeFileSystemPolicyRequest {
  /**
   * <p>Specifies which EFS file system to retrieve the <code>FileSystemPolicy</code>
   *       for.</p>
   * @public
   */
  FileSystemId: string | undefined;
}

/**
 * @public
 */
export interface FileSystemPolicyDescription {
  /**
   * <p>Specifies the EFS file system to which the <code>FileSystemPolicy</code>
   *       applies.</p>
   * @public
   */
  FileSystemId?: string | undefined;

  /**
   * <p>The JSON formatted <code>FileSystemPolicy</code> for the EFS file
   *       system.</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeFileSystemsRequest {
  /**
   * <p>(Optional) Specifies the maximum number of file systems to return in the response
   *       (integer). This number is automatically set to 100. The response is paginated at 100 per page if you have more than 100 file systems.
   *       </p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>(Optional) Opaque pagination token returned from a previous
   *         <code>DescribeFileSystems</code> operation (String). If present, specifies to continue the
   *       list from where the returning call had left off. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>(Optional) Restricts the list to the file system with this creation token (String). You
   *       specify a creation token when you create an Amazon EFS file system.</p>
   * @public
   */
  CreationToken?: string | undefined;

  /**
   * <p>(Optional) ID of the file system whose description you want to retrieve
   *       (String).</p>
   * @public
   */
  FileSystemId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFileSystemsResponse {
  /**
   * <p>Present if provided by caller in the request (String).</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>An array of file system descriptions.</p>
   * @public
   */
  FileSystems?: FileSystemDescription[] | undefined;

  /**
   * <p>Present if there are more file systems than returned in the response (String). You can
   *       use the <code>NextMarker</code> in the subsequent request to fetch the descriptions.</p>
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLifecycleConfigurationRequest {
  /**
   * <p>The ID of the file system whose <code>LifecycleConfiguration</code> object you want to
   *       retrieve (String).</p>
   * @public
   */
  FileSystemId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TransitionToArchiveRules = {
  AFTER_14_DAYS: "AFTER_14_DAYS",
  AFTER_180_DAYS: "AFTER_180_DAYS",
  AFTER_1_DAY: "AFTER_1_DAY",
  AFTER_270_DAYS: "AFTER_270_DAYS",
  AFTER_30_DAYS: "AFTER_30_DAYS",
  AFTER_365_DAYS: "AFTER_365_DAYS",
  AFTER_60_DAYS: "AFTER_60_DAYS",
  AFTER_7_DAYS: "AFTER_7_DAYS",
  AFTER_90_DAYS: "AFTER_90_DAYS",
} as const;

/**
 * @public
 */
export type TransitionToArchiveRules = (typeof TransitionToArchiveRules)[keyof typeof TransitionToArchiveRules];

/**
 * @public
 * @enum
 */
export const TransitionToIARules = {
  AFTER_14_DAYS: "AFTER_14_DAYS",
  AFTER_180_DAYS: "AFTER_180_DAYS",
  AFTER_1_DAY: "AFTER_1_DAY",
  AFTER_270_DAYS: "AFTER_270_DAYS",
  AFTER_30_DAYS: "AFTER_30_DAYS",
  AFTER_365_DAYS: "AFTER_365_DAYS",
  AFTER_60_DAYS: "AFTER_60_DAYS",
  AFTER_7_DAYS: "AFTER_7_DAYS",
  AFTER_90_DAYS: "AFTER_90_DAYS",
} as const;

/**
 * @public
 */
export type TransitionToIARules = (typeof TransitionToIARules)[keyof typeof TransitionToIARules];

/**
 * @public
 * @enum
 */
export const TransitionToPrimaryStorageClassRules = {
  AFTER_1_ACCESS: "AFTER_1_ACCESS",
} as const;

/**
 * @public
 */
export type TransitionToPrimaryStorageClassRules =
  (typeof TransitionToPrimaryStorageClassRules)[keyof typeof TransitionToPrimaryStorageClassRules];

/**
 * <p>Describes a policy used by lifecycle management that specifies when to transition files
 *       into and out of storage classes. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/lifecycle-management-efs.html">Managing file system
 *       storage</a>.</p>
 *          <note>
 *             <p>When using the <code>put-lifecycle-configuration</code> CLI command or the
 *           <code>PutLifecycleConfiguration</code> API action, Amazon EFS requires that each
 *           <code>LifecyclePolicy</code> object have only a single transition. This means that in a
 *         request body, <code>LifecyclePolicies</code> must be structured as an array of
 *           <code>LifecyclePolicy</code> objects, one object for each transition. For more
 *         information, see the request examples in <a>PutLifecycleConfiguration</a>.</p>
 *          </note>
 * @public
 */
export interface LifecyclePolicy {
  /**
   * <p>The number of days after files were last accessed in primary storage (the
   *       Standard storage class) at which to move them to Infrequent Access
   *       (IA) storage. Metadata operations such as listing the contents of a directory
   *       don't count as file access events.</p>
   * @public
   */
  TransitionToIA?: TransitionToIARules | undefined;

  /**
   * <p>Whether to move files back to primary (Standard) storage after they are
   *       accessed in IA or Archive storage. Metadata operations such as
   *       listing the contents of a directory don't count as file access events.</p>
   * @public
   */
  TransitionToPrimaryStorageClass?: TransitionToPrimaryStorageClassRules | undefined;

  /**
   * <p>The number of days after files were last accessed in primary storage (the
   *       Standard storage class) at which to move them to Archive
   *       storage. Metadata operations such as listing the contents of a directory don't count as
   *       file access events.</p>
   * @public
   */
  TransitionToArchive?: TransitionToArchiveRules | undefined;
}

/**
 * @public
 */
export interface LifecycleConfigurationDescription {
  /**
   * <p>An array of lifecycle management policies. EFS supports a maximum of one
   *       policy per file system.</p>
   * @public
   */
  LifecyclePolicies?: LifecyclePolicy[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeMountTargetsRequest {
  /**
   * <p>(Optional) Maximum number of mount targets to return in the response. Currently, this
   *       number is automatically set to
   *       10, and other values are ignored. The response is paginated at 100 per page if you have more than 100 mount targets.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>(Optional) Opaque pagination token returned from a previous
   *         <code>DescribeMountTargets</code> operation (String). If present, it specifies to continue
   *       the list from where the previous returning call left off.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>(Optional) ID of the file system whose mount targets you want to list (String). It must
   *       be included in your request if an <code>AccessPointId</code> or <code>MountTargetId</code> is not included. Accepts either a file system ID or ARN as input.</p>
   * @public
   */
  FileSystemId?: string | undefined;

  /**
   * <p>(Optional) ID of the mount target that you want to have described (String). It must be
   *       included in your request if <code>FileSystemId</code> is not included. Accepts either a mount target ID or ARN as input.</p>
   * @public
   */
  MountTargetId?: string | undefined;

  /**
   * <p>(Optional) The ID of the access point whose mount targets that you want to list. It must be included in your request if a
   *       <code>FileSystemId</code> or <code>MountTargetId</code> is not included in your request. Accepts either an access point ID or ARN as input.</p>
   * @public
   */
  AccessPointId?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeMountTargetsResponse {
  /**
   * <p>If the request included the <code>Marker</code>, the response returns that value in
   *       this field.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Returns the file system's mount targets as an array of
   *         <code>MountTargetDescription</code> objects.</p>
   * @public
   */
  MountTargets?: MountTargetDescription[] | undefined;

  /**
   * <p>If a value is present, there are more mount targets to return. In a subsequent request,
   *       you can provide <code>Marker</code> in your request with this value to retrieve the next set
   *       of mount targets.</p>
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeMountTargetSecurityGroupsRequest {
  /**
   * <p>The ID of the mount target whose security groups you want to retrieve.</p>
   * @public
   */
  MountTargetId: string | undefined;
}

/**
 * @public
 */
export interface DescribeMountTargetSecurityGroupsResponse {
  /**
   * <p>An array of security groups.</p>
   * @public
   */
  SecurityGroups: string[] | undefined;
}

/**
 * <p>Returned if the mount target is not in the correct state for the
 *             operation.</p>
 * @public
 */
export class IncorrectMountTargetState extends __BaseException {
  readonly name: "IncorrectMountTargetState" = "IncorrectMountTargetState";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncorrectMountTargetState, __BaseException>) {
    super({
      name: "IncorrectMountTargetState",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncorrectMountTargetState.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DescribeReplicationConfigurationsRequest {
  /**
   * <p>You can retrieve the replication configuration for a specific file system by providing its
   *       file system ID. For cross-account,cross-region replication, an account can only describe the replication
   *       configuration for a file system in its own Region.</p>
   * @public
   */
  FileSystemId?: string | undefined;

  /**
   * <p>
   *             <code>NextToken</code> is present if the response is paginated. You can use
   *         <code>NextToken</code> in a subsequent request to fetch the next page of
   *       output.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>(Optional) To limit the number of objects returned in a response, you can specify the
   *         <code>MaxItems</code> parameter. The default value is 100. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationConfigurationsResponse {
  /**
   * <p>The collection of replication configurations that is returned.</p>
   * @public
   */
  Replications?: ReplicationConfigurationDescription[] | undefined;

  /**
   * <p>You can use the <code>NextToken</code> from the previous response in a subsequent
   *       request to fetch the additional descriptions.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeTagsRequest {
  /**
   * <p>(Optional) The maximum number of file system tags to return in the response. Currently,
   *       this number is automatically set to
   *       100, and other values are ignored. The response is paginated at 100 per page if you have more than 100 tags.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>(Optional) An opaque pagination token returned from a previous
   *         <code>DescribeTags</code> operation (String). If present, it specifies to continue the list
   *       from where the previous call left off.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The ID of the file system whose tag set you want to retrieve.</p>
   * @public
   */
  FileSystemId: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeTagsResponse {
  /**
   * <p>If the request included a <code>Marker</code>, the response returns that value in this
   *       field.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Returns tags associated with the file system as an array of <code>Tag</code> objects.
   *     </p>
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * <p>If a value is present, there are more tags to return. In a subsequent request, you can
   *       provide the value of <code>NextMarker</code> as the value of the <code>Marker</code> parameter
   *       in your next request to retrieve the next set of tags.</p>
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * <p>Returned if the <code>FileSystemPolicy</code> is malformed or contains an error such
 *             as a parameter value that is not valid or a missing required parameter. Returned in the
 *             case of a policy lockout safety check error.</p>
 * @public
 */
export class InvalidPolicyException extends __BaseException {
  readonly name: "InvalidPolicyException" = "InvalidPolicyException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPolicyException, __BaseException>) {
    super({
      name: "InvalidPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPolicyException.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>Specifies the EFS resource you want to retrieve tags for. You can retrieve tags
   *       for EFS file systems and access points using this API endpoint.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>(Optional) Specifies the maximum number of tag objects to return in the response. The default value is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>(Optional) You can use <code>NextToken</code> in a subsequent request to fetch the next page of access point descriptions if the response payload was paginated.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>An array of the tags for the specified EFS resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>
   *             <code>NextToken</code> is present if the response payload is paginated. You can use <code>NextToken</code> in a subsequent request to fetch the next page of access point descriptions.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifyMountTargetSecurityGroupsRequest {
  /**
   * <p>The ID of the mount target whose security groups you want to modify.</p>
   * @public
   */
  MountTargetId: string | undefined;

  /**
   * <p>An array of VPC security group IDs. </p>
   * @public
   */
  SecurityGroups?: string[] | undefined;
}

/**
 * @public
 */
export interface PutAccountPreferencesRequest {
  /**
   * <p>Specifies the EFS resource ID preference to set for the user's Amazon Web Services account, in the current Amazon Web Services Region, either <code>LONG_ID</code>
   *       (17 characters), or <code>SHORT_ID</code> (8 characters).</p>
   *          <note>
   *             <p>Starting in October, 2021, you will receive an error when setting the account preference to
   *           <code>SHORT_ID</code>. Contact Amazon Web Services support if you receive an error and must
   *         use short IDs for file system and mount target resources.</p>
   *          </note>
   * @public
   */
  ResourceIdType: ResourceIdType | undefined;
}

/**
 * @public
 */
export interface PutAccountPreferencesResponse {
  /**
   * <p>Describes the resource type and its ID preference for the user's Amazon Web Services account, in the current Amazon Web Services Region.</p>
   * @public
   */
  ResourceIdPreference?: ResourceIdPreference | undefined;
}

/**
 * @public
 */
export interface PutBackupPolicyRequest {
  /**
   * <p>Specifies which EFS file system to update the backup policy for.</p>
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * <p>The backup policy included in the <code>PutBackupPolicy</code> request.</p>
   * @public
   */
  BackupPolicy: BackupPolicy | undefined;
}

/**
 * @public
 */
export interface PutFileSystemPolicyRequest {
  /**
   * <p>The ID of the EFS file system that you want to create or update the
   *         <code>FileSystemPolicy</code> for.</p>
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * <p>The <code>FileSystemPolicy</code> that you're creating. Accepts a JSON formatted
   *       policy definition. EFS file system policies have a 20,000 character limit. To find
   *       out more about the elements that make up a file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/security_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies">Resource-based policies within Amazon EFS</a>. </p>
   * @public
   */
  Policy: string | undefined;

  /**
   * <p>(Optional) A boolean that specifies whether or not to bypass the <code>FileSystemPolicy</code> lockout safety check. The lockout safety check
   *       determines whether the policy in the request will lock out, or prevent, the IAM principal that is making the request from making future <code>PutFileSystemPolicy</code> requests on this file system.
   *       Set <code>BypassPolicyLockoutSafetyCheck</code> to <code>True</code> only when you intend to prevent
   *       the IAM principal that is making the request from making subsequent <code>PutFileSystemPolicy</code> requests on this file system.
   *       The default value is <code>False</code>.
   *     </p>
   * @public
   */
  BypassPolicyLockoutSafetyCheck?: boolean | undefined;
}

/**
 * @public
 */
export interface PutLifecycleConfigurationRequest {
  /**
   * <p>The ID of the file system for which you are creating the
   *         <code>LifecycleConfiguration</code> object (String).</p>
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * <p>An array of <code>LifecyclePolicy</code> objects that define the file system's
   *         <code>LifecycleConfiguration</code> object. A <code>LifecycleConfiguration</code> object
   *       informs lifecycle management of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>TransitionToIA</code>
   *                   </b> –
   *       When to move files in the file system from primary storage (Standard storage class) into the Infrequent Access
   *         (IA) storage.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>TransitionToArchive</code>
   *                   </b> –
   *           When to move files in the file system from their current storage class (either IA or Standard storage) into the
   *          Archive storage.</p>
   *                <p>File systems cannot transition into Archive storage before transitioning into IA  storage. Therefore,
   *         TransitionToArchive must either not be set or must be later than TransitionToIA.</p>
   *                <note>
   *                   <p>The Archive storage class is available only for file systems that use the Elastic throughput mode
   * and the General Purpose performance mode. </p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>TransitionToPrimaryStorageClass</code>
   *                   </b> – Whether to move files in the file system back to primary storage (Standard storage class) after they are accessed in IA
   *         or Archive storage.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>When using the <code>put-lifecycle-configuration</code> CLI command or the
   *           <code>PutLifecycleConfiguration</code> API action, Amazon EFS requires that each
   *           <code>LifecyclePolicy</code> object have only a single transition. This means that in a
   *         request body, <code>LifecyclePolicies</code> must be structured as an array of
   *           <code>LifecyclePolicy</code> objects, one object for each storage transition. See the example
   *         requests in the following section for more information.</p>
   *          </note>
   * @public
   */
  LifecyclePolicies: LifecyclePolicy[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ID specifying the EFS resource that you want to create a tag for.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>An array of <code>Tag</code> objects to add. Each <code>Tag</code> object is a key-value
   *       pair.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>Specifies the EFS resource that you want to remove tags from.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The keys of the key-value tag pairs that you want to remove from the specified
   *       EFS resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * <p>Returned if you don’t wait at least 24 hours before either changing the throughput mode, or
 *             decreasing the Provisioned Throughput value.</p>
 * @public
 */
export class TooManyRequests extends __BaseException {
  readonly name: "TooManyRequests" = "TooManyRequests";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequests, __BaseException>) {
    super({
      name: "TooManyRequests",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequests.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface UpdateFileSystemRequest {
  /**
   * <p>The ID of the file system that you want to update.</p>
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * <p>(Optional) Updates the file system's throughput mode. If you're not
   *       updating your throughput mode, you don't need to provide this value in your
   *       request. If you are changing the <code>ThroughputMode</code> to <code>provisioned</code>,
   *       you must also set a value for <code>ProvisionedThroughputInMibps</code>.</p>
   * @public
   */
  ThroughputMode?: ThroughputMode | undefined;

  /**
   * <p>(Optional) The throughput, measured in mebibytes per second (MiBps), that you want to
   *       provision for a file system that you're creating. Required if <code>ThroughputMode</code>
   *       is set to <code>provisioned</code>. Valid values are 1-3414 MiBps, with the upper limit
   *       depending on Region. To increase this limit, contact Amazon Web ServicesSupport. For more information,
   *       see <a href="https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits">Amazon EFS
   *         quotas that you can increase</a> in the <i>Amazon EFS User
   *         Guide</i>.</p>
   * @public
   */
  ProvisionedThroughputInMibps?: number | undefined;
}

/**
 * <p>Returned if the file system is already included in a replication configuration.></p>
 * @public
 */
export class ReplicationAlreadyExists extends __BaseException {
  readonly name: "ReplicationAlreadyExists" = "ReplicationAlreadyExists";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code is a string that uniquely identifies an error condition.
   *         It is meant to be read and understood by programs that detect and handle errors by type. </p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message contains a generic description of the error
   *         condition in English. It is intended for a human audience. Simple programs display the message directly
   *         to the end user if they encounter an error condition they don't know how or don't care to handle.
   *         Sophisticated programs with more exhaustive error handling and proper internationalization are
   *         more likely to ignore the error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReplicationAlreadyExists, __BaseException>) {
    super({
      name: "ReplicationAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReplicationAlreadyExists.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface UpdateFileSystemProtectionRequest {
  /**
   * <p>The ID of the file system to update. </p>
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * <p>The status of the file system's replication overwrite protection.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – The file system cannot be used as the destination file
   *           system in a replication configuration. The file system is writeable. Replication overwrite
   *           protection is <code>ENABLED</code> by default. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> – The file system can be used as the destination file
   *           system in a replication configuration. The file system is read-only and can only be
   *           modified by EFS replication.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REPLICATING</code> – The file system is being used as the destination file
   *           system in a replication configuration. The file system is read-only and is only modified
   *           only by EFS replication.</p>
   *             </li>
   *          </ul>
   *          <p>If the replication configuration is deleted, the file system's replication overwrite
   *       protection is re-enabled and the file system becomes writeable.</p>
   * @public
   */
  ReplicationOverwriteProtection?: ReplicationOverwriteProtection | undefined;
}

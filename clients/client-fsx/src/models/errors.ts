// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ActiveDirectoryErrorType, ServiceLimit } from "./enums";
import { FSxServiceException as __BaseException } from "./FSxServiceException";

/**
 * <p>An access point with that name already exists in the Amazon Web Services Region in your Amazon Web Services account.</p>
 * @public
 */
export class AccessPointAlreadyOwnedByYou extends __BaseException {
  readonly name = "AccessPointAlreadyOwnedByYou" as const;
  readonly $fault = "client" as const;
  /**
   * <p>An error code indicating that an access point with that name already exists in the Amazon Web Services Region in your Amazon Web Services account.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessPointAlreadyOwnedByYou, __BaseException>) {
    super({
      name: "AccessPointAlreadyOwnedByYou",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessPointAlreadyOwnedByYou.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>An Active Directory error.</p>
 * @public
 */
export class ActiveDirectoryError extends __BaseException {
  readonly name = "ActiveDirectoryError" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The directory ID of the directory that an error pertains to.</p>
   * @public
   */
  ActiveDirectoryId: string | undefined;

  /**
   * <p>The type of Active Directory error.</p>
   * @public
   */
  Type?: ActiveDirectoryErrorType | undefined;

  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ActiveDirectoryError, __BaseException>) {
    super({
      name: "ActiveDirectoryError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ActiveDirectoryError.prototype);
    this.ActiveDirectoryId = opts.ActiveDirectoryId;
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>A generic error indicating a failure with a client request.</p>
 * @public
 */
export class BadRequest extends __BaseException {
  readonly name = "BadRequest" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
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
    this.Message = opts.Message;
  }
}

/**
 * <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
 * @public
 */
export class FileSystemNotFound extends __BaseException {
  readonly name = "FileSystemNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
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
    this.Message = opts.Message;
  }
}

/**
 * <p>A generic error indicating a server-side failure.</p>
 * @public
 */
export class InternalServerError extends __BaseException {
  readonly name = "InternalServerError" as const;
  readonly $fault = "server" as const;
  /**
   * <p>A detailed error message.</p>
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The data repository task could not be canceled because the task has already ended.</p>
 * @public
 */
export class DataRepositoryTaskEnded extends __BaseException {
  readonly name = "DataRepositoryTaskEnded" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DataRepositoryTaskEnded, __BaseException>) {
    super({
      name: "DataRepositoryTaskEnded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DataRepositoryTaskEnded.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The data repository task or tasks you specified could not be found.</p>
 * @public
 */
export class DataRepositoryTaskNotFound extends __BaseException {
  readonly name = "DataRepositoryTaskNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DataRepositoryTaskNotFound, __BaseException>) {
    super({
      name: "DataRepositoryTaskNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DataRepositoryTaskNotFound.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested operation is not supported for this resource or API.</p>
 * @public
 */
export class UnsupportedOperation extends __BaseException {
  readonly name = "UnsupportedOperation" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperation, __BaseException>) {
    super({
      name: "UnsupportedOperation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperation.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>No Amazon FSx backups were found based upon the supplied parameters.</p>
 * @public
 */
export class BackupNotFound extends __BaseException {
  readonly name = "BackupNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BackupNotFound, __BaseException>) {
    super({
      name: "BackupNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BackupNotFound.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 * @public
 */
export class IncompatibleParameterError extends __BaseException {
  readonly name = "IncompatibleParameterError" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A parameter that is incompatible with the earlier request.</p>
   * @public
   */
  Parameter: string | undefined;

  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncompatibleParameterError, __BaseException>) {
    super({
      name: "IncompatibleParameterError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncompatibleParameterError.prototype);
    this.Parameter = opts.Parameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Amazon FSx doesn't support Multi-AZ Windows File Server copy backup in the
 *          destination Region, so the copied backup can't be restored.</p>
 * @public
 */
export class IncompatibleRegionForMultiAZ extends __BaseException {
  readonly name = "IncompatibleRegionForMultiAZ" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncompatibleRegionForMultiAZ, __BaseException>) {
    super({
      name: "IncompatibleRegionForMultiAZ",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncompatibleRegionForMultiAZ.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The Key Management Service (KMS) key of the destination backup is not
 *          valid.</p>
 * @public
 */
export class InvalidDestinationKmsKey extends __BaseException {
  readonly name = "InvalidDestinationKmsKey" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDestinationKmsKey, __BaseException>) {
    super({
      name: "InvalidDestinationKmsKey",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDestinationKmsKey.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The Region provided for <code>SourceRegion</code> is not valid or is in a different
 *             Amazon Web Services partition.</p>
 * @public
 */
export class InvalidRegion extends __BaseException {
  readonly name = "InvalidRegion" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRegion, __BaseException>) {
    super({
      name: "InvalidRegion",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRegion.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The Key Management Service (KMS) key of the source backup is not
 *          valid.</p>
 * @public
 */
export class InvalidSourceKmsKey extends __BaseException {
  readonly name = "InvalidSourceKmsKey" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSourceKmsKey, __BaseException>) {
    super({
      name: "InvalidSourceKmsKey",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSourceKmsKey.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An error indicating that a particular service limit was exceeded. You can increase
 *             some service limits by contacting Amazon Web Services Support.</p>
 * @public
 */
export class ServiceLimitExceeded extends __BaseException {
  readonly name = "ServiceLimitExceeded" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Enumeration of the service limit that was exceeded. </p>
   * @public
   */
  Limit: ServiceLimit | undefined;

  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceLimitExceeded, __BaseException>) {
    super({
      name: "ServiceLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceLimitExceeded.prototype);
    this.Limit = opts.Limit;
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was rejected because the lifecycle status of the source backup isn't
 *             <code>AVAILABLE</code>.</p>
 * @public
 */
export class SourceBackupUnavailable extends __BaseException {
  readonly name = "SourceBackupUnavailable" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The ID of the source backup. Specifies the backup that you are copying.</p>
   * @public
   */
  BackupId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SourceBackupUnavailable, __BaseException>) {
    super({
      name: "SourceBackupUnavailable",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SourceBackupUnavailable.prototype);
    this.Message = opts.Message;
    this.BackupId = opts.BackupId;
  }
}

/**
 * <p>The access point specified doesn't exist.</p>
 * @public
 */
export class InvalidAccessPoint extends __BaseException {
  readonly name = "InvalidAccessPoint" as const;
  readonly $fault = "client" as const;
  /**
   * <p>An error code indicating that the access point specified doesn't exist.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAccessPoint, __BaseException>) {
    super({
      name: "InvalidAccessPoint",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAccessPoint.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
 * @public
 */
export class InvalidRequest extends __BaseException {
  readonly name = "InvalidRequest" as const;
  readonly $fault = "client" as const;
  /**
   * <p>An error code indicating that the action or operation requested is invalid.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequest, __BaseException>) {
    super({
      name: "InvalidRequest",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequest.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>You have reached the maximum number of S3 access points attachments allowed for your account in this Amazon Web Services Region, or for the file system. For more information, or to request an increase,
 *          see <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/limits.html">Service quotas on FSx resources</a> in the FSx for OpenZFS User Guide.</p>
 * @public
 */
export class TooManyAccessPoints extends __BaseException {
  readonly name = "TooManyAccessPoints" as const;
  readonly $fault = "client" as const;
  /**
   * <p>An error code indicating that you have reached the maximum number of S3 access points attachments allowed for your account in this Amazon Web Services Region, or for the file system.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyAccessPoints, __BaseException>) {
    super({
      name: "TooManyAccessPoints",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyAccessPoints.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>No Amazon FSx volumes were found based upon the supplied parameters.</p>
 * @public
 */
export class VolumeNotFound extends __BaseException {
  readonly name = "VolumeNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<VolumeNotFound, __BaseException>) {
    super({
      name: "VolumeNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, VolumeNotFound.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Another backup is already under way. Wait for completion before initiating
 *             additional backups of this file system.</p>
 * @public
 */
export class BackupInProgress extends __BaseException {
  readonly name = "BackupInProgress" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BackupInProgress, __BaseException>) {
    super({
      name: "BackupInProgress",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BackupInProgress.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An existing data repository task is currently executing on the file system.
 *         Wait until the existing task has completed, then create the new task.</p>
 * @public
 */
export class DataRepositoryTaskExecuting extends __BaseException {
  readonly name = "DataRepositoryTaskExecuting" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DataRepositoryTaskExecuting, __BaseException>) {
    super({
      name: "DataRepositoryTaskExecuting",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DataRepositoryTaskExecuting.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more network settings specified in the request are invalid.</p>
 * @public
 */
export class InvalidNetworkSettings extends __BaseException {
  readonly name = "InvalidNetworkSettings" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Error message explaining what's wrong with network settings.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The subnet ID that is either invalid or not part of the VPC specified.</p>
   * @public
   */
  InvalidSubnetId?: string | undefined;

  /**
   * <p>The security group ID is either invalid or not part of the VPC specified.</p>
   * @public
   */
  InvalidSecurityGroupId?: string | undefined;

  /**
   * <p>The route table ID is either invalid or not part of the VPC specified.</p>
   * @public
   */
  InvalidRouteTableId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNetworkSettings, __BaseException>) {
    super({
      name: "InvalidNetworkSettings",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNetworkSettings.prototype);
    this.Message = opts.Message;
    this.InvalidSubnetId = opts.InvalidSubnetId;
    this.InvalidSecurityGroupId = opts.InvalidSecurityGroupId;
    this.InvalidRouteTableId = opts.InvalidRouteTableId;
  }
}

/**
 * <p>An invalid value for <code>PerUnitStorageThroughput</code> was provided. Please create your file system again, using a valid value.</p>
 * @public
 */
export class InvalidPerUnitStorageThroughput extends __BaseException {
  readonly name = "InvalidPerUnitStorageThroughput" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPerUnitStorageThroughput, __BaseException>) {
    super({
      name: "InvalidPerUnitStorageThroughput",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPerUnitStorageThroughput.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A cache configuration is required for this operation.</p>
 * @public
 */
export class MissingFileCacheConfiguration extends __BaseException {
  readonly name = "MissingFileCacheConfiguration" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingFileCacheConfiguration, __BaseException>) {
    super({
      name: "MissingFileCacheConfiguration",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingFileCacheConfiguration.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The path provided for data repository export isn't valid.</p>
 * @public
 */
export class InvalidExportPath extends __BaseException {
  readonly name = "InvalidExportPath" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidExportPath, __BaseException>) {
    super({
      name: "InvalidExportPath",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidExportPath.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The path provided for data repository import isn't valid.</p>
 * @public
 */
export class InvalidImportPath extends __BaseException {
  readonly name = "InvalidImportPath" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidImportPath, __BaseException>) {
    super({
      name: "InvalidImportPath",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidImportPath.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A file system configuration is required for this operation.</p>
 * @public
 */
export class MissingFileSystemConfiguration extends __BaseException {
  readonly name = "MissingFileSystemConfiguration" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingFileSystemConfiguration, __BaseException>) {
    super({
      name: "MissingFileSystemConfiguration",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingFileSystemConfiguration.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A volume configuration is required for this operation.</p>
 * @public
 */
export class MissingVolumeConfiguration extends __BaseException {
  readonly name = "MissingVolumeConfiguration" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingVolumeConfiguration, __BaseException>) {
    super({
      name: "MissingVolumeConfiguration",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingVolumeConfiguration.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>No FSx for ONTAP SVMs were found based upon the supplied parameters.</p>
 * @public
 */
export class StorageVirtualMachineNotFound extends __BaseException {
  readonly name = "StorageVirtualMachineNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StorageVirtualMachineNotFound, __BaseException>) {
    super({
      name: "StorageVirtualMachineNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StorageVirtualMachineNotFound.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You can't delete a backup while it's being copied.</p>
 * @public
 */
export class BackupBeingCopied extends __BaseException {
  readonly name = "BackupBeingCopied" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The ID of the source backup. Specifies the backup that you are copying.</p>
   * @public
   */
  BackupId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BackupBeingCopied, __BaseException>) {
    super({
      name: "BackupBeingCopied",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BackupBeingCopied.prototype);
    this.Message = opts.Message;
    this.BackupId = opts.BackupId;
  }
}

/**
 * <p>You can't delete a backup while it's being used to restore a file
 *             system.</p>
 * @public
 */
export class BackupRestoring extends __BaseException {
  readonly name = "BackupRestoring" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The ID of a file system being restored from the backup.</p>
   * @public
   */
  FileSystemId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BackupRestoring, __BaseException>) {
    super({
      name: "BackupRestoring",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BackupRestoring.prototype);
    this.Message = opts.Message;
    this.FileSystemId = opts.FileSystemId;
  }
}

/**
 * <p>No data repository associations were found based upon the supplied parameters.</p>
 * @public
 */
export class DataRepositoryAssociationNotFound extends __BaseException {
  readonly name = "DataRepositoryAssociationNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DataRepositoryAssociationNotFound, __BaseException>) {
    super({
      name: "DataRepositoryAssociationNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DataRepositoryAssociationNotFound.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>No caches were found based upon supplied parameters.</p>
 * @public
 */
export class FileCacheNotFound extends __BaseException {
  readonly name = "FileCacheNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FileCacheNotFound, __BaseException>) {
    super({
      name: "FileCacheNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FileCacheNotFound.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>No Amazon FSx snapshots were found based on the supplied parameters.</p>
 * @public
 */
export class SnapshotNotFound extends __BaseException {
  readonly name = "SnapshotNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotNotFound, __BaseException>) {
    super({
      name: "SnapshotNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotNotFound.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You have filtered the response to a data repository type that is not supported.</p>
 * @public
 */
export class InvalidDataRepositoryType extends __BaseException {
  readonly name = "InvalidDataRepositoryType" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDataRepositoryType, __BaseException>) {
    super({
      name: "InvalidDataRepositoryType",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDataRepositoryType.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The access point specified was not found.</p>
 * @public
 */
export class S3AccessPointAttachmentNotFound extends __BaseException {
  readonly name = "S3AccessPointAttachmentNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<S3AccessPointAttachmentNotFound, __BaseException>) {
    super({
      name: "S3AccessPointAttachmentNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, S3AccessPointAttachmentNotFound.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource specified for the tagging operation is not a resource type owned by
 *             Amazon FSx. Use the API of the relevant service to perform the operation. </p>
 * @public
 */
export class NotServiceResourceError extends __BaseException {
  readonly name = "NotServiceResourceError" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The Amazon Resource Name (ARN) of the non-Amazon FSx resource.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotServiceResourceError, __BaseException>) {
    super({
      name: "NotServiceResourceError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotServiceResourceError.prototype);
    this.ResourceARN = opts.ResourceARN;
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource specified does not support tagging. </p>
 * @public
 */
export class ResourceDoesNotSupportTagging extends __BaseException {
  readonly name = "ResourceDoesNotSupportTagging" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that doesn't support
   *             tagging.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceDoesNotSupportTagging, __BaseException>) {
    super({
      name: "ResourceDoesNotSupportTagging",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceDoesNotSupportTagging.prototype);
    this.ResourceARN = opts.ResourceARN;
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource specified by the Amazon Resource Name (ARN) can't be found.</p>
 * @public
 */
export class ResourceNotFound extends __BaseException {
  readonly name = "ResourceNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The resource ARN of the resource that can't be found.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>A detailed error message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFound, __BaseException>) {
    super({
      name: "ResourceNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFound.prototype);
    this.ResourceARN = opts.ResourceARN;
    this.Message = opts.Message;
  }
}

import {
  _BackupFailureDetails,
  _UnmarshalledBackupFailureDetails
} from "./_BackupFailureDetails";
import { _Tag, _UnmarshalledTag } from "./_Tag";
import { _FileSystem, _UnmarshalledFileSystem } from "./_FileSystem";
import {
  _ActiveDirectoryBackupAttributes,
  _UnmarshalledActiveDirectoryBackupAttributes
} from "./_ActiveDirectoryBackupAttributes";

/**
 * <p>A backup of an Amazon FSx for Windows File Server file system. You can create a new file system from a backup to protect against data loss.</p>
 */
export interface _Backup {
  /**
   * <p>The ID of the backup.</p>
   */
  BackupId: string;

  /**
   * <p>The lifecycle status of the backup.</p>
   */
  Lifecycle: "AVAILABLE" | "CREATING" | "DELETED" | "FAILED" | string;

  /**
   * <p>Details explaining any failures that occur when creating a backup.</p>
   */
  FailureDetails?: _BackupFailureDetails;

  /**
   * <p>The type of the backup.</p>
   */
  Type: "AUTOMATIC" | "USER_INITIATED" | string;

  /**
   * <p>The current percent of progress of an asynchronous task.</p>
   */
  ProgressPercent?: number;

  /**
   * <p>The time when a particular backup was created.</p>
   */
  CreationTime: Date | string | number;

  /**
   * <p>The ID of the AWS Key Management Service (AWS KMS) key used to encrypt this backup's data.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the backup resource.</p>
   */
  ResourceARN?: string;

  /**
   * <p>Tags associated with a particular file system.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>Metadata of the file system associated with the backup. This metadata is persisted even if the file system is deleted.</p>
   */
  FileSystem: _FileSystem;

  /**
   * <p>The configuration of the self-managed Microsoft Active Directory (AD) to which the Windows File Server instance is joined.</p>
   */
  DirectoryInformation?: _ActiveDirectoryBackupAttributes;
}

export interface _UnmarshalledBackup extends _Backup {
  /**
   * <p>Details explaining any failures that occur when creating a backup.</p>
   */
  FailureDetails?: _UnmarshalledBackupFailureDetails;

  /**
   * <p>The time when a particular backup was created.</p>
   */
  CreationTime: Date;

  /**
   * <p>Tags associated with a particular file system.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * <p>Metadata of the file system associated with the backup. This metadata is persisted even if the file system is deleted.</p>
   */
  FileSystem: _UnmarshalledFileSystem;

  /**
   * <p>The configuration of the self-managed Microsoft Active Directory (AD) to which the Windows File Server instance is joined.</p>
   */
  DirectoryInformation?: _UnmarshalledActiveDirectoryBackupAttributes;
}

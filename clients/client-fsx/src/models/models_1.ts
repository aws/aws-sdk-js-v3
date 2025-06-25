// smithy-typescript generated code
import {
  ActiveDirectoryBackupAttributes,
  BackupFailureDetails,
  BackupLifecycle,
  BackupType,
  FileSystem,
  FileSystemFilterSensitiveLog,
  ResourceType,
  Snapshot,
  Tag,
  Volume,
} from "./models_0";

/**
 * <p>The response object returned after the file system is created.</p>
 * @public
 */
export interface CreateFileSystemResponse {
  /**
   * <p>The configuration of the file system that was created.</p>
   * @public
   */
  FileSystem?: FileSystem | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotResponse {
  /**
   * <p>A description of the snapshot.</p>
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * @public
 */
export interface CreateVolumeFromBackupResponse {
  /**
   * <p>Returned after a successful <code>CreateVolumeFromBackup</code> API operation,
   *             describing the volume just created.</p>
   * @public
   */
  Volume?: Volume | undefined;
}

/**
 * @public
 */
export interface CreateVolumeResponse {
  /**
   * <p>Returned after a successful <code>CreateVolume</code> API operation, describing the volume just created.</p>
   * @public
   */
  Volume?: Volume | undefined;
}

/**
 * @public
 */
export interface ReleaseFileSystemNfsV3LocksResponse {
  /**
   * <p>A description of a specific Amazon FSx file system.</p>
   * @public
   */
  FileSystem?: FileSystem | undefined;
}

/**
 * @public
 */
export interface StartMisconfiguredStateRecoveryResponse {
  /**
   * <p>A description of a specific Amazon FSx file system.</p>
   * @public
   */
  FileSystem?: FileSystem | undefined;
}

/**
 * <p>The response object for the <code>UpdateFileSystem</code> operation.</p>
 * @public
 */
export interface UpdateFileSystemResponse {
  /**
   * <p>A description of the file system that was updated.</p>
   * @public
   */
  FileSystem?: FileSystem | undefined;
}

/**
 * @public
 */
export interface UpdateSnapshotResponse {
  /**
   * <p>Returned after a successful <code>UpdateSnapshot</code> operation, describing the
   *             snapshot that you updated.</p>
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * @public
 */
export interface UpdateVolumeResponse {
  /**
   * <p>A description of the volume just updated. Returned after a successful
   *                 <code>UpdateVolume</code> API operation.</p>
   * @public
   */
  Volume?: Volume | undefined;
}

/**
 * <p>The response object for <code>DescribeFileSystems</code> operation.</p>
 * @public
 */
export interface DescribeFileSystemsResponse {
  /**
   * <p>An array of file system descriptions.</p>
   * @public
   */
  FileSystems?: FileSystem[] | undefined;

  /**
   * <p>Present if there are more file systems than returned in the response (String). You
   *             can use the <code>NextToken</code> value in the later request to fetch the
   *             descriptions. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotsResponse {
  /**
   * <p>An array of snapshots.</p>
   * @public
   */
  Snapshots?: Snapshot[] | undefined;

  /**
   * <p>(Optional) Opaque pagination token returned from a previous operation (String). If
   *             present, this token indicates from what point you can continue processing the request, where
   *             the previous <code>NextToken</code> value left off.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVolumesResponse {
  /**
   * <p>Returned after a successful <code>DescribeVolumes</code> operation, describing each volume.</p>
   * @public
   */
  Volumes?: Volume[] | undefined;

  /**
   * <p>(Optional) Opaque pagination token returned from a previous operation (String). If
   *             present, this token indicates from what point you can continue processing the request, where
   *             the previous <code>NextToken</code> value left off.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A backup of an Amazon FSx for Windows File Server, Amazon FSx for
 *             Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx
 *             for OpenZFS file system.</p>
 * @public
 */
export interface Backup {
  /**
   * <p>The ID of the backup.</p>
   * @public
   */
  BackupId: string | undefined;

  /**
   * <p>The lifecycle status of the backup.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - The backup is fully available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - For user-initiated backups on Lustre file systems only; Amazon FSx hasn't started creating the backup.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - Amazon FSx is creating the backup.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRANSFERRING</code> - For user-initiated backups on Lustre file systems only; Amazon FSx is transferring the backup to Amazon S3.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COPYING</code> - Amazon FSx is copying the backup.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - Amazon FSx deleted the backup and it's no longer
   *                     available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - Amazon FSx couldn't finish the backup.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Lifecycle: BackupLifecycle | undefined;

  /**
   * <p>Details explaining any failures that occurred when creating a backup.</p>
   * @public
   */
  FailureDetails?: BackupFailureDetails | undefined;

  /**
   * <p>The type of the file-system backup.</p>
   * @public
   */
  Type: BackupType | undefined;

  /**
   * <p>Displays the current percent of progress of an asynchronous task.</p>
   * @public
   */
  ProgressPercent?: number | undefined;

  /**
   * <p>The time when a particular backup was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The ID of the Key Management Service (KMS) key used to encrypt the
   *             backup of the Amazon FSx file system's data at rest. </p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the backup resource.</p>
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * <p>The tags associated with a particular file system.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The metadata of the file system associated with the backup. This metadata is persisted
   *             even if the file system is deleted.</p>
   * @public
   */
  FileSystem: FileSystem | undefined;

  /**
   * <p>The configuration of the self-managed Microsoft Active Directory directory to which
   *             the Windows File Server instance is joined.</p>
   * @public
   */
  DirectoryInformation?: ActiveDirectoryBackupAttributes | undefined;

  /**
   * <p>An Amazon Web Services account ID. This ID is a 12-digit number that you use to construct Amazon
   *             Resource Names (ARNs) for resources.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The ID of the source backup. Specifies the backup that you are copying.</p>
   * @public
   */
  SourceBackupId?: string | undefined;

  /**
   * <p>The source Region of the backup. Specifies the Region from where this backup
   *             is copied.</p>
   * @public
   */
  SourceBackupRegion?: string | undefined;

  /**
   * <p>Specifies the resource type that's backed up.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>Describes an Amazon FSx volume.</p>
   * @public
   */
  Volume?: Volume | undefined;

  /**
   * <p>
   *             The size of the backup in bytes. This represents the amount of data that the file system would contain if you restore this backup.
   *         </p>
   * @public
   */
  SizeInBytes?: number | undefined;
}

/**
 * @public
 */
export interface CopyBackupResponse {
  /**
   * <p>A backup of an Amazon FSx for Windows File Server, Amazon FSx for
   *             Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx
   *             for OpenZFS file system.</p>
   * @public
   */
  Backup?: Backup | undefined;
}

/**
 * <p>The response object for the <code>CreateBackup</code> operation.</p>
 * @public
 */
export interface CreateBackupResponse {
  /**
   * <p>A description of the backup.</p>
   * @public
   */
  Backup?: Backup | undefined;
}

/**
 * <p>Response object for the <code>DescribeBackups</code> operation.</p>
 * @public
 */
export interface DescribeBackupsResponse {
  /**
   * <p>An array of backups.</p>
   * @public
   */
  Backups?: Backup[] | undefined;

  /**
   * <p>A <code>NextToken</code> value is present if there are more backups than returned in
   *             the response. You can use the <code>NextToken</code> value in the subsequent request to
   *             fetch the backups. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @internal
 */
export const CreateFileSystemResponseFilterSensitiveLog = (obj: CreateFileSystemResponse): any => ({
  ...obj,
  ...(obj.FileSystem && { FileSystem: FileSystemFilterSensitiveLog(obj.FileSystem) }),
});

/**
 * @internal
 */
export const CreateSnapshotResponseFilterSensitiveLog = (obj: CreateSnapshotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVolumeFromBackupResponseFilterSensitiveLog = (obj: CreateVolumeFromBackupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVolumeResponseFilterSensitiveLog = (obj: CreateVolumeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReleaseFileSystemNfsV3LocksResponseFilterSensitiveLog = (
  obj: ReleaseFileSystemNfsV3LocksResponse
): any => ({
  ...obj,
  ...(obj.FileSystem && { FileSystem: FileSystemFilterSensitiveLog(obj.FileSystem) }),
});

/**
 * @internal
 */
export const StartMisconfiguredStateRecoveryResponseFilterSensitiveLog = (
  obj: StartMisconfiguredStateRecoveryResponse
): any => ({
  ...obj,
  ...(obj.FileSystem && { FileSystem: FileSystemFilterSensitiveLog(obj.FileSystem) }),
});

/**
 * @internal
 */
export const UpdateFileSystemResponseFilterSensitiveLog = (obj: UpdateFileSystemResponse): any => ({
  ...obj,
  ...(obj.FileSystem && { FileSystem: FileSystemFilterSensitiveLog(obj.FileSystem) }),
});

/**
 * @internal
 */
export const UpdateSnapshotResponseFilterSensitiveLog = (obj: UpdateSnapshotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateVolumeResponseFilterSensitiveLog = (obj: UpdateVolumeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFileSystemsResponseFilterSensitiveLog = (obj: DescribeFileSystemsResponse): any => ({
  ...obj,
  ...(obj.FileSystems && { FileSystems: obj.FileSystems.map((item) => FileSystemFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const DescribeSnapshotsResponseFilterSensitiveLog = (obj: DescribeSnapshotsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVolumesResponseFilterSensitiveLog = (obj: DescribeVolumesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BackupFilterSensitiveLog = (obj: Backup): any => ({
  ...obj,
  ...(obj.FileSystem && { FileSystem: FileSystemFilterSensitiveLog(obj.FileSystem) }),
});

/**
 * @internal
 */
export const CopyBackupResponseFilterSensitiveLog = (obj: CopyBackupResponse): any => ({
  ...obj,
  ...(obj.Backup && { Backup: BackupFilterSensitiveLog(obj.Backup) }),
});

/**
 * @internal
 */
export const CreateBackupResponseFilterSensitiveLog = (obj: CreateBackupResponse): any => ({
  ...obj,
  ...(obj.Backup && { Backup: BackupFilterSensitiveLog(obj.Backup) }),
});

/**
 * @internal
 */
export const DescribeBackupsResponseFilterSensitiveLog = (obj: DescribeBackupsResponse): any => ({
  ...obj,
  ...(obj.Backups && { Backups: obj.Backups.map((item) => BackupFilterSensitiveLog(item)) }),
});

import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>The configuration object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation.</p>
 */
export interface _DeleteFileSystemWindowsConfiguration {
  /**
   * <p>By default, Amazon FSx for Windows takes a final backup on your behalf when the <code>DeleteFileSystem</code> operation is invoked. Doing this helps protect you from data loss, and we highly recommend taking the final backup. If you want to skip this backup, use this flag to do so.</p>
   */
  SkipFinalBackup?: boolean;

  /**
   * <p>A set of tags for your final backup.</p>
   */
  FinalBackupTags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledDeleteFileSystemWindowsConfiguration
  extends _DeleteFileSystemWindowsConfiguration {
  /**
   * <p>A set of tags for your final backup.</p>
   */
  FinalBackupTags?: Array<_UnmarshalledTag>;
}

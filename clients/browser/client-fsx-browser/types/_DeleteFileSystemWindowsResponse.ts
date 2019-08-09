import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>The response object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation.</p>
 */
export interface _DeleteFileSystemWindowsResponse {
  /**
   * <p>The ID of the final backup for this file system.</p>
   */
  FinalBackupId?: string;

  /**
   * <p>The set of tags applied to the final backup.</p>
   */
  FinalBackupTags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledDeleteFileSystemWindowsResponse
  extends _DeleteFileSystemWindowsResponse {
  /**
   * <p>The set of tags applied to the final backup.</p>
   */
  FinalBackupTags?: Array<_UnmarshalledTag>;
}

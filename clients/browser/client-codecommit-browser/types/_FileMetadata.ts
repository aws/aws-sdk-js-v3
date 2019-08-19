/**
 * <p>A file that will be added, updated, or deleted as part of a commit.</p>
 */
export interface _FileMetadata {
  /**
   * <p>The full path to the file that will be added or updated, including the name of the file.</p>
   */
  absolutePath?: string;

  /**
   * <p>The blob ID that contains the file information.</p>
   */
  blobId?: string;

  /**
   * <p>The extrapolated file mode permissions for the file. Valid values include EXECUTABLE and NORMAL.</p>
   */
  fileMode?: "EXECUTABLE" | "NORMAL" | "SYMLINK" | string;
}

export type _UnmarshalledFileMetadata = _FileMetadata;

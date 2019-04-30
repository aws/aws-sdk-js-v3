/**
 * <p>Returns information about a file in a repository.</p>
 */
export interface _File {
  /**
   * <p>The blob ID that contains the file information.</p>
   */
  blobId?: string;

  /**
   * <p>The fully-qualified path to the file in the repository.</p>
   */
  absolutePath?: string;

  /**
   * <p>The relative path of the file from the folder where the query originated.</p>
   */
  relativePath?: string;

  /**
   * <p>The extrapolated file mode permissions for the file. Valid values include EXECUTABLE and NORMAL.</p>
   */
  fileMode?: "EXECUTABLE" | "NORMAL" | "SYMLINK" | string;
}

export type _UnmarshalledFile = _File;

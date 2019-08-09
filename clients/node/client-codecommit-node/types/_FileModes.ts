/**
 * <p>Information about file modes in a merge or pull request.</p>
 */
export interface _FileModes {
  /**
   * <p>The file mode of a file in the source of a merge or pull request.</p>
   */
  source?: "EXECUTABLE" | "NORMAL" | "SYMLINK" | string;

  /**
   * <p>The file mode of a file in the destination of a merge or pull request.</p>
   */
  destination?: "EXECUTABLE" | "NORMAL" | "SYMLINK" | string;

  /**
   * <p>The file mode of a file in the base of a merge or pull request.</p>
   */
  base?: "EXECUTABLE" | "NORMAL" | "SYMLINK" | string;
}

export type _UnmarshalledFileModes = _FileModes;

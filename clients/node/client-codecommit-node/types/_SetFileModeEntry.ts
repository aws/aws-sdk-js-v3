/**
 * <p>Information about the file mode changes.</p>
 */
export interface _SetFileModeEntry {
  /**
   * <p>The full path to the file, including the name of the file.</p>
   */
  filePath: string;

  /**
   * <p>The file mode for the file.</p>
   */
  fileMode: "EXECUTABLE" | "NORMAL" | "SYMLINK" | string;
}

export type _UnmarshalledSetFileModeEntry = _SetFileModeEntry;

/**
 * <p>A file that will be deleted as part of a commit.</p>
 */
export interface _DeleteFileEntry {
  /**
   * <p>The full path of the file that will be deleted, including the name of the file.</p>
   */
  filePath: string;
}

export type _UnmarshalledDeleteFileEntry = _DeleteFileEntry;

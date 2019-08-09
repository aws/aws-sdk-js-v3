import {
  _SourceFileSpecifier,
  _UnmarshalledSourceFileSpecifier
} from "./_SourceFileSpecifier";

/**
 * <p>Information about a file that will be added or updated as part of a commit.</p>
 */
export interface _PutFileEntry {
  /**
   * <p>The full path to the file in the repository, including the name of the file.</p>
   */
  filePath: string;

  /**
   * <p>The extrapolated file mode permissions for the file. Valid values include EXECUTABLE and NORMAL.</p>
   */
  fileMode?: "EXECUTABLE" | "NORMAL" | "SYMLINK" | string;

  /**
   * <p>The content of the file, if a source file is not specified.</p>
   */
  fileContent?: ArrayBuffer | ArrayBufferView | string;

  /**
   * <p>The name and full path of the file that contains the changes you want to make as part of the commit, if you are not providing the file content directly.</p>
   */
  sourceFile?: _SourceFileSpecifier;
}

export interface _UnmarshalledPutFileEntry extends _PutFileEntry {
  /**
   * <p>The content of the file, if a source file is not specified.</p>
   */
  fileContent?: Uint8Array;

  /**
   * <p>The name and full path of the file that contains the changes you want to make as part of the commit, if you are not providing the file content directly.</p>
   */
  sourceFile?: _UnmarshalledSourceFileSpecifier;
}

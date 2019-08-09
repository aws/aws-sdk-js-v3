/**
 * <p>Information about a replacement content entry in the conflict of a merge or pull request operation.</p>
 */
export interface _ReplaceContentEntry {
  /**
   * <p>The path of the conflicting file.</p>
   */
  filePath: string;

  /**
   * <p>The replacement type to use when determining how to resolve the conflict.</p>
   */
  replacementType:
    | "KEEP_BASE"
    | "KEEP_SOURCE"
    | "KEEP_DESTINATION"
    | "USE_NEW_CONTENT"
    | string;

  /**
   * <p>The base-64 encoded content to use when the replacement type is USE_NEW_CONTENT.</p>
   */
  content?: ArrayBuffer | ArrayBufferView | string;

  /**
   * <p>The file mode to apply during conflict resoltion.</p>
   */
  fileMode?: "EXECUTABLE" | "NORMAL" | "SYMLINK" | string;
}

export interface _UnmarshalledReplaceContentEntry extends _ReplaceContentEntry {
  /**
   * <p>The base-64 encoded content to use when the replacement type is USE_NEW_CONTENT.</p>
   */
  content?: Uint8Array;
}

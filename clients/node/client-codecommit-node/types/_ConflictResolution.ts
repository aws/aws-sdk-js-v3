import {
  _ReplaceContentEntry,
  _UnmarshalledReplaceContentEntry
} from "./_ReplaceContentEntry";
import {
  _DeleteFileEntry,
  _UnmarshalledDeleteFileEntry
} from "./_DeleteFileEntry";
import {
  _SetFileModeEntry,
  _UnmarshalledSetFileModeEntry
} from "./_SetFileModeEntry";

/**
 * <p>A list of inputs to use when resolving conflicts during a merge if AUTOMERGE is chosen as the conflict resolution strategy.</p>
 */
export interface _ConflictResolution {
  /**
   * <p>Files that will have content replaced as part of the merge conflict resolution.</p>
   */
  replaceContents?:
    | Array<_ReplaceContentEntry>
    | Iterable<_ReplaceContentEntry>;

  /**
   * <p>Files that will be deleted as part of the merge conflict resolution.</p>
   */
  deleteFiles?: Array<_DeleteFileEntry> | Iterable<_DeleteFileEntry>;

  /**
   * <p>File modes that will be set as part of the merge conflict resolution.</p>
   */
  setFileModes?: Array<_SetFileModeEntry> | Iterable<_SetFileModeEntry>;
}

export interface _UnmarshalledConflictResolution extends _ConflictResolution {
  /**
   * <p>Files that will have content replaced as part of the merge conflict resolution.</p>
   */
  replaceContents?: Array<_UnmarshalledReplaceContentEntry>;

  /**
   * <p>Files that will be deleted as part of the merge conflict resolution.</p>
   */
  deleteFiles?: Array<_UnmarshalledDeleteFileEntry>;

  /**
   * <p>File modes that will be set as part of the merge conflict resolution.</p>
   */
  setFileModes?: Array<_UnmarshalledSetFileModeEntry>;
}

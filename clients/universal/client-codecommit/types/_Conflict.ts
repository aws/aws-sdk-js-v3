import {
  _ConflictMetadata,
  _UnmarshalledConflictMetadata
} from "./_ConflictMetadata";
import { _MergeHunk, _UnmarshalledMergeHunk } from "./_MergeHunk";

/**
 * <p>Information about conflicts in a merge operation.</p>
 */
export interface _Conflict {
  /**
   * <p>Metadata about a conflict in a merge operation.</p>
   */
  conflictMetadata?: _ConflictMetadata;

  /**
   * <p>A list of hunks that contain the differences between files or lines causing the conflict.</p>
   */
  mergeHunks?: Array<_MergeHunk> | Iterable<_MergeHunk>;
}

export interface _UnmarshalledConflict extends _Conflict {
  /**
   * <p>Metadata about a conflict in a merge operation.</p>
   */
  conflictMetadata?: _UnmarshalledConflictMetadata;

  /**
   * <p>A list of hunks that contain the differences between files or lines causing the conflict.</p>
   */
  mergeHunks?: Array<_UnmarshalledMergeHunk>;
}

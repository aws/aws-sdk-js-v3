import {
  _MergeHunkDetail,
  _UnmarshalledMergeHunkDetail
} from "./_MergeHunkDetail";

/**
 * <p>Information about merge hunks in a merge or pull request operation.</p>
 */
export interface _MergeHunk {
  /**
   * <p>A Boolean value indicating whether a combination of hunks contains a conflict. Conflicts occur when the same file or the same lines in a file were modified in both the source and destination of a merge or pull request. Valid values include true, false, and null. This will be true when the hunk represents a conflict and one or more files contains a line conflict. File mode conflicts in a merge will not set this to be true.</p>
   */
  isConflict?: boolean;

  /**
   * <p>Information about the merge hunk in the source of a merge or pull request.</p>
   */
  source?: _MergeHunkDetail;

  /**
   * <p>Information about the merge hunk in the destination of a merge or pull request.</p>
   */
  destination?: _MergeHunkDetail;

  /**
   * <p>Information about the merge hunk in the base of a merge or pull request.</p>
   */
  base?: _MergeHunkDetail;
}

export interface _UnmarshalledMergeHunk extends _MergeHunk {
  /**
   * <p>Information about the merge hunk in the source of a merge or pull request.</p>
   */
  source?: _UnmarshalledMergeHunkDetail;

  /**
   * <p>Information about the merge hunk in the destination of a merge or pull request.</p>
   */
  destination?: _UnmarshalledMergeHunkDetail;

  /**
   * <p>Information about the merge hunk in the base of a merge or pull request.</p>
   */
  base?: _UnmarshalledMergeHunkDetail;
}

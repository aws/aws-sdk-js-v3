/**
 * <p>Information about the details of a merge hunk that contains a conflict in a merge or pull request operation.</p>
 */
export interface _MergeHunkDetail {
  /**
   * <p>The start position of the hunk in the merge result.</p>
   */
  startLine?: number;

  /**
   * <p>The end position of the hunk in the merge result.</p>
   */
  endLine?: number;

  /**
   * <p>The base-64 encoded content of the hunk merged region that might or might not contain a conflict.</p>
   */
  hunkContent?: string;
}

export type _UnmarshalledMergeHunkDetail = _MergeHunkDetail;

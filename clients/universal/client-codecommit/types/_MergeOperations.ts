/**
 * <p>Information about the file operation conflicts in a merge operation.</p>
 */
export interface _MergeOperations {
  /**
   * <p>The operation on a file (add, modify, or delete) of a file in the source of a merge or pull request.</p>
   */
  source?: "A" | "M" | "D" | string;

  /**
   * <p>The operation on a file in the destination of a merge or pull request.</p>
   */
  destination?: "A" | "M" | "D" | string;
}

export type _UnmarshalledMergeOperations = _MergeOperations;

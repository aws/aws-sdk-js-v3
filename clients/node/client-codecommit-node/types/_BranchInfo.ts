/**
 * <p>Returns information about a branch.</p>
 */
export interface _BranchInfo {
  /**
   * <p>The name of the branch.</p>
   */
  branchName?: string;

  /**
   * <p>The ID of the last commit made to the branch.</p>
   */
  commitId?: string;
}

export type _UnmarshalledBranchInfo = _BranchInfo;

/**
 * GetMergeConflictsInput shape
 */
export interface GetMergeConflictsInput {
    /**
     * <p>The name of the repository where the pull request was created.</p>
     */
    repositoryName: string;

    /**
     * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit. For example, a branch name or a full commit ID.</p>
     */
    destinationCommitSpecifier: string;

    /**
     * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit. For example, a branch name or a full commit ID.</p>
     */
    sourceCommitSpecifier: string;

    /**
     * <p>The merge option or strategy you want to use to merge the code. The only valid value is FAST_FORWARD_MERGE.</p>
     */
    mergeOption: 'FAST_FORWARD_MERGE'|string;
}
/**
 * <p>Information about an update to the source branch of a pull request.</p>
 */
export interface _PullRequestSourceReferenceUpdatedEventMetadata {
    /**
     * <p>The name of the repository where the pull request was updated.</p>
     */
    repositoryName?: string;

    /**
     * <p>The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was updated.</p>
     */
    beforeCommitId?: string;

    /**
     * <p>The full commit ID of the commit in the source branch that was the tip of the branch at the time the pull request was updated.</p>
     */
    afterCommitId?: string;
}

export type _UnmarshalledPullRequestSourceReferenceUpdatedEventMetadata = _PullRequestSourceReferenceUpdatedEventMetadata;
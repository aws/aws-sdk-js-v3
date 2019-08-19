/**
 * <p>Metadata about the pull request that is used when comparing the pull request source with its destination.</p>
 */
export interface _PullRequestCreatedEventMetadata {
  /**
   * <p>The name of the repository where the pull request was created.</p>
   */
  repositoryName?: string;

  /**
   * <p>The commit ID on the source branch used when the pull request was created.</p>
   */
  sourceCommitId?: string;

  /**
   * <p>The commit ID of the tip of the branch specified as the destination branch when the pull request was created.</p>
   */
  destinationCommitId?: string;

  /**
   * <p>The commit ID of the most recent commit that the source branch and the destination branch have in common.</p>
   */
  mergeBase?: string;
}

export type _UnmarshalledPullRequestCreatedEventMetadata = _PullRequestCreatedEventMetadata;

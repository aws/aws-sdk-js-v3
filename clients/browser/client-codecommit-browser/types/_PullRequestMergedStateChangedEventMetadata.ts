import { _MergeMetadata, _UnmarshalledMergeMetadata } from "./_MergeMetadata";

/**
 * <p>Returns information about the change in the merge state for a pull request event. </p>
 */
export interface _PullRequestMergedStateChangedEventMetadata {
  /**
   * <p>The name of the repository where the pull request was created.</p>
   */
  repositoryName?: string;

  /**
   * <p>The name of the branch that the pull request will be merged into.</p>
   */
  destinationReference?: string;

  /**
   * <p>Information about the merge state change event.</p>
   */
  mergeMetadata?: _MergeMetadata;
}

export interface _UnmarshalledPullRequestMergedStateChangedEventMetadata
  extends _PullRequestMergedStateChangedEventMetadata {
  /**
   * <p>Information about the merge state change event.</p>
   */
  mergeMetadata?: _UnmarshalledMergeMetadata;
}

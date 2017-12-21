import {_MergeMetadata, _UnmarshalledMergeMetadata} from './_MergeMetadata';

/**
 * <p>Returns information about a pull request target.</p>
 */
export interface _PullRequestTarget {
    /**
     * <p>The name of the repository that contains the pull request source and destination branches.</p>
     */
    repositoryName?: string;

    /**
     * <p>The branch of the repository that contains the changes for the pull request. Also known as the source branch.</p>
     */
    sourceReference?: string;

    /**
     * <p>The branch of the repository where the pull request changes will be merged into. Also known as the destination branch. </p>
     */
    destinationReference?: string;

    /**
     * <p>The full commit ID that is the tip of the destination branch. This is the commit where the pull request was or will be merged.</p>
     */
    destinationCommit?: string;

    /**
     * <p>The full commit ID of the tip of the source branch used to create the pull request. If the pull request branch is updated by a push while the pull request is open, the commit ID will change to reflect the new tip of the branch.</p>
     */
    sourceCommit?: string;

    /**
     * <p>Returns metadata about the state of the merge, including whether the merge has been made.</p>
     */
    mergeMetadata?: _MergeMetadata;
}

export interface _UnmarshalledPullRequestTarget extends _PullRequestTarget {
    /**
     * <p>Returns metadata about the state of the merge, including whether the merge has been made.</p>
     */
    mergeMetadata?: _UnmarshalledMergeMetadata;
}
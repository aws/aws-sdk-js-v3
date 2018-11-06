/**
 * <p>Information about a change to the status of a pull request.</p>
 */
export interface _PullRequestStatusChangedEventMetadata {
    /**
     * <p>The changed status of the pull request.</p>
     */
    pullRequestStatus?: 'OPEN'|'CLOSED'|string;
}

export type _UnmarshalledPullRequestStatusChangedEventMetadata = _PullRequestStatusChangedEventMetadata;
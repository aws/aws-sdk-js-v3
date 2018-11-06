import {_PullRequestTarget, _UnmarshalledPullRequestTarget} from './_PullRequestTarget';

/**
 * <p>Returns information about a pull request.</p>
 */
export interface _PullRequest {
    /**
     * <p>The system-generated ID of the pull request. </p>
     */
    pullRequestId?: string;

    /**
     * <p>The user-defined title of the pull request. This title is displayed in the list of pull requests to other users of the repository.</p>
     */
    title?: string;

    /**
     * <p>The user-defined description of the pull request. This description can be used to clarify what should be reviewed and other details of the request.</p>
     */
    description?: string;

    /**
     * <p>The day and time of the last user or system activity on the pull request, in timestamp format.</p>
     */
    lastActivityDate?: Date|string|number;

    /**
     * <p>The date and time the pull request was originally created, in timestamp format.</p>
     */
    creationDate?: Date|string|number;

    /**
     * <p>The status of the pull request. Pull request status can only change from <code>OPEN</code> to <code>CLOSED</code>.</p>
     */
    pullRequestStatus?: 'OPEN'|'CLOSED'|string;

    /**
     * <p>The Amazon Resource Name (ARN) of the user who created the pull request.</p>
     */
    authorArn?: string;

    /**
     * <p>The targets of the pull request, including the source branch and destination branch for the pull request.</p>
     */
    pullRequestTargets?: Array<_PullRequestTarget>|Iterable<_PullRequestTarget>;

    /**
     * <p>A unique, client-generated idempotency token that when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request will return information about the initial request that used that token.</p>
     */
    clientRequestToken?: string;
}

export interface _UnmarshalledPullRequest extends _PullRequest {
    /**
     * <p>The day and time of the last user or system activity on the pull request, in timestamp format.</p>
     */
    lastActivityDate?: Date;

    /**
     * <p>The date and time the pull request was originally created, in timestamp format.</p>
     */
    creationDate?: Date;

    /**
     * <p>The targets of the pull request, including the source branch and destination branch for the pull request.</p>
     */
    pullRequestTargets?: Array<_UnmarshalledPullRequestTarget>;
}
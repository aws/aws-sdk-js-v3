import { _Location } from "./_Location";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PostCommentForPullRequestInput shape
 */
export interface PostCommentForPullRequestInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string;

  /**
   * <p>The name of the repository where you want to post a comment on a pull request.</p>
   */
  repositoryName: string;

  /**
   * <p>The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was created.</p>
   */
  beforeCommitId: string;

  /**
   * <p>The full commit ID of the commit in the source branch that is the current tip of the branch for the pull request when you post the comment.</p>
   */
  afterCommitId: string;

  /**
   * <p>The location of the change where you want to post your comment. If no location is provided, the comment will be posted as a general comment on the pull request difference between the before commit ID and the after commit ID.</p>
   */
  location?: _Location;

  /**
   * <p>The content of your comment on the change.</p>
   */
  content: string;

  /**
   * <p>A unique, client-generated idempotency token that when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request will return information about the initial request that used that token.</p>
   */
  clientRequestToken?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}

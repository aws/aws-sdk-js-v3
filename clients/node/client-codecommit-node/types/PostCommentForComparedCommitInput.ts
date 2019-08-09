import { _Location } from "./_Location";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PostCommentForComparedCommitInput shape
 */
export interface PostCommentForComparedCommitInput {
  /**
   * <p>The name of the repository where you want to post a comment on the comparison between commits.</p>
   */
  repositoryName: string;

  /**
   * <p>To establish the directionality of the comparison, the full commit ID of the 'before' commit.</p> <note> <p>This is required for commenting on any commit unless that commit is the initial commit.</p> </note>
   */
  beforeCommitId?: string;

  /**
   * <p>To establish the directionality of the comparison, the full commit ID of the 'after' commit.</p>
   */
  afterCommitId: string;

  /**
   * <p>The location of the comparison where you want to comment.</p>
   */
  location?: _Location;

  /**
   * <p>The content of the comment you want to make.</p>
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

import { _Location, _UnmarshalledLocation } from "./_Location";
import { _Comment, _UnmarshalledComment } from "./_Comment";

/**
 * <p>Returns information about comments on a pull request.</p>
 */
export interface _CommentsForPullRequest {
  /**
   * <p>The system-generated ID of the pull request.</p>
   */
  pullRequestId?: string;

  /**
   * <p>The name of the repository that contains the pull request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The full commit ID of the commit that was the tip of the destination branch when the pull request was created. This commit will be superceded by the after commit in the source branch when and if you merge the source branch into the destination branch.</p>
   */
  beforeCommitId?: string;

  /**
   * <p>he full commit ID of the commit that was the tip of the source branch at the time the comment was made. </p>
   */
  afterCommitId?: string;

  /**
   * <p>The full blob ID of the file on which you want to comment on the destination commit.</p>
   */
  beforeBlobId?: string;

  /**
   * <p>The full blob ID of the file on which you want to comment on the source commit.</p>
   */
  afterBlobId?: string;

  /**
   * <p>Location information about the comment on the pull request, including the file name, line number, and whether the version of the file where the comment was made is 'BEFORE' (destination branch) or 'AFTER' (source branch).</p>
   */
  location?: _Location;

  /**
   * <p>An array of comment objects. Each comment object contains information about a comment on the pull request.</p>
   */
  comments?: Array<_Comment> | Iterable<_Comment>;
}

export interface _UnmarshalledCommentsForPullRequest
  extends _CommentsForPullRequest {
  /**
   * <p>Location information about the comment on the pull request, including the file name, line number, and whether the version of the file where the comment was made is 'BEFORE' (destination branch) or 'AFTER' (source branch).</p>
   */
  location?: _UnmarshalledLocation;

  /**
   * <p>An array of comment objects. Each comment object contains information about a comment on the pull request.</p>
   */
  comments?: Array<_UnmarshalledComment>;
}

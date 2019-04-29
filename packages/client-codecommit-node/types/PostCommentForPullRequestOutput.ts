import { _UnmarshalledLocation } from "./_Location";
import { _UnmarshalledComment } from "./_Comment";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PostCommentForPullRequestOutput shape
 */
export interface PostCommentForPullRequestOutput {
  /**
   * <p>The name of the repository where you posted a comment on a pull request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The system-generated ID of the pull request. </p>
   */
  pullRequestId?: string;

  /**
   * <p>The full commit ID of the commit in the source branch used to create the pull request, or in the case of an updated pull request, the full commit ID of the commit used to update the pull request.</p>
   */
  beforeCommitId?: string;

  /**
   * <p>The full commit ID of the commit in the destination branch where the pull request will be merged.</p>
   */
  afterCommitId?: string;

  /**
   * <p>In the directionality of the pull request, the blob ID of the 'before' blob.</p>
   */
  beforeBlobId?: string;

  /**
   * <p>In the directionality of the pull request, the blob ID of the 'after' blob.</p>
   */
  afterBlobId?: string;

  /**
   * <p>The location of the change where you posted your comment.</p>
   */
  location?: _UnmarshalledLocation;

  /**
   * <p>The content of the comment you posted.</p>
   */
  comment?: _UnmarshalledComment;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

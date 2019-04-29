import { _UnmarshalledCommentsForPullRequest } from "./_CommentsForPullRequest";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCommentsForPullRequestOutput shape
 */
export interface GetCommentsForPullRequestOutput {
  /**
   * <p>An array of comment objects on the pull request.</p>
   */
  commentsForPullRequestData?: Array<_UnmarshalledCommentsForPullRequest>;

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

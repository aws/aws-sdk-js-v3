import { _UnmarshalledPullRequest } from "./_PullRequest";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * MergePullRequestByFastForwardOutput shape
 */
export interface MergePullRequestByFastForwardOutput {
  /**
   * <p>Information about the specified pull request, including information about the merge.</p>
   */
  pullRequest?: _UnmarshalledPullRequest;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

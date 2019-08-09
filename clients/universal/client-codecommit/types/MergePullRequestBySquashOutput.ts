import { _UnmarshalledPullRequest } from "./_PullRequest";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * MergePullRequestBySquashOutput shape
 */
export interface MergePullRequestBySquashOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns information about a pull request.</p>
   */
  pullRequest?: _UnmarshalledPullRequest;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

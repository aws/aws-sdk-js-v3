import { _UnmarshalledStackSetSummary } from "./_StackSetSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListStackSetsOutput shape
 */
export interface ListStackSetsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <code>StackSetSummary</code> structures that contain information about the user's stack sets.</p>
   */
  Summaries?: Array<_UnmarshalledStackSetSummary>;

  /**
   * <p>If the request doesn't return all of the remaining results, <code>NextToken</code> is set to a token. To retrieve the next set of results, call <code>ListStackInstances</code> again and assign that token to the request object's <code>NextToken</code> parameter. If the request returns all results, <code>NextToken</code> is set to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

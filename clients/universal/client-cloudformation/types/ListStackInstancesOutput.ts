import { _UnmarshalledStackInstanceSummary } from "./_StackInstanceSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListStackInstancesOutput shape
 */
export interface ListStackInstancesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <code>StackInstanceSummary</code> structures that contain information about the specified stack instances.</p>
   */
  Summaries?: Array<_UnmarshalledStackInstanceSummary>;

  /**
   * <p>If the request doesn't return all of the remaining results, <code>NextToken</code> is set to a token. To retrieve the next set of results, call <code>ListStackInstances</code> again and assign that token to the request object's <code>NextToken</code> parameter. If the request returns all results, <code>NextToken</code> is set to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import { _UnmarshalledStackSetOperationSummary } from "./_StackSetOperationSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListStackSetOperationsOutput shape
 */
export interface ListStackSetOperationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <code>StackSetOperationSummary</code> structures that contain summary information about operations for the specified stack set.</p>
   */
  Summaries?: Array<_UnmarshalledStackSetOperationSummary>;

  /**
   * <p>If the request doesn't return all results, <code>NextToken</code> is set to a token. To retrieve the next set of results, call <code>ListOperationResults</code> again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, <code>NextToken</code> is set to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

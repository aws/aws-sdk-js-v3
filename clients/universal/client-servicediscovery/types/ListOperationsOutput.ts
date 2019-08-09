import { _UnmarshalledOperationSummary } from "./_OperationSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListOperationsOutput shape
 */
export interface ListOperationsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Summary information about the operations that match the specified criteria.</p>
   */
  Operations?: Array<_UnmarshalledOperationSummary>;

  /**
   * <p>If the response contains <code>NextToken</code>, submit another <code>ListOperations</code> request to get the next group of results. Specify the value of <code>NextToken</code> from the previous response in the next request.</p> <note> <p>AWS Cloud Map gets <code>MaxResults</code> operations and then filters them based on the specified criteria. It's possible that no operations in the first <code>MaxResults</code> operations matched the specified criteria but that subsequent groups of <code>MaxResults</code> operations do contain operations that match the criteria.</p> </note>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

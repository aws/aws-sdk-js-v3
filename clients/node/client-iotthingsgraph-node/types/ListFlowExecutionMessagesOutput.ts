import { _UnmarshalledFlowExecutionMessage } from "./_FlowExecutionMessage";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListFlowExecutionMessagesOutput shape
 */
export interface ListFlowExecutionMessagesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of objects that contain information about events in the specified flow execution.</p>
   */
  messages?: Array<_UnmarshalledFlowExecutionMessage>;

  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results. </p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

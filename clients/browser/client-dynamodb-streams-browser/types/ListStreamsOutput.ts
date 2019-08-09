import { _UnmarshalledStream } from "./_Stream";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>ListStreams</code> operation.</p>
 */
export interface ListStreamsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of stream descriptors associated with the current account and endpoint.</p>
   */
  Streams?: Array<_UnmarshalledStream>;

  /**
   * <p>The stream ARN of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request.</p> <p>If <code>LastEvaluatedStreamArn</code> is empty, then the "last page" of results has been processed and there is no more data to be retrieved.</p> <p>If <code>LastEvaluatedStreamArn</code> is not empty, it does not necessarily mean that there is more data in the result set. The only way to know when you have reached the end of the result set is when <code>LastEvaluatedStreamArn</code> is empty.</p>
   */
  LastEvaluatedStreamArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

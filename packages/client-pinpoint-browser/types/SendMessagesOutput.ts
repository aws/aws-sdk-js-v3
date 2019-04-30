import { _UnmarshalledMessageResponse } from "./_MessageResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SendMessagesOutput shape
 */
export interface SendMessagesOutput {
  /**
   * Send message response.
   */
  MessageResponse: _UnmarshalledMessageResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

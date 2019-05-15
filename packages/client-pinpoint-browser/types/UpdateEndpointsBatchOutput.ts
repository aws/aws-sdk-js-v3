import { _UnmarshalledMessageBody } from "./_MessageBody";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateEndpointsBatchOutput shape
 */
export interface UpdateEndpointsBatchOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * Simple message object.
   */
  MessageBody: _UnmarshalledMessageBody;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import { _UnmarshalledHandshake } from "./_Handshake";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CancelHandshakeOutput shape
 */
export interface CancelHandshakeOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure that contains details about the handshake that you canceled.</p>
   */
  Handshake?: _UnmarshalledHandshake;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

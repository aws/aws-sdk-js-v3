import { _UnmarshalledHandshake } from "./_Handshake";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeclineHandshakeOutput shape
 */
export interface DeclineHandshakeOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure that contains details about the declined handshake. The state is updated to show the value <code>DECLINED</code>.</p>
   */
  Handshake?: _UnmarshalledHandshake;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

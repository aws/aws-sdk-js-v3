import { _UnmarshalledListener } from "./_Listener";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateListenerOutput shape
 */
export interface CreateListenerOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The listener that you've created.</p>
   */
  Listener?: _UnmarshalledListener;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

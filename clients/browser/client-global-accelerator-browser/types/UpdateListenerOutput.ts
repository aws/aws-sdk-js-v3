import { _UnmarshalledListener } from "./_Listener";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateListenerOutput shape
 */
export interface UpdateListenerOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information for the updated listener.</p>
   */
  Listener?: _UnmarshalledListener;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

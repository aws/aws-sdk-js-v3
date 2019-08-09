import { _UnmarshalledTrafficMirrorSession } from "./_TrafficMirrorSession";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyTrafficMirrorSessionOutput shape
 */
export interface ModifyTrafficMirrorSessionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the Traffic Mirror session.</p>
   */
  TrafficMirrorSession?: _UnmarshalledTrafficMirrorSession;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

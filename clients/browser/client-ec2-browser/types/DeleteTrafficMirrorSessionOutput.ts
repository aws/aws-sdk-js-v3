import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteTrafficMirrorSessionOutput shape
 */
export interface DeleteTrafficMirrorSessionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the deleted Traffic Mirror session.</p>
   */
  TrafficMirrorSessionId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

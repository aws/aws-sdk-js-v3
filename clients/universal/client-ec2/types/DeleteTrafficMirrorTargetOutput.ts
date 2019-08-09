import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteTrafficMirrorTargetOutput shape
 */
export interface DeleteTrafficMirrorTargetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the deleted Traffic Mirror target.</p>
   */
  TrafficMirrorTargetId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteTrafficMirrorFilterRuleOutput shape
 */
export interface DeleteTrafficMirrorFilterRuleOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the deleted Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRuleId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

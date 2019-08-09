import { _UnmarshalledTrafficMirrorFilterRule } from "./_TrafficMirrorFilterRule";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyTrafficMirrorFilterRuleOutput shape
 */
export interface ModifyTrafficMirrorFilterRuleOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Modifies a Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRule?: _UnmarshalledTrafficMirrorFilterRule;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

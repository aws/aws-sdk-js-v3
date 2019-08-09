import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateScalingPlanOutput shape
 */
export interface CreateScalingPlanOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The version number of the scaling plan. This value is always 1.</p> <p>Currently, you cannot specify multiple scaling plan versions.</p>
   */
  ScalingPlanVersion: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

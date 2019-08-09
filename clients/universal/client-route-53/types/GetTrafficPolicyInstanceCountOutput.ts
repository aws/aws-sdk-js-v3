import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A complex type that contains information about the resource record sets that Amazon Route 53 created based on a specified traffic policy.</p>
 */
export interface GetTrafficPolicyInstanceCountOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The number of traffic policy instances that are associated with the current AWS account.</p>
   */
  TrafficPolicyInstanceCount: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

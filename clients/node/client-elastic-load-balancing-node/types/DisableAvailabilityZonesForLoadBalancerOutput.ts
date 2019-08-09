import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output for DisableAvailabilityZonesForLoadBalancer.</p>
 */
export interface DisableAvailabilityZonesForLoadBalancerOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The remaining Availability Zones for the load balancer.</p>
   */
  AvailabilityZones?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

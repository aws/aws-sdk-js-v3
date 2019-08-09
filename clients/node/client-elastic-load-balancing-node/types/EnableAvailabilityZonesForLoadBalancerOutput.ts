import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of EnableAvailabilityZonesForLoadBalancer.</p>
 */
export interface EnableAvailabilityZonesForLoadBalancerOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The updated list of Availability Zones for the load balancer.</p>
   */
  AvailabilityZones?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

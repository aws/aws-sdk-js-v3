import { _UnmarshalledLoadBalancerAttributes } from "./_LoadBalancerAttributes";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of ModifyLoadBalancerAttributes.</p>
 */
export interface ModifyLoadBalancerAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName?: string;

  /**
   * <p>Information about the load balancer attributes.</p>
   */
  LoadBalancerAttributes?: _UnmarshalledLoadBalancerAttributes;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

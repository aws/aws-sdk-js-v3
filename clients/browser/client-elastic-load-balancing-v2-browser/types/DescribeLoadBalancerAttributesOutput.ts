import { _UnmarshalledLoadBalancerAttribute } from "./_LoadBalancerAttribute";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeLoadBalancerAttributesOutput shape
 */
export interface DescribeLoadBalancerAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the load balancer attributes.</p>
   */
  Attributes?: Array<_UnmarshalledLoadBalancerAttribute>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

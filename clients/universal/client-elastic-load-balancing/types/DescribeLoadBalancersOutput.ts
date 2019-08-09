import { _UnmarshalledLoadBalancerDescription } from "./_LoadBalancerDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the parameters for DescribeLoadBalancers.</p>
 */
export interface DescribeLoadBalancersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the load balancers.</p>
   */
  LoadBalancerDescriptions?: Array<_UnmarshalledLoadBalancerDescription>;

  /**
   * <p>The marker to use when requesting the next set of results. If there are no additional results, the string is empty.</p>
   */
  NextMarker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

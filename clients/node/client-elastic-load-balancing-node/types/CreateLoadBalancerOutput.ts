import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output for CreateLoadBalancer.</p>
 */
export interface CreateLoadBalancerOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The DNS name of the load balancer.</p>
   */
  DNSName?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

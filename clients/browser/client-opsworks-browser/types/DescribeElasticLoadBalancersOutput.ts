import { _UnmarshalledElasticLoadBalancer } from "./_ElasticLoadBalancer";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>DescribeElasticLoadBalancers</code> request.</p>
 */
export interface DescribeElasticLoadBalancersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <code>ElasticLoadBalancer</code> objects that describe the specified Elastic Load Balancing instances.</p>
   */
  ElasticLoadBalancers?: Array<_UnmarshalledElasticLoadBalancer>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

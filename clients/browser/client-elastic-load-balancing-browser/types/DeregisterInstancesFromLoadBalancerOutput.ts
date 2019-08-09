import { _UnmarshalledInstance } from "./_Instance";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of DeregisterInstancesFromLoadBalancer.</p>
 */
export interface DeregisterInstancesFromLoadBalancerOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The remaining instances registered with the load balancer.</p>
   */
  Instances?: Array<_UnmarshalledInstance>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

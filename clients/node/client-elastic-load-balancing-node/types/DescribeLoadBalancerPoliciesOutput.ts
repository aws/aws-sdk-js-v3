import { _UnmarshalledPolicyDescription } from "./_PolicyDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of DescribeLoadBalancerPolicies.</p>
 */
export interface DescribeLoadBalancerPoliciesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the policies.</p>
   */
  PolicyDescriptions?: Array<_UnmarshalledPolicyDescription>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

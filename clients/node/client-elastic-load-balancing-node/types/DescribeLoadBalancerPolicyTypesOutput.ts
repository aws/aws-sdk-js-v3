import { _UnmarshalledPolicyTypeDescription } from "./_PolicyTypeDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of DescribeLoadBalancerPolicyTypes.</p>
 */
export interface DescribeLoadBalancerPolicyTypesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the policy types.</p>
   */
  PolicyTypeDescriptions?: Array<_UnmarshalledPolicyTypeDescription>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

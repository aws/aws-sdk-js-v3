import { _UnmarshalledScalingPolicy } from "./_ScalingPolicy";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeScalingPoliciesOutput shape
 */
export interface DescribeScalingPoliciesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the scaling policies.</p>
   */
  ScalingPolicies?: Array<_UnmarshalledScalingPolicy>;

  /**
   * <p>The token required to get the next set of results. This value is <code>null</code> if there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeTerminationPolicyTypesOutput shape
 */
export interface DescribeTerminationPolicyTypesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The termination policies supported by Amazon EC2 Auto Scaling: <code>OldestInstance</code>, <code>OldestLaunchConfiguration</code>, <code>NewestInstance</code>, <code>ClosestToNextInstanceHour</code>, <code>Default</code>, <code>OldestLaunchTemplate</code>, and <code>AllocationStrategy</code>.</p>
   */
  TerminationPolicyTypes?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

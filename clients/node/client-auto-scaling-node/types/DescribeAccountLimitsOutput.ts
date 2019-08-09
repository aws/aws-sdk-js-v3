import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAccountLimitsOutput shape
 */
export interface DescribeAccountLimitsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The maximum number of groups allowed for your AWS account. The default limit is 200 per region.</p>
   */
  MaxNumberOfAutoScalingGroups?: number;

  /**
   * <p>The maximum number of launch configurations allowed for your AWS account. The default limit is 200 per region.</p>
   */
  MaxNumberOfLaunchConfigurations?: number;

  /**
   * <p>The current number of groups for your AWS account.</p>
   */
  NumberOfAutoScalingGroups?: number;

  /**
   * <p>The current number of launch configurations for your AWS account.</p>
   */
  NumberOfLaunchConfigurations?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

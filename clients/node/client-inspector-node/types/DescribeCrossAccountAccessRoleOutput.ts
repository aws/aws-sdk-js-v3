import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeCrossAccountAccessRoleOutput shape
 */
export interface DescribeCrossAccountAccessRoleOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN that specifies the IAM role that Amazon Inspector uses to access your AWS account.</p>
   */
  roleArn: string;

  /**
   * <p>A Boolean value that specifies whether the IAM role has the necessary policies attached to enable Amazon Inspector to access your AWS account.</p>
   */
  valid: boolean;

  /**
   * <p>The date when the cross-account access role was registered.</p>
   */
  registeredAt: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

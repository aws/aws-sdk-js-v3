import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeMountTargetSecurityGroupsOutput shape
 */
export interface DescribeMountTargetSecurityGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of security groups.</p>
   */
  SecurityGroups: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

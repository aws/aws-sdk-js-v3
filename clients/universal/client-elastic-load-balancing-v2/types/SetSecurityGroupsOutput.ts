import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SetSecurityGroupsOutput shape
 */
export interface SetSecurityGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The IDs of the security groups associated with the load balancer.</p>
   */
  SecurityGroupIds?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

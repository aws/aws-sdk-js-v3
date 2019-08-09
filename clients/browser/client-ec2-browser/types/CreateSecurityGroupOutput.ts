import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateSecurityGroupOutput shape
 */
export interface CreateSecurityGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

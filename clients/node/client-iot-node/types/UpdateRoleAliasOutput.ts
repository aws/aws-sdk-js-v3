import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateRoleAliasOutput shape
 */
export interface UpdateRoleAliasOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The role alias.</p>
   */
  roleAlias?: string;

  /**
   * <p>The role alias ARN.</p>
   */
  roleAliasArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

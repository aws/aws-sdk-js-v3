import { _UnmarshalledRoleAliasDescription } from "./_RoleAliasDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeRoleAliasOutput shape
 */
export interface DescribeRoleAliasOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The role alias description.</p>
   */
  roleAliasDescription?: _UnmarshalledRoleAliasDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

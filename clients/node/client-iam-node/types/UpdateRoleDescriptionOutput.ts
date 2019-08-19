import { _UnmarshalledRole } from "./_Role";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateRoleDescriptionOutput shape
 */
export interface UpdateRoleDescriptionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure that contains details about the modified role.</p>
   */
  Role?: _UnmarshalledRole;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

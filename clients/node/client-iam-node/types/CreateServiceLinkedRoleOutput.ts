import { _UnmarshalledRole } from "./_Role";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateServiceLinkedRoleOutput shape
 */
export interface CreateServiceLinkedRoleOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A <a>Role</a> object that contains details about the newly created role.</p>
   */
  Role?: _UnmarshalledRole;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

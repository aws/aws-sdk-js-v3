import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteServiceLinkedRoleOutput shape
 */
export interface DeleteServiceLinkedRoleOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The deletion task identifier that you can use to check the status of the deletion. This identifier is returned in the format <code>task/aws-service-role/&lt;service-principal-name&gt;/&lt;role-name&gt;/&lt;task-uuid&gt;</code>.</p>
   */
  DeletionTaskId: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

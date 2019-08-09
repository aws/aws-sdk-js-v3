import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAssociatedRoleOutput shape
 */
export interface GetAssociatedRoleOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * The time when the role was associated with the group.
   */
  AssociatedAt?: string;

  /**
   * The ARN of the role that is associated with the group.
   */
  RoleArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

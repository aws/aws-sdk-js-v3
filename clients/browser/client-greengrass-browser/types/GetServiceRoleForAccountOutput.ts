import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetServiceRoleForAccountOutput shape
 */
export interface GetServiceRoleForAccountOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * The time when the service role was associated with the account.
   */
  AssociatedAt?: string;

  /**
   * The ARN of the role which is associated with the account.
   */
  RoleArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

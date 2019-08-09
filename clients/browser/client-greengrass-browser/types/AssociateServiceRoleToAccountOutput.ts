import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AssociateServiceRoleToAccountOutput shape
 */
export interface AssociateServiceRoleToAccountOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * The time when the service role was associated with the account.
   */
  AssociatedAt?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

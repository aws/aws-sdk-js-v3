import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DisassociateRoleFromGroupOutput shape
 */
export interface DisassociateRoleFromGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * The time, in milliseconds since the epoch, when the role was disassociated from the group.
   */
  DisassociatedAt?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

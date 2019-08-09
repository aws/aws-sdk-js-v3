import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DisassociateServiceRoleFromAccountOutput shape
 */
export interface DisassociateServiceRoleFromAccountOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * The time when the service role was disassociated from the account.
   */
  DisassociatedAt?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetInvitationsCountOutput shape
 */
export interface GetInvitationsCountOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The number of all membership invitations sent to this Security Hub member account, not including the currently accepted invitation. </p>
   */
  InvitationsCount?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

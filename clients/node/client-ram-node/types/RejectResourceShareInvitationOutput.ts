import { _UnmarshalledResourceShareInvitation } from "./_ResourceShareInvitation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RejectResourceShareInvitationOutput shape
 */
export interface RejectResourceShareInvitationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the invitation.</p>
   */
  resourceShareInvitation?: _UnmarshalledResourceShareInvitation;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

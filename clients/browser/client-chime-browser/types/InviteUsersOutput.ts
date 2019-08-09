import { _UnmarshalledInvite } from "./_Invite";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * InviteUsersOutput shape
 */
export interface InviteUsersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The invite details.</p>
   */
  Invites?: Array<_UnmarshalledInvite>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

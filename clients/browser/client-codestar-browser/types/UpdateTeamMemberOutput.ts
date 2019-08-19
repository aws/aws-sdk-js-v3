import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateTeamMemberOutput shape
 */
export interface UpdateTeamMemberOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the user whose team membership attributes were updated.</p>
   */
  userArn?: string;

  /**
   * <p>The project role granted to the user.</p>
   */
  projectRole?: string;

  /**
   * <p>Whether a team member is allowed to remotely access project resources using the SSH public key associated with the user's profile.</p>
   */
  remoteAccessAllowed?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> <code>UpdateUserResponse</code> returns the user name and server identifier for the request to update a user's properties.</p>
 */
export interface UpdateUserOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A system-assigned unique identifier for an SFTP server instance that the user account is assigned to.</p>
   */
  ServerId: string;

  /**
   * <p>The unique identifier for a user that is assigned to the SFTP server instance that was specified in the request.</p>
   */
  UserName: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

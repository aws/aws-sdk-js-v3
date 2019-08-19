import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateUserOutput shape
 */
export interface CreateUserOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the SFTP server that the user is attached to.</p>
   */
  ServerId: string;

  /**
   * <p>A unique string that identifies a user account associated with an SFTP server.</p>
   */
  UserName: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

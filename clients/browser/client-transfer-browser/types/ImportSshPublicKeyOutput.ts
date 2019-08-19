import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>This response identifies the user, server they belong to, and the identifier of the SSH public key associated with that user. A user can have more than one key on each server that they are associate with.</p>
 */
export interface ImportSshPublicKeyOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A system-assigned unique identifier for an SFTP server.</p>
   */
  ServerId: string;

  /**
   * <p>This identifier is the name given to a public key by the system that was imported.</p>
   */
  SshPublicKeyId: string;

  /**
   * <p>A user name assigned to the <code>ServerID</code> value that you specified.</p>
   */
  UserName: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

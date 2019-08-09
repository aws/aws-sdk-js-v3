import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateServerOutput shape
 */
export interface UpdateServerOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A system-assigned unique identifier for an SFTP server that the user account is assigned to.</p>
   */
  ServerId: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

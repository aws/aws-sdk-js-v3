import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the results of the <a>CreateDirectory</a> operation.</p>
 */
export interface CreateDirectoryOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier of the directory that was created.</p>
   */
  DirectoryId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

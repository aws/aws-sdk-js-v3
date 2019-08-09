import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the results of the <a>ConnectDirectory</a> operation.</p>
 */
export interface ConnectDirectoryOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier of the new directory.</p>
   */
  DirectoryId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

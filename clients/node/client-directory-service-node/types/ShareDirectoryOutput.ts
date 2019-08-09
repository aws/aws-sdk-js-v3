import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ShareDirectoryOutput shape
 */
export interface ShareDirectoryOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Identifier of the directory that is stored in the directory consumer account that is shared from the specified directory (<code>DirectoryId</code>).</p>
   */
  SharedDirectoryId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

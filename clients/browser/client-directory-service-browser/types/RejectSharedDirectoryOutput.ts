import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RejectSharedDirectoryOutput shape
 */
export interface RejectSharedDirectoryOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Identifier of the shared directory in the directory consumer account.</p>
   */
  SharedDirectoryId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import { _UnmarshalledDirectory } from "./_Directory";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDirectoryOutput shape
 */
export interface GetDirectoryOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Metadata about the directory.</p>
   */
  Directory: _UnmarshalledDirectory;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

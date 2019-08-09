import { _UnmarshalledDirectoryConfig } from "./_DirectoryConfig";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateDirectoryConfigOutput shape
 */
export interface UpdateDirectoryConfigOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the Directory Config object.</p>
   */
  DirectoryConfig?: _UnmarshalledDirectoryConfig;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import { _UnmarshalledDirectoryConfig } from "./_DirectoryConfig";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDirectoryConfigOutput shape
 */
export interface CreateDirectoryConfigOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the directory configuration.</p>
   */
  DirectoryConfig?: _UnmarshalledDirectoryConfig;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

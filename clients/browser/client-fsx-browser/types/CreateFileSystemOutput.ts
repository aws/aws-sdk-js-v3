import { _UnmarshalledFileSystem } from "./_FileSystem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The response object returned after the file system is created.</p>
 */
export interface CreateFileSystemOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The configuration of the file system that was created.</p>
   */
  FileSystem?: _UnmarshalledFileSystem;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

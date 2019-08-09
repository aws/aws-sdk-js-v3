import { _UnmarshalledSharedDirectory } from "./_SharedDirectory";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AcceptSharedDirectoryOutput shape
 */
export interface AcceptSharedDirectoryOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The shared directory in the directory consumer account.</p>
   */
  SharedDirectory?: _UnmarshalledSharedDirectory;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

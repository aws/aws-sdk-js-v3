import { _UnmarshalledResourcePath } from "./_ResourcePath";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetFolderPathOutput shape
 */
export interface GetFolderPathOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The path information.</p>
   */
  Path?: _UnmarshalledResourcePath;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

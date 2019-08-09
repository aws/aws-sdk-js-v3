import { _UnmarshalledFolderMetadata } from "./_FolderMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateFolderOutput shape
 */
export interface CreateFolderOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The metadata of the folder.</p>
   */
  Metadata?: _UnmarshalledFolderMetadata;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

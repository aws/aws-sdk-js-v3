import { _UnmarshalledFolderMetadata } from "./_FolderMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeRootFoldersOutput shape
 */
export interface DescribeRootFoldersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The user's special folders.</p>
   */
  Folders?: Array<_UnmarshalledFolderMetadata>;

  /**
   * <p>The marker for the next set of results.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

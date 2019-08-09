import { _UnmarshalledFolderMetadata } from "./_FolderMetadata";
import { _UnmarshalledDocumentMetadata } from "./_DocumentMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeFolderContentsOutput shape
 */
export interface DescribeFolderContentsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The subfolders in the specified folder.</p>
   */
  Folders?: Array<_UnmarshalledFolderMetadata>;

  /**
   * <p>The documents in the specified folder.</p>
   */
  Documents?: Array<_UnmarshalledDocumentMetadata>;

  /**
   * <p>The marker to use when requesting the next set of results. If there are no additional results, the string is empty.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

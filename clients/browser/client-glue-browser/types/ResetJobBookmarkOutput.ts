import { _UnmarshalledJobBookmarkEntry } from "./_JobBookmarkEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ResetJobBookmarkOutput shape
 */
export interface ResetJobBookmarkOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The reset bookmark entry.</p>
   */
  JobBookmarkEntry?: _UnmarshalledJobBookmarkEntry;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

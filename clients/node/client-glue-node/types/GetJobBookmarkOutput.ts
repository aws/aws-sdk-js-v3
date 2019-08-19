import { _UnmarshalledJobBookmarkEntry } from "./_JobBookmarkEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetJobBookmarkOutput shape
 */
export interface GetJobBookmarkOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure that defines a point that a job can resume processing.</p>
   */
  JobBookmarkEntry?: _UnmarshalledJobBookmarkEntry;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import { _UnmarshalledUploadListElement } from "./_UploadListElement";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the Amazon Glacier response to your request.</p>
 */
export interface ListMultipartUploadsOutput {
  /**
   * <p>A list of in-progress multipart uploads.</p>
   */
  UploadsList?: Array<_UnmarshalledUploadListElement>;

  /**
   * <p>An opaque string that represents where to continue pagination of the results. You use the marker in a new List Multipart Uploads request to obtain more uploads in the list. If there are no more uploads, this value is <code>null</code>.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

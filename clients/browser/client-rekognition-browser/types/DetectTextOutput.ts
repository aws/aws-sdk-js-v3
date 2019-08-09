import { _UnmarshalledTextDetection } from "./_TextDetection";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DetectTextOutput shape
 */
export interface DetectTextOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of text that was detected in the input image.</p>
   */
  TextDetections?: Array<_UnmarshalledTextDetection>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

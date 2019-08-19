import { _UnmarshalledUpload } from "./_Upload";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateUploadOutput shape
 */
export interface UpdateUploadOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A test spec uploaded to Device Farm.</p>
   */
  upload?: _UnmarshalledUpload;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

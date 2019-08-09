import { _UnmarshalledUpload } from "./_Upload";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the result of a create upload request.</p>
 */
export interface CreateUploadOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The newly created upload.</p>
   */
  upload?: _UnmarshalledUpload;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

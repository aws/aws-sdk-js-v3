import { _UnmarshalledDocumentMetadata } from "./_DocumentMetadata";
import { _UnmarshalledUploadMetadata } from "./_UploadMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * InitiateDocumentVersionUploadOutput shape
 */
export interface InitiateDocumentVersionUploadOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The document metadata.</p>
   */
  Metadata?: _UnmarshalledDocumentMetadata;

  /**
   * <p>The upload metadata.</p>
   */
  UploadMetadata?: _UnmarshalledUploadMetadata;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

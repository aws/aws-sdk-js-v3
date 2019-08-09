import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutRecordOutput shape
 */
export interface PutRecordOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the record.</p>
   */
  RecordId: string;

  /**
   * <p>Indicates whether server-side encryption (SSE) was enabled during this operation.</p>
   */
  Encrypted?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

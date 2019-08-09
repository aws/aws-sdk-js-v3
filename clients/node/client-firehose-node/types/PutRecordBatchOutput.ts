import { _UnmarshalledPutRecordBatchResponseEntry } from "./_PutRecordBatchResponseEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutRecordBatchOutput shape
 */
export interface PutRecordBatchOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The number of records that might have failed processing. This number might be greater than 0 even if the <a>PutRecordBatch</a> call succeeds. Check <code>FailedPutCount</code> to determine whether there are records that you need to resend.</p>
   */
  FailedPutCount: number;

  /**
   * <p>Indicates whether server-side encryption (SSE) was enabled during this operation.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The results array. For each record, the index of the response element is the same as the index used in the request array.</p>
   */
  RequestResponses: Array<_UnmarshalledPutRecordBatchResponseEntry>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

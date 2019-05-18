import { _UnmarshalledPutRecordsResultEntry } from "./_PutRecordsResultEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> <code>PutRecords</code> results.</p>
 */
export interface PutRecordsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The number of unsuccessfully processed records in a <code>PutRecords</code> request.</p>
   */
  FailedRecordCount?: number;

  /**
   * <p>An array of successfully and unsuccessfully processed record results, correlated with the request by natural ordering. A record that is successfully added to a stream includes <code>SequenceNumber</code> and <code>ShardId</code> in the result. A record that fails to be added to a stream includes <code>ErrorCode</code> and <code>ErrorMessage</code> in the result.</p>
   */
  Records: Array<_UnmarshalledPutRecordsResultEntry>;

  /**
   * <p>The encryption type used on the records. This parameter can be one of the following values:</p> <ul> <li> <p> <code>NONE</code>: Do not encrypt the records.</p> </li> <li> <p> <code>KMS</code>: Use server-side encryption on the records using a customer-managed AWS KMS key.</p> </li> </ul>
   */
  EncryptionType?: "NONE" | "KMS" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

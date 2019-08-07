import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output for <code>PutRecord</code>.</p>
 */
export interface PutRecordOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The shard ID of the shard where the data record was placed.</p>
   */
  ShardId: string;

  /**
   * <p>The sequence number identifier that was assigned to the put data record. The sequence number for the record is unique across all records in the stream. A sequence number is the identifier associated with every record put into the stream.</p>
   */
  SequenceNumber: string;

  /**
   * <p>The encryption type to use on the record. This parameter can be one of the following values:</p> <ul> <li> <p> <code>NONE</code>: Do not encrypt the records in the stream.</p> </li> <li> <p> <code>KMS</code>: Use server-side encryption on the records in the stream using a customer-managed AWS KMS key.</p> </li> </ul>
   */
  EncryptionType?: "NONE" | "KMS" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

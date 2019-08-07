/**
 * <p>The unit of data of the Kinesis data stream, which is composed of a sequence number, a partition key, and a data blob.</p>
 */
export interface _Record {
  /**
   * <p>The unique identifier of the record within its shard.</p>
   */
  SequenceNumber: string;

  /**
   * <p>The approximate time that the record was inserted into the stream.</p>
   */
  ApproximateArrivalTimestamp?: Date | string | number;

  /**
   * <p>The data blob. The data in the blob is both opaque and immutable to Kinesis Data Streams, which does not inspect, interpret, or change the data in the blob in any way. When the data blob (the payload before base64-encoding) is added to the partition key size, the total size must not exceed the maximum record size (1 MB).</p>
   */
  Data: ArrayBuffer | ArrayBufferView | string;

  /**
   * <p>Identifies which shard in the stream the data record is assigned to.</p>
   */
  PartitionKey: string;

  /**
   * <p>The encryption type used on the record. This parameter can be one of the following values:</p> <ul> <li> <p> <code>NONE</code>: Do not encrypt the records in the stream.</p> </li> <li> <p> <code>KMS</code>: Use server-side encryption on the records in the stream using a customer-managed AWS KMS key.</p> </li> </ul>
   */
  EncryptionType?: "NONE" | "KMS" | string;
}

export interface _UnmarshalledRecord extends _Record {
  /**
   * <p>The approximate time that the record was inserted into the stream.</p>
   */
  ApproximateArrivalTimestamp?: Date;

  /**
   * <p>The data blob. The data in the blob is both opaque and immutable to Kinesis Data Streams, which does not inspect, interpret, or change the data in the blob in any way. When the data blob (the payload before base64-encoding) is added to the partition key size, the total size must not exceed the maximum record size (1 MB).</p>
   */
  Data: Uint8Array;
}

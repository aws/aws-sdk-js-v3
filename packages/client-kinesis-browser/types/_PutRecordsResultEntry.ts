/**
 * <p>Represents the result of an individual record from a <code>PutRecords</code> request. A record that is successfully added to a stream includes <code>SequenceNumber</code> and <code>ShardId</code> in the result. A record that fails to be added to the stream includes <code>ErrorCode</code> and <code>ErrorMessage</code> in the result.</p>
 */
export interface _PutRecordsResultEntry {
  /**
   * <p>The sequence number for an individual record result.</p>
   */
  SequenceNumber?: string;

  /**
   * <p>The shard ID for an individual record result.</p>
   */
  ShardId?: string;

  /**
   * <p>The error code for an individual record result. <code>ErrorCodes</code> can be either <code>ProvisionedThroughputExceededException</code> or <code>InternalFailure</code>.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message for an individual record result. An <code>ErrorCode</code> value of <code>ProvisionedThroughputExceededException</code> has an error message that includes the account ID, stream name, and shard ID. An <code>ErrorCode</code> value of <code>InternalFailure</code> has the error message <code>"Internal Service Failure"</code>.</p>
   */
  ErrorMessage?: string;
}

export type _UnmarshalledPutRecordsResultEntry = _PutRecordsResultEntry;

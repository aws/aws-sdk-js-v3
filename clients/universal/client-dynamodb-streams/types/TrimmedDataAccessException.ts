import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation attempted to read past the oldest stream record in a shard.</p> <p>In DynamoDB Streams, there is a 24 hour limit on data retention. Stream records whose age exceeds this limit are subject to removal (trimming) from the stream. You might receive a TrimmedDataAccessException if:</p> <ul> <li><p>You request a shard iterator with a sequence number older than the trim point (24 hours).</p> </li> <li><p>You obtain a shard iterator, but before you use the iterator in a <code>GetRecords</code> request, a stream record in the shard exceeds the 24 hour period and is trimmed. This causes the iterator to access a record that no longer exists.</p> </li> </ul>
 */
export interface TrimmedDataAccessException
  extends __ServiceException__<_TrimmedDataAccessExceptionDetails> {
  name: "TrimmedDataAccessException";
}

export interface _TrimmedDataAccessExceptionDetails {
  /**
   * <p>"The data you are trying to access has been trimmed.</p>
   */
  message?: string;
}

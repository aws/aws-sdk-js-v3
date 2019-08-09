/**
 * <p>Represents all of the data describing a particular stream.</p>
 */
export interface _Stream {
  /**
   * <p>The Amazon Resource Name (ARN) for the stream.</p>
   */
  StreamArn?: string;

  /**
   * <p>The DynamoDB table with which the stream is associated.</p>
   */
  TableName?: string;

  /**
   * <p>A timestamp, in ISO 8601 format, for this stream.</p> <p>Note that <code>LatestStreamLabel</code> is not a unique identifier for the stream, because it is possible that a stream from another table might have the same timestamp. However, the combination of the following three elements is guaranteed to be unique:</p> <ul> <li> <p>the AWS customer ID.</p> </li> <li> <p>the table name</p> </li> <li> <p>the <code>StreamLabel</code> </p> </li> </ul>
   */
  StreamLabel?: string;
}

export type _UnmarshalledStream = _Stream;

import {
  _KeySchemaElement,
  _UnmarshalledKeySchemaElement
} from "./_KeySchemaElement";
import { _Shard, _UnmarshalledShard } from "./_Shard";

/**
 * <p>Represents all of the data describing a particular stream.</p>
 */
export interface _StreamDescription {
  /**
   * <p>The Amazon Resource Name (ARN) for the stream.</p>
   */
  StreamArn?: string;

  /**
   * <p>A timestamp, in ISO 8601 format, for this stream.</p> <p>Note that <code>LatestStreamLabel</code> is not a unique identifier for the stream, because it is possible that a stream from another table might have the same timestamp. However, the combination of the following three elements is guaranteed to be unique:</p> <ul> <li> <p>the AWS customer ID.</p> </li> <li> <p>the table name</p> </li> <li> <p>the <code>StreamLabel</code> </p> </li> </ul>
   */
  StreamLabel?: string;

  /**
   * <p>Indicates the current status of the stream:</p> <ul> <li> <p> <code>ENABLING</code> - Streams is currently being enabled on the DynamoDB table.</p> </li> <li> <p> <code>ENABLED</code> - the stream is enabled.</p> </li> <li> <p> <code>DISABLING</code> - Streams is currently being disabled on the DynamoDB table.</p> </li> <li> <p> <code>DISABLED</code> - the stream is disabled.</p> </li> </ul>
   */
  StreamStatus?: "ENABLING" | "ENABLED" | "DISABLING" | "DISABLED" | string;

  /**
   * <p>Indicates the format of the records within this stream:</p> <ul> <li> <p> <code>KEYS_ONLY</code> - only the key attributes of items that were modified in the DynamoDB table.</p> </li> <li> <p> <code>NEW_IMAGE</code> - entire items from the table, as they appeared after they were modified.</p> </li> <li> <p> <code>OLD_IMAGE</code> - entire items from the table, as they appeared before they were modified.</p> </li> <li> <p> <code>NEW_AND_OLD_IMAGES</code> - both the new and the old images of the items from the table.</p> </li> </ul>
   */
  StreamViewType?:
    | "NEW_IMAGE"
    | "OLD_IMAGE"
    | "NEW_AND_OLD_IMAGES"
    | "KEYS_ONLY"
    | string;

  /**
   * <p>The date and time when the request to create this stream was issued.</p>
   */
  CreationRequestDateTime?: Date | string | number;

  /**
   * <p>The DynamoDB table with which the stream is associated.</p>
   */
  TableName?: string;

  /**
   * <p>The key attribute(s) of the stream's DynamoDB table.</p>
   */
  KeySchema?: Array<_KeySchemaElement> | Iterable<_KeySchemaElement>;

  /**
   * <p>The shards that comprise the stream.</p>
   */
  Shards?: Array<_Shard> | Iterable<_Shard>;

  /**
   * <p>The shard ID of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request.</p> <p>If <code>LastEvaluatedShardId</code> is empty, then the "last page" of results has been processed and there is currently no more data to be retrieved.</p> <p>If <code>LastEvaluatedShardId</code> is not empty, it does not necessarily mean that there is more data in the result set. The only way to know when you have reached the end of the result set is when <code>LastEvaluatedShardId</code> is empty.</p>
   */
  LastEvaluatedShardId?: string;
}

export interface _UnmarshalledStreamDescription extends _StreamDescription {
  /**
   * <p>The date and time when the request to create this stream was issued.</p>
   */
  CreationRequestDateTime?: Date;

  /**
   * <p>The key attribute(s) of the stream's DynamoDB table.</p>
   */
  KeySchema?: Array<_UnmarshalledKeySchemaElement>;

  /**
   * <p>The shards that comprise the stream.</p>
   */
  Shards?: Array<_UnmarshalledShard>;
}

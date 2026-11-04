// smithy-typescript generated code
import type { KeyType, OperationType, ShardFilterType, ShardIteratorType, StreamStatus, StreamViewType } from "./enums";

/**
 * This optional field contains the filter definition for the `DescribeStream` API.
 *
 * @public
 */
export interface ShardFilter {
  /**
   * Contains the type of filter to be applied on the `DescribeStream` API. Currently, the only value this parameter accepts is `CHILD_SHARDS`.
   *
   * @public
   */
  Type?: ShardFilterType | undefined;

  /**
   * Contains the `shardId` of the parent shard for which you are requesting child shards.
   *
   * *Sample request:*
   *
   * @public
   */
  ShardId?: string | undefined;
}

/**
 * Represents the input of a `DescribeStream` operation.
 *
 * @public
 */
export interface DescribeStreamInput {
  /**
   * The Amazon Resource Name (ARN) for the stream.
   *
   * @public
   */
  StreamArn: string | undefined;

  /**
   * The maximum number of shard objects to return. The upper limit is 100.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The shard ID of the first item that this operation will evaluate. Use the value that was returned for `LastEvaluatedShardId` in the previous operation.
   *
   * @public
   */
  ExclusiveStartShardId?: string | undefined;

  /**
   * This optional field contains the filter definition for the `DescribeStream` API.
   *
   * @public
   */
  ShardFilter?: ShardFilter | undefined;
}

/**
 * Represents *a single element* of a key schema. A key schema specifies the attributes that make up the primary key of a table, or the key attributes of an index.
 *
 * A `KeySchemaElement` represents exactly one attribute of the primary key. For example, a simple primary key would be represented by one `KeySchemaElement` (for the partition key). A composite primary key would require one `KeySchemaElement` for the partition key, and another `KeySchemaElement` for the sort key.
 *
 * A `KeySchemaElement` must be a scalar, top-level attribute (not a nested attribute). The data type must be one of String, Number, or Binary. The attribute cannot be nested within a List or a Map.
 *
 * @public
 */
export interface KeySchemaElement {
  /**
   * The name of a key attribute.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The role that this key attribute will assume:
   *
   * - `HASH` - partition key
   * - `RANGE` - sort key
   *
   * > **Note:**
   * >
   * > The partition key of an item is also known as its *hash attribute*. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
   * >
   * > The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
   *
   * @public
   */
  KeyType: KeyType | undefined;
}

/**
 * The beginning and ending sequence numbers for the stream records contained within a shard.
 *
 * @public
 */
export interface SequenceNumberRange {
  /**
   * The first sequence number for the stream records contained within a shard. String contains numeric characters only.
   *
   * @public
   */
  StartingSequenceNumber?: string | undefined;

  /**
   * The last sequence number for the stream records contained within a shard. String contains numeric characters only.
   *
   * @public
   */
  EndingSequenceNumber?: string | undefined;
}

/**
 * A uniquely identified group of stream records within a stream.
 *
 * @public
 */
export interface Shard {
  /**
   * The system-generated identifier for this shard.
   *
   * @public
   */
  ShardId?: string | undefined;

  /**
   * The range of possible sequence numbers for the shard.
   *
   * @public
   */
  SequenceNumberRange?: SequenceNumberRange | undefined;

  /**
   * The shard ID of the current shard's parent.
   *
   * @public
   */
  ParentShardId?: string | undefined;
}

/**
 * Represents all of the data describing a particular stream.
 *
 * @public
 */
export interface StreamDescription {
  /**
   * The Amazon Resource Name (ARN) for the stream.
   *
   * @public
   */
  StreamArn?: string | undefined;

  /**
   * A timestamp, in ISO 8601 format, for this stream.
   *
   * Note that `LatestStreamLabel` is not a unique identifier for the stream, because it is possible that a stream from another table might have the same timestamp. However, the combination of the following three elements is guaranteed to be unique:
   *
   * - the Amazon Web Services customer ID.
   * - the table name
   * - the `StreamLabel`
   *
   * @public
   */
  StreamLabel?: string | undefined;

  /**
   * Indicates the current status of the stream:
   *
   * - `ENABLING` - Streams is currently being enabled on the DynamoDB table.
   * - `ENABLED` - the stream is enabled.
   * - `DISABLING` - Streams is currently being disabled on the DynamoDB table.
   * - `DISABLED` - the stream is disabled.
   *
   * @public
   */
  StreamStatus?: StreamStatus | undefined;

  /**
   * Indicates the format of the records within this stream:
   *
   * - `KEYS_ONLY` - only the key attributes of items that were modified in the DynamoDB table.
   * - `NEW_IMAGE` - entire items from the table, as they appeared after they were modified.
   * - `OLD_IMAGE` - entire items from the table, as they appeared before they were modified.
   * - `NEW_AND_OLD_IMAGES` - both the new and the old images of the items from the table.
   *
   * @public
   */
  StreamViewType?: StreamViewType | undefined;

  /**
   * The date and time when the request to create this stream was issued.
   *
   * @public
   */
  CreationRequestDateTime?: Date | undefined;

  /**
   * The DynamoDB table with which the stream is associated.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The key attribute(s) of the stream's DynamoDB table.
   *
   * @public
   */
  KeySchema?: KeySchemaElement[] | undefined;

  /**
   * The shards that comprise the stream.
   *
   * @public
   */
  Shards?: Shard[] | undefined;

  /**
   * The shard ID of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request.
   *
   * If `LastEvaluatedShardId` is empty, then the "last page" of results has been processed and there is currently no more data to be retrieved.
   *
   * If `LastEvaluatedShardId` is not empty, it does not necessarily mean that there is more data in the result set. The only way to know when you have reached the end of the result set is when `LastEvaluatedShardId` is empty.
   *
   * @public
   */
  LastEvaluatedShardId?: string | undefined;
}

/**
 * Represents the output of a `DescribeStream` operation.
 *
 * @public
 */
export interface DescribeStreamOutput {
  /**
   * A complete description of the stream, including its creation date and time, the DynamoDB table associated with the stream, the shard IDs within the stream, and the beginning and ending sequence numbers of stream records within the shards.
   *
   * @public
   */
  StreamDescription?: StreamDescription | undefined;
}

/**
 * Represents the input of a `GetRecords` operation.
 *
 * @public
 */
export interface GetRecordsInput {
  /**
   * A shard iterator that was retrieved from a previous GetShardIterator operation. This iterator can be used to access the stream records in this shard.
   *
   * @public
   */
  ShardIterator: string | undefined;

  /**
   * The maximum number of records to return from the shard. The upper limit is 1000.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * Contains details about the type of identity that made the request.
 *
 * @public
 */
export interface Identity {
  /**
   * A unique identifier for the entity that made the call. For Time To Live, the principalId is "dynamodb.amazonaws.com".
   *
   * @public
   */
  PrincipalId?: string | undefined;

  /**
   * The type of the identity. For Time To Live, the type is "Service".
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Represents the input of a `GetShardIterator` operation.
 *
 * @public
 */
export interface GetShardIteratorInput {
  /**
   * The Amazon Resource Name (ARN) for the stream.
   *
   * @public
   */
  StreamArn: string | undefined;

  /**
   * The identifier of the shard. The iterator will be returned for this shard ID.
   *
   * @public
   */
  ShardId: string | undefined;

  /**
   * Determines how the shard iterator is used to start reading stream records from the shard:
   *
   * - `AT_SEQUENCE_NUMBER` - Start reading exactly from the position denoted by a specific sequence number.
   * - `AFTER_SEQUENCE_NUMBER` - Start reading right after the position denoted by a specific sequence number.
   * - `TRIM_HORIZON` - Start reading at the last (untrimmed) stream record, which is the oldest record in the shard. In DynamoDB Streams, there is a 24 hour limit on data retention. Stream records whose age exceeds this limit are subject to removal (trimming) from the stream.
   * - `LATEST` - Start reading just after the most recent stream record in the shard, so that you always read the most recent data in the shard.
   * - `AT_TIMESTAMP` - Start reading from the position denoted by a specific timestamp, provided in the parameter `Timestamp`.
   *
   * @public
   */
  ShardIteratorType: ShardIteratorType | undefined;

  /**
   * The sequence number of a stream record in the shard from which to start reading.
   *
   * @public
   */
  SequenceNumber?: string | undefined;

  /**
   * The timestamp of the stream record from which to start reading. Used with shard iterator type `AT_TIMESTAMP`. A timestamp is the Unix epoch date with precision in milliseconds. For example, `1791316726.480`. The iterator points to the first stream record whose `ApproximateCreationDateTime` is at or after the specified timestamp. If no record with that exact timestamp exists, the iterator points to the next (later) record. If the timestamp is older than the current trim horizon, the iterator points to the oldest untrimmed stream record (`TRIM_HORIZON`). If the timestamp is in the future, the request returns a `ValidationException`.
   *
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * Represents the output of a `GetShardIterator` operation.
 *
 * @public
 */
export interface GetShardIteratorOutput {
  /**
   * The position in the shard from which to start reading stream records sequentially. A shard iterator specifies this position using the sequence number of a stream record in a shard.
   *
   * @public
   */
  ShardIterator?: string | undefined;
}

/**
 * Represents the input of a `ListStreams` operation.
 *
 * @public
 */
export interface ListStreamsInput {
  /**
   * If this parameter is provided, then only the streams associated with this table name are returned.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The maximum number of streams to return. The upper limit is 100.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The ARN (Amazon Resource Name) of the first item that this operation will evaluate. Use the value that was returned for `LastEvaluatedStreamArn` in the previous operation.
   *
   * @public
   */
  ExclusiveStartStreamArn?: string | undefined;
}

/**
 * Represents all of the data describing a particular stream.
 *
 * @public
 */
export interface _Stream {
  /**
   * The Amazon Resource Name (ARN) for the stream.
   *
   * @public
   */
  StreamArn?: string | undefined;

  /**
   * The DynamoDB table with which the stream is associated.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * A timestamp, in ISO 8601 format, for this stream.
   *
   * Note that `LatestStreamLabel` is not a unique identifier for the stream, because it is possible that a stream from another table might have the same timestamp. However, the combination of the following three elements is guaranteed to be unique:
   *
   * - the Amazon Web Services customer ID.
   * - the table name
   * - the `StreamLabel`
   *
   * @public
   */
  StreamLabel?: string | undefined;
}

/**
 * Represents the output of a `ListStreams` operation.
 *
 * @public
 */
export interface ListStreamsOutput {
  /**
   * A list of stream descriptors associated with the current account and endpoint.
   *
   * @public
   */
  Streams?: _Stream[] | undefined;

  /**
   * The stream ARN of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request.
   *
   * If `LastEvaluatedStreamArn` is empty, then the "last page" of results has been processed and there is no more data to be retrieved.
   *
   * If `LastEvaluatedStreamArn` is not empty, it does not necessarily mean that there is more data in the result set. The only way to know when you have reached the end of the result set is when `LastEvaluatedStreamArn` is empty.
   *
   * @public
   */
  LastEvaluatedStreamArn?: string | undefined;
}

/**
 * Represents the data for an attribute.
 *
 * Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.
 *
 * For more information, see [Data Types](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes) in the *Amazon DynamoDB Developer Guide*.
 *
 * @public
 */
export type AttributeValue =
  | AttributeValue.BMember
  | AttributeValue.BOOLMember
  | AttributeValue.BSMember
  | AttributeValue.LMember
  | AttributeValue.MMember
  | AttributeValue.NMember
  | AttributeValue.NSMember
  | AttributeValue.NULLMember
  | AttributeValue.SMember
  | AttributeValue.SSMember
  | AttributeValue.$UnknownMember;

/**
 * @public
 */
export namespace AttributeValue {
  /**
   * An attribute of type String. For example:
   *
   * `"S": "Hello"`
   *
   * @public
   */
  export interface SMember {
    S: string;
    N?: never;
    B?: never;
    SS?: never;
    NS?: never;
    BS?: never;
    M?: never;
    L?: never;
    NULL?: never;
    BOOL?: never;
    $unknown?: never;
  }

  /**
   * An attribute of type Number. For example:
   *
   * `"N": "123.45"`
   *
   * Numbers are sent across the network to DynamoDB as strings, to maximize compatibility across languages and libraries. However, DynamoDB treats them as number type attributes for mathematical operations.
   *
   * @public
   */
  export interface NMember {
    S?: never;
    N: string;
    B?: never;
    SS?: never;
    NS?: never;
    BS?: never;
    M?: never;
    L?: never;
    NULL?: never;
    BOOL?: never;
    $unknown?: never;
  }

  /**
   * An attribute of type Binary. For example:
   *
   * `"B": "dGhpcyB0ZXh0IGlzIGJhc2U2NC1lbmNvZGVk"`
   *
   * @public
   */
  export interface BMember {
    S?: never;
    N?: never;
    B: Uint8Array;
    SS?: never;
    NS?: never;
    BS?: never;
    M?: never;
    L?: never;
    NULL?: never;
    BOOL?: never;
    $unknown?: never;
  }

  /**
   * An attribute of type String Set. For example:
   *
   * `"SS": ["Giraffe", "Hippo" ,"Zebra"]`
   *
   * @public
   */
  export interface SSMember {
    S?: never;
    N?: never;
    B?: never;
    SS: string[];
    NS?: never;
    BS?: never;
    M?: never;
    L?: never;
    NULL?: never;
    BOOL?: never;
    $unknown?: never;
  }

  /**
   * An attribute of type Number Set. For example:
   *
   * `"NS": ["42.2", "-19", "7.5", "3.14"]`
   *
   * Numbers are sent across the network to DynamoDB as strings, to maximize compatibility across languages and libraries. However, DynamoDB treats them as number type attributes for mathematical operations.
   *
   * @public
   */
  export interface NSMember {
    S?: never;
    N?: never;
    B?: never;
    SS?: never;
    NS: string[];
    BS?: never;
    M?: never;
    L?: never;
    NULL?: never;
    BOOL?: never;
    $unknown?: never;
  }

  /**
   * An attribute of type Binary Set. For example:
   *
   * `"BS": ["U3Vubnk=", "UmFpbnk=", "U25vd3k="]`
   *
   * @public
   */
  export interface BSMember {
    S?: never;
    N?: never;
    B?: never;
    SS?: never;
    NS?: never;
    BS: Uint8Array[];
    M?: never;
    L?: never;
    NULL?: never;
    BOOL?: never;
    $unknown?: never;
  }

  /**
   * An attribute of type Map. For example:
   *
   * `"M": \{"Name": \{"S": "Joe"\}, "Age": \{"N": "35"\}\}`
   *
   * @public
   */
  export interface MMember {
    S?: never;
    N?: never;
    B?: never;
    SS?: never;
    NS?: never;
    BS?: never;
    M: Record<string, AttributeValue>;
    L?: never;
    NULL?: never;
    BOOL?: never;
    $unknown?: never;
  }

  /**
   * An attribute of type List. For example:
   *
   * `"L": [ \{"S": "Cookies"\} , \{"S": "Coffee"\}, \{"N": "3.14159"\}]`
   *
   * @public
   */
  export interface LMember {
    S?: never;
    N?: never;
    B?: never;
    SS?: never;
    NS?: never;
    BS?: never;
    M?: never;
    L: AttributeValue[];
    NULL?: never;
    BOOL?: never;
    $unknown?: never;
  }

  /**
   * An attribute of type Null. For example:
   *
   * `"NULL": true`
   *
   * @public
   */
  export interface NULLMember {
    S?: never;
    N?: never;
    B?: never;
    SS?: never;
    NS?: never;
    BS?: never;
    M?: never;
    L?: never;
    NULL: boolean;
    BOOL?: never;
    $unknown?: never;
  }

  /**
   * An attribute of type Boolean. For example:
   *
   * `"BOOL": true`
   *
   * @public
   */
  export interface BOOLMember {
    S?: never;
    N?: never;
    B?: never;
    SS?: never;
    NS?: never;
    BS?: never;
    M?: never;
    L?: never;
    NULL?: never;
    BOOL: boolean;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    S?: never;
    N?: never;
    B?: never;
    SS?: never;
    NS?: never;
    BS?: never;
    M?: never;
    L?: never;
    NULL?: never;
    BOOL?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    S: (value: string) => T;
    N: (value: string) => T;
    B: (value: Uint8Array) => T;
    SS: (value: string[]) => T;
    NS: (value: string[]) => T;
    BS: (value: Uint8Array[]) => T;
    M: (value: Record<string, AttributeValue>) => T;
    L: (value: AttributeValue[]) => T;
    NULL: (value: boolean) => T;
    BOOL: (value: boolean) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A description of a single data modification that was performed on an item in a DynamoDB table.
 *
 * @public
 */
export interface StreamRecord {
  /**
   * The approximate date and time when the stream record was created, in [UNIX epoch time](http://www.epochconverter.com/) format and rounded down to the closest second. Some tools and SDKs may convert this value to a different format, such as [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html).
   *
   * @public
   */
  ApproximateCreationDateTime?: Date | undefined;

  /**
   * The primary key attribute(s) for the DynamoDB item that was modified.
   *
   * @public
   */
  Keys?: Record<string, AttributeValue> | undefined;

  /**
   * The item in the DynamoDB table as it appeared after it was modified.
   *
   * @public
   */
  NewImage?: Record<string, AttributeValue> | undefined;

  /**
   * The item in the DynamoDB table as it appeared before it was modified.
   *
   * @public
   */
  OldImage?: Record<string, AttributeValue> | undefined;

  /**
   * The sequence number of the stream record.
   *
   * @public
   */
  SequenceNumber?: string | undefined;

  /**
   * The size of the stream record, in bytes.
   *
   * @public
   */
  SizeBytes?: number | undefined;

  /**
   * The type of data from the modified DynamoDB item that was captured in this stream record:
   *
   * - `KEYS_ONLY` - only the key attributes of the modified item.
   * - `NEW_IMAGE` - the entire item, as it appeared after it was modified.
   * - `OLD_IMAGE` - the entire item, as it appeared before it was modified.
   * - `NEW_AND_OLD_IMAGES` - both the new and the old item images of the item.
   *
   * @public
   */
  StreamViewType?: StreamViewType | undefined;
}

/**
 * A description of a unique event within a stream.
 *
 * @public
 */
export interface _Record {
  /**
   * A globally unique identifier for the event that was recorded in this stream record.
   *
   * @public
   */
  eventID?: string | undefined;

  /**
   * The type of data modification that was performed on the DynamoDB table:
   *
   * - `INSERT` - a new item was added to the table.
   * - `MODIFY` - one or more of an existing item's attributes were modified.
   * - `REMOVE` - the item was deleted from the table
   *
   * @public
   */
  eventName?: OperationType | undefined;

  /**
   * The version number of the stream record format. This number is updated whenever the structure of `Record` is modified.
   *
   * Client applications must not assume that `eventVersion` will remain at a particular value, as this number is subject to change at any time. In general, `eventVersion` will only increase as the low-level DynamoDB Streams API evolves.
   *
   * @public
   */
  eventVersion?: string | undefined;

  /**
   * The Amazon Web Services service from which the stream record originated. For DynamoDB Streams, this is `aws:dynamodb`.
   *
   * @public
   */
  eventSource?: string | undefined;

  /**
   * The region in which the `GetRecords` request was received.
   *
   * @public
   */
  awsRegion?: string | undefined;

  /**
   * The main body of the stream record, containing all of the DynamoDB-specific fields.
   *
   * @public
   */
  dynamodb?: StreamRecord | undefined;

  /**
   * Items that are deleted by the Time to Live process after expiration have the following fields:
   *
   * - Records[].userIdentity.type
   *
   *   "Service"
   * - Records[].userIdentity.principalId
   *
   *   "dynamodb.amazonaws.com"
   *
   * @public
   */
  userIdentity?: Identity | undefined;
}

/**
 * Represents the output of a `GetRecords` operation.
 *
 * @public
 */
export interface GetRecordsOutput {
  /**
   * The stream records from the shard, which were retrieved using the shard iterator.
   *
   * @public
   */
  Records?: _Record[] | undefined;

  /**
   * The next position in the shard from which to start sequentially reading stream records. If set to `null`, the shard has been closed and the requested iterator will not return any more data.
   *
   * @public
   */
  NextShardIterator?: string | undefined;
}

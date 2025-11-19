// smithy-typescript generated code
import { KeyType, OperationType, ShardFilterType, ShardIteratorType, StreamStatus, StreamViewType } from "./enums";

/**
 * <p>This optional field contains the filter
 *             definition for the <code>DescribeStream</code> API.</p>
 * @public
 */
export interface ShardFilter {
  /**
   * <p>Contains the type of filter to be applied on the <code>DescribeStream</code> API.
   *             Currently, the only value this parameter accepts is <code>CHILD_SHARDS</code>.</p>
   * @public
   */
  Type?: ShardFilterType | undefined;

  /**
   * <p>Contains the <code>shardId</code> of the parent shard for which you are requesting child shards.</p>
   *          <p>
   *             <i>Sample request:</i>
   *          </p>
   * @public
   */
  ShardId?: string | undefined;
}

/**
 * <p>Represents the input of a <code>DescribeStream</code> operation.</p>
 * @public
 */
export interface DescribeStreamInput {
  /**
   * <p>The Amazon Resource Name (ARN) for the stream.</p>
   * @public
   */
  StreamArn: string | undefined;

  /**
   * <p>The maximum number of shard objects to return. The upper limit is 100.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The shard ID of the first item that this operation will evaluate. Use the value that was
   *       returned for <code>LastEvaluatedShardId</code> in the previous operation. </p>
   * @public
   */
  ExclusiveStartShardId?: string | undefined;

  /**
   * <p>This optional field contains the filter definition for the
   *             <code>DescribeStream</code> API.</p>
   * @public
   */
  ShardFilter?: ShardFilter | undefined;
}

/**
 * <p>Represents <i>a single element</i> of a key schema. A key schema specifies
 *             the attributes that make up the primary key of a table, or the key attributes of an
 *             index.</p>
 *          <p>A <code>KeySchemaElement</code> represents exactly one attribute of the primary key. For
 *             example, a simple primary key would be represented by one <code>KeySchemaElement</code>
 *             (for the partition key). A composite primary key would require one
 *                 <code>KeySchemaElement</code> for the partition key, and another
 *                 <code>KeySchemaElement</code> for the sort key.</p>
 *          <p>A <code>KeySchemaElement</code> must be a scalar, top-level attribute (not a nested
 *             attribute). The data type must be one of String, Number, or Binary. The attribute cannot
 *             be nested within a List or a Map.</p>
 * @public
 */
export interface KeySchemaElement {
  /**
   * <p>The name of a key attribute.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The role that this key attribute will assume:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HASH</code> - partition key</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RANGE</code> - sort key</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The partition key of an item is also known as its <i>hash
   *                     attribute</i>. The term "hash attribute" derives from DynamoDB's usage of
   *                 an internal hash function to evenly distribute data items across partitions, based
   *                 on their partition key values.</p>
   *             <p>The sort key of an item is also known as its <i>range
   *                 attribute</i>. The term "range attribute" derives from the way DynamoDB
   *                 stores items with the same partition key physically close together, in sorted order
   *                 by the sort key value.</p>
   *          </note>
   * @public
   */
  KeyType: KeyType | undefined;
}

/**
 * <p>The beginning and ending sequence numbers for the stream records contained within a shard.</p>
 * @public
 */
export interface SequenceNumberRange {
  /**
   * <p>The first sequence number for the stream records contained within a shard. String contains numeric characters only.</p>
   * @public
   */
  StartingSequenceNumber?: string | undefined;

  /**
   * <p>The last sequence number for the stream records contained within a shard. String contains numeric characters only.</p>
   * @public
   */
  EndingSequenceNumber?: string | undefined;
}

/**
 * <p>A uniquely identified group of stream records within a stream.</p>
 * @public
 */
export interface Shard {
  /**
   * <p>The system-generated identifier for this shard.</p>
   * @public
   */
  ShardId?: string | undefined;

  /**
   * <p>The range of possible sequence numbers for the shard.</p>
   * @public
   */
  SequenceNumberRange?: SequenceNumberRange | undefined;

  /**
   * <p>The shard ID of the current shard's parent.</p>
   * @public
   */
  ParentShardId?: string | undefined;
}

/**
 * <p>Represents all of the data describing a particular stream.</p>
 * @public
 */
export interface StreamDescription {
  /**
   * <p>The Amazon Resource Name (ARN) for the stream.</p>
   * @public
   */
  StreamArn?: string | undefined;

  /**
   * <p>A timestamp, in ISO 8601 format, for this stream.</p>
   *          <p>Note that <code>LatestStreamLabel</code> is not a unique identifier for the stream, because it is
   *       possible that a stream from another table might have the same timestamp. However, the
   *       combination of the following three elements is guaranteed to be unique:</p>
   *          <ul>
   *             <li>
   *                <p>the Amazon Web Services customer ID.</p>
   *             </li>
   *             <li>
   *                <p>the table name</p>
   *             </li>
   *             <li>
   *                <p>the <code>StreamLabel</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  StreamLabel?: string | undefined;

  /**
   * <p>Indicates the current status of the stream:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLING</code> - Streams is currently being enabled on the DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - the stream is enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLING</code> - Streams is currently being disabled on the DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - the stream is disabled.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StreamStatus?: StreamStatus | undefined;

  /**
   * <p>Indicates the format of the records within this stream:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>KEYS_ONLY</code> - only the key attributes of items that were modified in the DynamoDB table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_IMAGE</code> - entire items from the table, as they appeared after they were modified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OLD_IMAGE</code> - entire items from the table, as they appeared before they were modified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_AND_OLD_IMAGES</code> - both the new and the old images of the items from the table.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StreamViewType?: StreamViewType | undefined;

  /**
   * <p>The date and time when the request to create this stream was issued.</p>
   * @public
   */
  CreationRequestDateTime?: Date | undefined;

  /**
   * <p>The DynamoDB table with which the stream is associated.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>The key attribute(s) of the stream's DynamoDB table.</p>
   * @public
   */
  KeySchema?: KeySchemaElement[] | undefined;

  /**
   * <p>The shards that comprise the stream.</p>
   * @public
   */
  Shards?: Shard[] | undefined;

  /**
   * <p>The shard ID of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request.</p>
   *          <p>If <code>LastEvaluatedShardId</code> is empty, then the "last page" of results has been
   *       processed and there is currently no more data to be retrieved.</p>
   *          <p>If <code>LastEvaluatedShardId</code> is not empty, it does not necessarily mean that there is
   *       more data in the result set. The only way to know when you have reached the end of the result
   *       set is when <code>LastEvaluatedShardId</code> is empty.</p>
   * @public
   */
  LastEvaluatedShardId?: string | undefined;
}

/**
 * <p>Represents the output of a <code>DescribeStream</code> operation.</p>
 * @public
 */
export interface DescribeStreamOutput {
  /**
   * <p>A complete description of the stream, including its creation date and time, the DynamoDB table associated with the stream, the shard IDs within the stream, and the beginning and ending sequence numbers of stream records within the shards.</p>
   * @public
   */
  StreamDescription?: StreamDescription | undefined;
}

/**
 * <p>Represents the input of a <code>GetRecords</code> operation.</p>
 * @public
 */
export interface GetRecordsInput {
  /**
   * <p>A shard iterator that was retrieved from a previous GetShardIterator operation. This iterator can be used to access the stream records in this shard.</p>
   * @public
   */
  ShardIterator: string | undefined;

  /**
   * <p>The maximum number of records to return from the shard. The upper limit is 1000.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * <p>Contains details about the type of identity that made the request.</p>
 * @public
 */
export interface Identity {
  /**
   * <p>A unique identifier for the entity that made the call. For Time To Live, the
   *       principalId is "dynamodb.amazonaws.com".</p>
   * @public
   */
  PrincipalId?: string | undefined;

  /**
   * <p>The type of the identity. For Time To Live, the type is "Service".</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Represents the input of a <code>GetShardIterator</code> operation.</p>
 * @public
 */
export interface GetShardIteratorInput {
  /**
   * <p>The Amazon Resource Name (ARN) for the stream.</p>
   * @public
   */
  StreamArn: string | undefined;

  /**
   * <p>The identifier of the shard. The iterator will be returned for this shard ID.</p>
   * @public
   */
  ShardId: string | undefined;

  /**
   * <p>Determines how the shard iterator is used to start reading stream records from the shard:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AT_SEQUENCE_NUMBER</code> - Start reading exactly from the position denoted by a
   *           specific sequence number.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AFTER_SEQUENCE_NUMBER</code> - Start reading right after the position denoted by a
   *           specific sequence number.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRIM_HORIZON</code> - Start reading at the last (untrimmed) stream record, which is
   *           the oldest record in the shard. In DynamoDB Streams, there is a 24 hour limit on data retention.
   *           Stream records whose age exceeds this limit are subject to removal (trimming) from the
   *           stream.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LATEST</code> - Start reading just after the most recent stream record in the
   *           shard, so that you always read the most recent data in the shard.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ShardIteratorType: ShardIteratorType | undefined;

  /**
   * <p>The sequence number of a stream record in the shard from which to start reading.</p>
   * @public
   */
  SequenceNumber?: string | undefined;
}

/**
 * <p>Represents the output of a <code>GetShardIterator</code> operation.</p>
 * @public
 */
export interface GetShardIteratorOutput {
  /**
   * <p>The position in the shard from which to start reading stream records sequentially. A shard iterator specifies this position using the sequence number of a stream record in a shard.</p>
   * @public
   */
  ShardIterator?: string | undefined;
}

/**
 * <p>Represents the input of a <code>ListStreams</code> operation.</p>
 * @public
 */
export interface ListStreamsInput {
  /**
   * <p>If this parameter is provided, then only the streams associated with this table name are returned.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>The maximum number of streams to return. The upper limit is 100.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the first item that this operation will evaluate. Use the
   *       value that was returned for <code>LastEvaluatedStreamArn</code> in the previous operation.
   *     </p>
   * @public
   */
  ExclusiveStartStreamArn?: string | undefined;
}

/**
 * <p>Represents all of the data describing a particular stream.</p>
 * @public
 */
export interface _Stream {
  /**
   * <p>The Amazon Resource Name (ARN) for the stream.</p>
   * @public
   */
  StreamArn?: string | undefined;

  /**
   * <p>The DynamoDB table with which the stream is associated.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>A timestamp, in ISO 8601 format, for this stream.</p>
   *          <p>Note that <code>LatestStreamLabel</code> is not a unique identifier for the stream, because it is
   *       possible that a stream from another table might have the same timestamp. However, the
   *       combination of the following three elements is guaranteed to be unique:</p>
   *          <ul>
   *             <li>
   *                <p>the Amazon Web Services customer ID.</p>
   *             </li>
   *             <li>
   *                <p>the table name</p>
   *             </li>
   *             <li>
   *                <p>the <code>StreamLabel</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  StreamLabel?: string | undefined;
}

/**
 * <p>Represents the output of a <code>ListStreams</code> operation.</p>
 * @public
 */
export interface ListStreamsOutput {
  /**
   * <p>A list of stream descriptors associated with the current account and endpoint.</p>
   * @public
   */
  Streams?: _Stream[] | undefined;

  /**
   * <p>The stream ARN of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request.</p>
   *          <p>If <code>LastEvaluatedStreamArn</code> is empty, then the "last page" of results has been
   *       processed and there is no more data to be retrieved.</p>
   *          <p>If <code>LastEvaluatedStreamArn</code> is not empty, it does not necessarily mean that there
   *       is more data in the result set. The only way to know when you have reached the end of the
   *       result set is when <code>LastEvaluatedStreamArn</code> is empty.</p>
   * @public
   */
  LastEvaluatedStreamArn?: string | undefined;
}

/**
 * <p>Represents the data for an attribute.</p>
 *          <p>Each attribute value is described as a name-value pair.  The name is the data type, and the value is the data itself.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the
 *                              <i>Amazon DynamoDB Developer Guide</i>.</p>
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
   * <p>An attribute of type  String. For example:</p>
   *          <p>
   *             <code>"S": "Hello"</code>
   *          </p>
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
   * <p>An attribute of type Number. For example:</p>
   *          <p>
   *             <code>"N": "123.45"</code>
   *          </p>
   *          <p>Numbers are sent across the network to DynamoDB as strings, to maximize compatibility across languages and libraries. However, DynamoDB treats them as number type attributes for mathematical operations.</p>
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
   * <p>An attribute of type Binary.  For example:</p>
   *          <p>
   *             <code>"B": "dGhpcyB0ZXh0IGlzIGJhc2U2NC1lbmNvZGVk"</code>
   *          </p>
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
   * <p>An attribute of type String Set.  For example:</p>
   *          <p>
   *             <code>"SS": ["Giraffe", "Hippo" ,"Zebra"]</code>
   *          </p>
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
   * <p>An attribute of type Number Set.  For example:</p>
   *          <p>
   *             <code>"NS": ["42.2", "-19", "7.5", "3.14"]</code>
   *          </p>
   *          <p>Numbers are sent across the network to DynamoDB as strings, to maximize compatibility across languages and libraries. However, DynamoDB treats them as number type attributes for mathematical operations.</p>
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
   * <p>An attribute of type Binary Set.  For example:</p>
   *          <p>
   *             <code>"BS": ["U3Vubnk=", "UmFpbnk=", "U25vd3k="]</code>
   *          </p>
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
   * <p>An attribute of type Map.  For example:</p>
   *          <p>
   *             <code>"M": \{"Name": \{"S": "Joe"\}, "Age": \{"N": "35"\}\}</code>
   *          </p>
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
   * <p>An attribute of type List.  For example:</p>
   *          <p>
   *             <code>"L": [ \{"S": "Cookies"\} , \{"S": "Coffee"\}, \{"N": "3.14159"\}]</code>
   *          </p>
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
   * <p>An attribute of type Null.  For example:</p>
   *          <p>
   *             <code>"NULL": true</code>
   *          </p>
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
   * <p>An attribute of type Boolean.  For example:</p>
   *          <p>
   *             <code>"BOOL": true</code>
   *          </p>
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
 * <p>A description of a single data modification that was performed on an item in a DynamoDB table.</p>
 * @public
 */
export interface StreamRecord {
  /**
   * <p>The approximate date and time when the stream record was created, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format and rounded down to the closest second.</p>
   * @public
   */
  ApproximateCreationDateTime?: Date | undefined;

  /**
   * <p>The primary key attribute(s) for the DynamoDB item that was modified.</p>
   * @public
   */
  Keys?: Record<string, AttributeValue> | undefined;

  /**
   * <p>The item in the DynamoDB table as it appeared after it was modified.</p>
   * @public
   */
  NewImage?: Record<string, AttributeValue> | undefined;

  /**
   * <p>The item in the DynamoDB table as it appeared before it was modified.</p>
   * @public
   */
  OldImage?: Record<string, AttributeValue> | undefined;

  /**
   * <p>The sequence number of the stream record.</p>
   * @public
   */
  SequenceNumber?: string | undefined;

  /**
   * <p>The size of the stream record, in bytes.</p>
   * @public
   */
  SizeBytes?: number | undefined;

  /**
   * <p>The type of data from the modified DynamoDB item that was captured in this stream record:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>KEYS_ONLY</code> - only the key attributes of the modified item.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_IMAGE</code> - the entire item, as it appeared after it was modified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OLD_IMAGE</code> - the entire item, as it appeared before it was modified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_AND_OLD_IMAGES</code> - both the new and the old item images of the item.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StreamViewType?: StreamViewType | undefined;
}

/**
 * <p>A description of a unique event within a stream.</p>
 * @public
 */
export interface _Record {
  /**
   * <p>A globally unique identifier for the event that was recorded in this stream record.</p>
   * @public
   */
  eventID?: string | undefined;

  /**
   * <p>The type of data modification that was performed on the DynamoDB table:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INSERT</code> - a new item was added to the table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODIFY</code> - one or more of an existing item's attributes were modified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REMOVE</code> - the item was deleted from the table</p>
   *             </li>
   *          </ul>
   * @public
   */
  eventName?: OperationType | undefined;

  /**
   * <p>The version number of the stream record format.  This number is updated whenever the structure of <code>Record</code> is modified.</p>
   *          <p>Client applications must not assume that <code>eventVersion</code> will remain at a particular
   *       value, as this number is subject to change at any time. In general, <code>eventVersion</code> will
   *       only increase as the low-level DynamoDB Streams API evolves.</p>
   * @public
   */
  eventVersion?: string | undefined;

  /**
   * <p>The Amazon Web Services service from which the stream record originated. For DynamoDB Streams, this is <code>aws:dynamodb</code>.</p>
   * @public
   */
  eventSource?: string | undefined;

  /**
   * <p>The region in which the <code>GetRecords</code> request was received.</p>
   * @public
   */
  awsRegion?: string | undefined;

  /**
   * <p>The main body of the stream record, containing all of the DynamoDB-specific fields.</p>
   * @public
   */
  dynamodb?: StreamRecord | undefined;

  /**
   * <p>Items that are deleted by the Time to Live process after expiration have the following fields: </p>
   *          <ul>
   *             <li>
   *                <p>Records[].userIdentity.type</p>
   *                <p>"Service"</p>
   *             </li>
   *             <li>
   *                <p>Records[].userIdentity.principalId</p>
   *                <p>"dynamodb.amazonaws.com"</p>
   *             </li>
   *          </ul>
   * @public
   */
  userIdentity?: Identity | undefined;
}

/**
 * <p>Represents the output of a <code>GetRecords</code> operation.</p>
 * @public
 */
export interface GetRecordsOutput {
  /**
   * <p>The stream records from the shard, which were retrieved using the shard iterator.</p>
   * @public
   */
  Records?: _Record[] | undefined;

  /**
   * <p>The next position in the shard from which to start sequentially reading stream records. If
   *       set to <code>null</code>, the shard has been closed and the requested iterator will not return
   *       any more data.</p>
   * @public
   */
  NextShardIterator?: string | undefined;
}

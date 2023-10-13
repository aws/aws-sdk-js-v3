// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DynamoDBStreamsServiceException as __BaseException } from "./DynamoDBStreamsServiceException";

/**
 * @public
 * <p>Represents the input of a <code>DescribeStream</code> operation.</p>
 */
export interface DescribeStreamInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the stream.</p>
   */
  StreamArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of shard objects to return. The upper limit is 100.</p>
   */
  Limit?: number;

  /**
   * @public
   * <p>The shard ID of the first item that this operation will evaluate. Use the value that was
   *       returned for <code>LastEvaluatedShardId</code> in the previous operation. </p>
   */
  ExclusiveStartShardId?: string;
}

/**
 * @public
 * @enum
 */
export const KeyType = {
  HASH: "HASH",
  RANGE: "RANGE",
} as const;

/**
 * @public
 */
export type KeyType = (typeof KeyType)[keyof typeof KeyType];

/**
 * @public
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
 */
export interface KeySchemaElement {
  /**
   * @public
   * <p>The name of a key attribute.</p>
   */
  AttributeName: string | undefined;

  /**
   * @public
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
   */
  KeyType: KeyType | undefined;
}

/**
 * @public
 * <p>The beginning and ending sequence numbers for the stream records contained within a shard.</p>
 */
export interface SequenceNumberRange {
  /**
   * @public
   * <p>The first sequence number for the stream records contained within a shard. String contains numeric characters only.</p>
   */
  StartingSequenceNumber?: string;

  /**
   * @public
   * <p>The last sequence number for the stream records contained within a shard. String contains numeric characters only.</p>
   */
  EndingSequenceNumber?: string;
}

/**
 * @public
 * <p>A uniquely identified group of stream records within a stream.</p>
 */
export interface Shard {
  /**
   * @public
   * <p>The system-generated identifier for this shard.</p>
   */
  ShardId?: string;

  /**
   * @public
   * <p>The range of possible sequence numbers for the shard.</p>
   */
  SequenceNumberRange?: SequenceNumberRange;

  /**
   * @public
   * <p>The shard ID of the current shard's parent.</p>
   */
  ParentShardId?: string;
}

/**
 * @public
 * @enum
 */
export const StreamStatus = {
  DISABLED: "DISABLED",
  DISABLING: "DISABLING",
  ENABLED: "ENABLED",
  ENABLING: "ENABLING",
} as const;

/**
 * @public
 */
export type StreamStatus = (typeof StreamStatus)[keyof typeof StreamStatus];

/**
 * @public
 * @enum
 */
export const StreamViewType = {
  KEYS_ONLY: "KEYS_ONLY",
  NEW_AND_OLD_IMAGES: "NEW_AND_OLD_IMAGES",
  NEW_IMAGE: "NEW_IMAGE",
  OLD_IMAGE: "OLD_IMAGE",
} as const;

/**
 * @public
 */
export type StreamViewType = (typeof StreamViewType)[keyof typeof StreamViewType];

/**
 * @public
 * <p>Represents all of the data describing a particular stream.</p>
 */
export interface StreamDescription {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the stream.</p>
   */
  StreamArn?: string;

  /**
   * @public
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
   */
  StreamLabel?: string;

  /**
   * @public
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
   */
  StreamStatus?: StreamStatus;

  /**
   * @public
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
   */
  StreamViewType?: StreamViewType;

  /**
   * @public
   * <p>The date and time when the request to create this stream was issued.</p>
   */
  CreationRequestDateTime?: Date;

  /**
   * @public
   * <p>The DynamoDB table with which the stream is associated.</p>
   */
  TableName?: string;

  /**
   * @public
   * <p>The key attribute(s) of the stream's DynamoDB table.</p>
   */
  KeySchema?: KeySchemaElement[];

  /**
   * @public
   * <p>The shards that comprise the stream.</p>
   */
  Shards?: Shard[];

  /**
   * @public
   * <p>The shard ID of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request.</p>
   *          <p>If <code>LastEvaluatedShardId</code> is empty, then the "last page" of results has been
   *       processed and there is currently no more data to be retrieved.</p>
   *          <p>If <code>LastEvaluatedShardId</code> is not empty, it does not necessarily mean that there is
   *       more data in the result set. The only way to know when you have reached the end of the result
   *       set is when <code>LastEvaluatedShardId</code> is empty.</p>
   */
  LastEvaluatedShardId?: string;
}

/**
 * @public
 * <p>Represents the output of a <code>DescribeStream</code> operation.</p>
 */
export interface DescribeStreamOutput {
  /**
   * @public
   * <p>A complete description of the stream, including its creation date and time, the DynamoDB table associated with the stream, the shard IDs within the stream, and the beginning and ending sequence numbers of stream records within the shards.</p>
   */
  StreamDescription?: StreamDescription;
}

/**
 * @public
 * <p>An error occurred on the server side.</p>
 */
export class InternalServerError extends __BaseException {
  readonly name: "InternalServerError" = "InternalServerError";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerError, __BaseException>) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }
}

/**
 * @public
 * <p>The operation tried to access a nonexistent table or index. The resource
 *             might not be specified correctly, or its status might not be
 *             <code>ACTIVE</code>.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * @public
 * <p>The shard iterator has expired and can no longer be used to retrieve stream records. A shard
 *       iterator expires 15 minutes after it is retrieved using the <code>GetShardIterator</code>
 *       action.</p>
 */
export class ExpiredIteratorException extends __BaseException {
  readonly name: "ExpiredIteratorException" = "ExpiredIteratorException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExpiredIteratorException, __BaseException>) {
    super({
      name: "ExpiredIteratorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExpiredIteratorException.prototype);
  }
}

/**
 * @public
 * <p>Represents the input of a <code>GetRecords</code> operation.</p>
 */
export interface GetRecordsInput {
  /**
   * @public
   * <p>A shard iterator that was retrieved from a previous GetShardIterator operation. This iterator can be used to access the stream records in this shard.</p>
   */
  ShardIterator: string | undefined;

  /**
   * @public
   * <p>The maximum number of records to return from the shard. The upper limit is 1000.</p>
   */
  Limit?: number;
}

/**
 * @public
 * @enum
 */
export const OperationType = {
  INSERT: "INSERT",
  MODIFY: "MODIFY",
  REMOVE: "REMOVE",
} as const;

/**
 * @public
 */
export type OperationType = (typeof OperationType)[keyof typeof OperationType];

/**
 * @public
 * <p>Contains details about the type of identity that made the request.</p>
 */
export interface Identity {
  /**
   * @public
   * <p>A unique identifier for the entity that made the call. For Time To Live, the
   *       principalId is "dynamodb.amazonaws.com".</p>
   */
  PrincipalId?: string;

  /**
   * @public
   * <p>The type of the identity. For Time To Live, the type is "Service".</p>
   */
  Type?: string;
}

/**
 * @public
 * <p>There is no limit to the number of daily on-demand backups that can be taken. </p>
 *          <p>For most purposes, up to 500 simultaneous table operations are allowed per account. These operations
 *           include <code>CreateTable</code>, <code>UpdateTable</code>,
 *           <code>DeleteTable</code>,<code>UpdateTimeToLive</code>,
 *           <code>RestoreTableFromBackup</code>, and <code>RestoreTableToPointInTime</code>. </p>
 *          <p>When you are creating a table with one or more secondary
 *           indexes, you can have up to 250 such requests running at a time. However, if the table or
 *           index specifications are complex, then DynamoDB might temporarily reduce the number
 *           of concurrent operations.</p>
 *          <p>When importing into DynamoDB, up to 50 simultaneous import table operations are allowed per account.</p>
 *          <p>There is a soft account quota of 2,500 tables.</p>
 *          <p>GetRecords was called with a value of more than 1000 for the limit request parameter.</p>
 *          <p>More than 2 processes are reading from the same streams shard at the same time. Exceeding
 *           this limit may result in request throttling.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * @public
 * <p>The operation attempted to read past the oldest stream record in a shard.</p>
 *          <p>In DynamoDB Streams, there is a 24 hour limit on data retention. Stream records whose age exceeds this limit are subject to removal (trimming) from the stream. You might receive a TrimmedDataAccessException if:</p>
 *          <ul>
 *             <li>
 *                <p>You request a shard iterator with a sequence number older than the trim point (24 hours).</p>
 *             </li>
 *             <li>
 *                <p>You obtain a shard iterator, but before you use the iterator in a <code>GetRecords</code>
 *         request, a stream record in the shard exceeds the 24 hour period and is trimmed. This causes
 *         the iterator to access a record that no longer exists.</p>
 *             </li>
 *          </ul>
 */
export class TrimmedDataAccessException extends __BaseException {
  readonly name: "TrimmedDataAccessException" = "TrimmedDataAccessException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TrimmedDataAccessException, __BaseException>) {
    super({
      name: "TrimmedDataAccessException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TrimmedDataAccessException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ShardIteratorType = {
  AFTER_SEQUENCE_NUMBER: "AFTER_SEQUENCE_NUMBER",
  AT_SEQUENCE_NUMBER: "AT_SEQUENCE_NUMBER",
  LATEST: "LATEST",
  TRIM_HORIZON: "TRIM_HORIZON",
} as const;

/**
 * @public
 */
export type ShardIteratorType = (typeof ShardIteratorType)[keyof typeof ShardIteratorType];

/**
 * @public
 * <p>Represents the input of a <code>GetShardIterator</code> operation.</p>
 */
export interface GetShardIteratorInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the stream.</p>
   */
  StreamArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the shard. The iterator will be returned for this shard ID.</p>
   */
  ShardId: string | undefined;

  /**
   * @public
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
   */
  ShardIteratorType: ShardIteratorType | undefined;

  /**
   * @public
   * <p>The sequence number of a stream record in the shard from which to start reading.</p>
   */
  SequenceNumber?: string;
}

/**
 * @public
 * <p>Represents the output of a <code>GetShardIterator</code> operation.</p>
 */
export interface GetShardIteratorOutput {
  /**
   * @public
   * <p>The position in the shard from which to start reading stream records sequentially. A shard iterator specifies this position using the sequence number of a stream record in a shard.</p>
   */
  ShardIterator?: string;
}

/**
 * @public
 * <p>Represents the input of a <code>ListStreams</code> operation.</p>
 */
export interface ListStreamsInput {
  /**
   * @public
   * <p>If this parameter is provided, then only the streams associated with this table name are returned.</p>
   */
  TableName?: string;

  /**
   * @public
   * <p>The maximum number of streams to return. The upper limit is 100.</p>
   */
  Limit?: number;

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) of the first item that this operation will evaluate. Use the
   *       value that was returned for <code>LastEvaluatedStreamArn</code> in the previous operation.
   *     </p>
   */
  ExclusiveStartStreamArn?: string;
}

/**
 * @public
 * <p>Represents all of the data describing a particular stream.</p>
 */
export interface _Stream {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the stream.</p>
   */
  StreamArn?: string;

  /**
   * @public
   * <p>The DynamoDB table with which the stream is associated.</p>
   */
  TableName?: string;

  /**
   * @public
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
   */
  StreamLabel?: string;
}

/**
 * @public
 * <p>Represents the output of a <code>ListStreams</code> operation.</p>
 */
export interface ListStreamsOutput {
  /**
   * @public
   * <p>A list of stream descriptors associated with the current account and endpoint.</p>
   */
  Streams?: _Stream[];

  /**
   * @public
   * <p>The stream ARN of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request.</p>
   *          <p>If <code>LastEvaluatedStreamArn</code> is empty, then the "last page" of results has been
   *       processed and there is no more data to be retrieved.</p>
   *          <p>If <code>LastEvaluatedStreamArn</code> is not empty, it does not necessarily mean that there
   *       is more data in the result set. The only way to know when you have reached the end of the
   *       result set is when <code>LastEvaluatedStreamArn</code> is empty.</p>
   */
  LastEvaluatedStreamArn?: string;
}

/**
 * @public
 * <p>Represents the data for an attribute.</p>
 *          <p>Each attribute value is described as a name-value pair.  The name is the data type, and the value is the data itself.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the
 *                              <i>Amazon DynamoDB Developer Guide</i>.</p>
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
   * @public
   * <p>An attribute of type  String. For example:</p>
   *          <p>
   *             <code>"S": "Hello"</code>
   *          </p>
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
   * @public
   * <p>An attribute of type Number. For example:</p>
   *          <p>
   *             <code>"N": "123.45"</code>
   *          </p>
   *          <p>Numbers are sent across the network to DynamoDB as strings, to maximize compatibility across languages and libraries. However, DynamoDB treats them as number type attributes for mathematical operations.</p>
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
   * @public
   * <p>An attribute of type Binary.  For example:</p>
   *          <p>
   *             <code>"B": "dGhpcyB0ZXh0IGlzIGJhc2U2NC1lbmNvZGVk"</code>
   *          </p>
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
   * @public
   * <p>An attribute of type String Set.  For example:</p>
   *          <p>
   *             <code>"SS": ["Giraffe", "Hippo" ,"Zebra"]</code>
   *          </p>
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
   * @public
   * <p>An attribute of type Number Set.  For example:</p>
   *          <p>
   *             <code>"NS": ["42.2", "-19", "7.5", "3.14"]</code>
   *          </p>
   *          <p>Numbers are sent across the network to DynamoDB as strings, to maximize compatibility across languages and libraries. However, DynamoDB treats them as number type attributes for mathematical operations.</p>
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
   * @public
   * <p>An attribute of type Binary Set.  For example:</p>
   *          <p>
   *             <code>"BS": ["U3Vubnk=", "UmFpbnk=", "U25vd3k="]</code>
   *          </p>
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
   * @public
   * <p>An attribute of type Map.  For example:</p>
   *          <p>
   *             <code>"M": \{"Name": \{"S": "Joe"\}, "Age": \{"N": "35"\}\}</code>
   *          </p>
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
   * @public
   * <p>An attribute of type List.  For example:</p>
   *          <p>
   *             <code>"L": [ \{"S": "Cookies"\} , \{"S": "Coffee"\}, \{"N": "3.14159"\}]</code>
   *          </p>
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
   * @public
   * <p>An attribute of type Null.  For example:</p>
   *          <p>
   *             <code>"NULL": true</code>
   *          </p>
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
   * @public
   * <p>An attribute of type Boolean.  For example:</p>
   *          <p>
   *             <code>"BOOL": true</code>
   *          </p>
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

  export const visit = <T>(value: AttributeValue, visitor: Visitor<T>): T => {
    if (value.S !== undefined) return visitor.S(value.S);
    if (value.N !== undefined) return visitor.N(value.N);
    if (value.B !== undefined) return visitor.B(value.B);
    if (value.SS !== undefined) return visitor.SS(value.SS);
    if (value.NS !== undefined) return visitor.NS(value.NS);
    if (value.BS !== undefined) return visitor.BS(value.BS);
    if (value.M !== undefined) return visitor.M(value.M);
    if (value.L !== undefined) return visitor.L(value.L);
    if (value.NULL !== undefined) return visitor.NULL(value.NULL);
    if (value.BOOL !== undefined) return visitor.BOOL(value.BOOL);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>A description of a single data modification that was performed on an item in a DynamoDB table.</p>
 */
export interface StreamRecord {
  /**
   * @public
   * <p>The approximate date and time when the stream record was created, in <a href="http://www.epochconverter.com/">UNIX epoch time</a> format and rounded down to the closest second.</p>
   */
  ApproximateCreationDateTime?: Date;

  /**
   * @public
   * <p>The primary key attribute(s) for the DynamoDB item that was modified.</p>
   */
  Keys?: Record<string, AttributeValue>;

  /**
   * @public
   * <p>The item in the DynamoDB table as it appeared after it was modified.</p>
   */
  NewImage?: Record<string, AttributeValue>;

  /**
   * @public
   * <p>The item in the DynamoDB table as it appeared before it was modified.</p>
   */
  OldImage?: Record<string, AttributeValue>;

  /**
   * @public
   * <p>The sequence number of the stream record.</p>
   */
  SequenceNumber?: string;

  /**
   * @public
   * <p>The size of the stream record, in bytes.</p>
   */
  SizeBytes?: number;

  /**
   * @public
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
   */
  StreamViewType?: StreamViewType;
}

/**
 * @public
 * <p>A description of a unique event within a stream.</p>
 */
export interface _Record {
  /**
   * @public
   * <p>A globally unique identifier for the event that was recorded in this stream record.</p>
   */
  eventID?: string;

  /**
   * @public
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
   */
  eventName?: OperationType;

  /**
   * @public
   * <p>The version number of the stream record format.  This number is updated whenever the structure of <code>Record</code> is modified.</p>
   *          <p>Client applications must not assume that <code>eventVersion</code> will remain at a particular
   *       value, as this number is subject to change at any time. In general, <code>eventVersion</code> will
   *       only increase as the low-level DynamoDB Streams API evolves.</p>
   */
  eventVersion?: string;

  /**
   * @public
   * <p>The Amazon Web Services service from which the stream record originated. For DynamoDB Streams, this is <code>aws:dynamodb</code>.</p>
   */
  eventSource?: string;

  /**
   * @public
   * <p>The region in which the <code>GetRecords</code> request was received.</p>
   */
  awsRegion?: string;

  /**
   * @public
   * <p>The main body of the stream record, containing all of the DynamoDB-specific fields.</p>
   */
  dynamodb?: StreamRecord;

  /**
   * @public
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
   */
  userIdentity?: Identity;
}

/**
 * @public
 * <p>Represents the output of a <code>GetRecords</code> operation.</p>
 */
export interface GetRecordsOutput {
  /**
   * @public
   * <p>The stream records from the shard, which were retrieved using the shard iterator.</p>
   */
  Records?: _Record[];

  /**
   * @public
   * <p>The next position in the shard from which to start sequentially reading stream records. If
   *       set to <code>null</code>, the shard has been closed and the requested iterator will not return
   *       any more data.</p>
   */
  NextShardIterator?: string;
}

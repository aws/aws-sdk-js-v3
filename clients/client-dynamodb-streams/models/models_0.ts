import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Represents the input of a <code>DescribeStream</code> operation.</p>
 */
export interface DescribeStreamInput {
  /**
   * <p>The Amazon Resource Name (ARN) for the stream.</p>
   */
  StreamArn: string | undefined;

  /**
   * <p>The maximum number of shard objects to return. The upper limit is 100.</p>
   */
  Limit?: number;

  /**
   * <p>The shard ID of the first item that this operation will evaluate. Use the value that was
   *       returned for <code>LastEvaluatedShardId</code> in the previous operation. </p>
   */
  ExclusiveStartShardId?: string;
}

export namespace DescribeStreamInput {
  export const filterSensitiveLog = (obj: DescribeStreamInput): any => ({
    ...obj,
  });
}

export type KeyType = "HASH" | "RANGE";

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
 */
export interface KeySchemaElement {
  /**
   * <p>The name of a key attribute.</p>
   */
  AttributeName: string | undefined;

  /**
   * <p>The role that this key attribute will assume:</p>
   *          <ul>
   *             <li>
   *               <p>
   *                   <code>HASH</code> - partition key</p>
   *             </li>
   *             <li>
   *               <p>
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
  KeyType: KeyType | string | undefined;
}

export namespace KeySchemaElement {
  export const filterSensitiveLog = (obj: KeySchemaElement): any => ({
    ...obj,
  });
}

/**
 * <p>The beginning and ending sequence numbers for the stream records contained within a shard.</p>
 */
export interface SequenceNumberRange {
  /**
   * <p>The first sequence number for the stream records contained within a shard. String contains numeric characters only.</p>
   */
  StartingSequenceNumber?: string;

  /**
   * <p>The last sequence number for the stream records contained within a shard. String contains numeric characters only.</p>
   */
  EndingSequenceNumber?: string;
}

export namespace SequenceNumberRange {
  export const filterSensitiveLog = (obj: SequenceNumberRange): any => ({
    ...obj,
  });
}

/**
 * <p>A uniquely identified group of stream records within a stream.</p>
 */
export interface Shard {
  /**
   * <p>The system-generated identifier for this shard.</p>
   */
  ShardId?: string;

  /**
   * <p>The range of possible sequence numbers for the shard.</p>
   */
  SequenceNumberRange?: SequenceNumberRange;

  /**
   * <p>The shard ID of the current shard's parent.</p>
   */
  ParentShardId?: string;
}

export namespace Shard {
  export const filterSensitiveLog = (obj: Shard): any => ({
    ...obj,
  });
}

export type StreamStatus = "DISABLED" | "DISABLING" | "ENABLED" | "ENABLING";

export type StreamViewType = "KEYS_ONLY" | "NEW_AND_OLD_IMAGES" | "NEW_IMAGE" | "OLD_IMAGE";

/**
 * <p>Represents all of the data describing a particular stream.</p>
 */
export interface StreamDescription {
  /**
   * <p>The Amazon Resource Name (ARN) for the stream.</p>
   */
  StreamArn?: string;

  /**
   * <p>A timestamp, in ISO 8601 format, for this stream.</p>
   *          <p>Note that <code>LatestStreamLabel</code> is not a unique identifier for the stream, because it is
   *       possible that a stream from another table might have the same timestamp. However, the
   *       combination of the following three elements is guaranteed to be unique:</p>
   *          <ul>
   *             <li>
   *                <p>the AWS customer ID.</p>
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
  StreamStatus?: StreamStatus | string;

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
   */
  StreamViewType?: StreamViewType | string;

  /**
   * <p>The date and time when the request to create this stream was issued.</p>
   */
  CreationRequestDateTime?: Date;

  /**
   * <p>The DynamoDB table with which the stream is associated.</p>
   */
  TableName?: string;

  /**
   * <p>The key attribute(s) of the stream's DynamoDB table.</p>
   */
  KeySchema?: KeySchemaElement[];

  /**
   * <p>The shards that comprise the stream.</p>
   */
  Shards?: Shard[];

  /**
   * <p>The shard ID of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request.</p>
   *          <p>If <code>LastEvaluatedShardId</code> is empty, then the "last page" of results has been
   *       processed and there is currently no more data to be retrieved.</p>
   *          <p>If <code>LastEvaluatedShardId</code> is not empty, it does not necessarily mean that there is
   *       more data in the result set. The only way to know when you have reached the end of the result
   *       set is when <code>LastEvaluatedShardId</code> is empty.</p>
   */
  LastEvaluatedShardId?: string;
}

export namespace StreamDescription {
  export const filterSensitiveLog = (obj: StreamDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a <code>DescribeStream</code> operation.</p>
 */
export interface DescribeStreamOutput {
  /**
   * <p>A complete description of the stream, including its creation date and time, the DynamoDB table associated with the stream, the shard IDs within the stream, and the beginning and ending sequence numbers of stream records within the shards.</p>
   */
  StreamDescription?: StreamDescription;
}

export namespace DescribeStreamOutput {
  export const filterSensitiveLog = (obj: DescribeStreamOutput): any => ({
    ...obj,
  });
}

/**
 * <p>An error occurred on the server side.</p>
 */
export interface InternalServerError extends __SmithyException, $MetadataBearer {
  name: "InternalServerError";
  $fault: "server";
  /**
   * <p>The server encountered an internal error trying to fulfill the request.</p>
   */
  message?: string;
}

export namespace InternalServerError {
  export const filterSensitiveLog = (obj: InternalServerError): any => ({
    ...obj,
  });
}

/**
 * <p>The operation tried to access a nonexistent table or index. The resource
 *             might not be specified correctly, or its status might not be
 *             <code>ACTIVE</code>.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The resource which is being requested does not exist.</p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The shard iterator has expired and can no longer be used to retrieve stream records. A shard
 *       iterator expires 15 minutes after it is retrieved using the <code>GetShardIterator</code>
 *       action.</p>
 */
export interface ExpiredIteratorException extends __SmithyException, $MetadataBearer {
  name: "ExpiredIteratorException";
  $fault: "client";
  /**
   * <p>The provided iterator exceeds the maximum age allowed.</p>
   */
  message?: string;
}

export namespace ExpiredIteratorException {
  export const filterSensitiveLog = (obj: ExpiredIteratorException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a <code>GetRecords</code> operation.</p>
 */
export interface GetRecordsInput {
  /**
   * <p>A shard iterator that was retrieved from a previous GetShardIterator operation. This iterator can be used to access the stream records in this shard.</p>
   */
  ShardIterator: string | undefined;

  /**
   * <p>The maximum number of records to return from the shard. The upper limit is 1000.</p>
   */
  Limit?: number;
}

export namespace GetRecordsInput {
  export const filterSensitiveLog = (obj: GetRecordsInput): any => ({
    ...obj,
  });
}

export type OperationType = "INSERT" | "MODIFY" | "REMOVE";

/**
 * <p>Contains details about the type of identity that made the request.</p>
 */
export interface Identity {
  /**
   * <p>A unique identifier for the entity that made the call. For Time To Live, the
   *       principalId is "dynamodb.amazonaws.com".</p>
   */
  PrincipalId?: string;

  /**
   * <p>The type of the identity. For Time To Live, the type is "Service".</p>
   */
  Type?: string;
}

export namespace Identity {
  export const filterSensitiveLog = (obj: Identity): any => ({
    ...obj,
  });
}

/**
 * <p>There is no limit to the number of daily on-demand backups that can be
 *             taken.</p>
 *          <p>Up to 50 simultaneous table operations are allowed per account. These operations
 *             include <code>CreateTable</code>, <code>UpdateTable</code>,
 *                 <code>DeleteTable</code>,<code>UpdateTimeToLive</code>,
 *                 <code>RestoreTableFromBackup</code>, and
 *             <code>RestoreTableToPointInTime</code>.</p>
 *          <p>The only exception is when you are creating a table with one or more secondary
 *             indexes. You can have up to 25 such requests running at a time; however, if the table or
 *             index specifications are complex, DynamoDB might temporarily reduce the number of
 *             concurrent operations.</p>
 *          <p>There is a soft account quota of 256 tables.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>Too many operations for a given subscriber.</p>
   */
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
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
export interface TrimmedDataAccessException extends __SmithyException, $MetadataBearer {
  name: "TrimmedDataAccessException";
  $fault: "client";
  /**
   * <p>"The data you are trying to access has been trimmed.</p>
   */
  message?: string;
}

export namespace TrimmedDataAccessException {
  export const filterSensitiveLog = (obj: TrimmedDataAccessException): any => ({
    ...obj,
  });
}

export type ShardIteratorType = "AFTER_SEQUENCE_NUMBER" | "AT_SEQUENCE_NUMBER" | "LATEST" | "TRIM_HORIZON";

/**
 * <p>Represents the input of a <code>GetShardIterator</code> operation.</p>
 */
export interface GetShardIteratorInput {
  /**
   * <p>The Amazon Resource Name (ARN) for the stream.</p>
   */
  StreamArn: string | undefined;

  /**
   * <p>The identifier of the shard. The iterator will be returned for this shard ID.</p>
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
   */
  ShardIteratorType: ShardIteratorType | string | undefined;

  /**
   * <p>The sequence number of a stream record in the shard from which to start reading.</p>
   */
  SequenceNumber?: string;
}

export namespace GetShardIteratorInput {
  export const filterSensitiveLog = (obj: GetShardIteratorInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a <code>GetShardIterator</code> operation.</p>
 */
export interface GetShardIteratorOutput {
  /**
   * <p>The position in the shard from which to start reading stream records sequentially. A shard iterator specifies this position using the sequence number of a stream record in a shard.</p>
   */
  ShardIterator?: string;
}

export namespace GetShardIteratorOutput {
  export const filterSensitiveLog = (obj: GetShardIteratorOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a <code>ListStreams</code> operation.</p>
 */
export interface ListStreamsInput {
  /**
   * <p>If this parameter is provided, then only the streams associated with this table name are returned.</p>
   */
  TableName?: string;

  /**
   * <p>The maximum number of streams to return. The upper limit is 100.</p>
   */
  Limit?: number;

  /**
   * <p>The ARN (Amazon Resource Name) of the first item that this operation will evaluate. Use the
   *       value that was returned for <code>LastEvaluatedStreamArn</code> in the previous operation.
   *     </p>
   */
  ExclusiveStartStreamArn?: string;
}

export namespace ListStreamsInput {
  export const filterSensitiveLog = (obj: ListStreamsInput): any => ({
    ...obj,
  });
}

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
   * <p>A timestamp, in ISO 8601 format, for this stream.</p>
   *          <p>Note that <code>LatestStreamLabel</code> is not a unique identifier for the stream, because it is
   *       possible that a stream from another table might have the same timestamp. However, the
   *       combination of the following three elements is guaranteed to be unique:</p>
   *          <ul>
   *             <li>
   *                <p>the AWS customer ID.</p>
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

export namespace _Stream {
  export const filterSensitiveLog = (obj: _Stream): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a <code>ListStreams</code> operation.</p>
 */
export interface ListStreamsOutput {
  /**
   * <p>A list of stream descriptors associated with the current account and endpoint.</p>
   */
  Streams?: _Stream[];

  /**
   * <p>The stream ARN of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request.</p>
   *          <p>If <code>LastEvaluatedStreamArn</code> is empty, then the "last page" of results has been
   *       processed and there is no more data to be retrieved.</p>
   *          <p>If <code>LastEvaluatedStreamArn</code> is not empty, it does not necessarily mean that there
   *       is more data in the result set. The only way to know when you have reached the end of the
   *       result set is when <code>LastEvaluatedStreamArn</code> is empty.</p>
   */
  LastEvaluatedStreamArn?: string;
}

export namespace ListStreamsOutput {
  export const filterSensitiveLog = (obj: ListStreamsOutput): any => ({
    ...obj,
  });
}

/**
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

export namespace AttributeValue {
  /**
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
   * <p>An attribute of type Map.  For example:</p>
   *          <p>
   *             <code>"M": {"Name": {"S": "Joe"}, "Age": {"N": "35"}}</code>
   *          </p>
   */
  export interface MMember {
    S?: never;
    N?: never;
    B?: never;
    SS?: never;
    NS?: never;
    BS?: never;
    M: { [key: string]: AttributeValue };
    L?: never;
    NULL?: never;
    BOOL?: never;
    $unknown?: never;
  }

  /**
   * <p>An attribute of type List.  For example:</p>
   *          <p>
   *             <code>"L": [ {"S": "Cookies"} , {"S": "Coffee"}, {"N", "3.14159"}]</code>
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
    M: (value: { [key: string]: AttributeValue }) => T;
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

  export const filterSensitiveLog = (obj: AttributeValue): any => {
    if (obj.S !== undefined) return { S: obj.S };
    if (obj.N !== undefined) return { N: obj.N };
    if (obj.B !== undefined) return { B: obj.B };
    if (obj.SS !== undefined) return { SS: obj.SS };
    if (obj.NS !== undefined) return { NS: obj.NS };
    if (obj.BS !== undefined) return { BS: obj.BS };
    if (obj.M !== undefined)
      return {
        M: Object.entries(obj.M).reduce(
          (acc: any, [key, value]: [string, AttributeValue]) => ({
            ...acc,
            [key]: AttributeValue.filterSensitiveLog(value),
          }),
          {}
        ),
      };
    if (obj.L !== undefined) return { L: obj.L.map((item) => AttributeValue.filterSensitiveLog(item)) };
    if (obj.NULL !== undefined) return { NULL: obj.NULL };
    if (obj.BOOL !== undefined) return { BOOL: obj.BOOL };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>A description of a single data modification that was performed on an item in a DynamoDB table.</p>
 */
export interface StreamRecord {
  /**
   * <p>The approximate date and time when the stream record was created, in <a href="http://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  ApproximateCreationDateTime?: Date;

  /**
   * <p>The primary key attribute(s) for the DynamoDB item that was modified.</p>
   */
  Keys?: { [key: string]: AttributeValue };

  /**
   * <p>The item in the DynamoDB table as it appeared after it was modified.</p>
   */
  NewImage?: { [key: string]: AttributeValue };

  /**
   * <p>The item in the DynamoDB table as it appeared before it was modified.</p>
   */
  OldImage?: { [key: string]: AttributeValue };

  /**
   * <p>The sequence number of the stream record.</p>
   */
  SequenceNumber?: string;

  /**
   * <p>The size of the stream record, in bytes.</p>
   */
  SizeBytes?: number;

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
   */
  StreamViewType?: StreamViewType | string;
}

export namespace StreamRecord {
  export const filterSensitiveLog = (obj: StreamRecord): any => ({
    ...obj,
    ...(obj.Keys && {
      Keys: Object.entries(obj.Keys).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
    ...(obj.NewImage && {
      NewImage: Object.entries(obj.NewImage).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
    ...(obj.OldImage && {
      OldImage: Object.entries(obj.OldImage).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

/**
 * <p>A description of a unique event within a stream.</p>
 */
export interface _Record {
  /**
   * <p>A globally unique identifier for the event that was recorded in this stream record.</p>
   */
  eventID?: string;

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
   */
  eventName?: OperationType | string;

  /**
   * <p>The version number of the stream record format.  This number is updated whenever the structure of <code>Record</code> is modified.</p>
   *          <p>Client applications must not assume that <code>eventVersion</code> will remain at a particular
   *       value, as this number is subject to change at any time. In general, <code>eventVersion</code> will
   *       only increase as the low-level DynamoDB Streams API evolves.</p>
   */
  eventVersion?: string;

  /**
   * <p>The AWS service from which the stream record originated.  For DynamoDB Streams, this is <code>aws:dynamodb</code>.</p>
   */
  eventSource?: string;

  /**
   * <p>The region in which the <code>GetRecords</code> request was received.</p>
   */
  awsRegion?: string;

  /**
   * <p>The main body of the stream record, containing all of the DynamoDB-specific fields.</p>
   */
  dynamodb?: StreamRecord;

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
   */
  userIdentity?: Identity;
}

export namespace _Record {
  export const filterSensitiveLog = (obj: _Record): any => ({
    ...obj,
    ...(obj.dynamodb && { dynamodb: StreamRecord.filterSensitiveLog(obj.dynamodb) }),
  });
}

/**
 * <p>Represents the output of a <code>GetRecords</code> operation.</p>
 */
export interface GetRecordsOutput {
  /**
   * <p>The stream records from the shard, which were retrieved using the shard iterator.</p>
   */
  Records?: _Record[];

  /**
   * <p>The next position in the shard from which to start sequentially reading stream records. If
   *       set to <code>null</code>, the shard has been closed and the requested iterator will not return
   *       any more data.</p>
   */
  NextShardIterator?: string;
}

export namespace GetRecordsOutput {
  export const filterSensitiveLog = (obj: GetRecordsOutput): any => ({
    ...obj,
    ...(obj.Records && { Records: obj.Records.map((item) => _Record.filterSensitiveLog(item)) }),
  });
}

// smithy-typescript generated code
import { OriginType, ShardFilterType, ShardIteratorType, StreamStatus, StreamViewType } from "./enums";

/**
 * @public
 */
export interface GetRecordsInput {
  /**
   * <p> The unique identifier of the shard iterator. A shard iterator specifies the position in the shard from which you want to start reading data records sequentially. You obtain this value by calling the <code>GetShardIterator</code> operation. Each shard iterator is valid for 15 minutes after creation. </p>
   * @public
   */
  shardIterator: string | undefined;

  /**
   * <p> The maximum number of records to return in a single <code>GetRecords</code> request. Default value is 1000. You can specify a limit between 1 and 1000, but the actual number returned might be less than the specified maximum if the size of the data for the returned records exceeds the internal size limit. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains metadata information associated with Amazon Keyspaces cells and rows.</p>
 * @public
 */
export interface KeyspacesMetadata {
  /**
   * <p>The time at which the associated data will expire, based on the time-to-live (TTL) setting.</p>
   * @public
   */
  expirationTime?: string | undefined;

  /**
   * <p>The timestamp at which the associated data was written to the database.</p>
   * @public
   */
  writeTime?: string | undefined;
}

/**
 * @public
 */
export interface GetShardIteratorInput {
  /**
   * <p> The Amazon Resource Name (ARN) of the stream for which to get the shard iterator. The ARN uniquely identifies the stream within Amazon Keyspaces. </p>
   * @public
   */
  streamArn: string | undefined;

  /**
   * <p> The identifier of the shard within the stream. The shard ID uniquely identifies a subset of the stream's data records that you want to access. </p>
   * @public
   */
  shardId: string | undefined;

  /**
   * <p> Determines how the shard iterator is positioned. Must be one of the following:</p> <ul> <li> <p> <code>TRIM_HORIZON</code> - Start reading at the last untrimmed record in the shard, which is the oldest data record in the shard.</p> </li> <li> <p> <code>AT_SEQUENCE_NUMBER</code> - Start reading exactly from the specified sequence number.</p> </li> <li> <p> <code>AFTER_SEQUENCE_NUMBER</code> - Start reading right after the specified sequence number.</p> </li> <li> <p> <code>LATEST</code> - Start reading just after the most recent record in the shard, so that you always read the most recent data.</p> </li> </ul>
   * @public
   */
  shardIteratorType: ShardIteratorType | undefined;

  /**
   * <p> The sequence number of the data record in the shard from which to start reading. Required if <code>ShardIteratorType</code> is <code>AT_SEQUENCE_NUMBER</code> or <code>AFTER_SEQUENCE_NUMBER</code>. This parameter is ignored for other iterator types. </p>
   * @public
   */
  sequenceNumber?: string | undefined;
}

/**
 * @public
 */
export interface GetShardIteratorOutput {
  /**
   * <p> The unique identifier for the shard iterator. This value is used in the <code>GetRecords</code> operation to retrieve data records from the specified shard. Each shard iterator expires 15 minutes after it is returned to the requester. </p>
   * @public
   */
  shardIterator?: string | undefined;
}

/**
 * <p>A filter used to limit the shards returned by a <code>GetStream</code> operation.</p>
 * @public
 */
export interface ShardFilter {
  /**
   * <p>The type of shard filter to use, which determines how the shardId parameter is interpreted.</p>
   * @public
   */
  type?: ShardFilterType | undefined;

  /**
   * <p>The identifier of a specific shard used to filter results based on the specified filter type.</p>
   * @public
   */
  shardId?: string | undefined;
}

/**
 * @public
 */
export interface GetStreamInput {
  /**
   * <p> The Amazon Resource Name (ARN) of the stream for which detailed information is requested. This uniquely identifies the specific stream you want to get information about. </p>
   * @public
   */
  streamArn: string | undefined;

  /**
   * <p> The maximum number of shard objects to return in a single <code>GetStream</code> request. Default value is 100. The minimum value is 1 and the maximum value is 100. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> Optional filter criteria to apply when retrieving shards. You can filter shards based on their state or other attributes to narrow down the results returned by the <code>GetStream</code> operation. </p>
   * @public
   */
  shardFilter?: ShardFilter | undefined;

  /**
   * <p> An optional pagination token provided by a previous <code>GetStream</code> operation. If this parameter is specified, the response includes only records beyond the token, up to the value specified by <code>maxResults</code>. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Defines a range of sequence numbers within a change data capture stream's shard for Amazon Keyspaces.</p>
 * @public
 */
export interface SequenceNumberRange {
  /**
   * <p>The starting sequence number of the range.</p>
   * @public
   */
  startingSequenceNumber?: string | undefined;

  /**
   * <p>The ending sequence number of the range, which may be null for open-ended ranges.</p>
   * @public
   */
  endingSequenceNumber?: string | undefined;
}

/**
 * <p>Represents a uniquely identified group of change records within a change data capture stream for Amazon Keyspaces.</p>
 * @public
 */
export interface Shard {
  /**
   * <p>A unique identifier for this shard within the stream.</p>
   * @public
   */
  shardId?: string | undefined;

  /**
   * <p>The range of sequence numbers contained within this shard.</p>
   * @public
   */
  sequenceNumberRange?: SequenceNumberRange | undefined;

  /**
   * <p>The identifiers of parent shards that this shard evolved from, if this shard was created through resharding.</p>
   * @public
   */
  parentShardIds?: string[] | undefined;
}

/**
 * @public
 */
export interface GetStreamOutput {
  /**
   * <p> The Amazon Resource Name (ARN) that uniquely identifies the stream within Amazon Keyspaces. This ARN can be used in other API operations to reference this specific stream. </p>
   * @public
   */
  streamArn: string | undefined;

  /**
   * <p> A timestamp that serves as a unique identifier for this stream, used for debugging and monitoring purposes. The stream label represents the point in time when the stream was created. </p>
   * @public
   */
  streamLabel: string | undefined;

  /**
   * <p> The current status of the stream. Values can be <code>ENABLING</code>, <code>ENABLED</code>, <code>DISABLING</code>, or <code>DISABLED</code>. Operations on the stream depend on its current status. </p>
   * @public
   */
  streamStatus: StreamStatus | undefined;

  /**
   * <p> The format of the data records in this stream. Currently, this can be one of the following options:</p> <ul> <li> <p> <code>NEW_AND_OLD_IMAGES</code> - both versions of the row, before and after the change. This is the default.</p> </li> <li> <p> <code>NEW_IMAGE</code> - the version of the row after the change.</p> </li> <li> <p> <code>OLD_IMAGE</code> - the version of the row before the change.</p> </li> <li> <p> <code>KEYS_ONLY</code> - the partition and clustering keys of the row that was changed.</p> </li> </ul>
   * @public
   */
  streamViewType: StreamViewType | undefined;

  /**
   * <p> The date and time when the request to create this stream was issued. The value is represented in ISO 8601 format. </p>
   * @public
   */
  creationRequestDateTime: Date | undefined;

  /**
   * <p> The name of the keyspace containing the table associated with this stream. The keyspace name is part of the table's hierarchical identifier in Amazon Keyspaces. </p>
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * <p> The name of the table associated with this stream. The stream captures changes to rows in this Amazon Keyspaces table. </p>
   * @public
   */
  tableName: string | undefined;

  /**
   * <p> An array of shard objects associated with this stream. Each shard contains a subset of the stream's data records and has its own unique identifier. The collection of shards represents the complete stream data. </p>
   * @public
   */
  shards?: Shard[] | undefined;

  /**
   * <p> A pagination token that can be used in a subsequent <code>GetStream</code> request. This token is returned if the response contains more shards than can be returned in a single response. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStreamsInput {
  /**
   * <p> The name of the keyspace for which to list streams. If specified, only streams associated with tables in this keyspace are returned. If omitted, streams from all keyspaces are included in the results. </p>
   * @public
   */
  keyspaceName?: string | undefined;

  /**
   * <p> The name of the table for which to list streams. Must be used together with <code>keyspaceName</code>. If specified, only streams associated with this specific table are returned. </p>
   * @public
   */
  tableName?: string | undefined;

  /**
   * <p> The maximum number of streams to return in a single <code>ListStreams</code> request. Default value is 100. The minimum value is 1 and the maximum value is 100. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> An optional pagination token provided by a previous <code>ListStreams</code> operation. If this parameter is specified, the response includes only records beyond the token, up to the value specified by <code>maxResults</code>. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents a change data capture stream for an Amazon Keyspaces table, which enables tracking and processing of data changes.</p>
 * @public
 */
export interface _Stream {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies this stream.</p>
   * @public
   */
  streamArn: string | undefined;

  /**
   * <p>The name of the keyspace containing the table associated with this stream.</p>
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * <p>The name of the table associated with this stream.</p>
   * @public
   */
  tableName: string | undefined;

  /**
   * <p>A unique identifier for this stream that can be used in stream operations.</p>
   * @public
   */
  streamLabel: string | undefined;
}

/**
 * @public
 */
export interface ListStreamsOutput {
  /**
   * <p> An array of stream objects, each containing summary information about a stream including its ARN, status, and associated table information. This list includes all streams that match the request criteria. </p>
   * @public
   */
  streams?: _Stream[] | undefined;

  /**
   * <p> A pagination token that can be used in a subsequent <code>ListStreams</code> request. This token is returned if the response contains more streams than can be returned in a single response based on the <code>MaxResults</code> parameter. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the value of a cell in an Amazon Keyspaces table, supporting various data types with type-specific fields.</p>
 * @public
 */
export type KeyspacesCellValue =
  | KeyspacesCellValue.AsciiTMember
  | KeyspacesCellValue.BigintTMember
  | KeyspacesCellValue.BlobTMember
  | KeyspacesCellValue.BoolTMember
  | KeyspacesCellValue.CounterTMember
  | KeyspacesCellValue.DateTMember
  | KeyspacesCellValue.DecimalTMember
  | KeyspacesCellValue.DoubleTMember
  | KeyspacesCellValue.FloatTMember
  | KeyspacesCellValue.InetTMember
  | KeyspacesCellValue.IntTMember
  | KeyspacesCellValue.ListTMember
  | KeyspacesCellValue.MapTMember
  | KeyspacesCellValue.SetTMember
  | KeyspacesCellValue.SmallintTMember
  | KeyspacesCellValue.TextTMember
  | KeyspacesCellValue.TimeTMember
  | KeyspacesCellValue.TimestampTMember
  | KeyspacesCellValue.TimeuuidTMember
  | KeyspacesCellValue.TinyintTMember
  | KeyspacesCellValue.TupleTMember
  | KeyspacesCellValue.UdtTMember
  | KeyspacesCellValue.UuidTMember
  | KeyspacesCellValue.VarcharTMember
  | KeyspacesCellValue.VarintTMember
  | KeyspacesCellValue.$UnknownMember;

/**
 * @public
 */
export namespace KeyspacesCellValue {
  /**
   * <p>A value of ASCII text type, containing US-ASCII characters. </p>
   * @public
   */
  export interface AsciiTMember {
    asciiT: string;
    bigintT?: never;
    blobT?: never;
    boolT?: never;
    counterT?: never;
    dateT?: never;
    decimalT?: never;
    doubleT?: never;
    floatT?: never;
    inetT?: never;
    intT?: never;
    listT?: never;
    mapT?: never;
    setT?: never;
    smallintT?: never;
    textT?: never;
    timeT?: never;
    timestampT?: never;
    timeuuidT?: never;
    tinyintT?: never;
    tupleT?: never;
    uuidT?: never;
    varcharT?: never;
    varintT?: never;
    udtT?: never;
    $unknown?: never;
  }

  /**
   * <p>A 64-bit signed integer value. </p>
   * @public
   */
  export interface BigintTMember {
    asciiT?: never;
    bigintT: string;
    blobT?: never;
    boolT?: never;
    counterT?: never;
    dateT?: never;
    decimalT?: never;
    doubleT?: never;
    floatT?: never;
    inetT?: never;
    intT?: never;
    listT?: never;
    mapT?: never;
    setT?: never;
    smallintT?: never;
    textT?: never;
    timeT?: never;
    timestampT?: never;
    timeuuidT?: never;
    tinyintT?: never;
    tupleT?: never;
    uuidT?: never;
    varcharT?: never;
    varintT?: never;
    udtT?: never;
    $unknown?: never;
  }

  /**
   * <p>A binary large object (BLOB) value stored as a Base64-encoded string. </p>
   * @public
   */
  export interface BlobTMember {
    asciiT?: never;
    bigintT?: never;
    blobT: Uint8Array;
    boolT?: never;
    counterT?: never;
    dateT?: never;
    decimalT?: never;
    doubleT?: never;
    floatT?: never;
    inetT?: never;
    intT?: never;
    listT?: never;
    mapT?: never;
    setT?: never;
    smallintT?: never;
    textT?: never;
    timeT?: never;
    timestampT?: never;
    timeuuidT?: never;
    tinyintT?: never;
    tupleT?: never;
    uuidT?: never;
    varcharT?: never;
    varintT?: never;
    udtT?: never;
    $unknown?: never;
  }

  /**
   * <p>A Boolean value, either <code>true</code> or <code>false</code>. </p>
   * @public
   */
  export interface BoolTMember {
    asciiT?: never;
    bigintT?: never;
    blobT?: never;
    boolT: boolean;
    counterT?: never;
    dateT?: never;
    decimalT?: never;
    doubleT?: never;
    floatT?: never;
    inetT?: never;
    intT?: never;
    listT?: never;
    mapT?: never;
    setT?: never;
    smallintT?: never;
    textT?: never;
    timeT?: never;
    timestampT?: never;
    timeuuidT?: never;
    tinyintT?: never;
    tupleT?: never;
    uuidT?: never;
    varcharT?: never;
    varintT?: never;
    udtT?: never;
    $unknown?: never;
  }

  /**
   * <p>A distributed counter value that can be incremented and decremented. </p>
   * @public
   */
  export interface CounterTMember {
    asciiT?: never;
    bigintT?: never;
    blobT?: never;
    boolT?: never;
    counterT: string;
    dateT?: never;
    decimalT?: never;
    doubleT?: never;
    floatT?: never;
    inetT?: never;
    intT?: never;
    listT?: never;
    mapT?: never;
    setT?: never;
    smallintT?: never;
    textT?: never;
    timeT?: never;
    timestampT?: never;
    timeuuidT?: never;
    tinyintT?: never;
    tupleT?: never;
    uuidT?: never;
    varcharT?: never;
    varintT?: never;
    udtT?: never;
    $unknown?: never;
  }

  /**
   * <p>A date value without a time component, represented as days since epoch (January 1, 1970). </p>
   * @public
   */
  export interface DateTMember {
    asciiT?: never;
    bigintT?: never;
    blobT?: never;
    boolT?: never;
    counterT?: never;
    dateT: string;
    decimalT?: never;
    doubleT?: never;
    floatT?: never;
    inetT?: never;
    intT?: never;
    listT?: never;
    mapT?: never;
    setT?: never;
    smallintT?: never;
    textT?: never;
    timeT?: never;
    timestampT?: never;
    timeuuidT?: never;
    tinyintT?: never;
    tupleT?: never;
    uuidT?: never;
    varcharT?: never;
    varintT?: never;
    udtT?: never;
    $unknown?: never;
  }

  /**
   * <p>A variable-precision decimal number value. </p>
   * @public
   */
  export interface DecimalTMember {
    asciiT?: never;
    bigintT?: never;
    blobT?: never;
    boolT?: never;
    counterT?: never;
    dateT?: never;
    decimalT: string;
    doubleT?: never;
    floatT?: never;
    inetT?: never;
    intT?: never;
    listT?: never;
    mapT?: never;
    setT?: never;
    smallintT?: never;
    textT?: never;
    timeT?: never;
    timestampT?: never;
    timeuuidT?: never;
    tinyintT?: never;
    tupleT?: never;
    uuidT?: never;
    varcharT?: never;
    varintT?: never;
    udtT?: never;
    $unknown?: never;
  }

  /**
   * <p>A 64-bit double-precision floating point value. </p>
   * @public
   */
  export interface DoubleTMember {
    asciiT?: never;
    bigintT?: never;
    blobT?: never;
    boolT?: never;
    counterT?: never;
    dateT?: never;
    decimalT?: never;
    doubleT: string;
    floatT?: never;
    inetT?: never;
    intT?: never;
    listT?: never;
    mapT?: never;
    setT?: never;
    smallintT?: never;
    textT?: never;
    timeT?: never;
    timestampT?: never;
    timeuuidT?: never;
    tinyintT?: never;
    tupleT?: never;
    uuidT?: never;
    varcharT?: never;
    varintT?: never;
    udtT?: never;
    $unknown?: never;
  }

  /**
   * <p>A 32-bit single-precision floating point value. </p>
   * @public
   */
  export interface FloatTMember {
    asciiT?: never;
    bigintT?: never;
    blobT?: never;
    boolT?: never;
    counterT?: never;
    dateT?: never;
    decimalT?: never;
    doubleT?: never;
    floatT: string;
    inetT?: never;
    intT?: never;
    listT?: never;
    mapT?: never;
    setT?: never;
    smallintT?: never;
    textT?: never;
    timeT?: never;
    timestampT?: never;
    timeuuidT?: never;
    tinyintT?: never;
    tupleT?: never;
    uuidT?: never;
    varcharT?: never;
    varintT?: never;
    udtT?: never;
    $unknown?: never;
  }

  /**
   * <p>An IP address value, either IPv4 or IPv6 format. </p>
   * @public
   */
  export interface InetTMember {
    asciiT?: never;
    bigintT?: never;
    blobT?: never;
    boolT?: never;
    counterT?: never;
    dateT?: never;
    decimalT?: never;
    doubleT?: never;
    floatT?: never;
    inetT: string;
    intT?: never;
    listT?: never;
    mapT?: never;
    setT?: never;
    smallintT?: never;
    textT?: never;
    timeT?: never;
    timestampT?: never;
    timeuuidT?: never;
    tinyintT?: never;
    tupleT?: never;
    uuidT?: never;
    varcharT?: never;
    varintT?: never;
    udtT?: never;
    $unknown?: never;
  }

  /**
   * <p>A 32-bit signed integer value. </p>
   * @public
   */
  export interface IntTMember {
    asciiT?: never;
    bigintT?: never;
    blobT?: never;
    boolT?: never;
    counterT?: never;
    dateT?: never;
    decimalT?: never;
    doubleT?: never;
    floatT?: never;
    inetT?: never;
    intT: string;
    listT?: never;
    mapT?: never;
    setT?: never;
    smallintT?: never;
    textT?: never;
    timeT?: never;
    timestampT?: never;
    timeuuidT?: never;
    tinyintT?: never;
    tupleT?: never;
    uuidT?: never;
    varcharT?: never;
    varintT?: never;
    udtT?: never;
    $unknown?: never;
  }

  /**
   * <p>An ordered collection of elements that can contain duplicate values. </p>
   * @public
   */
  export interface ListTMember {
    asciiT?: never;
    bigintT?: never;
    blobT?: never;
    boolT?: never;
    counterT?: never;
    dateT?: never;
    decimalT?: never;
    doubleT?: never;
    floatT?: never;
    inetT?: never;
    intT?: never;
    listT: KeyspacesCell[];
    mapT?: never;
    setT?: never;
    smallintT?: never;
    textT?: never;
    timeT?: never;
    timestampT?: never;
    timeuuidT?: never;
    tinyintT?: never;
    tupleT?: never;
    uuidT?: never;
    varcharT?: never;
    varintT?: never;
    udtT?: never;
    $unknown?: never;
  }

  /**
   * <p>A collection of key-value pairs where each key is unique. </p>
   * @public
   */
  export interface MapTMember {
    asciiT?: never;
    bigintT?: never;
    blobT?: never;
    boolT?: never;
    counterT?: never;
    dateT?: never;
    decimalT?: never;
    doubleT?: never;
    floatT?: never;
    inetT?: never;
    intT?: never;
    listT?: never;
    mapT: KeyspacesCellMapDefinition[];
    setT?: never;
    smallintT?: never;
    textT?: never;
    timeT?: never;
    timestampT?: never;
    timeuuidT?: never;
    tinyintT?: never;
    tupleT?: never;
    uuidT?: never;
    varcharT?: never;
    varintT?: never;
    udtT?: never;
    $unknown?: never;
  }

  /**
   * <p>An unordered collection of unique elements. </p>
   * @public
   */
  export interface SetTMember {
    asciiT?: never;
    bigintT?: never;
    blobT?: never;
    boolT?: never;
    counterT?: never;
    dateT?: never;
    decimalT?: never;
    doubleT?: never;
    floatT?: never;
    inetT?: never;
    intT?: never;
    listT?: never;
    mapT?: never;
    setT: KeyspacesCell[];
    smallintT?: never;
    textT?: never;
    timeT?: never;
    timestampT?: never;
    timeuuidT?: never;
    tinyintT?: never;
    tupleT?: never;
    uuidT?: never;
    varcharT?: never;
    varintT?: never;
    udtT?: never;
    $unknown?: never;
  }

  /**
   * <p>A 16-bit signed integer value. </p>
   * @public
   */
  export interface SmallintTMember {
    asciiT?: never;
    bigintT?: never;
    blobT?: never;
    boolT?: never;
    counterT?: never;
    dateT?: never;
    decimalT?: never;
    doubleT?: never;
    floatT?: never;
    inetT?: never;
    intT?: never;
    listT?: never;
    mapT?: never;
    setT?: never;
    smallintT: string;
    textT?: never;
    timeT?: never;
    timestampT?: never;
    timeuuidT?: never;
    tinyintT?: never;
    tupleT?: never;
    uuidT?: never;
    varcharT?: never;
    varintT?: never;
    udtT?: never;
    $unknown?: never;
  }

  /**
   * <p>A UTF-8 encoded string value. </p>
   * @public
   */
  export interface TextTMember {
    asciiT?: never;
    bigintT?: never;
    blobT?: never;
    boolT?: never;
    counterT?: never;
    dateT?: never;
    decimalT?: never;
    doubleT?: never;
    floatT?: never;
    inetT?: never;
    intT?: never;
    listT?: never;
    mapT?: never;
    setT?: never;
    smallintT?: never;
    textT: string;
    timeT?: never;
    timestampT?: never;
    timeuuidT?: never;
    tinyintT?: never;
    tupleT?: never;
    uuidT?: never;
    varcharT?: never;
    varintT?: never;
    udtT?: never;
    $unknown?: never;
  }

  /**
   * <p>A time value without a date component, with nanosecond precision. </p>
   * @public
   */
  export interface TimeTMember {
    asciiT?: never;
    bigintT?: never;
    blobT?: never;
    boolT?: never;
    counterT?: never;
    dateT?: never;
    decimalT?: never;
    doubleT?: never;
    floatT?: never;
    inetT?: never;
    intT?: never;
    listT?: never;
    mapT?: never;
    setT?: never;
    smallintT?: never;
    textT?: never;
    timeT: string;
    timestampT?: never;
    timeuuidT?: never;
    tinyintT?: never;
    tupleT?: never;
    uuidT?: never;
    varcharT?: never;
    varintT?: never;
    udtT?: never;
    $unknown?: never;
  }

  /**
   * <p>A timestamp value representing date and time with millisecond precision. </p>
   * @public
   */
  export interface TimestampTMember {
    asciiT?: never;
    bigintT?: never;
    blobT?: never;
    boolT?: never;
    counterT?: never;
    dateT?: never;
    decimalT?: never;
    doubleT?: never;
    floatT?: never;
    inetT?: never;
    intT?: never;
    listT?: never;
    mapT?: never;
    setT?: never;
    smallintT?: never;
    textT?: never;
    timeT?: never;
    timestampT: string;
    timeuuidT?: never;
    tinyintT?: never;
    tupleT?: never;
    uuidT?: never;
    varcharT?: never;
    varintT?: never;
    udtT?: never;
    $unknown?: never;
  }

  /**
   * <p>A universally unique identifier (UUID) that includes a timestamp component, ensuring both uniqueness and time ordering. </p>
   * @public
   */
  export interface TimeuuidTMember {
    asciiT?: never;
    bigintT?: never;
    blobT?: never;
    boolT?: never;
    counterT?: never;
    dateT?: never;
    decimalT?: never;
    doubleT?: never;
    floatT?: never;
    inetT?: never;
    intT?: never;
    listT?: never;
    mapT?: never;
    setT?: never;
    smallintT?: never;
    textT?: never;
    timeT?: never;
    timestampT?: never;
    timeuuidT: string;
    tinyintT?: never;
    tupleT?: never;
    uuidT?: never;
    varcharT?: never;
    varintT?: never;
    udtT?: never;
    $unknown?: never;
  }

  /**
   * <p>An 8-bit signed integer value. </p>
   * @public
   */
  export interface TinyintTMember {
    asciiT?: never;
    bigintT?: never;
    blobT?: never;
    boolT?: never;
    counterT?: never;
    dateT?: never;
    decimalT?: never;
    doubleT?: never;
    floatT?: never;
    inetT?: never;
    intT?: never;
    listT?: never;
    mapT?: never;
    setT?: never;
    smallintT?: never;
    textT?: never;
    timeT?: never;
    timestampT?: never;
    timeuuidT?: never;
    tinyintT: string;
    tupleT?: never;
    uuidT?: never;
    varcharT?: never;
    varintT?: never;
    udtT?: never;
    $unknown?: never;
  }

  /**
   * <p>A fixed-length ordered list of elements, where each element can be of a different data type. </p>
   * @public
   */
  export interface TupleTMember {
    asciiT?: never;
    bigintT?: never;
    blobT?: never;
    boolT?: never;
    counterT?: never;
    dateT?: never;
    decimalT?: never;
    doubleT?: never;
    floatT?: never;
    inetT?: never;
    intT?: never;
    listT?: never;
    mapT?: never;
    setT?: never;
    smallintT?: never;
    textT?: never;
    timeT?: never;
    timestampT?: never;
    timeuuidT?: never;
    tinyintT?: never;
    tupleT: KeyspacesCell[];
    uuidT?: never;
    varcharT?: never;
    varintT?: never;
    udtT?: never;
    $unknown?: never;
  }

  /**
   * <p>A universally unique identifier (UUID) value. </p>
   * @public
   */
  export interface UuidTMember {
    asciiT?: never;
    bigintT?: never;
    blobT?: never;
    boolT?: never;
    counterT?: never;
    dateT?: never;
    decimalT?: never;
    doubleT?: never;
    floatT?: never;
    inetT?: never;
    intT?: never;
    listT?: never;
    mapT?: never;
    setT?: never;
    smallintT?: never;
    textT?: never;
    timeT?: never;
    timestampT?: never;
    timeuuidT?: never;
    tinyintT?: never;
    tupleT?: never;
    uuidT: string;
    varcharT?: never;
    varintT?: never;
    udtT?: never;
    $unknown?: never;
  }

  /**
   * <p>A UTF-8 encoded string value, functionally equivalent to text type. </p>
   * @public
   */
  export interface VarcharTMember {
    asciiT?: never;
    bigintT?: never;
    blobT?: never;
    boolT?: never;
    counterT?: never;
    dateT?: never;
    decimalT?: never;
    doubleT?: never;
    floatT?: never;
    inetT?: never;
    intT?: never;
    listT?: never;
    mapT?: never;
    setT?: never;
    smallintT?: never;
    textT?: never;
    timeT?: never;
    timestampT?: never;
    timeuuidT?: never;
    tinyintT?: never;
    tupleT?: never;
    uuidT?: never;
    varcharT: string;
    varintT?: never;
    udtT?: never;
    $unknown?: never;
  }

  /**
   * <p>A variable precision integer value with arbitrary length. </p>
   * @public
   */
  export interface VarintTMember {
    asciiT?: never;
    bigintT?: never;
    blobT?: never;
    boolT?: never;
    counterT?: never;
    dateT?: never;
    decimalT?: never;
    doubleT?: never;
    floatT?: never;
    inetT?: never;
    intT?: never;
    listT?: never;
    mapT?: never;
    setT?: never;
    smallintT?: never;
    textT?: never;
    timeT?: never;
    timestampT?: never;
    timeuuidT?: never;
    tinyintT?: never;
    tupleT?: never;
    uuidT?: never;
    varcharT?: never;
    varintT: string;
    udtT?: never;
    $unknown?: never;
  }

  /**
   * <p>A user-defined type (UDT) value consisting of named fields, each with its own data type. </p>
   * @public
   */
  export interface UdtTMember {
    asciiT?: never;
    bigintT?: never;
    blobT?: never;
    boolT?: never;
    counterT?: never;
    dateT?: never;
    decimalT?: never;
    doubleT?: never;
    floatT?: never;
    inetT?: never;
    intT?: never;
    listT?: never;
    mapT?: never;
    setT?: never;
    smallintT?: never;
    textT?: never;
    timeT?: never;
    timestampT?: never;
    timeuuidT?: never;
    tinyintT?: never;
    tupleT?: never;
    uuidT?: never;
    varcharT?: never;
    varintT?: never;
    udtT: Record<string, KeyspacesCell>;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    asciiT?: never;
    bigintT?: never;
    blobT?: never;
    boolT?: never;
    counterT?: never;
    dateT?: never;
    decimalT?: never;
    doubleT?: never;
    floatT?: never;
    inetT?: never;
    intT?: never;
    listT?: never;
    mapT?: never;
    setT?: never;
    smallintT?: never;
    textT?: never;
    timeT?: never;
    timestampT?: never;
    timeuuidT?: never;
    tinyintT?: never;
    tupleT?: never;
    uuidT?: never;
    varcharT?: never;
    varintT?: never;
    udtT?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    asciiT: (value: string) => T;
    bigintT: (value: string) => T;
    blobT: (value: Uint8Array) => T;
    boolT: (value: boolean) => T;
    counterT: (value: string) => T;
    dateT: (value: string) => T;
    decimalT: (value: string) => T;
    doubleT: (value: string) => T;
    floatT: (value: string) => T;
    inetT: (value: string) => T;
    intT: (value: string) => T;
    listT: (value: KeyspacesCell[]) => T;
    mapT: (value: KeyspacesCellMapDefinition[]) => T;
    setT: (value: KeyspacesCell[]) => T;
    smallintT: (value: string) => T;
    textT: (value: string) => T;
    timeT: (value: string) => T;
    timestampT: (value: string) => T;
    timeuuidT: (value: string) => T;
    tinyintT: (value: string) => T;
    tupleT: (value: KeyspacesCell[]) => T;
    uuidT: (value: string) => T;
    varcharT: (value: string) => T;
    varintT: (value: string) => T;
    udtT: (value: Record<string, KeyspacesCell>) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Represents a cell in an Amazon Keyspaces table, containing both the value and metadata about the cell.</p>
 * @public
 */
export interface KeyspacesCell {
  /**
   * <p>The value stored in this cell, which can be of various data types supported by Amazon Keyspaces.</p>
   * @public
   */
  value?: KeyspacesCellValue | undefined;

  /**
   * <p>Metadata associated with this cell, such as time-to-live (TTL) expiration time and write timestamp.</p>
   * @public
   */
  metadata?: KeyspacesMetadata | undefined;
}

/**
 * <p>Represents a key-value pair within a map data type in Amazon Keyspaces, including the associated metadata.</p>
 * @public
 */
export interface KeyspacesCellMapDefinition {
  /**
   * <p>The key of this map entry in the Amazon Keyspaces cell.</p>
   * @public
   */
  key?: KeyspacesCellValue | undefined;

  /**
   * <p>The value associated with the key in this map entry.</p>
   * @public
   */
  value?: KeyspacesCellValue | undefined;

  /**
   * <p>Metadata for this specific key-value pair within the map, such as timestamps and TTL information.</p>
   * @public
   */
  metadata?: KeyspacesMetadata | undefined;
}

/**
 * <p>Represents a row in an Amazon Keyspaces table, containing regular column values, static column values, and row-level metadata.</p>
 * @public
 */
export interface KeyspacesRow {
  /**
   * <p>A map of regular (non-static) column cells in the row, where keys are column names and values are the corresponding cells.</p>
   * @public
   */
  valueCells?: Record<string, KeyspacesCell> | undefined;

  /**
   * <p>A map of static column cells shared by all rows with the same partition key, where keys are column names and values are the corresponding cells.</p>
   * @public
   */
  staticCells?: Record<string, KeyspacesCell> | undefined;

  /**
   * <p>Metadata that applies to the entire row, such as timestamps and TTL information.</p>
   * @public
   */
  rowMetadata?: KeyspacesMetadata | undefined;
}

/**
 * <p>Represents a change data capture record for a row in an Amazon Keyspaces table, containing both the new and old states of the row.</p>
 * @public
 */
export interface _Record {
  /**
   * <p>The version of the record format, used to track the evolution of the record structure over time.</p>
   * @public
   */
  eventVersion?: string | undefined;

  /**
   * <p>The timestamp indicating when this change data capture record was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The origin or source of this change data capture record.</p>
   * @public
   */
  origin?: OriginType | undefined;

  /**
   * <p>The partition key columns and their values for the affected row.</p>
   * @public
   */
  partitionKeys?: Record<string, KeyspacesCellValue> | undefined;

  /**
   * <p>The clustering key columns and their values for the affected row, which determine the order of rows within a partition.</p>
   * @public
   */
  clusteringKeys?: Record<string, KeyspacesCellValue> | undefined;

  /**
   * <p>The state of the row after the change operation that generated this record.</p>
   * @public
   */
  newImage?: KeyspacesRow | undefined;

  /**
   * <p>The state of the row before the change operation that generated this record.</p>
   * @public
   */
  oldImage?: KeyspacesRow | undefined;

  /**
   * <p>A unique identifier assigned to this record within the shard, used for ordering and tracking purposes.</p>
   * @public
   */
  sequenceNumber?: string | undefined;
}

/**
 * @public
 */
export interface GetRecordsOutput {
  /**
   * <p> An array of change data records retrieved from the specified shard. Each record represents a single data modification (insert, update, or delete) to a row in the Amazon Keyspaces table. Records include the primary key columns and information about what data was modified. </p>
   * @public
   */
  changeRecords?: _Record[] | undefined;

  /**
   * <p> The next position in the shard from which to start sequentially reading data records. If null, the shard has been closed and the requested iterator doesn't return any more data. </p>
   * @public
   */
  nextShardIterator?: string | undefined;
}

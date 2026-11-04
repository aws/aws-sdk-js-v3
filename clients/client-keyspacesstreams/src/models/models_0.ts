// smithy-typescript generated code
import type {
  IteratorPosition,
  OriginType,
  ShardFilterType,
  ShardIteratorType,
  StreamStatus,
  StreamViewType,
} from "./enums";

/**
 * @public
 */
export interface GetRecordsInput {
  /**
   * The unique identifier of the shard iterator. A shard iterator specifies the position in the shard from which you want to start reading data records sequentially. You obtain this value by calling the `GetShardIterator` operation. Each shard iterator is valid for 15 minutes after creation.
   *
   * @public
   */
  shardIterator: string | undefined;

  /**
   * The maximum number of records to return in a single `GetRecords` request. The default value is 100. You can specify a limit between 1 and 1000, but the actual number returned might be less than the specified maximum if the size of the data for the returned records exceeds the internal size limit.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains metadata information associated with Amazon Keyspaces cells and rows.
 *
 * @public
 */
export interface KeyspacesMetadata {
  /**
   * The time at which the associated data will expire, based on the time-to-live (TTL) setting.
   *
   * @public
   */
  expirationTime?: string | undefined;

  /**
   * The timestamp at which the associated data was written to the database.
   *
   * @public
   */
  writeTime?: string | undefined;
}

/**
 * Provides information about the current iterator.
 *
 * @public
 */
export interface IteratorDescription {
  /**
   * Indicates the current iterator's position within the shard. The possible values are:
   *
   * - `AT_TIP` - No more records are currently available.
   * - `BEHIND_TIP` - Additional records may be available.
   *
   * Stream progresses in absence of customer records. `BEHIND_TIP` with an empty `changeRecords` list indicates the stream is progressing but no customer records are available at this position. Continue polling normally.
   *
   * @public
   */
  iteratorPosition?: IteratorPosition | undefined;
}

/**
 * @public
 */
export interface GetShardIteratorInput {
  /**
   * The Amazon Resource Name (ARN) of the stream for which to get the shard iterator. The ARN uniquely identifies the stream within Amazon Keyspaces.
   *
   * @public
   */
  streamArn: string | undefined;

  /**
   * The identifier of the shard within the stream. The shard ID uniquely identifies a subset of the stream's data records that you want to access.
   *
   * @public
   */
  shardId: string | undefined;

  /**
   * Determines how the shard iterator is positioned. Must be one of the following:
   *
   * - `TRIM_HORIZON` - Start reading at the last untrimmed record in the shard, which is the oldest data record in the shard.
   * - `AT_SEQUENCE_NUMBER` - Start reading exactly from the specified sequence number.
   * - `AFTER_SEQUENCE_NUMBER` - Start reading right after the specified sequence number.
   * - `LATEST` - Start reading just after the most recent record in the shard, so that you always read the most recent data.
   *
   * @public
   */
  shardIteratorType: ShardIteratorType | undefined;

  /**
   * The sequence number of the data record in the shard from which to start reading. Required if `ShardIteratorType` is `AT_SEQUENCE_NUMBER` or `AFTER_SEQUENCE_NUMBER`. This parameter is ignored for other iterator types.
   *
   * @public
   */
  sequenceNumber?: string | undefined;
}

/**
 * @public
 */
export interface GetShardIteratorOutput {
  /**
   * The unique identifier for the shard iterator. This value is used in the `GetRecords` operation to retrieve data records from the specified shard. Each shard iterator expires 15 minutes after it is returned to the requester.
   *
   * @public
   */
  shardIterator?: string | undefined;
}

/**
 * A filter used to limit the shards returned by a `GetStream` operation.
 *
 * @public
 */
export interface ShardFilter {
  /**
   * The type of shard filter to use, which determines how the shardId parameter is interpreted.
   *
   * @public
   */
  type?: ShardFilterType | undefined;

  /**
   * The identifier of a specific shard used to filter results based on the specified filter type.
   *
   * @public
   */
  shardId?: string | undefined;
}

/**
 * @public
 */
export interface GetStreamInput {
  /**
   * The Amazon Resource Name (ARN) of the stream for which detailed information is requested. This uniquely identifies the specific stream you want to get information about.
   *
   * @public
   */
  streamArn: string | undefined;

  /**
   * The maximum number of shard objects to return in a single `GetStream` request. The default value is 100. The minimum value is 1 and the maximum value is 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Optional filter criteria to apply when retrieving shards. You can filter shards based on their parent `shardID` to get a list of children shards to narrow down the results returned by the `GetStream` operation.
   *
   * @public
   */
  shardFilter?: ShardFilter | undefined;

  /**
   * An optional pagination token provided by a previous `GetStream` operation. If this parameter is specified, the response includes only records beyond the token, up to the value specified by `MaxResults`.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Defines a range of sequence numbers within a change data capture stream's shard for Amazon Keyspaces.
 *
 * @public
 */
export interface SequenceNumberRange {
  /**
   * The starting sequence number of the range.
   *
   * @public
   */
  startingSequenceNumber?: string | undefined;

  /**
   * The ending sequence number of the range, which may be null for open-ended ranges.
   *
   * @public
   */
  endingSequenceNumber?: string | undefined;
}

/**
 * Represents a uniquely identified group of change records within a change data capture stream for Amazon Keyspaces.
 *
 * @public
 */
export interface Shard {
  /**
   * A unique identifier for this shard within the stream.
   *
   * @public
   */
  shardId?: string | undefined;

  /**
   * The range of sequence numbers contained within this shard.
   *
   * @public
   */
  sequenceNumberRange?: SequenceNumberRange | undefined;

  /**
   * The identifiers of parent shards that this shard evolved from, if this shard was created through resharding.
   *
   * @public
   */
  parentShardIds?: string[] | undefined;
}

/**
 * @public
 */
export interface GetStreamOutput {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the stream within Amazon Keyspaces. This ARN can be used in other API operations to reference this specific stream.
   *
   * @public
   */
  streamArn: string | undefined;

  /**
   * A timestamp that serves as a unique identifier for this stream, used for debugging and monitoring purposes. The stream label represents the point in time when the stream was created.
   *
   * @public
   */
  streamLabel: string | undefined;

  /**
   * The current status of the stream. Values can be `ENABLING`, `ENABLED`, `DISABLING`, or `DISABLED`. Operations on the stream depend on its current status.
   *
   * @public
   */
  streamStatus: StreamStatus | undefined;

  /**
   * The format of the data records in this stream. Currently, this can be one of the following options:
   *
   * - `NEW_AND_OLD_IMAGES` - both versions of the row, before and after the change. This is the default.
   * - `NEW_IMAGE` - the version of the row after the change.
   * - `OLD_IMAGE` - the version of the row before the change.
   * - `KEYS_ONLY` - the partition and clustering keys of the row that was changed.
   *
   * @public
   */
  streamViewType: StreamViewType | undefined;

  /**
   * The date and time when the request to create this stream was issued. The value is represented in ISO 8601 format.
   *
   * @public
   */
  creationRequestDateTime: Date | undefined;

  /**
   * The name of the keyspace containing the table associated with this stream. The keyspace name is part of the table's hierarchical identifier in Amazon Keyspaces.
   *
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * The name of the table associated with this stream. The stream captures changes to rows in this Amazon Keyspaces table.
   *
   * @public
   */
  tableName: string | undefined;

  /**
   * An array of shard objects associated with this stream. Each shard contains a subset of the stream's data records and has its own unique identifier. The collection of shards represents the complete stream data.
   *
   * @public
   */
  shards?: Shard[] | undefined;

  /**
   * A pagination token that can be used in a subsequent `GetStream` request. This token is returned if the response contains more shards than can be returned in a single response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStreamsInput {
  /**
   * The name of the keyspace for which to list streams. If specified, only streams associated with tables in this keyspace are returned. If omitted, streams from all keyspaces are included in the results.
   *
   * @public
   */
  keyspaceName?: string | undefined;

  /**
   * The name of the table for which to list streams. Must be used together with `keyspaceName`. If specified, only streams associated with this specific table are returned.
   *
   * @public
   */
  tableName?: string | undefined;

  /**
   * The maximum number of streams to return in a single `ListStreams` request. The default value is 100. The minimum value is 1 and the maximum value is 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * An optional pagination token provided by a previous `ListStreams` operation. If this parameter is specified, the response includes only records beyond the token, up to the value specified by `maxResults`.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents a change data capture stream for an Amazon Keyspaces table, which enables tracking and processing of data changes.
 *
 * @public
 */
export interface _Stream {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies this stream.
   *
   * @public
   */
  streamArn: string | undefined;

  /**
   * The name of the keyspace containing the table associated with this stream.
   *
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * The name of the table associated with this stream.
   *
   * @public
   */
  tableName: string | undefined;

  /**
   * A unique identifier for this stream that can be used in stream operations.
   *
   * @public
   */
  streamLabel: string | undefined;
}

/**
 * @public
 */
export interface ListStreamsOutput {
  /**
   * An array of stream objects, each containing summary information about a stream including its ARN, status, and associated table information. This list includes all streams that match the request criteria.
   *
   * @public
   */
  streams?: _Stream[] | undefined;

  /**
   * A pagination token that can be used in a subsequent `ListStreams` request. This token is returned if the response contains more streams than can be returned in a single response based on the `maxResults` parameter.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents the value of a cell in an Amazon Keyspaces table, supporting various data types with type-specific fields.
 *
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
  | KeyspacesCellValue.DurationTMember
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
   * A value of ASCII text type, containing US-ASCII characters.
   *
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
    durationT?: never;
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
   * A 64-bit signed integer value.
   *
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
    durationT?: never;
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
   * A binary large object (BLOB) value stored as a Base64-encoded string.
   *
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
    durationT?: never;
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
   * A Boolean value, either `true` or `false`.
   *
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
    durationT?: never;
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
   * A distributed counter value that can be incremented and decremented.
   *
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
    durationT?: never;
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
   * A date value without a time component, represented as days since epoch (January 1, 1970).
   *
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
    durationT?: never;
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
   * A variable-precision decimal number value.
   *
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
    durationT?: never;
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
   * A 64-bit double-precision floating point value.
   *
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
    durationT?: never;
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
   * A duration value with nanosecond precision, representing a period of time encoded as 32-bit months, 32-bit days, and 64-bit nanoseconds.
   *
   * @public
   */
  export interface DurationTMember {
    asciiT?: never;
    bigintT?: never;
    blobT?: never;
    boolT?: never;
    counterT?: never;
    dateT?: never;
    decimalT?: never;
    doubleT?: never;
    durationT: string;
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
   * A 32-bit single-precision floating point value.
   *
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
    durationT?: never;
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
   * An IP address value, either IPv4 or IPv6 format.
   *
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
    durationT?: never;
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
   * A 32-bit signed integer value.
   *
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
    durationT?: never;
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
   * An ordered collection of elements that can contain duplicate values.
   *
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
    durationT?: never;
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
   * A collection of key-value pairs where each key is unique.
   *
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
    durationT?: never;
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
   * An unordered collection of unique elements.
   *
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
    durationT?: never;
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
   * A 16-bit signed integer value.
   *
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
    durationT?: never;
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
   * A UTF-8 encoded string value.
   *
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
    durationT?: never;
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
   * A time value without a date component, with nanosecond precision.
   *
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
    durationT?: never;
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
   * A timestamp value representing date and time with millisecond precision.
   *
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
    durationT?: never;
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
   * A universally unique identifier (UUID) that includes a timestamp component, ensuring both uniqueness and time ordering.
   *
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
    durationT?: never;
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
   * An 8-bit signed integer value.
   *
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
    durationT?: never;
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
   * A fixed-length ordered list of elements, where each element can be of a different data type.
   *
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
    durationT?: never;
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
   * A universally unique identifier (UUID) value.
   *
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
    durationT?: never;
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
   * A UTF-8 encoded string value, functionally equivalent to text type.
   *
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
    durationT?: never;
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
   * An integer value within the +/-10^38 range.
   *
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
    durationT?: never;
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
   * A user-defined type (UDT) value consisting of named fields, each with its own data type.
   *
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
    durationT?: never;
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
    durationT?: never;
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
    durationT: (value: string) => T;
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
 * Represents a cell in an Amazon Keyspaces table, containing both the value and metadata about the cell.
 *
 * @public
 */
export interface KeyspacesCell {
  /**
   * The value stored in this cell, which can be of various data types supported by Amazon Keyspaces.
   *
   * @public
   */
  value?: KeyspacesCellValue | undefined;

  /**
   * Metadata associated with this cell, such as time-to-live (TTL) expiration time and write timestamp.
   *
   * @public
   */
  metadata?: KeyspacesMetadata | undefined;
}

/**
 * Represents a key-value pair within a map data type in Amazon Keyspaces, including the associated metadata.
 *
 * @public
 */
export interface KeyspacesCellMapDefinition {
  /**
   * The key of this map entry in the Amazon Keyspaces cell.
   *
   * @public
   */
  key?: KeyspacesCellValue | undefined;

  /**
   * The value associated with the key in this map entry.
   *
   * @public
   */
  value?: KeyspacesCellValue | undefined;

  /**
   * Metadata for this specific key-value pair within the map, such as timestamps and TTL information.
   *
   * @public
   */
  metadata?: KeyspacesMetadata | undefined;
}

/**
 * Represents a row in an Amazon Keyspaces table, containing regular column values, static column values, and row-level metadata.
 *
 * @public
 */
export interface KeyspacesRow {
  /**
   * A map of regular (non-static) column cells in the row, where keys are column names and values are the corresponding cells.
   *
   * @public
   */
  valueCells?: Record<string, KeyspacesCell> | undefined;

  /**
   * A map of static column cells shared by all rows with the same partition key, where keys are column names and values are the corresponding cells.
   *
   * @public
   */
  staticCells?: Record<string, KeyspacesCell> | undefined;

  /**
   * Metadata that applies to the entire row, such as timestamps and TTL information.
   *
   * @public
   */
  rowMetadata?: KeyspacesMetadata | undefined;
}

/**
 * Represents a change data capture record for a row in an Amazon Keyspaces table, containing both the new and old states of the row.
 *
 * @public
 */
export interface _Record {
  /**
   * The version of the record format, used to track the evolution of the record structure over time.
   *
   * @public
   */
  eventVersion?: string | undefined;

  /**
   * The timestamp indicating when this change data capture record was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The origin or source of this change data capture record.
   *
   * @public
   */
  origin?: OriginType | undefined;

  /**
   * The partition key columns and their values for the affected row.
   *
   * @public
   */
  partitionKeys?: Record<string, KeyspacesCellValue> | undefined;

  /**
   * The clustering key columns and their values for the affected row, which determine the order of rows within a partition.
   *
   * @public
   */
  clusteringKeys?: Record<string, KeyspacesCellValue> | undefined;

  /**
   * The state of the row after the change operation that generated this record.
   *
   * @public
   */
  newImage?: KeyspacesRow | undefined;

  /**
   * The state of the row before the change operation that generated this record.
   *
   * @public
   */
  oldImage?: KeyspacesRow | undefined;

  /**
   * A unique identifier assigned to this record within the shard, used for ordering and tracking purposes.
   *
   * @public
   */
  sequenceNumber?: string | undefined;
}

/**
 * @public
 */
export interface GetRecordsOutput {
  /**
   * An array of change data records retrieved from the specified shard. Each record represents a single data modification (insert, update, or delete) to a row in the Amazon Keyspaces table. Records include the primary key columns and information about what data was modified.
   *
   * @public
   */
  changeRecords?: _Record[] | undefined;

  /**
   * The next position in the shard from which to start sequentially reading data records. If null, the shard has been closed and the requested iterator will not return any more data.
   *
   * @public
   */
  nextShardIterator?: string | undefined;

  /**
   * Provides information about the current iterator at the time GetRecords request was processed by Keyspaces.
   *
   * @public
   */
  iteratorDescription?: IteratorDescription | undefined;
}

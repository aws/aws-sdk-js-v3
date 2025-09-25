export const _ACDT = "ApproximateCreationDateTime";
export const _AM = "AttributeMap";
export const _AN = "AttributeName";
export const _AV = "AttributeValue";
export const _B = "B";
export const _BOOL = "BOOL";
export const _BS = "BS";
export const _CRDT = "CreationRequestDateTime";
export const _DS = "DescribeStream";
export const _DSI = "DescribeStreamInput";
export const _DSO = "DescribeStreamOutput";
export const _EIE = "ExpiredIteratorException";
export const _ESN = "EndingSequenceNumber";
export const _ESSA = "ExclusiveStartStreamArn";
export const _ESSI = "ExclusiveStartShardId";
export const _GR = "GetRecords";
export const _GRI = "GetRecordsInput";
export const _GRO = "GetRecordsOutput";
export const _GSI = "GetShardIterator";
export const _GSII = "GetShardIteratorInput";
export const _GSIO = "GetShardIteratorOutput";
export const _I = "Identity";
export const _ISE = "InternalServerError";
export const _K = "Keys";
export const _KS = "KeySchema";
export const _KSE = "KeySchemaElement";
export const _KT = "KeyType";
export const _L = "Limit";
export const _LAV = "ListAttributeValue";
export const _LEE = "LimitExceededException";
export const _LESA = "LastEvaluatedStreamArn";
export const _LESI = "LastEvaluatedShardId";
export const _LS = "ListStreams";
export const _LSI = "ListStreamsInput";
export const _LSO = "ListStreamsOutput";
export const _L_ = "L";
export const _M = "M";
export const _MAV = "MapAttributeValue";
export const _N = "N";
export const _NI = "NewImage";
export const _NS = "NS";
export const _NSI = "NextShardIterator";
export const _NULL = "NULL";
export const _OI = "OldImage";
export const _PI = "PrincipalId";
export const _PSI = "ParentShardId";
export const _R = "Records";
export const _RL = "RecordList";
export const _RNFE = "ResourceNotFoundException";
export const _Re = "Record";
export const _S = "Streams";
export const _SA = "StreamArn";
export const _SB = "SizeBytes";
export const _SD = "StreamDescription";
export const _SDL = "ShardDescriptionList";
export const _SF = "ShardFilter";
export const _SI = "ShardIterator";
export const _SIT = "ShardIteratorType";
export const _SIh = "ShardId";
export const _SL = "StreamLabel";
export const _SLt = "StreamList";
export const _SN = "SequenceNumber";
export const _SNR = "SequenceNumberRange";
export const _SR = "StreamRecord";
export const _SS = "StreamStatus";
export const _SSN = "StartingSequenceNumber";
export const _SS_ = "SS";
export const _SVT = "StreamViewType";
export const _S_ = "S";
export const _Sh = "Shard";
export const _Sha = "Shards";
export const _St = "Stream";
export const _T = "Type";
export const _TDAE = "TrimmedDataAccessException";
export const _TN = "TableName";
export const _aR = "awsRegion";
export const _c = "client";
export const _d = "dynamodb";
export const _e = "error";
export const _eID = "eventID";
export const _eN = "eventName";
export const _eS = "eventSource";
export const _eV = "eventVersion";
export const _m = "message";
export const _s = "server";
export const _uI = "userIdentity";
export const n0 = "com.amazonaws.dynamodbstreams";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { DynamoDBStreamsServiceException as __DynamoDBStreamsServiceException } from "../models/DynamoDBStreamsServiceException";

/* eslint no-var: 0 */

export var DynamoDBStreamsServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.dynamodbstreams",
  "DynamoDBStreamsServiceException",
  0,
  [],
  [],
  __DynamoDBStreamsServiceException
);

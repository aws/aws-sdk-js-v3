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
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.dynamodbstreams";
export const _uI = "userIdentity";
export const n0 = "com.amazonaws.dynamodbstreams";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { DynamoDBStreamsServiceException as __DynamoDBStreamsServiceException } from "../models/DynamoDBStreamsServiceException";
import {
  ExpiredIteratorException as __ExpiredIteratorException,
  InternalServerError as __InternalServerError,
  LimitExceededException as __LimitExceededException,
  ResourceNotFoundException as __ResourceNotFoundException,
  TrimmedDataAccessException as __TrimmedDataAccessException,
} from "../models/index";

/* eslint no-var: 0 */

export var DescribeStreamInput: StaticStructureSchema = [
  3,
  n0,
  _DSI,
  0,
  [_SA, _L, _ESSI, _SF],
  [0, 1, 0, () => ShardFilter],
];
export var DescribeStreamOutput: StaticStructureSchema = [3, n0, _DSO, 0, [_SD], [() => StreamDescription]];
export var ExpiredIteratorException: StaticErrorSchema = [
  -3,
  n0,
  _EIE,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ExpiredIteratorException, __ExpiredIteratorException);

export var GetRecordsInput: StaticStructureSchema = [3, n0, _GRI, 0, [_SI, _L], [0, 1]];
export var GetRecordsOutput: StaticStructureSchema = [3, n0, _GRO, 0, [_R, _NSI], [() => RecordList, 0]];
export var GetShardIteratorInput: StaticStructureSchema = [3, n0, _GSII, 0, [_SA, _SIh, _SIT, _SN], [0, 0, 0, 0]];
export var GetShardIteratorOutput: StaticStructureSchema = [3, n0, _GSIO, 0, [_SI], [0]];
export var Identity: StaticStructureSchema = [3, n0, _I, 0, [_PI, _T], [0, 0]];
export var InternalServerError: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _s,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerError, __InternalServerError);

export var KeySchemaElement: StaticStructureSchema = [3, n0, _KSE, 0, [_AN, _KT], [0, 0]];
export var LimitExceededException: StaticErrorSchema = [
  -3,
  n0,
  _LEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(LimitExceededException, __LimitExceededException);

export var ListStreamsInput: StaticStructureSchema = [3, n0, _LSI, 0, [_TN, _L, _ESSA], [0, 1, 0]];
export var ListStreamsOutput: StaticStructureSchema = [3, n0, _LSO, 0, [_S, _LESA], [() => StreamList, 0]];
export var _Record: StaticStructureSchema = [
  3,
  n0,
  _Re,
  0,
  [_eID, _eN, _eV, _eS, _aR, _d, _uI],
  [0, 0, 0, 0, 0, () => StreamRecord, () => Identity],
];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var SequenceNumberRange: StaticStructureSchema = [3, n0, _SNR, 0, [_SSN, _ESN], [0, 0]];
export var Shard: StaticStructureSchema = [3, n0, _Sh, 0, [_SIh, _SNR, _PSI], [0, () => SequenceNumberRange, 0]];
export var ShardFilter: StaticStructureSchema = [3, n0, _SF, 0, [_T, _SIh], [0, 0]];
export var _Stream: StaticStructureSchema = [3, n0, _St, 0, [_SA, _TN, _SL], [0, 0, 0]];
export var StreamDescription: StaticStructureSchema = [
  3,
  n0,
  _SD,
  0,
  [_SA, _SL, _SS, _SVT, _CRDT, _TN, _KS, _Sha, _LESI],
  [0, 0, 0, 0, 4, 0, () => KeySchema, () => ShardDescriptionList, 0],
];
export var StreamRecord: StaticStructureSchema = [
  3,
  n0,
  _SR,
  0,
  [_ACDT, _K, _NI, _OI, _SN, _SB, _SVT],
  [4, () => AttributeMap, () => AttributeMap, () => AttributeMap, 0, 1, 0],
];
export var TrimmedDataAccessException: StaticErrorSchema = [
  -3,
  n0,
  _TDAE,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(TrimmedDataAccessException, __TrimmedDataAccessException);

export var __Unit = "unit" as const;

export var DynamoDBStreamsServiceException: StaticErrorSchema = [-3, _sm, "DynamoDBStreamsServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(DynamoDBStreamsServiceException, __DynamoDBStreamsServiceException);

export var BinarySetAttributeValue = 64 | 21;

export var KeySchema: StaticListSchema = [1, n0, _KS, 0, () => KeySchemaElement];
export var ListAttributeValue: StaticListSchema = [1, n0, _LAV, 0, () => AttributeValue];
export var NumberSetAttributeValue = 64 | 0;

export var RecordList: StaticListSchema = [1, n0, _RL, 0, () => _Record];
export var ShardDescriptionList: StaticListSchema = [1, n0, _SDL, 0, () => Shard];
export var StreamList: StaticListSchema = [1, n0, _SLt, 0, () => _Stream];
export var StringSetAttributeValue = 64 | 0;

export var AttributeMap: StaticMapSchema = [2, n0, _AM, 0, 0, () => AttributeValue];
export var MapAttributeValue: StaticMapSchema = [2, n0, _MAV, 0, 0, () => AttributeValue];
export var AttributeValue: StaticStructureSchema = [
  3,
  n0,
  _AV,
  0,
  [_S_, _N, _B, _SS_, _NS, _BS, _M, _L_, _NULL, _BOOL],
  [0, 0, 21, 64 | 0, 64 | 0, 64 | 21, () => MapAttributeValue, () => ListAttributeValue, 2, 2],
];
export var DescribeStream: StaticOperationSchema = [
  9,
  n0,
  _DS,
  0,
  () => DescribeStreamInput,
  () => DescribeStreamOutput,
];
export var GetRecords: StaticOperationSchema = [9, n0, _GR, 0, () => GetRecordsInput, () => GetRecordsOutput];
export var GetShardIterator: StaticOperationSchema = [
  9,
  n0,
  _GSI,
  0,
  () => GetShardIteratorInput,
  () => GetShardIteratorOutput,
];
export var ListStreams: StaticOperationSchema = [9, n0, _LS, 0, () => ListStreamsInput, () => ListStreamsOutput];

const _ACDT = "ApproximateCreationDateTime";
const _AM = "AttributeMap";
const _AN = "AttributeName";
const _AV = "AttributeValue";
const _B = "B";
const _BOOL = "BOOL";
const _BS = "BS";
const _CRDT = "CreationRequestDateTime";
const _DS = "DescribeStream";
const _DSI = "DescribeStreamInput";
const _DSO = "DescribeStreamOutput";
const _EIE = "ExpiredIteratorException";
const _ESN = "EndingSequenceNumber";
const _ESSA = "ExclusiveStartStreamArn";
const _ESSI = "ExclusiveStartShardId";
const _GR = "GetRecords";
const _GRI = "GetRecordsInput";
const _GRO = "GetRecordsOutput";
const _GSI = "GetShardIterator";
const _GSII = "GetShardIteratorInput";
const _GSIO = "GetShardIteratorOutput";
const _I = "Identity";
const _ISE = "InternalServerError";
const _K = "Keys";
const _KS = "KeySchema";
const _KSE = "KeySchemaElement";
const _KT = "KeyType";
const _L = "Limit";
const _LAV = "ListAttributeValue";
const _LEE = "LimitExceededException";
const _LESA = "LastEvaluatedStreamArn";
const _LESI = "LastEvaluatedShardId";
const _LS = "ListStreams";
const _LSI = "ListStreamsInput";
const _LSO = "ListStreamsOutput";
const _L_ = "L";
const _M = "M";
const _MAV = "MapAttributeValue";
const _N = "N";
const _NI = "NewImage";
const _NS = "NS";
const _NSI = "NextShardIterator";
const _NULL = "NULL";
const _OI = "OldImage";
const _PI = "PrincipalId";
const _PSI = "ParentShardId";
const _R = "Records";
const _RL = "RecordList";
const _RNFE = "ResourceNotFoundException";
const _Re = "Record";
const _S = "Streams";
const _SA = "StreamArn";
const _SB = "SizeBytes";
const _SD = "StreamDescription";
const _SDL = "ShardDescriptionList";
const _SF = "ShardFilter";
const _SI = "ShardIterator";
const _SIT = "ShardIteratorType";
const _SIh = "ShardId";
const _SL = "StreamLabel";
const _SLt = "StreamList";
const _SN = "SequenceNumber";
const _SNR = "SequenceNumberRange";
const _SR = "StreamRecord";
const _SS = "StreamStatus";
const _SSN = "StartingSequenceNumber";
const _SS_ = "SS";
const _SVT = "StreamViewType";
const _S_ = "S";
const _Sh = "Shard";
const _Sha = "Shards";
const _St = "Stream";
const _T = "Type";
const _TDAE = "TrimmedDataAccessException";
const _TN = "TableName";
const _aR = "awsRegion";
const _c = "client";
const _d = "dynamodb";
const _e = "error";
const _eID = "eventID";
const _eN = "eventName";
const _eS = "eventSource";
const _eV = "eventVersion";
const _m = "message";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.dynamodbstreams";
const _uI = "userIdentity";
const n0 = "com.amazonaws.dynamodbstreams";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
  StaticUnionSchema,
} from "@smithy/types";

import { DynamoDBStreamsServiceException } from "../models/DynamoDBStreamsServiceException";
import {
  ExpiredIteratorException,
  InternalServerError,
  LimitExceededException,
  ResourceNotFoundException,
  TrimmedDataAccessException,
} from "../models/errors";

/* eslint no-var: 0 */
export var DescribeStreamInput$: StaticStructureSchema = [
  3,
  n0,
  _DSI,
  0,
  [_SA, _L, _ESSI, _SF],
  [0, 1, 0, () => ShardFilter$],
];
export var DescribeStreamOutput$: StaticStructureSchema = [3, n0, _DSO, 0, [_SD], [() => StreamDescription$]];
export var ExpiredIteratorException$: StaticErrorSchema = [-3, n0, _EIE, { [_e]: _c }, [_m], [0]];
TypeRegistry.for(n0).registerError(ExpiredIteratorException$, ExpiredIteratorException);
export var GetRecordsInput$: StaticStructureSchema = [3, n0, _GRI, 0, [_SI, _L], [0, 1]];
export var GetRecordsOutput$: StaticStructureSchema = [3, n0, _GRO, 0, [_R, _NSI], [() => RecordList, 0]];
export var GetShardIteratorInput$: StaticStructureSchema = [3, n0, _GSII, 0, [_SA, _SIh, _SIT, _SN], [0, 0, 0, 0]];
export var GetShardIteratorOutput$: StaticStructureSchema = [3, n0, _GSIO, 0, [_SI], [0]];
export var Identity$: StaticStructureSchema = [3, n0, _I, 0, [_PI, _T], [0, 0]];
export var InternalServerError$: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _s }, [_m], [0]];
TypeRegistry.for(n0).registerError(InternalServerError$, InternalServerError);
export var KeySchemaElement$: StaticStructureSchema = [3, n0, _KSE, 0, [_AN, _KT], [0, 0]];
export var LimitExceededException$: StaticErrorSchema = [-3, n0, _LEE, { [_e]: _c }, [_m], [0]];
TypeRegistry.for(n0).registerError(LimitExceededException$, LimitExceededException);
export var ListStreamsInput$: StaticStructureSchema = [3, n0, _LSI, 0, [_TN, _L, _ESSA], [0, 1, 0]];
export var ListStreamsOutput$: StaticStructureSchema = [3, n0, _LSO, 0, [_S, _LESA], [() => StreamList, 0]];
export var _Record$: StaticStructureSchema = [
  3,
  n0,
  _Re,
  0,
  [_eID, _eN, _eV, _eS, _aR, _d, _uI],
  [0, 0, 0, 0, 0, () => StreamRecord$, () => Identity$],
];
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE, { [_e]: _c }, [_m], [0]];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var SequenceNumberRange$: StaticStructureSchema = [3, n0, _SNR, 0, [_SSN, _ESN], [0, 0]];
export var Shard$: StaticStructureSchema = [3, n0, _Sh, 0, [_SIh, _SNR, _PSI], [0, () => SequenceNumberRange$, 0]];
export var ShardFilter$: StaticStructureSchema = [3, n0, _SF, 0, [_T, _SIh], [0, 0]];
export var _Stream$: StaticStructureSchema = [3, n0, _St, 0, [_SA, _TN, _SL], [0, 0, 0]];
export var StreamDescription$: StaticStructureSchema = [
  3,
  n0,
  _SD,
  0,
  [_SA, _SL, _SS, _SVT, _CRDT, _TN, _KS, _Sha, _LESI],
  [0, 0, 0, 0, 4, 0, () => KeySchema, () => ShardDescriptionList, 0],
];
export var StreamRecord$: StaticStructureSchema = [
  3,
  n0,
  _SR,
  0,
  [_ACDT, _K, _NI, _OI, _SN, _SB, _SVT],
  [4, () => AttributeMap, () => AttributeMap, () => AttributeMap, 0, 1, 0],
];
export var TrimmedDataAccessException$: StaticErrorSchema = [-3, n0, _TDAE, { [_e]: _c }, [_m], [0]];
TypeRegistry.for(n0).registerError(TrimmedDataAccessException$, TrimmedDataAccessException);
export var DynamoDBStreamsServiceException$: StaticErrorSchema = [
  -3,
  _sm,
  "DynamoDBStreamsServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(DynamoDBStreamsServiceException$, DynamoDBStreamsServiceException);
var BinarySetAttributeValue = 64 | 21;
var KeySchema: StaticListSchema = [1, n0, _KS, 0, () => KeySchemaElement$];
var ListAttributeValue: StaticListSchema = [1, n0, _LAV, 0, () => AttributeValue$];
var NumberSetAttributeValue = 64 | 0;
var RecordList: StaticListSchema = [1, n0, _RL, 0, () => _Record$];
var ShardDescriptionList: StaticListSchema = [1, n0, _SDL, 0, () => Shard$];
var StreamList: StaticListSchema = [1, n0, _SLt, 0, () => _Stream$];
var StringSetAttributeValue = 64 | 0;
var AttributeMap: StaticMapSchema = [2, n0, _AM, 0, 0, () => AttributeValue$];
var MapAttributeValue: StaticMapSchema = [2, n0, _MAV, 0, 0, () => AttributeValue$];
export var AttributeValue$: StaticUnionSchema = [
  4,
  n0,
  _AV,
  0,
  [_S_, _N, _B, _SS_, _NS, _BS, _M, _L_, _NULL, _BOOL],
  [0, 0, 21, 64 | 0, 64 | 0, 64 | 21, () => MapAttributeValue, () => ListAttributeValue, 2, 2],
];
export var DescribeStream$: StaticOperationSchema = [
  9,
  n0,
  _DS,
  0,
  () => DescribeStreamInput$,
  () => DescribeStreamOutput$,
];
export var GetRecords$: StaticOperationSchema = [9, n0, _GR, 0, () => GetRecordsInput$, () => GetRecordsOutput$];
export var GetShardIterator$: StaticOperationSchema = [
  9,
  n0,
  _GSI,
  0,
  () => GetShardIteratorInput$,
  () => GetShardIteratorOutput$,
];
export var ListStreams$: StaticOperationSchema = [9, n0, _LS, 0, () => ListStreamsInput$, () => ListStreamsOutput$];

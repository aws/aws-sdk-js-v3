export const _ADE = "AccessDeniedException";
export const _GR = "GetRecords";
export const _GRI = "GetRecordsInput";
export const _GRO = "GetRecordsOutput";
export const _GS = "GetStream";
export const _GSI = "GetStreamInput";
export const _GSII = "GetShardIteratorInput";
export const _GSIO = "GetShardIteratorOutput";
export const _GSIe = "GetShardIterator";
export const _GSO = "GetStreamOutput";
export const _ISE = "InternalServerException";
export const _KC = "KeyspacesCell";
export const _KCL = "KeyspacesCellList";
export const _KCM = "KeyspacesCellMap";
export const _KCMD = "KeyspacesCellMapDefinition";
export const _KCV = "KeyspacesCellValue";
export const _KCe = "KeyspacesCells";
export const _KKM = "KeyspacesKeysMap";
export const _KM = "KeyspacesMetadata";
export const _KR = "KeyspacesRow";
export const _KUM = "KeyspacesUdtMap";
export const _LS = "ListStreams";
export const _LSI = "ListStreamsInput";
export const _LSO = "ListStreamsOutput";
export const _R = "Record";
export const _RL = "RecordList";
export const _RNFE = "ResourceNotFoundException";
export const _S = "Shard";
export const _SDL = "ShardDescriptionList";
export const _SF = "ShardFilter";
export const _SL = "StreamList";
export const _SNR = "SequenceNumberRange";
export const _St = "Stream";
export const _TE = "ThrottlingException";
export const _VE = "ValidationException";
export const _aQE = "awsQueryError";
export const _aT = "asciiT";
export const _bT = "bigintT";
export const _bTl = "blobT";
export const _bTo = "boolT";
export const _c = "client";
export const _cA = "createdAt";
export const _cK = "clusteringKeys";
export const _cR = "changeRecords";
export const _cRDT = "creationRequestDateTime";
export const _cT = "counterT";
export const _dT = "dateT";
export const _dTe = "decimalT";
export const _dTo = "doubleT";
export const _e = "error";
export const _eC = "errorCode";
export const _eSN = "endingSequenceNumber";
export const _eT = "expirationTime";
export const _eV = "eventVersion";
export const _fT = "floatT";
export const _hE = "httpError";
export const _iT = "inetT";
export const _iTn = "intT";
export const _k = "key";
export const _kN = "keyspaceName";
export const _lT = "listT";
export const _m = "message";
export const _mR = "maxResults";
export const _mT = "mapT";
export const _me = "metadata";
export const _nI = "newImage";
export const _nSI = "nextShardIterator";
export const _nT = "nextToken";
export const _o = "origin";
export const _oI = "oldImage";
export const _pK = "partitionKeys";
export const _pSI = "parentShardIds";
export const _rM = "rowMetadata";
export const _s = "shards";
export const _sA = "streamArn";
export const _sC = "staticCells";
export const _sF = "shardFilter";
export const _sI = "shardIterator";
export const _sIT = "shardIteratorType";
export const _sIh = "shardId";
export const _sL = "streamLabel";
export const _sN = "sequenceNumber";
export const _sNR = "sequenceNumberRange";
export const _sS = "streamStatus";
export const _sSN = "startingSequenceNumber";
export const _sT = "setT";
export const _sTm = "smallintT";
export const _sVT = "streamViewType";
export const _se = "server";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.keyspacesstreams";
export const _st = "streams";
export const _t = "type";
export const _tN = "tableName";
export const _tT = "textT";
export const _tTi = "timeT";
export const _tTim = "timestampT";
export const _tTime = "timeuuidT";
export const _tTin = "tinyintT";
export const _tTu = "tupleT";
export const _uT = "uuidT";
export const _uTd = "udtT";
export const _v = "value";
export const _vC = "valueCells";
export const _vT = "varcharT";
export const _vTa = "varintT";
export const _wT = "writeTime";
export const n0 = "com.amazonaws.keyspacesstreams";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import { KeyspacesStreamsServiceException as __KeyspacesStreamsServiceException } from "../models/KeyspacesStreamsServiceException";

/* eslint no-var: 0 */

export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`AccessDeniedException`, 403],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var GetRecordsInput: StaticStructureSchema = [3, n0, _GRI, 0, [_sI, _mR], [0, 1]];
export var GetRecordsOutput: StaticStructureSchema = [3, n0, _GRO, 0, [_cR, _nSI], [() => RecordList, 0]];
export var GetShardIteratorInput: StaticStructureSchema = [3, n0, _GSII, 0, [_sA, _sIh, _sIT, _sN], [0, 0, 0, 0]];
export var GetShardIteratorOutput: StaticStructureSchema = [3, n0, _GSIO, 0, [_sI], [0]];
export var GetStreamInput: StaticStructureSchema = [3, n0, _GSI, 0, [_sA, _mR, _sF, _nT], [0, 1, () => ShardFilter, 0]];
export var GetStreamOutput: StaticStructureSchema = [
  3,
  n0,
  _GSO,
  0,
  [_sA, _sL, _sS, _sVT, _cRDT, _kN, _tN, _s, _nT],
  [0, 0, 0, 0, 4, 0, 0, () => ShardDescriptionList, 0],
];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
    [_aQE]: [`InternalServerException`, 500],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var KeyspacesCell: StaticStructureSchema = [
  3,
  n0,
  _KC,
  0,
  [_v, _me],
  [() => KeyspacesCellValue, () => KeyspacesMetadata],
];
export var KeyspacesCellMapDefinition: StaticStructureSchema = [
  3,
  n0,
  _KCMD,
  0,
  [_k, _v, _me],
  [() => KeyspacesCellValue, () => KeyspacesCellValue, () => KeyspacesMetadata],
];
export var KeyspacesMetadata: StaticStructureSchema = [3, n0, _KM, 0, [_eT, _wT], [0, 0]];
export var KeyspacesRow: StaticStructureSchema = [
  3,
  n0,
  _KR,
  0,
  [_vC, _sC, _rM],
  [() => KeyspacesCells, () => KeyspacesCells, () => KeyspacesMetadata],
];
export var ListStreamsInput: StaticStructureSchema = [3, n0, _LSI, 0, [_kN, _tN, _mR, _nT], [0, 0, 1, 0]];
export var ListStreamsOutput: StaticStructureSchema = [3, n0, _LSO, 0, [_st, _nT], [() => StreamList, 0]];
export var _Record: StaticStructureSchema = [
  3,
  n0,
  _R,
  0,
  [_eV, _cA, _o, _pK, _cK, _nI, _oI, _sN],
  [0, 4, 0, () => KeyspacesKeysMap, () => KeyspacesKeysMap, () => KeyspacesRow, () => KeyspacesRow, 0],
];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ResourceNotFoundException`, 404],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var SequenceNumberRange: StaticStructureSchema = [3, n0, _SNR, 0, [_sSN, _eSN], [0, 0]];
export var Shard: StaticStructureSchema = [3, n0, _S, 0, [_sIh, _sNR, _pSI], [0, () => SequenceNumberRange, 64 | 0]];
export var ShardFilter: StaticStructureSchema = [3, n0, _SF, 0, [_t, _sIh], [0, 0]];
export var _Stream: StaticStructureSchema = [3, n0, _St, 0, [_sA, _kN, _tN, _sL], [0, 0, 0, 0]];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
    [_aQE]: [`ThrottlingException`, 429],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ValidationException`, 400],
  },
  [_m, _eC],
  [0, 0],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var __Unit = "unit" as const;

export var KeyspacesStreamsServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "KeyspacesStreamsServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(KeyspacesStreamsServiceException, __KeyspacesStreamsServiceException);

export var KeyspacesCellList: StaticListSchema = [1, n0, _KCL, 0, () => KeyspacesCell];
export var KeyspacesCellMap: StaticListSchema = [1, n0, _KCM, 0, () => KeyspacesCellMapDefinition];
export var RecordList: StaticListSchema = [1, n0, _RL, 0, () => _Record];
export var ShardDescriptionList: StaticListSchema = [1, n0, _SDL, 0, () => Shard];
export var ShardIdList = 64 | 0;

export var StreamList: StaticListSchema = [1, n0, _SL, 0, () => _Stream];
export var KeyspacesCells: StaticMapSchema = [2, n0, _KCe, 0, 0, () => KeyspacesCell];
export var KeyspacesKeysMap: StaticMapSchema = [2, n0, _KKM, 0, 0, () => KeyspacesCellValue];
export var KeyspacesUdtMap: StaticMapSchema = [2, n0, _KUM, 0, 0, () => KeyspacesCell];
export var KeyspacesCellValue: StaticStructureSchema = [
  3,
  n0,
  _KCV,
  0,
  [
    _aT,
    _bT,
    _bTl,
    _bTo,
    _cT,
    _dT,
    _dTe,
    _dTo,
    _fT,
    _iT,
    _iTn,
    _lT,
    _mT,
    _sT,
    _sTm,
    _tT,
    _tTi,
    _tTim,
    _tTime,
    _tTin,
    _tTu,
    _uT,
    _vT,
    _vTa,
    _uTd,
  ],
  [
    0,
    0,
    21,
    2,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    () => KeyspacesCellList,
    () => KeyspacesCellMap,
    () => KeyspacesCellList,
    0,
    0,
    0,
    0,
    0,
    0,
    () => KeyspacesCellList,
    0,
    0,
    0,
    () => KeyspacesUdtMap,
  ],
];
export var GetRecords: StaticOperationSchema = [9, n0, _GR, 0, () => GetRecordsInput, () => GetRecordsOutput];
export var GetShardIterator: StaticOperationSchema = [
  9,
  n0,
  _GSIe,
  0,
  () => GetShardIteratorInput,
  () => GetShardIteratorOutput,
];
export var GetStream: StaticOperationSchema = [9, n0, _GS, 0, () => GetStreamInput, () => GetStreamOutput];
export var ListStreams: StaticOperationSchema = [9, n0, _LS, 0, () => ListStreamsInput, () => ListStreamsOutput];

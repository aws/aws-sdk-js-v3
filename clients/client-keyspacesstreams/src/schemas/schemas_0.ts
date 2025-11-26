const _ADE = "AccessDeniedException";
const _GR = "GetRecords";
const _GRI = "GetRecordsInput";
const _GRO = "GetRecordsOutput";
const _GS = "GetStream";
const _GSI = "GetStreamInput";
const _GSII = "GetShardIteratorInput";
const _GSIO = "GetShardIteratorOutput";
const _GSIe = "GetShardIterator";
const _GSO = "GetStreamOutput";
const _ISE = "InternalServerException";
const _KC = "KeyspacesCell";
const _KCL = "KeyspacesCellList";
const _KCM = "KeyspacesCellMap";
const _KCMD = "KeyspacesCellMapDefinition";
const _KCV = "KeyspacesCellValue";
const _KCe = "KeyspacesCells";
const _KKM = "KeyspacesKeysMap";
const _KM = "KeyspacesMetadata";
const _KR = "KeyspacesRow";
const _KUM = "KeyspacesUdtMap";
const _LS = "ListStreams";
const _LSI = "ListStreamsInput";
const _LSO = "ListStreamsOutput";
const _R = "Record";
const _RL = "RecordList";
const _RNFE = "ResourceNotFoundException";
const _S = "Shard";
const _SDL = "ShardDescriptionList";
const _SF = "ShardFilter";
const _SL = "StreamList";
const _SNR = "SequenceNumberRange";
const _St = "Stream";
const _TE = "ThrottlingException";
const _VE = "ValidationException";
const _aQE = "awsQueryError";
const _aT = "asciiT";
const _bT = "bigintT";
const _bTl = "blobT";
const _bTo = "boolT";
const _c = "client";
const _cA = "createdAt";
const _cK = "clusteringKeys";
const _cR = "changeRecords";
const _cRDT = "creationRequestDateTime";
const _cT = "counterT";
const _dT = "dateT";
const _dTe = "decimalT";
const _dTo = "doubleT";
const _e = "error";
const _eC = "errorCode";
const _eSN = "endingSequenceNumber";
const _eT = "expirationTime";
const _eV = "eventVersion";
const _fT = "floatT";
const _hE = "httpError";
const _iT = "inetT";
const _iTn = "intT";
const _k = "key";
const _kN = "keyspaceName";
const _lT = "listT";
const _m = "message";
const _mR = "maxResults";
const _mT = "mapT";
const _me = "metadata";
const _nI = "newImage";
const _nSI = "nextShardIterator";
const _nT = "nextToken";
const _o = "origin";
const _oI = "oldImage";
const _pK = "partitionKeys";
const _pSI = "parentShardIds";
const _rM = "rowMetadata";
const _s = "shards";
const _sA = "streamArn";
const _sC = "staticCells";
const _sF = "shardFilter";
const _sI = "shardIterator";
const _sIT = "shardIteratorType";
const _sIh = "shardId";
const _sL = "streamLabel";
const _sN = "sequenceNumber";
const _sNR = "sequenceNumberRange";
const _sS = "streamStatus";
const _sSN = "startingSequenceNumber";
const _sT = "setT";
const _sTm = "smallintT";
const _sVT = "streamViewType";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.keyspacesstreams";
const _st = "streams";
const _t = "type";
const _tN = "tableName";
const _tT = "textT";
const _tTi = "timeT";
const _tTim = "timestampT";
const _tTime = "timeuuidT";
const _tTin = "tinyintT";
const _tTu = "tupleT";
const _uT = "uuidT";
const _uTd = "udtT";
const _v = "value";
const _vC = "valueCells";
const _vT = "varcharT";
const _vTa = "varintT";
const _wT = "writeTime";
const n0 = "com.amazonaws.keyspacesstreams";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
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
} from "../models/errors";
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

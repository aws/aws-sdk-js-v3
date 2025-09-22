// smithy-typescript generated code
import { error, list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _ADE,
  _aQE,
  _aT,
  _bT,
  _bTl,
  _bTo,
  _c,
  _cA,
  _cK,
  _cR,
  _cRDT,
  _cT,
  _dT,
  _dTe,
  _dTo,
  _e,
  _eC,
  _eSN,
  _eT,
  _eV,
  _fT,
  _GR,
  _GRI,
  _GRO,
  _GS,
  _GSI,
  _GSIe,
  _GSII,
  _GSIO,
  _GSO,
  _hE,
  _ISE,
  _iT,
  _iTn,
  _k,
  _KC,
  _KCe,
  _KCL,
  _KCM,
  _KCMD,
  _KCV,
  _KKM,
  _KM,
  _kN,
  _KR,
  _KUM,
  _LS,
  _LSI,
  _LSO,
  _lT,
  _m,
  _me,
  _mR,
  _mT,
  _nI,
  _nSI,
  _nT,
  _o,
  _oI,
  _pK,
  _pSI,
  _R,
  _RL,
  _rM,
  _RNFE,
  _S,
  _s,
  _sA,
  _sC,
  _SDL,
  _se,
  _SF,
  _sF,
  _sI,
  _sIh,
  _sIT,
  _SL,
  _sL,
  _sN,
  _SNR,
  _sNR,
  _sS,
  _sSN,
  _St,
  _sT,
  _st,
  _sTm,
  _sVT,
  _t,
  _TE,
  _tN,
  _tT,
  _tTi,
  _tTim,
  _tTime,
  _tTin,
  _tTu,
  _uT,
  _uTd,
  _v,
  _vC,
  _VE,
  _vT,
  _vTa,
  _wT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`AccessDeniedException`, 403],
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var GetRecordsInput = struct(n0, _GRI, 0, [_sI, _mR], [0, 1]);
export var GetRecordsOutput = struct(n0, _GRO, 0, [_cR, _nSI], [() => RecordList, 0]);
export var GetShardIteratorInput = struct(n0, _GSII, 0, [_sA, _sIh, _sIT, _sN], [0, 0, 0, 0]);
export var GetShardIteratorOutput = struct(n0, _GSIO, 0, [_sI], [0]);
export var GetStreamInput = struct(n0, _GSI, 0, [_sA, _mR, _sF, _nT], [0, 1, () => ShardFilter, 0]);
export var GetStreamOutput = struct(
  n0,
  _GSO,
  0,
  [_sA, _sL, _sS, _sVT, _cRDT, _kN, _tN, _s, _nT],
  [0, 0, 0, 0, 4, 0, 0, () => ShardDescriptionList, 0]
);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
    [_aQE]: [`InternalServerException`, 500],
  },
  [_m],
  [0],

  __InternalServerException
);
export var KeyspacesCell = struct(n0, _KC, 0, [_v, _me], [() => KeyspacesCellValue, () => KeyspacesMetadata]);
export var KeyspacesCellMapDefinition = struct(
  n0,
  _KCMD,
  0,
  [_k, _v, _me],
  [() => KeyspacesCellValue, () => KeyspacesCellValue, () => KeyspacesMetadata]
);
export var KeyspacesMetadata = struct(n0, _KM, 0, [_eT, _wT], [0, 0]);
export var KeyspacesRow = struct(
  n0,
  _KR,
  0,
  [_vC, _sC, _rM],
  [() => KeyspacesCells, () => KeyspacesCells, () => KeyspacesMetadata]
);
export var ListStreamsInput = struct(n0, _LSI, 0, [_kN, _tN, _mR, _nT], [0, 0, 1, 0]);
export var ListStreamsOutput = struct(n0, _LSO, 0, [_st, _nT], [() => StreamList, 0]);
export var _Record = struct(
  n0,
  _R,
  0,
  [_eV, _cA, _o, _pK, _cK, _nI, _oI, _sN],
  [0, 4, 0, () => KeyspacesKeysMap, () => KeyspacesKeysMap, () => KeyspacesRow, () => KeyspacesRow, 0]
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ResourceNotFoundException`, 404],
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var SequenceNumberRange = struct(n0, _SNR, 0, [_sSN, _eSN], [0, 0]);
export var Shard = struct(n0, _S, 0, [_sIh, _sNR, _pSI], [0, () => SequenceNumberRange, 64 | 0]);
export var ShardFilter = struct(n0, _SF, 0, [_t, _sIh], [0, 0]);
export var _Stream = struct(n0, _St, 0, [_sA, _kN, _tN, _sL], [0, 0, 0, 0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
    [_aQE]: [`ThrottlingException`, 429],
  },
  [_m],
  [0],

  __ThrottlingException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ValidationException`, 400],
  },
  [_m, _eC],
  [0, 0],

  __ValidationException
);
export var Unit = "unit" as const;

export var KeyspacesCellList = list(n0, _KCL, 0, () => KeyspacesCell);
export var KeyspacesCellMap = list(n0, _KCM, 0, () => KeyspacesCellMapDefinition);
export var RecordList = list(n0, _RL, 0, () => _Record);
export var ShardDescriptionList = list(n0, _SDL, 0, () => Shard);
export var ShardIdList = 64 | 0;

export var StreamList = list(n0, _SL, 0, () => _Stream);
export var KeyspacesCells = map(n0, _KCe, 0, 0, () => KeyspacesCell);
export var KeyspacesKeysMap = map(n0, _KKM, 0, 0, () => KeyspacesCellValue);
export var KeyspacesUdtMap = map(n0, _KUM, 0, 0, () => KeyspacesCell);
export var KeyspacesCellValue = uni(
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
  ]
);
export var GetRecords = op(
  n0,
  _GR,
  0,
  () => GetRecordsInput,
  () => GetRecordsOutput
);
export var GetShardIterator = op(
  n0,
  _GSIe,
  0,
  () => GetShardIteratorInput,
  () => GetShardIteratorOutput
);
export var GetStream = op(
  n0,
  _GS,
  0,
  () => GetStreamInput,
  () => GetStreamOutput
);
export var ListStreams = op(
  n0,
  _LS,
  0,
  () => ListStreamsInput,
  () => ListStreamsOutput
);

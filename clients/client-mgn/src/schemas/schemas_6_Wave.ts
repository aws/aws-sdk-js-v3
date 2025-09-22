// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aIDc,
  _AW,
  _AWR,
  _cDT,
  _CW,
  _CWR,
  _d,
  _f,
  _hS,
  _ht,
  _i,
  _iA,
  _lMDT,
  _lUDT,
  _LW,
  _LWR,
  _LWRF,
  _LWRi,
  _mR,
  _n,
  _nT,
  _pS,
  _rSDT,
  _t,
  _tA,
  _UW,
  _UWp,
  _UWR,
  _UWRp,
  _W,
  _WAS,
  _wAS,
  _wID,
  _wIDa,
  _WL,
  n0,
  TagsMap,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ArchiveWaveRequest = struct(n0, _AWR, 0, [_wID, _aIDc], [0, 0]);
export var CreateWaveRequest = struct(n0, _CWR, 0, [_n, _d, _t, _aIDc], [0, 0, [() => TagsMap, 0], 0]);
export var ListWavesRequest = struct(n0, _LWR, 0, [_f, _mR, _nT, _aIDc], [() => ListWavesRequestFilters, 1, 0, 0]);
export var ListWavesRequestFilters = struct(n0, _LWRF, 0, [_wIDa, _iA], [64 | 0, 2]);
export var ListWavesResponse = struct(n0, _LWRi, 0, [_i, _nT], [[() => WavesList, 0], 0]);
export var UnarchiveWaveRequest = struct(n0, _UWR, 0, [_wID, _aIDc], [0, 0]);
export var UpdateWaveRequest = struct(n0, _UWRp, 0, [_wID, _n, _d, _aIDc], [0, 0, 0, 0]);
export var Wave = struct(
  n0,
  _W,
  0,
  [_wID, _a, _n, _d, _iA, _wAS, _cDT, _lMDT, _t],
  [0, 0, 0, 0, 2, () => WaveAggregatedStatus, 0, 0, [() => TagsMap, 0]]
);
export var WaveAggregatedStatus = struct(n0, _WAS, 0, [_lUDT, _rSDT, _hS, _pS, _tA], [0, 0, 0, 0, 1]);
export var WavesList = list(n0, _WL, 0, [() => Wave, 0]);
export var ArchiveWave = op(
  n0,
  _AW,
  {
    [_ht]: ["POST", "/ArchiveWave", 200],
  },
  () => ArchiveWaveRequest,
  () => Wave
);
export var CreateWave = op(
  n0,
  _CW,
  {
    [_ht]: ["POST", "/CreateWave", 201],
  },
  () => CreateWaveRequest,
  () => Wave
);
export var ListWaves = op(
  n0,
  _LW,
  {
    [_ht]: ["POST", "/ListWaves", 200],
  },
  () => ListWavesRequest,
  () => ListWavesResponse
);
export var UnarchiveWave = op(
  n0,
  _UW,
  {
    [_ht]: ["POST", "/UnarchiveWave", 200],
  },
  () => UnarchiveWaveRequest,
  () => Wave
);
export var UpdateWave = op(
  n0,
  _UWp,
  {
    [_ht]: ["POST", "/UpdateWave", 200],
  },
  () => UpdateWaveRequest,
  () => Wave
);

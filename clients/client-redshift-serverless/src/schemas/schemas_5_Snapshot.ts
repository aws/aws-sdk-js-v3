// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aIBSIMB,
  _aPSA,
  _aPSKKI,
  _aU,
  _aWPRA,
  _aWRA,
  _bPIMB,
  _cBRIMBPS,
  _DS,
  _DSR,
  _DSRe,
  _eSTC,
  _eT,
  _eTIS,
  _GRP,
  _GRPR,
  _GRPRe,
  _GS,
  _GSR,
  _GSRe,
  _hQ,
  _kKI,
  _LRP,
  _LRPR,
  _LRPRi,
  _LS,
  _LSR,
  _LSRi,
  _mR,
  _nA,
  _nN,
  _nT,
  _oA,
  _RP,
  _rP,
  _rPCT,
  _rPe,
  _rPec,
  _rPI,
  _RPL,
  _S,
  _s,
  _sAn,
  _sCT,
  _SL,
  _sN,
  _sn,
  _sRD,
  _sRP,
  _sRST,
  _sT,
  _st,
  _tBSIMB,
  _tSIMB,
  _US,
  _USR,
  _USRp,
  _wN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSnapshotRequest = struct(n0, _DSR, 0, [_sN], [0]);
export var DeleteSnapshotResponse = struct(n0, _DSRe, 0, [_s], [() => Snapshot]);
export var GetRecoveryPointRequest = struct(n0, _GRPR, 0, [_rPI], [0]);
export var GetRecoveryPointResponse = struct(n0, _GRPRe, 0, [_rPe], [() => RecoveryPoint]);
export var GetSnapshotRequest = struct(n0, _GSR, 0, [_sN, _oA, _sAn], [0, 0, 0]);
export var GetSnapshotResponse = struct(n0, _GSRe, 0, [_s], [() => Snapshot]);
export var ListRecoveryPointsRequest = struct(
  n0,
  _LRPR,
  0,
  [_nT, _mR, _sT, _eT, _nN, _nA],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    4,
    4,
    0,
    0,
  ]
);
export var ListRecoveryPointsResponse = struct(n0, _LRPRi, 0, [_rPec, _nT], [() => RecoveryPointList, 0]);
export var ListSnapshotsRequest = struct(
  n0,
  _LSR,
  0,
  [_nT, _mR, _nN, _nA, _oA, _sT, _eT],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    0,
    0,
    0,
    4,
    4,
  ]
);
export var ListSnapshotsResponse = struct(n0, _LSRi, 0, [_nT, _sn], [0, () => SnapshotList]);
export var RecoveryPoint = struct(n0, _RP, 0, [_rPI, _rPCT, _tSIMB, _nN, _wN, _nA], [0, 5, 1, 0, 0, 0]);
export var Snapshot = struct(
  n0,
  _S,
  0,
  [
    _nN,
    _nA,
    _sN,
    _sCT,
    _aU,
    _st,
    _kKI,
    _oA,
    _tBSIMB,
    _aIBSIMB,
    _bPIMB,
    _cBRIMBPS,
    _eSTC,
    _eTIS,
    _sRP,
    _sRD,
    _sRST,
    _sAn,
    _aWRA,
    _aWPRA,
    _aPSA,
    _aPSKKI,
  ],
  [0, 0, 0, 5, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 5, 0, 64 | 0, 64 | 0, 0, 0]
);
export var UpdateSnapshotRequest = struct(n0, _USR, 0, [_sN, _rP], [0, 1]);
export var UpdateSnapshotResponse = struct(n0, _USRp, 0, [_s], [() => Snapshot]);
export var AccountIdList = 64 | 0;

export var RecoveryPointList = list(n0, _RPL, 0, () => RecoveryPoint);
export var SnapshotList = list(n0, _SL, 0, () => Snapshot);
export var DeleteSnapshot = op(
  n0,
  _DS,
  2,
  () => DeleteSnapshotRequest,
  () => DeleteSnapshotResponse
);
export var GetRecoveryPoint = op(
  n0,
  _GRP,
  0,
  () => GetRecoveryPointRequest,
  () => GetRecoveryPointResponse
);
export var GetSnapshot = op(
  n0,
  _GS,
  0,
  () => GetSnapshotRequest,
  () => GetSnapshotResponse
);
export var ListRecoveryPoints = op(
  n0,
  _LRP,
  0,
  () => ListRecoveryPointsRequest,
  () => ListRecoveryPointsResponse
);
export var ListSnapshots = op(
  n0,
  _LS,
  0,
  () => ListSnapshotsRequest,
  () => ListSnapshotsResponse
);
export var UpdateSnapshot = op(
  n0,
  _US,
  0,
  () => UpdateSnapshotRequest,
  () => UpdateSnapshotResponse
);

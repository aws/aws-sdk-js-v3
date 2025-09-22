// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _bN,
  _bNH,
  _CG,
  _CGI,
  _CGO,
  _CGUIT,
  _CGUITI,
  _CGUITO,
  _cT,
  _DG,
  _DGI,
  _DGO,
  _di,
  _dP,
  _en,
  _f,
  _fOE,
  _g,
  _GG,
  _GGI,
  _GGO,
  _gI,
  _gIr,
  _gN,
  _GS,
  _GSL,
  _h,
  _hQ,
  _i,
  _iO,
  _kKI,
  _LG,
  _LGI,
  _LGO,
  _mPM,
  _mPMi,
  _mR,
  _n,
  _nT,
  _pC,
  _pM,
  _pT,
  _rA,
  _rC,
  _RG,
  _RGFS,
  _RGFSI,
  _RGFSO,
  _RGI,
  _RGO,
  _SG,
  _SGI,
  _SGIt,
  _SGO,
  _SGOt,
  _SGt,
  _sIn,
  _so,
  _sR,
  _sS,
  _sSI,
  _st,
  _t,
  _tIa,
  _UG,
  _UGI,
  _UGO,
  _VSC,
  _vSC,
  n0,
} from "./schemas_0";
import { ImportOptions } from "./schemas_4_Task";

/* eslint no-var: 0 */

export var CreateGraphInput = struct(
  n0,
  _CGI,
  0,
  [_gN, _t, _pC, _kKI, _vSC, _rC, _dP, _pM],
  [0, 128 | 0, 2, 0, () => VectorSearchConfiguration, 1, 2, 1]
);
export var CreateGraphOutput = struct(
  n0,
  _CGO,
  0,
  [_i, _n, _a, _st, _sR, _cT, _pM, _en, _pC, _vSC, _rC, _kKI, _sSI, _dP, _bN],
  [0, 0, 0, 0, 0, 4, 1, 0, 2, () => VectorSearchConfiguration, 1, 0, 0, 2, 0]
);
export var CreateGraphUsingImportTaskInput = struct(
  n0,
  _CGUITI,
  0,
  [_gN, _t, _pC, _kKI, _vSC, _rC, _dP, _iO, _mPM, _mPMi, _fOE, _so, _f, _pT, _bNH, _rA],
  [0, 128 | 0, 2, 0, () => VectorSearchConfiguration, 1, 2, () => ImportOptions, 1, 1, 2, 0, 0, 0, 0, 0]
);
export var CreateGraphUsingImportTaskOutput = struct(
  n0,
  _CGUITO,
  0,
  [_gI, _tIa, _so, _f, _pT, _rA, _st, _iO],
  [0, 0, 0, 0, 0, 0, 0, () => ImportOptions]
);
export var DeleteGraphInput = struct(
  n0,
  _DGI,
  0,
  [_gIr, _sS],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _sS,
      },
    ],
  ]
);
export var DeleteGraphOutput = struct(
  n0,
  _DGO,
  0,
  [_i, _n, _a, _st, _sR, _cT, _pM, _en, _pC, _vSC, _rC, _kKI, _sSI, _dP, _bN],
  [0, 0, 0, 0, 0, 4, 1, 0, 2, () => VectorSearchConfiguration, 1, 0, 0, 2, 0]
);
export var GetGraphInput = struct(n0, _GGI, 0, [_gIr], [[0, 1]]);
export var GetGraphOutput = struct(
  n0,
  _GGO,
  0,
  [_i, _n, _a, _st, _sR, _cT, _pM, _en, _pC, _vSC, _rC, _kKI, _sSI, _dP, _bN],
  [0, 0, 0, 0, 0, 4, 1, 0, 2, () => VectorSearchConfiguration, 1, 0, 0, 2, 0]
);
export var GraphSummary = struct(
  n0,
  _GS,
  0,
  [_i, _n, _a, _st, _pM, _pC, _en, _rC, _kKI, _dP],
  [0, 0, 0, 0, 1, 2, 0, 1, 0, 2]
);
export var ListGraphsInput = struct(
  n0,
  _LGI,
  0,
  [_nT, _mR],
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
  ]
);
export var ListGraphsOutput = struct(n0, _LGO, 0, [_g, _nT], [() => GraphSummaryList, 0]);
export var ResetGraphInput = struct(n0, _RGI, 0, [_gIr, _sS], [[0, 1], 2]);
export var ResetGraphOutput = struct(
  n0,
  _RGO,
  0,
  [_i, _n, _a, _st, _sR, _cT, _pM, _en, _pC, _vSC, _rC, _kKI, _sSI, _dP, _bN],
  [0, 0, 0, 0, 0, 4, 1, 0, 2, () => VectorSearchConfiguration, 1, 0, 0, 2, 0]
);
export var RestoreGraphFromSnapshotInput = struct(
  n0,
  _RGFSI,
  0,
  [_sIn, _gN, _pM, _dP, _t, _rC, _pC],
  [[0, 1], 0, 1, 2, 128 | 0, 1, 2]
);
export var RestoreGraphFromSnapshotOutput = struct(
  n0,
  _RGFSO,
  0,
  [_i, _n, _a, _st, _sR, _cT, _pM, _en, _pC, _vSC, _rC, _kKI, _sSI, _dP, _bN],
  [0, 0, 0, 0, 0, 4, 1, 0, 2, () => VectorSearchConfiguration, 1, 0, 0, 2, 0]
);
export var StartGraphInput = struct(n0, _SGI, 0, [_gIr], [[0, 1]]);
export var StartGraphOutput = struct(
  n0,
  _SGO,
  0,
  [_i, _n, _a, _st, _sR, _cT, _pM, _en, _pC, _vSC, _rC, _kKI, _sSI, _dP, _bN],
  [0, 0, 0, 0, 0, 4, 1, 0, 2, () => VectorSearchConfiguration, 1, 0, 0, 2, 0]
);
export var StopGraphInput = struct(n0, _SGIt, 0, [_gIr], [[0, 1]]);
export var StopGraphOutput = struct(
  n0,
  _SGOt,
  0,
  [_i, _n, _a, _st, _sR, _cT, _pM, _en, _pC, _vSC, _rC, _kKI, _sSI, _dP, _bN],
  [0, 0, 0, 0, 0, 4, 1, 0, 2, () => VectorSearchConfiguration, 1, 0, 0, 2, 0]
);
export var UpdateGraphInput = struct(n0, _UGI, 0, [_gIr, _pC, _pM, _dP], [[0, 1], 2, 1, 2]);
export var UpdateGraphOutput = struct(
  n0,
  _UGO,
  0,
  [_i, _n, _a, _st, _sR, _cT, _pM, _en, _pC, _vSC, _rC, _kKI, _sSI, _dP, _bN],
  [0, 0, 0, 0, 0, 4, 1, 0, 2, () => VectorSearchConfiguration, 1, 0, 0, 2, 0]
);
export var VectorSearchConfiguration = struct(n0, _VSC, 0, [_di], [1]);
export var GraphSummaryList = list(n0, _GSL, 0, () => GraphSummary);
export var CreateGraph = op(
  n0,
  _CG,
  {
    [_h]: ["POST", "/graphs", 201],
  },
  () => CreateGraphInput,
  () => CreateGraphOutput
);
export var CreateGraphUsingImportTask = op(
  n0,
  _CGUIT,
  {
    [_h]: ["POST", "/importtasks", 201],
  },
  () => CreateGraphUsingImportTaskInput,
  () => CreateGraphUsingImportTaskOutput
);
export var DeleteGraph = op(
  n0,
  _DG,
  {
    [_h]: ["DELETE", "/graphs/{graphIdentifier}", 200],
  },
  () => DeleteGraphInput,
  () => DeleteGraphOutput
);
export var GetGraph = op(
  n0,
  _GG,
  {
    [_h]: ["GET", "/graphs/{graphIdentifier}", 200],
  },
  () => GetGraphInput,
  () => GetGraphOutput
);
export var ListGraphs = op(
  n0,
  _LG,
  {
    [_h]: ["GET", "/graphs", 200],
  },
  () => ListGraphsInput,
  () => ListGraphsOutput
);
export var ResetGraph = op(
  n0,
  _RG,
  {
    [_h]: ["PUT", "/graphs/{graphIdentifier}", 200],
  },
  () => ResetGraphInput,
  () => ResetGraphOutput
);
export var RestoreGraphFromSnapshot = op(
  n0,
  _RGFS,
  {
    [_h]: ["POST", "/snapshots/{snapshotIdentifier}/restore", 201],
  },
  () => RestoreGraphFromSnapshotInput,
  () => RestoreGraphFromSnapshotOutput
);
export var StartGraph = op(
  n0,
  _SG,
  {
    [_h]: ["POST", "/graphs/{graphIdentifier}/start", 200],
  },
  () => StartGraphInput,
  () => StartGraphOutput
);
export var StopGraph = op(
  n0,
  _SGt,
  {
    [_h]: ["POST", "/graphs/{graphIdentifier}/stop", 200],
  },
  () => StopGraphInput,
  () => StopGraphOutput
);
export var UpdateGraph = op(
  n0,
  _UG,
  {
    [_h]: ["PATCH", "/graphs/{graphIdentifier}", 200],
  },
  () => UpdateGraphInput,
  () => UpdateGraphOutput
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _gIr,
  _gSr,
  _GSS,
  _GSSL,
  _h,
  _hQ,
  _i,
  _kKI,
  _LGS,
  _LGSI,
  _LGSO,
  _LPGE,
  _LPGEI,
  _LPGEO,
  _mR,
  _n,
  _nT,
  _pGE,
  _PGES,
  _PGESL,
  _sCT,
  _sGI,
  _sI,
  _st,
  _vEI,
  _vI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GraphSnapshotSummary = struct(n0, _GSS, 0, [_i, _n, _a, _sGI, _sCT, _st, _kKI], [0, 0, 0, 0, 4, 0, 0]);
export var ListGraphSnapshotsInput = struct(
  n0,
  _LGSI,
  0,
  [_gIr, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _gIr,
      },
    ],
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
export var ListGraphSnapshotsOutput = struct(n0, _LGSO, 0, [_gSr, _nT], [() => GraphSnapshotSummaryList, 0]);
export var ListPrivateGraphEndpointsInput = struct(
  n0,
  _LPGEI,
  0,
  [_gIr, _nT, _mR],
  [
    [0, 1],
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
export var ListPrivateGraphEndpointsOutput = struct(
  n0,
  _LPGEO,
  0,
  [_pGE, _nT],
  [() => PrivateGraphEndpointSummaryList, 0]
);
export var PrivateGraphEndpointSummary = struct(n0, _PGES, 0, [_vI, _sI, _st, _vEI], [0, 64 | 0, 0, 0]);
export var GraphSnapshotSummaryList = list(n0, _GSSL, 0, () => GraphSnapshotSummary);
export var PrivateGraphEndpointSummaryList = list(n0, _PGESL, 0, () => PrivateGraphEndpointSummary);
export var ListGraphSnapshots = op(
  n0,
  _LGS,
  {
    [_h]: ["GET", "/snapshots", 200],
  },
  () => ListGraphSnapshotsInput,
  () => ListGraphSnapshotsOutput
);
export var ListPrivateGraphEndpoints = op(
  n0,
  _LPGE,
  {
    [_h]: ["GET", "/graphs/{graphIdentifier}/endpoints/", 200],
  },
  () => ListPrivateGraphEndpointsInput,
  () => ListPrivateGraphEndpointsOutput
);

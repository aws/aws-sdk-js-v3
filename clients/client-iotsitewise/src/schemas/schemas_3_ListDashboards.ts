// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cD,
  _d,
  _DS,
  _DSas,
  _dSas,
  _end,
  _hQ,
  _ht,
  _i,
  _LD,
  _LDR,
  _LDRi,
  _lUD,
  _mR,
  _n,
  _nT,
  _pIr,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DashboardSummary = struct(n0, _DS, 0, [_i, _n, _d, _cD, _lUD], [0, 0, 0, 4, 4]);
export var ListDashboardsRequest = struct(
  n0,
  _LDR,
  0,
  [_pIr, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _pIr,
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
export var ListDashboardsResponse = struct(n0, _LDRi, 0, [_dSas, _nT], [() => DashboardSummaries, 0]);
export var DashboardSummaries = list(n0, _DSas, 0, () => DashboardSummary);
export var ListDashboards = op(
  n0,
  _LD,
  {
    [_ht]: ["GET", "/dashboards", 200],
    [_end]: ["monitor."],
  },
  () => ListDashboardsRequest,
  () => ListDashboardsResponse
);

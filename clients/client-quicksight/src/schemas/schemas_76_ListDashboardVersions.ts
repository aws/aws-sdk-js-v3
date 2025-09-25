// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _Ar,
  _CT,
  _De,
  _DI,
  _DVS,
  _DVSL,
  _h,
  _hQ,
  _LDV,
  _LDVR,
  _LDVRi,
  _MR,
  _mr,
  _NT,
  _nt,
  _RI,
  _SEA,
  _St,
  _VN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DashboardVersionSummary = struct(n0, _DVS, 0, [_Ar, _CT, _VN, _St, _SEA, _De], [0, 4, 1, 0, 0, 0]);
export var ListDashboardVersionsRequest = struct(
  n0,
  _LDVR,
  0,
  [_AAI, _DI, _NT, _MR],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
  ]
);
export var ListDashboardVersionsResponse = struct(
  n0,
  _LDVRi,
  0,
  [_DVSL, _NT, _St, _RI],
  [() => DashboardVersionSummaryList, 0, [1, 32], 0]
);
export var DashboardVersionSummaryList = list(n0, _DVSL, 0, () => DashboardVersionSummary);
export var ListDashboardVersions = op(
  n0,
  _LDV,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/dashboards/{DashboardId}/versions", 200],
  },
  () => ListDashboardVersionsRequest,
  () => ListDashboardVersionsResponse
);

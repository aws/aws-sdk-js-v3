// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _AE,
  _AEL,
  _AIn,
  _An,
  _an,
  _ANl,
  _Ar,
  _CT,
  _Da,
  _DAes,
  _DARes,
  _DAResc,
  _DDes,
  _DDRes,
  _DDResc,
  _DE,
  _De,
  _DEL,
  _DI,
  _DSA,
  _DVa,
  _Er,
  _h,
  _hQ,
  _LE,
  _LPT,
  _LUT,
  _M,
  _N,
  _RI,
  _SEA,
  _Sh,
  _St,
  _T,
  _TA,
  _VE,
  _Ve,
  _VN,
  _vn,
  n0,
} from "./schemas_0";
import { EntityList, SheetList } from "./schemas_58_Describe";

/* eslint no-var: 0 */

export var Analysis = struct(
  n0,
  _An,
  0,
  [_AIn, _Ar, _N, _St, _Er, _DSA, _TA, _CT, _LUT, _Sh],
  [0, 0, 0, 0, () => AnalysisErrorList, 64 | 0, 0, 4, 4, () => SheetList]
);
export var AnalysisError = struct(n0, _AE, 0, [_T, _M, _VE], [0, 0, () => EntityList]);
export var Dashboard = struct(
  n0,
  _Da,
  0,
  [_DI, _Ar, _N, _Ve, _CT, _LPT, _LUT, _LE],
  [0, 0, 0, () => DashboardVersion, 4, 4, 4, 64 | 0]
);
export var DashboardError = struct(n0, _DE, 0, [_T, _M, _VE], [0, 0, () => EntityList]);
export var DashboardVersion = struct(
  n0,
  _DVa,
  0,
  [_CT, _Er, _VN, _St, _Ar, _SEA, _DSA, _De, _TA, _Sh],
  [4, () => DashboardErrorList, 1, 0, 0, 0, 64 | 0, 0, 0, () => SheetList]
);
export var DescribeAnalysisRequest = struct(
  n0,
  _DARes,
  0,
  [_AAI, _AIn],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeAnalysisResponse = struct(n0, _DAResc, 0, [_An, _St, _RI], [() => Analysis, [1, 32], 0]);
export var DescribeDashboardRequest = struct(
  n0,
  _DDRes,
  0,
  [_AAI, _DI, _VN, _ANl],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _vn,
      },
    ],
    [
      0,
      {
        [_hQ]: _an,
      },
    ],
  ]
);
export var DescribeDashboardResponse = struct(n0, _DDResc, 0, [_Da, _St, _RI], [() => Dashboard, [1, 32], 0]);
export var AnalysisErrorList = list(n0, _AEL, 0, () => AnalysisError);
export var DashboardErrorList = list(n0, _DEL, 0, () => DashboardError);
export var DataSetArnsList = 64 | 0;

export var DescribeAnalysis = op(
  n0,
  _DAes,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/analyses/{AnalysisId}", 200],
  },
  () => DescribeAnalysisRequest,
  () => DescribeAnalysisResponse
);
export var DescribeDashboard = op(
  n0,
  _DDes,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/dashboards/{DashboardId}", 200],
  },
  () => DescribeDashboardRequest,
  () => DescribeDashboardResponse
);

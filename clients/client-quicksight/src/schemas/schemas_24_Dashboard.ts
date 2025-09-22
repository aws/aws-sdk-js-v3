// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AAI,
  _AInsw,
  _AR,
  _Ar,
  _ASns,
  _CT,
  _DI,
  _DNas,
  _DSas,
  _DSF,
  _DSFL,
  _DSL,
  _DU,
  _DV,
  _DVR,
  _Fi,
  _GAe,
  _GAR,
  _h,
  _hQ,
  _IGA,
  _IQSQI,
  _LDi,
  _LDR,
  _LDRi,
  _LPT,
  _LUT,
  _MR,
  _mr,
  _MTTC,
  _N,
  _NT,
  _nt,
  _Op,
  _PQAR,
  _PQARR,
  _PQARRr,
  _PRri,
  _PVN,
  _QAQT,
  _QAR,
  _QARe,
  _QI,
  _QT,
  _QTu,
  _QU,
  _Rest,
  _RI,
  _RTes,
  _SDea,
  _SDR,
  _SDRe,
  _SIh,
  _SN,
  _St,
  _TIo,
  _TN,
  _V,
  _VI,
  _VSi,
  _VT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var QAQueryText = sim(n0, _QAQT, 0, 8);
export var DashboardSearchFilter = struct(n0, _DSF, 0, [_Op, _N, _V], [0, 0, 0]);
export var DashboardSummary = struct(n0, _DSas, 0, [_Ar, _DI, _N, _CT, _LUT, _PVN, _LPT], [0, 0, 0, 4, 4, 1, 4]);
export var DashboardVisualResult = struct(
  n0,
  _DVR,
  0,
  [_DI, _DNas, _SIh, _SN, _VI, _VT, _VSi, _DU],
  [0, 0, 0, 0, 0, 0, 0, 0]
);
export var GeneratedAnswerResult = struct(
  n0,
  _GAR,
  0,
  [_QT, _ASns, _TIo, _TN, _Rest, _QI, _AInsw, _QU],
  [[() => QAQueryText, 0], 0, 0, 0, [() => QAQueryText, 0], 0, 0, 0]
);
export var ListDashboardsRequest = struct(
  n0,
  _LDR,
  0,
  [_AAI, _NT, _MR],
  [
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
export var ListDashboardsResponse = struct(
  n0,
  _LDRi,
  0,
  [_DSL, _NT, _St, _RI],
  [() => DashboardSummaryList, 0, [1, 32], 0]
);
export var PredictQAResultsRequest = struct(
  n0,
  _PQARR,
  0,
  [_AAI, _QTu, _IQSQI, _IGA, _MTTC],
  [[0, 1], [() => QAQueryText, 0], 0, 0, 1]
);
export var PredictQAResultsResponse = struct(
  n0,
  _PQARRr,
  0,
  [_PRri, _AR, _RI, _St],
  [[() => QAResult, 0], [() => QAResults, 0], 0, [1, 32]]
);
export var QAResult = struct(
  n0,
  _QAR,
  0,
  [_RTes, _DV, _GAe],
  [0, () => DashboardVisualResult, [() => GeneratedAnswerResult, 0]]
);
export var SearchDashboardsRequest = struct(
  n0,
  _SDR,
  0,
  [_AAI, _Fi, _NT, _MR],
  [[0, 1], () => DashboardSearchFilterList, 0, 1]
);
export var SearchDashboardsResponse = struct(
  n0,
  _SDRe,
  0,
  [_DSL, _NT, _St, _RI],
  [() => DashboardSummaryList, 0, [1, 32], 0]
);
export var DashboardSearchFilterList = list(n0, _DSFL, 0, () => DashboardSearchFilter);
export var DashboardSummaryList = list(n0, _DSL, 0, () => DashboardSummary);
export var QAResults = list(n0, _QARe, 0, [() => QAResult, 0]);
export var ListDashboards = op(
  n0,
  _LDi,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/dashboards", 200],
  },
  () => ListDashboardsRequest,
  () => ListDashboardsResponse
);
export var PredictQAResults = op(
  n0,
  _PQAR,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/qa/predict", 200],
  },
  () => PredictQAResultsRequest,
  () => PredictQAResultsResponse
);
export var SearchDashboards = op(
  n0,
  _SDea,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/search/dashboards", 200],
  },
  () => SearchDashboardsRequest,
  () => SearchDashboardsResponse
);

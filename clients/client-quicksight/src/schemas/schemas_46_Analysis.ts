// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _AIn,
  _Ar,
  _ASF,
  _ASFL,
  _ASL,
  _ASn,
  _CT,
  _Fi,
  _h,
  _hQ,
  _LAi,
  _LAR,
  _LARi,
  _LUT,
  _MR,
  _mr,
  _N,
  _NT,
  _nt,
  _Op,
  _RI,
  _SAe,
  _SAR,
  _SARe,
  _St,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AnalysisSearchFilter = struct(n0, _ASF, 0, [_Op, _N, _V], [0, 0, 0]);
export var AnalysisSummary = struct(n0, _ASn, 0, [_Ar, _AIn, _N, _St, _CT, _LUT], [0, 0, 0, 0, 4, 4]);
export var ListAnalysesRequest = struct(
  n0,
  _LAR,
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
export var ListAnalysesResponse = struct(
  n0,
  _LARi,
  0,
  [_ASL, _NT, _St, _RI],
  [() => AnalysisSummaryList, 0, [1, 32], 0]
);
export var SearchAnalysesRequest = struct(
  n0,
  _SAR,
  0,
  [_AAI, _Fi, _NT, _MR],
  [[0, 1], () => AnalysisSearchFilterList, 0, 1]
);
export var SearchAnalysesResponse = struct(
  n0,
  _SARe,
  0,
  [_ASL, _NT, _St, _RI],
  [() => AnalysisSummaryList, 0, [1, 32], 0]
);
export var AnalysisSearchFilterList = list(n0, _ASFL, 0, () => AnalysisSearchFilter);
export var AnalysisSummaryList = list(n0, _ASL, 0, () => AnalysisSummary);
export var ListAnalyses = op(
  n0,
  _LAi,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/analyses", 200],
  },
  () => ListAnalysesRequest,
  () => ListAnalysesResponse
);
export var SearchAnalyses = op(
  n0,
  _SAe,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/search/analyses", 200],
  },
  () => SearchAnalysesRequest,
  () => SearchAnalysesResponse
);

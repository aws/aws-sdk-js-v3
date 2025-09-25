// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AFM,
  _cF,
  _cN,
  _cr,
  _CWFN,
  _CWMF,
  _cWMF,
  _d,
  _eD,
  _fM,
  _FML,
  _FMVPS,
  _fN,
  _GMS,
  _GMSR,
  _GMSRe,
  _h,
  _hQ,
  _ht,
  _in,
  _l,
  _LFM,
  _LFMR,
  _LFMRi,
  _me,
  _mR,
  _MS,
  _mS,
  _mTTC,
  _nF,
  _nT,
  _oF,
  _sD,
  _sN,
  _SNWFN,
  _SWMOCF,
  _sWMOCF,
  _SWMOF,
  _sWMOF,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccountFindingsMetric = struct(
  n0,
  _AFM,
  0,
  [_d, _nF, _cF, _oF, _mTTC],
  [
    4,
    () => FindingMetricsValuePerSeverity,
    () => FindingMetricsValuePerSeverity,
    () => FindingMetricsValuePerSeverity,
    () => FindingMetricsValuePerSeverity,
  ]
);
export var CategoryWithFindingNum = struct(n0, _CWFN, 0, [_cN, _fN], [0, 1]);
export var FindingMetricsValuePerSeverity = struct(n0, _FMVPS, 0, [_in, _l, _me, _h, _cr], [1, 1, 1, 1, 1]);
export var GetMetricsSummaryRequest = struct(
  n0,
  _GMSR,
  0,
  [_d],
  [
    [
      4,
      {
        [_hQ]: _d,
      },
    ],
  ]
);
export var GetMetricsSummaryResponse = struct(n0, _GMSRe, 0, [_mS], [() => MetricsSummary]);
export var ListFindingsMetricsRequest = struct(
  n0,
  _LFMR,
  0,
  [_nT, _mR, _sD, _eD],
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
    [
      4,
      {
        [_hQ]: _sD,
      },
    ],
    [
      4,
      {
        [_hQ]: _eD,
      },
    ],
  ]
);
export var ListFindingsMetricsResponse = struct(n0, _LFMRi, 0, [_fM, _nT], [() => FindingsMetricList, 0]);
export var MetricsSummary = struct(
  n0,
  _MS,
  0,
  [_d, _oF, _cWMF, _sWMOF, _sWMOCF],
  [
    4,
    () => FindingMetricsValuePerSeverity,
    () => CategoriesWithMostFindings,
    () => ScansWithMostOpenFindings,
    () => ScansWithMostOpenCriticalFindings,
  ]
);
export var ScanNameWithFindingNum = struct(n0, _SNWFN, 0, [_sN, _fN], [0, 1]);
export var CategoriesWithMostFindings = list(n0, _CWMF, 0, () => CategoryWithFindingNum);
export var FindingsMetricList = list(n0, _FML, 0, () => AccountFindingsMetric);
export var ScansWithMostOpenCriticalFindings = list(n0, _SWMOCF, 0, () => ScanNameWithFindingNum);
export var ScansWithMostOpenFindings = list(n0, _SWMOF, 0, () => ScanNameWithFindingNum);
export var GetMetricsSummary = op(
  n0,
  _GMS,
  {
    [_ht]: ["GET", "/metrics/summary", 200],
  },
  () => GetMetricsSummaryRequest,
  () => GetMetricsSummaryResponse
);
export var ListFindingsMetrics = op(
  n0,
  _LFM,
  {
    [_ht]: ["GET", "/metrics/findings", 200],
  },
  () => ListFindingsMetricsRequest,
  () => ListFindingsMetricsResponse
);

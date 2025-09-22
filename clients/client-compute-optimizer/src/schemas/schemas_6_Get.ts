// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aI,
  _aIc,
  _cod,
  _cu,
  _d,
  _ECSSPM,
  _ECSSPMe,
  _ECSSROPM,
  _ECSSROPMe,
  _eMS,
  _er,
  _eT,
  _f,
  _fD,
  _fi,
  _GECRPM,
  _GECRPMR,
  _GECRPMRe,
  _GECSSRPM,
  _GECSSRPMR,
  _GECSSRPMRe,
  _GIR,
  _GIRR,
  _GIRRe,
  _GRDSDRPM,
  _GRDSDRPMR,
  _GRDSDRPMRe,
  _iAn,
  _id,
  _IEMS,
  _IR,
  _IRd,
  _iRd,
  _IRE,
  _IREd,
  _ISO,
  _ISOAD,
  _IUM,
  _IUMd,
  _lBPID,
  _lBV,
  _lRT,
  _m,
  _mR,
  _n,
  _nT,
  _o,
  _OB,
  _oB,
  _p,
  _PM,
  _pM,
  _PMr,
  _r,
  _rA,
  _rAe,
  _rCU,
  _rDBIC,
  _RDSDPM,
  _RDSDPMa,
  _RDSDROPM,
  _RDSDROPMa,
  _rI,
  _rIT,
  _rMS,
  _ROPM,
  _rOPM,
  _ROPMe,
  _rP,
  _rT,
  _sA,
  _sO,
  _sOAD,
  _sOP,
  _st,
  _sta,
  _sTta,
  _ta,
  _ti,
  _uBV,
  _uM,
  _v,
  _va,
  n0,
} from "./schemas_0";
import { IdleRecommendationFilters } from "./schemas_7_Recommendations";
import { Tags } from "./schemas_8_Get";
import { RecommendationPreferences } from "./schemas_13_Recommendations";

/* eslint no-var: 0 */

export var ECSServiceProjectedMetric = struct(n0, _ECSSPM, 0, [_n, _ti, _uBV, _lBV], [0, 64 | 4, 64 | 1, 64 | 1]);
export var ECSServiceRecommendedOptionProjectedMetric = struct(
  n0,
  _ECSSROPM,
  0,
  [_rCU, _rMS, _pM],
  [1, 1, () => ECSServiceProjectedMetrics]
);
export var GetEC2RecommendationProjectedMetricsRequest = struct(
  n0,
  _GECRPMR,
  0,
  [_iAn, _sta, _p, _sTta, _eT, _rP],
  [0, 0, 1, 4, 4, () => RecommendationPreferences]
);
export var GetEC2RecommendationProjectedMetricsResponse = struct(
  n0,
  _GECRPMRe,
  0,
  [_rOPM],
  [() => RecommendedOptionProjectedMetrics]
);
export var GetECSServiceRecommendationProjectedMetricsRequest = struct(
  n0,
  _GECSSRPMR,
  0,
  [_sA, _sta, _p, _sTta, _eT],
  [0, 0, 1, 4, 4]
);
export var GetECSServiceRecommendationProjectedMetricsResponse = struct(
  n0,
  _GECSSRPMRe,
  0,
  [_rOPM],
  [() => ECSServiceRecommendedOptionProjectedMetrics]
);
export var GetIdleRecommendationsRequest = struct(
  n0,
  _GIRR,
  0,
  [_rAe, _nT, _mR, _fi, _aIc, _oB],
  [64 | 0, 0, 1, () => IdleRecommendationFilters, 64 | 0, () => OrderBy]
);
export var GetIdleRecommendationsResponse = struct(
  n0,
  _GIRRe,
  0,
  [_nT, _iRd, _er],
  [0, () => IdleRecommendations, () => IdleRecommendationErrors]
);
export var GetRDSDatabaseRecommendationProjectedMetricsRequest = struct(
  n0,
  _GRDSDRPMR,
  0,
  [_rA, _sta, _p, _sTta, _eT, _rP],
  [0, 0, 1, 4, 4, () => RecommendationPreferences]
);
export var GetRDSDatabaseRecommendationProjectedMetricsResponse = struct(
  n0,
  _GRDSDRPMRe,
  0,
  [_rOPM],
  [() => RDSDatabaseRecommendedOptionProjectedMetrics]
);
export var IdleEstimatedMonthlySavings = struct(n0, _IEMS, 0, [_cu, _v], [0, 1]);
export var IdleRecommendation = struct(
  n0,
  _IR,
  0,
  [_rA, _rI, _rT, _aI, _f, _fD, _sO, _sOAD, _uM, _lBPID, _lRT, _ta],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    () => IdleSavingsOpportunity,
    () => IdleSavingsOpportunityAfterDiscounts,
    () => IdleUtilizationMetrics,
    1,
    4,
    () => Tags,
  ]
);
export var IdleRecommendationError = struct(n0, _IRE, 0, [_id, _cod, _m, _rT], [0, 0, 0, 0]);
export var IdleSavingsOpportunity = struct(n0, _ISO, 0, [_sOP, _eMS], [1, () => IdleEstimatedMonthlySavings]);
export var IdleSavingsOpportunityAfterDiscounts = struct(
  n0,
  _ISOAD,
  0,
  [_sOP, _eMS],
  [1, () => IdleEstimatedMonthlySavings]
);
export var IdleUtilizationMetric = struct(n0, _IUM, 0, [_n, _st, _v], [0, 0, 1]);
export var OrderBy = struct(n0, _OB, 0, [_d, _o], [0, 0]);
export var ProjectedMetric = struct(n0, _PM, 0, [_n, _ti, _va], [0, 64 | 4, 64 | 1]);
export var RDSDatabaseProjectedMetric = struct(n0, _RDSDPM, 0, [_n, _ti, _va], [0, 64 | 4, 64 | 1]);
export var RDSDatabaseRecommendedOptionProjectedMetric = struct(
  n0,
  _RDSDROPM,
  0,
  [_rDBIC, _r, _pM],
  [0, 1, () => RDSDatabaseProjectedMetrics]
);
export var RecommendedOptionProjectedMetric = struct(n0, _ROPM, 0, [_rIT, _r, _pM], [0, 1, () => ProjectedMetrics]);
export var ECSServiceProjectedMetrics = list(n0, _ECSSPMe, 0, () => ECSServiceProjectedMetric);
export var ECSServiceRecommendedOptionProjectedMetrics = list(
  n0,
  _ECSSROPMe,
  0,
  () => ECSServiceRecommendedOptionProjectedMetric
);
export var IdleRecommendationErrors = list(n0, _IREd, 0, () => IdleRecommendationError);
export var IdleRecommendations = list(n0, _IRd, 0, () => IdleRecommendation);
export var IdleUtilizationMetrics = list(n0, _IUMd, 0, () => IdleUtilizationMetric);
export var MetricValues = 64 | 1;

export var ProjectedMetrics = list(n0, _PMr, 0, () => ProjectedMetric);
export var RDSDatabaseProjectedMetrics = list(n0, _RDSDPMa, 0, () => RDSDatabaseProjectedMetric);
export var RDSDatabaseRecommendedOptionProjectedMetrics = list(
  n0,
  _RDSDROPMa,
  0,
  () => RDSDatabaseRecommendedOptionProjectedMetric
);
export var RecommendedOptionProjectedMetrics = list(n0, _ROPMe, 0, () => RecommendedOptionProjectedMetric);
export var Timestamps = 64 | 4;

export var GetEC2RecommendationProjectedMetrics = op(
  n0,
  _GECRPM,
  0,
  () => GetEC2RecommendationProjectedMetricsRequest,
  () => GetEC2RecommendationProjectedMetricsResponse
);
export var GetECSServiceRecommendationProjectedMetrics = op(
  n0,
  _GECSSRPM,
  0,
  () => GetECSServiceRecommendationProjectedMetricsRequest,
  () => GetECSServiceRecommendationProjectedMetricsResponse
);
export var GetIdleRecommendations = op(
  n0,
  _GIR,
  0,
  () => GetIdleRecommendationsRequest,
  () => GetIdleRecommendationsResponse
);
export var GetRDSDatabaseRecommendationProjectedMetrics = op(
  n0,
  _GRDSDRPM,
  0,
  () => GetRDSDatabaseRecommendationProjectedMetricsRequest,
  () => GetRDSDatabaseRecommendationProjectedMetricsResponse
);

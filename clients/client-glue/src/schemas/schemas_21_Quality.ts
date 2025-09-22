// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _ADS,
  _AMg,
  _AOdd,
  _AR,
  _ARO,
  _AVc,
  _BGDQR,
  _BGDQRR,
  _BGDQRRa,
  _CI,
  _CNo,
  _COo,
  _CREM,
  _CRN,
  _CTl,
  _CWME,
  _D,
  _DN,
  _DQAM,
  _DQAR,
  _DQARa,
  _DQERARO,
  _DQGT,
  _DQMV,
  _DQO,
  _DQOa,
  _DQOD,
  _DQR,
  _DQRL,
  _DQRR,
  _DQRRa,
  _DQRRD,
  _DQSC,
  _DSa,
  _DSM,
  _EC,
  _EMM,
  _EMv,
  _EMva,
  _ER,
  _EV,
  _GDQR,
  _GDQRR,
  _GDQRRe,
  _GT,
  _JN,
  _JRI,
  _LL,
  _MBO,
  _MN,
  _MVet,
  _N,
  _NOW,
  _NRe,
  _O,
  _PI,
  _PPQ,
  _Re,
  _RERI,
  _Res,
  _RI,
  _RIes,
  _RIu,
  _RM,
  _RMM,
  _RNF,
  _RNu,
  _RNul,
  _Rol,
  _RR,
  _RSP,
  _Scor,
  _SDQRER,
  _SDQRERR,
  _SDQRERRt,
  _SDQRRR,
  _SDQRRRR,
  _SDQRRRRt,
  _SI,
  _SO,
  _T,
  _TN,
  _TRF,
  _TRFo,
  _TRP,
  _TRPo,
  _TRPot,
  _TRPota,
  _UL,
  n0,
} from "./schemas_0";
import { GlueTable } from "./schemas_67_DataQuality";

/* eslint no-var: 0 */

export var DataQualityObservationDescription = sim(n0, _DQOD, 0, 8);
export var DataQualityRuleResultDescription = sim(n0, _DQRRD, 0, 8);
export var BatchGetDataQualityResultRequest = struct(n0, _BGDQRR, 0, [_RI], [64 | 0]);
export var BatchGetDataQualityResultResponse = struct(
  n0,
  _BGDQRRa,
  0,
  [_Re, _RNF],
  [[() => DataQualityResultsList, 0], 64 | 0]
);
export var DataQualityAggregatedMetrics = struct(
  n0,
  _DQAM,
  0,
  [_TRP, _TRPo, _TRF, _TRPot, _TRPota, _TRFo],
  [1, 1, 1, 1, 1, 1]
);
export var DataQualityAnalyzerResult = struct(
  n0,
  _DQAR,
  0,
  [_N, _D, _EMv, _EMva],
  [
    0,
    [() => DataQualityRuleResultDescription, 0],
    [() => DataQualityRuleResultDescription, 0],
    [() => EvaluatedMetricsMap, 0],
  ]
);
export var DataQualityEvaluationRunAdditionalRunOptions = struct(n0, _DQERARO, 0, [_CWME, _RSP, _CREM], [2, 0, 0]);
export var DataQualityGlueTable = struct(n0, _DQGT, 0, [_DN, _TN, _CI, _CNo, _AOdd, _PPQ], [0, 0, 0, 0, 128 | 0, 0]);
export var DataQualityMetricValues = struct(n0, _DQMV, 0, [_AVc, _EV, _LL, _UL], [1, 1, 1, 1]);
export var DataQualityObservation = struct(
  n0,
  _DQO,
  0,
  [_D, _MBO],
  [[() => DataQualityObservationDescription, 0], () => MetricBasedObservation]
);
export var DataQualityResult = struct(
  n0,
  _DQR,
  0,
  [_RIes, _PI, _Scor, _DSa, _RNu, _EC, _SO, _COo, _JN, _JRI, _RERI, _RR, _AR, _O, _AMg],
  [
    0,
    0,
    1,
    () => DataSource,
    0,
    0,
    4,
    4,
    0,
    0,
    0,
    [() => DataQualityRuleResults, 0],
    [() => DataQualityAnalyzerResults, 0],
    [() => DataQualityObservations, 0],
    () => DataQualityAggregatedMetrics,
  ]
);
export var DataQualityRuleResult = struct(
  n0,
  _DQRR,
  0,
  [_N, _D, _EMv, _Res, _EMva, _ER, _RM],
  [
    0,
    [() => DataQualityRuleResultDescription, 0],
    [() => DataQualityRuleResultDescription, 0],
    0,
    [() => EvaluatedMetricsMap, 0],
    [() => DataQualityRuleResultDescription, 0],
    [() => RuleMetricsMap, 0],
  ]
);
export var DataSource = struct(n0, _DSa, 0, [_GT, _DQGT], [() => GlueTable, () => DataQualityGlueTable]);
export var GetDataQualityResultRequest = struct(n0, _GDQRR, 0, [_RIes], [0]);
export var GetDataQualityResultResponse = struct(
  n0,
  _GDQRRe,
  0,
  [_RIes, _PI, _Scor, _DSa, _RNu, _EC, _SO, _COo, _JN, _JRI, _RERI, _RR, _AR, _O, _AMg],
  [
    0,
    0,
    1,
    () => DataSource,
    0,
    0,
    4,
    4,
    0,
    0,
    0,
    [() => DataQualityRuleResults, 0],
    [() => DataQualityAnalyzerResults, 0],
    [() => DataQualityObservations, 0],
    () => DataQualityAggregatedMetrics,
  ]
);
export var MetricBasedObservation = struct(
  n0,
  _MBO,
  0,
  [_MN, _SI, _MVet, _NRe],
  [0, 0, () => DataQualityMetricValues, 64 | 0]
);
export var StartDataQualityRuleRecommendationRunRequest = struct(
  n0,
  _SDQRRRR,
  0,
  [_DSa, _Rol, _NOW, _T, _CRN, _DQSC, _CTl],
  [() => DataSource, 0, 1, 1, 0, 0, 0]
);
export var StartDataQualityRuleRecommendationRunResponse = struct(n0, _SDQRRRRt, 0, [_RIu], [0]);
export var StartDataQualityRulesetEvaluationRunRequest = struct(
  n0,
  _SDQRERR,
  0,
  [_DSa, _Rol, _NOW, _T, _CTl, _ARO, _RNul, _ADS],
  [() => DataSource, 0, 1, 1, 0, () => DataQualityEvaluationRunAdditionalRunOptions, 64 | 0, () => DataSourceMap]
);
export var StartDataQualityRulesetEvaluationRunResponse = struct(n0, _SDQRERRt, 0, [_RIu], [0]);
export var DataQualityAnalyzerResults = list(n0, _DQARa, 0, [() => DataQualityAnalyzerResult, 0]);
export var DataQualityObservations = list(n0, _DQOa, 0, [() => DataQualityObservation, 0]);
export var DataQualityResultIds = 64 | 0;

export var DataQualityResultsList = list(n0, _DQRL, 0, [() => DataQualityResult, 0]);
export var DataQualityRuleResults = list(n0, _DQRRa, 0, [() => DataQualityRuleResult, 0]);
export var NewRules = 64 | 0;

export var RulesetNames = 64 | 0;

export var DataSourceMap = map(n0, _DSM, 0, 0, () => DataSource);
export var EvaluatedMetricsMap = map(n0, _EMM, 8, 0, 1);
export var RuleMetricsMap = map(n0, _RMM, 8, 0, 1);
export var BatchGetDataQualityResult = op(
  n0,
  _BGDQR,
  0,
  () => BatchGetDataQualityResultRequest,
  () => BatchGetDataQualityResultResponse
);
export var GetDataQualityResult = op(
  n0,
  _GDQR,
  0,
  () => GetDataQualityResultRequest,
  () => GetDataQualityResultResponse
);
export var StartDataQualityRuleRecommendationRun = op(
  n0,
  _SDQRRR,
  2,
  () => StartDataQualityRuleRecommendationRunRequest,
  () => StartDataQualityRuleRecommendationRunResponse
);
export var StartDataQualityRulesetEvaluationRun = op(
  n0,
  _SDQRER,
  2,
  () => StartDataQualityRulesetEvaluationRunRequest,
  () => StartDataQualityRulesetEvaluationRunResponse
);

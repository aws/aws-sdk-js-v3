// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ABBL,
  _ABBS,
  _ABK,
  _ABKn,
  _AIF,
  _AIFn,
  _AIGBK,
  _AIGBKn,
  _AIGBL,
  _AIGBS,
  _AIM,
  _AIMn,
  _AIMR,
  _AIMRn,
  _AINS,
  _AINSn,
  _AIR,
  _AIRn,
  _AISF,
  _AISFn,
  _AISGBK,
  _AISGBKn,
  _AISGBL,
  _AISGBS,
  _AISM,
  _AISMn,
  _AISMR,
  _AISMRn,
  _AISR,
  _AISRn,
  _APF,
  _APFn,
  _aR,
  _ASF,
  _ASFn,
  _ASGBK,
  _ASGBKn,
  _ASGBL,
  _ASGBS,
  _ASM,
  _ASMn,
  _ASMR,
  _ASMRn,
  _ASR,
  _ASRn,
  _at,
  _AUA,
  _AUAn,
  _AUAR,
  _AUARn,
  _AUFn,
  _AUFna,
  _AUGBK,
  _AUGBKn,
  _AUGBL,
  _AUGBS,
  _AUM,
  _AUMn,
  _AUMR,
  _AUMRn,
  _AUR,
  _AURn,
  _bAI,
  _bB,
  _bI,
  _bK,
  _bV,
  _cDS,
  _cES,
  _cET,
  _ch,
  _cST,
  _eDT,
  _fi,
  _gB,
  _gBK,
  _h,
  _i,
  _iC,
  _IIS,
  _iIS,
  _IISn,
  _iL,
  _iN,
  _iP,
  _lI,
  _LIM,
  _LIMR,
  _LIMRi,
  _LIP,
  _LIPR,
  _LIPRi,
  _LISM,
  _LISMR,
  _LISMRi,
  _LSAD,
  _LSADR,
  _LSADRi,
  _LSM,
  _LSMR,
  _LSMRi,
  _lUI,
  _LUM,
  _LUMR,
  _LUMRi,
  _me,
  _mod,
  _mR,
  _mRax,
  _n,
  _nOT,
  _nSo,
  _nT,
  _nTe,
  _o,
  _or,
  _oRI,
  _res,
  _s,
  _sBo,
  _SDSB,
  _sDT,
  _ses,
  _sIe,
  _SS,
  _SSe,
  _v,
  _va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AnalyticsBinBySpecification = struct(n0, _ABBS, 0, [_n, _i, _or], [0, 0, 0]);
export var AnalyticsBinKey = struct(n0, _ABK, 0, [_n, _va], [0, 1]);
export var AnalyticsIntentFilter = struct(n0, _AIF, 0, [_n, _o, _v], [0, 0, 64 | 0]);
export var AnalyticsIntentGroupByKey = struct(n0, _AIGBK, 0, [_n, _va], [0, 0]);
export var AnalyticsIntentGroupBySpecification = struct(n0, _AIGBS, 0, [_n], [0]);
export var AnalyticsIntentMetric = struct(n0, _AIM, 0, [_n, _s, _or], [0, 0, 0]);
export var AnalyticsIntentMetricResult = struct(n0, _AIMR, 0, [_n, _s, _va], [0, 0, 1]);
export var AnalyticsIntentNodeSummary = struct(n0, _AINS, 0, [_iN, _iP, _iC, _iL, _nT], [0, 0, 1, 1, 0]);
export var AnalyticsIntentResult = struct(
  n0,
  _AIR,
  0,
  [_bK, _gBK, _mR],
  [() => AnalyticsBinKeys, () => AnalyticsIntentGroupByKeys, () => AnalyticsIntentMetricResults]
);
export var AnalyticsIntentStageFilter = struct(n0, _AISF, 0, [_n, _o, _v], [0, 0, 64 | 0]);
export var AnalyticsIntentStageGroupByKey = struct(n0, _AISGBK, 0, [_n, _va], [0, 0]);
export var AnalyticsIntentStageGroupBySpecification = struct(n0, _AISGBS, 0, [_n], [0]);
export var AnalyticsIntentStageMetric = struct(n0, _AISM, 0, [_n, _s, _or], [0, 0, 0]);
export var AnalyticsIntentStageMetricResult = struct(n0, _AISMR, 0, [_n, _s, _va], [0, 0, 1]);
export var AnalyticsIntentStageResult = struct(
  n0,
  _AISR,
  0,
  [_bK, _gBK, _mR],
  [() => AnalyticsBinKeys, () => AnalyticsIntentStageGroupByKeys, () => AnalyticsIntentStageMetricResults]
);
export var AnalyticsPathFilter = struct(n0, _APF, 0, [_n, _o, _v], [0, 0, 64 | 0]);
export var AnalyticsSessionFilter = struct(n0, _ASF, 0, [_n, _o, _v], [0, 0, 64 | 0]);
export var AnalyticsSessionGroupByKey = struct(n0, _ASGBK, 0, [_n, _va], [0, 0]);
export var AnalyticsSessionGroupBySpecification = struct(n0, _ASGBS, 0, [_n], [0]);
export var AnalyticsSessionMetric = struct(n0, _ASM, 0, [_n, _s, _or], [0, 0, 0]);
export var AnalyticsSessionMetricResult = struct(n0, _ASMR, 0, [_n, _s, _va], [0, 0, 1]);
export var AnalyticsSessionResult = struct(
  n0,
  _ASR,
  0,
  [_bK, _gBK, _mR],
  [() => AnalyticsBinKeys, () => AnalyticsSessionGroupByKeys, () => AnalyticsSessionMetricResults]
);
export var AnalyticsUtteranceAttribute = struct(n0, _AUA, 0, [_n], [0]);
export var AnalyticsUtteranceAttributeResult = struct(n0, _AUAR, 0, [_lUI], [0]);
export var AnalyticsUtteranceFilter = struct(n0, _AUFn, 0, [_n, _o, _v], [0, 0, 64 | 0]);
export var AnalyticsUtteranceGroupByKey = struct(n0, _AUGBK, 0, [_n, _va], [0, 0]);
export var AnalyticsUtteranceGroupBySpecification = struct(n0, _AUGBS, 0, [_n], [0]);
export var AnalyticsUtteranceMetric = struct(n0, _AUM, 0, [_n, _s, _or], [0, 0, 0]);
export var AnalyticsUtteranceMetricResult = struct(n0, _AUMR, 0, [_n, _s, _va], [0, 0, 1]);
export var AnalyticsUtteranceResult = struct(
  n0,
  _AUR,
  0,
  [_bK, _gBK, _mR, _aR],
  [
    () => AnalyticsBinKeys,
    () => AnalyticsUtteranceGroupByKeys,
    () => AnalyticsUtteranceMetricResults,
    () => AnalyticsUtteranceAttributeResults,
  ]
);
export var InvokedIntentSample = struct(n0, _IIS, 0, [_iN], [0]);
export var ListIntentMetricsRequest = struct(
  n0,
  _LIMR,
  0,
  [_bI, _sDT, _eDT, _me, _bB, _gB, _fi, _mRax, _nTe],
  [
    [0, 1],
    4,
    4,
    () => AnalyticsIntentMetrics,
    () => AnalyticsBinByList,
    () => AnalyticsIntentGroupByList,
    () => AnalyticsIntentFilters,
    1,
    0,
  ]
);
export var ListIntentMetricsResponse = struct(n0, _LIMRi, 0, [_bI, _res, _nTe], [0, () => AnalyticsIntentResults, 0]);
export var ListIntentPathsRequest = struct(
  n0,
  _LIPR,
  0,
  [_bI, _sDT, _eDT, _iP, _fi],
  [[0, 1], 4, 4, 0, () => AnalyticsPathFilters]
);
export var ListIntentPathsResponse = struct(n0, _LIPRi, 0, [_nSo], [() => AnalyticsIntentNodeSummaries]);
export var ListIntentStageMetricsRequest = struct(
  n0,
  _LISMR,
  0,
  [_bI, _sDT, _eDT, _me, _bB, _gB, _fi, _mRax, _nTe],
  [
    [0, 1],
    4,
    4,
    () => AnalyticsIntentStageMetrics,
    () => AnalyticsBinByList,
    () => AnalyticsIntentStageGroupByList,
    () => AnalyticsIntentStageFilters,
    1,
    0,
  ]
);
export var ListIntentStageMetricsResponse = struct(
  n0,
  _LISMRi,
  0,
  [_bI, _res, _nTe],
  [0, () => AnalyticsIntentStageResults, 0]
);
export var ListSessionAnalyticsDataRequest = struct(
  n0,
  _LSADR,
  0,
  [_bI, _sDT, _eDT, _sBo, _fi, _mRax, _nTe],
  [[0, 1], 4, 4, () => SessionDataSortBy, () => AnalyticsSessionFilters, 1, 0]
);
export var ListSessionAnalyticsDataResponse = struct(
  n0,
  _LSADRi,
  0,
  [_bI, _nTe, _ses],
  [0, 0, () => SessionSpecifications]
);
export var ListSessionMetricsRequest = struct(
  n0,
  _LSMR,
  0,
  [_bI, _sDT, _eDT, _me, _bB, _gB, _fi, _mRax, _nTe],
  [
    [0, 1],
    4,
    4,
    () => AnalyticsSessionMetrics,
    () => AnalyticsBinByList,
    () => AnalyticsSessionGroupByList,
    () => AnalyticsSessionFilters,
    1,
    0,
  ]
);
export var ListSessionMetricsResponse = struct(n0, _LSMRi, 0, [_bI, _res, _nTe], [0, () => AnalyticsSessionResults, 0]);
export var ListUtteranceMetricsRequest = struct(
  n0,
  _LUMR,
  0,
  [_bI, _sDT, _eDT, _me, _bB, _gB, _at, _fi, _mRax, _nTe],
  [
    [0, 1],
    4,
    4,
    () => AnalyticsUtteranceMetrics,
    () => AnalyticsBinByList,
    () => AnalyticsUtteranceGroupByList,
    () => AnalyticsUtteranceAttributes,
    () => AnalyticsUtteranceFilters,
    1,
    0,
  ]
);
export var ListUtteranceMetricsResponse = struct(
  n0,
  _LUMRi,
  0,
  [_bI, _res, _nTe],
  [0, () => AnalyticsUtteranceResults, 0]
);
export var SessionDataSortBy = struct(n0, _SDSB, 0, [_n, _or], [0, 0]);
export var SessionSpecification = struct(
  n0,
  _SS,
  0,
  [_bAI, _bV, _lI, _ch, _sIe, _cST, _cET, _cDS, _cES, _mod, _nOT, _iIS, _oRI],
  [0, 0, 0, 0, 0, 4, 4, 1, 0, 0, 1, () => InvokedIntentSamples, 0]
);
export var AnalyticsBinByList = list(n0, _ABBL, 0, () => AnalyticsBinBySpecification);
export var AnalyticsBinKeys = list(n0, _ABKn, 0, () => AnalyticsBinKey);
export var AnalyticsFilterValues = 64 | 0;

export var AnalyticsIntentFilters = list(n0, _AIFn, 0, () => AnalyticsIntentFilter);
export var AnalyticsIntentGroupByKeys = list(n0, _AIGBKn, 0, () => AnalyticsIntentGroupByKey);
export var AnalyticsIntentGroupByList = list(n0, _AIGBL, 0, () => AnalyticsIntentGroupBySpecification);
export var AnalyticsIntentMetricResults = list(n0, _AIMRn, 0, () => AnalyticsIntentMetricResult);
export var AnalyticsIntentMetrics = list(n0, _AIMn, 0, () => AnalyticsIntentMetric);
export var AnalyticsIntentNodeSummaries = list(n0, _AINSn, 0, () => AnalyticsIntentNodeSummary);
export var AnalyticsIntentResults = list(n0, _AIRn, 0, () => AnalyticsIntentResult);
export var AnalyticsIntentStageFilters = list(n0, _AISFn, 0, () => AnalyticsIntentStageFilter);
export var AnalyticsIntentStageGroupByKeys = list(n0, _AISGBKn, 0, () => AnalyticsIntentStageGroupByKey);
export var AnalyticsIntentStageGroupByList = list(n0, _AISGBL, 0, () => AnalyticsIntentStageGroupBySpecification);
export var AnalyticsIntentStageMetricResults = list(n0, _AISMRn, 0, () => AnalyticsIntentStageMetricResult);
export var AnalyticsIntentStageMetrics = list(n0, _AISMn, 0, () => AnalyticsIntentStageMetric);
export var AnalyticsIntentStageResults = list(n0, _AISRn, 0, () => AnalyticsIntentStageResult);
export var AnalyticsPathFilters = list(n0, _APFn, 0, () => AnalyticsPathFilter);
export var AnalyticsSessionFilters = list(n0, _ASFn, 0, () => AnalyticsSessionFilter);
export var AnalyticsSessionGroupByKeys = list(n0, _ASGBKn, 0, () => AnalyticsSessionGroupByKey);
export var AnalyticsSessionGroupByList = list(n0, _ASGBL, 0, () => AnalyticsSessionGroupBySpecification);
export var AnalyticsSessionMetricResults = list(n0, _ASMRn, 0, () => AnalyticsSessionMetricResult);
export var AnalyticsSessionMetrics = list(n0, _ASMn, 0, () => AnalyticsSessionMetric);
export var AnalyticsSessionResults = list(n0, _ASRn, 0, () => AnalyticsSessionResult);
export var AnalyticsUtteranceAttributeResults = list(n0, _AUARn, 0, () => AnalyticsUtteranceAttributeResult);
export var AnalyticsUtteranceAttributes = list(n0, _AUAn, 0, () => AnalyticsUtteranceAttribute);
export var AnalyticsUtteranceFilters = list(n0, _AUFna, 0, () => AnalyticsUtteranceFilter);
export var AnalyticsUtteranceGroupByKeys = list(n0, _AUGBKn, 0, () => AnalyticsUtteranceGroupByKey);
export var AnalyticsUtteranceGroupByList = list(n0, _AUGBL, 0, () => AnalyticsUtteranceGroupBySpecification);
export var AnalyticsUtteranceMetricResults = list(n0, _AUMRn, 0, () => AnalyticsUtteranceMetricResult);
export var AnalyticsUtteranceMetrics = list(n0, _AUMn, 0, () => AnalyticsUtteranceMetric);
export var AnalyticsUtteranceResults = list(n0, _AURn, 0, () => AnalyticsUtteranceResult);
export var InvokedIntentSamples = list(n0, _IISn, 0, () => InvokedIntentSample);
export var SessionSpecifications = list(n0, _SSe, 0, () => SessionSpecification);
export var ListIntentMetrics = op(
  n0,
  _LIM,
  {
    [_h]: ["POST", "/bots/{botId}/analytics/intentmetrics", 200],
  },
  () => ListIntentMetricsRequest,
  () => ListIntentMetricsResponse
);
export var ListIntentPaths = op(
  n0,
  _LIP,
  {
    [_h]: ["POST", "/bots/{botId}/analytics/intentpaths", 200],
  },
  () => ListIntentPathsRequest,
  () => ListIntentPathsResponse
);
export var ListIntentStageMetrics = op(
  n0,
  _LISM,
  {
    [_h]: ["POST", "/bots/{botId}/analytics/intentstagemetrics", 200],
  },
  () => ListIntentStageMetricsRequest,
  () => ListIntentStageMetricsResponse
);
export var ListSessionAnalyticsData = op(
  n0,
  _LSAD,
  {
    [_h]: ["POST", "/bots/{botId}/analytics/sessions", 200],
  },
  () => ListSessionAnalyticsDataRequest,
  () => ListSessionAnalyticsDataResponse
);
export var ListSessionMetrics = op(
  n0,
  _LSM,
  {
    [_h]: ["POST", "/bots/{botId}/analytics/sessionmetrics", 200],
  },
  () => ListSessionMetricsRequest,
  () => ListSessionMetricsResponse
);
export var ListUtteranceMetrics = op(
  n0,
  _LUM,
  {
    [_h]: ["POST", "/bots/{botId}/analytics/utterancemetrics", 200],
  },
  () => ListUtteranceMetricsRequest,
  () => ListUtteranceMetricsResponse
);

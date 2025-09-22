// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aA,
  _AAR,
  _AARR,
  _AC,
  _aI,
  _aN,
  _an,
  _AR,
  _ar,
  _ARC,
  _ARCL,
  _aRn,
  _aRr,
  _aRrc,
  _ARSr,
  _AS,
  _CA,
  _cA,
  _CAR,
  _CARR,
  _CARr,
  _CARre,
  _cod,
  _conf,
  _cTl,
  _DA,
  _DAR,
  _DARe,
  _DARR,
  _ex,
  _f,
  _GA,
  _GAR,
  _GARe,
  _GARetr,
  _GARRet,
  _GARRetr,
  _h,
  _hQ,
  _IAAR,
  _IAARC,
  _IAARCL,
  _IAC,
  _iAn,
  _IAR,
  _IARL,
  _in,
  _iT,
  _lRA,
  _lRAA,
  _n,
  _rAe,
  _rN,
  _rTe,
  _rTes,
  _s,
  _SR,
  _sR,
  _t,
  _ta,
  _TL,
  _uA,
  _uAA,
  _UAC,
  _uAn,
  _UAp,
  _UAR,
  _UARp,
  _UARpd,
  _UARR,
  n0,
  Unit,
} from "./schemas_0";
import { FilterCriteriaMap } from "./schemas_13_Archive";

/* eslint no-var: 0 */

export var AnalysisRule = struct(n0, _AR, 0, [_ex], [() => AnalysisRuleCriteriaList]);
export var AnalysisRuleCriteria = struct(n0, _ARC, 0, [_aI, _rTe], [64 | 0, list(n0, _TL, 0, 128 | 0)]);
export var AnalyzerSummary = struct(
  n0,
  _AS,
  0,
  [_ar, _n, _t, _cA, _lRA, _lRAA, _ta, _s, _sR, _conf],
  [0, 0, 0, 5, 0, 5, 128 | 0, 0, () => StatusReason, () => AnalyzerConfiguration]
);
export var ApplyArchiveRuleRequest = struct(n0, _AARR, 0, [_aA, _rN, _cTl], [0, 0, [0, 4]]);
export var ArchiveRuleSummary = struct(n0, _ARSr, 0, [_rN, _f, _cA, _uA], [0, () => FilterCriteriaMap, 5, 5]);
export var CreateAnalyzerRequest = struct(
  n0,
  _CAR,
  0,
  [_aN, _t, _aRr, _ta, _cTl, _conf],
  [0, 0, () => InlineArchiveRulesList, 128 | 0, [0, 4], () => AnalyzerConfiguration]
);
export var CreateAnalyzerResponse = struct(n0, _CARr, 0, [_ar], [0]);
export var CreateArchiveRuleRequest = struct(
  n0,
  _CARR,
  0,
  [_aN, _rN, _f, _cTl],
  [[0, 1], 0, () => FilterCriteriaMap, [0, 4]]
);
export var DeleteAnalyzerRequest = struct(
  n0,
  _DAR,
  0,
  [_aN, _cTl],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cTl,
      },
    ],
  ]
);
export var DeleteArchiveRuleRequest = struct(
  n0,
  _DARR,
  0,
  [_aN, _rN, _cTl],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cTl,
      },
    ],
  ]
);
export var GetAnalyzerRequest = struct(n0, _GAR, 0, [_aN], [[0, 1]]);
export var GetAnalyzerResponse = struct(n0, _GARe, 0, [_an], [() => AnalyzerSummary]);
export var GetArchiveRuleRequest = struct(
  n0,
  _GARRet,
  0,
  [_aN, _rN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetArchiveRuleResponse = struct(n0, _GARRetr, 0, [_aRrc], [() => ArchiveRuleSummary]);
export var InlineArchiveRule = struct(n0, _IAR, 0, [_rN, _f], [0, () => FilterCriteriaMap]);
export var InternalAccessAnalysisRule = struct(n0, _IAAR, 0, [_in], [() => InternalAccessAnalysisRuleCriteriaList]);
export var InternalAccessAnalysisRuleCriteria = struct(n0, _IAARC, 0, [_aI, _rTes, _rAe], [64 | 0, 64 | 0, 64 | 0]);
export var InternalAccessConfiguration = struct(n0, _IAC, 0, [_aRn], [() => InternalAccessAnalysisRule]);
export var StatusReason = struct(n0, _SR, 0, [_cod], [0]);
export var UnusedAccessConfiguration = struct(n0, _UAC, 0, [_uAA, _aRn], [1, () => AnalysisRule]);
export var UpdateAnalyzerRequest = struct(n0, _UAR, 0, [_aN, _conf], [[0, 1], () => AnalyzerConfiguration]);
export var UpdateAnalyzerResponse = struct(n0, _UARp, 0, [_conf], [() => AnalyzerConfiguration]);
export var UpdateArchiveRuleRequest = struct(
  n0,
  _UARR,
  0,
  [_aN, _rN, _f, _cTl],
  [[0, 1], [0, 1], () => FilterCriteriaMap, [0, 4]]
);
export var AccountIdsList = 64 | 0;

export var AnalysisRuleCriteriaList = list(n0, _ARCL, 0, () => AnalysisRuleCriteria);
export var InlineArchiveRulesList = list(n0, _IARL, 0, () => InlineArchiveRule);
export var InternalAccessAnalysisRuleCriteriaList = list(n0, _IAARCL, 0, () => InternalAccessAnalysisRuleCriteria);
export var ResourceArnsList = 64 | 0;

export var ResourceTypeList = 64 | 0;

export var TagsList = list(n0, _TL, 0, 128 | 0);
export var AnalyzerConfiguration = uni(
  n0,
  _AC,
  0,
  [_uAn, _iAn],
  [() => UnusedAccessConfiguration, () => InternalAccessConfiguration]
);
export var ApplyArchiveRule = op(
  n0,
  _AAR,
  {
    [_h]: ["PUT", "/archive-rule", 200],
  },
  () => ApplyArchiveRuleRequest,
  () => Unit
);
export var CreateAnalyzer = op(
  n0,
  _CA,
  {
    [_h]: ["PUT", "/analyzer", 200],
  },
  () => CreateAnalyzerRequest,
  () => CreateAnalyzerResponse
);
export var CreateArchiveRule = op(
  n0,
  _CARre,
  {
    [_h]: ["PUT", "/analyzer/{analyzerName}/archive-rule", 200],
  },
  () => CreateArchiveRuleRequest,
  () => Unit
);
export var DeleteAnalyzer = op(
  n0,
  _DA,
  {
    [_h]: ["DELETE", "/analyzer/{analyzerName}", 200],
  },
  () => DeleteAnalyzerRequest,
  () => Unit
);
export var DeleteArchiveRule = op(
  n0,
  _DARe,
  {
    [_h]: ["DELETE", "/analyzer/{analyzerName}/archive-rule/{ruleName}", 200],
  },
  () => DeleteArchiveRuleRequest,
  () => Unit
);
export var GetAnalyzer = op(
  n0,
  _GA,
  {
    [_h]: ["GET", "/analyzer/{analyzerName}", 200],
  },
  () => GetAnalyzerRequest,
  () => GetAnalyzerResponse
);
export var GetArchiveRule = op(
  n0,
  _GARetr,
  {
    [_h]: ["GET", "/analyzer/{analyzerName}/archive-rule/{ruleName}", 200],
  },
  () => GetArchiveRuleRequest,
  () => GetArchiveRuleResponse
);
export var UpdateAnalyzer = op(
  n0,
  _UAp,
  {
    [_h]: ["PUT", "/analyzer/{analyzerName}", 200],
  },
  () => UpdateAnalyzerRequest,
  () => UpdateAnalyzerResponse
);
export var UpdateArchiveRule = op(
  n0,
  _UARpd,
  {
    [_h]: ["PUT", "/analyzer/{analyzerName}/archive-rule/{ruleName}", 200],
  },
  () => UpdateArchiveRuleRequest,
  () => Unit
);

// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _ASP,
  _At,
  _Do,
  _DSP,
  _Du,
  _FR,
  _GIRet,
  _GIRR,
  _GIRRe,
  _h,
  _Hos,
  _HTTPM,
  _Id,
  _IR,
  _IRL,
  _IRn,
  _IRV,
  _IRVU,
  _LRT,
  _LRTR,
  _LRTRi,
  _MA,
  _N,
  _NT,
  _Pr,
  _Pro,
  _PRV,
  _PRVU,
  _RARN,
  _RARNe,
  _RN,
  _RS,
  _RSes,
  _RT,
  _RTet,
  _Ru,
  _SLp,
  _SN,
  _Sp,
  _Spa,
  _SRB,
  _SRR,
  _SRU,
  _STe,
  _TF,
  _Tr,
  _TSL,
  _UIR,
  _UIRR,
  _UIRRp,
  _URLP,
  _USR,
  _USRR,
  _USRRp,
  n0,
} from "./schemas_0";
import { SamplingRateBoost, SamplingRuleRecord } from "./schemas_5_Rule";

/* eslint no-var: 0 */

export var GetIndexingRulesRequest = struct(n0, _GIRR, 0, [_NT], [0]);
export var GetIndexingRulesResult = struct(n0, _GIRRe, 0, [_IR, _NT], [() => IndexingRuleList, 0]);
export var IndexingRule = struct(n0, _IRn, 0, [_N, _MA, _Ru], [0, 4, () => IndexingRuleValue]);
export var ListRetrievedTracesRequest = struct(n0, _LRTR, 0, [_RT, _TF, _NT], [0, 0, 0]);
export var ListRetrievedTracesResult = struct(n0, _LRTRi, 0, [_RS, _TF, _Tr, _NT], [0, 0, () => TraceSpanList, 0]);
export var ProbabilisticRuleValue = struct(n0, _PRV, 0, [_DSP, _ASP], [1, 1]);
export var ProbabilisticRuleValueUpdate = struct(n0, _PRVU, 0, [_DSP], [1]);
export var RetrievedTrace = struct(n0, _RTet, 0, [_Id, _Du, _Sp], [0, 1, () => SpanList]);
export var SamplingRuleUpdate = struct(
  n0,
  _SRU,
  0,
  [_RN, _RARN, _RARNe, _Pr, _FR, _RSes, _Hos, _SN, _STe, _HTTPM, _URLP, _At, _SRB],
  [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 128 | 0, () => SamplingRateBoost]
);
export var Span = struct(n0, _Spa, 0, [_Id, _Do], [0, 0]);
export var UpdateIndexingRuleRequest = struct(n0, _UIRR, 0, [_N, _Ru], [0, () => IndexingRuleValueUpdate]);
export var UpdateIndexingRuleResult = struct(n0, _UIRRp, 0, [_IRn], [() => IndexingRule]);
export var UpdateSamplingRuleRequest = struct(n0, _USRR, 0, [_SRU], [() => SamplingRuleUpdate]);
export var UpdateSamplingRuleResult = struct(n0, _USRRp, 0, [_SRR], [() => SamplingRuleRecord]);
export var IndexingRuleList = list(n0, _IRL, 0, () => IndexingRule);
export var SpanList = list(n0, _SLp, 0, () => Span);
export var TraceSpanList = list(n0, _TSL, 0, () => RetrievedTrace);
export var IndexingRuleValue = uni(n0, _IRV, 0, [_Pro], [() => ProbabilisticRuleValue]);
export var IndexingRuleValueUpdate = uni(n0, _IRVU, 0, [_Pro], [() => ProbabilisticRuleValueUpdate]);
export var GetIndexingRules = op(
  n0,
  _GIRet,
  {
    [_h]: ["POST", "/GetIndexingRules", 200],
  },
  () => GetIndexingRulesRequest,
  () => GetIndexingRulesResult
);
export var ListRetrievedTraces = op(
  n0,
  _LRT,
  {
    [_h]: ["POST", "/ListRetrievedTraces", 200],
  },
  () => ListRetrievedTracesRequest,
  () => ListRetrievedTracesResult
);
export var UpdateIndexingRule = op(
  n0,
  _UIR,
  {
    [_h]: ["POST", "/UpdateIndexingRule", 200],
  },
  () => UpdateIndexingRuleRequest,
  () => UpdateIndexingRuleResult
);
export var UpdateSamplingRule = op(
  n0,
  _USR,
  {
    [_h]: ["POST", "/UpdateSamplingRule", 200],
  },
  () => UpdateSamplingRuleRequest,
  () => UpdateSamplingRuleResult
);

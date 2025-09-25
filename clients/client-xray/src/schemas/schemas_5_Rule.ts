// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { RuleLimitExceededException as __RuleLimitExceededException } from "../models/index";
import {
  _At,
  _c,
  _CA,
  _CSR,
  _CSRR,
  _CSRRr,
  _CWM,
  _DSR,
  _DSRR,
  _DSRRe,
  _e,
  _FR,
  _GSR,
  _GSRR,
  _GSRRe,
  _h,
  _Hos,
  _HTTPM,
  _M,
  _MA,
  _MRa,
  _NT,
  _Pr,
  _RARN,
  _RARNe,
  _RLEE,
  _RN,
  _RSes,
  _SN,
  _SR,
  _SRB,
  _SRR,
  _SRRa,
  _SRRL,
  _STe,
  _Ta,
  _URLP,
  _Ve,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_10_Resource";

/* eslint no-var: 0 */

export var CreateSamplingRuleRequest = struct(n0, _CSRR, 0, [_SR, _Ta], [() => SamplingRule, () => TagList]);
export var CreateSamplingRuleResult = struct(n0, _CSRRr, 0, [_SRR], [() => SamplingRuleRecord]);
export var DeleteSamplingRuleRequest = struct(n0, _DSRR, 0, [_RN, _RARN], [0, 0]);
export var DeleteSamplingRuleResult = struct(n0, _DSRRe, 0, [_SRR], [() => SamplingRuleRecord]);
export var GetSamplingRulesRequest = struct(n0, _GSRR, 0, [_NT], [0]);
export var GetSamplingRulesResult = struct(n0, _GSRRe, 0, [_SRRa, _NT], [() => SamplingRuleRecordList, 0]);
export var RuleLimitExceededException = error(
  n0,
  _RLEE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __RuleLimitExceededException
);
export var SamplingRateBoost = struct(n0, _SRB, 0, [_MRa, _CWM], [1, 1]);
export var SamplingRule = struct(
  n0,
  _SR,
  0,
  [_RN, _RARN, _RARNe, _Pr, _FR, _RSes, _SN, _STe, _Hos, _HTTPM, _URLP, _Ve, _At, _SRB],
  [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 128 | 0, () => SamplingRateBoost]
);
export var SamplingRuleRecord = struct(n0, _SRR, 0, [_SR, _CA, _MA], [() => SamplingRule, 4, 4]);
export var SamplingRuleRecordList = list(n0, _SRRL, 0, () => SamplingRuleRecord);
export var AttributeMap = 128 | 0;

export var CreateSamplingRule = op(
  n0,
  _CSR,
  {
    [_h]: ["POST", "/CreateSamplingRule", 200],
  },
  () => CreateSamplingRuleRequest,
  () => CreateSamplingRuleResult
);
export var DeleteSamplingRule = op(
  n0,
  _DSR,
  {
    [_h]: ["POST", "/DeleteSamplingRule", 200],
  },
  () => DeleteSamplingRuleRequest,
  () => DeleteSamplingRuleResult
);
export var GetSamplingRules = op(
  n0,
  _GSR,
  {
    [_h]: ["POST", "/GetSamplingRules", 200],
  },
  () => GetSamplingRulesRequest,
  () => GetSamplingRulesResult
);

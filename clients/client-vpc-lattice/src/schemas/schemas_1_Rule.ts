// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _ac,
  _BUR,
  _BURR,
  _BURRa,
  _cA,
  _con,
  _cS,
  _DL,
  _DLR,
  _DLRe,
  _DRe,
  _DRR,
  _DRRe,
  _ex,
  _fC,
  _fM,
  _GR,
  _GRR,
  _GRRe,
  _h,
  _HM,
  _hM,
  _HML,
  _HMT,
  _HMt,
  _hMt,
  _hQ,
  _i,
  _iD,
  _it,
  _lI,
  _LR,
  _LRR,
  _LRRi,
  _lUA,
  _ma,
  _me,
  _mR,
  _n,
  _nT,
  _PM,
  _pM,
  _PMT,
  _pr,
  _pre,
  _r,
  _rIu,
  _RM,
  _RS,
  _RSL,
  _RU,
  _RUF,
  _RUFL,
  _RUL,
  _RUS,
  _RUSL,
  _s,
  _sI,
  _u,
  _URp,
  _URRp,
  _URRpd,
  n0,
} from "./schemas_0";
import { RuleAction } from "./schemas_13_Rule";

/* eslint no-var: 0 */

export var BatchUpdateRuleRequest = struct(n0, _BURR, 0, [_sI, _lI, _r], [[0, 1], [0, 1], () => RuleUpdateList]);
export var BatchUpdateRuleResponse = struct(
  n0,
  _BURRa,
  0,
  [_s, _u],
  [() => RuleUpdateSuccessList, () => RuleUpdateFailureList]
);
export var DeleteListenerRequest = struct(
  n0,
  _DLR,
  0,
  [_sI, _lI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteListenerResponse = struct(n0, _DLRe, 0, [], []);
export var DeleteRuleRequest = struct(
  n0,
  _DRR,
  0,
  [_sI, _lI, _rIu],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteRuleResponse = struct(n0, _DRRe, 0, [], []);
export var GetRuleRequest = struct(
  n0,
  _GRR,
  0,
  [_sI, _lI, _rIu],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetRuleResponse = struct(
  n0,
  _GRRe,
  0,
  [_a, _i, _n, _iD, _ma, _pr, _ac, _cA, _lUA],
  [0, 0, 0, 2, () => RuleMatch, 1, () => RuleAction, 5, 5]
);
export var HeaderMatch = struct(n0, _HM, 0, [_n, _ma, _cS], [0, () => HeaderMatchType, 2]);
export var HttpMatch = struct(n0, _HMt, 0, [_me, _pM, _hM], [0, () => PathMatch, () => HeaderMatchList]);
export var ListRulesRequest = struct(
  n0,
  _LRR,
  0,
  [_sI, _lI, _mR, _nT],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListRulesResponse = struct(n0, _LRRi, 0, [_it, _nT], [() => RuleSummaryList, 0]);
export var PathMatch = struct(n0, _PM, 0, [_ma, _cS], [() => PathMatchType, 2]);
export var RuleSummary = struct(n0, _RS, 0, [_a, _i, _n, _iD, _pr, _cA, _lUA], [0, 0, 0, 2, 1, 5, 5]);
export var RuleUpdate = struct(n0, _RU, 0, [_rIu, _ma, _pr, _ac], [0, () => RuleMatch, 1, () => RuleAction]);
export var RuleUpdateFailure = struct(n0, _RUF, 0, [_rIu, _fC, _fM], [0, 0, 0]);
export var RuleUpdateSuccess = struct(
  n0,
  _RUS,
  0,
  [_a, _i, _n, _iD, _ma, _pr, _ac],
  [0, 0, 0, 2, () => RuleMatch, 1, () => RuleAction]
);
export var UpdateRuleRequest = struct(
  n0,
  _URRp,
  0,
  [_sI, _lI, _rIu, _ma, _pr, _ac],
  [[0, 1], [0, 1], [0, 1], () => RuleMatch, 1, () => RuleAction]
);
export var UpdateRuleResponse = struct(
  n0,
  _URRpd,
  0,
  [_a, _i, _n, _iD, _ma, _pr, _ac],
  [0, 0, 0, 2, () => RuleMatch, 1, () => RuleAction]
);
export var HeaderMatchList = list(n0, _HML, 0, () => HeaderMatch);
export var RuleSummaryList = list(n0, _RSL, 0, () => RuleSummary);
export var RuleUpdateFailureList = list(n0, _RUFL, 0, () => RuleUpdateFailure);
export var RuleUpdateList = list(n0, _RUL, 0, () => RuleUpdate);
export var RuleUpdateSuccessList = list(n0, _RUSL, 0, () => RuleUpdateSuccess);
export var HeaderMatchType = uni(n0, _HMT, 0, [_ex, _pre, _con], [0, 0, 0]);
export var PathMatchType = uni(n0, _PMT, 0, [_ex, _pre], [0, 0]);
export var RuleMatch = uni(n0, _RM, 0, [_hMt], [() => HttpMatch]);
export var BatchUpdateRule = op(
  n0,
  _BUR,
  {
    [_h]: ["PATCH", "/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules", 200],
  },
  () => BatchUpdateRuleRequest,
  () => BatchUpdateRuleResponse
);
export var DeleteListener = op(
  n0,
  _DL,
  {
    [_h]: ["DELETE", "/services/{serviceIdentifier}/listeners/{listenerIdentifier}", 204],
  },
  () => DeleteListenerRequest,
  () => DeleteListenerResponse
);
export var DeleteRule = op(
  n0,
  _DRe,
  {
    [_h]: ["DELETE", "/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules/{ruleIdentifier}", 204],
  },
  () => DeleteRuleRequest,
  () => DeleteRuleResponse
);
export var GetRule = op(
  n0,
  _GR,
  {
    [_h]: ["GET", "/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules/{ruleIdentifier}", 200],
  },
  () => GetRuleRequest,
  () => GetRuleResponse
);
export var ListRules = op(
  n0,
  _LR,
  {
    [_h]: ["GET", "/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules", 200],
  },
  () => ListRulesRequest,
  () => ListRulesResponse
);
export var UpdateRule = op(
  n0,
  _URp,
  {
    [_h]: ["PATCH", "/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules/{ruleIdentifier}", 200],
  },
  () => UpdateRuleRequest,
  () => UpdateRuleResponse
);

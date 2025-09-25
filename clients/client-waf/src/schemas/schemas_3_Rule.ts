// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _CT,
  _DI,
  _Ne,
  _Pr,
  _RI,
  _RL,
  _RU,
  _RUu,
  _T,
  _U,
  _URBR,
  _URBRR,
  _URBRRp,
  _URp,
  _URRp,
  _URRpd,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Predicate = struct(n0, _Pr, 0, [_Ne, _T, _DI], [2, 0, 0]);
export var RuleUpdate = struct(n0, _RU, 0, [_A, _Pr], [0, () => Predicate]);
export var UpdateRateBasedRuleRequest = struct(n0, _URBRR, 0, [_RI, _CT, _U, _RL], [0, 0, () => RuleUpdates, 1]);
export var UpdateRateBasedRuleResponse = struct(n0, _URBRRp, 0, [_CT], [0]);
export var UpdateRuleRequest = struct(n0, _URRp, 0, [_RI, _CT, _U], [0, 0, () => RuleUpdates]);
export var UpdateRuleResponse = struct(n0, _URRpd, 0, [_CT], [0]);
export var RuleUpdates = list(n0, _RUu, 0, () => RuleUpdate);
export var UpdateRateBasedRule = op(
  n0,
  _URBR,
  0,
  () => UpdateRateBasedRuleRequest,
  () => UpdateRateBasedRuleResponse
);
export var UpdateRule = op(
  n0,
  _URp,
  0,
  () => UpdateRuleRequest,
  () => UpdateRuleResponse
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _L, _LR, _LRBR, _LRBRR, _LRBRRi, _LRR, _LRRi, _N, _NM, _RI, _RS, _RSu, _Ru, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListRateBasedRulesRequest = struct(n0, _LRBRR, 0, [_NM, _L], [0, 1]);
export var ListRateBasedRulesResponse = struct(n0, _LRBRRi, 0, [_NM, _Ru], [0, () => RuleSummaries]);
export var ListRulesRequest = struct(n0, _LRR, 0, [_NM, _L], [0, 1]);
export var ListRulesResponse = struct(n0, _LRRi, 0, [_NM, _Ru], [0, () => RuleSummaries]);
export var RuleSummary = struct(n0, _RS, 0, [_RI, _N], [0, 0]);
export var RuleSummaries = list(n0, _RSu, 0, () => RuleSummary);
export var ListRateBasedRules = op(
  n0,
  _LRBR,
  0,
  () => ListRateBasedRulesRequest,
  () => ListRateBasedRulesResponse
);
export var ListRules = op(
  n0,
  _LR,
  0,
  () => ListRulesRequest,
  () => ListRulesResponse
);

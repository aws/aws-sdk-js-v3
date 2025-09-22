// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AS,
  _ASc,
  _AT,
  _CTre,
  _DRel,
  _DRR,
  _ESN,
  _eSN,
  _h,
  _hQ,
  _II,
  _LRi,
  _LRR,
  _LRRi,
  _LUTa,
  _mR,
  _MRa,
  _N,
  _NT,
  _nT,
  _PS,
  _pS,
  _RA,
  _RIu,
  _RSLu,
  _RSu,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ActionSummary = struct(n0, _AS, 0, [_AT], [0]);
export var DeleteRuleRequest = struct(
  n0,
  _DRR,
  0,
  [_II, _RIu],
  [
    [0, 1],
    [0, 1],
  ]
);
export var ListRulesRequest = struct(
  n0,
  _LRR,
  0,
  [_II, _PS, _ESN, _MRa, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _pS,
      },
    ],
    [
      0,
      {
        [_hQ]: _eSN,
      },
    ],
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
export var ListRulesResponse = struct(n0, _LRRi, 0, [_RSLu, _NT], [() => RuleSummaryList, 0]);
export var RuleSummary = struct(
  n0,
  _RSu,
  0,
  [_N, _RIu, _RA, _ESN, _PS, _ASc, _CTre, _LUTa],
  [0, 0, 0, 0, 0, () => ActionSummaries, 4, 4]
);
export var ActionSummaries = list(n0, _ASc, 0, () => ActionSummary);
export var RuleSummaryList = list(n0, _RSLu, 0, () => RuleSummary);
export var DeleteRule = op(
  n0,
  _DRel,
  {
    [_h]: ["DELETE", "/rules/{InstanceId}/{RuleId}", 200],
  },
  () => DeleteRuleRequest,
  () => Unit
);
export var ListRules = op(
  n0,
  _LRi,
  {
    [_h]: ["GET", "/rules/{InstanceId}", 200],
  },
  () => ListRulesRequest,
  () => ListRulesResponse
);

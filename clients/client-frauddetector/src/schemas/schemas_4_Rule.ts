// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _cT,
  _d,
  _dI,
  _ex,
  _GR,
  _GRR,
  _GRRe,
  _l,
  _lUT,
  _mR,
  _nT,
  _o,
  _RD,
  _rD,
  _RDL,
  _rE,
  _rIu,
  _rV,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ruleExpression = sim(n0, _rE, 0, 8);
export var GetRulesRequest = struct(n0, _GRR, 0, [_rIu, _dI, _rV, _nT, _mR], [0, 0, 0, 0, 1]);
export var GetRulesResult = struct(n0, _GRRe, 0, [_rD, _nT], [[() => RuleDetailList, 0], 0]);
export var RuleDetail = struct(
  n0,
  _RD,
  0,
  [_rIu, _d, _dI, _rV, _ex, _l, _o, _lUT, _cT, _a],
  [0, 0, 0, 0, [() => ruleExpression, 0], 0, 64 | 0, 0, 0, 0]
);
export var NonEmptyListOfStrings = 64 | 0;

export var RuleDetailList = list(n0, _RDL, 0, [() => RuleDetail, 0]);
export var GetRules = op(
  n0,
  _GR,
  0,
  () => GetRulesRequest,
  () => GetRulesResult
);

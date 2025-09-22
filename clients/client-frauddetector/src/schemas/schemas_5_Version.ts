// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CR,
  _CRR,
  _CRRr,
  _d,
  _dI,
  _DR,
  _DRR,
  _DRRe,
  _ex,
  _l,
  _o,
  _R,
  _rIu,
  _ru,
  _rV,
  _ta,
  _URM,
  _URMR,
  _URMRp,
  _URV,
  _URVR,
  _URVRp,
  n0,
  tagList,
} from "./schemas_0";
import { ruleExpression } from "./schemas_4_Rule";

/* eslint no-var: 0 */

export var CreateRuleRequest = struct(
  n0,
  _CRR,
  0,
  [_rIu, _dI, _d, _ex, _l, _o, _ta],
  [0, 0, 0, [() => ruleExpression, 0], 0, 64 | 0, () => tagList]
);
export var CreateRuleResult = struct(n0, _CRRr, 0, [_ru], [() => Rule]);
export var DeleteRuleRequest = struct(n0, _DRR, 0, [_ru], [() => Rule]);
export var DeleteRuleResult = struct(n0, _DRRe, 0, [], []);
export var Rule = struct(n0, _R, 0, [_dI, _rIu, _rV], [0, 0, 0]);
export var UpdateRuleMetadataRequest = struct(n0, _URMR, 0, [_ru, _d], [() => Rule, 0]);
export var UpdateRuleMetadataResult = struct(n0, _URMRp, 0, [], []);
export var UpdateRuleVersionRequest = struct(
  n0,
  _URVR,
  0,
  [_ru, _d, _ex, _l, _o, _ta],
  [() => Rule, 0, [() => ruleExpression, 0], 0, 64 | 0, () => tagList]
);
export var UpdateRuleVersionResult = struct(n0, _URVRp, 0, [_ru], [() => Rule]);
export var CreateRule = op(
  n0,
  _CR,
  0,
  () => CreateRuleRequest,
  () => CreateRuleResult
);
export var DeleteRule = op(
  n0,
  _DR,
  0,
  () => DeleteRuleRequest,
  () => DeleteRuleResult
);
export var UpdateRuleMetadata = op(
  n0,
  _URM,
  0,
  () => UpdateRuleMetadataRequest,
  () => UpdateRuleMetadataResult
);
export var UpdateRuleVersion = op(
  n0,
  _URV,
  0,
  () => UpdateRuleVersionRequest,
  () => UpdateRuleVersionResult
);

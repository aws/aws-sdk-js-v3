// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CB,
  _CD,
  _CEh,
  _CS,
  _CSL,
  _CSo,
  _D,
  _Di,
  _DRes,
  _DRRescr,
  _DRRescri,
  _h,
  _LMB,
  _LMD,
  _N,
  _R,
  _RAe,
  _RLu,
  _Ru,
  _Rule,
  _SM,
  _T,
  _TA,
  _Th,
  _Ty,
  _U,
  _URpd,
  _URRpda,
  _URRpdat,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ColumnSelector = struct(n0, _CS, 0, [_R, _N], [0, 0]);
export var DescribeRulesetRequest = struct(n0, _DRRescr, 0, [_N], [[0, 1]]);
export var DescribeRulesetResponse = struct(
  n0,
  _DRRescri,
  0,
  [_N, _D, _TA, _Ru, _CD, _CB, _LMB, _LMD, _RAe, _T],
  [0, 0, 0, () => RuleList, 4, 0, 0, 4, 0, 128 | 0]
);
export var Rule = struct(
  n0,
  _Rule,
  0,
  [_N, _Di, _CEh, _SM, _Th, _CSo],
  [0, 2, 0, 128 | 0, () => Threshold, () => ColumnSelectorList]
);
export var Threshold = struct(n0, _Th, 0, [_V, _Ty, _U], [1, 0, 0]);
export var UpdateRulesetRequest = struct(n0, _URRpda, 0, [_N, _D, _Ru], [[0, 1], 0, () => RuleList]);
export var UpdateRulesetResponse = struct(n0, _URRpdat, 0, [_N], [0]);
export var ColumnSelectorList = list(n0, _CSL, 0, () => ColumnSelector);
export var RuleList = list(n0, _RLu, 0, () => Rule);
export var DescribeRuleset = op(
  n0,
  _DRes,
  {
    [_h]: ["GET", "/rulesets/{Name}", 200],
  },
  () => DescribeRulesetRequest,
  () => DescribeRulesetResponse
);
export var UpdateRuleset = op(
  n0,
  _URpd,
  {
    [_h]: ["PUT", "/rulesets/{Name}", 200],
  },
  () => UpdateRulesetRequest,
  () => UpdateRulesetResponse
);

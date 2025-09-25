// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _ac,
  _act,
  _AP,
  _APM,
  _AS,
  _ASL,
  _AT,
  _ATM,
  _d,
  _GA,
  _GAR,
  _GARe,
  _h,
  _hQ,
  _i,
  _LA,
  _LAR,
  _LARi,
  _mR,
  _nT,
  _p,
  _r,
  _rT,
  _t,
  _ta,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Action = struct(
  n0,
  _A,
  0,
  [_i, _a, _d, _p, _t, _ta],
  [0, 0, 0, () => ActionParameterMap, () => ActionTargetMap, 128 | 0]
);
export var ActionParameter = struct(n0, _AP, 0, [_d, _r], [0, 2]);
export var ActionSummary = struct(n0, _AS, 0, [_i, _a, _d, _t, _ta], [0, 0, 0, () => ActionTargetMap, 128 | 0]);
export var ActionTarget = struct(n0, _AT, 0, [_rT], [0]);
export var GetActionRequest = struct(n0, _GAR, 0, [_i], [[0, 1]]);
export var GetActionResponse = struct(n0, _GARe, 0, [_act], [() => Action]);
export var ListActionsRequest = struct(
  n0,
  _LAR,
  0,
  [_mR, _nT],
  [
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
export var ListActionsResponse = struct(n0, _LARi, 0, [_ac, _nT], [() => ActionSummaryList, 0]);
export var ActionSummaryList = list(n0, _ASL, 0, () => ActionSummary);
export var ActionParameterMap = map(n0, _APM, 0, 0, () => ActionParameter);
export var ActionTargetMap = map(n0, _ATM, 0, 0, () => ActionTarget);
export var GetAction = op(
  n0,
  _GA,
  {
    [_h]: ["GET", "/actions/{id}", 200],
  },
  () => GetActionRequest,
  () => GetActionResponse
);
export var ListActions = op(
  n0,
  _LA,
  {
    [_h]: ["GET", "/actions", 200],
  },
  () => ListActionsRequest,
  () => ListActionsResponse
);

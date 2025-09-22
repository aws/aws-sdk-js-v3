// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _DTe,
  _DTR,
  _DTRe,
  _F,
  _FUA,
  _h,
  _LT,
  _LTF,
  _LTFi,
  _LTR,
  _LTRi,
  _MR,
  _N,
  _NT,
  _T,
  _TA,
  _TB,
  _TS,
  _TSa,
  _TT,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var TargetAddress = sim(n0, _TA, 0, 8);
export var DeleteTargetRequest = struct(n0, _DTR, 0, [_TA, _FUA], [[() => TargetAddress, 0], 2]);
export var DeleteTargetResult = struct(n0, _DTRe, 0, [], []);
export var ListTargetsFilter = struct(n0, _LTF, 0, [_N, _V], [0, 0]);
export var ListTargetsRequest = struct(n0, _LTR, 0, [_F, _NT, _MR], [() => ListTargetsFilters, 0, 1]);
export var ListTargetsResult = struct(n0, _LTRi, 0, [_T, _NT], [[() => TargetsBatch, 0], 0]);
export var TargetSummary = struct(n0, _TS, 0, [_TA, _TT, _TSa], [[() => TargetAddress, 0], 0, 0]);
export var ListTargetsFilters = list(n0, _LTFi, 0, () => ListTargetsFilter);
export var TargetsBatch = list(n0, _TB, 0, [() => TargetSummary, 0]);
export var DeleteTarget = op(
  n0,
  _DTe,
  {
    [_h]: ["POST", "/deleteTarget", 200],
  },
  () => DeleteTargetRequest,
  () => DeleteTargetResult
);
export var ListTargets = op(
  n0,
  _LT,
  {
    [_h]: ["POST", "/listTargets", 200],
  },
  () => ListTargetsRequest,
  () => ListTargetsResult
);

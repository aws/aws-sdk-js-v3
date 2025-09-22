// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ag,
  _asc,
  _C,
  _CL,
  _con,
  _dSa,
  _F,
  _f,
  _fi,
  _FL,
  _h,
  _LM,
  _LMR,
  _LMRi,
  _mR,
  _n,
  _nT,
  _o,
  _RL,
  _ro,
  _S,
  _SLo,
  _so,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Condition = struct(n0, _C, 0, [_f, _o, _v], [0, 0, 0]);
export var Field = struct(n0, _F, 0, [_n, _ag], [0, 0]);
export var ListMetricsRequest = struct(
  n0,
  _LMR,
  0,
  [_nT, _mR, _fi, _dSa, _con, _so],
  [0, 1, () => FieldList, 0, () => ConditionList, () => SortList]
);
export var ListMetricsResponse = struct(n0, _LMRi, 0, [_ro, _nT], [list(n0, _RL, 0, 64 | 0), 0]);
export var Sort = struct(n0, _S, 0, [_f, _asc], [0, 2]);
export var ConditionList = list(n0, _CL, 0, () => Condition);
export var FieldList = list(n0, _FL, 0, () => Field);
export var Row = 64 | 0;

export var RowList = list(n0, _RL, 0, 64 | 0);
export var SortList = list(n0, _SLo, 0, () => Sort);
export var ListMetrics = op(
  n0,
  _LM,
  {
    [_h]: ["POST", "/list-metrics", 200],
  },
  () => ListMetricsRequest,
  () => ListMetricsResponse
);

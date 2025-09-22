// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ar,
  _CRG,
  _CRGR,
  _CRGRr,
  _cT,
  _DRG,
  _DRGR,
  _end,
  _GRG,
  _GRGR,
  _GRGRe,
  _hQ,
  _ht,
  _i,
  _it,
  _LRG,
  _LRGR,
  _LRGRi,
  _mC,
  _mD,
  _mG,
  _mR,
  _mRa,
  _n,
  _nT,
  _RGL,
  _RGLI,
  _rI,
  _sTta,
  _ta,
  _URG,
  _URGR,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_21_Set";

/* eslint no-var: 0 */

export var CreateRunGroupRequest = struct(
  n0,
  _CRGR,
  0,
  [_n, _mC, _mR, _mD, _ta, _rI, _mG],
  [0, 1, 1, 1, 128 | 0, [0, 4], 1]
);
export var CreateRunGroupResponse = struct(n0, _CRGRr, 0, [_ar, _i, _ta], [0, 0, 128 | 0]);
export var DeleteRunGroupRequest = struct(n0, _DRGR, 0, [_i], [[0, 1]]);
export var GetRunGroupRequest = struct(n0, _GRGR, 0, [_i], [[0, 1]]);
export var GetRunGroupResponse = struct(
  n0,
  _GRGRe,
  0,
  [_ar, _i, _n, _mC, _mR, _mD, _cT, _ta, _mG],
  [0, 0, 0, 1, 1, 1, 5, 128 | 0, 1]
);
export var ListRunGroupsRequest = struct(
  n0,
  _LRGR,
  0,
  [_n, _sTta, _mRa],
  [
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    [
      0,
      {
        [_hQ]: _sTta,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListRunGroupsResponse = struct(n0, _LRGRi, 0, [_it, _nT], [() => RunGroupList, 0]);
export var RunGroupListItem = struct(n0, _RGLI, 0, [_ar, _i, _n, _mC, _mR, _mD, _cT, _mG], [0, 0, 0, 1, 1, 1, 5, 1]);
export var UpdateRunGroupRequest = struct(n0, _URGR, 0, [_i, _n, _mC, _mR, _mD, _mG], [[0, 1], 0, 1, 1, 1, 1]);
export var RunGroupList = list(n0, _RGL, 0, () => RunGroupListItem);
export var CreateRunGroup = op(
  n0,
  _CRG,
  {
    [_ht]: ["POST", "/runGroup", 201],
    [_end]: ["workflows-"],
  },
  () => CreateRunGroupRequest,
  () => CreateRunGroupResponse
);
export var DeleteRunGroup = op(
  n0,
  _DRG,
  {
    [_ht]: ["DELETE", "/runGroup/{id}", 202],
    [_end]: ["workflows-"],
  },
  () => DeleteRunGroupRequest,
  () => Unit
);
export var GetRunGroup = op(
  n0,
  _GRG,
  {
    [_ht]: ["GET", "/runGroup/{id}", 200],
    [_end]: ["workflows-"],
  },
  () => GetRunGroupRequest,
  () => GetRunGroupResponse
);
export var ListRunGroups = op(
  n0,
  _LRG,
  {
    [_ht]: ["GET", "/runGroup", 200],
    [_end]: ["workflows-"],
  },
  () => ListRunGroupsRequest,
  () => ListRunGroupsResponse
);
export var UpdateRunGroup = op(
  n0,
  _URG,
  {
    [_ht]: ["POST", "/runGroup/{id}", 202],
    [_end]: ["workflows-"],
  },
  () => UpdateRunGroupRequest,
  () => Unit
);

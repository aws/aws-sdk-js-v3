// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _A,
  _c,
  _CD,
  _CSG,
  _CSGI,
  _CSGO,
  _CT,
  _e,
  _h,
  _hE,
  _hQ,
  _LMD,
  _LSG,
  _LSGI,
  _LSGO,
  _M,
  _MR,
  _N,
  _NP,
  _NT,
  _SGA,
  _SGc,
  _SGL,
  _SGS,
  _SQEE,
  _St,
  _T,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_3_Schedule";

/* eslint no-var: 0 */

export var CreateScheduleGroupInput = struct(n0, _CSGI, 0, [_N, _T, _CT], [[0, 1], () => TagList, [0, 4]]);
export var CreateScheduleGroupOutput = struct(n0, _CSGO, 0, [_SGA], [0]);
export var ListScheduleGroupsInput = struct(
  n0,
  _LSGI,
  0,
  [_NP, _NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _NP,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListScheduleGroupsOutput = struct(n0, _LSGO, 0, [_NT, _SGc], [0, () => ScheduleGroupList]);
export var ScheduleGroupSummary = struct(n0, _SGS, 0, [_A, _N, _St, _CD, _LMD], [0, 0, 0, 4, 4]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M],
  [0],

  __ServiceQuotaExceededException
);
export var ScheduleGroupList = list(n0, _SGL, 0, () => ScheduleGroupSummary);
export var CreateScheduleGroup = op(
  n0,
  _CSG,
  {
    [_h]: ["POST", "/schedule-groups/{Name}", 200],
  },
  () => CreateScheduleGroupInput,
  () => CreateScheduleGroupOutput
);
export var ListScheduleGroups = op(
  n0,
  _LSG,
  {
    [_h]: ["GET", "/schedule-groups", 200],
  },
  () => ListScheduleGroupsInput,
  () => ListScheduleGroupsOutput
);

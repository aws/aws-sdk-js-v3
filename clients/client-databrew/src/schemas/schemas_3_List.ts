// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _CB,
  _CD,
  _CEr,
  _D,
  _DN,
  _h,
  _hQ,
  _JN,
  _jN,
  _JNo,
  _LMB,
  _LMD,
  _LP,
  _LPR,
  _LPRi,
  _LRi,
  _LRRis,
  _LRRist,
  _LSi,
  _LSR,
  _LSRi,
  _mR,
  _MRa,
  _N,
  _NT,
  _nT,
  _OB,
  _OD,
  _P,
  _PL,
  _Pr,
  _RA,
  _RAe,
  _RC,
  _RIL,
  _RIu,
  _RN,
  _Rul,
  _Sa,
  _Sc,
  _Sch,
  _SLc,
  _T,
  _TA,
  _tA,
  n0,
} from "./schemas_0";
import { Sample } from "./schemas_14_Project";

/* eslint no-var: 0 */

export var ListProjectsRequest = struct(
  n0,
  _LPR,
  0,
  [_NT, _MRa],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListProjectsResponse = struct(n0, _LPRi, 0, [_P, _NT], [() => ProjectList, 0]);
export var ListRulesetsRequest = struct(
  n0,
  _LRRis,
  0,
  [_TA, _MRa, _NT],
  [
    [
      0,
      {
        [_hQ]: _tA,
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
export var ListRulesetsResponse = struct(n0, _LRRist, 0, [_Rul, _NT], [() => RulesetItemList, 0]);
export var ListSchedulesRequest = struct(
  n0,
  _LSR,
  0,
  [_JNo, _MRa, _NT],
  [
    [
      0,
      {
        [_hQ]: _jN,
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
export var ListSchedulesResponse = struct(n0, _LSRi, 0, [_Sc, _NT], [() => ScheduleList, 0]);
export var Project = struct(
  n0,
  _Pr,
  0,
  [_AI, _CD, _CB, _DN, _LMD, _LMB, _N, _RN, _RAe, _Sa, _T, _RA, _OB, _OD],
  [0, 4, 0, 0, 4, 0, 0, 0, 0, () => Sample, 128 | 0, 0, 0, 4]
);
export var RulesetItem = struct(
  n0,
  _RIu,
  0,
  [_AI, _CB, _CD, _D, _LMB, _LMD, _N, _RAe, _RC, _T, _TA],
  [0, 0, 4, 0, 0, 4, 0, 0, 1, 128 | 0, 0]
);
export var Schedule = struct(
  n0,
  _Sch,
  0,
  [_AI, _CB, _CD, _JN, _LMB, _LMD, _RAe, _CEr, _T, _N],
  [0, 0, 4, 64 | 0, 0, 4, 0, 0, 128 | 0, 0]
);
export var ProjectList = list(n0, _PL, 0, () => Project);
export var RulesetItemList = list(n0, _RIL, 0, () => RulesetItem);
export var ScheduleList = list(n0, _SLc, 0, () => Schedule);
export var ListProjects = op(
  n0,
  _LP,
  {
    [_h]: ["GET", "/projects", 200],
  },
  () => ListProjectsRequest,
  () => ListProjectsResponse
);
export var ListRulesets = op(
  n0,
  _LRi,
  {
    [_h]: ["GET", "/rulesets", 200],
  },
  () => ListRulesetsRequest,
  () => ListRulesetsResponse
);
export var ListSchedules = op(
  n0,
  _LSi,
  {
    [_h]: ["GET", "/schedules", 200],
  },
  () => ListSchedulesRequest,
  () => ListSchedulesResponse
);

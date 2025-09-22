// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _ar,
  _CAr,
  _cAr,
  _Desc,
  _desc,
  _GCWATG,
  _GCWATGR,
  _GCWATGRe,
  _ht,
  _I,
  _i,
  _Id,
  _jN,
  _MA,
  _mA,
  _N,
  _n,
  _Ta,
  _ta,
  _UCWATG,
  _UCWATGR,
  _UCWATGRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetCloudWatchAlarmTemplateGroupRequest = struct(n0, _GCWATGR, 0, [_Id], [[0, 1]]);
export var GetCloudWatchAlarmTemplateGroupResponse = struct(
  n0,
  _GCWATGRe,
  0,
  [_Ar, _CAr, _Desc, _I, _MA, _N, _Ta],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      5,
      {
        [_jN]: _cAr,
      },
    ],
    [
      0,
      {
        [_jN]: _desc,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      5,
      {
        [_jN]: _mA,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var UpdateCloudWatchAlarmTemplateGroupRequest = struct(
  n0,
  _UCWATGR,
  0,
  [_Desc, _Id],
  [
    [
      0,
      {
        [_jN]: _desc,
      },
    ],
    [0, 1],
  ]
);
export var UpdateCloudWatchAlarmTemplateGroupResponse = struct(
  n0,
  _UCWATGRp,
  0,
  [_Ar, _CAr, _Desc, _I, _MA, _N, _Ta],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      5,
      {
        [_jN]: _cAr,
      },
    ],
    [
      0,
      {
        [_jN]: _desc,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      5,
      {
        [_jN]: _mA,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var GetCloudWatchAlarmTemplateGroup = op(
  n0,
  _GCWATG,
  {
    [_ht]: ["GET", "/prod/cloudwatch-alarm-template-groups/{Identifier}", 200],
  },
  () => GetCloudWatchAlarmTemplateGroupRequest,
  () => GetCloudWatchAlarmTemplateGroupResponse
);
export var UpdateCloudWatchAlarmTemplateGroup = op(
  n0,
  _UCWATG,
  {
    [_ht]: ["PATCH", "/prod/cloudwatch-alarm-template-groups/{Identifier}", 200],
  },
  () => UpdateCloudWatchAlarmTemplateGroupRequest,
  () => UpdateCloudWatchAlarmTemplateGroupResponse
);

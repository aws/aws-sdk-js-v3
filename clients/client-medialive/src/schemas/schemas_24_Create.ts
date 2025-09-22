// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _ar,
  _CAr,
  _cAr,
  _CCWATG,
  _CCWATGR,
  _CCWATGRr,
  _CEBRTG,
  _CEBRTGR,
  _CEBRTGRr,
  _Desc,
  _desc,
  _ht,
  _I,
  _i,
  _iTd,
  _jN,
  _MA,
  _mA,
  _N,
  _n,
  _RIe,
  _rIe,
  _Ta,
  _ta,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateCloudWatchAlarmTemplateGroupRequest = struct(
  n0,
  _CCWATGR,
  0,
  [_Desc, _N, _Ta, _RIe],
  [
    [
      0,
      {
        [_jN]: _desc,
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
    [
      0,
      {
        [_jN]: _rIe,
        [_iTd]: 1,
      },
    ],
  ]
);
export var CreateCloudWatchAlarmTemplateGroupResponse = struct(
  n0,
  _CCWATGRr,
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
export var CreateEventBridgeRuleTemplateGroupRequest = struct(
  n0,
  _CEBRTGR,
  0,
  [_Desc, _N, _Ta, _RIe],
  [
    [
      0,
      {
        [_jN]: _desc,
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
    [
      0,
      {
        [_jN]: _rIe,
        [_iTd]: 1,
      },
    ],
  ]
);
export var CreateEventBridgeRuleTemplateGroupResponse = struct(
  n0,
  _CEBRTGRr,
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
export var CreateCloudWatchAlarmTemplateGroup = op(
  n0,
  _CCWATG,
  {
    [_ht]: ["POST", "/prod/cloudwatch-alarm-template-groups", 201],
  },
  () => CreateCloudWatchAlarmTemplateGroupRequest,
  () => CreateCloudWatchAlarmTemplateGroupResponse
);
export var CreateEventBridgeRuleTemplateGroup = op(
  n0,
  _CEBRTG,
  {
    [_ht]: ["POST", "/prod/eventbridge-rule-template-groups", 201],
  },
  () => CreateEventBridgeRuleTemplateGroupRequest,
  () => CreateEventBridgeRuleTemplateGroupResponse
);

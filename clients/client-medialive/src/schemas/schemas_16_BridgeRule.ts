// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _ar,
  _CAr,
  _cAr,
  _Desc,
  _desc,
  _GEBRTG,
  _GEBRTGR,
  _GEBRTGRe,
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
  _UEBRTG,
  _UEBRTGR,
  _UEBRTGRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetEventBridgeRuleTemplateGroupRequest = struct(n0, _GEBRTGR, 0, [_Id], [[0, 1]]);
export var GetEventBridgeRuleTemplateGroupResponse = struct(
  n0,
  _GEBRTGRe,
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
export var UpdateEventBridgeRuleTemplateGroupRequest = struct(
  n0,
  _UEBRTGR,
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
export var UpdateEventBridgeRuleTemplateGroupResponse = struct(
  n0,
  _UEBRTGRp,
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
export var GetEventBridgeRuleTemplateGroup = op(
  n0,
  _GEBRTG,
  {
    [_ht]: ["GET", "/prod/eventbridge-rule-template-groups/{Identifier}", 200],
  },
  () => GetEventBridgeRuleTemplateGroupRequest,
  () => GetEventBridgeRuleTemplateGroupResponse
);
export var UpdateEventBridgeRuleTemplateGroup = op(
  n0,
  _UEBRTG,
  {
    [_ht]: ["PATCH", "/prod/eventbridge-rule-template-groups/{Identifier}", 200],
  },
  () => UpdateEventBridgeRuleTemplateGroupRequest,
  () => UpdateEventBridgeRuleTemplateGroupResponse
);

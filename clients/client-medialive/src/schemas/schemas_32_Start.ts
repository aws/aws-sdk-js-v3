// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _ar,
  _CAr,
  _cAr,
  _CEBRT,
  _CEBRTR,
  _CEBRTRr,
  _Desc,
  _desc,
  _EBRTT,
  _ET,
  _eT,
  _ETv,
  _eTv,
  _GEBRT,
  _GEBRTR,
  _GEBRTRe,
  _GI,
  _gI,
  _GIr,
  _gIr,
  _ht,
  _I,
  _i,
  _Id,
  _iTd,
  _jN,
  _lOEBRTT,
  _MA,
  _mA,
  _N,
  _n,
  _RIe,
  _rIe,
  _Ta,
  _ta,
  _UEBRT,
  _UEBRTR,
  _UEBRTRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateEventBridgeRuleTemplateRequest = struct(
  n0,
  _CEBRTR,
  0,
  [_Desc, _ET, _ETv, _GIr, _N, _Ta, _RIe],
  [
    [
      0,
      {
        [_jN]: _desc,
      },
    ],
    [
      () => __listOfEventBridgeRuleTemplateTarget,
      {
        [_jN]: _eT,
      },
    ],
    [
      0,
      {
        [_jN]: _eTv,
      },
    ],
    [
      0,
      {
        [_jN]: _gIr,
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
export var CreateEventBridgeRuleTemplateResponse = struct(
  n0,
  _CEBRTRr,
  0,
  [_Ar, _CAr, _Desc, _ET, _ETv, _GI, _I, _MA, _N, _Ta],
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
      () => __listOfEventBridgeRuleTemplateTarget,
      {
        [_jN]: _eT,
      },
    ],
    [
      0,
      {
        [_jN]: _eTv,
      },
    ],
    [
      0,
      {
        [_jN]: _gI,
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
export var EventBridgeRuleTemplateTarget = struct(
  n0,
  _EBRTT,
  0,
  [_Ar],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
  ]
);
export var GetEventBridgeRuleTemplateRequest = struct(n0, _GEBRTR, 0, [_Id], [[0, 1]]);
export var GetEventBridgeRuleTemplateResponse = struct(
  n0,
  _GEBRTRe,
  0,
  [_Ar, _CAr, _Desc, _ET, _ETv, _GI, _I, _MA, _N, _Ta],
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
      () => __listOfEventBridgeRuleTemplateTarget,
      {
        [_jN]: _eT,
      },
    ],
    [
      0,
      {
        [_jN]: _eTv,
      },
    ],
    [
      0,
      {
        [_jN]: _gI,
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
export var UpdateEventBridgeRuleTemplateRequest = struct(
  n0,
  _UEBRTR,
  0,
  [_Desc, _ET, _ETv, _GIr, _Id, _N],
  [
    [
      0,
      {
        [_jN]: _desc,
      },
    ],
    [
      () => __listOfEventBridgeRuleTemplateTarget,
      {
        [_jN]: _eT,
      },
    ],
    [
      0,
      {
        [_jN]: _eTv,
      },
    ],
    [
      0,
      {
        [_jN]: _gIr,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
  ]
);
export var UpdateEventBridgeRuleTemplateResponse = struct(
  n0,
  _UEBRTRp,
  0,
  [_Ar, _CAr, _Desc, _ET, _ETv, _GI, _I, _MA, _N, _Ta],
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
      () => __listOfEventBridgeRuleTemplateTarget,
      {
        [_jN]: _eT,
      },
    ],
    [
      0,
      {
        [_jN]: _eTv,
      },
    ],
    [
      0,
      {
        [_jN]: _gI,
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
export var __listOfEventBridgeRuleTemplateTarget = list(n0, _lOEBRTT, 0, [() => EventBridgeRuleTemplateTarget, 0]);
export var CreateEventBridgeRuleTemplate = op(
  n0,
  _CEBRT,
  {
    [_ht]: ["POST", "/prod/eventbridge-rule-templates", 201],
  },
  () => CreateEventBridgeRuleTemplateRequest,
  () => CreateEventBridgeRuleTemplateResponse
);
export var GetEventBridgeRuleTemplate = op(
  n0,
  _GEBRT,
  {
    [_ht]: ["GET", "/prod/eventbridge-rule-templates/{Identifier}", 200],
  },
  () => GetEventBridgeRuleTemplateRequest,
  () => GetEventBridgeRuleTemplateResponse
);
export var UpdateEventBridgeRuleTemplate = op(
  n0,
  _UEBRT,
  {
    [_ht]: ["PATCH", "/prod/eventbridge-rule-templates/{Identifier}", 200],
  },
  () => UpdateEventBridgeRuleTemplateRequest,
  () => UpdateEventBridgeRuleTemplateResponse
);

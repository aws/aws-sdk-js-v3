// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AP,
  _aPt,
  _at,
  _CTG,
  _CTGR,
  _CTGRr,
  _eV,
  _h,
  _m,
  _pGN,
  _tag,
  _tGA,
  _tGD,
  _tGI,
  _tGNh,
  _TGP,
  _tGP,
  _UTG,
  _UTGR,
  _UTGRp,
  _ve,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AttributePayload = struct(n0, _AP, 0, [_at, _m], [128 | 0, 2]);
export var CreateThingGroupRequest = struct(
  n0,
  _CTGR,
  0,
  [_tGNh, _pGN, _tGP, _tag],
  [[0, 1], 0, () => ThingGroupProperties, () => TagList]
);
export var CreateThingGroupResponse = struct(n0, _CTGRr, 0, [_tGNh, _tGA, _tGI], [0, 0, 0]);
export var ThingGroupProperties = struct(n0, _TGP, 0, [_tGD, _aPt], [0, () => AttributePayload]);
export var UpdateThingGroupRequest = struct(n0, _UTGR, 0, [_tGNh, _tGP, _eV], [[0, 1], () => ThingGroupProperties, 1]);
export var UpdateThingGroupResponse = struct(n0, _UTGRp, 0, [_ve], [1]);
export var Attributes = 128 | 0;

export var CreateThingGroup = op(
  n0,
  _CTG,
  {
    [_h]: ["POST", "/thing-groups/{thingGroupName}", 200],
  },
  () => CreateThingGroupRequest,
  () => CreateThingGroupResponse
);
export var UpdateThingGroup = op(
  n0,
  _UTG,
  {
    [_h]: ["PATCH", "/thing-groups/{thingGroupName}", 200],
  },
  () => UpdateThingGroupRequest,
  () => UpdateThingGroupResponse
);

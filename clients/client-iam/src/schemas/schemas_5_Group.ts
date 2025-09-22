// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _CD,
  _CG,
  _CGR,
  _CGRr,
  _G,
  _GI,
  _gLT,
  _GN,
  _Gro,
  _IT,
  _LGFU,
  _LGFUR,
  _LGFURi,
  _Ma,
  _MI,
  _P,
  _UN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateGroupRequest = struct(n0, _CGR, 0, [_P, _GN], [0, 0]);
export var CreateGroupResponse = struct(n0, _CGRr, 0, [_G], [() => Group]);
export var Group = struct(n0, _G, 0, [_P, _GN, _GI, _A, _CD], [0, 0, 0, 0, 4]);
export var ListGroupsForUserRequest = struct(n0, _LGFUR, 0, [_UN, _Ma, _MI], [0, 0, 1]);
export var ListGroupsForUserResponse = struct(n0, _LGFURi, 0, [_Gro, _IT, _Ma], [() => groupListType, 2, 0]);
export var groupListType = list(n0, _gLT, 0, () => Group);
export var CreateGroup = op(
  n0,
  _CG,
  0,
  () => CreateGroupRequest,
  () => CreateGroupResponse
);
export var ListGroupsForUser = op(
  n0,
  _LGFU,
  0,
  () => ListGroupsForUserRequest,
  () => ListGroupsForUserResponse
);

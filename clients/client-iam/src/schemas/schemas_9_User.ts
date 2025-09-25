// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _CD,
  _CU,
  _CUR,
  _CURr,
  _G,
  _GG,
  _GGR,
  _GGRe,
  _GN,
  _GU,
  _GUR,
  _GURe,
  _IT,
  _LU,
  _LUR,
  _LURi,
  _Ma,
  _MI,
  _P,
  _PB,
  _PLU,
  _PPa,
  _T,
  _UI,
  _uLT,
  _UN,
  _Us,
  _Use,
  AttachedPermissionsBoundary,
  n0,
  tagListType,
} from "./schemas_0";
import { Group } from "./schemas_5_Group";

/* eslint no-var: 0 */

export var CreateUserRequest = struct(n0, _CUR, 0, [_P, _UN, _PB, _T], [0, 0, 0, () => tagListType]);
export var CreateUserResponse = struct(n0, _CURr, 0, [_Us], [() => User]);
export var GetGroupRequest = struct(n0, _GGR, 0, [_GN, _Ma, _MI], [0, 0, 1]);
export var GetGroupResponse = struct(n0, _GGRe, 0, [_G, _Use, _IT, _Ma], [() => Group, () => userListType, 2, 0]);
export var GetUserRequest = struct(n0, _GUR, 0, [_UN], [0]);
export var GetUserResponse = struct(n0, _GURe, 0, [_Us], [() => User]);
export var ListUsersRequest = struct(n0, _LUR, 0, [_PPa, _Ma, _MI], [0, 0, 1]);
export var ListUsersResponse = struct(n0, _LURi, 0, [_Use, _IT, _Ma], [() => userListType, 2, 0]);
export var User = struct(
  n0,
  _Us,
  0,
  [_P, _UN, _UI, _A, _CD, _PLU, _PB, _T],
  [0, 0, 0, 0, 4, 4, () => AttachedPermissionsBoundary, () => tagListType]
);
export var userListType = list(n0, _uLT, 0, () => User);
export var CreateUser = op(
  n0,
  _CU,
  0,
  () => CreateUserRequest,
  () => CreateUserResponse
);
export var GetGroup = op(
  n0,
  _GG,
  0,
  () => GetGroupRequest,
  () => GetGroupResponse
);
export var GetUser = op(
  n0,
  _GU,
  0,
  () => GetUserRequest,
  () => GetUserResponse
);
export var ListUsers = op(
  n0,
  _LU,
  0,
  () => ListUsersRequest,
  () => ListUsersResponse
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aIp,
  _cT,
  _CU,
  _CUR,
  _CURr,
  _dSI,
  _GU,
  _GUR,
  _GURe,
  _ht,
  _iI,
  _UA,
  _uAA,
  _uAD,
  _UAs,
  _uAs,
  _uATD,
  _uATU,
  _uAU,
  _uI,
  _UU,
  _UUR,
  _UURp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateUserRequest = struct(n0, _CUR, 0, [_aIp, _uI, _uAs, _cT], [[0, 1], 0, () => UserAliases, [0, 4]]);
export var CreateUserResponse = struct(n0, _CURr, 0, [], []);
export var GetUserRequest = struct(
  n0,
  _GUR,
  0,
  [_aIp, _uI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetUserResponse = struct(n0, _GURe, 0, [_uAs], [() => UserAliases]);
export var UpdateUserRequest = struct(
  n0,
  _UUR,
  0,
  [_aIp, _uI, _uATU, _uATD],
  [[0, 1], [0, 1], () => UserAliases, () => UserAliases]
);
export var UpdateUserResponse = struct(
  n0,
  _UURp,
  0,
  [_uAA, _uAU, _uAD],
  [() => UserAliases, () => UserAliases, () => UserAliases]
);
export var UserAlias = struct(n0, _UA, 0, [_iI, _dSI, _uI], [0, 0, 0]);
export var UserAliases = list(n0, _UAs, 0, () => UserAlias);
export var CreateUser = op(
  n0,
  _CU,
  {
    [_ht]: ["POST", "/applications/{applicationId}/users", 200],
  },
  () => CreateUserRequest,
  () => CreateUserResponse
);
export var GetUser = op(
  n0,
  _GU,
  {
    [_ht]: ["GET", "/applications/{applicationId}/users/{userId}", 200],
  },
  () => GetUserRequest,
  () => GetUserResponse
);
export var UpdateUser = op(
  n0,
  _UU,
  {
    [_ht]: ["PUT", "/applications/{applicationId}/users/{userId}", 200],
  },
  () => UpdateUserRequest,
  () => UpdateUserResponse
);

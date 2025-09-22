// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _aA,
  _aAPA,
  _AUTPG,
  _AUTPGR,
  _AUTPGRs,
  _cT,
  _cTr,
  _CU,
  _CUR,
  _CURr,
  _DU,
  _DUFPG,
  _DUFPGR,
  _DUFPGRi,
  _DUR,
  _DURi,
  _eA,
  _EU,
  _EUR,
  _EURn,
  _FN,
  _fN,
  _GU,
  _GUR,
  _GURe,
  _h,
  _hQ,
  _iT,
  _lDT,
  _lET,
  _lLT,
  _lMT,
  _LN,
  _lN,
  _LPGBU,
  _LPGBUR,
  _LPGBURi,
  _LU,
  _LUBPG,
  _LUBPGR,
  _LUBPGRi,
  _LUR,
  _LURi,
  _mR,
  _mS,
  _n,
  _nT,
  _P,
  _PGBU,
  _PGBUL,
  _pGe,
  _pGI,
  _RUP,
  _RUPR,
  _RUPRe,
  _s,
  _sC,
  _t,
  _tP,
  _U,
  _u,
  _UBPG,
  _UBPGL,
  _uI,
  _UL,
  _UU,
  _UUR,
  _UURp,
  n0,
} from "./schemas_0";
import { PermissionGroupName } from "./schemas_8_Permission";
import { Email } from "./schemas_10_User";

/* eslint no-var: 0 */

export var FirstName = sim(n0, _FN, 0, 8);
export var LastName = sim(n0, _LN, 0, 8);
export var Password = sim(n0, _P, 0, 8);
export var AssociateUserToPermissionGroupRequest = struct(
  n0,
  _AUTPGR,
  0,
  [_pGI, _uI, _cT],
  [
    [0, 1],
    [0, 1],
    [0, 4],
  ]
);
export var AssociateUserToPermissionGroupResponse = struct(n0, _AUTPGRs, 0, [_sC], [[1, 32]]);
export var CreateUserRequest = struct(
  n0,
  _CUR,
  0,
  [_eA, _t, _fN, _lN, _aA, _aAPA, _cT],
  [[() => Email, 0], 0, [() => FirstName, 0], [() => LastName, 0], 0, 0, [0, 4]]
);
export var CreateUserResponse = struct(n0, _CURr, 0, [_uI], [0]);
export var DisableUserRequest = struct(
  n0,
  _DUR,
  0,
  [_uI, _cT],
  [
    [0, 1],
    [0, 4],
  ]
);
export var DisableUserResponse = struct(n0, _DURi, 0, [_uI], [0]);
export var DisassociateUserFromPermissionGroupRequest = struct(
  n0,
  _DUFPGR,
  0,
  [_pGI, _uI, _cT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var DisassociateUserFromPermissionGroupResponse = struct(n0, _DUFPGRi, 0, [_sC], [[1, 32]]);
export var EnableUserRequest = struct(
  n0,
  _EUR,
  0,
  [_uI, _cT],
  [
    [0, 1],
    [0, 4],
  ]
);
export var EnableUserResponse = struct(n0, _EURn, 0, [_uI], [0]);
export var GetUserRequest = struct(n0, _GUR, 0, [_uI], [[0, 1]]);
export var GetUserResponse = struct(
  n0,
  _GURe,
  0,
  [_uI, _s, _fN, _lN, _eA, _t, _aA, _aAPA, _cTr, _lET, _lDT, _lMT, _lLT],
  [0, 0, [() => FirstName, 0], [() => LastName, 0], [() => Email, 0], 0, 0, 0, 1, 1, 1, 1, 1]
);
export var ListPermissionGroupsByUserRequest = struct(
  n0,
  _LPGBUR,
  0,
  [_uI, _nT, _mR],
  [
    [0, 1],
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
export var ListPermissionGroupsByUserResponse = struct(
  n0,
  _LPGBURi,
  0,
  [_pGe, _nT],
  [[() => PermissionGroupByUserList, 0], 0]
);
export var ListUsersByPermissionGroupRequest = struct(
  n0,
  _LUBPGR,
  0,
  [_pGI, _nT, _mR],
  [
    [0, 1],
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
export var ListUsersByPermissionGroupResponse = struct(
  n0,
  _LUBPGRi,
  0,
  [_u, _nT],
  [[() => UserByPermissionGroupList, 0], 0]
);
export var ListUsersRequest = struct(
  n0,
  _LUR,
  0,
  [_nT, _mR],
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
export var ListUsersResponse = struct(n0, _LURi, 0, [_u, _nT], [[() => UserList, 0], 0]);
export var PermissionGroupByUser = struct(n0, _PGBU, 0, [_pGI, _n, _mS], [0, [() => PermissionGroupName, 0], 0]);
export var ResetUserPasswordRequest = struct(
  n0,
  _RUPR,
  0,
  [_uI, _cT],
  [
    [0, 1],
    [0, 4],
  ]
);
export var ResetUserPasswordResponse = struct(n0, _RUPRe, 0, [_uI, _tP], [0, [() => Password, 0]]);
export var UpdateUserRequest = struct(
  n0,
  _UUR,
  0,
  [_uI, _t, _fN, _lN, _aA, _aAPA, _cT],
  [[0, 1], 0, [() => FirstName, 0], [() => LastName, 0], 0, 0, [0, 4]]
);
export var UpdateUserResponse = struct(n0, _UURp, 0, [_uI], [0]);
export var User = struct(
  n0,
  _U,
  0,
  [_uI, _s, _fN, _lN, _eA, _t, _aA, _aAPA, _cTr, _lET, _lDT, _lMT, _lLT],
  [0, 0, [() => FirstName, 0], [() => LastName, 0], [() => Email, 0], 0, 0, 0, 1, 1, 1, 1, 1]
);
export var UserByPermissionGroup = struct(
  n0,
  _UBPG,
  0,
  [_uI, _s, _fN, _lN, _eA, _t, _aA, _aAPA, _mS],
  [0, 0, [() => FirstName, 0], [() => LastName, 0], [() => Email, 0], 0, 0, 0, 0]
);
export var PermissionGroupByUserList = list(n0, _PGBUL, 0, [() => PermissionGroupByUser, 0]);
export var UserByPermissionGroupList = list(n0, _UBPGL, 0, [() => UserByPermissionGroup, 0]);
export var UserList = list(n0, _UL, 0, [() => User, 0]);
export var AssociateUserToPermissionGroup = op(
  n0,
  _AUTPG,
  {
    [_h]: ["POST", "/permission-group/{permissionGroupId}/users/{userId}", 200],
  },
  () => AssociateUserToPermissionGroupRequest,
  () => AssociateUserToPermissionGroupResponse
);
export var CreateUser = op(
  n0,
  _CU,
  {
    [_h]: ["POST", "/user", 200],
  },
  () => CreateUserRequest,
  () => CreateUserResponse
);
export var DisableUser = op(
  n0,
  _DU,
  {
    [_h]: ["POST", "/user/{userId}/disable", 200],
  },
  () => DisableUserRequest,
  () => DisableUserResponse
);
export var DisassociateUserFromPermissionGroup = op(
  n0,
  _DUFPG,
  {
    [_h]: ["DELETE", "/permission-group/{permissionGroupId}/users/{userId}", 200],
  },
  () => DisassociateUserFromPermissionGroupRequest,
  () => DisassociateUserFromPermissionGroupResponse
);
export var EnableUser = op(
  n0,
  _EU,
  {
    [_h]: ["POST", "/user/{userId}/enable", 200],
  },
  () => EnableUserRequest,
  () => EnableUserResponse
);
export var GetUser = op(
  n0,
  _GU,
  {
    [_h]: ["GET", "/user/{userId}", 200],
  },
  () => GetUserRequest,
  () => GetUserResponse
);
export var ListPermissionGroupsByUser = op(
  n0,
  _LPGBU,
  {
    [_h]: ["GET", "/user/{userId}/permission-groups", 200],
  },
  () => ListPermissionGroupsByUserRequest,
  () => ListPermissionGroupsByUserResponse
);
export var ListUsers = op(
  n0,
  _LU,
  {
    [_h]: ["GET", "/user", 200],
  },
  () => ListUsersRequest,
  () => ListUsersResponse
);
export var ListUsersByPermissionGroup = op(
  n0,
  _LUBPG,
  {
    [_h]: ["GET", "/permission-group/{permissionGroupId}/users", 200],
  },
  () => ListUsersByPermissionGroupRequest,
  () => ListUsersByPermissionGroupResponse
);
export var ResetUserPassword = op(
  n0,
  _RUP,
  {
    [_h]: ["POST", "/user/{userId}/password", 200],
  },
  () => ResetUserPasswordRequest,
  () => ResetUserPasswordResponse
);
export var UpdateUser = op(
  n0,
  _UU,
  {
    [_h]: ["PUT", "/user/{userId}", 200],
  },
  () => UpdateUserRequest,
  () => UpdateUserResponse
);

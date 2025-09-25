// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidUserStateFault as __InvalidUserStateFault } from "../models/index";
import {
  _A,
  _ACLNa,
  _AM,
  _aQE,
  _ARN,
  _AS,
  _c,
  _DU,
  _DUe,
  _DURe,
  _DURel,
  _DURes,
  _DUResc,
  _e,
  _Fi,
  _Fil,
  _FL,
  _hE,
  _IUSF,
  _m,
  _MEV,
  _MR,
  _N,
  _NTex,
  _P,
  _PCa,
  _S,
  _T,
  _U,
  _UL,
  _UNs,
  _Us,
  _UU,
  _UUR,
  _UURp,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Authentication = struct(n0, _A, 0, [_T, _PCa], [0, 1]);
export var AuthenticationMode = struct(n0, _AM, 0, [_T, _P], [0, 64 | 0]);
export var DeleteUserRequest = struct(n0, _DURe, 0, [_UNs], [0]);
export var DeleteUserResponse = struct(n0, _DURel, 0, [_U], [() => User]);
export var DescribeUsersRequest = struct(n0, _DURes, 0, [_UNs, _Fi, _MR, _NTex], [0, () => FilterList, 1, 0]);
export var DescribeUsersResponse = struct(n0, _DUResc, 0, [_Us, _NTex], [() => UserList, 0]);
export var Filter = struct(n0, _Fil, 0, [_N, _V], [0, 64 | 0]);
export var InvalidUserStateFault = error(
  n0,
  _IUSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidUserState`, 400],
  },
  [_m],
  [0],

  __InvalidUserStateFault
);
export var UpdateUserRequest = struct(n0, _UUR, 0, [_UNs, _AM, _AS], [0, () => AuthenticationMode, 0]);
export var UpdateUserResponse = struct(n0, _UURp, 0, [_U], [() => User]);
export var User = struct(
  n0,
  _U,
  0,
  [_N, _S, _AS, _ACLNa, _MEV, _A, _ARN],
  [0, 0, 0, 64 | 0, 0, () => Authentication, 0]
);
export var ACLNameList = 64 | 0;

export var FilterList = list(n0, _FL, 0, () => Filter);
export var FilterValueList = 64 | 0;

export var PasswordListInput = 64 | 0;

export var UserList = list(n0, _UL, 0, () => User);
export var DeleteUser = op(
  n0,
  _DU,
  0,
  () => DeleteUserRequest,
  () => DeleteUserResponse
);
export var DescribeUsers = op(
  n0,
  _DUe,
  0,
  () => DescribeUsersRequest,
  () => DescribeUsersResponse
);
export var UpdateUser = op(
  n0,
  _UU,
  0,
  () => UpdateUserRequest,
  () => UpdateUserResponse
);

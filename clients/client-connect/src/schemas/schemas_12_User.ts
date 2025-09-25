// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _AFN,
  _ALN,
  _CU,
  _CUR,
  _CURr,
  _DUe,
  _DUI,
  _DURe,
  _DURes,
  _E,
  _FNir,
  _h,
  _HGI,
  _I,
  _II,
  _IId,
  _LMR,
  _LMT,
  _LN,
  _Mob,
  _P,
  _PCh,
  _RPI,
  _SEe,
  _SPIe,
  _Ta,
  _U,
  _UA,
  _UI,
  _UII,
  _Us,
  _UUII,
  _UUIIR,
  n0,
  Unit,
} from "./schemas_0";
import { UserPhoneConfig } from "./schemas_78_User";

/* eslint no-var: 0 */

export var AgentFirstName = sim(n0, _AFN, 0, 8);
export var AgentLastName = sim(n0, _ALN, 0, 8);
export var Email = sim(n0, _E, 0, 8);
export var Password = sim(n0, _P, 0, 8);
export var CreateUserRequest = struct(
  n0,
  _CUR,
  0,
  [_U, _P, _IId, _PCh, _DUI, _SPIe, _RPI, _HGI, _II, _Ta],
  [0, [() => Password, 0], [() => UserIdentityInfo, 0], () => UserPhoneConfig, 0, 64 | 0, 0, 0, [0, 1], 128 | 0]
);
export var CreateUserResponse = struct(n0, _CURr, 0, [_UI, _UA], [0, 0]);
export var DescribeUserRequest = struct(
  n0,
  _DURe,
  0,
  [_UI, _II],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeUserResponse = struct(n0, _DURes, 0, [_Us], [[() => User, 0]]);
export var UpdateUserIdentityInfoRequest = struct(
  n0,
  _UUIIR,
  0,
  [_IId, _UI, _II],
  [
    [() => UserIdentityInfo, 0],
    [0, 1],
    [0, 1],
  ]
);
export var User = struct(
  n0,
  _Us,
  0,
  [_I, _A, _U, _IId, _PCh, _DUI, _SPIe, _RPI, _HGI, _Ta, _LMT, _LMR],
  [0, 0, 0, [() => UserIdentityInfo, 0], () => UserPhoneConfig, 0, 64 | 0, 0, 0, 128 | 0, 4, 0]
);
export var UserIdentityInfo = struct(
  n0,
  _UII,
  0,
  [_FNir, _LN, _E, _SEe, _Mob],
  [[() => AgentFirstName, 0], [() => AgentLastName, 0], [() => Email, 0], [() => Email, 0], 0]
);
export var CreateUser = op(
  n0,
  _CU,
  {
    [_h]: ["PUT", "/users/{InstanceId}", 200],
  },
  () => CreateUserRequest,
  () => CreateUserResponse
);
export var DescribeUser = op(
  n0,
  _DUe,
  {
    [_h]: ["GET", "/users/{InstanceId}/{UserId}", 200],
  },
  () => DescribeUserRequest,
  () => DescribeUserResponse
);
export var UpdateUserIdentityInfo = op(
  n0,
  _UUII,
  {
    [_h]: ["POST", "/users/{InstanceId}/{UserId}/identity-info", 200],
  },
  () => UpdateUserIdentityInfoRequest,
  () => Unit
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AAI,
  _Ac,
  _AFBM,
  _AFBRA,
  _AI,
  _AL,
  _AS,
  _AT,
  _BUUa,
  _BUURat,
  _BUURatc,
  _CA,
  _CAR,
  _CARr,
  _CT,
  _CU,
  _CUR,
  _CURr,
  _DL,
  _DN,
  _Em,
  _GA,
  _GAR,
  _GARe,
  _GU,
  _GUR,
  _GURe,
  _h,
  _hQ,
  _IAFBE,
  _IO,
  _LA,
  _LAR,
  _LARi,
  _LT,
  _LU,
  _LUR,
  _LURi,
  _MR,
  _mr,
  _N,
  _n,
  _NT,
  _nt,
  _PE,
  _PPIN,
  _PPN,
  _RO,
  _RPPIN,
  _RPPINR,
  _RPPINRe,
  _SDG,
  _SL,
  _U,
  _UA,
  _UAR,
  _UARp,
  _UE,
  _ue,
  _UEs,
  _UI,
  _UIS,
  _UL,
  _URS,
  _Us,
  _Use,
  _ut,
  _UTs,
  _UU,
  _UUR,
  _UURI,
  _UURIL,
  _UURIp,
  _UURp,
  n0,
  SensitiveString,
} from "./schemas_0";
import { UserErrorList } from "./schemas_17_User";
import { SigninDelegateGroupList } from "./schemas_26_Account";
import { EmailAddress } from "./schemas_27_User";

/* eslint no-var: 0 */

export var Account = struct(
  n0,
  _A,
  0,
  [_AAI, _AI, _N, _AT, _CT, _DL, _SL, _AS, _SDG],
  [0, 0, 0, 0, 5, 0, 64 | 0, 0, () => SigninDelegateGroupList]
);
export var AlexaForBusinessMetadata = struct(n0, _AFBM, 0, [_IAFBE, _AFBRA], [2, [() => SensitiveString, 0]]);
export var BatchUpdateUserRequest = struct(
  n0,
  _BUURat,
  0,
  [_AI, _UURI],
  [
    [0, 1],
    [() => UpdateUserRequestItemList, 0],
  ]
);
export var BatchUpdateUserResponse = struct(n0, _BUURatc, 0, [_UE], [() => UserErrorList]);
export var CreateAccountRequest = struct(n0, _CAR, 0, [_N], [0]);
export var CreateAccountResponse = struct(n0, _CARr, 0, [_A], [() => Account]);
export var CreateUserRequest = struct(n0, _CUR, 0, [_AI, _U, _Em, _UTs], [[0, 1], 0, [() => EmailAddress, 0], 0]);
export var CreateUserResponse = struct(n0, _CURr, 0, [_Us], [[() => User, 0]]);
export var GetAccountRequest = struct(n0, _GAR, 0, [_AI], [[0, 1]]);
export var GetAccountResponse = struct(n0, _GARe, 0, [_A], [() => Account]);
export var GetUserRequest = struct(
  n0,
  _GUR,
  0,
  [_AI, _UI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetUserResponse = struct(n0, _GURe, 0, [_Us], [[() => User, 0]]);
export var ListAccountsRequest = struct(
  n0,
  _LAR,
  0,
  [_N, _UEs, _NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    [
      () => EmailAddress,
      {
        [_hQ]: _ue,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
  ]
);
export var ListAccountsResponse = struct(n0, _LARi, 0, [_Ac, _NT], [() => AccountList, 0]);
export var ListUsersRequest = struct(
  n0,
  _LUR,
  0,
  [_AI, _UEs, _UTs, _MR, _NT],
  [
    [0, 1],
    [
      () => EmailAddress,
      {
        [_hQ]: _ue,
      },
    ],
    [
      0,
      {
        [_hQ]: _ut,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListUsersResponse = struct(n0, _LURi, 0, [_Use, _NT], [[() => UserList, 0], 0]);
export var ResetPersonalPINRequest = struct(
  n0,
  _RPPINR,
  0,
  [_AI, _UI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var ResetPersonalPINResponse = struct(n0, _RPPINRe, 0, [_Us], [[() => User, 0]]);
export var UpdateAccountRequest = struct(n0, _UAR, 0, [_AI, _N, _DL], [[0, 1], 0, 0]);
export var UpdateAccountResponse = struct(n0, _UARp, 0, [_A], [() => Account]);
export var UpdateUserRequest = struct(
  n0,
  _UUR,
  0,
  [_AI, _UI, _LT, _UTs, _AFBM],
  [[0, 1], [0, 1], 0, 0, [() => AlexaForBusinessMetadata, 0]]
);
export var UpdateUserRequestItem = struct(
  n0,
  _UURIp,
  0,
  [_UI, _LT, _UTs, _AFBM],
  [0, 0, 0, [() => AlexaForBusinessMetadata, 0]]
);
export var UpdateUserResponse = struct(n0, _UURp, 0, [_Us], [[() => User, 0]]);
export var User = struct(
  n0,
  _Us,
  0,
  [_UI, _AI, _PE, _PPN, _DN, _LT, _UTs, _URS, _UIS, _RO, _IO, _AFBM, _PPIN],
  [
    0,
    0,
    [() => EmailAddress, 0],
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
    0,
    0,
    0,
    0,
    5,
    5,
    [() => AlexaForBusinessMetadata, 0],
    0,
  ]
);
export var AccountList = list(n0, _AL, 0, () => Account);
export var LicenseList = 64 | 0;

export var UpdateUserRequestItemList = list(n0, _UURIL, 0, [() => UpdateUserRequestItem, 0]);
export var UserList = list(n0, _UL, 0, [() => User, 0]);
export var BatchUpdateUser = op(
  n0,
  _BUUa,
  {
    [_h]: ["POST", "/accounts/{AccountId}/users", 200],
  },
  () => BatchUpdateUserRequest,
  () => BatchUpdateUserResponse
);
export var CreateAccount = op(
  n0,
  _CA,
  {
    [_h]: ["POST", "/accounts", 201],
  },
  () => CreateAccountRequest,
  () => CreateAccountResponse
);
export var CreateUser = op(
  n0,
  _CU,
  {
    [_h]: ["POST", "/accounts/{AccountId}/users?operation=create", 201],
  },
  () => CreateUserRequest,
  () => CreateUserResponse
);
export var GetAccount = op(
  n0,
  _GA,
  {
    [_h]: ["GET", "/accounts/{AccountId}", 200],
  },
  () => GetAccountRequest,
  () => GetAccountResponse
);
export var GetUser = op(
  n0,
  _GU,
  {
    [_h]: ["GET", "/accounts/{AccountId}/users/{UserId}", 200],
  },
  () => GetUserRequest,
  () => GetUserResponse
);
export var ListAccounts = op(
  n0,
  _LA,
  {
    [_h]: ["GET", "/accounts", 200],
  },
  () => ListAccountsRequest,
  () => ListAccountsResponse
);
export var ListUsers = op(
  n0,
  _LU,
  {
    [_h]: ["GET", "/accounts/{AccountId}/users", 200],
  },
  () => ListUsersRequest,
  () => ListUsersResponse
);
export var ResetPersonalPIN = op(
  n0,
  _RPPIN,
  {
    [_h]: ["POST", "/accounts/{AccountId}/users/{UserId}?operation=reset-personal-pin", 200],
  },
  () => ResetPersonalPINRequest,
  () => ResetPersonalPINResponse
);
export var UpdateAccount = op(
  n0,
  _UA,
  {
    [_h]: ["POST", "/accounts/{AccountId}", 200],
  },
  () => UpdateAccountRequest,
  () => UpdateAccountResponse
);
export var UpdateUser = op(
  n0,
  _UU,
  {
    [_h]: ["POST", "/accounts/{AccountId}/users/{UserId}", 200],
  },
  () => UpdateUserRequest,
  () => UpdateUserResponse
);

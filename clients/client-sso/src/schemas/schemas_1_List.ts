// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  InvalidRequestException as __InvalidRequestException,
  ResourceNotFoundException as __ResourceNotFoundException,
  TooManyRequestsException as __TooManyRequestsException,
  UnauthorizedException as __UnauthorizedException,
} from "../models/index";
import {
  _AI,
  _aI,
  _ai,
  _aKI,
  _aL,
  _ALT,
  _aN,
  _aT,
  _ATT,
  _c,
  _e,
  _eA,
  _ex,
  _GRC,
  _GRCR,
  _GRCRe,
  _h,
  _hE,
  _hH,
  _hQ,
  _IRE,
  _L,
  _LA,
  _LAR,
  _LARi,
  _LARis,
  _LARR,
  _LARRi,
  _LR,
  _m,
  _mR,
  _mr,
  _nT,
  _nt,
  _RC,
  _rC,
  _RI,
  _rL,
  _RLT,
  _rN,
  _rn,
  _RNFE,
  _sAK,
  _SAKT,
  _sT,
  _STT,
  _TMRE,
  _UE,
  _xasbt,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessTokenType = sim(n0, _ATT, 0, 8);
export var SecretAccessKeyType = sim(n0, _SAKT, 0, 8);
export var SessionTokenType = sim(n0, _STT, 0, 8);
export var AccountInfo = struct(n0, _AI, 0, [_aI, _aN, _eA], [0, 0, 0]);
export var GetRoleCredentialsRequest = struct(
  n0,
  _GRCR,
  0,
  [_rN, _aI, _aT],
  [
    [
      0,
      {
        [_hQ]: _rn,
      },
    ],
    [
      0,
      {
        [_hQ]: _ai,
      },
    ],
    [
      () => AccessTokenType,
      {
        [_hH]: _xasbt,
      },
    ],
  ]
);
export var GetRoleCredentialsResponse = struct(n0, _GRCRe, 0, [_rC], [[() => RoleCredentials, 0]]);
export var InvalidRequestException = error(
  n0,
  _IRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidRequestException
);
export var ListAccountRolesRequest = struct(
  n0,
  _LARR,
  0,
  [_nT, _mR, _aT, _aI],
  [
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
    [
      () => AccessTokenType,
      {
        [_hH]: _xasbt,
      },
    ],
    [
      0,
      {
        [_hQ]: _ai,
      },
    ],
  ]
);
export var ListAccountRolesResponse = struct(n0, _LARRi, 0, [_nT, _rL], [0, () => RoleListType]);
export var ListAccountsRequest = struct(
  n0,
  _LAR,
  0,
  [_nT, _mR, _aT],
  [
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
    [
      () => AccessTokenType,
      {
        [_hH]: _xasbt,
      },
    ],
  ]
);
export var ListAccountsResponse = struct(n0, _LARi, 0, [_nT, _aL], [0, () => AccountListType]);
export var LogoutRequest = struct(
  n0,
  _LR,
  0,
  [_aT],
  [
    [
      () => AccessTokenType,
      {
        [_hH]: _xasbt,
      },
    ],
  ]
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var RoleCredentials = struct(
  n0,
  _RC,
  0,
  [_aKI, _sAK, _sT, _ex],
  [0, [() => SecretAccessKeyType, 0], [() => SessionTokenType, 0], 1]
);
export var RoleInfo = struct(n0, _RI, 0, [_rN, _aI], [0, 0]);
export var TooManyRequestsException = error(
  n0,
  _TMRE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],

  __TooManyRequestsException
);
export var UnauthorizedException = error(
  n0,
  _UE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_m],
  [0],

  __UnauthorizedException
);
export var AccountListType = list(n0, _ALT, 0, () => AccountInfo);
export var RoleListType = list(n0, _RLT, 0, () => RoleInfo);
export var GetRoleCredentials = op(
  n0,
  _GRC,
  {
    [_h]: ["GET", "/federation/credentials", 200],
  },
  () => GetRoleCredentialsRequest,
  () => GetRoleCredentialsResponse
);
export var ListAccountRoles = op(
  n0,
  _LARis,
  {
    [_h]: ["GET", "/assignment/roles", 200],
  },
  () => ListAccountRolesRequest,
  () => ListAccountRolesResponse
);
export var ListAccounts = op(
  n0,
  _LA,
  {
    [_h]: ["GET", "/assignment/accounts", 200],
  },
  () => ListAccountsRequest,
  () => ListAccountsResponse
);
export var Logout = op(
  n0,
  _L,
  {
    [_h]: ["POST", "/logout", 200],
  },
  () => LogoutRequest,
  () => Unit
);

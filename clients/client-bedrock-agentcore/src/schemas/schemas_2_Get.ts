// smithy-typescript generated code
import { error, map, op, sim, struct } from "@smithy/core/schema";

import { UnauthorizedException as __UnauthorizedException } from "../models/index";
import {
  _aK,
  _AKT,
  _aT,
  _ATT,
  _aU,
  _c,
  _cP,
  _CRPT,
  _CRVT,
  _e,
  _fA,
  _GRAK,
  _GRAKR,
  _GRAKRe,
  _GROT,
  _GROTR,
  _GROTRe,
  _GWAT,
  _GWATFJWT,
  _GWATFJWTR,
  _GWATFJWTRe,
  _GWATFUI,
  _GWATFUIR,
  _GWATFUIRe,
  _GWATR,
  _GWATRe,
  _hE,
  _ht,
  _m,
  _oF,
  _rCPN,
  _rORU,
  _sc,
  _UE,
  _uI,
  _uT,
  _UTT,
  _wAT,
  _wIT,
  _WITT,
  _wN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessTokenType = sim(n0, _ATT, 0, 8);
export var ApiKeyType = sim(n0, _AKT, 0, 8);
export var CustomRequestValueType = sim(n0, _CRVT, 0, 8);
export var UserTokenType = sim(n0, _UTT, 0, 8);
export var WorkloadIdentityTokenType = sim(n0, _WITT, 0, 8);
export var GetResourceApiKeyRequest = struct(n0, _GRAKR, 0, [_wIT, _rCPN], [[() => WorkloadIdentityTokenType, 0], 0]);
export var GetResourceApiKeyResponse = struct(n0, _GRAKRe, 0, [_aK], [[() => ApiKeyType, 0]]);
export var GetResourceOauth2TokenRequest = struct(
  n0,
  _GROTR,
  0,
  [_wIT, _rCPN, _sc, _oF, _rORU, _fA, _cP],
  [[() => WorkloadIdentityTokenType, 0], 0, 64 | 0, 0, 0, 2, [() => CustomRequestParametersType, 0]]
);
export var GetResourceOauth2TokenResponse = struct(n0, _GROTRe, 0, [_aU, _aT], [0, [() => AccessTokenType, 0]]);
export var GetWorkloadAccessTokenForJWTRequest = struct(n0, _GWATFJWTR, 0, [_wN, _uT], [0, [() => UserTokenType, 0]]);
export var GetWorkloadAccessTokenForJWTResponse = struct(
  n0,
  _GWATFJWTRe,
  0,
  [_wAT],
  [[() => WorkloadIdentityTokenType, 0]]
);
export var GetWorkloadAccessTokenForUserIdRequest = struct(n0, _GWATFUIR, 0, [_wN, _uI], [0, 0]);
export var GetWorkloadAccessTokenForUserIdResponse = struct(
  n0,
  _GWATFUIRe,
  0,
  [_wAT],
  [[() => WorkloadIdentityTokenType, 0]]
);
export var GetWorkloadAccessTokenRequest = struct(n0, _GWATR, 0, [_wN], [0]);
export var GetWorkloadAccessTokenResponse = struct(n0, _GWATRe, 0, [_wAT], [[() => WorkloadIdentityTokenType, 0]]);
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
export var ScopesListType = 64 | 0;

export var CustomRequestParametersType = map(n0, _CRPT, 0, [0, 0], [() => CustomRequestValueType, 0]);
export var GetResourceApiKey = op(
  n0,
  _GRAK,
  {
    [_ht]: ["POST", "/identities/api-key", 200],
  },
  () => GetResourceApiKeyRequest,
  () => GetResourceApiKeyResponse
);
export var GetResourceOauth2Token = op(
  n0,
  _GROT,
  {
    [_ht]: ["POST", "/identities/oauth2/token", 200],
  },
  () => GetResourceOauth2TokenRequest,
  () => GetResourceOauth2TokenResponse
);
export var GetWorkloadAccessToken = op(
  n0,
  _GWAT,
  {
    [_ht]: ["POST", "/identities/GetWorkloadAccessToken", 200],
  },
  () => GetWorkloadAccessTokenRequest,
  () => GetWorkloadAccessTokenResponse
);
export var GetWorkloadAccessTokenForJWT = op(
  n0,
  _GWATFJWT,
  {
    [_ht]: ["POST", "/identities/GetWorkloadAccessTokenForJWT", 200],
  },
  () => GetWorkloadAccessTokenForJWTRequest,
  () => GetWorkloadAccessTokenForJWTResponse
);
export var GetWorkloadAccessTokenForUserId = op(
  n0,
  _GWATFUI,
  {
    [_ht]: ["POST", "/identities/GetWorkloadAccessTokenForUserId", 200],
  },
  () => GetWorkloadAccessTokenForUserIdRequest,
  () => GetWorkloadAccessTokenForUserIdResponse
);

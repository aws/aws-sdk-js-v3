export const _ADE = "AccessDeniedException";
export const _APE = "AuthorizationPendingException";
export const _AT = "AccessToken";
export const _CS = "ClientSecret";
export const _CT = "CreateToken";
export const _CTR = "CreateTokenRequest";
export const _CTRr = "CreateTokenResponse";
export const _CV = "CodeVerifier";
export const _ETE = "ExpiredTokenException";
export const _ICE = "InvalidClientException";
export const _IGE = "InvalidGrantException";
export const _IRE = "InvalidRequestException";
export const _ISE = "InternalServerException";
export const _ISEn = "InvalidScopeException";
export const _IT = "IdToken";
export const _RT = "RefreshToken";
export const _SDE = "SlowDownException";
export const _UCE = "UnauthorizedClientException";
export const _UGTE = "UnsupportedGrantTypeException";
export const _aT = "accessToken";
export const _c = "client";
export const _cI = "clientId";
export const _cS = "clientSecret";
export const _cV = "codeVerifier";
export const _co = "code";
export const _dC = "deviceCode";
export const _e = "error";
export const _eI = "expiresIn";
export const _ed = "error_description";
export const _gT = "grantType";
export const _h = "http";
export const _hE = "httpError";
export const _iT = "idToken";
export const _r = "reason";
export const _rT = "refreshToken";
export const _rU = "redirectUri";
export const _s = "scope";
export const _se = "server";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.ssooidc";
export const _tT = "tokenType";
export const n0 = "com.amazonaws.ssooidc";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  AccessDeniedException as __AccessDeniedException,
  AuthorizationPendingException as __AuthorizationPendingException,
  ExpiredTokenException as __ExpiredTokenException,
  InternalServerException as __InternalServerException,
  InvalidClientException as __InvalidClientException,
  InvalidGrantException as __InvalidGrantException,
  InvalidRequestException as __InvalidRequestException,
  InvalidScopeException as __InvalidScopeException,
  SlowDownException as __SlowDownException,
  UnauthorizedClientException as __UnauthorizedClientException,
  UnsupportedGrantTypeException as __UnsupportedGrantTypeException,
} from "../models/errors";
import { SSOOIDCServiceException as __SSOOIDCServiceException } from "../models/SSOOIDCServiceException";

/* eslint no-var: 0 */

export var AccessToken: StaticSimpleSchema = [0, n0, _AT, 8, 0];
export var ClientSecret: StaticSimpleSchema = [0, n0, _CS, 8, 0];
export var CodeVerifier: StaticSimpleSchema = [0, n0, _CV, 8, 0];
export var IdToken: StaticSimpleSchema = [0, n0, _IT, 8, 0];
export var RefreshToken: StaticSimpleSchema = [0, n0, _RT, 8, 0];
export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_e, _r, _ed],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var AuthorizationPendingException: StaticErrorSchema = [
  -3,
  n0,
  _APE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_e, _ed],
  [0, 0],
];
TypeRegistry.for(n0).registerError(AuthorizationPendingException, __AuthorizationPendingException);

export var CreateTokenRequest: StaticStructureSchema = [
  3,
  n0,
  _CTR,
  0,
  [_cI, _cS, _gT, _dC, _co, _rT, _s, _rU, _cV],
  [0, [() => ClientSecret, 0], 0, 0, 0, [() => RefreshToken, 0], 64 | 0, 0, [() => CodeVerifier, 0]],
];
export var CreateTokenResponse: StaticStructureSchema = [
  3,
  n0,
  _CTRr,
  0,
  [_aT, _tT, _eI, _rT, _iT],
  [[() => AccessToken, 0], 0, 1, [() => RefreshToken, 0], [() => IdToken, 0]],
];
export var ExpiredTokenException: StaticErrorSchema = [
  -3,
  n0,
  _ETE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_e, _ed],
  [0, 0],
];
TypeRegistry.for(n0).registerError(ExpiredTokenException, __ExpiredTokenException);

export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_e, _ed],
  [0, 0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var InvalidClientException: StaticErrorSchema = [
  -3,
  n0,
  _ICE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_e, _ed],
  [0, 0],
];
TypeRegistry.for(n0).registerError(InvalidClientException, __InvalidClientException);

export var InvalidGrantException: StaticErrorSchema = [
  -3,
  n0,
  _IGE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_e, _ed],
  [0, 0],
];
TypeRegistry.for(n0).registerError(InvalidGrantException, __InvalidGrantException);

export var InvalidRequestException: StaticErrorSchema = [
  -3,
  n0,
  _IRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_e, _r, _ed],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(InvalidRequestException, __InvalidRequestException);

export var InvalidScopeException: StaticErrorSchema = [
  -3,
  n0,
  _ISEn,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_e, _ed],
  [0, 0],
];
TypeRegistry.for(n0).registerError(InvalidScopeException, __InvalidScopeException);

export var SlowDownException: StaticErrorSchema = [
  -3,
  n0,
  _SDE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_e, _ed],
  [0, 0],
];
TypeRegistry.for(n0).registerError(SlowDownException, __SlowDownException);

export var UnauthorizedClientException: StaticErrorSchema = [
  -3,
  n0,
  _UCE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_e, _ed],
  [0, 0],
];
TypeRegistry.for(n0).registerError(UnauthorizedClientException, __UnauthorizedClientException);

export var UnsupportedGrantTypeException: StaticErrorSchema = [
  -3,
  n0,
  _UGTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_e, _ed],
  [0, 0],
];
TypeRegistry.for(n0).registerError(UnsupportedGrantTypeException, __UnsupportedGrantTypeException);

export var Unit = "unit" as const;

export var SSOOIDCServiceException: StaticErrorSchema = [-3, _sm, "SSOOIDCServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(SSOOIDCServiceException, __SSOOIDCServiceException);

export var Scopes = 64 | 0;

export var CreateToken: StaticOperationSchema = [
  9,
  n0,
  _CT,
  {
    [_h]: ["POST", "/token", 200],
  },
  () => CreateTokenRequest,
  () => CreateTokenResponse,
];

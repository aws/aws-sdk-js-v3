// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

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
} from "../models/index";
import {
  _ADE,
  _APE,
  _AT,
  _aT,
  _c,
  _cI,
  _co,
  _CS,
  _cS,
  _CT,
  _CTR,
  _CTRr,
  _CV,
  _cV,
  _dC,
  _e,
  _ed,
  _eI,
  _ETE,
  _gT,
  _h,
  _hE,
  _ICE,
  _IGE,
  _IRE,
  _ISE,
  _ISEn,
  _IT,
  _iT,
  _RT,
  _rT,
  _rU,
  _s,
  _SDE,
  _se,
  _tT,
  _UCE,
  _UGTE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessToken = sim(n0, _AT, 0, 8);
export var ClientSecret = sim(n0, _CS, 0, 8);
export var CodeVerifier = sim(n0, _CV, 0, 8);
export var IdToken = sim(n0, _IT, 0, 8);
export var RefreshToken = sim(n0, _RT, 0, 8);
export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_e, _ed],
  [0, 0],

  __AccessDeniedException
);
export var AuthorizationPendingException = error(
  n0,
  _APE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_e, _ed],
  [0, 0],

  __AuthorizationPendingException
);
export var CreateTokenRequest = struct(
  n0,
  _CTR,
  0,
  [_cI, _cS, _gT, _dC, _co, _rT, _s, _rU, _cV],
  [0, [() => ClientSecret, 0], 0, 0, 0, [() => RefreshToken, 0], 64 | 0, 0, [() => CodeVerifier, 0]]
);
export var CreateTokenResponse = struct(
  n0,
  _CTRr,
  0,
  [_aT, _tT, _eI, _rT, _iT],
  [[() => AccessToken, 0], 0, 1, [() => RefreshToken, 0], [() => IdToken, 0]]
);
export var ExpiredTokenException = error(
  n0,
  _ETE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_e, _ed],
  [0, 0],

  __ExpiredTokenException
);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_e, _ed],
  [0, 0],

  __InternalServerException
);
export var InvalidClientException = error(
  n0,
  _ICE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_e, _ed],
  [0, 0],

  __InvalidClientException
);
export var InvalidGrantException = error(
  n0,
  _IGE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_e, _ed],
  [0, 0],

  __InvalidGrantException
);
export var InvalidRequestException = error(
  n0,
  _IRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_e, _ed],
  [0, 0],

  __InvalidRequestException
);
export var InvalidScopeException = error(
  n0,
  _ISEn,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_e, _ed],
  [0, 0],

  __InvalidScopeException
);
export var SlowDownException = error(
  n0,
  _SDE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_e, _ed],
  [0, 0],

  __SlowDownException
);
export var UnauthorizedClientException = error(
  n0,
  _UCE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_e, _ed],
  [0, 0],

  __UnauthorizedClientException
);
export var UnsupportedGrantTypeException = error(
  n0,
  _UGTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_e, _ed],
  [0, 0],

  __UnsupportedGrantTypeException
);
export var Scopes = 64 | 0;

export var CreateToken = op(
  n0,
  _CT,
  {
    [_h]: ["POST", "/token", 200],
  },
  () => CreateTokenRequest,
  () => CreateTokenResponse
);

// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  AuthorizationPendingException as __AuthorizationPendingException,
  ExpiredTokenException as __ExpiredTokenException,
  InternalServerException as __InternalServerException,
  InvalidClientException as __InvalidClientException,
  InvalidClientMetadataException as __InvalidClientMetadataException,
  InvalidGrantException as __InvalidGrantException,
  InvalidRedirectUriException as __InvalidRedirectUriException,
  InvalidRequestException as __InvalidRequestException,
  InvalidRequestRegionException as __InvalidRequestRegionException,
  InvalidScopeException as __InvalidScopeException,
  SlowDownException as __SlowDownException,
  UnauthorizedClientException as __UnauthorizedClientException,
  UnsupportedGrantTypeException as __UnsupportedGrantTypeException,
} from "../models/index";
import {
  _A,
  _a,
  _AAD,
  _aAD,
  _ADE,
  _aE,
  _APE,
  _AT,
  _aT,
  _c,
  _cI,
  _cIIA,
  _cN,
  _co,
  _CS,
  _cS,
  _cSEA,
  _CT,
  _cT,
  _CTR,
  _CTRr,
  _CTWIAM,
  _CTWIAMR,
  _CTWIAMRr,
  _CV,
  _cV,
  _dC,
  _e,
  _eAA,
  _ed,
  _eI,
  _en,
  _ETE,
  _gT,
  _gTr,
  _h,
  _hE,
  _i,
  _iC,
  _ICE,
  _ICME,
  _IGE,
  _IRE,
  _IRRE,
  _IRUE,
  _ISE,
  _ISEn,
  _IT,
  _iT,
  _iTT,
  _iU,
  _r,
  _RC,
  _RCR,
  _RCRe,
  _RT,
  _rT,
  _rTT,
  _rU,
  _rUe,
  _s,
  _sc,
  _SDA,
  _SDAR,
  _SDARt,
  _SDE,
  _se,
  _ST,
  _sT,
  _sTT,
  _sU,
  _tE,
  _tT,
  _uC,
  _UCE,
  _UGTE,
  _vU,
  _vUC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessToken = sim(n0, _AT, 0, 8);
export var Assertion = sim(n0, _A, 0, 8);
export var ClientSecret = sim(n0, _CS, 0, 8);
export var CodeVerifier = sim(n0, _CV, 0, 8);
export var IdToken = sim(n0, _IT, 0, 8);
export var RefreshToken = sim(n0, _RT, 0, 8);
export var SubjectToken = sim(n0, _ST, 0, 8);
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
export var AwsAdditionalDetails = struct(n0, _AAD, 0, [_iC], [0]);
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
export var CreateTokenWithIAMRequest = struct(
  n0,
  _CTWIAMR,
  0,
  [_cI, _gT, _co, _rT, _a, _s, _rU, _sT, _sTT, _rTT, _cV],
  [
    0,
    0,
    0,
    [() => RefreshToken, 0],
    [() => Assertion, 0],
    64 | 0,
    0,
    [() => SubjectToken, 0],
    0,
    0,
    [() => CodeVerifier, 0],
  ]
);
export var CreateTokenWithIAMResponse = struct(
  n0,
  _CTWIAMRr,
  0,
  [_aT, _tT, _eI, _rT, _iT, _iTT, _s, _aAD],
  [[() => AccessToken, 0], 0, 1, [() => RefreshToken, 0], [() => IdToken, 0], 0, 64 | 0, () => AwsAdditionalDetails]
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
export var InvalidClientMetadataException = error(
  n0,
  _ICME,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_e, _ed],
  [0, 0],

  __InvalidClientMetadataException
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
export var InvalidRedirectUriException = error(
  n0,
  _IRUE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_e, _ed],
  [0, 0],

  __InvalidRedirectUriException
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
export var InvalidRequestRegionException = error(
  n0,
  _IRRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_e, _ed, _en, _r],
  [0, 0, 0, 0],

  __InvalidRequestRegionException
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
export var RegisterClientRequest = struct(
  n0,
  _RCR,
  0,
  [_cN, _cT, _sc, _rUe, _gTr, _iU, _eAA],
  [0, 0, 64 | 0, 64 | 0, 64 | 0, 0, 0]
);
export var RegisterClientResponse = struct(
  n0,
  _RCRe,
  0,
  [_cI, _cS, _cIIA, _cSEA, _aE, _tE],
  [0, [() => ClientSecret, 0], 1, 1, 0, 0]
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
export var StartDeviceAuthorizationRequest = struct(n0, _SDAR, 0, [_cI, _cS, _sU], [0, [() => ClientSecret, 0], 0]);
export var StartDeviceAuthorizationResponse = struct(n0, _SDARt, 0, [_dC, _uC, _vU, _vUC, _eI, _i], [0, 0, 0, 0, 1, 1]);
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
export var GrantTypes = 64 | 0;

export var RedirectUris = 64 | 0;

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
export var CreateTokenWithIAM = op(
  n0,
  _CTWIAM,
  {
    [_h]: ["POST", "/token?aws_iam=t", 200],
  },
  () => CreateTokenWithIAMRequest,
  () => CreateTokenWithIAMResponse
);
export var RegisterClient = op(
  n0,
  _RC,
  {
    [_h]: ["POST", "/client/register", 200],
  },
  () => RegisterClientRequest,
  () => RegisterClientResponse
);
export var StartDeviceAuthorization = op(
  n0,
  _SDA,
  {
    [_h]: ["POST", "/device_authorization", 200],
  },
  () => StartDeviceAuthorizationRequest,
  () => StartDeviceAuthorizationResponse
);

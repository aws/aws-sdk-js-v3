const _A = "Assertion";
const _AAD = "AwsAdditionalDetails";
const _ADE = "AccessDeniedException";
const _APE = "AuthorizationPendingException";
const _AT = "AccessToken";
const _CS = "ClientSecret";
const _CT = "CreateToken";
const _CTR = "CreateTokenRequest";
const _CTRr = "CreateTokenResponse";
const _CTWIAM = "CreateTokenWithIAM";
const _CTWIAMR = "CreateTokenWithIAMRequest";
const _CTWIAMRr = "CreateTokenWithIAMResponse";
const _CV = "CodeVerifier";
const _ETE = "ExpiredTokenException";
const _ICE = "InvalidClientException";
const _ICME = "InvalidClientMetadataException";
const _IGE = "InvalidGrantException";
const _IRE = "InvalidRequestException";
const _IRRE = "InvalidRequestRegionException";
const _IRUE = "InvalidRedirectUriException";
const _ISE = "InternalServerException";
const _ISEn = "InvalidScopeException";
const _IT = "IdToken";
const _RC = "RegisterClient";
const _RCR = "RegisterClientRequest";
const _RCRe = "RegisterClientResponse";
const _RT = "RefreshToken";
const _SDA = "StartDeviceAuthorization";
const _SDAR = "StartDeviceAuthorizationRequest";
const _SDARt = "StartDeviceAuthorizationResponse";
const _SDE = "SlowDownException";
const _ST = "SubjectToken";
const _UCE = "UnauthorizedClientException";
const _UGTE = "UnsupportedGrantTypeException";
const _a = "assertion";
const _aAD = "awsAdditionalDetails";
const _aE = "authorizationEndpoint";
const _aT = "accessToken";
const _c = "client";
const _cI = "clientId";
const _cIIA = "clientIdIssuedAt";
const _cN = "clientName";
const _cS = "clientSecret";
const _cSEA = "clientSecretExpiresAt";
const _cT = "clientType";
const _cV = "codeVerifier";
const _co = "code";
const _dC = "deviceCode";
const _e = "error";
const _eAA = "entitledApplicationArn";
const _eI = "expiresIn";
const _ed = "error_description";
const _en = "endpoint";
const _gT = "grantType";
const _gTr = "grantTypes";
const _h = "http";
const _hE = "httpError";
const _i = "interval";
const _iC = "identityContext";
const _iT = "idToken";
const _iTT = "issuedTokenType";
const _iU = "issuerUrl";
const _r = "reason";
const _rT = "refreshToken";
const _rTT = "requestedTokenType";
const _rU = "redirectUri";
const _rUe = "redirectUris";
const _re = "region";
const _s = "scope";
const _sT = "subjectToken";
const _sTT = "subjectTokenType";
const _sU = "startUrl";
const _sc = "scopes";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.ssooidc";
const _tE = "tokenEndpoint";
const _tT = "tokenType";
const _uC = "userCode";
const _vU = "verificationUri";
const _vUC = "verificationUriComplete";
const n0 = "com.amazonaws.ssooidc";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  AccessDeniedException,
  AuthorizationPendingException,
  ExpiredTokenException,
  InternalServerException,
  InvalidClientException,
  InvalidClientMetadataException,
  InvalidGrantException,
  InvalidRedirectUriException,
  InvalidRequestException,
  InvalidRequestRegionException,
  InvalidScopeException,
  SlowDownException,
  UnauthorizedClientException,
  UnsupportedGrantTypeException,
} from "../models/errors";
import { SSOOIDCServiceException } from "../models/SSOOIDCServiceException";

/* eslint no-var: 0 */
var AccessToken: StaticSimpleSchema = [0, n0, _AT, 8, 0];
var Assertion: StaticSimpleSchema = [0, n0, _A, 8, 0];
var ClientSecret: StaticSimpleSchema = [0, n0, _CS, 8, 0];
var CodeVerifier: StaticSimpleSchema = [0, n0, _CV, 8, 0];
var IdToken: StaticSimpleSchema = [0, n0, _IT, 8, 0];
var RefreshToken: StaticSimpleSchema = [0, n0, _RT, 8, 0];
var SubjectToken: StaticSimpleSchema = [0, n0, _ST, 8, 0];
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 400 },
  [_e, _r, _ed],
  [0, 0, 0]
];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var AuthorizationPendingException$: StaticErrorSchema = [-3, n0, _APE,
  { [_e]: _c, [_hE]: 400 },
  [_e, _ed],
  [0, 0]
];
TypeRegistry.for(n0).registerError(AuthorizationPendingException$, AuthorizationPendingException);
export var AwsAdditionalDetails$: StaticStructureSchema = [3, n0, _AAD,
  0,
  [_iC],
  [0]
];
export var CreateTokenRequest$: StaticStructureSchema = [3, n0, _CTR,
  0,
  [_cI, _cS, _gT, _dC, _co, _rT, _s, _rU, _cV],
  [0, [() => ClientSecret, 0], 0, 0, 0, [() => RefreshToken, 0], 64 | 0, 0, [() => CodeVerifier, 0]]
];
export var CreateTokenResponse$: StaticStructureSchema = [3, n0, _CTRr,
  0,
  [_aT, _tT, _eI, _rT, _iT],
  [[() => AccessToken, 0], 0, 1, [() => RefreshToken, 0], [() => IdToken, 0]]
];
export var CreateTokenWithIAMRequest$: StaticStructureSchema = [3, n0, _CTWIAMR,
  0,
  [_cI, _gT, _co, _rT, _a, _s, _rU, _sT, _sTT, _rTT, _cV],
  [0, 0, 0, [() => RefreshToken, 0], [() => Assertion, 0], 64 | 0, 0, [() => SubjectToken, 0], 0, 0, [() => CodeVerifier, 0]]
];
export var CreateTokenWithIAMResponse$: StaticStructureSchema = [3, n0, _CTWIAMRr,
  0,
  [_aT, _tT, _eI, _rT, _iT, _iTT, _s, _aAD],
  [[() => AccessToken, 0], 0, 1, [() => RefreshToken, 0], [() => IdToken, 0], 0, 64 | 0, () => AwsAdditionalDetails$]
];
export var ExpiredTokenException$: StaticErrorSchema = [-3, n0, _ETE,
  { [_e]: _c, [_hE]: 400 },
  [_e, _ed],
  [0, 0]
];
TypeRegistry.for(n0).registerError(ExpiredTokenException$, ExpiredTokenException);
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_e, _ed],
  [0, 0]
];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var InvalidClientException$: StaticErrorSchema = [-3, n0, _ICE,
  { [_e]: _c, [_hE]: 401 },
  [_e, _ed],
  [0, 0]
];
TypeRegistry.for(n0).registerError(InvalidClientException$, InvalidClientException);
export var InvalidClientMetadataException$: StaticErrorSchema = [-3, n0, _ICME,
  { [_e]: _c, [_hE]: 400 },
  [_e, _ed],
  [0, 0]
];
TypeRegistry.for(n0).registerError(InvalidClientMetadataException$, InvalidClientMetadataException);
export var InvalidGrantException$: StaticErrorSchema = [-3, n0, _IGE,
  { [_e]: _c, [_hE]: 400 },
  [_e, _ed],
  [0, 0]
];
TypeRegistry.for(n0).registerError(InvalidGrantException$, InvalidGrantException);
export var InvalidRedirectUriException$: StaticErrorSchema = [-3, n0, _IRUE,
  { [_e]: _c, [_hE]: 400 },
  [_e, _ed],
  [0, 0]
];
TypeRegistry.for(n0).registerError(InvalidRedirectUriException$, InvalidRedirectUriException);
export var InvalidRequestException$: StaticErrorSchema = [-3, n0, _IRE,
  { [_e]: _c, [_hE]: 400 },
  [_e, _r, _ed],
  [0, 0, 0]
];
TypeRegistry.for(n0).registerError(InvalidRequestException$, InvalidRequestException);
export var InvalidRequestRegionException$: StaticErrorSchema = [-3, n0, _IRRE,
  { [_e]: _c, [_hE]: 400 },
  [_e, _ed, _en, _re],
  [0, 0, 0, 0]
];
TypeRegistry.for(n0).registerError(InvalidRequestRegionException$, InvalidRequestRegionException);
export var InvalidScopeException$: StaticErrorSchema = [-3, n0, _ISEn,
  { [_e]: _c, [_hE]: 400 },
  [_e, _ed],
  [0, 0]
];
TypeRegistry.for(n0).registerError(InvalidScopeException$, InvalidScopeException);
export var RegisterClientRequest$: StaticStructureSchema = [3, n0, _RCR,
  0,
  [_cN, _cT, _sc, _rUe, _gTr, _iU, _eAA],
  [0, 0, 64 | 0, 64 | 0, 64 | 0, 0, 0]
];
export var RegisterClientResponse$: StaticStructureSchema = [3, n0, _RCRe,
  0,
  [_cI, _cS, _cIIA, _cSEA, _aE, _tE],
  [0, [() => ClientSecret, 0], 1, 1, 0, 0]
];
export var SlowDownException$: StaticErrorSchema = [-3, n0, _SDE,
  { [_e]: _c, [_hE]: 400 },
  [_e, _ed],
  [0, 0]
];
TypeRegistry.for(n0).registerError(SlowDownException$, SlowDownException);
export var StartDeviceAuthorizationRequest$: StaticStructureSchema = [3, n0, _SDAR,
  0,
  [_cI, _cS, _sU],
  [0, [() => ClientSecret, 0], 0]
];
export var StartDeviceAuthorizationResponse$: StaticStructureSchema = [3, n0, _SDARt,
  0,
  [_dC, _uC, _vU, _vUC, _eI, _i],
  [0, 0, 0, 0, 1, 1]
];
export var UnauthorizedClientException$: StaticErrorSchema = [-3, n0, _UCE,
  { [_e]: _c, [_hE]: 400 },
  [_e, _ed],
  [0, 0]
];
TypeRegistry.for(n0).registerError(UnauthorizedClientException$, UnauthorizedClientException);
export var UnsupportedGrantTypeException$: StaticErrorSchema = [-3, n0, _UGTE,
  { [_e]: _c, [_hE]: 400 },
  [_e, _ed],
  [0, 0]
];
TypeRegistry.for(n0).registerError(UnsupportedGrantTypeException$, UnsupportedGrantTypeException);
export var SSOOIDCServiceException$: StaticErrorSchema = [-3, _sm, "SSOOIDCServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(SSOOIDCServiceException$, SSOOIDCServiceException);
var GrantTypes = 64 | 0;
var RedirectUris = 64 | 0;
var Scopes = 64 | 0;
export var CreateToken$: StaticOperationSchema = [9, n0, _CT,
  { [_h]: ["POST", "/token", 200] }, () => CreateTokenRequest$, () => CreateTokenResponse$
];
export var CreateTokenWithIAM$: StaticOperationSchema = [9, n0, _CTWIAM,
  { [_h]: ["POST", "/token?aws_iam=t", 200] }, () => CreateTokenWithIAMRequest$, () => CreateTokenWithIAMResponse$
];
export var RegisterClient$: StaticOperationSchema = [9, n0, _RC,
  { [_h]: ["POST", "/client/register", 200] }, () => RegisterClientRequest$, () => RegisterClientResponse$
];
export var StartDeviceAuthorization$: StaticOperationSchema = [9, n0, _SDA,
  { [_h]: ["POST", "/device_authorization", 200] }, () => StartDeviceAuthorizationRequest$, () => StartDeviceAuthorizationResponse$
];

const _ADE = "AccessDeniedException";
const _AT = "AccessToken";
const _COAT = "CreateOAuth2Token";
const _COATR = "CreateOAuth2TokenRequest";
const _COATRB = "CreateOAuth2TokenRequestBody";
const _COATRBr = "CreateOAuth2TokenResponseBody";
const _COATRr = "CreateOAuth2TokenResponse";
const _ISE = "InternalServerException";
const _RT = "RefreshToken";
const _TMRE = "TooManyRequestsError";
const _VE = "ValidationException";
const _aKI = "accessKeyId";
const _aT = "accessToken";
const _c = "client";
const _cI = "clientId";
const _cV = "codeVerifier";
const _co = "code";
const _e = "error";
const _eI = "expiresIn";
const _gT = "grantType";
const _h = "http";
const _hE = "httpError";
const _iT = "idToken";
const _jN = "jsonName";
const _m = "message";
const _rT = "refreshToken";
const _rU = "redirectUri";
const _s = "server";
const _sAK = "secretAccessKey";
const _sT = "sessionToken";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.signin";
const _tI = "tokenInput";
const _tO = "tokenOutput";
const _tT = "tokenType";
const n0 = "com.amazonaws.signin";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  AccessDeniedException,
  InternalServerException,
  TooManyRequestsError,
  ValidationException,
} from "../models/errors";
import { SigninServiceException } from "../models/SigninServiceException";

/* eslint no-var: 0 */
var RefreshToken: StaticSimpleSchema = [0, n0, _RT, 8, 0];
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c },
  [_e, _m],
  [0, 0]
];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var AccessToken$: StaticStructureSchema = [3, n0, _AT,
  8,
  [_aKI, _sAK, _sT],
  [[0, { [_jN]: _aKI }], [0, { [_jN]: _sAK }], [0, { [_jN]: _sT }]]
];
export var CreateOAuth2TokenRequest$: StaticStructureSchema = [3, n0, _COATR,
  0,
  [_tI],
  [[() => CreateOAuth2TokenRequestBody$, 16]]
];
export var CreateOAuth2TokenRequestBody$: StaticStructureSchema = [3, n0, _COATRB,
  0,
  [_cI, _gT, _co, _rU, _cV, _rT],
  [[0, { [_jN]: _cI }], [0, { [_jN]: _gT }], 0, [0, { [_jN]: _rU }], [0, { [_jN]: _cV }], [() => RefreshToken, { [_jN]: _rT }]]
];
export var CreateOAuth2TokenResponse$: StaticStructureSchema = [3, n0, _COATRr,
  0,
  [_tO],
  [[() => CreateOAuth2TokenResponseBody$, 16]]
];
export var CreateOAuth2TokenResponseBody$: StaticStructureSchema = [3, n0, _COATRBr,
  0,
  [_aT, _tT, _eI, _rT, _iT],
  [[() => AccessToken$, { [_jN]: _aT }], [0, { [_jN]: _tT }], [1, { [_jN]: _eI }], [() => RefreshToken, { [_jN]: _rT }], [0, { [_jN]: _iT }]]
];
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _s, [_hE]: 500 },
  [_e, _m],
  [0, 0]
];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var TooManyRequestsError$: StaticErrorSchema = [-3, n0, _TMRE,
  { [_e]: _c, [_hE]: 429 },
  [_e, _m],
  [0, 0]
];
TypeRegistry.for(n0).registerError(TooManyRequestsError$, TooManyRequestsError);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_e, _m],
  [0, 0]
];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
export var SigninServiceException$: StaticErrorSchema = [-3, _sm, "SigninServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(SigninServiceException$, SigninServiceException);
export var CreateOAuth2Token$: StaticOperationSchema = [9, n0, _COAT,
  { [_h]: ["POST", "/v1/token", 200] }, () => CreateOAuth2TokenRequest$, () => CreateOAuth2TokenResponse$
];

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACA,
  _aCA,
  _AI,
  _AIu,
  _aIu,
  _APFV,
  _aPFV,
  _ARTIS,
  _aRTIS,
  _AT,
  _aT,
  _AU,
  _Au,
  _aU,
  _au,
  _Aud,
  _CAre,
  _CARre,
  _CARrea,
  _ESR,
  _eSR,
  _GAet,
  _GAetu,
  _GARetu,
  _GARetut,
  _GARetuth,
  _GARetutho,
  _hQ,
  _ht,
  _I,
  _i,
  _IS,
  _Is,
  _iS,
  _is,
  _IVE,
  _iVE,
  _JC,
  _jC,
  _jN,
  _JWTC,
  _lOAi,
  _MR,
  _mR,
  _N,
  _n,
  _NT,
  _nT,
  _UAp,
  _UARpd,
  _UARpda,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Authorizer = struct(
  n0,
  _Au,
  0,
  [_ACA, _AIu, _APFV, _ARTIS, _AT, _AU, _ESR, _IS, _IVE, _JC, _N],
  [
    [
      0,
      {
        [_jN]: _aCA,
      },
    ],
    [
      0,
      {
        [_jN]: _aIu,
      },
    ],
    [
      0,
      {
        [_jN]: _aPFV,
      },
    ],
    [
      1,
      {
        [_jN]: _aRTIS,
      },
    ],
    [
      0,
      {
        [_jN]: _aT,
      },
    ],
    [
      0,
      {
        [_jN]: _aU,
      },
    ],
    [
      2,
      {
        [_jN]: _eSR,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _iS,
      },
    ],
    [
      0,
      {
        [_jN]: _iVE,
      },
    ],
    [
      () => JWTConfiguration,
      {
        [_jN]: _jC,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
  ]
);
export var CreateAuthorizerRequest = struct(
  n0,
  _CARre,
  0,
  [_AI, _ACA, _APFV, _ARTIS, _AT, _AU, _ESR, _IS, _IVE, _JC, _N],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _aCA,
      },
    ],
    [
      0,
      {
        [_jN]: _aPFV,
      },
    ],
    [
      1,
      {
        [_jN]: _aRTIS,
      },
    ],
    [
      0,
      {
        [_jN]: _aT,
      },
    ],
    [
      0,
      {
        [_jN]: _aU,
      },
    ],
    [
      2,
      {
        [_jN]: _eSR,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _iS,
      },
    ],
    [
      0,
      {
        [_jN]: _iVE,
      },
    ],
    [
      () => JWTConfiguration,
      {
        [_jN]: _jC,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
  ]
);
export var CreateAuthorizerResponse = struct(
  n0,
  _CARrea,
  0,
  [_ACA, _AIu, _APFV, _ARTIS, _AT, _AU, _ESR, _IS, _IVE, _JC, _N],
  [
    [
      0,
      {
        [_jN]: _aCA,
      },
    ],
    [
      0,
      {
        [_jN]: _aIu,
      },
    ],
    [
      0,
      {
        [_jN]: _aPFV,
      },
    ],
    [
      1,
      {
        [_jN]: _aRTIS,
      },
    ],
    [
      0,
      {
        [_jN]: _aT,
      },
    ],
    [
      0,
      {
        [_jN]: _aU,
      },
    ],
    [
      2,
      {
        [_jN]: _eSR,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _iS,
      },
    ],
    [
      0,
      {
        [_jN]: _iVE,
      },
    ],
    [
      () => JWTConfiguration,
      {
        [_jN]: _jC,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
  ]
);
export var GetAuthorizerRequest = struct(
  n0,
  _GARetu,
  0,
  [_AI, _AIu],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetAuthorizerResponse = struct(
  n0,
  _GARetut,
  0,
  [_ACA, _AIu, _APFV, _ARTIS, _AT, _AU, _ESR, _IS, _IVE, _JC, _N],
  [
    [
      0,
      {
        [_jN]: _aCA,
      },
    ],
    [
      0,
      {
        [_jN]: _aIu,
      },
    ],
    [
      0,
      {
        [_jN]: _aPFV,
      },
    ],
    [
      1,
      {
        [_jN]: _aRTIS,
      },
    ],
    [
      0,
      {
        [_jN]: _aT,
      },
    ],
    [
      0,
      {
        [_jN]: _aU,
      },
    ],
    [
      2,
      {
        [_jN]: _eSR,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _iS,
      },
    ],
    [
      0,
      {
        [_jN]: _iVE,
      },
    ],
    [
      () => JWTConfiguration,
      {
        [_jN]: _jC,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
  ]
);
export var GetAuthorizersRequest = struct(
  n0,
  _GARetuth,
  0,
  [_AI, _MR, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var GetAuthorizersResponse = struct(
  n0,
  _GARetutho,
  0,
  [_I, _NT],
  [
    [
      () => __listOfAuthorizer,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var JWTConfiguration = struct(
  n0,
  _JWTC,
  0,
  [_Aud, _Is],
  [
    [
      64 | 0,
      {
        [_jN]: _au,
      },
    ],
    [
      0,
      {
        [_jN]: _is,
      },
    ],
  ]
);
export var UpdateAuthorizerRequest = struct(
  n0,
  _UARpd,
  0,
  [_AI, _ACA, _AIu, _APFV, _ARTIS, _AT, _AU, _ESR, _IS, _IVE, _JC, _N],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _aCA,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_jN]: _aPFV,
      },
    ],
    [
      1,
      {
        [_jN]: _aRTIS,
      },
    ],
    [
      0,
      {
        [_jN]: _aT,
      },
    ],
    [
      0,
      {
        [_jN]: _aU,
      },
    ],
    [
      2,
      {
        [_jN]: _eSR,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _iS,
      },
    ],
    [
      0,
      {
        [_jN]: _iVE,
      },
    ],
    [
      () => JWTConfiguration,
      {
        [_jN]: _jC,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
  ]
);
export var UpdateAuthorizerResponse = struct(
  n0,
  _UARpda,
  0,
  [_ACA, _AIu, _APFV, _ARTIS, _AT, _AU, _ESR, _IS, _IVE, _JC, _N],
  [
    [
      0,
      {
        [_jN]: _aCA,
      },
    ],
    [
      0,
      {
        [_jN]: _aIu,
      },
    ],
    [
      0,
      {
        [_jN]: _aPFV,
      },
    ],
    [
      1,
      {
        [_jN]: _aRTIS,
      },
    ],
    [
      0,
      {
        [_jN]: _aT,
      },
    ],
    [
      0,
      {
        [_jN]: _aU,
      },
    ],
    [
      2,
      {
        [_jN]: _eSR,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _iS,
      },
    ],
    [
      0,
      {
        [_jN]: _iVE,
      },
    ],
    [
      () => JWTConfiguration,
      {
        [_jN]: _jC,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
  ]
);
export var __listOfAuthorizer = list(n0, _lOAi, 0, [() => Authorizer, 0]);
export var IdentitySourceList = 64 | 0;

export var CreateAuthorizer = op(
  n0,
  _CAre,
  {
    [_ht]: ["POST", "/v2/apis/{ApiId}/authorizers", 201],
  },
  () => CreateAuthorizerRequest,
  () => CreateAuthorizerResponse
);
export var GetAuthorizer = op(
  n0,
  _GAet,
  {
    [_ht]: ["GET", "/v2/apis/{ApiId}/authorizers/{AuthorizerId}", 200],
  },
  () => GetAuthorizerRequest,
  () => GetAuthorizerResponse
);
export var GetAuthorizers = op(
  n0,
  _GAetu,
  {
    [_ht]: ["GET", "/v2/apis/{ApiId}/authorizers", 200],
  },
  () => GetAuthorizersRequest,
  () => GetAuthorizersResponse
);
export var UpdateAuthorizer = op(
  n0,
  _UAp,
  {
    [_ht]: ["PATCH", "/v2/apis/{ApiId}/authorizers/{AuthorizerId}", 200],
  },
  () => UpdateAuthorizerRequest,
  () => UpdateAuthorizerResponse
);

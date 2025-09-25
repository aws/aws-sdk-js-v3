// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ApiLimitExceededException as __ApiLimitExceededException } from "../models/index";
import {
  _AAP,
  _aAP,
  _AAPd,
  _aI,
  _aICR,
  _ALEE,
  _aR,
  _ar,
  _aRTIS,
  _aT,
  _aTp,
  _aTTL,
  _aU,
  _c,
  _CGA,
  _CGAR,
  _CGARr,
  _cI,
  _CUPC,
  _cWLRA,
  _d,
  _dA,
  _dSLMB,
  _e,
  _EMC,
  _eMC,
  _eVC,
  _fLL,
  _GA,
  _gA,
  _GAr,
  _gAr,
  _GGA,
  _GGAR,
  _GGARe,
  _h,
  _hE,
  _hQ,
  _iC,
  _is,
  _iTTL,
  _iVE,
  _LAC,
  _lAC,
  _LCo,
  _lCo,
  _LGA,
  _LGAR,
  _LGARi,
  _m,
  _mAERA,
  _mR,
  _n,
  _nT,
  _o,
  _oC,
  _OIDCC,
  _oIDCC,
  _oLMC,
  _qDL,
  _rCL,
  _rLMB,
  _t,
  _u,
  _UGA,
  _UGAR,
  _UGARp,
  _UPC,
  _uPC,
  _uPI,
  _vi,
  _wWAA,
  _xE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AdditionalAuthenticationProvider = struct(
  n0,
  _AAP,
  0,
  [_aT, _oIDCC, _uPC, _lAC],
  [0, () => OpenIDConnectConfig, () => CognitoUserPoolConfig, () => LambdaAuthorizerConfig]
);
export var ApiLimitExceededException = error(
  n0,
  _ALEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ApiLimitExceededException
);
export var CognitoUserPoolConfig = struct(n0, _CUPC, 0, [_uPI, _aR, _aICR], [0, 0, 0]);
export var CreateGraphqlApiRequest = struct(
  n0,
  _CGAR,
  0,
  [_n, _lCo, _aT, _uPC, _oIDCC, _t, _aAP, _xE, _lAC, _aTp, _mAERA, _vi, _oC, _iC, _qDL, _rCL, _eMC],
  [
    0,
    () => LogConfig,
    0,
    () => UserPoolConfig,
    () => OpenIDConnectConfig,
    128 | 0,
    () => AdditionalAuthenticationProviders,
    2,
    () => LambdaAuthorizerConfig,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    () => EnhancedMetricsConfig,
  ]
);
export var CreateGraphqlApiResponse = struct(n0, _CGARr, 0, [_gA], [() => GraphqlApi]);
export var EnhancedMetricsConfig = struct(n0, _EMC, 0, [_rLMB, _dSLMB, _oLMC], [0, 0, 0]);
export var GetGraphqlApiRequest = struct(n0, _GGAR, 0, [_aI], [[0, 1]]);
export var GetGraphqlApiResponse = struct(n0, _GGARe, 0, [_gA], [() => GraphqlApi]);
export var GraphqlApi = struct(
  n0,
  _GA,
  0,
  [
    _n,
    _aI,
    _aT,
    _lCo,
    _uPC,
    _oIDCC,
    _ar,
    _u,
    _t,
    _aAP,
    _xE,
    _wWAA,
    _lAC,
    _d,
    _vi,
    _aTp,
    _mAERA,
    _o,
    _oC,
    _iC,
    _qDL,
    _rCL,
    _eMC,
  ],
  [
    0,
    0,
    0,
    () => LogConfig,
    () => UserPoolConfig,
    () => OpenIDConnectConfig,
    0,
    128 | 0,
    128 | 0,
    () => AdditionalAuthenticationProviders,
    2,
    0,
    () => LambdaAuthorizerConfig,
    128 | 0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    () => EnhancedMetricsConfig,
  ]
);
export var LambdaAuthorizerConfig = struct(n0, _LAC, 0, [_aRTIS, _aU, _iVE], [1, 0, 0]);
export var ListGraphqlApisRequest = struct(
  n0,
  _LGAR,
  0,
  [_nT, _mR, _aTp, _o],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _aTp,
      },
    ],
    [
      0,
      {
        [_hQ]: _o,
      },
    ],
  ]
);
export var ListGraphqlApisResponse = struct(n0, _LGARi, 0, [_gAr, _nT], [() => GraphqlApis, 0]);
export var LogConfig = struct(n0, _LCo, 0, [_fLL, _cWLRA, _eVC], [0, 0, 2]);
export var OpenIDConnectConfig = struct(n0, _OIDCC, 0, [_is, _cI, _iTTL, _aTTL], [0, 0, 1, 1]);
export var UpdateGraphqlApiRequest = struct(
  n0,
  _UGAR,
  0,
  [_aI, _n, _lCo, _aT, _uPC, _oIDCC, _aAP, _xE, _lAC, _mAERA, _oC, _iC, _qDL, _rCL, _eMC],
  [
    [0, 1],
    0,
    () => LogConfig,
    0,
    () => UserPoolConfig,
    () => OpenIDConnectConfig,
    () => AdditionalAuthenticationProviders,
    2,
    () => LambdaAuthorizerConfig,
    0,
    0,
    0,
    1,
    1,
    () => EnhancedMetricsConfig,
  ]
);
export var UpdateGraphqlApiResponse = struct(n0, _UGARp, 0, [_gA], [() => GraphqlApi]);
export var UserPoolConfig = struct(n0, _UPC, 0, [_uPI, _aR, _dA, _aICR], [0, 0, 0, 0]);
export var AdditionalAuthenticationProviders = list(n0, _AAPd, 0, () => AdditionalAuthenticationProvider);
export var GraphqlApis = list(n0, _GAr, 0, () => GraphqlApi);
export var MapOfStringToString = 128 | 0;

export var CreateGraphqlApi = op(
  n0,
  _CGA,
  {
    [_h]: ["POST", "/v1/apis", 200],
  },
  () => CreateGraphqlApiRequest,
  () => CreateGraphqlApiResponse
);
export var GetGraphqlApi = op(
  n0,
  _GGA,
  {
    [_h]: ["GET", "/v1/apis/{apiId}", 200],
  },
  () => GetGraphqlApiRequest,
  () => GetGraphqlApiResponse
);
export var ListGraphqlApis = op(
  n0,
  _LGA,
  {
    [_h]: ["GET", "/v1/apis", 200],
  },
  () => ListGraphqlApisRequest,
  () => ListGraphqlApisResponse
);
export var UpdateGraphqlApi = op(
  n0,
  _UGA,
  {
    [_h]: ["POST", "/v1/apis/{apiId}", 200],
  },
  () => UpdateGraphqlApiRequest,
  () => UpdateGraphqlApiResponse
);

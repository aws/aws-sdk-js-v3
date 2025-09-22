// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import {
  _A,
  _a,
  _aA,
  _aI,
  _aICR,
  _AM,
  _AMu,
  _AP,
  _Ap,
  _aP,
  _ap,
  _APu,
  _aR,
  _aTu,
  _b,
  _c,
  _CA,
  _cAM,
  _CAR,
  _CARr,
  _cC,
  _CCN,
  _CCNR,
  _CCNRr,
  _CCo,
  _CEo,
  _cH,
  _CN,
  _cN,
  _cNA,
  _CNh,
  _cNh,
  _cr,
  _cWLRA,
  _d,
  _dPAM,
  _dSAM,
  _dSN,
  _e,
  _EC,
  _eC,
  _ELC,
  _GAe,
  _GAR,
  _GARe,
  _GCN,
  _GCNR,
  _GCNRe,
  _h,
  _HC,
  _hC,
  _HCa,
  _hE,
  _hQ,
  _I,
  _int,
  _iT,
  _LA,
  _lAC,
  _LAR,
  _LARi,
  _LC,
  _lC,
  _LCN,
  _LCNR,
  _LCNRi,
  _lCo,
  _lL,
  _lM,
  _m,
  _mR,
  _n,
  _nT,
  _oC,
  _oIDCC,
  _oP,
  _oS,
  _pAM,
  _sAM,
  _SQEE,
  _t,
  _UA,
  _UAR,
  _UARp,
  _UCN,
  _UCNR,
  _UCNRp,
  _uPI,
  _wWAA,
  _xE,
  n0,
} from "./schemas_0";
import { LambdaAuthorizerConfig, OpenIDConnectConfig } from "./schemas_12_Api";

/* eslint no-var: 0 */

export var Api = struct(
  n0,
  _A,
  0,
  [_aI, _n, _oC, _t, _d, _aA, _cr, _xE, _wWAA, _eC],
  [0, 0, 0, 128 | 0, 128 | 0, 0, 4, 2, 0, () => EventConfig]
);
export var AuthMode = struct(n0, _AM, 0, [_aTu], [0]);
export var AuthProvider = struct(
  n0,
  _AP,
  0,
  [_aTu, _cC, _oIDCC, _lAC],
  [0, () => CognitoConfig, () => OpenIDConnectConfig, () => LambdaAuthorizerConfig]
);
export var ChannelNamespace = struct(
  n0,
  _CN,
  0,
  [_aI, _n, _sAM, _pAM, _cH, _t, _cNA, _cr, _lM, _hC],
  [0, 0, () => AuthModes, () => AuthModes, 0, 128 | 0, 0, 4, 4, () => HandlerConfigs]
);
export var CognitoConfig = struct(n0, _CCo, 0, [_uPI, _aR, _aICR], [0, 0, 0]);
export var ConflictException = error(
  n0,
  _CEo,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ConflictException
);
export var CreateApiRequest = struct(n0, _CAR, 0, [_n, _oC, _t, _eC], [0, 0, 128 | 0, () => EventConfig]);
export var CreateApiResponse = struct(n0, _CARr, 0, [_a], [() => Api]);
export var CreateChannelNamespaceRequest = struct(
  n0,
  _CCNR,
  0,
  [_aI, _n, _sAM, _pAM, _cH, _t, _hC],
  [[0, 1], 0, () => AuthModes, () => AuthModes, 0, 128 | 0, () => HandlerConfigs]
);
export var CreateChannelNamespaceResponse = struct(n0, _CCNRr, 0, [_cN], [() => ChannelNamespace]);
export var EventConfig = struct(
  n0,
  _EC,
  0,
  [_aP, _cAM, _dPAM, _dSAM, _lCo],
  [() => AuthProviders, () => AuthModes, () => AuthModes, () => AuthModes, () => EventLogConfig]
);
export var EventLogConfig = struct(n0, _ELC, 0, [_lL, _cWLRA], [0, 0]);
export var GetApiRequest = struct(n0, _GAR, 0, [_aI], [[0, 1]]);
export var GetApiResponse = struct(n0, _GARe, 0, [_a], [() => Api]);
export var GetChannelNamespaceRequest = struct(
  n0,
  _GCNR,
  0,
  [_aI, _n],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetChannelNamespaceResponse = struct(n0, _GCNRe, 0, [_cN], [() => ChannelNamespace]);
export var HandlerConfig = struct(n0, _HC, 0, [_b, _int], [0, () => Integration]);
export var HandlerConfigs = struct(n0, _HCa, 0, [_oP, _oS], [() => HandlerConfig, () => HandlerConfig]);
export var Integration = struct(n0, _I, 0, [_dSN, _lC], [0, () => LambdaConfig]);
export var LambdaConfig = struct(n0, _LC, 0, [_iT], [0]);
export var ListApisRequest = struct(
  n0,
  _LAR,
  0,
  [_nT, _mR],
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
  ]
);
export var ListApisResponse = struct(n0, _LARi, 0, [_ap, _nT], [() => Apis, 0]);
export var ListChannelNamespacesRequest = struct(
  n0,
  _LCNR,
  0,
  [_aI, _nT, _mR],
  [
    [0, 1],
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
  ]
);
export var ListChannelNamespacesResponse = struct(n0, _LCNRi, 0, [_cNh, _nT], [() => ChannelNamespaces, 0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var UpdateApiRequest = struct(n0, _UAR, 0, [_aI, _n, _oC, _eC], [[0, 1], 0, 0, () => EventConfig]);
export var UpdateApiResponse = struct(n0, _UARp, 0, [_a], [() => Api]);
export var UpdateChannelNamespaceRequest = struct(
  n0,
  _UCNR,
  0,
  [_aI, _n, _sAM, _pAM, _cH, _hC],
  [[0, 1], [0, 1], () => AuthModes, () => AuthModes, 0, () => HandlerConfigs]
);
export var UpdateChannelNamespaceResponse = struct(n0, _UCNRp, 0, [_cN], [() => ChannelNamespace]);
export var Apis = list(n0, _Ap, 0, () => Api);
export var AuthModes = list(n0, _AMu, 0, () => AuthMode);
export var AuthProviders = list(n0, _APu, 0, () => AuthProvider);
export var ChannelNamespaces = list(n0, _CNh, 0, () => ChannelNamespace);
export var CreateApi = op(
  n0,
  _CA,
  {
    [_h]: ["POST", "/v2/apis", 200],
  },
  () => CreateApiRequest,
  () => CreateApiResponse
);
export var CreateChannelNamespace = op(
  n0,
  _CCN,
  {
    [_h]: ["POST", "/v2/apis/{apiId}/channelNamespaces", 200],
  },
  () => CreateChannelNamespaceRequest,
  () => CreateChannelNamespaceResponse
);
export var GetApi = op(
  n0,
  _GAe,
  {
    [_h]: ["GET", "/v2/apis/{apiId}", 200],
  },
  () => GetApiRequest,
  () => GetApiResponse
);
export var GetChannelNamespace = op(
  n0,
  _GCN,
  {
    [_h]: ["GET", "/v2/apis/{apiId}/channelNamespaces/{name}", 200],
  },
  () => GetChannelNamespaceRequest,
  () => GetChannelNamespaceResponse
);
export var ListApis = op(
  n0,
  _LA,
  {
    [_h]: ["GET", "/v2/apis", 200],
  },
  () => ListApisRequest,
  () => ListApisResponse
);
export var ListChannelNamespaces = op(
  n0,
  _LCN,
  {
    [_h]: ["GET", "/v2/apis/{apiId}/channelNamespaces", 200],
  },
  () => ListChannelNamespacesRequest,
  () => ListChannelNamespacesResponse
);
export var UpdateApi = op(
  n0,
  _UA,
  {
    [_h]: ["POST", "/v2/apis/{apiId}", 200],
  },
  () => UpdateApiRequest,
  () => UpdateApiResponse
);
export var UpdateChannelNamespace = op(
  n0,
  _UCN,
  {
    [_h]: ["POST", "/v2/apis/{apiId}/channelNamespaces/{name}", 200],
  },
  () => UpdateChannelNamespaceRequest,
  () => UpdateChannelNamespaceResponse
);

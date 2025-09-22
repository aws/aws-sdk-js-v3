// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aKS,
  _b,
  _bMT,
  _cA,
  _cB,
  _cC,
  _cD,
  _CDN,
  _CDNR,
  _cF,
  _cN,
  _cPK,
  _CRA,
  _CRAR,
  _cUD,
  _d,
  _dDN,
  _dEAE,
  _dHZI,
  _DN,
  _dN,
  _dNA,
  _dNI,
  _DNo,
  _dNS,
  _dNSM,
  _EC,
  _eC,
  _fa,
  _fOW,
  _GDN,
  _GDNe,
  _GDNR,
  _GDNRe,
  _GRA,
  _GRAe,
  _GRAR,
  _GRARe,
  _hQ,
  _ht,
  _i,
  _iAT,
  _IRA,
  _IRAR,
  _it,
  _ite,
  _jN,
  _li,
  _LODN,
  _LORA,
  _mCS,
  _mo,
  _mP,
  _MTA,
  _mTA,
  _MTAI,
  _n,
  _oVCA,
  _p,
  _par,
  _pO,
  _po,
  _PRA,
  _PRAR,
  _RAe,
  _RAes,
  _rAI,
  _rCA,
  _rCN,
  _rDN,
  _rHZI,
  _rM,
  _rO,
  _rRI,
  _sP,
  _t,
  _tU,
  _tV,
  _tW,
  _typ,
  _UDN,
  _UDNR,
  _URA,
  _URAR,
  _ve,
  _vEI,
  _w,
  ListOfPatchOperation,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDomainNameRequest = struct(
  n0,
  _CDNR,
  0,
  [_dN, _cN, _cB, _cPK, _cC, _cA, _rCN, _rCA, _eC, _t, _sP, _mTA, _oVCA, _po, _rM],
  [0, 0, 0, 0, 0, 0, 0, 0, () => EndpointConfiguration, 128 | 0, 0, () => MutualTlsAuthenticationInput, 0, 0, 0]
);
export var CreateRestApiRequest = struct(
  n0,
  _CRAR,
  0,
  [_n, _d, _ve, _cF, _bMT, _mCS, _aKS, _eC, _po, _t, _dEAE],
  [0, 0, 0, 0, 64 | 0, 1, 0, () => EndpointConfiguration, 0, 128 | 0, 2]
);
export var DomainName = struct(
  n0,
  _DN,
  0,
  [
    _dN,
    _dNI,
    _dNA,
    _cN,
    _cA,
    _cUD,
    _rDN,
    _rHZI,
    _rCN,
    _rCA,
    _dDN,
    _dHZI,
    _eC,
    _dNS,
    _dNSM,
    _sP,
    _t,
    _mTA,
    _oVCA,
    _mP,
    _po,
    _rM,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    4,
    0,
    0,
    0,
    0,
    0,
    0,
    () => EndpointConfiguration,
    0,
    0,
    0,
    128 | 0,
    () => MutualTlsAuthentication,
    0,
    0,
    0,
    0,
  ]
);
export var DomainNames = struct(
  n0,
  _DNo,
  0,
  [_it, _p],
  [
    [
      () => ListOfDomainName,
      {
        [_jN]: _ite,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
  ]
);
export var EndpointConfiguration = struct(n0, _EC, 0, [_typ, _iAT, _vEI], [64 | 0, 0, 64 | 0]);
export var GetDomainNameRequest = struct(
  n0,
  _GDNR,
  0,
  [_dN, _dNI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _dNI,
      },
    ],
  ]
);
export var GetDomainNamesRequest = struct(
  n0,
  _GDNRe,
  0,
  [_p, _li, _rO],
  [
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      1,
      {
        [_hQ]: _li,
      },
    ],
    [
      0,
      {
        [_hQ]: _rO,
      },
    ],
  ]
);
export var GetRestApiRequest = struct(n0, _GRAR, 0, [_rAI], [[0, 1]]);
export var GetRestApisRequest = struct(
  n0,
  _GRARe,
  0,
  [_p, _li],
  [
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      1,
      {
        [_hQ]: _li,
      },
    ],
  ]
);
export var ImportRestApiRequest = struct(
  n0,
  _IRAR,
  0,
  [_fOW, _par, _b],
  [
    [
      2,
      {
        [_hQ]: _fa,
      },
    ],
    [128 | 0, 64],
    [21, 16],
  ]
);
export var MutualTlsAuthentication = struct(n0, _MTA, 0, [_tU, _tV, _tW], [0, 0, 64 | 0]);
export var MutualTlsAuthenticationInput = struct(n0, _MTAI, 0, [_tU, _tV], [0, 0]);
export var PutRestApiRequest = struct(
  n0,
  _PRAR,
  0,
  [_rAI, _mo, _fOW, _par, _b],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _mo,
      },
    ],
    [
      2,
      {
        [_hQ]: _fa,
      },
    ],
    [128 | 0, 64],
    [21, 16],
  ]
);
export var RestApi = struct(
  n0,
  _RAe,
  0,
  [_i, _n, _d, _cD, _ve, _w, _bMT, _mCS, _aKS, _eC, _po, _t, _dEAE, _rRI],
  [0, 0, 0, 4, 0, 64 | 0, 64 | 0, 1, 0, () => EndpointConfiguration, 0, 128 | 0, 2, 0]
);
export var RestApis = struct(
  n0,
  _RAes,
  0,
  [_it, _p],
  [
    [
      () => ListOfRestApi,
      {
        [_jN]: _ite,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
  ]
);
export var UpdateDomainNameRequest = struct(
  n0,
  _UDNR,
  0,
  [_dN, _dNI, _pO],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _dNI,
      },
    ],
    () => ListOfPatchOperation,
  ]
);
export var UpdateRestApiRequest = struct(n0, _URAR, 0, [_rAI, _pO], [[0, 1], () => ListOfPatchOperation]);
export var ListOfDomainName = list(n0, _LODN, 0, () => DomainName);
export var ListOfEndpointType = 64 | 0;

export var ListOfRestApi = list(n0, _LORA, 0, () => RestApi);
export var CreateDomainName = op(
  n0,
  _CDN,
  {
    [_ht]: ["POST", "/domainnames", 201],
  },
  () => CreateDomainNameRequest,
  () => DomainName
);
export var CreateRestApi = op(
  n0,
  _CRA,
  {
    [_ht]: ["POST", "/restapis", 201],
  },
  () => CreateRestApiRequest,
  () => RestApi
);
export var GetDomainName = op(
  n0,
  _GDN,
  {
    [_ht]: ["GET", "/domainnames/{domainName}", 200],
  },
  () => GetDomainNameRequest,
  () => DomainName
);
export var GetDomainNames = op(
  n0,
  _GDNe,
  {
    [_ht]: ["GET", "/domainnames", 200],
  },
  () => GetDomainNamesRequest,
  () => DomainNames
);
export var GetRestApi = op(
  n0,
  _GRA,
  {
    [_ht]: ["GET", "/restapis/{restApiId}", 200],
  },
  () => GetRestApiRequest,
  () => RestApi
);
export var GetRestApis = op(
  n0,
  _GRAe,
  {
    [_ht]: ["GET", "/restapis", 200],
  },
  () => GetRestApisRequest,
  () => RestApis
);
export var ImportRestApi = op(
  n0,
  _IRA,
  {
    [_ht]: ["POST", "/restapis?mode=import", 201],
  },
  () => ImportRestApiRequest,
  () => RestApi
);
export var PutRestApi = op(
  n0,
  _PRA,
  {
    [_ht]: ["PUT", "/restapis/{restApiId}", 200],
  },
  () => PutRestApiRequest,
  () => RestApi
);
export var UpdateDomainName = op(
  n0,
  _UDN,
  {
    [_ht]: ["PATCH", "/domainnames/{domainName}", 200],
  },
  () => UpdateDomainNameRequest,
  () => DomainName
);
export var UpdateRestApi = op(
  n0,
  _URA,
  {
    [_ht]: ["PATCH", "/restapis/{restApiId}", 200],
  },
  () => UpdateRestApiRequest,
  () => RestApi
);

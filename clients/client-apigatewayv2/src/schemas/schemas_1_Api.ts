// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { AccessDeniedException as __AccessDeniedException } from "../models/index";
import {
  _A,
  _AC,
  _aC,
  _ADE,
  _AE,
  _aE,
  _AGDN,
  _aGDN,
  _AGM,
  _aGM,
  _AH,
  _aH,
  _AI,
  _aI,
  _AKSE,
  _aKSE,
  _aM,
  _AMl,
  _AMSE,
  _aMSE,
  _AO,
  _aO,
  _B,
  _b,
  _ba,
  _Bo,
  _C,
  _c,
  _CA,
  _cA,
  _CAe,
  _cAe,
  _CAR,
  _CAr,
  _CARr,
  _CC,
  _cC,
  _CD,
  _cD,
  _CDN,
  _CDNR,
  _CDNRr,
  _CN,
  _cN,
  _CUD,
  _cUD,
  _D,
  _d,
  _DEAE,
  _dEAE,
  _DN,
  _dN,
  _DNA,
  _dNA,
  _DNC,
  _dNC,
  _DNCo,
  _DNS,
  _dNS,
  _DNSM,
  _dNSM,
  _DSV,
  _dSV,
  _e,
  _EH,
  _eH,
  _ET,
  _eT,
  _FOW,
  _fOW,
  _GA,
  _GAe,
  _GAR,
  _GARe,
  _GARet,
  _GARetp,
  _GDN,
  _GDNe,
  _GDNR,
  _GDNRe,
  _GDNRet,
  _GDNReto,
  _hE,
  _hQ,
  _ht,
  _HZI,
  _hZI,
  _I,
  _i,
  _IAm,
  _IAR,
  _IARm,
  _IAT,
  _iAT,
  _II,
  _iI,
  _jN,
  _lOA,
  _lODN,
  _M,
  _m,
  _MA,
  _mA,
  _MR,
  _mR,
  _MTA,
  _mTA,
  _MTAI,
  _N,
  _n,
  _NT,
  _nT,
  _OVCA,
  _oVCA,
  _PT,
  _pT,
  _RAe,
  _RAR,
  _RARe,
  _RK,
  _rK,
  _RM,
  _rM,
  _RSE,
  _rSE,
  _SP,
  _sP,
  _T,
  _t,
  _Ta,
  _ta,
  _TU,
  _tU,
  _TV,
  _tV,
  _TW,
  _tW,
  _UA,
  _UAR,
  _UARp,
  _UDN,
  _UDNR,
  _UDNRp,
  _V,
  _v,
  _W,
  _w,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M],
  [
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],

  __AccessDeniedException
);
export var Api = struct(
  n0,
  _A,
  0,
  [_AE, _AGM, _AI, _AKSE, _CC, _CD, _D, _DSV, _DEAE, _II, _IAT, _N, _PT, _RSE, _T, _V, _W],
  [
    [
      0,
      {
        [_jN]: _aE,
      },
    ],
    [
      2,
      {
        [_jN]: _aGM,
      },
    ],
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _aKSE,
      },
    ],
    [
      () => Cors,
      {
        [_jN]: _cC,
      },
    ],
    [
      5,
      {
        [_jN]: _cD,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      2,
      {
        [_jN]: _dSV,
      },
    ],
    [
      2,
      {
        [_jN]: _dEAE,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _iI,
      },
    ],
    [
      0,
      {
        [_jN]: _iAT,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _pT,
      },
    ],
    [
      0,
      {
        [_jN]: _rSE,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    [
      0,
      {
        [_jN]: _v,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _w,
      },
    ],
  ]
);
export var Cors = struct(
  n0,
  _C,
  0,
  [_AC, _AH, _AMl, _AO, _EH, _MA],
  [
    [
      2,
      {
        [_jN]: _aC,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aH,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aM,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aO,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _eH,
      },
    ],
    [
      1,
      {
        [_jN]: _mA,
      },
    ],
  ]
);
export var CreateApiRequest = struct(
  n0,
  _CAR,
  0,
  [_AKSE, _CC, _CA, _D, _DSV, _DEAE, _IAT, _N, _PT, _RK, _RSE, _T, _Ta, _V],
  [
    [
      0,
      {
        [_jN]: _aKSE,
      },
    ],
    [
      () => Cors,
      {
        [_jN]: _cC,
      },
    ],
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      2,
      {
        [_jN]: _dSV,
      },
    ],
    [
      2,
      {
        [_jN]: _dEAE,
      },
    ],
    [
      0,
      {
        [_jN]: _iAT,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _pT,
      },
    ],
    [
      0,
      {
        [_jN]: _rK,
      },
    ],
    [
      0,
      {
        [_jN]: _rSE,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    [
      0,
      {
        [_jN]: _ta,
      },
    ],
    [
      0,
      {
        [_jN]: _v,
      },
    ],
  ]
);
export var CreateApiResponse = struct(
  n0,
  _CARr,
  0,
  [_AE, _AGM, _AI, _AKSE, _CC, _CD, _D, _DSV, _DEAE, _II, _IAT, _N, _PT, _RSE, _T, _V, _W],
  [
    [
      0,
      {
        [_jN]: _aE,
      },
    ],
    [
      2,
      {
        [_jN]: _aGM,
      },
    ],
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _aKSE,
      },
    ],
    [
      () => Cors,
      {
        [_jN]: _cC,
      },
    ],
    [
      5,
      {
        [_jN]: _cD,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      2,
      {
        [_jN]: _dSV,
      },
    ],
    [
      2,
      {
        [_jN]: _dEAE,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _iI,
      },
    ],
    [
      0,
      {
        [_jN]: _iAT,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _pT,
      },
    ],
    [
      0,
      {
        [_jN]: _rSE,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    [
      0,
      {
        [_jN]: _v,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _w,
      },
    ],
  ]
);
export var CreateDomainNameRequest = struct(
  n0,
  _CDNR,
  0,
  [_DN, _DNC, _MTA, _RM, _T],
  [
    [
      0,
      {
        [_jN]: _dN,
      },
    ],
    [
      () => DomainNameConfigurations,
      {
        [_jN]: _dNC,
      },
    ],
    [
      () => MutualTlsAuthenticationInput,
      {
        [_jN]: _mTA,
      },
    ],
    [
      0,
      {
        [_jN]: _rM,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var CreateDomainNameResponse = struct(
  n0,
  _CDNRr,
  0,
  [_AMSE, _DN, _DNA, _DNC, _MTA, _RM, _T],
  [
    [
      0,
      {
        [_jN]: _aMSE,
      },
    ],
    [
      0,
      {
        [_jN]: _dN,
      },
    ],
    [
      0,
      {
        [_jN]: _dNA,
      },
    ],
    [
      () => DomainNameConfigurations,
      {
        [_jN]: _dNC,
      },
    ],
    [
      () => MutualTlsAuthentication,
      {
        [_jN]: _mTA,
      },
    ],
    [
      0,
      {
        [_jN]: _rM,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var DomainName = struct(
  n0,
  _DN,
  0,
  [_AMSE, _DN, _DNA, _DNC, _MTA, _RM, _T],
  [
    [
      0,
      {
        [_jN]: _aMSE,
      },
    ],
    [
      0,
      {
        [_jN]: _dN,
      },
    ],
    [
      0,
      {
        [_jN]: _dNA,
      },
    ],
    [
      () => DomainNameConfigurations,
      {
        [_jN]: _dNC,
      },
    ],
    [
      () => MutualTlsAuthentication,
      {
        [_jN]: _mTA,
      },
    ],
    [
      0,
      {
        [_jN]: _rM,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var DomainNameConfiguration = struct(
  n0,
  _DNCo,
  0,
  [_AGDN, _CAe, _CN, _CUD, _DNS, _DNSM, _ET, _HZI, _IAT, _SP, _OVCA],
  [
    [
      0,
      {
        [_jN]: _aGDN,
      },
    ],
    [
      0,
      {
        [_jN]: _cAe,
      },
    ],
    [
      0,
      {
        [_jN]: _cN,
      },
    ],
    [
      5,
      {
        [_jN]: _cUD,
      },
    ],
    [
      0,
      {
        [_jN]: _dNS,
      },
    ],
    [
      0,
      {
        [_jN]: _dNSM,
      },
    ],
    [
      0,
      {
        [_jN]: _eT,
      },
    ],
    [
      0,
      {
        [_jN]: _hZI,
      },
    ],
    [
      0,
      {
        [_jN]: _iAT,
      },
    ],
    [
      0,
      {
        [_jN]: _sP,
      },
    ],
    [
      0,
      {
        [_jN]: _oVCA,
      },
    ],
  ]
);
export var GetApiRequest = struct(n0, _GAR, 0, [_AI], [[0, 1]]);
export var GetApiResponse = struct(
  n0,
  _GARe,
  0,
  [_AE, _AGM, _AI, _AKSE, _CC, _CD, _D, _DSV, _DEAE, _II, _IAT, _N, _PT, _RSE, _T, _V, _W],
  [
    [
      0,
      {
        [_jN]: _aE,
      },
    ],
    [
      2,
      {
        [_jN]: _aGM,
      },
    ],
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _aKSE,
      },
    ],
    [
      () => Cors,
      {
        [_jN]: _cC,
      },
    ],
    [
      5,
      {
        [_jN]: _cD,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      2,
      {
        [_jN]: _dSV,
      },
    ],
    [
      2,
      {
        [_jN]: _dEAE,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _iI,
      },
    ],
    [
      0,
      {
        [_jN]: _iAT,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _pT,
      },
    ],
    [
      0,
      {
        [_jN]: _rSE,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    [
      0,
      {
        [_jN]: _v,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _w,
      },
    ],
  ]
);
export var GetApisRequest = struct(
  n0,
  _GARet,
  0,
  [_MR, _NT],
  [
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
export var GetApisResponse = struct(
  n0,
  _GARetp,
  0,
  [_I, _NT],
  [
    [
      () => __listOfApi,
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
export var GetDomainNameRequest = struct(n0, _GDNR, 0, [_DN], [[0, 1]]);
export var GetDomainNameResponse = struct(
  n0,
  _GDNRe,
  0,
  [_AMSE, _DN, _DNA, _DNC, _MTA, _RM, _T],
  [
    [
      0,
      {
        [_jN]: _aMSE,
      },
    ],
    [
      0,
      {
        [_jN]: _dN,
      },
    ],
    [
      0,
      {
        [_jN]: _dNA,
      },
    ],
    [
      () => DomainNameConfigurations,
      {
        [_jN]: _dNC,
      },
    ],
    [
      () => MutualTlsAuthentication,
      {
        [_jN]: _mTA,
      },
    ],
    [
      0,
      {
        [_jN]: _rM,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var GetDomainNamesRequest = struct(
  n0,
  _GDNRet,
  0,
  [_MR, _NT],
  [
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
export var GetDomainNamesResponse = struct(
  n0,
  _GDNReto,
  0,
  [_I, _NT],
  [
    [
      () => __listOfDomainName,
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
export var ImportApiRequest = struct(
  n0,
  _IAR,
  0,
  [_B, _Bo, _FOW],
  [
    [
      0,
      {
        [_hQ]: _ba,
      },
    ],
    [
      0,
      {
        [_jN]: _b,
      },
    ],
    [
      2,
      {
        [_hQ]: _fOW,
      },
    ],
  ]
);
export var ImportApiResponse = struct(
  n0,
  _IARm,
  0,
  [_AE, _AGM, _AI, _AKSE, _CC, _CD, _D, _DSV, _DEAE, _II, _IAT, _N, _PT, _RSE, _T, _V, _W],
  [
    [
      0,
      {
        [_jN]: _aE,
      },
    ],
    [
      2,
      {
        [_jN]: _aGM,
      },
    ],
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _aKSE,
      },
    ],
    [
      () => Cors,
      {
        [_jN]: _cC,
      },
    ],
    [
      5,
      {
        [_jN]: _cD,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      2,
      {
        [_jN]: _dSV,
      },
    ],
    [
      2,
      {
        [_jN]: _dEAE,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _iI,
      },
    ],
    [
      0,
      {
        [_jN]: _iAT,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _pT,
      },
    ],
    [
      0,
      {
        [_jN]: _rSE,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    [
      0,
      {
        [_jN]: _v,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _w,
      },
    ],
  ]
);
export var MutualTlsAuthentication = struct(
  n0,
  _MTA,
  0,
  [_TU, _TV, _TW],
  [
    [
      0,
      {
        [_jN]: _tU,
      },
    ],
    [
      0,
      {
        [_jN]: _tV,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _tW,
      },
    ],
  ]
);
export var MutualTlsAuthenticationInput = struct(
  n0,
  _MTAI,
  0,
  [_TU, _TV],
  [
    [
      0,
      {
        [_jN]: _tU,
      },
    ],
    [
      0,
      {
        [_jN]: _tV,
      },
    ],
  ]
);
export var ReimportApiRequest = struct(
  n0,
  _RAR,
  0,
  [_AI, _B, _Bo, _FOW],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _ba,
      },
    ],
    [
      0,
      {
        [_jN]: _b,
      },
    ],
    [
      2,
      {
        [_hQ]: _fOW,
      },
    ],
  ]
);
export var ReimportApiResponse = struct(
  n0,
  _RARe,
  0,
  [_AE, _AGM, _AI, _AKSE, _CC, _CD, _D, _DSV, _DEAE, _II, _IAT, _N, _PT, _RSE, _T, _V, _W],
  [
    [
      0,
      {
        [_jN]: _aE,
      },
    ],
    [
      2,
      {
        [_jN]: _aGM,
      },
    ],
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _aKSE,
      },
    ],
    [
      () => Cors,
      {
        [_jN]: _cC,
      },
    ],
    [
      5,
      {
        [_jN]: _cD,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      2,
      {
        [_jN]: _dSV,
      },
    ],
    [
      2,
      {
        [_jN]: _dEAE,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _iI,
      },
    ],
    [
      0,
      {
        [_jN]: _iAT,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _pT,
      },
    ],
    [
      0,
      {
        [_jN]: _rSE,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    [
      0,
      {
        [_jN]: _v,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _w,
      },
    ],
  ]
);
export var UpdateApiRequest = struct(
  n0,
  _UAR,
  0,
  [_AI, _AKSE, _CC, _CA, _D, _DSV, _DEAE, _IAT, _N, _RK, _RSE, _Ta, _V],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _aKSE,
      },
    ],
    [
      () => Cors,
      {
        [_jN]: _cC,
      },
    ],
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      2,
      {
        [_jN]: _dSV,
      },
    ],
    [
      2,
      {
        [_jN]: _dEAE,
      },
    ],
    [
      0,
      {
        [_jN]: _iAT,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _rK,
      },
    ],
    [
      0,
      {
        [_jN]: _rSE,
      },
    ],
    [
      0,
      {
        [_jN]: _ta,
      },
    ],
    [
      0,
      {
        [_jN]: _v,
      },
    ],
  ]
);
export var UpdateApiResponse = struct(
  n0,
  _UARp,
  0,
  [_AE, _AGM, _AI, _AKSE, _CC, _CD, _D, _DSV, _DEAE, _II, _IAT, _N, _PT, _RSE, _T, _V, _W],
  [
    [
      0,
      {
        [_jN]: _aE,
      },
    ],
    [
      2,
      {
        [_jN]: _aGM,
      },
    ],
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _aKSE,
      },
    ],
    [
      () => Cors,
      {
        [_jN]: _cC,
      },
    ],
    [
      5,
      {
        [_jN]: _cD,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      2,
      {
        [_jN]: _dSV,
      },
    ],
    [
      2,
      {
        [_jN]: _dEAE,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _iI,
      },
    ],
    [
      0,
      {
        [_jN]: _iAT,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _pT,
      },
    ],
    [
      0,
      {
        [_jN]: _rSE,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    [
      0,
      {
        [_jN]: _v,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _w,
      },
    ],
  ]
);
export var UpdateDomainNameRequest = struct(
  n0,
  _UDNR,
  0,
  [_DN, _DNC, _MTA, _RM],
  [
    [0, 1],
    [
      () => DomainNameConfigurations,
      {
        [_jN]: _dNC,
      },
    ],
    [
      () => MutualTlsAuthenticationInput,
      {
        [_jN]: _mTA,
      },
    ],
    [
      0,
      {
        [_jN]: _rM,
      },
    ],
  ]
);
export var UpdateDomainNameResponse = struct(
  n0,
  _UDNRp,
  0,
  [_AMSE, _DN, _DNA, _DNC, _MTA, _RM, _T],
  [
    [
      0,
      {
        [_jN]: _aMSE,
      },
    ],
    [
      0,
      {
        [_jN]: _dN,
      },
    ],
    [
      0,
      {
        [_jN]: _dNA,
      },
    ],
    [
      () => DomainNameConfigurations,
      {
        [_jN]: _dNC,
      },
    ],
    [
      () => MutualTlsAuthentication,
      {
        [_jN]: _mTA,
      },
    ],
    [
      0,
      {
        [_jN]: _rM,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var __listOfApi = list(n0, _lOA, 0, [() => Api, 0]);
export var __listOfDomainName = list(n0, _lODN, 0, [() => DomainName, 0]);
export var CorsHeaderList = 64 | 0;

export var CorsMethodList = 64 | 0;

export var CorsOriginList = 64 | 0;

export var DomainNameConfigurations = list(n0, _DNC, 0, [() => DomainNameConfiguration, 0]);
export var CreateApi = op(
  n0,
  _CAr,
  {
    [_ht]: ["POST", "/v2/apis", 201],
  },
  () => CreateApiRequest,
  () => CreateApiResponse
);
export var CreateDomainName = op(
  n0,
  _CDN,
  {
    [_ht]: ["POST", "/v2/domainnames", 201],
  },
  () => CreateDomainNameRequest,
  () => CreateDomainNameResponse
);
export var GetApi = op(
  n0,
  _GA,
  {
    [_ht]: ["GET", "/v2/apis/{ApiId}", 200],
  },
  () => GetApiRequest,
  () => GetApiResponse
);
export var GetApis = op(
  n0,
  _GAe,
  {
    [_ht]: ["GET", "/v2/apis", 200],
  },
  () => GetApisRequest,
  () => GetApisResponse
);
export var GetDomainName = op(
  n0,
  _GDN,
  {
    [_ht]: ["GET", "/v2/domainnames/{DomainName}", 200],
  },
  () => GetDomainNameRequest,
  () => GetDomainNameResponse
);
export var GetDomainNames = op(
  n0,
  _GDNe,
  {
    [_ht]: ["GET", "/v2/domainnames", 200],
  },
  () => GetDomainNamesRequest,
  () => GetDomainNamesResponse
);
export var ImportApi = op(
  n0,
  _IAm,
  {
    [_ht]: ["PUT", "/v2/apis", 201],
  },
  () => ImportApiRequest,
  () => ImportApiResponse
);
export var ReimportApi = op(
  n0,
  _RAe,
  {
    [_ht]: ["PUT", "/v2/apis/{ApiId}", 201],
  },
  () => ReimportApiRequest,
  () => ReimportApiResponse
);
export var UpdateApi = op(
  n0,
  _UA,
  {
    [_ht]: ["PATCH", "/v2/apis/{ApiId}", 200],
  },
  () => UpdateApiRequest,
  () => UpdateApiResponse
);
export var UpdateDomainName = op(
  n0,
  _UDN,
  {
    [_ht]: ["PATCH", "/v2/domainnames/{DomainName}", 200],
  },
  () => UpdateDomainNameRequest,
  () => UpdateDomainNameResponse
);

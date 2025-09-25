// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _AM,
  _aM,
  _AODR,
  _aODR,
  _Ar,
  _AT,
  _aT,
  _au,
  _C,
  _CA,
  _cA,
  _CAe,
  _cAe,
  _CC,
  _CCR,
  _CCRr,
  _CE,
  _Ch,
  _ch,
  _CI,
  _cI,
  _CIS,
  _cIS,
  _CIV,
  _cIV,
  _CL,
  _CLR,
  _CLRo,
  _COE,
  _COER,
  _COERr,
  _CP,
  _cP,
  _CPCOUP,
  _D,
  _d,
  _DCe,
  _DCRes,
  _DCResc,
  _DE,
  _DOEe,
  _DOERes,
  _DOEResc,
  _DP,
  _dP,
  _E,
  _e,
  _EAL,
  _eAL,
  _ECC,
  _eCC,
  _EM,
  _eM,
  _h,
  _HE,
  _HI,
  _hI,
  _HM,
  _hM,
  _HMCOUP,
  _HMl,
  _HP,
  _hP,
  _hQ,
  _I,
  _i,
  _IAL,
  _iAL,
  _IDS,
  _iDS,
  _IE,
  _iE,
  _IEI,
  _IEn,
  _IIOS,
  _iIOS,
  _jN,
  _KRIS,
  _kRIS,
  _LC,
  _LCR,
  _LCRi,
  _LGN,
  _lGN,
  _lOC,
  _LOE,
  _LOER,
  _LOERi,
  _lOHM,
  _lOHMCOUP,
  _lOIE,
  _lOOE,
  _MBTS,
  _mBTS,
  _ME,
  _ML,
  _mL,
  _MN,
  _mN,
  _MP,
  _mP,
  _MR,
  _mR,
  _MUPS,
  _mUPS,
  _MVBPS,
  _mVBPS,
  _MVBPSi,
  _mVBPSi,
  _MWS,
  _mWS,
  _NT,
  _nT,
  _O,
  _o,
  _OE,
  _oE,
  _OEr,
  _P,
  _p,
  _Pa,
  _pa,
  _PDTIS,
  _pDTIS,
  _PSA,
  _pSA,
  _PSV,
  _pSV,
  _PT,
  _pT,
  _PTl,
  _pTl,
  _PWS,
  _pWS,
  _rA,
  _RAo,
  _RCC,
  _RCCR,
  _RCCRo,
  _REXK,
  _rEXK,
  _RI,
  _rI,
  _RIEC,
  _RIECR,
  _RIECRo,
  _SDS,
  _sDS,
  _SI,
  _sI,
  _SKP,
  _sKP,
  _SO,
  _sO,
  _SP,
  _sP,
  _SPDS,
  _sPDS,
  _SRA,
  _sRA,
  _SS,
  _sS,
  _SSt,
  _STF,
  _sTF,
  _SWS,
  _sWS,
  _T,
  _t,
  _TDS,
  _tDS,
  _U,
  _u,
  _UARG,
  _uARG,
  _UC,
  _UCR,
  _UCRp,
  _UOE,
  _UOER,
  _UOERp,
  _Us,
  _us,
  _UT,
  _uT,
  _UTU,
  _uTU,
  _W,
  _w,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SensitiveString = sim(n0, _SS, 0, 8);
export var Authorization = struct(
  n0,
  _A,
  0,
  [_CIS, _SRA],
  [
    [
      0,
      {
        [_jN]: _cIS,
      },
    ],
    [
      0,
      {
        [_jN]: _sRA,
      },
    ],
  ]
);
export var Channel = struct(
  n0,
  _C,
  0,
  [_Ar, _CA, _D, _EAL, _HI, _I, _IAL, _T],
  [
    [
      0,
      {
        [_jN]: _a,
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
      () => EgressAccessLogs,
      {
        [_jN]: _eAL,
      },
    ],
    [
      () => HlsIngest,
      {
        [_jN]: _hI,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => IngressAccessLogs,
      {
        [_jN]: _iAL,
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
export var CmafEncryption = struct(
  n0,
  _CE,
  0,
  [_CIV, _EM, _KRIS, _SKP],
  [
    [
      0,
      {
        [_jN]: _cIV,
      },
    ],
    [
      0,
      {
        [_jN]: _eM,
      },
    ],
    [
      1,
      {
        [_jN]: _kRIS,
      },
    ],
    [
      () => SpekeKeyProvider,
      {
        [_jN]: _sKP,
      },
    ],
  ]
);
export var CmafPackage = struct(
  n0,
  _CP,
  0,
  [_E, _HM, _SDS, _SP, _SSt],
  [
    [
      () => CmafEncryption,
      {
        [_jN]: _e,
      },
    ],
    [
      () => __listOfHlsManifest,
      {
        [_jN]: _hM,
      },
    ],
    [
      1,
      {
        [_jN]: _sDS,
      },
    ],
    [
      0,
      {
        [_jN]: _sP,
      },
    ],
    [
      () => StreamSelection,
      {
        [_jN]: _sS,
      },
    ],
  ]
);
export var CmafPackageCreateOrUpdateParameters = struct(
  n0,
  _CPCOUP,
  0,
  [_E, _HM, _SDS, _SP, _SSt],
  [
    [
      () => CmafEncryption,
      {
        [_jN]: _e,
      },
    ],
    [
      () => __listOfHlsManifestCreateOrUpdateParameters,
      {
        [_jN]: _hM,
      },
    ],
    [
      1,
      {
        [_jN]: _sDS,
      },
    ],
    [
      0,
      {
        [_jN]: _sP,
      },
    ],
    [
      () => StreamSelection,
      {
        [_jN]: _sS,
      },
    ],
  ]
);
export var ConfigureLogsRequest = struct(
  n0,
  _CLR,
  0,
  [_EAL, _I, _IAL],
  [
    [
      () => EgressAccessLogs,
      {
        [_jN]: _eAL,
      },
    ],
    [0, 1],
    [
      () => IngressAccessLogs,
      {
        [_jN]: _iAL,
      },
    ],
  ]
);
export var ConfigureLogsResponse = struct(
  n0,
  _CLRo,
  0,
  [_Ar, _CA, _D, _EAL, _HI, _I, _IAL, _T],
  [
    [
      0,
      {
        [_jN]: _a,
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
      () => EgressAccessLogs,
      {
        [_jN]: _eAL,
      },
    ],
    [
      () => HlsIngest,
      {
        [_jN]: _hI,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => IngressAccessLogs,
      {
        [_jN]: _iAL,
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
export var CreateChannelRequest = struct(
  n0,
  _CCR,
  0,
  [_D, _I, _T],
  [
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
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
export var CreateChannelResponse = struct(
  n0,
  _CCRr,
  0,
  [_Ar, _CA, _D, _EAL, _HI, _I, _IAL, _T],
  [
    [
      0,
      {
        [_jN]: _a,
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
      () => EgressAccessLogs,
      {
        [_jN]: _eAL,
      },
    ],
    [
      () => HlsIngest,
      {
        [_jN]: _hI,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => IngressAccessLogs,
      {
        [_jN]: _iAL,
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
export var CreateOriginEndpointRequest = struct(
  n0,
  _COER,
  0,
  [_A, _CI, _CP, _DP, _D, _HP, _I, _MN, _MP, _O, _SWS, _T, _TDS, _W],
  [
    [
      () => Authorization,
      {
        [_jN]: _au,
      },
    ],
    [
      0,
      {
        [_jN]: _cI,
      },
    ],
    [
      () => CmafPackageCreateOrUpdateParameters,
      {
        [_jN]: _cP,
      },
    ],
    [
      () => DashPackage,
      {
        [_jN]: _dP,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      () => HlsPackage,
      {
        [_jN]: _hP,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _mN,
      },
    ],
    [
      () => MssPackage,
      {
        [_jN]: _mP,
      },
    ],
    [
      0,
      {
        [_jN]: _o,
      },
    ],
    [
      1,
      {
        [_jN]: _sWS,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    [
      1,
      {
        [_jN]: _tDS,
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
export var CreateOriginEndpointResponse = struct(
  n0,
  _COERr,
  0,
  [_Ar, _A, _CI, _CP, _CA, _DP, _D, _HP, _I, _MN, _MP, _O, _SWS, _T, _TDS, _U, _W],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      () => Authorization,
      {
        [_jN]: _au,
      },
    ],
    [
      0,
      {
        [_jN]: _cI,
      },
    ],
    [
      () => CmafPackage,
      {
        [_jN]: _cP,
      },
    ],
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      () => DashPackage,
      {
        [_jN]: _dP,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      () => HlsPackage,
      {
        [_jN]: _hP,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _mN,
      },
    ],
    [
      () => MssPackage,
      {
        [_jN]: _mP,
      },
    ],
    [
      0,
      {
        [_jN]: _o,
      },
    ],
    [
      1,
      {
        [_jN]: _sWS,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    [
      1,
      {
        [_jN]: _tDS,
      },
    ],
    [
      0,
      {
        [_jN]: _u,
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
export var DashEncryption = struct(
  n0,
  _DE,
  0,
  [_KRIS, _SKP],
  [
    [
      1,
      {
        [_jN]: _kRIS,
      },
    ],
    [
      () => SpekeKeyProvider,
      {
        [_jN]: _sKP,
      },
    ],
  ]
);
export var DashPackage = struct(
  n0,
  _DP,
  0,
  [_AT, _AODR, _E, _IIOS, _ML, _MWS, _MBTS, _MUPS, _PT, _P, _SDS, _STF, _SSt, _SPDS, _UT, _UTU],
  [
    [
      64 | 0,
      {
        [_jN]: _aT,
      },
    ],
    [
      0,
      {
        [_jN]: _aODR,
      },
    ],
    [
      () => DashEncryption,
      {
        [_jN]: _e,
      },
    ],
    [
      2,
      {
        [_jN]: _iIOS,
      },
    ],
    [
      0,
      {
        [_jN]: _mL,
      },
    ],
    [
      1,
      {
        [_jN]: _mWS,
      },
    ],
    [
      1,
      {
        [_jN]: _mBTS,
      },
    ],
    [
      1,
      {
        [_jN]: _mUPS,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _pT,
      },
    ],
    [
      0,
      {
        [_jN]: _p,
      },
    ],
    [
      1,
      {
        [_jN]: _sDS,
      },
    ],
    [
      0,
      {
        [_jN]: _sTF,
      },
    ],
    [
      () => StreamSelection,
      {
        [_jN]: _sS,
      },
    ],
    [
      1,
      {
        [_jN]: _sPDS,
      },
    ],
    [
      0,
      {
        [_jN]: _uT,
      },
    ],
    [
      0,
      {
        [_jN]: _uTU,
      },
    ],
  ]
);
export var DescribeChannelRequest = struct(n0, _DCRes, 0, [_I], [[0, 1]]);
export var DescribeChannelResponse = struct(
  n0,
  _DCResc,
  0,
  [_Ar, _CA, _D, _EAL, _HI, _I, _IAL, _T],
  [
    [
      0,
      {
        [_jN]: _a,
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
      () => EgressAccessLogs,
      {
        [_jN]: _eAL,
      },
    ],
    [
      () => HlsIngest,
      {
        [_jN]: _hI,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => IngressAccessLogs,
      {
        [_jN]: _iAL,
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
export var DescribeOriginEndpointRequest = struct(n0, _DOERes, 0, [_I], [[0, 1]]);
export var DescribeOriginEndpointResponse = struct(
  n0,
  _DOEResc,
  0,
  [_Ar, _A, _CI, _CP, _CA, _DP, _D, _HP, _I, _MN, _MP, _O, _SWS, _T, _TDS, _U, _W],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      () => Authorization,
      {
        [_jN]: _au,
      },
    ],
    [
      0,
      {
        [_jN]: _cI,
      },
    ],
    [
      () => CmafPackage,
      {
        [_jN]: _cP,
      },
    ],
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      () => DashPackage,
      {
        [_jN]: _dP,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      () => HlsPackage,
      {
        [_jN]: _hP,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _mN,
      },
    ],
    [
      () => MssPackage,
      {
        [_jN]: _mP,
      },
    ],
    [
      0,
      {
        [_jN]: _o,
      },
    ],
    [
      1,
      {
        [_jN]: _sWS,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    [
      1,
      {
        [_jN]: _tDS,
      },
    ],
    [
      0,
      {
        [_jN]: _u,
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
export var EgressAccessLogs = struct(
  n0,
  _EAL,
  0,
  [_LGN],
  [
    [
      0,
      {
        [_jN]: _lGN,
      },
    ],
  ]
);
export var EncryptionContractConfiguration = struct(
  n0,
  _ECC,
  0,
  [_PSA, _PSV],
  [
    [
      0,
      {
        [_jN]: _pSA,
      },
    ],
    [
      0,
      {
        [_jN]: _pSV,
      },
    ],
  ]
);
export var HlsEncryption = struct(
  n0,
  _HE,
  0,
  [_CIV, _EM, _KRIS, _REXK, _SKP],
  [
    [
      0,
      {
        [_jN]: _cIV,
      },
    ],
    [
      0,
      {
        [_jN]: _eM,
      },
    ],
    [
      1,
      {
        [_jN]: _kRIS,
      },
    ],
    [
      2,
      {
        [_jN]: _rEXK,
      },
    ],
    [
      () => SpekeKeyProvider,
      {
        [_jN]: _sKP,
      },
    ],
  ]
);
export var HlsIngest = struct(
  n0,
  _HI,
  0,
  [_IE],
  [
    [
      () => __listOfIngestEndpoint,
      {
        [_jN]: _iE,
      },
    ],
  ]
);
export var HlsManifest = struct(
  n0,
  _HMl,
  0,
  [_AM, _I, _IIOS, _MN, _PTl, _PWS, _PDTIS, _U, _AT, _AODR],
  [
    [
      0,
      {
        [_jN]: _aM,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      2,
      {
        [_jN]: _iIOS,
      },
    ],
    [
      0,
      {
        [_jN]: _mN,
      },
    ],
    [
      0,
      {
        [_jN]: _pTl,
      },
    ],
    [
      1,
      {
        [_jN]: _pWS,
      },
    ],
    [
      1,
      {
        [_jN]: _pDTIS,
      },
    ],
    [
      0,
      {
        [_jN]: _u,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aT,
      },
    ],
    [
      0,
      {
        [_jN]: _aODR,
      },
    ],
  ]
);
export var HlsManifestCreateOrUpdateParameters = struct(
  n0,
  _HMCOUP,
  0,
  [_AM, _AT, _AODR, _I, _IIOS, _MN, _PTl, _PWS, _PDTIS],
  [
    [
      0,
      {
        [_jN]: _aM,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aT,
      },
    ],
    [
      0,
      {
        [_jN]: _aODR,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      2,
      {
        [_jN]: _iIOS,
      },
    ],
    [
      0,
      {
        [_jN]: _mN,
      },
    ],
    [
      0,
      {
        [_jN]: _pTl,
      },
    ],
    [
      1,
      {
        [_jN]: _pWS,
      },
    ],
    [
      1,
      {
        [_jN]: _pDTIS,
      },
    ],
  ]
);
export var HlsPackage = struct(
  n0,
  _HP,
  0,
  [_AM, _AT, _AODR, _E, _IDS, _IIOS, _PTl, _PWS, _PDTIS, _SDS, _SSt, _UARG],
  [
    [
      0,
      {
        [_jN]: _aM,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aT,
      },
    ],
    [
      0,
      {
        [_jN]: _aODR,
      },
    ],
    [
      () => HlsEncryption,
      {
        [_jN]: _e,
      },
    ],
    [
      2,
      {
        [_jN]: _iDS,
      },
    ],
    [
      2,
      {
        [_jN]: _iIOS,
      },
    ],
    [
      0,
      {
        [_jN]: _pTl,
      },
    ],
    [
      1,
      {
        [_jN]: _pWS,
      },
    ],
    [
      1,
      {
        [_jN]: _pDTIS,
      },
    ],
    [
      1,
      {
        [_jN]: _sDS,
      },
    ],
    [
      () => StreamSelection,
      {
        [_jN]: _sS,
      },
    ],
    [
      2,
      {
        [_jN]: _uARG,
      },
    ],
  ]
);
export var IngestEndpoint = struct(
  n0,
  _IEn,
  0,
  [_I, _Pa, _U, _Us],
  [
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => SensitiveString,
      {
        [_jN]: _pa,
      },
    ],
    [
      0,
      {
        [_jN]: _u,
      },
    ],
    [
      () => SensitiveString,
      {
        [_jN]: _us,
      },
    ],
  ]
);
export var IngressAccessLogs = struct(
  n0,
  _IAL,
  0,
  [_LGN],
  [
    [
      0,
      {
        [_jN]: _lGN,
      },
    ],
  ]
);
export var ListChannelsRequest = struct(
  n0,
  _LCR,
  0,
  [_MR, _NT],
  [
    [
      1,
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
export var ListChannelsResponse = struct(
  n0,
  _LCRi,
  0,
  [_Ch, _NT],
  [
    [
      () => __listOfChannel,
      {
        [_jN]: _ch,
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
export var ListOriginEndpointsRequest = struct(
  n0,
  _LOER,
  0,
  [_CI, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _cI,
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
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListOriginEndpointsResponse = struct(
  n0,
  _LOERi,
  0,
  [_NT, _OE],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => __listOfOriginEndpoint,
      {
        [_jN]: _oE,
      },
    ],
  ]
);
export var MssEncryption = struct(
  n0,
  _ME,
  0,
  [_SKP],
  [
    [
      () => SpekeKeyProvider,
      {
        [_jN]: _sKP,
      },
    ],
  ]
);
export var MssPackage = struct(
  n0,
  _MP,
  0,
  [_E, _MWS, _SDS, _SSt],
  [
    [
      () => MssEncryption,
      {
        [_jN]: _e,
      },
    ],
    [
      1,
      {
        [_jN]: _mWS,
      },
    ],
    [
      1,
      {
        [_jN]: _sDS,
      },
    ],
    [
      () => StreamSelection,
      {
        [_jN]: _sS,
      },
    ],
  ]
);
export var OriginEndpoint = struct(
  n0,
  _OEr,
  0,
  [_Ar, _A, _CI, _CP, _CA, _DP, _D, _HP, _I, _MN, _MP, _O, _SWS, _T, _TDS, _U, _W],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      () => Authorization,
      {
        [_jN]: _au,
      },
    ],
    [
      0,
      {
        [_jN]: _cI,
      },
    ],
    [
      () => CmafPackage,
      {
        [_jN]: _cP,
      },
    ],
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      () => DashPackage,
      {
        [_jN]: _dP,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      () => HlsPackage,
      {
        [_jN]: _hP,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _mN,
      },
    ],
    [
      () => MssPackage,
      {
        [_jN]: _mP,
      },
    ],
    [
      0,
      {
        [_jN]: _o,
      },
    ],
    [
      1,
      {
        [_jN]: _sWS,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    [
      1,
      {
        [_jN]: _tDS,
      },
    ],
    [
      0,
      {
        [_jN]: _u,
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
export var RotateChannelCredentialsRequest = struct(n0, _RCCR, 0, [_I], [[0, 1]]);
export var RotateChannelCredentialsResponse = struct(
  n0,
  _RCCRo,
  0,
  [_Ar, _CA, _D, _EAL, _HI, _I, _IAL, _T],
  [
    [
      0,
      {
        [_jN]: _a,
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
      () => EgressAccessLogs,
      {
        [_jN]: _eAL,
      },
    ],
    [
      () => HlsIngest,
      {
        [_jN]: _hI,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => IngressAccessLogs,
      {
        [_jN]: _iAL,
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
export var RotateIngestEndpointCredentialsRequest = struct(
  n0,
  _RIECR,
  0,
  [_I, _IEI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var RotateIngestEndpointCredentialsResponse = struct(
  n0,
  _RIECRo,
  0,
  [_Ar, _CA, _D, _EAL, _HI, _I, _IAL, _T],
  [
    [
      0,
      {
        [_jN]: _a,
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
      () => EgressAccessLogs,
      {
        [_jN]: _eAL,
      },
    ],
    [
      () => HlsIngest,
      {
        [_jN]: _hI,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => IngressAccessLogs,
      {
        [_jN]: _iAL,
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
export var SpekeKeyProvider = struct(
  n0,
  _SKP,
  0,
  [_CAe, _ECC, _RI, _RAo, _SI, _U],
  [
    [
      0,
      {
        [_jN]: _cAe,
      },
    ],
    [
      () => EncryptionContractConfiguration,
      {
        [_jN]: _eCC,
      },
    ],
    [
      0,
      {
        [_jN]: _rI,
      },
    ],
    [
      0,
      {
        [_jN]: _rA,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sI,
      },
    ],
    [
      0,
      {
        [_jN]: _u,
      },
    ],
  ]
);
export var StreamSelection = struct(
  n0,
  _SSt,
  0,
  [_MVBPS, _MVBPSi, _SO],
  [
    [
      1,
      {
        [_jN]: _mVBPS,
      },
    ],
    [
      1,
      {
        [_jN]: _mVBPSi,
      },
    ],
    [
      0,
      {
        [_jN]: _sO,
      },
    ],
  ]
);
export var UpdateChannelRequest = struct(
  n0,
  _UCR,
  0,
  [_D, _I],
  [
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [0, 1],
  ]
);
export var UpdateChannelResponse = struct(
  n0,
  _UCRp,
  0,
  [_Ar, _CA, _D, _EAL, _HI, _I, _IAL, _T],
  [
    [
      0,
      {
        [_jN]: _a,
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
      () => EgressAccessLogs,
      {
        [_jN]: _eAL,
      },
    ],
    [
      () => HlsIngest,
      {
        [_jN]: _hI,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => IngressAccessLogs,
      {
        [_jN]: _iAL,
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
export var UpdateOriginEndpointRequest = struct(
  n0,
  _UOER,
  0,
  [_A, _CP, _DP, _D, _HP, _I, _MN, _MP, _O, _SWS, _TDS, _W],
  [
    [
      () => Authorization,
      {
        [_jN]: _au,
      },
    ],
    [
      () => CmafPackageCreateOrUpdateParameters,
      {
        [_jN]: _cP,
      },
    ],
    [
      () => DashPackage,
      {
        [_jN]: _dP,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      () => HlsPackage,
      {
        [_jN]: _hP,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_jN]: _mN,
      },
    ],
    [
      () => MssPackage,
      {
        [_jN]: _mP,
      },
    ],
    [
      0,
      {
        [_jN]: _o,
      },
    ],
    [
      1,
      {
        [_jN]: _sWS,
      },
    ],
    [
      1,
      {
        [_jN]: _tDS,
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
export var UpdateOriginEndpointResponse = struct(
  n0,
  _UOERp,
  0,
  [_Ar, _A, _CI, _CP, _CA, _DP, _D, _HP, _I, _MN, _MP, _O, _SWS, _T, _TDS, _U, _W],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      () => Authorization,
      {
        [_jN]: _au,
      },
    ],
    [
      0,
      {
        [_jN]: _cI,
      },
    ],
    [
      () => CmafPackage,
      {
        [_jN]: _cP,
      },
    ],
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      () => DashPackage,
      {
        [_jN]: _dP,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      () => HlsPackage,
      {
        [_jN]: _hP,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _mN,
      },
    ],
    [
      () => MssPackage,
      {
        [_jN]: _mP,
      },
    ],
    [
      0,
      {
        [_jN]: _o,
      },
    ],
    [
      1,
      {
        [_jN]: _sWS,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    [
      1,
      {
        [_jN]: _tDS,
      },
    ],
    [
      0,
      {
        [_jN]: _u,
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
export var __listOf__PeriodTriggersElement = 64 | 0;

export var __listOfChannel = list(n0, _lOC, 0, [() => Channel, 0]);
export var __listOfHlsManifest = list(n0, _lOHM, 0, [() => HlsManifest, 0]);
export var __listOfHlsManifestCreateOrUpdateParameters = list(n0, _lOHMCOUP, 0, [
  () => HlsManifestCreateOrUpdateParameters,
  0,
]);
export var __listOfIngestEndpoint = list(n0, _lOIE, 0, [() => IngestEndpoint, 0]);
export var __listOfOriginEndpoint = list(n0, _lOOE, 0, [() => OriginEndpoint, 0]);
export var AdTriggers = 64 | 0;

export var Tags = 128 | 0;

export var ConfigureLogs = op(
  n0,
  _CL,
  {
    [_h]: ["PUT", "/channels/{Id}/configure_logs", 200],
  },
  () => ConfigureLogsRequest,
  () => ConfigureLogsResponse
);
export var CreateChannel = op(
  n0,
  _CC,
  {
    [_h]: ["POST", "/channels", 200],
  },
  () => CreateChannelRequest,
  () => CreateChannelResponse
);
export var CreateOriginEndpoint = op(
  n0,
  _COE,
  {
    [_h]: ["POST", "/origin_endpoints", 200],
  },
  () => CreateOriginEndpointRequest,
  () => CreateOriginEndpointResponse
);
export var DescribeChannel = op(
  n0,
  _DCe,
  {
    [_h]: ["GET", "/channels/{Id}", 200],
  },
  () => DescribeChannelRequest,
  () => DescribeChannelResponse
);
export var DescribeOriginEndpoint = op(
  n0,
  _DOEe,
  {
    [_h]: ["GET", "/origin_endpoints/{Id}", 200],
  },
  () => DescribeOriginEndpointRequest,
  () => DescribeOriginEndpointResponse
);
export var ListChannels = op(
  n0,
  _LC,
  {
    [_h]: ["GET", "/channels", 200],
  },
  () => ListChannelsRequest,
  () => ListChannelsResponse
);
export var ListOriginEndpoints = op(
  n0,
  _LOE,
  {
    [_h]: ["GET", "/origin_endpoints", 200],
  },
  () => ListOriginEndpointsRequest,
  () => ListOriginEndpointsResponse
);
export var RotateChannelCredentials = op(
  n0,
  _RCC,
  {
    [_h]: ["PUT", "/channels/{Id}/credentials", 200],
  },
  () => RotateChannelCredentialsRequest,
  () => RotateChannelCredentialsResponse
);
export var RotateIngestEndpointCredentials = op(
  n0,
  _RIEC,
  {
    [_h]: ["PUT", "/channels/{Id}/ingest_endpoints/{IngestEndpointId}/credentials", 200],
  },
  () => RotateIngestEndpointCredentialsRequest,
  () => RotateIngestEndpointCredentialsResponse
);
export var UpdateChannel = op(
  n0,
  _UC,
  {
    [_h]: ["PUT", "/channels/{Id}", 200],
  },
  () => UpdateChannelRequest,
  () => UpdateChannelResponse
);
export var UpdateOriginEndpoint = op(
  n0,
  _UOE,
  {
    [_h]: ["PUT", "/origin_endpoints/{Id}", 200],
  },
  () => UpdateOriginEndpointRequest,
  () => UpdateOriginEndpointResponse
);

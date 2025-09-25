// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _AAC,
  _aAC,
  _AM,
  _aM,
  _AS,
  _As,
  _as,
  _Au,
  _au,
  _CA,
  _cA,
  _CAR,
  _CAr,
  _CARr,
  _CE,
  _CIS,
  _cIS,
  _CIV,
  _cIV,
  _CL,
  _CLR,
  _CLRo,
  _CP,
  _cP,
  _CPC,
  _CPCR,
  _CPCRr,
  _CPG,
  _CPGR,
  _CPGRr,
  _DAe,
  _DARes,
  _DAResc,
  _DE,
  _DM,
  _dM,
  _DMa,
  _DN,
  _dN,
  _DP,
  _dP,
  _DPCe,
  _DPCRes,
  _DPCResc,
  _DPGe,
  _DPGRes,
  _DPGResc,
  _E,
  _e,
  _EAL,
  _eAL,
  _ECC,
  _eCC,
  _EE,
  _eE,
  _EEg,
  _EM,
  _eM,
  _h,
  _HE,
  _HM,
  _hM,
  _HMl,
  _HP,
  _hP,
  _hQ,
  _I,
  _i,
  _IDS,
  _iDS,
  _IECIS,
  _iECIS,
  _IIOS,
  _iIOS,
  _jN,
  _LA,
  _LAR,
  _LARi,
  _LGN,
  _lGN,
  _lOAS,
  _lODM,
  _lOEE,
  _lOHM,
  _lOMM,
  _lOPC,
  _lOPG,
  _LPC,
  _LPCR,
  _LPCRi,
  _LPG,
  _LPGR,
  _LPGRi,
  _MBTS,
  _mBTS,
  _ME,
  _ML,
  _mL,
  _MM,
  _mM,
  _MMs,
  _MN,
  _mN,
  _MP,
  _mP,
  _MR,
  _mR,
  _MVBPS,
  _mVBPS,
  _MVBPSi,
  _mVBPSi,
  _NT,
  _nT,
  _P,
  _p,
  _PC,
  _pC,
  _PCa,
  _PCI,
  _pCI,
  _PDTIS,
  _pDTIS,
  _PG,
  _pG,
  _PGa,
  _PGI,
  _pGI,
  _PSA,
  _pSA,
  _PSV,
  _pSV,
  _PT,
  _pT,
  _rA,
  _RAo,
  _REXK,
  _rEXK,
  _RI,
  _rI,
  _S,
  _s,
  _SA,
  _sA,
  _SDS,
  _sDS,
  _SI,
  _sI,
  _SKP,
  _sKP,
  _SMS,
  _sMS,
  _SO,
  _sO,
  _SRA,
  _sRA,
  _SRAe,
  _sRAe,
  _SS,
  _sS,
  _STF,
  _sTF,
  _T,
  _t,
  _U,
  _u,
  _UARG,
  _uARG,
  _UPG,
  _UPGR,
  _UPGRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssetShallow = struct(
  n0,
  _AS,
  0,
  [_A, _CA, _I, _PGI, _RI, _SA, _SRA, _T],
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
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _pGI,
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
        [_jN]: _sA,
      },
    ],
    [
      0,
      {
        [_jN]: _sRA,
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
export var Authorization = struct(
  n0,
  _Au,
  0,
  [_CIS, _SRAe],
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
        [_jN]: _sRAe,
      },
    ],
  ]
);
export var CmafEncryption = struct(
  n0,
  _CE,
  0,
  [_CIV, _SKP],
  [
    [
      0,
      {
        [_jN]: _cIV,
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
  [_E, _HM, _IECIS, _SDS],
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
      2,
      {
        [_jN]: _iECIS,
      },
    ],
    [
      1,
      {
        [_jN]: _sDS,
      },
    ],
  ]
);
export var ConfigureLogsRequest = struct(
  n0,
  _CLR,
  0,
  [_EAL, _I],
  [
    [
      () => EgressAccessLogs,
      {
        [_jN]: _eAL,
      },
    ],
    [0, 1],
  ]
);
export var ConfigureLogsResponse = struct(
  n0,
  _CLRo,
  0,
  [_A, _Au, _CA, _DN, _EAL, _I, _T],
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
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _dN,
      },
    ],
    [
      () => EgressAccessLogs,
      {
        [_jN]: _eAL,
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
export var CreateAssetRequest = struct(
  n0,
  _CAR,
  0,
  [_I, _PGI, _RI, _SA, _SRA, _T],
  [
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _pGI,
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
        [_jN]: _sA,
      },
    ],
    [
      0,
      {
        [_jN]: _sRA,
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
export var CreateAssetResponse = struct(
  n0,
  _CARr,
  0,
  [_A, _CA, _EE, _I, _PGI, _RI, _SA, _SRA, _T],
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
      () => __listOfEgressEndpoint,
      {
        [_jN]: _eE,
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
        [_jN]: _pGI,
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
        [_jN]: _sA,
      },
    ],
    [
      0,
      {
        [_jN]: _sRA,
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
export var CreatePackagingConfigurationRequest = struct(
  n0,
  _CPCR,
  0,
  [_CP, _DP, _HP, _I, _MP, _PGI, _T],
  [
    [
      () => CmafPackage,
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
      () => MssPackage,
      {
        [_jN]: _mP,
      },
    ],
    [
      0,
      {
        [_jN]: _pGI,
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
export var CreatePackagingConfigurationResponse = struct(
  n0,
  _CPCRr,
  0,
  [_A, _CP, _CA, _DP, _HP, _I, _MP, _PGI, _T],
  [
    [
      0,
      {
        [_jN]: _a,
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
      () => MssPackage,
      {
        [_jN]: _mP,
      },
    ],
    [
      0,
      {
        [_jN]: _pGI,
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
export var CreatePackagingGroupRequest = struct(
  n0,
  _CPGR,
  0,
  [_Au, _EAL, _I, _T],
  [
    [
      () => Authorization,
      {
        [_jN]: _au,
      },
    ],
    [
      () => EgressAccessLogs,
      {
        [_jN]: _eAL,
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
export var CreatePackagingGroupResponse = struct(
  n0,
  _CPGRr,
  0,
  [_A, _Au, _CA, _DN, _EAL, _I, _T],
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
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _dN,
      },
    ],
    [
      () => EgressAccessLogs,
      {
        [_jN]: _eAL,
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
export var DashEncryption = struct(
  n0,
  _DE,
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
export var DashManifest = struct(
  n0,
  _DM,
  0,
  [_ML, _MN, _MBTS, _P, _SMS, _SS],
  [
    [
      0,
      {
        [_jN]: _mL,
      },
    ],
    [
      0,
      {
        [_jN]: _mN,
      },
    ],
    [
      1,
      {
        [_jN]: _mBTS,
      },
    ],
    [
      0,
      {
        [_jN]: _p,
      },
    ],
    [
      0,
      {
        [_jN]: _sMS,
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
export var DashPackage = struct(
  n0,
  _DP,
  0,
  [_DMa, _E, _IECIS, _IIOS, _PT, _SDS, _STF],
  [
    [
      () => __listOfDashManifest,
      {
        [_jN]: _dM,
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
        [_jN]: _iECIS,
      },
    ],
    [
      2,
      {
        [_jN]: _iIOS,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _pT,
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
  ]
);
export var DescribeAssetRequest = struct(n0, _DARes, 0, [_I], [[0, 1]]);
export var DescribeAssetResponse = struct(
  n0,
  _DAResc,
  0,
  [_A, _CA, _EE, _I, _PGI, _RI, _SA, _SRA, _T],
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
      () => __listOfEgressEndpoint,
      {
        [_jN]: _eE,
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
        [_jN]: _pGI,
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
        [_jN]: _sA,
      },
    ],
    [
      0,
      {
        [_jN]: _sRA,
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
export var DescribePackagingConfigurationRequest = struct(n0, _DPCRes, 0, [_I], [[0, 1]]);
export var DescribePackagingConfigurationResponse = struct(
  n0,
  _DPCResc,
  0,
  [_A, _CP, _CA, _DP, _HP, _I, _MP, _PGI, _T],
  [
    [
      0,
      {
        [_jN]: _a,
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
      () => MssPackage,
      {
        [_jN]: _mP,
      },
    ],
    [
      0,
      {
        [_jN]: _pGI,
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
export var DescribePackagingGroupRequest = struct(n0, _DPGRes, 0, [_I], [[0, 1]]);
export var DescribePackagingGroupResponse = struct(
  n0,
  _DPGResc,
  0,
  [_AAC, _A, _Au, _CA, _DN, _EAL, _I, _T],
  [
    [
      1,
      {
        [_jN]: _aAC,
      },
    ],
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
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _dN,
      },
    ],
    [
      () => EgressAccessLogs,
      {
        [_jN]: _eAL,
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
export var EgressEndpoint = struct(
  n0,
  _EEg,
  0,
  [_PCI, _S, _U],
  [
    [
      0,
      {
        [_jN]: _pCI,
      },
    ],
    [
      0,
      {
        [_jN]: _s,
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
  [_CIV, _EM, _SKP],
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
      () => SpekeKeyProvider,
      {
        [_jN]: _sKP,
      },
    ],
  ]
);
export var HlsManifest = struct(
  n0,
  _HMl,
  0,
  [_AM, _IIOS, _MN, _PDTIS, _REXK, _SS],
  [
    [
      0,
      {
        [_jN]: _aM,
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
      1,
      {
        [_jN]: _pDTIS,
      },
    ],
    [
      2,
      {
        [_jN]: _rEXK,
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
export var HlsPackage = struct(
  n0,
  _HP,
  0,
  [_E, _HM, _IDS, _SDS, _UARG],
  [
    [
      () => HlsEncryption,
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
      2,
      {
        [_jN]: _iDS,
      },
    ],
    [
      1,
      {
        [_jN]: _sDS,
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
export var ListAssetsRequest = struct(
  n0,
  _LAR,
  0,
  [_MR, _NT, _PGI],
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
    [
      0,
      {
        [_hQ]: _pGI,
      },
    ],
  ]
);
export var ListAssetsResponse = struct(
  n0,
  _LARi,
  0,
  [_As, _NT],
  [
    [
      () => __listOfAssetShallow,
      {
        [_jN]: _as,
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
export var ListPackagingConfigurationsRequest = struct(
  n0,
  _LPCR,
  0,
  [_MR, _NT, _PGI],
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
    [
      0,
      {
        [_hQ]: _pGI,
      },
    ],
  ]
);
export var ListPackagingConfigurationsResponse = struct(
  n0,
  _LPCRi,
  0,
  [_NT, _PC],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => __listOfPackagingConfiguration,
      {
        [_jN]: _pC,
      },
    ],
  ]
);
export var ListPackagingGroupsRequest = struct(
  n0,
  _LPGR,
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
export var ListPackagingGroupsResponse = struct(
  n0,
  _LPGRi,
  0,
  [_NT, _PG],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => __listOfPackagingGroup,
      {
        [_jN]: _pG,
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
export var MssManifest = struct(
  n0,
  _MM,
  0,
  [_MN, _SS],
  [
    [
      0,
      {
        [_jN]: _mN,
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
export var MssPackage = struct(
  n0,
  _MP,
  0,
  [_E, _MMs, _SDS],
  [
    [
      () => MssEncryption,
      {
        [_jN]: _e,
      },
    ],
    [
      () => __listOfMssManifest,
      {
        [_jN]: _mM,
      },
    ],
    [
      1,
      {
        [_jN]: _sDS,
      },
    ],
  ]
);
export var PackagingConfiguration = struct(
  n0,
  _PCa,
  0,
  [_A, _CP, _CA, _DP, _HP, _I, _MP, _PGI, _T],
  [
    [
      0,
      {
        [_jN]: _a,
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
      () => MssPackage,
      {
        [_jN]: _mP,
      },
    ],
    [
      0,
      {
        [_jN]: _pGI,
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
export var PackagingGroup = struct(
  n0,
  _PGa,
  0,
  [_AAC, _A, _Au, _CA, _DN, _EAL, _I, _T],
  [
    [
      1,
      {
        [_jN]: _aAC,
      },
    ],
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
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _dN,
      },
    ],
    [
      () => EgressAccessLogs,
      {
        [_jN]: _eAL,
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
export var SpekeKeyProvider = struct(
  n0,
  _SKP,
  0,
  [_ECC, _RAo, _SI, _U],
  [
    [
      () => EncryptionContractConfiguration,
      {
        [_jN]: _eCC,
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
  _SS,
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
export var UpdatePackagingGroupRequest = struct(
  n0,
  _UPGR,
  0,
  [_Au, _I],
  [
    [
      () => Authorization,
      {
        [_jN]: _au,
      },
    ],
    [0, 1],
  ]
);
export var UpdatePackagingGroupResponse = struct(
  n0,
  _UPGRp,
  0,
  [_AAC, _A, _Au, _CA, _DN, _EAL, _I, _T],
  [
    [
      1,
      {
        [_jN]: _aAC,
      },
    ],
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
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _dN,
      },
    ],
    [
      () => EgressAccessLogs,
      {
        [_jN]: _eAL,
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
export var Unit = "unit" as const;

export var __listOf__PeriodTriggersElement = 64 | 0;

export var __listOfAssetShallow = list(n0, _lOAS, 0, [() => AssetShallow, 0]);
export var __listOfDashManifest = list(n0, _lODM, 0, [() => DashManifest, 0]);
export var __listOfEgressEndpoint = list(n0, _lOEE, 0, [() => EgressEndpoint, 0]);
export var __listOfHlsManifest = list(n0, _lOHM, 0, [() => HlsManifest, 0]);
export var __listOfMssManifest = list(n0, _lOMM, 0, [() => MssManifest, 0]);
export var __listOfPackagingConfiguration = list(n0, _lOPC, 0, [() => PackagingConfiguration, 0]);
export var __listOfPackagingGroup = list(n0, _lOPG, 0, [() => PackagingGroup, 0]);
export var Tags = 128 | 0;

export var ConfigureLogs = op(
  n0,
  _CL,
  {
    [_h]: ["PUT", "/packaging_groups/{Id}/configure_logs", 200],
  },
  () => ConfigureLogsRequest,
  () => ConfigureLogsResponse
);
export var CreateAsset = op(
  n0,
  _CAr,
  {
    [_h]: ["POST", "/assets", 200],
  },
  () => CreateAssetRequest,
  () => CreateAssetResponse
);
export var CreatePackagingConfiguration = op(
  n0,
  _CPC,
  {
    [_h]: ["POST", "/packaging_configurations", 200],
  },
  () => CreatePackagingConfigurationRequest,
  () => CreatePackagingConfigurationResponse
);
export var CreatePackagingGroup = op(
  n0,
  _CPG,
  {
    [_h]: ["POST", "/packaging_groups", 200],
  },
  () => CreatePackagingGroupRequest,
  () => CreatePackagingGroupResponse
);
export var DescribeAsset = op(
  n0,
  _DAe,
  {
    [_h]: ["GET", "/assets/{Id}", 200],
  },
  () => DescribeAssetRequest,
  () => DescribeAssetResponse
);
export var DescribePackagingConfiguration = op(
  n0,
  _DPCe,
  {
    [_h]: ["GET", "/packaging_configurations/{Id}", 200],
  },
  () => DescribePackagingConfigurationRequest,
  () => DescribePackagingConfigurationResponse
);
export var DescribePackagingGroup = op(
  n0,
  _DPGe,
  {
    [_h]: ["GET", "/packaging_groups/{Id}", 200],
  },
  () => DescribePackagingGroupRequest,
  () => DescribePackagingGroupResponse
);
export var ListAssets = op(
  n0,
  _LA,
  {
    [_h]: ["GET", "/assets", 200],
  },
  () => ListAssetsRequest,
  () => ListAssetsResponse
);
export var ListPackagingConfigurations = op(
  n0,
  _LPC,
  {
    [_h]: ["GET", "/packaging_configurations", 200],
  },
  () => ListPackagingConfigurationsRequest,
  () => ListPackagingConfigurationsResponse
);
export var ListPackagingGroups = op(
  n0,
  _LPG,
  {
    [_h]: ["GET", "/packaging_groups", 200],
  },
  () => ListPackagingGroupsRequest,
  () => ListPackagingGroupsResponse
);
export var UpdatePackagingGroup = op(
  n0,
  _UPG,
  {
    [_h]: ["PUT", "/packaging_groups/{Id}", 200],
  },
  () => UpdatePackagingGroupRequest,
  () => UpdatePackagingGroupResponse
);

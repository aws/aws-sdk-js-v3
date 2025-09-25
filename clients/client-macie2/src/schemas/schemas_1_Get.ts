// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _a,
  _AAw,
  _aAw,
  _ACD,
  _aCD,
  _ACL,
  _aCL,
  _act,
  _acto,
  _aDFTSD,
  _aDMS,
  _aI,
  _aKI,
  _ALP,
  _aLP,
  _aN,
  _an,
  _aO,
  _aOs,
  _ap,
  _aPRA,
  _aPWA,
  _AR,
  _aR,
  _ar,
  _AS,
  _aS,
  _as,
  _aSN,
  _aT,
  _at,
  _aUOU,
  _b,
  _bA,
  _BC,
  _bCA,
  _BCAP,
  _bCu,
  _bD,
  _BLP,
  _bLP,
  _BM,
  _bN,
  _BP,
  _bP,
  _BPA,
  _bPA,
  _bPAl,
  _BPAu,
  _BPC,
  _bPP,
  _BSC,
  _BSSE,
  _C,
  _cA,
  _ca,
  _cBG,
  _CD,
  _cD,
  _CDI,
  _cDI,
  _cDr,
  _CDu,
  _CDus,
  _Ce,
  _ce,
  _cM,
  _cN,
  _co,
  _cOC,
  _col,
  _com,
  _cou,
  _CR,
  _cR,
  _cr,
  _CRS,
  _cSIB,
  _cu,
  _d,
  _DB,
  _DBR,
  _DBRe,
  _DD,
  _dD,
  _DDe,
  _DDo,
  _det,
  _dN,
  _dNi,
  _dRL,
  _dSSE,
  _eC,
  _eCs,
  _eM,
  _en,
  _eP,
  _eq,
  _eT,
  _eTn,
  _exc,
  _ext,
  _F,
  _f,
  _FA,
  _FAi,
  _fB,
  _fC,
  _fCi,
  _fI,
  _fS,
  _FSSC,
  _fTSD,
  _FU,
  _fU,
  _g,
  _gB,
  _GC,
  _GF,
  _GFR,
  _GFRe,
  _GFS,
  _GFSR,
  _GFSRe,
  _gK,
  _gt,
  _GUS,
  _GUSR,
  _GUSRe,
  _h,
  _i,
  _IAD,
  _iAD,
  _iAV,
  _iB,
  _IC,
  _ICp,
  _iCp,
  _iCpo,
  _iDIJ,
  _IGL,
  _iGL,
  _iMBJ,
  _inc,
  _IO,
  _iO,
  _iPA,
  _is,
  _iSL,
  _it,
  _IU,
  _iU,
  _jA,
  _JD,
  _jD,
  _jI,
  _jN,
  _jP,
  _JS,
  _jS,
  _jT,
  _ke,
  _kM,
  _kMKI,
  _KVP,
  _KVPL,
  _l,
  _la,
  _lADT,
  _LCJ,
  _LCJR,
  _LCJRi,
  _LF,
  _LFR,
  _LFRi,
  _LJFC,
  _LJFT,
  _lJI,
  _lJRT,
  _LJSC,
  _lM,
  _lo,
  _lOBM,
  _lOF,
  _lOGC,
  _lOJS,
  _lOKVP,
  _lOLJFT,
  _lOMR,
  _lOSRC,
  _lOSRTCP,
  _lOUBA,
  _lOUR,
  _lOUSF,
  _lR,
  _lRES,
  _lRi,
  _lS,
  _lt,
  _lU,
  _mAf,
  _MB,
  _mB,
  _MR,
  _mR,
  _mRa,
  _mT,
  _n,
  _ne,
  _nT,
  _O,
  _o,
  _oB,
  _oC,
  _OCBET,
  _oCBET,
  _oR,
  _or,
  _oRf,
  _oT,
  _ow,
  _P,
  _p,
  _Pa,
  _pa,
  _pag,
  _pat,
  _pAu,
  _pC,
  _PD,
  _pD,
  _pI,
  _pN,
  _R,
  _RA,
  _Ra,
  _rA,
  _rAep,
  _RD,
  _rD,
  _Re,
  _rE,
  _re,
  _rea,
  _Rec,
  _rec,
  _rep,
  _res,
  _rI,
  _ro,
  _roo,
  _rPB,
  _s,
  _sA,
  _sa,
  _SB,
  _sB,
  _SBO,
  _sBu,
  _SC,
  _sC,
  _SCA,
  _sCi,
  _sCim,
  _SCo,
  _sCo,
  _sco,
  _sCt,
  _sCta,
  _SDe,
  _sDe,
  _SDI,
  _Se,
  _sev,
  _SI,
  _sI,
  _si,
  _sIB,
  _sIBC,
  _SL,
  _sLe,
  _sM,
  _SO,
  _sO,
  _SR,
  _SRBC,
  _SRC,
  _SRCB,
  _SRR,
  _SRRe,
  _SRSC,
  _SRSCe,
  _SRTC,
  _SRTCP,
  _sS,
  _SSE,
  _sSE,
  _sta,
  _sV,
  _t,
  _tC,
  _tCo,
  _ti,
  _tR,
  _tV,
  _ty,
  _u,
  _uA,
  _UBA,
  _UI,
  _uI,
  _UIR,
  _uN,
  _un,
  _uni,
  _uOC,
  _uOSIB,
  _uPD,
  _UR,
  _us,
  _USF,
  _USSB,
  _v,
  _va,
  _val,
  _vI,
  n0,
} from "./schemas_0";
import {
  __listOfS3BucketDefinitionForJob,
  LastRunErrorStatus,
  S3BucketCriteriaForJob,
  UserPausedDetails,
} from "./schemas_6_Classification";
import { ObjectLevelStatistics } from "./schemas_12_Bucket";
import { FindingCriteria } from "./schemas_34_Findings";

/* eslint no-var: 0 */

export var AccessControlList = struct(
  n0,
  _ACL,
  0,
  [_aPRA, _aPWA],
  [
    [
      2,
      {
        [_jN]: _aPRA,
      },
    ],
    [
      2,
      {
        [_jN]: _aPWA,
      },
    ],
  ]
);
export var AccountLevelPermissions = struct(
  n0,
  _ALP,
  0,
  [_bPA],
  [
    [
      () => BlockPublicAccess,
      {
        [_jN]: _bPA,
      },
    ],
  ]
);
export var ApiCallDetails = struct(
  n0,
  _ACD,
  0,
  [_ap, _aSN, _fS, _lS],
  [
    [
      0,
      {
        [_jN]: _ap,
      },
    ],
    [
      0,
      {
        [_jN]: _aSN,
      },
    ],
    [
      5,
      {
        [_jN]: _fS,
      },
    ],
    [
      5,
      {
        [_jN]: _lS,
      },
    ],
  ]
);
export var AssumedRole = struct(
  n0,
  _AR,
  0,
  [_aKI, _aI, _a, _pI, _sC],
  [
    [
      0,
      {
        [_jN]: _aKI,
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
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _pI,
      },
    ],
    [
      () => SessionContext,
      {
        [_jN]: _sC,
      },
    ],
  ]
);
export var AwsAccount = struct(
  n0,
  _AAw,
  0,
  [_aI, _pI],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _pI,
      },
    ],
  ]
);
export var AwsService = struct(
  n0,
  _AS,
  0,
  [_iB],
  [
    [
      0,
      {
        [_jN]: _iB,
      },
    ],
  ]
);
export var BlockPublicAccess = struct(
  n0,
  _BPA,
  0,
  [_bPAl, _bPP, _iPA, _rPB],
  [
    [
      2,
      {
        [_jN]: _bPAl,
      },
    ],
    [
      2,
      {
        [_jN]: _bPP,
      },
    ],
    [
      2,
      {
        [_jN]: _iPA,
      },
    ],
    [
      2,
      {
        [_jN]: _rPB,
      },
    ],
  ]
);
export var BucketCriteriaAdditionalProperties = struct(
  n0,
  _BCAP,
  0,
  [_eq, _g, _gt, _l, _lt, _ne, _p],
  [
    [
      64 | 0,
      {
        [_jN]: _eq,
      },
    ],
    [
      1,
      {
        [_jN]: _g,
      },
    ],
    [
      1,
      {
        [_jN]: _gt,
      },
    ],
    [
      1,
      {
        [_jN]: _l,
      },
    ],
    [
      1,
      {
        [_jN]: _lt,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _ne,
      },
    ],
    [
      0,
      {
        [_jN]: _p,
      },
    ],
  ]
);
export var BucketLevelPermissions = struct(
  n0,
  _BLP,
  0,
  [_aCL, _bPA, _bP],
  [
    [
      () => AccessControlList,
      {
        [_jN]: _aCL,
      },
    ],
    [
      () => BlockPublicAccess,
      {
        [_jN]: _bPA,
      },
    ],
    [
      () => BucketPolicy,
      {
        [_jN]: _bP,
      },
    ],
  ]
);
export var BucketMetadata = struct(
  n0,
  _BM,
  0,
  [
    _aI,
    _aUOU,
    _aDMS,
    _bA,
    _bCA,
    _bN,
    _cOC,
    _cSIB,
    _eC,
    _eM,
    _jD,
    _lADT,
    _lU,
    _oC,
    _oCBET,
    _pAu,
    _re,
    _rD,
    _sS,
    _sSE,
    _sA,
    _sIB,
    _sIBC,
    _t,
    _uOC,
    _uOSIB,
    _v,
  ],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _aUOU,
      },
    ],
    [
      0,
      {
        [_jN]: _aDMS,
      },
    ],
    [
      0,
      {
        [_jN]: _bA,
      },
    ],
    [
      5,
      {
        [_jN]: _bCA,
      },
    ],
    [
      0,
      {
        [_jN]: _bN,
      },
    ],
    [
      1,
      {
        [_jN]: _cOC,
      },
    ],
    [
      1,
      {
        [_jN]: _cSIB,
      },
    ],
    [
      0,
      {
        [_jN]: _eC,
      },
    ],
    [
      0,
      {
        [_jN]: _eM,
      },
    ],
    [
      () => JobDetails,
      {
        [_jN]: _jD,
      },
    ],
    [
      5,
      {
        [_jN]: _lADT,
      },
    ],
    [
      5,
      {
        [_jN]: _lU,
      },
    ],
    [
      1,
      {
        [_jN]: _oC,
      },
    ],
    [
      () => ObjectCountByEncryptionType,
      {
        [_jN]: _oCBET,
      },
    ],
    [
      () => BucketPublicAccess,
      {
        [_jN]: _pAu,
      },
    ],
    [
      0,
      {
        [_jN]: _re,
      },
    ],
    [
      () => ReplicationDetails,
      {
        [_jN]: _rD,
      },
    ],
    [
      1,
      {
        [_jN]: _sS,
      },
    ],
    [
      () => BucketServerSideEncryption,
      {
        [_jN]: _sSE,
      },
    ],
    [
      0,
      {
        [_jN]: _sA,
      },
    ],
    [
      1,
      {
        [_jN]: _sIB,
      },
    ],
    [
      1,
      {
        [_jN]: _sIBC,
      },
    ],
    [
      () => __listOfKeyValuePair,
      {
        [_jN]: _t,
      },
    ],
    [
      () => ObjectLevelStatistics,
      {
        [_jN]: _uOC,
      },
    ],
    [
      () => ObjectLevelStatistics,
      {
        [_jN]: _uOSIB,
      },
    ],
    [
      2,
      {
        [_jN]: _v,
      },
    ],
  ]
);
export var BucketPermissionConfiguration = struct(
  n0,
  _BPC,
  0,
  [_aLP, _bLP],
  [
    [
      () => AccountLevelPermissions,
      {
        [_jN]: _aLP,
      },
    ],
    [
      () => BucketLevelPermissions,
      {
        [_jN]: _bLP,
      },
    ],
  ]
);
export var BucketPolicy = struct(
  n0,
  _BP,
  0,
  [_aPRA, _aPWA],
  [
    [
      2,
      {
        [_jN]: _aPRA,
      },
    ],
    [
      2,
      {
        [_jN]: _aPWA,
      },
    ],
  ]
);
export var BucketPublicAccess = struct(
  n0,
  _BPAu,
  0,
  [_eP, _pC],
  [
    [
      0,
      {
        [_jN]: _eP,
      },
    ],
    [
      () => BucketPermissionConfiguration,
      {
        [_jN]: _pC,
      },
    ],
  ]
);
export var BucketServerSideEncryption = struct(
  n0,
  _BSSE,
  0,
  [_kMKI, _ty],
  [
    [
      0,
      {
        [_jN]: _kMKI,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
  ]
);
export var BucketSortCriteria = struct(
  n0,
  _BSC,
  0,
  [_aN, _oB],
  [
    [
      0,
      {
        [_jN]: _aN,
      },
    ],
    [
      0,
      {
        [_jN]: _oB,
      },
    ],
  ]
);
export var Cell = struct(
  n0,
  _C,
  0,
  [_cR, _col, _cN, _ro],
  [
    [
      0,
      {
        [_jN]: _cR,
      },
    ],
    [
      1,
      {
        [_jN]: _col,
      },
    ],
    [
      0,
      {
        [_jN]: _cN,
      },
    ],
    [
      1,
      {
        [_jN]: _ro,
      },
    ],
  ]
);
export var ClassificationDetails = struct(
  n0,
  _CD,
  0,
  [_dRL, _jA, _jI, _oT, _res],
  [
    [
      0,
      {
        [_jN]: _dRL,
      },
    ],
    [
      0,
      {
        [_jN]: _jA,
      },
    ],
    [
      0,
      {
        [_jN]: _jI,
      },
    ],
    [
      0,
      {
        [_jN]: _oT,
      },
    ],
    [
      () => ClassificationResult,
      {
        [_jN]: _res,
      },
    ],
  ]
);
export var ClassificationResult = struct(
  n0,
  _CR,
  0,
  [_aO, _cDI, _mT, _sDe, _sCi, _s],
  [
    [
      2,
      {
        [_jN]: _aO,
      },
    ],
    [
      () => CustomDataIdentifiers,
      {
        [_jN]: _cDI,
      },
    ],
    [
      0,
      {
        [_jN]: _mT,
      },
    ],
    [
      () => SensitiveData,
      {
        [_jN]: _sDe,
      },
    ],
    [
      1,
      {
        [_jN]: _sCi,
      },
    ],
    [
      () => ClassificationResultStatus,
      {
        [_jN]: _s,
      },
    ],
  ]
);
export var ClassificationResultStatus = struct(
  n0,
  _CRS,
  0,
  [_co, _rea],
  [
    [
      0,
      {
        [_jN]: _co,
      },
    ],
    [
      0,
      {
        [_jN]: _rea,
      },
    ],
  ]
);
export var CustomDataIdentifiers = struct(
  n0,
  _CDI,
  0,
  [_det, _tCo],
  [
    [
      () => CustomDetections,
      {
        [_jN]: _det,
      },
    ],
    [
      1,
      {
        [_jN]: _tCo,
      },
    ],
  ]
);
export var CustomDetection = struct(
  n0,
  _CDu,
  0,
  [_a, _cou, _n, _o],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      1,
      {
        [_jN]: _cou,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => Occurrences,
      {
        [_jN]: _o,
      },
    ],
  ]
);
export var DefaultDetection = struct(
  n0,
  _DD,
  0,
  [_cou, _o, _ty],
  [
    [
      1,
      {
        [_jN]: _cou,
      },
    ],
    [
      () => Occurrences,
      {
        [_jN]: _o,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
  ]
);
export var DescribeBucketsRequest = struct(
  n0,
  _DBR,
  0,
  [_cr, _mR, _nT, _sCo],
  [
    [
      () => BucketCriteria,
      {
        [_jN]: _cr,
      },
    ],
    [
      1,
      {
        [_jN]: _mR,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => BucketSortCriteria,
      {
        [_jN]: _sCo,
      },
    ],
  ]
);
export var DescribeBucketsResponse = struct(
  n0,
  _DBRe,
  0,
  [_b, _nT],
  [
    [
      () => __listOfBucketMetadata,
      {
        [_jN]: _b,
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
export var DomainDetails = struct(
  n0,
  _DDo,
  0,
  [_dN],
  [
    [
      0,
      {
        [_jN]: _dN,
      },
    ],
  ]
);
export var FederatedUser = struct(
  n0,
  _FU,
  0,
  [_aKI, _aI, _a, _pI, _sC],
  [
    [
      0,
      {
        [_jN]: _aKI,
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
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _pI,
      },
    ],
    [
      () => SessionContext,
      {
        [_jN]: _sC,
      },
    ],
  ]
);
export var Finding = struct(
  n0,
  _F,
  0,
  [_aI, _ar, _ca, _cD, _cou, _cA, _d, _i, _pa, _pD, _re, _rA, _sa, _sV, _sev, _ti, _ty, _uA],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      2,
      {
        [_jN]: _ar,
      },
    ],
    [
      0,
      {
        [_jN]: _ca,
      },
    ],
    [
      () => ClassificationDetails,
      {
        [_jN]: _cD,
      },
    ],
    [
      1,
      {
        [_jN]: _cou,
      },
    ],
    [
      5,
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
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _pa,
      },
    ],
    [
      () => PolicyDetails,
      {
        [_jN]: _pD,
      },
    ],
    [
      0,
      {
        [_jN]: _re,
      },
    ],
    [
      () => ResourcesAffected,
      {
        [_jN]: _rA,
      },
    ],
    [
      2,
      {
        [_jN]: _sa,
      },
    ],
    [
      0,
      {
        [_jN]: _sV,
      },
    ],
    [
      () => Severity,
      {
        [_jN]: _sev,
      },
    ],
    [
      0,
      {
        [_jN]: _ti,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
    [
      5,
      {
        [_jN]: _uA,
      },
    ],
  ]
);
export var FindingAction = struct(
  n0,
  _FA,
  0,
  [_aT, _aCD],
  [
    [
      0,
      {
        [_jN]: _aT,
      },
    ],
    [
      () => ApiCallDetails,
      {
        [_jN]: _aCD,
      },
    ],
  ]
);
export var FindingActor = struct(
  n0,
  _FAi,
  0,
  [_dD, _iAD, _uI],
  [
    [
      () => DomainDetails,
      {
        [_jN]: _dD,
      },
    ],
    [
      () => IpAddressDetails,
      {
        [_jN]: _iAD,
      },
    ],
    [
      () => UserIdentity,
      {
        [_jN]: _uI,
      },
    ],
  ]
);
export var FindingStatisticsSortCriteria = struct(
  n0,
  _FSSC,
  0,
  [_aN, _oB],
  [
    [
      0,
      {
        [_jN]: _aN,
      },
    ],
    [
      0,
      {
        [_jN]: _oB,
      },
    ],
  ]
);
export var GetFindingsRequest = struct(
  n0,
  _GFR,
  0,
  [_fI, _sCo],
  [
    [
      64 | 0,
      {
        [_jN]: _fI,
      },
    ],
    [
      () => SortCriteria,
      {
        [_jN]: _sCo,
      },
    ],
  ]
);
export var GetFindingsResponse = struct(
  n0,
  _GFRe,
  0,
  [_f],
  [
    [
      () => __listOfFinding,
      {
        [_jN]: _f,
      },
    ],
  ]
);
export var GetFindingStatisticsRequest = struct(
  n0,
  _GFSR,
  0,
  [_fC, _gB, _si, _sCo],
  [
    [
      () => FindingCriteria,
      {
        [_jN]: _fC,
      },
    ],
    [
      0,
      {
        [_jN]: _gB,
      },
    ],
    [
      1,
      {
        [_jN]: _si,
      },
    ],
    [
      () => FindingStatisticsSortCriteria,
      {
        [_jN]: _sCo,
      },
    ],
  ]
);
export var GetFindingStatisticsResponse = struct(
  n0,
  _GFSRe,
  0,
  [_cBG],
  [
    [
      () => __listOfGroupCount,
      {
        [_jN]: _cBG,
      },
    ],
  ]
);
export var GetUsageStatisticsRequest = struct(
  n0,
  _GUSR,
  0,
  [_fB, _mR, _nT, _sB, _tR],
  [
    [
      () => __listOfUsageStatisticsFilter,
      {
        [_jN]: _fB,
      },
    ],
    [
      1,
      {
        [_jN]: _mR,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => UsageStatisticsSortBy,
      {
        [_jN]: _sB,
      },
    ],
    [
      0,
      {
        [_jN]: _tR,
      },
    ],
  ]
);
export var GetUsageStatisticsResponse = struct(
  n0,
  _GUSRe,
  0,
  [_nT, _rec, _tR],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => __listOfUsageRecord,
      {
        [_jN]: _rec,
      },
    ],
    [
      0,
      {
        [_jN]: _tR,
      },
    ],
  ]
);
export var GroupCount = struct(
  n0,
  _GC,
  0,
  [_cou, _gK],
  [
    [
      1,
      {
        [_jN]: _cou,
      },
    ],
    [
      0,
      {
        [_jN]: _gK,
      },
    ],
  ]
);
export var IamUser = struct(
  n0,
  _IU,
  0,
  [_aI, _a, _pI, _uN],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _pI,
      },
    ],
    [
      0,
      {
        [_jN]: _uN,
      },
    ],
  ]
);
export var IpAddressDetails = struct(
  n0,
  _IAD,
  0,
  [_iAV, _iCp, _iCpo, _iGL, _iO],
  [
    [
      0,
      {
        [_jN]: _iAV,
      },
    ],
    [
      () => IpCity,
      {
        [_jN]: _iCp,
      },
    ],
    [
      () => IpCountry,
      {
        [_jN]: _iCpo,
      },
    ],
    [
      () => IpGeoLocation,
      {
        [_jN]: _iGL,
      },
    ],
    [
      () => IpOwner,
      {
        [_jN]: _iO,
      },
    ],
  ]
);
export var IpCity = struct(
  n0,
  _IC,
  0,
  [_n],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
  ]
);
export var IpCountry = struct(
  n0,
  _ICp,
  0,
  [_co, _n],
  [
    [
      0,
      {
        [_jN]: _co,
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
export var IpGeoLocation = struct(
  n0,
  _IGL,
  0,
  [_la, _lo],
  [
    [
      1,
      {
        [_jN]: _la,
      },
    ],
    [
      1,
      {
        [_jN]: _lo,
      },
    ],
  ]
);
export var IpOwner = struct(
  n0,
  _IO,
  0,
  [_as, _aOs, _is, _or],
  [
    [
      0,
      {
        [_jN]: _as,
      },
    ],
    [
      0,
      {
        [_jN]: _aOs,
      },
    ],
    [
      0,
      {
        [_jN]: _is,
      },
    ],
    [
      0,
      {
        [_jN]: _or,
      },
    ],
  ]
);
export var JobDetails = struct(
  n0,
  _JD,
  0,
  [_iDIJ, _iMBJ, _lJI, _lJRT],
  [
    [
      0,
      {
        [_jN]: _iDIJ,
      },
    ],
    [
      0,
      {
        [_jN]: _iMBJ,
      },
    ],
    [
      0,
      {
        [_jN]: _lJI,
      },
    ],
    [
      5,
      {
        [_jN]: _lJRT,
      },
    ],
  ]
);
export var JobSummary = struct(
  n0,
  _JS,
  0,
  [_bCu, _bD, _cA, _jI, _jS, _jT, _lRES, _n, _uPD],
  [
    [
      () => S3BucketCriteriaForJob,
      {
        [_jN]: _bCu,
      },
    ],
    [
      () => __listOfS3BucketDefinitionForJob,
      {
        [_jN]: _bD,
      },
    ],
    [
      5,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _jI,
      },
    ],
    [
      0,
      {
        [_jN]: _jS,
      },
    ],
    [
      0,
      {
        [_jN]: _jT,
      },
    ],
    [
      () => LastRunErrorStatus,
      {
        [_jN]: _lRES,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => UserPausedDetails,
      {
        [_jN]: _uPD,
      },
    ],
  ]
);
export var KeyValuePair = struct(
  n0,
  _KVP,
  0,
  [_ke, _va],
  [
    [
      0,
      {
        [_jN]: _ke,
      },
    ],
    [
      0,
      {
        [_jN]: _va,
      },
    ],
  ]
);
export var ListClassificationJobsRequest = struct(
  n0,
  _LCJR,
  0,
  [_fCi, _mR, _nT, _sCo],
  [
    [
      () => ListJobsFilterCriteria,
      {
        [_jN]: _fCi,
      },
    ],
    [
      1,
      {
        [_jN]: _mR,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => ListJobsSortCriteria,
      {
        [_jN]: _sCo,
      },
    ],
  ]
);
export var ListClassificationJobsResponse = struct(
  n0,
  _LCJRi,
  0,
  [_it, _nT],
  [
    [
      () => __listOfJobSummary,
      {
        [_jN]: _it,
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
export var ListFindingsRequest = struct(
  n0,
  _LFR,
  0,
  [_fC, _mR, _nT, _sCo],
  [
    [
      () => FindingCriteria,
      {
        [_jN]: _fC,
      },
    ],
    [
      1,
      {
        [_jN]: _mR,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => SortCriteria,
      {
        [_jN]: _sCo,
      },
    ],
  ]
);
export var ListFindingsResponse = struct(
  n0,
  _LFRi,
  0,
  [_fI, _nT],
  [
    [
      64 | 0,
      {
        [_jN]: _fI,
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
export var ListJobsFilterCriteria = struct(
  n0,
  _LJFC,
  0,
  [_exc, _inc],
  [
    [
      () => __listOfListJobsFilterTerm,
      {
        [_jN]: _exc,
      },
    ],
    [
      () => __listOfListJobsFilterTerm,
      {
        [_jN]: _inc,
      },
    ],
  ]
);
export var ListJobsFilterTerm = struct(
  n0,
  _LJFT,
  0,
  [_com, _ke, _val],
  [
    [
      0,
      {
        [_jN]: _com,
      },
    ],
    [
      0,
      {
        [_jN]: _ke,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _val,
      },
    ],
  ]
);
export var ListJobsSortCriteria = struct(
  n0,
  _LJSC,
  0,
  [_aN, _oB],
  [
    [
      0,
      {
        [_jN]: _aN,
      },
    ],
    [
      0,
      {
        [_jN]: _oB,
      },
    ],
  ]
);
export var MatchingBucket = struct(
  n0,
  _MB,
  0,
  [_aI, _aDMS, _bN, _cOC, _cSIB, _eC, _eM, _jD, _lADT, _oC, _oCBET, _sS, _sIB, _sIBC, _uOC, _uOSIB],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _aDMS,
      },
    ],
    [
      0,
      {
        [_jN]: _bN,
      },
    ],
    [
      1,
      {
        [_jN]: _cOC,
      },
    ],
    [
      1,
      {
        [_jN]: _cSIB,
      },
    ],
    [
      0,
      {
        [_jN]: _eC,
      },
    ],
    [
      0,
      {
        [_jN]: _eM,
      },
    ],
    [
      () => JobDetails,
      {
        [_jN]: _jD,
      },
    ],
    [
      5,
      {
        [_jN]: _lADT,
      },
    ],
    [
      1,
      {
        [_jN]: _oC,
      },
    ],
    [
      () => ObjectCountByEncryptionType,
      {
        [_jN]: _oCBET,
      },
    ],
    [
      1,
      {
        [_jN]: _sS,
      },
    ],
    [
      1,
      {
        [_jN]: _sIB,
      },
    ],
    [
      1,
      {
        [_jN]: _sIBC,
      },
    ],
    [
      () => ObjectLevelStatistics,
      {
        [_jN]: _uOC,
      },
    ],
    [
      () => ObjectLevelStatistics,
      {
        [_jN]: _uOSIB,
      },
    ],
  ]
);
export var MatchingResource = struct(
  n0,
  _MR,
  0,
  [_mB],
  [
    [
      () => MatchingBucket,
      {
        [_jN]: _mB,
      },
    ],
  ]
);
export var ObjectCountByEncryptionType = struct(
  n0,
  _OCBET,
  0,
  [_cM, _kM, _sM, _un, _u],
  [
    [
      1,
      {
        [_jN]: _cM,
      },
    ],
    [
      1,
      {
        [_jN]: _kM,
      },
    ],
    [
      1,
      {
        [_jN]: _sM,
      },
    ],
    [
      1,
      {
        [_jN]: _un,
      },
    ],
    [
      1,
      {
        [_jN]: _u,
      },
    ],
  ]
);
export var Occurrences = struct(
  n0,
  _O,
  0,
  [_ce, _lR, _oR, _pag, _rec],
  [
    [
      () => Cells,
      {
        [_jN]: _ce,
      },
    ],
    [
      () => Ranges,
      {
        [_jN]: _lR,
      },
    ],
    [
      () => Ranges,
      {
        [_jN]: _oR,
      },
    ],
    [
      () => Pages,
      {
        [_jN]: _pag,
      },
    ],
    [
      () => Records,
      {
        [_jN]: _rec,
      },
    ],
  ]
);
export var Page = struct(
  n0,
  _P,
  0,
  [_lRi, _oRf, _pN],
  [
    [
      () => Range,
      {
        [_jN]: _lRi,
      },
    ],
    [
      () => Range,
      {
        [_jN]: _oRf,
      },
    ],
    [
      1,
      {
        [_jN]: _pN,
      },
    ],
  ]
);
export var PolicyDetails = struct(
  n0,
  _PD,
  0,
  [_act, _acto],
  [
    [
      () => FindingAction,
      {
        [_jN]: _act,
      },
    ],
    [
      () => FindingActor,
      {
        [_jN]: _acto,
      },
    ],
  ]
);
export var Range = struct(
  n0,
  _R,
  0,
  [_en, _sta, _sCta],
  [
    [
      1,
      {
        [_jN]: _en,
      },
    ],
    [
      1,
      {
        [_jN]: _sta,
      },
    ],
    [
      1,
      {
        [_jN]: _sCta,
      },
    ],
  ]
);
export var _Record = struct(
  n0,
  _Re,
  0,
  [_jP, _rI],
  [
    [
      0,
      {
        [_jN]: _jP,
      },
    ],
    [
      1,
      {
        [_jN]: _rI,
      },
    ],
  ]
);
export var ReplicationDetails = struct(
  n0,
  _RD,
  0,
  [_rep, _rE, _rAep],
  [
    [
      2,
      {
        [_jN]: _rep,
      },
    ],
    [
      2,
      {
        [_jN]: _rE,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _rAep,
      },
    ],
  ]
);
export var ResourcesAffected = struct(
  n0,
  _RA,
  0,
  [_sBu, _sO],
  [
    [
      () => S3Bucket,
      {
        [_jN]: _sBu,
      },
    ],
    [
      () => S3Object,
      {
        [_jN]: _sO,
      },
    ],
  ]
);
export var S3Bucket = struct(
  n0,
  _SB,
  0,
  [_aUOU, _a, _cA, _dSSE, _n, _ow, _pAu, _t],
  [
    [
      0,
      {
        [_jN]: _aUOU,
      },
    ],
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      5,
      {
        [_jN]: _cA,
      },
    ],
    [
      () => ServerSideEncryption,
      {
        [_jN]: _dSSE,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => S3BucketOwner,
      {
        [_jN]: _ow,
      },
    ],
    [
      () => BucketPublicAccess,
      {
        [_jN]: _pAu,
      },
    ],
    [
      () => KeyValuePairList,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var S3BucketOwner = struct(
  n0,
  _SBO,
  0,
  [_dNi, _i],
  [
    [
      0,
      {
        [_jN]: _dNi,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
  ]
);
export var S3Object = struct(
  n0,
  _SO,
  0,
  [_bA, _eT, _ext, _ke, _lM, _pat, _pAu, _sSE, _si, _sCt, _t, _vI],
  [
    [
      0,
      {
        [_jN]: _bA,
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
        [_jN]: _ext,
      },
    ],
    [
      0,
      {
        [_jN]: _ke,
      },
    ],
    [
      5,
      {
        [_jN]: _lM,
      },
    ],
    [
      0,
      {
        [_jN]: _pat,
      },
    ],
    [
      2,
      {
        [_jN]: _pAu,
      },
    ],
    [
      () => ServerSideEncryption,
      {
        [_jN]: _sSE,
      },
    ],
    [
      1,
      {
        [_jN]: _si,
      },
    ],
    [
      0,
      {
        [_jN]: _sCt,
      },
    ],
    [
      () => KeyValuePairList,
      {
        [_jN]: _t,
      },
    ],
    [
      0,
      {
        [_jN]: _vI,
      },
    ],
  ]
);
export var SearchResourcesBucketCriteria = struct(
  n0,
  _SRBC,
  0,
  [_exc, _inc],
  [
    [
      () => SearchResourcesCriteriaBlock,
      {
        [_jN]: _exc,
      },
    ],
    [
      () => SearchResourcesCriteriaBlock,
      {
        [_jN]: _inc,
      },
    ],
  ]
);
export var SearchResourcesCriteria = struct(
  n0,
  _SRC,
  0,
  [_sCim, _tC],
  [
    [
      () => SearchResourcesSimpleCriterion,
      {
        [_jN]: _sCim,
      },
    ],
    [
      () => SearchResourcesTagCriterion,
      {
        [_jN]: _tC,
      },
    ],
  ]
);
export var SearchResourcesCriteriaBlock = struct(
  n0,
  _SRCB,
  0,
  [_an],
  [
    [
      () => __listOfSearchResourcesCriteria,
      {
        [_jN]: _an,
      },
    ],
  ]
);
export var SearchResourcesRequest = struct(
  n0,
  _SRR,
  0,
  [_bCu, _mR, _nT, _sCo],
  [
    [
      () => SearchResourcesBucketCriteria,
      {
        [_jN]: _bCu,
      },
    ],
    [
      1,
      {
        [_jN]: _mR,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => SearchResourcesSortCriteria,
      {
        [_jN]: _sCo,
      },
    ],
  ]
);
export var SearchResourcesResponse = struct(
  n0,
  _SRRe,
  0,
  [_mRa, _nT],
  [
    [
      () => __listOfMatchingResource,
      {
        [_jN]: _mRa,
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
export var SearchResourcesSimpleCriterion = struct(
  n0,
  _SRSC,
  0,
  [_com, _ke, _val],
  [
    [
      0,
      {
        [_jN]: _com,
      },
    ],
    [
      0,
      {
        [_jN]: _ke,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _val,
      },
    ],
  ]
);
export var SearchResourcesSortCriteria = struct(
  n0,
  _SRSCe,
  0,
  [_aN, _oB],
  [
    [
      0,
      {
        [_jN]: _aN,
      },
    ],
    [
      0,
      {
        [_jN]: _oB,
      },
    ],
  ]
);
export var SearchResourcesTagCriterion = struct(
  n0,
  _SRTC,
  0,
  [_com, _tV],
  [
    [
      0,
      {
        [_jN]: _com,
      },
    ],
    [
      () => __listOfSearchResourcesTagCriterionPair,
      {
        [_jN]: _tV,
      },
    ],
  ]
);
export var SearchResourcesTagCriterionPair = struct(
  n0,
  _SRTCP,
  0,
  [_ke, _va],
  [
    [
      0,
      {
        [_jN]: _ke,
      },
    ],
    [
      0,
      {
        [_jN]: _va,
      },
    ],
  ]
);
export var SensitiveDataItem = struct(
  n0,
  _SDI,
  0,
  [_ca, _det, _tCo],
  [
    [
      0,
      {
        [_jN]: _ca,
      },
    ],
    [
      () => DefaultDetections,
      {
        [_jN]: _det,
      },
    ],
    [
      1,
      {
        [_jN]: _tCo,
      },
    ],
  ]
);
export var ServerSideEncryption = struct(
  n0,
  _SSE,
  0,
  [_eTn, _kMKI],
  [
    [
      0,
      {
        [_jN]: _eTn,
      },
    ],
    [
      0,
      {
        [_jN]: _kMKI,
      },
    ],
  ]
);
export var ServiceLimit = struct(
  n0,
  _SL,
  0,
  [_iSL, _uni, _va],
  [
    [
      2,
      {
        [_jN]: _iSL,
      },
    ],
    [
      0,
      {
        [_jN]: _uni,
      },
    ],
    [
      1,
      {
        [_jN]: _va,
      },
    ],
  ]
);
export var SessionContext = struct(
  n0,
  _SC,
  0,
  [_at, _sI],
  [
    [
      () => SessionContextAttributes,
      {
        [_jN]: _at,
      },
    ],
    [
      () => SessionIssuer,
      {
        [_jN]: _sI,
      },
    ],
  ]
);
export var SessionContextAttributes = struct(
  n0,
  _SCA,
  0,
  [_cDr, _mAf],
  [
    [
      5,
      {
        [_jN]: _cDr,
      },
    ],
    [
      2,
      {
        [_jN]: _mAf,
      },
    ],
  ]
);
export var SessionIssuer = struct(
  n0,
  _SI,
  0,
  [_aI, _a, _pI, _ty, _uN],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _pI,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
    [
      0,
      {
        [_jN]: _uN,
      },
    ],
  ]
);
export var Severity = struct(
  n0,
  _Se,
  0,
  [_d, _sco],
  [
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      1,
      {
        [_jN]: _sco,
      },
    ],
  ]
);
export var SortCriteria = struct(
  n0,
  _SCo,
  0,
  [_aN, _oB],
  [
    [
      0,
      {
        [_jN]: _aN,
      },
    ],
    [
      0,
      {
        [_jN]: _oB,
      },
    ],
  ]
);
export var UsageByAccount = struct(
  n0,
  _UBA,
  0,
  [_cu, _eCs, _sLe, _ty],
  [
    [
      0,
      {
        [_jN]: _cu,
      },
    ],
    [
      0,
      {
        [_jN]: _eCs,
      },
    ],
    [
      () => ServiceLimit,
      {
        [_jN]: _sLe,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
  ]
);
export var UsageRecord = struct(
  n0,
  _UR,
  0,
  [_aI, _aDFTSD, _fTSD, _us],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      5,
      {
        [_jN]: _aDFTSD,
      },
    ],
    [
      5,
      {
        [_jN]: _fTSD,
      },
    ],
    [
      () => __listOfUsageByAccount,
      {
        [_jN]: _us,
      },
    ],
  ]
);
export var UsageStatisticsFilter = struct(
  n0,
  _USF,
  0,
  [_com, _ke, _val],
  [
    [
      0,
      {
        [_jN]: _com,
      },
    ],
    [
      0,
      {
        [_jN]: _ke,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _val,
      },
    ],
  ]
);
export var UsageStatisticsSortBy = struct(
  n0,
  _USSB,
  0,
  [_ke, _oB],
  [
    [
      0,
      {
        [_jN]: _ke,
      },
    ],
    [
      0,
      {
        [_jN]: _oB,
      },
    ],
  ]
);
export var UserIdentity = struct(
  n0,
  _UI,
  0,
  [_aR, _aAw, _aS, _fU, _iU, _roo, _ty],
  [
    [
      () => AssumedRole,
      {
        [_jN]: _aR,
      },
    ],
    [
      () => AwsAccount,
      {
        [_jN]: _aAw,
      },
    ],
    [
      () => AwsService,
      {
        [_jN]: _aS,
      },
    ],
    [
      () => FederatedUser,
      {
        [_jN]: _fU,
      },
    ],
    [
      () => IamUser,
      {
        [_jN]: _iU,
      },
    ],
    [
      () => UserIdentityRoot,
      {
        [_jN]: _roo,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
  ]
);
export var UserIdentityRoot = struct(
  n0,
  _UIR,
  0,
  [_aI, _a, _pI],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _pI,
      },
    ],
  ]
);
export var __listOfBucketMetadata = list(n0, _lOBM, 0, [() => BucketMetadata, 0]);
export var __listOfFinding = list(n0, _lOF, 0, [() => Finding, 0]);
export var __listOfGroupCount = list(n0, _lOGC, 0, [() => GroupCount, 0]);
export var __listOfJobSummary = list(n0, _lOJS, 0, [() => JobSummary, 0]);
export var __listOfKeyValuePair = list(n0, _lOKVP, 0, [() => KeyValuePair, 0]);
export var __listOfListJobsFilterTerm = list(n0, _lOLJFT, 0, [() => ListJobsFilterTerm, 0]);
export var __listOfMatchingResource = list(n0, _lOMR, 0, [() => MatchingResource, 0]);
export var __listOfSearchResourcesCriteria = list(n0, _lOSRC, 0, [() => SearchResourcesCriteria, 0]);
export var __listOfSearchResourcesTagCriterionPair = list(n0, _lOSRTCP, 0, [() => SearchResourcesTagCriterionPair, 0]);
export var __listOfUsageByAccount = list(n0, _lOUBA, 0, [() => UsageByAccount, 0]);
export var __listOfUsageRecord = list(n0, _lOUR, 0, [() => UsageRecord, 0]);
export var __listOfUsageStatisticsFilter = list(n0, _lOUSF, 0, [() => UsageStatisticsFilter, 0]);
export var Cells = list(n0, _Ce, 0, [() => Cell, 0]);
export var CustomDetections = list(n0, _CDus, 0, [() => CustomDetection, 0]);
export var DefaultDetections = list(n0, _DDe, 0, [() => DefaultDetection, 0]);
export var KeyValuePairList = list(n0, _KVPL, 0, [() => KeyValuePair, 0]);
export var Pages = list(n0, _Pa, 0, [() => Page, 0]);
export var Ranges = list(n0, _Ra, 0, [() => Range, 0]);
export var Records = list(n0, _Rec, 0, [() => _Record, 0]);
export var SensitiveData = list(n0, _SDe, 0, [() => SensitiveDataItem, 0]);
export var BucketCriteria = map(n0, _BC, 0, [0, 0], [() => BucketCriteriaAdditionalProperties, 0]);
export var DescribeBuckets = op(
  n0,
  _DB,
  {
    [_h]: ["POST", "/datasources/s3", 200],
  },
  () => DescribeBucketsRequest,
  () => DescribeBucketsResponse
);
export var GetFindings = op(
  n0,
  _GF,
  {
    [_h]: ["POST", "/findings/describe", 200],
  },
  () => GetFindingsRequest,
  () => GetFindingsResponse
);
export var GetFindingStatistics = op(
  n0,
  _GFS,
  {
    [_h]: ["POST", "/findings/statistics", 200],
  },
  () => GetFindingStatisticsRequest,
  () => GetFindingStatisticsResponse
);
export var GetUsageStatistics = op(
  n0,
  _GUS,
  {
    [_h]: ["POST", "/usage/statistics", 200],
  },
  () => GetUsageStatisticsRequest,
  () => GetUsageStatisticsResponse
);
export var ListClassificationJobs = op(
  n0,
  _LCJ,
  {
    [_h]: ["POST", "/jobs/list", 200],
  },
  () => ListClassificationJobsRequest,
  () => ListClassificationJobsResponse
);
export var ListFindings = op(
  n0,
  _LF,
  {
    [_h]: ["POST", "/findings", 200],
  },
  () => ListFindingsRequest,
  () => ListFindingsResponse
);
export var SearchResources = op(
  n0,
  _SR,
  {
    [_h]: ["POST", "/datasources/search-resources", 200],
  },
  () => SearchResourcesRequest,
  () => SearchResourcesResponse
);
